export const ContactHero = () => (
  <section className="relative overflow-hidden bg-ap-navy-deep text-white page-px pt-[150px] pb-24">
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{ background: 'linear-gradient(100deg, #14273f 0%, #1c3a5e 55%, #274a78 100%)' }}
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 opacity-[0.14]"
      aria-hidden
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0 46px, rgba(223,231,241,0.6) 46px 48px, transparent 48px 96px)',
      }}
    />

    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <span className="font-sans inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue-soft uppercase">
        Contato
      </span>
      <h1 className="font-heading mt-5 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] font-bold">
        Fale com um <span className="text-ap-blue-soft">advogado</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.75] font-light text-[rgb(223_231_241/0.85)]">
        Conte a sua situação, tire dúvidas ou agende uma consulta. Nossa equipe responde com clareza
        sobre estratégia, prazos e os próximos passos do seu caso.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a
          href="#formulario"
          className="font-sans inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-ap-navy no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-ap-champagne"
        >
          Enviar mensagem
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5z" />
          </svg>
        </a>
        <a
          href="https://wa.me/5541992034554"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans inline-flex items-center rounded-lg border border-[rgb(255_255_255/0.5)] px-8 py-3.5 text-sm font-medium text-white no-underline transition-all duration-200 hover:border-white hover:bg-[rgb(255_255_255/0.1)]"
        >
          WhatsApp direto
        </a>
      </div>
    </div>
  </section>
);
