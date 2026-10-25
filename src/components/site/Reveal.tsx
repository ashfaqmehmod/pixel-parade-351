import { useEffect, useRef, type ReactNode } from "react";
import logoUrl from "@/assets/logo-a.png";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return <img src={logoUrl} alt="Bill Arena logo" width={512} height={512} className={className} />;
}

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h2 className="text-4xl font-semibold text-primary md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}
