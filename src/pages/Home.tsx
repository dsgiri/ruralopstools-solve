import { SEO } from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { CalculatorDisclaimer } from '../components/CalculatorDisclaimer';
import { Droplet, Zap, Snowflake, Activity, Truck } from 'lucide-react';
import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';

const FIX_CATEGORIES = [
  { id: 'water', label: 'Water Lines & Tanks', icon: Droplet, path: '/fix/water-leaks' },
  { id: 'pumps', label: 'Well Pumps & Motors', icon: Zap, path: '/fix/pumps-power' },
  { id: 'freeze', label: 'Winter & Freeze Risk', icon: Snowflake, path: '/fix/freeze-prep' },
  { id: 'fence', label: 'Electric Perimeter', icon: Activity, path: '/fix/fence-faults' },
  { id: 'remote', label: 'Remote Gates & Sites', icon: Truck, path: '/fix/remote-checks' },
];

const FIX_KITS = [
  {
    id: 'flowwatch',
    title: 'FlowWatch Snap-On',
    description: 'Tracks water flow rates and sends an alert the second a line drops pressure or runs continuously.',
    spec: 'Cellular / LoRaWAN',
    price: '$149 / node',
    icon: '💧',
  },
  {
    id: 'pulseguard',
    title: 'PulseGuard Monitor',
    description: "Hooks directly onto your perimeter wire and texts you if the voltage drops below your safe threshold.",
    spec: 'Solar / LoRaWAN',
    price: '$199 / node',
    icon: '⚡',
  },
  {
    id: 'gatelog',
    title: 'GateLog Sensor',
    description: 'Heavy-duty open/close tracker for remote access points.',
    spec: '10-Year Battery',
    price: '$89 / node',
    icon: '🚪',
  }
];

export function Home() {
  const primaryTools = tools.filter(t => [
    'water-check-planner',
    'pump-trouble-logger',
    'freeze-event-planner',
  ].includes(t.id));

  return (
    <div className="flex flex-col flex-grow">
      <SEO 
        title="Solve | Rural Diagnostics & Field Tools" 
        description="Stop guessing. Find the leak. Fix it fast. Simple, rugged tools and snap-on monitors to track water leaks, fence faults, and freeze risks without confusing manuals or IT guys." 
      />
      
      {/* 2. Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            RURAL DIAGNOSTICS & FIELD TOOLS
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-stone-900 max-w-4xl font-display">
            Stop guessing.<br/>
            <span className="text-orange-600 underline decoration-8 underline-offset-4">Find the leak.</span> Fix it fast.
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mb-10 font-medium">
            Simple, rugged tools and snap-on monitors to track water leaks, fence faults, and freeze risks without confusing manuals or IT guys.
        </p>
        <div className="flex flex-wrap gap-4">
            <NavLink to="/fix" className="tactile-btn bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 text-lg text-center block w-full sm:w-auto">
                Pick Your Problem
            </NavLink>
            <NavLink to="/kits" className="tactile-btn bg-stone-100 hover:bg-white text-stone-900 px-8 py-4 text-lg text-center block w-full sm:w-auto">
                See Hardware Kits
            </NavLink>
        </div>
      </header>

      {/* 3. Fix Section (Problem Picker) */}
      <section className="border-t-4 border-stone-800 bg-stone-100 w-full py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Diagnostics</div>
          <h2 className="text-4xl font-bold text-stone-900 mb-4 font-display">What's broken today?</h2>
          <p className="text-stone-700 text-lg font-medium mb-12 max-w-2xl">
            Skip the guesswork. Select a category to find the exact diagnostic tool for the job.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIX_CATEGORIES.map(cat => (
              <NavLink 
                key={cat.id} 
                to="/fix"
                className="tactile-card interactive p-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <cat.icon className="w-8 h-8 text-stone-900" strokeWidth={2} />
                  <span className="text-xl font-bold font-display text-stone-900">{cat.label}</span>
                </div>
                <span className="font-mono font-bold text-orange-600">→</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Calculators Section (The Math) */}
      <section className="border-t-4 border-stone-800 bg-white w-full py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="font-mono text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">Field Calculators</div>
          <h2 className="text-4xl font-bold text-stone-900 mb-4 font-display">Estimate the damage. Plan the fix.</h2>
          <p className="text-stone-700 text-lg font-medium mb-12 max-w-2xl">
            Use our field calculators to see exactly how much a problem is costing you and what it takes to solve it. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="mt-12 text-center sm:text-left">
            <NavLink to="/calculators" className="tactile-btn inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-sm">
                View All Calculators &rarr;
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* 5. Kits Section (The Hardware) */}
      <section className="border-t-4 border-stone-800 bg-stone-50 w-full py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Hardware Solutions</div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">Rugged, Snap-On Monitors.</h2>
          <p className="text-stone-700 text-lg font-medium leading-relaxed max-w-2xl mb-12">
              You found the leak—now fix it for good with field-tested hardware that works offline and requires no engineering degree.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FIX_KITS.map(kit => (
               <article key={kit.id} className="tactile-card interactive p-6 flex flex-col justify-between">
                  <div>
                     <div className="text-4xl mb-4">{kit.icon}</div>
                     <h3 className="text-2xl font-bold font-display text-stone-900 mb-2">{kit.title}</h3>
                     <div className="inline-block bg-stone-200 px-2 py-1 font-mono text-[10px] font-bold text-stone-800 uppercase tracking-wider mb-4 border-2 border-stone-800">
                       {kit.spec}
                     </div>
                     <p className="text-stone-900 text-sm font-bold mb-6">
                       {kit.description}
                     </p>
                  </div>
                  <div>
                     <div className="font-mono text-lg font-bold text-stone-900 mb-4 pb-4 border-b-2 border-stone-200 text-center">
                       {kit.price}
                     </div>
                     <NavLink to="/kits" className="tactile-btn w-full bg-stone-900 text-white font-bold py-3 text-center block hover:bg-stone-800 text-sm">
                        Get the Right Monitor
                     </NavLink>
                  </div>
               </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Solve Exists (Trust & Proof) */}
      <section className="border-t-4 border-stone-800 w-full">
        <div className="bg-stone-900 text-stone-100 px-6 py-20">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white">Built for folks who fix things themselves.</h2>
             <div className="space-y-6 text-xl text-stone-300 leading-relaxed font-medium">
               <p>
                  Farms and ranches bleed money through silent leaks, overworked pumps, and unseen fence faults. Most "smart farm" tech requires a degree in IT just to turn it on.
               </p>
               <p>
                  We built Solve because rural operators don't need digital transformation—they need a simple, reliable way to find the leak, track the problem, and prove the work got done. No tech guys required.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* 7. Important Notice / Disclaimer */}
      <section className="px-6 md:px-8 py-16 bg-stone-50 border-t-4 border-stone-800">
        <aside className="max-w-7xl mx-auto">
          <CalculatorDisclaimer className="!mt-0 shadow-[4px_4px_0px_#292524] border-4 border-stone-800 bg-[#FEF9C3]" />
        </aside>
      </section>
    </div>
  );
}

