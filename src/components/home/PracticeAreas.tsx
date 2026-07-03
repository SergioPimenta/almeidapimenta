const areas = [
  {
    title: 'Trabalhista',
    desc: 'Assistência a empresas na esfera trabalhista, tanto contenciosa quanto consultiva/preventiva, orientando quanto à correta aplicação da legislação individual e coletiva.',
    href: '/areas#trabalhista',
    icon: <path d="M10 4h4l1 3h5v13H4V7h5l1-3zm2 6a4 4 0 100 8 4 4 0 000-8z" />,
  },
  {
    title: 'Tributário',
    desc: 'Atuamos contra interpretações incorretas da Administração Pública, buscando a redução ou eliminação de tributos indevidos e obrigações acessórias ilegais para a regularidade fiscal.',
    href: '/areas#tributario',
    icon: (
      <path d="M12 1v3m0 16v3M4.2 4.2l2.1 2.1m11.4 11.4l2.1 2.1M1 12h3m16 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 7a5 5 0 100 10 5 5 0 000-10z" />
    ),
  },
  {
    title: 'Cível e Relações de Consumo',
    desc: 'Especialização no atendimento a pessoas jurídicas na área cível e de relações de consumo, assessorando empresas em litígios judiciais e demandas extrajudiciais.',
    href: '/areas#civel',
    icon: (
      <>
        <path d="M9 11l-4 4 2 2 4-4m4-4l4-4-2-2-4 4M7 7l10 10" />
        <path d="M8 3l3 3-2 2-3-3zm8 12l3 3-2 2-3-3z" />
      </>
    ),
  },
];

export const PracticeAreas = () => (
  <section id="areas" className="bg-ap-surface page-px py-[100px]">
    <div className="mx-auto mb-14 max-w-[640px] text-center">
      <span className="font-sans inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Áreas de atuação
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Soluções jurídicas para cada desafio
      </h2>
      <p className="mt-4 text-[15px] leading-[1.75] text-ap-ink-soft">
        Atendimento especializado com foco no melhor interesse e na segurança jurídica da sua
        empresa.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {areas.map((area) => (
        <article
          key={area.title}
          className="group relative overflow-hidden rounded-2xl border border-ap-line bg-ap-surface p-8 shadow-[0_2px_8px_rgba(20,39,63,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_24px_60px_rgba(20,39,63,0.14)]"
        >
          <span
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            style={{ background: 'linear-gradient(90deg, #1c3a5e, #5b81ab)' }}
            aria-hidden
          />
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-[0_8px_18px_rgba(28,58,94,0.28)]"
            style={{ background: 'linear-gradient(150deg, #3f6592, #1c3a5e)' }}
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {area.icon}
            </svg>
          </div>
          <h3 className="font-heading mb-3 text-[1.3rem] font-bold text-ap-navy">{area.title}</h3>
          <p className="text-[14.5px] leading-[1.7] text-ap-ink-soft">{area.desc}</p>
          <a
            href={area.href}
            className="font-sans mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ap-navy no-underline transition-colors group-hover:text-ap-blue"
          >
            Saiba mais
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5z" />
            </svg>
          </a>
        </article>
      ))}
    </div>
  </section>
);
