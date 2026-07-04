import { DISCLAIMER_CONFIG } from '../config/disclaimer';
import { FOOTER_LINKS } from '../config/footer';

export function Footer() {
  return (
    <footer className="border-t-4 border-stone-800 bg-stone-900 text-stone-400 py-12 text-center mt-20 relative z-10 w-full shrink-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold font-display text-white mb-2">Solve.RuralOpsTools</h2>
        <p className="text-sm font-medium mb-8">Practical tools for folks who fix things themselves.</p>
        
        <nav aria-label="Footer Navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 m-0 p-0 list-none text-center text-xs font-bold uppercase tracking-wider text-stone-300">
            {FOOTER_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-white py-2 inline-block transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="text-xs text-stone-500 font-mono space-y-2">
          <p>Part of the <span className="font-bold text-stone-400">RuralOpsTools.com</span> Ecosystem &copy; {new Date().getFullYear()}</p>
          <a href="https://ruralopstools.com/disclaimer" className="block hover:text-stone-300 transition-colors max-w-2xl mx-auto">{DISCLAIMER_CONFIG.shortFooter}</a>
        </div>
      </div>
    </footer>
  );
}
