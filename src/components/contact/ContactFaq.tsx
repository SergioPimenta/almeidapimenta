import { contactFaqs } from './contactData';

export const ContactFaq = () => (
  <section className="bg-ap-surface page-px py-[100px]">
    <div className="mx-auto mb-12 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Dúvidas frequentes
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Antes de enviar
      </h2>
      <p className="mt-4 text-[15px] leading-[1.75] text-ap-ink-soft">
        Respostas rápidas para as perguntas mais comuns sobre o primeiro atendimento.
      </p>
    </div>

    <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
      {contactFaqs.map((item) => (
        <article
          key={item.q}
          className="rounded-2xl border border-ap-line bg-ap-bg px-7 py-6 transition-colors duration-200 hover:border-ap-blue"
        >
          <h3 className="font-heading mb-3 text-[1.05rem] font-bold leading-snug text-ap-navy">
            {item.q}
          </h3>
          <p className="text-sm leading-[1.75] text-ap-ink-soft">{item.a}</p>
        </article>
      ))}
    </div>
  </section>
);
