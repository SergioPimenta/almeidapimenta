export const OfficeHero = () => (
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
        O escritório
      </span>
      <h1 className="font-heading mt-5 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] font-bold">
        Tradição e técnica a favor da sua <span className="text-ap-blue-soft">empresa</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.75] font-light text-[rgb(223_231_241/0.85)]">
        A Almeida Pimenta Advogados é um escritório de advocacia empresarial dedicado à proteção
        jurídica de negócios — com atuação preventiva e contenciosa em Direito Trabalhista, Tributário
        e Cível.
      </p>
    </div>
  </section>
);
