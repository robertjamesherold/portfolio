import { navigate } from '../lib/router';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line-subtle bg-bg">
      <div className="mx-auto max-w-[1760px] px-6 sm:px-10 lg:px-20 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-ink-3 text-[14px]">
            <img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              data-no-zoom
              width={24}
              height={24}
              className="w-6 h-6 shrink-0"
            />
            <span>&copy; {currentYear} Robert James Herold. All rights reserved.</span>
          </div>

          <nav className="flex items-center gap-6 text-[14px]">
            <a
              href="/cv-robert-james-herold.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lebenslauf als PDF in neuem Tab öffnen"
              className="text-ink-3 hover:text-ink-1 transition"
            >
              Lebenslauf (PDF)
            </a>
            <a
              href="/impressum"
              onClick={(e) => {
                e.preventDefault();
                navigate('/impressum');
              }}
              className="text-ink-3 hover:text-ink-1 transition"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              onClick={(e) => {
                e.preventDefault();
                navigate('/datenschutz');
              }}
              className="text-ink-3 hover:text-ink-1 transition"
            >
              Datenschutz
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
