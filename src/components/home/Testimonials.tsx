const testimonials = [
  {
    initials: 'MR',
    name: 'Marcos R.',
    role: 'Diretor — Indústria (exemplo)',
    quote:
      'Resolveram uma questão trabalhista complexa da nossa empresa com estratégia e clareza. Atendimento próximo do início ao fim.',
  },
  {
    initials: 'AC',
    name: 'Ana C.',
    role: 'Sócia — Comércio (exemplo)',
    quote:
      'A revisão tributária identificou tributos que pagávamos indevidamente. Profissionalismo e transparência do começo ao fim.',
  },
];

export const Testimonials = () => (
  <section id="depoimentos" className="bg-ap-surface page-px py-[100px]">
    <div className="mx-auto mb-12 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Depoimentos
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        A confiança de quem já é cliente
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((t) => (
        <figure key={t.name} className="rounded-2xl bg-ap-bg p-9">
          <div className="tracking-[2px] text-ap-blue" aria-label="5 de 5 estrelas">
            ★★★★★
          </div>
          <blockquote className="mt-3 text-[15px] leading-[1.7] text-ap-ink italic">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span className="font-sans flex h-12 w-12 items-center justify-center rounded-full bg-ap-navy text-sm font-bold text-ap-blue-soft">
              {t.initials}
            </span>
            <span>
              <b className="font-sans block text-[15px] text-ap-navy">{t.name}</b>
              <small className="text-[13px] text-ap-ink-soft">{t.role}</small>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="/depoimentos"
        className="font-sans inline-flex items-center gap-2 text-sm font-semibold text-ap-navy no-underline transition-colors hover:text-ap-blue"
      >
        Ver todos os depoimentos
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5z" />
        </svg>
      </a>
    </div>
  </section>
);
