import { DISCLAIMER_CONFIG } from '../config/disclaimer';
import { FOOTER_LINKS } from '../config/footer';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t-4 border-stone-800 bg-stone-900 text-stone-400 py-12 text-center mt-20 relative z-10 w-full shrink-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold font-display text-white mb-2">Solve.RuralOpsTools</h2>
        <p className="text-sm font-medium mb-8">Practical tools for folks who fix things themselves.</p>
        
        <nav aria-label="Footer Navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 m-0 p-0 list-none text-center text-xs font-bold uppercase tracking-wider text-stone-300">
            {FOOTER_LINKS.map(link => {
              const isExternal = link.url.startsWith('http');
              return (
                <li key={link.name}>
                  {isExternal ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white py-2 inline-block transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <NavLink to={link.url} className="hover:text-white py-2 inline-block transition-colors">
                      {link.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="text-xs text-stone-500 font-mono space-y-2">
          <p>Part of the <span className="font-bold text-stone-400">RuralOpsTools.com</span> Ecosystem &copy; {new Date().getFullYear()}</p>
          <NavLink to="/disclaimer" className="block hover:text-stone-300 transition-colors max-w-2xl mx-auto">{DISCLAIMER_CONFIG.shortFooter}</NavLink>
        </div>
      </div>
    </footer>
  );
}
