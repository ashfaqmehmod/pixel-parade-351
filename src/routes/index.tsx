import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Menu, X, ShieldCheck, Clock, UserCheck, Droplet, Leaf, Mail, Phone, MessageCircle, Quote, Facebook, Linkedin, Instagram, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Logo, SectionHead } from "@/components/site/Reveal";
import { brand, nav, stats, serviceGroups, benefits, steps, toolGroups, team, testimonials, faqs, serviceOptions } from "@/data/site";
import heroImg from "@/assets/hero-leaves.jpg";
import vaImg from "@/assets/va-work.jpg";
import forestImg from "@/assets/forest-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bill Arena — Remote Medical Virtual Assistants for US Practices" },
      { name: "description", content: "Bill Arena provides dedicated, HIPAA-aware medical VAs for front office, insurance and billing. Less paperwork. More patients." },
      { property: "og:title", content: "Bill Arena — Less paperwork. More patients." },
      { property: "og:description", content: "Dedicated remote medical VAs for scheduling, eligibility, prior auth and revenue cycle — during US hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btn = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnPrimary = `${btn} bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90`;
const btnGhost = `${btn} border border-primary/25 bg-card/70 text-primary backdrop-blur hover:bg-mint`;

function Index() {
  return (
    <div className="bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Why />
        <HowItWorks />
        <Tools />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4" aria-label="Main">
        <a href="#top" className="flex shrink-0 items-center gap-2 text-primary">
          <Logo className="h-9 w-9" />
          <span className="font-display text-xl font-semibold">Bill Arena</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="text-sm font-medium text-muted-foreground transition hover:text-primary">{n.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={`${btnPrimary} hidden lg:inline-flex`}>Book a Free Consultation</a>
        <button className="rounded-full p-2 text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <li key={n.href}><a onClick={() => setOpen(false)} href={n.href} className="block rounded-xl px-3 py-3 font-medium text-primary hover:bg-mint">{n.label}</a></li>
            ))}
          </ul>
          <a onClick={() => setOpen(false)} href="#contact" className={`${btnPrimary} w-full`}>Book a Free Consultation</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dew">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-sky/30 blur-3xl" />
      <Leaf className="float-slow pointer-events-none absolute left-[8%] top-[18%] h-8 w-8 text-accent" aria-hidden />
      <Droplet className="float-fast pointer-events-none absolute left-[45%] top-[12%] h-6 w-6 text-sky" aria-hidden />
      <Droplet className="float-slow pointer-events-none absolute bottom-[14%] left-[30%] h-5 w-5 text-sky" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
            <Leaf className="h-4 w-4" /> {brand.tagline}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] text-primary md:text-7xl">
            Give Your Practice <em className="font-normal italic text-accent-foreground/80">Room to Breathe</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Reliable remote medical virtual assistants handling your front-office and billing work — so you can focus on the patients in front of you.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className={btnPrimary}>Get Started</a>
            <a href="#services" className={btnGhost}>See Our Services</a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-primary">
            {[{ i: ShieldCheck, t: "HIPAA-aware" }, { i: Clock, t: "US-hours coverage" }, { i: UserCheck, t: "Dedicated assistants" }].map(({ i: I, t }) => (
              <li key={t} className="flex items-center gap-2"><I className="h-5 w-5 text-accent" />{t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="overflow-hidden rounded-[2.5rem_6rem_2.5rem_6rem] shadow-lift">
            <img src={heroImg} alt="Fresh green leaves covered in morning dew" width={1280} height={1280} className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-3xl bg-card p-4 shadow-soft md:-left-10">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-primary"><CheckCircle2 /></span>
            <div>
              <p className="font-display text-lg font-semibold text-primary">Admin handled</p>
              <p className="text-xs text-muted-foreground">Calls · Claims · Follow-ups</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Highlights" className="bg-forest text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-semibold">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24">
      <SectionHead eyebrow="Services" title="Everything off your desk, handled with care" text="Pick one service or bundle them all — your dedicated VA fits right into your existing workflow." />
      <div className="space-y-14">
        {serviceGroups.map((g) => (
          <div key={g.name}>
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-primary"><Droplet className="h-5 w-5 text-sky" />{g.name}</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.items.map((s, i) => (
                <Reveal key={s.title} delay={i * 60}>
                  <article className="lift h-full rounded-[1.75rem] border border-border bg-card p-6">
                    <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-mint text-primary"><s.icon className="h-6 w-6" /></span>
                    <h4 className="text-lg font-semibold text-primary">{s.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-mint/60 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <img src={vaImg} alt="Medical virtual assistant with headset working in a bright, plant-filled office" loading="lazy" width={1200} height={912} className="w-full rounded-[2rem] object-cover shadow-lift" />
        </Reveal>
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Why Bill Arena</p>
            <h2 className="text-4xl font-semibold text-primary md:text-5xl">Healthy practices start with healthy admin.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-card text-primary shadow-soft"><b.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-primary">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="How it works" title="Grow a calmer practice in four steps" />
      <ol className="relative grid gap-10 md:grid-cols-4">
        <svg className="pointer-events-none absolute left-0 top-7 hidden h-8 w-full md:block" viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden>
          <path d="M0 10 Q 50 0 100 10 T 200 10 T 300 10 T 400 10" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
        </svg>
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <li className="relative text-center">
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground shadow-soft">
                {i + 1}
                <Leaf className="absolute -right-3 -top-2 h-5 w-5 text-accent" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 bg-dew py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Tools" title="The Tools Behind Smooth Operations" text="Our VAs are comfortable in the systems your practice already relies on." />
        <div className="space-y-10">
          {toolGroups.map((g) => (
            <div key={g.name}>
              <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">{g.name}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {g.items.map((t) => (
                  <div key={t.title} className="lift flex items-center gap-4 rounded-3xl bg-card/90 p-5 shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-primary"><t.icon className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="font-semibold text-primary">{t.title}</p>
                      <p className="text-xs text-muted-foreground">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-foreground">Don't see your system? We adapt quickly to the software your practice already uses.</p>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHead eyebrow="Team" title="The people behind your calmer days" />
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 100}>
            <article className="lift rounded-[1.75rem] border border-border bg-card p-6 text-center">
              <div className="mx-auto grid aspect-square w-full max-w-[220px] place-items-center rounded-[40%_60%_55%_45%] bg-mint font-display text-5xl text-primary" role="img" aria-label={`Photo placeholder for ${m.name}`}>
                {m.name.split(" ").map((p) => p[0]).join("")}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-primary">{m.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-sand/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Kind words" title="What practices are saying" text="Placeholder testimonials — to be replaced with real client quotes." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="h-full rounded-[1.75rem] bg-card p-7 shadow-soft">
                <Quote className="h-8 w-8 text-accent" aria-hidden />
                <blockquote className="mt-4 font-display text-lg text-primary">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-primary">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role} · <em>Placeholder</em></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SectionHead eyebrow="FAQ" title="Questions, answered" />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`f${i}`} className="rounded-3xl border border-border bg-card px-6">
            <AccordionTrigger className="text-left text-base font-semibold text-primary">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  practice: z.string().trim().min(2, "Please enter your practice name").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30).regex(/^[0-9+()\-\s.]+$/, "Please enter a valid phone"),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().max(1000).optional(),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Thanks! We'll be in touch within one business day.");
  };
  const field = "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";
  const F = ({ name, label, type = "text" }: { name: string; label: string; type?: string }) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-primary">{label}</label>
      <input id={name} name={name} type={type} className={field} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-e` : undefined} />
      {errors[name] && <p id={`${name}-e`} className="mt-1 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24">
      <img src={forestImg} alt="" loading="lazy" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
        <div className="text-primary-foreground">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">Contact</p>
          <h2 className="text-4xl font-semibold md:text-5xl">Ready to get your time back?</h2>
          <p className="mt-4 text-lg text-primary-foreground/85">Book a free consultation and we'll map out exactly how a Bill Arena VA can lighten your load.</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5" /><a href={`mailto:${brand.email}`} className="hover:underline">{brand.email}</a></li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5" />{brand.phone}</li>
            <li className="flex items-center gap-3"><MessageCircle className="h-5 w-5" />WhatsApp: {brand.whatsapp}</li>
          </ul>
          <p className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80"><ShieldCheck className="h-4 w-4" />We never share patient information.</p>
        </div>
        <div className="rounded-[2rem] bg-card p-7 shadow-lift md:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
              <h3 className="mt-4 text-3xl font-semibold text-primary">Message received</h3>
              <p className="mt-2 text-muted-foreground">Thank you! We'll reach out within one business day.</p>
              <button onClick={() => setSent(false)} className={`${btnGhost} mt-6`}>Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              {F({ name: "name", label: "Your name" })}
              {F({ name: "practice", label: "Practice name" })}
              {F({ name: "email", label: "Email", type: "email" })}
              {F({ name: "phone", label: "Phone", type: "tel" })}
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-primary">Services needed</label>
                <select id="service" name="service" defaultValue="" className={field} aria-invalid={!!errors["service"]}>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  <option>Multiple / Not sure yet</option>
                </select>
                {errors["service"] && <p className="mt-1 text-xs text-destructive">{errors["service"]}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">Message</label>
                <textarea id="message" name="message" rows={4} className={field} />
              </div>
              <button type="submit" className={`${btnPrimary} sm:col-span-2`}>Book My Free Consultation</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2"><Logo className="h-8 w-8" /><span className="font-display text-xl">Bill Arena</span></div>
        <ul className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
          {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary-foreground">{n.label}</a></li>)}
        </ul>
        <div className="flex gap-3">
          {[{ I: Facebook, l: "Facebook" }, { I: Linkedin, l: "LinkedIn" }, { I: Instagram, l: "Instagram" }].map(({ I, l }) => (
            <a key={l} href="#" aria-label={l} className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><I className="h-4 w-4" /></a>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Bill Arena · Website by Ashfaq Mehmood
      </div>
    </footer>
  );
}
