import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Fix', path: '/fix' },
    { name: 'Kits', path: '/kits' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Favorites', path: '/favorites' },
  ];

  const handleMobileClick = () => setIsOpen(false);

  return (
    <nav className="border-b-4 border-stone-800 shrink-0 sticky top-0 z-50 bg-[#F6F4F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex min-h-[80px] justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <NavLink to="/" className="text-2xl font-black tracking-widest font-display uppercase text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-600">
              Solve<span className="text-orange-600">.RuralOpsTools</span>
            </NavLink>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-stone-700 items-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-2 min-h-[48px] flex items-center border-b-2 ${
                    isActive 
                      ? 'text-orange-600 border-orange-600'
                      : 'border-transparent hover:text-orange-600 hover:border-orange-600'
                  }`
                }
                aria-current={({ isActive }) => isActive ? "page" : undefined}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 border-2 border-stone-800 p-2 hover:bg-stone-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-[2px_2px_0px_#292524] rounded-sm"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-stone-800" id="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleMobileClick}
                className={({ isActive }) =>
                  `block px-4 py-3 min-h-[48px] font-bold uppercase tracking-widest text-sm border-2 border-stone-800 shadow-[2px_2px_0px_#292524] ${
                    isActive
                      ? 'bg-orange-500 text-stone-900'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
