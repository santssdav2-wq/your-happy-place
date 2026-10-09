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
import catLeggings from "@/assets/leggings.webp";
import catTops from "@/assets/tops.webp";
import catShorts from "@/assets/shorts.webp";
import catCroppeds from "@/assets/croppeds.webp";
import catConjuntos from "@/assets/conjuntos.webp";
import catRegatas from "@/assets/regatas.webp";
import catFeminino from "@/assets/feminino.webp";
import catMasculino from "@/assets/masculino.webp";

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
  purchaseCta = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  purchaseCta?: boolean;
}) => (
  <a
    href={href}
    data-purchase-cta={purchaseCta || undefined}
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
  outline = false,
  purchaseCta = false,
}: {
  url: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
  className?: string;
  outline?: boolean;
  purchaseCta?: boolean;
}) => (
  <a
    href={url}
    data-purchase-cta={purchaseCta || undefined}
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick(e);
      else navigate(url);
    }}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-center font-display text-sm font-extrabold tracking-wide transition hover:-translate-y-0.5 sm:text-base ${
      outline
        ? "border-2 border-ink/15 bg-transparent text-foreground hover:border-ink"
        : "bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)]"
    } ${className}`}
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
        <h1 className="mx-auto max-w-4xl font-display text-[2rem] font-black leading-[1.1] tracking-tight md:text-7xl">
          <span className="relative inline-block">
            <span className="relative z-10">{C.hero.highlight}</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-primary md:h-6" />
          </span>{" "}
          <span className="block text-muted-foreground md:mt-2">{C.hero.rest}</span>
        </h1>
      </div>
      <div className="relative mx-auto mt-10 max-w-4xl">
        <img
          src={heroImg}
          alt="Mockup da biblioteca de moldes de moda fitness em celular e tablet com peças ao redor"
          width={1280}
          height={960}
          className="w-full rounded-3xl shadow-2xl"
        />
        <div className="absolute -bottom-6 left-1/2 flex w-[calc(100%-0.5rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5">
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
      <div className="mt-16 text-center">
        <CtaButton purchaseCta className="w-full max-w-md md:w-auto">
          {C.hero.cta}
        </CtaButton>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Lock className="h-4 w-4 shrink-0" />
          {C.hero.trust}
        </p>
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
      </Reveal>
      <Reveal className="mt-10">
        <div className="overflow-hidden py-2">
          <div className="flex w-max animate-marquee gap-4">
            {[...C.categories, ...C.categories].map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="relative w-56 shrink-0 overflow-hidden rounded-2xl bg-secondary sm:w-64"
              >
                <img
                  src={catImages[c]}
                  alt={c}
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-bold text-primary">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-10">
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
              decoding="async"
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-bold text-primary">
              {c}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CtaButton purchaseCta className="w-full max-w-md md:w-auto">
          {C.cta}
        </CtaButton>
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
  const offerLine = C.offerLine
    .replace("{bonusesTotal}", C.bonusesTotal)
    .replace("{price}", completo.price);
  return (
    <Section id="planos">
      <Reveal className="text-center">
        <Eyebrow>Oferta</Eyebrow>
        <H2>Escolha como você quer começar</H2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          {offerLine}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          Dois planos simples: o Completo leva a biblioteca inteira e todos os bônus.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl items-stretch gap-5 md:grid-cols-2">
        <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-md sm:p-7">
          <h3 className="font-display text-base font-extrabold uppercase sm:text-lg">
            {essencial.name}
          </h3>
          <ul className="mt-5 space-y-3">
            {essencial.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {it}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <div className="flex items-baseline gap-1.5 font-display whitespace-nowrap">
              <span className="text-lg font-bold">R$</span>
              <span className="text-5xl font-black">{essencial.price}</span>
              <span className="text-xs font-medium text-muted-foreground">Pagamento único</span>
            </div>
            <CheckoutButton
              url={essencial.href}
              onClick={onEssencial}
              outline
              purchaseCta
              className="mt-5 w-full"
            >
              {essencial.cta}
            </CheckoutButton>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-display text-[0.65rem] font-extrabold uppercase tracking-widest text-muted-foreground">
              Não inclui
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {essencial.excluded.map((it) => (
                <li key={it} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <X className="mt-0.5 h-3 w-3 shrink-0" />
                  <span className="line-through opacity-80">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex h-full flex-col rounded-3xl bg-ink p-6 text-ink-foreground shadow-2xl sm:p-7 md:scale-105">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-black text-primary-foreground">
            MAIS ESCOLHIDO
          </span>
          <h3 className="font-display text-base font-extrabold uppercase sm:text-lg">
            {completo.name}
          </h3>
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

          <div className="mt-auto pt-8">
            <p className="text-xs text-ink-foreground/60">
              Valor dos bônus: <span className="line-through">R$ {C.bonusesTotal}</span>
            </p>
            <p className="mt-3 font-display text-xs font-black uppercase tracking-widest text-primary">
              Por apenas
            </p>
            <div className="flex items-baseline gap-1.5 font-display whitespace-nowrap">
              <span className="text-lg font-bold">R$</span>
              <span className="text-6xl font-black leading-none sm:text-7xl">{completo.price}</span>
            </div>
            <p className="mt-1 text-xs text-ink-foreground/60">Pagamento único</p>
            <CheckoutButton url={completo.href} purchaseCta className="mt-5 w-full">
              {completo.cta}
            </CheckoutButton>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold text-muted-foreground sm:text-base">
        {C.planComparison}
      </p>
      <p className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
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
        className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-3xl bg-card p-6 text-center shadow-2xl sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
            {C.upgrade.badge}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <h2 className="mt-4 font-display text-xl font-black leading-tight sm:text-2xl">
          {C.upgrade.title}
        </h2>
        <p className="mt-1 font-display text-5xl font-black leading-none text-primary sm:text-6xl">
          R$ {C.upgrade.price}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{C.upgrade.note}</p>
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
          purchaseCta
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
        <CtaButton purchaseCta className="mt-8 w-full max-w-md md:w-auto">
          {C.cta}
        </CtaButton>
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
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-purchase-cta]"));
    if (targets.length === 0) {
      setVisible(true);
      return;
    }
    let anyVisible = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            anyVisible = true;
            break;
          }
        }
        setVisible(!anyVisible);
      },
      { threshold: 0.5 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition md:hidden ${visible ? "" : "pointer-events-none translate-y-full opacity-0"}`}
    >
      <CtaButton href="#planos" className="w-full">
        {C.cta}
      </CtaButton>
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
