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

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex h-[92px] items-center justify-between border-b border-ap-line bg-[rgb(255_255_255/0.92)] backdrop-blur-xl page-px">
      <NavLogo />
      <ul className="hidden list-none items-center gap-8 lg:flex">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
          const className = cn(
            'font-sans text-[13.5px] font-medium tracking-[0.02em] no-underline transition-colors duration-200',
            isActive ? 'text-ap-navy' : 'text-ap-ink-soft hover:text-ap-navy',
          );

          return (
            <li key={link.href}>
              {link.href.startsWith('/') && !link.href.includes('#') ? (
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
      <Link
        to="/contato"
        className="font-sans rounded-lg bg-ap-navy px-6 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-ap-navy-700"
      >
        Fale com um advogado
      </Link>
    </nav>
  );
};
