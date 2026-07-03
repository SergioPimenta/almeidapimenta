import { Link } from 'react-router-dom';
import { externalLinkProps } from '../../lib/links';

const footerCols = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Escritório', href: '/escritorio' },
      { label: 'Áreas de Atuação', href: '/areas' },
      { label: 'Depoimentos', href: '/depoimentos' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Áreas',
    links: [
      { label: 'Trabalhista', href: '/areas#trabalhista' },
      { label: 'Tributário', href: '/areas#tributario' },
      { label: 'Cível e Consumo', href: '/areas#civel' },
      { label: 'Empresarial', href: '/areas#empresarial' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '(41) 99203-4554', href: 'tel:+5541992034554' },
      { label: '(92) 99132-9582', href: 'tel:+5592991329582' },
      { label: 'contato@almeidapimenta.com.br', href: 'mailto:contato@almeidapimenta.com.br' },
      { label: 'Curitiba, PR', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [{ label: 'Política de Privacidade', href: '/politica-privacidade' }],
  },
];

const socials = [
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'Facebook',
    icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
];

export const Footer = () => (
  <footer className="border-t border-[rgb(255_255_255/0.08)] bg-ap-navy-deep page-px pt-[60px] pb-8 text-vesk-surface">
    <div className="mb-12 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
      <div>
        <div className="inline-flex rounded-lg bg-white p-2.5">
          <img
            src="/assets/almeida-pimenta-logo.png"
            alt="Almeida Pimenta Advogados"
            className="h-16 w-auto md:h-20"
          />
        </div>
        <p className="mt-5 max-w-[280px] text-[13px] leading-[1.75] text-[rgb(223_231_241/0.55)]">
          Advocacia empresarial com excelência em Direito Trabalhista, Tributário e Cível — atuação
          preventiva e contenciosa.
        </p>
      </div>
      {footerCols.map((col) => (
        <div key={col.title}>
          <h4 className="font-sans mb-4 text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
            {col.title}
          </h4>
          <ul className="flex list-none flex-col gap-2.5">
            {col.links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className="text-[13px] text-[rgb(223_231_241/0.6)] no-underline transition-colors duration-200 hover:text-ap-blue-soft"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[13px] text-[rgb(223_231_241/0.6)] no-underline transition-colors duration-200 hover:text-ap-blue-soft"
                    {...externalLinkProps(link.href)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgb(255_255_255/0.08)] pt-7 sm:flex-row">
      <p className="text-xs text-[rgb(223_231_241/0.5)]">
        © 2026 Almeida Pimenta Advogados. Todos os direitos reservados.
      </p>
      <div className="flex gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href="#"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(255_255_255/0.1)] bg-[rgb(255_255_255/0.06)] no-underline transition-all duration-200 hover:border-ap-blue hover:bg-ap-blue [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:text-[rgb(223_231_241/0.7)] hover:[&_svg]:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {social.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  </footer>
);
