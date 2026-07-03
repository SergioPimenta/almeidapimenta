import { externalLinkProps } from '../../lib/links';
import { ContactChannels } from './ContactChannels';
import { ContactForm } from './ContactForm';

export const ContactMain = () => (
  <section id="formulario" className="bg-ap-bg page-px py-[100px]">
    <div className="mb-14 max-w-2xl">
      <span className="font-sans inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase before:block before:h-px before:w-7 before:bg-ap-blue before:content-['']">
        Formulário
      </span>
      <h2 className="font-heading mt-4 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] font-bold text-ap-navy">
        Envie sua mensagem
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-ap-ink-soft">
        Preencha os campos abaixo e retornaremos com os próximos passos. Quanto mais detalhes sobre a
        sua situação, mais precisa será nossa orientação.
      </p>
    </div>

    <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="rounded-2xl border border-ap-line bg-ap-surface p-8 shadow-[0_2px_12px_rgba(20,39,63,0.05)] md:p-10">
        <ContactForm />
      </div>

      <aside className="flex flex-col gap-6">
        <ContactChannels stacked />

        <div className="rounded-xl border border-ap-line bg-ap-surface p-6">
          <h3 className="font-sans mb-3 text-sm font-semibold text-ap-navy">Horário de atendimento</h3>
          <ul className="flex list-none flex-col gap-2 text-[13px] text-ap-ink-soft">
            <li className="flex justify-between gap-4">
              <span>Segunda a sexta</span>
              <span className="font-medium text-ap-ink">09h — 18h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sábado</span>
              <span className="font-medium text-ap-ink">09h — 13h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Domingo e feriados</span>
              <span className="font-medium text-ap-ink">Fechado</span>
            </li>
          </ul>
        </div>

        <a
          href="https://wa.me/5541992034554"
          className="flex items-center justify-center gap-2 rounded-lg border border-ap-line bg-ap-champagne/60 px-6 py-4 text-sm font-medium text-ap-navy no-underline transition-all duration-200 hover:border-ap-blue hover:bg-ap-champagne"
          {...externalLinkProps('https://wa.me/5541992034554')}
        >
          <svg className="h-5 w-5 text-ap-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Prefere WhatsApp? Fale agora
        </a>
      </aside>
    </div>
  </section>
);
