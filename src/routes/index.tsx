import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Play, Shield, Lock, Zap, Download, Printer, Scissors, MousePointerClick, Gift, Star, Clock, ChevronDown } from "lucide-react";
import * as C from "@/components/landing/content";
import heroImg from "@/assets/hero-mockup.jpg";
import videoThumb from "@/assets/video-thumb.jpg";
import collection from "@/assets/collection.jpg";
import expertImg from "@/assets/expert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+500 Moldes de Moda Fitness | Produza e Venda" },
      { name: "description", content: "Coleção de modelagens para leggings, tops, shorts, conjuntos e mais. Acesso digital imediato." },
      { property: "og:title", content: "+500 Moldes de Moda Fitness" },
      { property: "og:description", content: "Biblioteca organizada de moldes fitness para costureiras e confecções." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const CtaButton = ({ children, href = "#planos", className = "" }: { children: ReactNode; href?: string; className?: string }) => (
  <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-extrabold tracking-wide text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)] transition hover:-translate-y-0.5 ${className}`}>{children}</a>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="mb-3 inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">{children}</span>
);
const H2 = ({ children }: { children: ReactNode }) => <h2 className="font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">{children}</h2>;

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`px-5 py-16 md:py-24 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function TopBar() {
  const items = Array(6).fill(C.topBar);
  return (
    <div className="overflow-hidden bg-ink py-2 text-xs font-bold tracking-widest text-primary">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">{[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

function Hero() {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="text-center">
        <div className="mb-6 font-display text-sm font-extrabold uppercase tracking-[0.3em]">{C.brand}</div>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-black leading-[1.02] tracking-tight md:text-7xl">
          <span className="relative inline-block"><span className="relative z-10">{C.hero.highlight}</span><span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-primary md:h-6" /></span>{" "}
          <span className="block text-muted-foreground md:mt-2">{C.hero.rest}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{C.hero.sub}</p>
      </div>
      <div className="relative mx-auto mt-10 max-w-4xl">
        <img src={heroImg} alt="Mockup dos moldes de moda fitness em celular e tablet com peças ao redor" width={1280} height={960} className="w-full rounded-3xl shadow-2xl" />
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2">
          {C.hero.tags.map((t) => <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold shadow-md">{t}</span>)}
        </div>
      </div>
      <div className="mt-14 text-center">
        <CtaButton className="w-full max-w-md md:w-auto">{C.hero.cta}</CtaButton>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"><Lock className="h-4 w-4" />{C.hero.trust}</p>
      </div>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-3 overflow-x-auto px-5 md:justify-center">
        {C.benefits.map((b) => (
          <div key={b} className="flex shrink-0 snap-start items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold shadow-sm">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary"><Check className="h-3.5 w-3.5" /></span>{b}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Video() {
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center">
        <Eyebrow>Demonstração</Eyebrow>
        <H2>Veja como é por dentro</H2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tenha acesso a uma biblioteca organizada de moldes para moda fitness.</p>
        <button aria-label="Assistir demonstração" className="group relative mx-auto mt-10 block aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
          <img src={videoThumb} alt="Demonstração dos moldes" loading="lazy" width={720} height={1280} className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-ink/30" />
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary shadow-xl transition group-hover:scale-110"><Play className="ml-1 h-8 w-8 fill-current" /></span>
        </button>
      </Reveal>
    </Section>
  );
}

function ProductContents() {
  return (
    <Section>
      <Reveal className="text-center"><Eyebrow>Incluído no acesso</Eyebrow><H2>Tudo o que você recebe</H2></Reveal>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {C.contents.map((c, i) => (
          <Reveal key={c.title}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-lg">
              <span className="font-display text-sm font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold uppercase">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8"><img src={collection} alt="Miniaturas das peças da coleção" loading="lazy" width={1280} height={896} className="h-48 w-full rounded-3xl object-cover md:h-72" /></Reveal>
    </Section>
  );
}

function Steps() {
  const icons = [MousePointerClick, Download, Printer, Scissors];
  return (
    <Section className="bg-ink text-ink-foreground">
      <Reveal className="text-center"><H2>Simples e <span className="text-primary">direto</span></H2></Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {C.steps.map((s, i) => { const I = icons[i % icons.length]; return (
          <Reveal key={s.title}><div className="h-full rounded-2xl border border-ink-foreground/15 p-6">
            <div className="flex items-center justify-between"><I className="h-7 w-7 text-primary" /><span className="font-display text-4xl font-black text-ink-foreground/20">{i + 1}</span></div>
            <h3 className="mt-4 font-display text-lg font-extrabold">{s.title}</h3>
            <p className="mt-1 text-sm text-ink-foreground/70">{s.text}</p>
          </div></Reveal>
        ); })}
      </div>
      <p className="mt-10 text-center font-display text-xl font-bold">Sem precisar começar cada peça do zero.</p>
    </Section>
  );
}

function Categories() {
  return (
    <Section>
      <Reveal className="text-center"><Eyebrow>Variedade</Eyebrow><H2>Uma coleção para você nunca ficar sem ideias</H2></Reveal>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-4 md:px-0">
        {C.categories.map((c, i) => (
          <div key={c} className="relative w-56 shrink-0 snap-start overflow-hidden rounded-2xl bg-secondary md:w-auto">
            <img src={collection} alt={c} loading="lazy" width={1280} height={896} className="aspect-[4/5] w-full object-cover" style={{ objectPosition: `${(i % 4) * 33}% ${i < 4 ? 15 : 85}%`, transform: "scale(1.6)" }} />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-bold text-primary">{c}</span>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center"><CtaButton>QUERO VER TODOS OS MODELOS</CtaButton></div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center"><Eyebrow>Depoimentos</Eyebrow><H2>O que quem já conheceu o material está dizendo</H2></Reveal>
      <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:px-0">
        {C.testimonials.map((t) => (
          <div key={t.name} className="w-80 shrink-0 snap-start rounded-3xl bg-card p-6 shadow-md md:w-auto">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display font-black text-accent-foreground">{t.name[0]}</div>
              <div><div className="font-bold">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></div>
            </div>
            <div className="mt-4 rounded-2xl rounded-tl-sm bg-secondary p-4 text-sm leading-relaxed">“{t.text}”</div>
            <div className="mt-3 flex gap-0.5 text-accent">{Array(5).fill(0).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Bonuses() {
  return (
    <Section className="bg-ink text-ink-foreground">
      <Reveal className="text-center"><span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground"><Gift className="h-3.5 w-3.5" />Plano Completo</span><H2>E você ainda recebe estes <span className="text-primary">bônus</span></H2></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {C.bonuses.map((b, i) => (
          <Reveal key={b.title}><div className="h-full rounded-2xl border border-primary/30 bg-ink-foreground/5 p-5">
            <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-black text-primary-foreground">BÔNUS {String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-display text-lg font-extrabold">{b.title}</h3>
            <p className="mt-1 text-sm text-ink-foreground/70">{b.text}</p>
          </div></Reveal>
        ))}
      </div>
    </Section>
  );
}

function Countdown() {
  const CYCLE = 15 * 60;
  const [left, setLeft] = useState(CYCLE);
  useEffect(() => {
    const key = "lp_countdown_end";
    let end = Number(localStorage.getItem(key));
    if (!end || end < Date.now()) { end = Date.now() + CYCLE * 1000; localStorage.setItem(key, String(end)); }
    const tick = () => {
      let s = Math.round((end - Date.now()) / 1000);
      if (s <= 0) { end = Date.now() + CYCLE * 1000; localStorage.setItem(key, String(end)); s = CYCLE; }
      setLeft(s);
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(left / 60)).padStart(2, "0"), s = String(left % 60).padStart(2, "0");
  return (
    <div className="mx-auto max-w-md rounded-3xl border-2 border-primary bg-card p-6 text-center shadow-lg">
      <p className="flex items-center justify-center gap-2 text-sm font-bold"><Clock className="h-4 w-4" />Condição especial disponível por tempo limitado</p>
      <div className="mt-3 flex items-center justify-center gap-3 font-display text-5xl font-black tabular-nums">
        <span className="rounded-xl bg-ink px-4 py-2 text-primary">{m}</span>:<span className="rounded-xl bg-ink px-4 py-2 text-primary">{s}</span>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <Section id="planos">
      <Reveal><Countdown /></Reveal>
      <Reveal className="mt-14 text-center"><Eyebrow>Oferta</Eyebrow><H2>Escolha como você quer começar</H2></Reveal>
      <div className="mx-auto mt-10 grid max-w-4xl items-center gap-6 md:grid-cols-2">
        {C.plans.map((p) => (
          <div key={p.name} className={`relative rounded-3xl p-7 ${p.featured ? "bg-ink text-ink-foreground shadow-2xl md:scale-105" : "border border-border bg-card shadow-md"}`}>
            {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-black text-primary-foreground">MAIS ESCOLHIDO</span>}
            <h3 className="font-display text-xl font-extrabold uppercase">{p.name}</h3>
            <ul className="mt-5 space-y-3">
              {p.items.map((it) => <li key={it} className="flex items-center gap-3 text-sm"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3 w-3" /></span>{it}</li>)}
            </ul>
            <div className="mt-7 flex items-start gap-1 font-display"><span className="mt-2 text-lg font-bold">R$</span><span className="text-6xl font-black">{p.price}</span></div>
            <p className={`text-xs ${p.featured ? "text-ink-foreground/60" : "text-muted-foreground"}`}>Pagamento único</p>
            <CtaButton href={p.href} className="mt-6 w-full">{p.cta}</CtaButton>
          </div>
        ))}
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"><Shield className="h-4 w-4" />Compra segura • Acesso imediato</p>
    </Section>
  );
}

function Expert() {
  return (
    <Section className="bg-secondary">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal><img src={expertImg} alt={C.expert.name} loading="lazy" width={800} height={1008} className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-xl" /></Reveal>
        <Reveal>
          <Eyebrow>Especialista</Eyebrow><H2>Conheça quem criou o material</H2>
          <p className="mt-2 font-display text-lg font-bold text-accent">{C.expert.name}</p>
          <div className="mt-4 space-y-3 text-muted-foreground">{C.expert.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
        </Reveal>
      </div>
    </Section>
  );
}

function Guarantee() {
  return (
    <Section>
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-border bg-card p-8 text-center shadow-md md:flex-row md:text-left">
        <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full border-4 border-dashed border-accent bg-primary">
          <div className="text-center font-display leading-none"><div className="text-5xl font-black">7</div><div className="text-xs font-extrabold tracking-widest">DIAS DE<br />GARANTIA</div></div>
        </div>
        <div><H2>Seu acesso sem risco</H2><p className="mt-3 text-muted-foreground">{C.guarantee}</p></div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-secondary">
      <Reveal className="text-center"><H2>Perguntas frequentes</H2></Reveal>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {C.faq.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold">
              {f.q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
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
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black leading-tight md:text-5xl">Comece agora a ampliar seu catálogo de <span className="text-primary">moda fitness</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/70">Tenha uma biblioteca completa de modelagens para criar novas peças sem precisar começar tudo do zero.</p>
        <CtaButton className="mt-8 w-full max-w-md md:w-auto">{C.hero.cta}</CtaButton>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-foreground/10 bg-ink px-5 pb-28 pt-8 text-center text-sm text-ink-foreground/60 md:pb-8">
      <div className="font-display font-extrabold uppercase tracking-widest text-ink-foreground">{C.brand}</div>
      <div className="mt-3 flex flex-wrap justify-center gap-5"><a href="#">Termos de Uso</a><a href="#">Política de Privacidade</a><a href="#">Contato</a></div>
      <p className="mt-3">© {new Date().getFullYear()} {C.brand}. Todos os direitos reservados.</p>
    </footer>
  );
}

function StickyCta() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const el = document.getElementById("planos"); if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-50 p-3 transition md:hidden ${hide ? "pointer-events-none translate-y-full opacity-0" : ""}`}>
      <CtaButton className="w-full">QUERO OS MOLDES</CtaButton>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <TopBar /><Hero /><Video /><ProductContents /><Steps /><Categories /><Testimonials /><Bonuses /><Pricing /><Expert /><Guarantee /><FAQ /><FinalCTA /><Footer /><StickyCta />
    </main>
  );
}
