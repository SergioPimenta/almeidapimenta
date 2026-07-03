import { externalLinkProps } from '../../lib/links';

// Usado pela página de Login (tema escuro) — mantido como está.
export const inputClass =
  'font-body w-full rounded-md border border-vesk-border bg-vesk-dark-2 px-4 py-[13px] text-sm text-vesk-surface outline-none transition-colors duration-200 placeholder:text-vesk-muted/60 focus:border-vesk-orange';

// Inputs do tema Almeida Pimenta (claro).
export const apInputClass =
  'font-sans w-full rounded-lg border border-ap-line bg-ap-bg px-4 py-[13px] text-sm text-ap-ink outline-none transition-colors duration-200 placeholder:text-ap-ink-soft/55 focus:border-ap-blue focus:bg-white';

export const contactChannels = [
  {
    title: 'E-mail',
    desc: 'Resposta em até 24 horas úteis',
    content: (
      <a
        href="mailto:contato@almeidapimenta.com.br"
        className="text-ap-ink-soft no-underline hover:text-ap-navy"
      >
        contato@almeidapimenta.com.br
      </a>
    ),
    icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    title: 'Telefone / WhatsApp',
    desc: 'Atendimento de segunda a sexta',
    content: (
      <span className="flex flex-col gap-0.5">
        <a
          href="https://wa.me/5541992034554"
          className="text-ap-ink-soft no-underline hover:text-ap-navy"
          {...externalLinkProps('https://wa.me/5541992034554')}
        >
          (41) 99203-4554
        </a>
        <a href="tel:+5592991329582" className="text-ap-ink-soft no-underline hover:text-ap-navy">
          (92) 99132-9582
        </a>
      </span>
    ),
    icon: (
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    title: 'Escritório',
    desc: 'Atendimento presencial e on-line',
    content: <span className="text-ap-ink-soft">Curitiba, PR — Brasil</span>,
    icon: (
      <>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <circle cx="12" cy="11" r="3" />
      </>
    ),
  },
] as const;

export const contactFaqs = [
  {
    q: 'Qual o prazo para retorno do primeiro contato?',
    a: 'Respondemos em até 24 horas úteis. Para demandas urgentes, utilize o WhatsApp.',
  },
  {
    q: 'A primeira consulta tem custo?',
    a: 'A consulta inicial é sem compromisso. Avaliamos a sua situação e apresentamos os próximos passos.',
  },
  {
    q: 'Vocês atendem empresas de qual porte?',
    a: 'Assessoramos desde pequenos negócios até empresas consolidadas, na esfera preventiva e contenciosa.',
  },
  {
    q: 'O atendimento pode ser feito à distância?',
    a: 'Sim. Atendemos presencialmente em Curitiba e de forma on-line para clientes de todo o Brasil.',
  },
] as const;
