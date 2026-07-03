const values = [
  {
    title: 'Ética',
    desc: 'Conduta pautada pela integridade, sigilo e responsabilidade em cada atendimento.',
    icon: <path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z" />,
  },
  {
    title: 'Excelência técnica',
    desc: 'Atualização constante e rigor jurídico para a melhor estratégia em cada caso.',
    icon: <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z" />,
  },
  {
    title: 'Proximidade',
    desc: 'Atendimento personalizado, com acompanhamento próximo e comunicação clara.',
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />,
  },
  {
    title: 'Transparência',
    desc: 'Honorários, prazos e etapas explicados com clareza, sem surpresas.',
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  },
];

export const OfficeValues = () => (
  <section className="bg-ap-surface page-px py-[100px]">
    <div className="mx-auto mb-14 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Nossos valores
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Princípios que guiam cada caso
      </h2>
      <p className="mt-4 text-[15px] leading-[1.75] text-ap-ink-soft">
        Uma cultura orientada à segurança jurídica, ao resultado e ao relacionamento de longo prazo
        com cada cliente.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => (
        <div
          key={value.title}
          className="rounded-2xl border border-ap-line bg-ap-surface p-8 shadow-[0_2px_8px_rgba(20,39,63,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(20,39,63,0.12)]"
        >
          <div
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_8px_18px_rgba(28,58,94,0.28)]"
            style={{ background: 'linear-gradient(150deg, #3f6592, #1c3a5e)' }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" className="fill-white">
              {value.icon}
            </svg>
          </div>
          <h3 className="font-heading mb-3 text-[1.15rem] font-bold text-ap-navy">{value.title}</h3>
          <p className="text-sm leading-[1.7] text-ap-ink-soft">{value.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
