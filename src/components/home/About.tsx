const features = [
  'Atuação consultiva e contenciosa',
  'Estratégias sob medida para cada empresa',
  'Comunicação clara em cada etapa do processo',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" className="mt-0.5 shrink-0 fill-ap-blue">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </svg>
);

export const About = () => (
  <section id="escritorio" className="bg-ap-bg page-px py-[100px]">
    <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <span className="font-sans inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase before:block before:h-px before:w-7 before:bg-ap-blue before:content-['']">
          Sobre o escritório
        </span>
        <h2 className="font-heading mt-4 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] font-bold text-ap-navy">
          Uma equipe qualificada ao lado da sua empresa
        </h2>
        <p className="mt-5 text-[15px] leading-[1.8] text-ap-ink-soft">
          Nossa equipe de advogados altamente qualificados tem experiência em diversas áreas do
          direito, incluindo empresarial, trabalhista, civil, tributário e criminal. Estamos
          constantemente atualizando nossos conhecimentos jurídicos para garantir a melhor
          representação possível aos nossos clientes.
        </p>
        <ul className="mt-6 grid list-none gap-3.5">
          {features.map((text) => (
            <li key={text} className="flex items-start gap-3 font-medium text-ap-ink">
              <CheckIcon />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative flex min-h-[380px] items-end overflow-hidden rounded-2xl p-9 text-white shadow-[0_24px_60px_rgba(20,39,63,0.18)]"
        style={{ background: 'linear-gradient(160deg, #274a78, #14273f)' }}
      >
        <svg
          viewBox="0 0 64 64"
          className="absolute top-8 right-8 h-16 w-16 fill-[rgb(223_231_241/0.85)]"
          aria-hidden
        >
          <path d="M32 4L4 18v4h56v-4L32 4zM10 26v22h6V26h-6zm12 0v22h6V26h-6zm12 0v22h6V26h-6zm12 0v22h6V26h-6zM4 52v6h56v-6H4z" />
        </svg>
        <p className="font-heading text-[1.25rem] leading-[1.5] font-medium">
          “Justiça é a constante e perpétua vontade de dar a cada um o que é seu.”
          <span className="mt-3 block text-[0.8rem] font-sans font-medium tracking-[0.12em] text-ap-blue-soft uppercase">
            Compromisso Almeida Pimenta Advogados
          </span>
        </p>
      </div>
    </div>
  </section>
);
