import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] px-4 sm:px-8 py-6 mt-auto shrink-0 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4 md:mb-0">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-4 sm:gap-6 m-0 p-0 list-none text-center">
            <li><Link to="/about" className="hover:text-[#1A1A1A] py-3 inline-block">About Solve</Link></li>
            <li><Link to="/contact" className="hover:text-[#1A1A1A] py-3 inline-block">Contact</Link></li>
            <li><Link to="/legal" className="hover:text-[#1A1A1A] py-3 inline-block">Legal</Link></li>
            <li><Link to="/license" className="hover:text-[#1A1A1A] py-3 inline-block">License</Link></li>
            <li><a href="#" className="hover:text-[#1A1A1A] py-3 inline-block">GitHub</a></li>
          </ul>
        </nav>
      </div>
      <div className="text-[10px] text-gray-400 text-center md:text-right">
        Part of the <span className="font-bold">RuralUtilityCost.com</span> Ecosystem &copy; {new Date().getFullYear()}<br/>
        <span className="font-normal italic mt-1 block">Calculators provide estimates for decision support only.</span>
      </div>
    </footer>
  );
}
