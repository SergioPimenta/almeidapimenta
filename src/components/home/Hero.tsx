const badges = [
  {
    label: 'Atendimento personalizado',
    icon: <path d="M12 2l3 6 6 .9-4.5 4.3 1 6L12 16.8 6.5 19.2l1-6L3 8.9 9 8z" />,
  },
  {
    label: 'Foco preventivo',
    icon: <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4zm-1.2 13.4l5-5-1.4-1.4-3.6 3.6-1.6-1.6L7.8 11z" />,
  },
  {
    label: 'Transparência total',
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  },
];

export const Hero = () => (
  <section
    id="inicio"
    className="relative overflow-hidden bg-ap-navy-deep text-white page-px pt-[140px] pb-[110px]"
  >
    {/* fundo com gradiente e motivo de colunas clássicas */}
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{
        background:
          'linear-gradient(100deg, #14273f 0%, #1c3a5e 55%, #274a78 100%)',
      }}
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 opacity-[0.14]"
      aria-hidden
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0 46px, rgba(223,231,241,0.6) 46px 48px, transparent 48px 96px)',
      }}
    />

    <div className="relative z-10 max-w-[640px]">
      <span className="font-sans inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue-soft uppercase before:block before:h-px before:w-7 before:bg-ap-blue-soft before:content-['']">
        Almeida Pimenta Advogados
      </span>
      <h1 className="font-heading mt-6 text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.08] font-bold">
        Advocacia com <span className="text-ap-blue-soft">excelência</span> para o seu negócio
      </h1>
      <p className="mt-6 max-w-[520px] text-[clamp(1rem,1.6vw,1.18rem)] leading-[1.75] font-light text-[rgb(223_231_241/0.85)]">
        Assessoria jurídica empresarial em Direito Trabalhista, Tributário e Cível — preventiva e
        contenciosa, com estratégia e resultado.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="/contato"
          className="font-sans inline-flex items-center gap-2.5 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-ap-navy no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-ap-champagne"
        >
          Agende sua consulta
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5z" />
          </svg>
        </a>
        <a
          href="/areas"
          className="font-sans inline-flex items-center rounded-lg border border-[rgb(255_255_255/0.5)] px-8 py-3.5 text-sm font-medium text-white no-underline transition-all duration-200 hover:border-white hover:bg-[rgb(255_255_255/0.1)]"
        >
          Conheça as áreas de atuação
        </a>
      </div>

      <div className="mt-11 flex flex-wrap gap-7 border-t border-[rgb(255_255_255/0.18)] pt-7">
        {badges.map((badge) => (
          <span key={badge.label} className="flex items-center gap-2.5 text-sm text-[rgb(223_231_241/0.85)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#5b81ab" className="shrink-0">
              {badge.icon}
            </svg>
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  </section>
);
