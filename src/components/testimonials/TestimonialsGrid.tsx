import { testimonials } from './testimonialsData';

export const TestimonialsGrid = () => (
  <section id="depoimentos" className="bg-ap-bg page-px py-[100px]">
    <div className="mx-auto mb-14 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        O que dizem
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Resultados que geram confiança
      </h2>
      <p className="mt-4 text-[15px] leading-[1.75] text-ap-ink-soft">
        Relatos de clientes atendidos nas diferentes áreas de atuação do escritório.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col rounded-2xl border border-ap-line bg-ap-surface p-8 shadow-[0_2px_8px_rgba(20,39,63,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,39,63,0.12)]"
        >
          <div className="flex items-center justify-between">
            <div className="tracking-[2px] text-ap-blue" aria-label="5 de 5 estrelas">
              ★★★★★
            </div>
            <span className="font-sans rounded-full bg-ap-champagne/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-ap-navy">
              {t.area}
            </span>
          </div>
          <blockquote className="mt-4 flex-1 text-[15px] leading-[1.7] text-ap-ink italic">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4 border-t border-ap-line pt-5">
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
  </section>
);
