import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLogo } from './ui';
import { cn } from '../../lib/cn';

const links = [
  { href: '/', label: 'Início' },
  { href: '/escritorio', label: 'Escritório' },
  { href: '/areas', label: 'Áreas de Atuação' },
  { href: '/depoimentos', label: 'Depoimentos' },
  { href: '/contato', label: 'Contato' },
];

const isRoute = (href: string) => href.startsWith('/') && !href.includes('#');

export const Nav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Fecha o menu ao trocar de rota.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] border-b border-ap-line bg-[rgb(255_255_255/0.92)] backdrop-blur-xl">
      <div className="flex h-[92px] items-center justify-between page-px">
        <NavLogo />

        {/* Links (desktop) */}
        <ul className="hidden list-none items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const className = cn(
              'font-sans text-[13.5px] font-medium tracking-[0.02em] no-underline transition-colors duration-200',
              isActive ? 'text-ap-navy' : 'text-ap-ink-soft hover:text-ap-navy',
            );

            return (
              <li key={link.href}>
                {isRoute(link.href) ? (
                  <Link to={link.href} className={className}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA (desktop) */}
        <Link
          to="/contato"
          className="font-sans hidden rounded-lg bg-ap-navy px-6 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-ap-navy-700 lg:inline-flex"
        >
          Fale com um advogado
        </Link>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center text-ap-navy lg:hidden"
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Painel do menu (mobile) */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden bg-white transition-[max-height] duration-300 ease-out lg:hidden',
          open ? 'max-h-96 border-t border-ap-line' : 'max-h-0',
        )}
      >
        <ul className="flex list-none flex-col gap-1 page-px py-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const className = cn(
              'font-sans block rounded-lg px-3 py-3 text-[15px] font-medium no-underline transition-colors duration-200',
              isActive ? 'bg-ap-bg text-ap-navy' : 'text-ap-ink-soft hover:bg-ap-bg hover:text-ap-navy',
            );

            return (
              <li key={link.href}>
                {isRoute(link.href) ? (
                  <Link to={link.href} className={className} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={className} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
          <li className="mt-2">
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="font-sans block rounded-lg bg-ap-navy px-3 py-3 text-center text-[15px] font-semibold text-white no-underline"
            >
              Fale com um advogado
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
