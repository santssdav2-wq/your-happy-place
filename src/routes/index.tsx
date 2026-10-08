import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  Check,
  Shield,
  Lock,
  Zap,
  Download,
  Printer,
  Scissors,
  MousePointerClick,
  Gift,
  Star,
  ChevronDown,
  X,
} from "lucide-react";
import * as C from "@/components/landing/content";
import heroImg from "@/assets/hero-mockup.jpg";
import videoThumb from "@/assets/video-thumb.jpg";
import collection from "@/assets/collection.jpg";
import catLeggings from "@/assets/leggings.png";
import catTops from "@/assets/tops.png";
import catShorts from "@/assets/shorts.png";
import catCroppeds from "@/assets/croppeds.png";
import catConjuntos from "@/assets/conjuntos.png";
import catRegatas from "@/assets/regatas.png";
import catFeminino from "@/assets/feminino.png";
import catMasculino from "@/assets/masculino.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Moldes de Moda Fitness | Biblioteca de Modelagens" },
      {
        name: "description",
        content:
          "Biblioteca digital de moldes de moda fitness: leggings, tops, shorts, conjuntos, croppeds, regatas e mais. Acesso digital imediato.",
      },
      { property: "og:title", content: "+500 Moldes de Moda Fitness" },
      {
        property: "og:description",
        content: "Biblioteca organizada de moldes de moda fitness em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const navigate = (url: string) => {
  if (url && url !== "#") window.location.href = url;
};

const CtaButton = ({
  children,
  href = "#planos",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)] transition hover:-translate-y-0.5 sm:text-base ${className}`}
  >
    {children}
  </a>
);

const CheckoutButton = ({
  url,
  onClick,
  children,
  className = "",
}: {
  url: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={url}
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick(e);
      else navigate(url);
    }}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-center font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)] transition hover:-translate-y-0.5 sm:text-base ${className}`}
  >
    {children}
  </a>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="mb-3 inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
    {children}
  </span>
);
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
    {children}
  </h2>
);

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function TopBar() {
  const items = Array(6).fill(C.topBar);
  return (
    <div className="overflow-hidden bg-ink py-2 text-xs font-bold tracking-widest text-primary">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="text-center">
        <div className="mb-6 font-display text-sm font-extrabold uppercase tracking-[0.3em]">
          {C.brand}
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          <span className="relative inline-block">
            <span className="relative z-10">{C.hero.highlight}</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-primary md:h-6" />
          </span>{" "}
          <span className="block text-muted-foreground md:mt-2">{C.hero.rest}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {C.hero.sub}
        </p>
      </div>
      <div className="relative mx-auto mt-10 max-w-4xl">
        <img
          src={heroImg}
          alt="Mockup da biblioteca de moldes de moda fitness em celular e tablet com peças ao redor"
          width={1280}
          height={960}
          className="w-full rounded-3xl shadow-2xl"
        />
        <div className="absolute -bottom-5 left-1/2 flex w-[calc(100%-1rem)] -translate-x-1/2 flex-wrap justify-center gap-2">
          {C.hero.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold shadow-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-14 text-center">
        <CtaButton className="w-full max-w-md md:w-auto">{C.hero.cta}</CtaButton>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Lock className="h-4 w-4 shrink-0" />
          {C.hero.trust}
        </p>
      </div>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-3 overflow-x-auto px-5 md:justify-center">
        {C.benefits.map((b) => (
          <div
            key={b}
            className="flex shrink-0 snap-start items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold shadow-sm"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary">
              <Check className="h-3.5 w-3.5" />
            </span>
            {b}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProductContents() {
  return (
    <Section>
      <Reveal className="text-center">
        <Eyebrow>Incluído no acesso</Eyebrow>
        <H2>Tudo o que você recebe</H2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Uma biblioteca com modelos de moda fitness separados por categoria, para você escolher o
          que produzir a cada projeto.
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {C.contents.map((c, i) => (
          <Reveal key={c.title}>
            <div className="h-full rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:shadow-lg sm:p-5">
              <span className="font-display text-sm font-black text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-extrabold uppercase leading-tight sm:text-lg">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <img
          src={collection}
          alt="Miniaturas das peças da coleção de moldes fitness"
          loading="lazy"
          width={1280}
          height={896}
          className="h-48 w-full rounded-3xl object-cover md:h-72"
        />
      </Reveal>
    </Section>
  );
}

function Demo() {
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center">
        <Eyebrow>Demonstração</Eyebrow>
        <H2>Veja como é por dentro</H2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          A biblioteca é dividida por categoria. Você escolhe o modelo, prepara o arquivo e já parte
          para a produção.
        </p>
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        <div className="relative">
          <img
            src={videoThumb}
            alt="Por dentro da biblioteca de moldes de moda fitness"
            loading="lazy"
            width={720}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-bold text-primary">
            Por dentro da biblioteca
          </span>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {C.categories.map((c) => (
              <span key={c} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Cada categoria reúne diferentes modelos, para você variar sem precisar criar cada
            modelagem do zero.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Steps() {
  const icons = [MousePointerClick, Download, Printer, Scissors];
  return (
    <Section className="bg-ink text-ink-foreground">
      <Reveal className="text-center">
        <H2>
          Simples e <span className="text-primary">direto</span>
        </H2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {C.steps.map((s, i) => {
          const I = icons[i % icons.length]!;
          return (
            <Reveal key={s.title}>
              <div className="h-full rounded-2xl border border-ink-foreground/15 p-6">
                <div className="flex items-center justify-between">
                  <I className="h-7 w-7 text-primary" />
                  <span className="font-display text-4xl font-black text-ink-foreground/20">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-foreground/70">{s.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-10 text-center font-display text-lg font-bold sm:text-xl">
        Sem precisar começar cada peça do zero.
      </p>
    </Section>
  );
}

function Categories() {
  const catImages: Record<string, string> = {
    Leggings: catLeggings,
    Tops: catTops,
    Shorts: catShorts,
    Croppeds: catCroppeds,
    Conjuntos: catConjuntos,
    Regatas: catRegatas,
    Feminino: catFeminino,
    Masculino: catMasculino,
  };
  return (
    <Section>
      <Reveal className="text-center">
        <Eyebrow>Variedade</Eyebrow>
        <H2>Uma coleção para você nunca ficar sem ideias</H2>
      </Reveal>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-4 md:px-0">
        {C.categories.map((c) => (
          <div
            key={c}
            className="relative w-56 shrink-0 snap-start overflow-hidden rounded-2xl bg-secondary md:w-auto"
          >
            <img
              src={catImages[c]}
              alt={c}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-bold text-primary">
              {c}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CtaButton className="w-full max-w-md md:w-auto">{C.cta}</CtaButton>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center">
        <Eyebrow>Depoimentos</Eyebrow>
        <H2>O que dizem sobre a biblioteca</H2>
      </Reveal>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:px-0">
        {C.testimonials.map((t) => (
          <div
            key={t.name}
            className="w-72 shrink-0 snap-start rounded-3xl bg-card p-6 shadow-md sm:w-80 md:w-auto"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display font-black text-accent-foreground">
                {t.name[0]}
              </div>
              <div className="min-w-0">
                <div className="font-bold break-words">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl rounded-tl-sm bg-secondary p-4 text-sm leading-relaxed">
              “{t.text}”
            </div>
            <div className="mt-3 flex gap-0.5 text-accent">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Bonuses() {
  return (
    <Section className="bg-ink text-ink-foreground">
      <Reveal className="text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
          <Gift className="h-3.5 w-3.5" />
          Plano Completo
        </span>
        <H2>
          E você ainda recebe estes <span className="text-primary">bônus</span>
        </H2>
        <p className="mx-auto mt-3 max-w-xl text-ink-foreground/70">
          Quatro coleções extras que ampliam ainda mais a variedade da biblioteca.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {C.bonuses.map((b, i) => (
          <Reveal key={b.title}>
            <div className="flex h-full flex-col rounded-2xl border border-primary/30 bg-ink-foreground/5 p-5">
              <span className="self-start rounded-full bg-primary px-2.5 py-1 text-xs font-black text-primary-foreground">
                BÔNUS {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold">{b.title}</h3>
              <p className="mt-1 text-sm text-ink-foreground/70">{b.text}</p>
              <div className="mt-auto flex items-center gap-3 pt-4">
                <span className="font-display text-sm font-bold text-ink-foreground/50 line-through">
                  R$ {b.value}
                </span>
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-black text-primary-foreground">
                  GRÁTIS
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Pricing({ onEssencial }: { onEssencial: () => void }) {
  const [essencial, completo] = [C.plans[0]!, C.plans[1]!];
  return (
    <Section id="planos">
      <Reveal className="text-center">
        <Eyebrow>Oferta</Eyebrow>
        <H2>Escolha como você quer começar</H2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Comece apenas com a biblioteca principal ou leve tudo, com os bônus inclusos.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-md rounded-3xl border-2 border-primary bg-card p-6 text-center shadow-lg">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
          <Gift className="h-3.5 w-3.5" />+ 4 bônus extras
        </span>
        <p className="mt-4 text-sm text-muted-foreground">Valor dos bônus</p>
        <p className="font-display text-2xl font-black text-muted-foreground line-through">
          R$ {C.bonusesTotal}
        </p>
        <p className="text-sm font-bold">Incluídos no Plano Completo</p>
        <div className="my-4 h-px bg-border" />
        <p className="font-display text-xs font-black uppercase tracking-widest text-muted-foreground">
          De R$ {C.bonusesTotal} em bônus, por apenas
        </p>
        <p className="font-display text-5xl font-black leading-none sm:text-6xl">
          R$ {completo.price}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">Plano Completo • Pagamento único</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        <div className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-md sm:p-7">
          <h3 className="font-display text-xl font-extrabold uppercase">{essencial.name}</h3>
          <ul className="mt-5 space-y-3">
            {essencial.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-5">
            <p className="font-display text-xs font-black uppercase tracking-widest text-muted-foreground">
              No Essencial, você não recebe:
            </p>
            <ul className="mt-3 space-y-2">
              {essencial.excluded.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="line-through">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-6">
            <div className="flex items-start gap-1 font-display whitespace-nowrap">
              <span className="mt-2 text-lg font-bold">R$</span>
              <span className="text-5xl font-black sm:text-6xl">{essencial.price}</span>
            </div>
            <p className="text-xs text-muted-foreground">Pagamento único</p>
            <CheckoutButton url={essencial.href} onClick={onEssencial} className="mt-5 w-full">
              {essencial.cta}
            </CheckoutButton>
          </div>
        </div>

        <div
          className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${completo.featured ? "bg-ink text-ink-foreground shadow-2xl md:scale-105" : "border border-border bg-card shadow-md"}`}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-black text-primary-foreground">
            MAIS ESCOLHIDO
          </span>
          <h3 className="font-display text-xl font-extrabold uppercase">{completo.name}</h3>
          <ul className="mt-5 space-y-3">
            {completo.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <p className="text-xs text-ink-foreground/60">Valor individual dos bônus:</p>
            <p className="font-display text-sm font-bold text-ink-foreground/60 line-through">
              R$ {C.bonusesTotal}
            </p>
            <p className="mt-3 font-display text-xs font-black uppercase tracking-widest text-primary">
              Por apenas
            </p>
            <div className="flex items-start gap-1 font-display whitespace-nowrap">
              <span className="mt-2 text-lg font-bold">R$</span>
              <span className="text-6xl font-black leading-none sm:text-7xl">{completo.price}</span>
            </div>
            <p className="text-xs text-ink-foreground/60">Pagamento único</p>
            <CheckoutButton url={completo.href} className="mt-5 w-full">
              {completo.cta}
            </CheckoutButton>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-secondary px-5 py-4 text-center text-sm font-semibold sm:text-base">
        {C.planComparison}
      </p>
      <p className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <Shield className="h-4 w-4 shrink-0" />
        Compra segura • Acesso digital • Pagamento único
      </p>
    </Section>
  );
}

function UpgradeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/70 p-3 sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Upgrade para o Plano Completo"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-3xl bg-card p-6 text-center shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-widest text-primary">
            Espere
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <h2 className="mt-4 font-display text-2xl font-black leading-tight sm:text-3xl">
          {C.upgrade.title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{C.upgrade.intro}</p>
        <p className="mt-4 font-display text-5xl font-black leading-none sm:text-6xl">
          R$ {C.upgrade.price}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Pagamento único, com todos os bônus inclusos
        </p>
        <ul className="mt-5 space-y-2 text-left">
          {C.upgrade.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-sm">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </span>
              {it}
            </li>
          ))}
        </ul>
        <CheckoutButton
          url={C.CHECKOUT_UPGRADE}
          onClick={() => navigate(C.CHECKOUT_UPGRADE)}
          className="mt-6 w-full"
        >
          {C.upgrade.cta}
        </CheckoutButton>
        <button
          onClick={() => {
            onClose();
            navigate(C.CHECKOUT_ESSENCIAL);
          }}
          className="mt-3 w-full rounded-full px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          {C.upgrade.decline}
        </button>
      </div>
    </div>
  );
}

function Guarantee() {
  return (
    <Section>
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-border bg-card p-8 text-center shadow-md md:flex-row md:text-left">
        <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full border-4 border-dashed border-accent bg-primary sm:h-36 sm:w-36">
          <div className="text-center font-display leading-none">
            <div className="text-5xl font-black">7</div>
            <div className="text-xs font-extrabold tracking-widest">
              DIAS DE
              <br />
              GARANTIA
            </div>
          </div>
        </div>
        <div>
          <H2>Seu acesso sem risco</H2>
          <p className="mt-3 text-muted-foreground">{C.guarantee}</p>
        </div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center">
        <H2>Perguntas frequentes</H2>
      </Reveal>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {C.faq.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-start justify-between gap-4 p-5 text-left text-sm font-bold sm:text-base"
            >
              {f.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="bg-ink text-center text-ink-foreground">
      <Reveal>
        <Zap className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black leading-tight md:text-5xl">
          Tenha uma biblioteca de <span className="text-primary">moldes fitness</span> pronta para
          usar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/70">
          +500 modelos organizados em um só lugar, para você criar novas peças sem começar tudo do
          zero.
        </p>
        <CtaButton className="mt-8 w-full max-w-md md:w-auto">{C.cta}</CtaButton>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-foreground/10 bg-ink px-5 pb-28 pt-8 text-center text-sm text-ink-foreground/60 md:pb-8">
      <div className="font-display font-extrabold uppercase tracking-widest text-ink-foreground">
        {C.brand}
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-5">
        <a href="#">Termos de Uso</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Contato</a>
      </div>
      <p className="mt-3">
        © {new Date().getFullYear()} {C.brand}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function StickyCta() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const el = document.getElementById("planos");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(!!e?.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-3 transition md:hidden ${hide ? "pointer-events-none translate-y-full opacity-0" : ""}`}
    >
      <CtaButton className="w-full">{C.cta}</CtaButton>
    </div>
  );
}

function Index() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <TopBar />
      <Hero />
      <ProductContents />
      <Demo />
      <Steps />
      <Categories />
      <Testimonials />
      <Bonuses />
      <Pricing onEssencial={() => setUpgradeOpen(true)} />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCta />
      <UpgradeModal open={upgradeOpen} onClose={() => setUpgradeOpen(false)} />
    </main>
  );
}
