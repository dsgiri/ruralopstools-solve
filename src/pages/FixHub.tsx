import { SEO } from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { Droplet, Zap, Snowflake, Activity, Truck } from 'lucide-react';

const FIX_CATEGORIES = [
  {
    id: 'water',
    title: 'Water Lines & Tanks',
    problem: "You're losing pressure, draining tanks, or paying for water you aren't using.",
    action: "Calculate exact gallon loss and find the right snap-on leak monitor.",
    cta: "Stop Water Loss →",
    icon: Droplet,
    path: "/calculators",
    colSpan: true
  },
  {
    id: 'pumps',
    title: 'Well Pumps & Motors',
    problem: "The pump is short-cycling, pulling too much power, or making a new noise.",
    action: "Log the symptoms to gauge failure risk before the motor burns out entirely.",
    cta: "Diagnose Pump Trouble →",
    icon: Zap,
    path: "/calculators",
    colSpan: true
  },
  {
    id: 'freeze',
    title: 'Winter & Freeze Risk',
    problem: "The temperature is dropping, and exposed valves are going to crack.",
    action: "Audit exposed lines and plan your winterization checklist before the freeze.",
    cta: "Plan Freeze Defense →",
    icon: Snowflake,
    path: "/calculators",
    colSpan: false
  },
  {
    id: 'fence',
    title: 'Electric Perimeter',
    problem: "The voltage is dropping, and livestock are testing the weak spots.",
    action: "Track fault locations and map out the fastest repair route.",
    cta: "Track Fence Faults →",
    icon: Activity,
    path: "/calculators",
    colSpan: false
  },
  {
    id: 'remote',
    title: 'Remote Gates & Sites',
    problem: "You're burning diesel driving to check sites that might be totally fine.",
    action: "Price out remote sensors to verify gates are closed and tanks are full without driving.",
    cta: "Cut Drive Time →",
    icon: Truck,
    path: "/calculators",
    colSpan: false
  }
];

export function FixHub() {
  return (
    <div className="flex flex-col flex-grow bg-stone-50">
      <SEO 
        title="What's broken? | Solve Rural Diagnostics" 
        description="Skip the guesswork. Tell us what's failing, and we'll hand you the exact tool to measure the damage and fix it fast." 
      />
      
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-16 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            Diagnostics
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 font-display">
            What's broken today?
        </h1>
        <p className="text-lg text-stone-700 max-w-2xl font-medium">
            Skip the guesswork. Tell us what's failing, and we'll hand you the exact tool to measure the damage and fix it fast.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIX_CATEGORIES.map((cat, idx) => (
            <NavLink 
              key={cat.id} 
              to={cat.path}
              className={`tactile-card interactive p-6 flex flex-col justify-between ${cat.colSpan ? 'lg:col-span-2' : ''}`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-stone-100 border-2 border-stone-800 shadow-[2px_2px_0px_#292524]">
                    <cat.icon className="w-8 h-8 text-stone-900" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-stone-900">{cat.title}</h2>
                </div>
                <p className="text-stone-900 font-bold text-lg mb-3 leading-snug">
                  {cat.problem}
                </p>
                <p className="font-mono text-sm text-stone-600 mb-8 leading-relaxed">
                  {cat.action}
                </p>
              </div>
              
              <div className="font-mono font-bold text-orange-600 uppercase tracking-wider text-sm mt-auto flex items-center justify-between border-t-2 border-stone-100 pt-4">
                {cat.cta}
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
