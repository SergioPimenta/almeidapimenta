export const FinalCta = () => (
  <section id="contato" className="relative overflow-hidden bg-ap-navy-deep text-white page-px py-[92px]">
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{ background: 'linear-gradient(120deg, #14273f 0%, #1c3a5e 100%)' }}
    />
    <div className="relative z-10 mx-auto max-w-[760px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue-soft uppercase">
        Consulta jurídica
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.15] font-bold text-white">
        Tem um caso desafiador? Fale com um especialista hoje.
      </h2>
      <p className="mt-4 text-[1.05rem] leading-[1.7] text-[rgb(223_231_241/0.85)]">
        Agende uma consulta sem compromisso. Analisamos sua situação e mostramos os próximos passos.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:contato@almeidapimenta.com.br"
          className="font-sans inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-ap-navy no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-ap-champagne"
        >
          Agende sua consulta
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
          Chamar no WhatsApp
        </a>
      </div>
      <p className="mt-6 text-[13px] text-[rgb(223_231_241/0.6)]">
        Resposta em até 24h úteis • Atendimento presencial e on-line
      </p>
    </div>
  </section>
);
