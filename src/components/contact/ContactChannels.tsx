import { contactChannels } from './contactData';

export const ContactChannels = ({ stacked = false }: { stacked?: boolean }) => (
  <div className={stacked ? 'flex flex-col gap-4' : 'flex flex-wrap justify-center gap-7'}>
    {contactChannels.map((item) => (
      <div
        key={item.title}
        className={
          stacked
            ? 'flex items-start gap-4 rounded-xl border border-ap-line bg-ap-surface p-5'
            : 'flex items-start gap-4'
        }
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-white"
          style={{ background: 'linear-gradient(150deg, #3f6592, #1c3a5e)' }}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {item.icon}
          </svg>
        </span>
        <div>
          <h4 className="font-sans mb-0.5 text-sm font-semibold text-ap-navy">{item.title}</h4>
          {stacked && <p className="mb-1.5 text-[11px] text-ap-ink-soft">{item.desc}</p>}
          <p className="text-[13px] text-ap-ink-soft">{item.content}</p>
        </div>
      </div>
    ))}
  </div>
);
