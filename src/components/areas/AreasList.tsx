import { practiceAreas } from './areasData';

export const AreasList = () => (
  <section id="areas" className="bg-ap-bg page-px py-[100px]">
    <div className="grid gap-6 md:grid-cols-2">
      {practiceAreas.map((area) => (
        <article
          key={area.id}
          id={area.id}
          className="group scroll-mt-28 overflow-hidden rounded-2xl border border-ap-line bg-ap-surface p-8 shadow-[0_2px_8px_rgba(20,39,63,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_54px_rgba(20,39,63,0.13)] md:p-10"
        >
          <div className="flex items-start gap-5">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_8px_18px_rgba(28,58,94,0.28)]"
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
            <div>
              <h2 className="font-heading text-[1.5rem] font-bold text-ap-navy">{area.title}</h2>
            </div>
          </div>

          <p className="mt-5 text-[14.5px] leading-[1.75] text-ap-ink-soft">{area.desc}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {area.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-ap-ink">
                <svg viewBox="0 0 24 24" width="18" height="18" className="mt-0.5 shrink-0 fill-ap-blue">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
