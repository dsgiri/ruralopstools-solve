import { useState } from 'react';
import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { SEO } from '../components/SEO';
import { CalculatorDisclaimer } from '../components/CalculatorDisclaimer';

const PROBLEM_CATEGORIES = [
  { id: 'water', label: 'Water & Leaks', toolId: 'water-check-planner', cta: 'Calculate Water Loss' },
  { id: 'pumps', label: 'Pumps & Power', toolId: 'pump-trouble-logger', cta: 'Log Pump Trouble' },
  { id: 'freeze', label: 'Freeze Prep', toolId: 'freeze-event-planner', cta: 'Plan Freeze Defense' },
  { id: 'fence', label: 'Fence Faults', toolId: 'fence-fault-tracker', cta: 'Track Fence Faults' },
  { id: 'remote', label: 'Remote Checks', toolId: 'remote-inspection-proof', cta: 'Estimate Cost' },
];

const FIX_KITS = [
  {
    id: 'flowwatch',
    title: 'FlowWatch Snap-On',
    description: 'Strap it to the pipe. Know when it leaks. Simple as that.',
    spec: 'Cellular / LoRaWAN',
    price: '$149 / node',
    icon: '💧',
  },
  {
    id: 'pulseguard',
    title: 'PulseGuard Monitor',
    description: "Clamps onto your pump's power line to warn you of rapid cycling.",
    spec: 'Non-Invasive CT Clamp',
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
  const [activeCategory, setActiveCategory] = useState(PROBLEM_CATEGORIES[0].id);

  const activeToolData = PROBLEM_CATEGORIES.find(c => c.id === activeCategory);
  const activeTool = tools.find(t => t.id === activeToolData?.toolId);

  return (
    <div className="flex flex-col flex-grow">
      <SEO 
        title="Solve | DIY Farm & Ranch Monitors | Rural Ops Tools" 
        description="Stop guessing. Find the leak. Fix it fast. Simple, rugged tools and snap-on monitors to track water leaks, fence faults, and freeze risks without the confusing manuals or IT guys." 
        keywords="IoT cost estimator, sensor network budgeting, rural ops tools, farm automation cost, diy monitors"
      />
      
      {/* Top Alert Notification Bar */}
      <div className="bg-orange-600 border-b-4 border-stone-800 text-center py-2 px-4 text-sm font-bold text-white tracking-wide">
          🛠️ Find waste. Estimate the damage. Pick the right fix.
      </div>
      
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            Rural Diagnostics & Field Tools
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-stone-900 max-w-4xl font-display">
            Stop guessing.<br/>
            <span className="text-orange-600 underline decoration-8 underline-offset-4">Find the leak.</span> Fix it fast.
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mb-10 font-medium">
            Simple, rugged tools and snap-on monitors to track water leaks, fence faults, and freeze risks without the confusing manuals or IT guys.
        </p>
        <div className="flex flex-wrap gap-4">
            <a href="#diagnostics" className="tactile-btn bg-orange-500 hover:bg-orange-600 text-stone-900 px-8 py-4 rounded-sm text-lg text-center font-bold w-full sm:w-auto transition-colors shadow-[4px_4px_0px_#292524] border-4 border-stone-900 active:translate-y-1 active:translate-x-1 active:shadow-none">
                Pick Your Problem
            </a>
            <a href="#kits" className="tactile-btn bg-stone-100 hover:bg-white text-stone-900 px-8 py-4 rounded-sm text-lg text-center font-bold w-full sm:w-auto transition-colors shadow-[4px_4px_0px_#292524] border-4 border-stone-900 active:translate-y-1 active:translate-x-1 active:shadow-none">
                See Hardware Kits
            </a>
        </div>
      </header>

      {/* Problem Picker & Diagnostics Section */}
      <section id="diagnostics" className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t-4 border-stone-800 w-full mb-8 bg-stone-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Diagnostics</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-display">What's broken today?</h2>
            <p className="text-stone-700 text-base font-medium mb-8">
              Skip the guesswork. Select a category to find the right diagnostic tool.
            </p>
            <div className="flex flex-col gap-3">
              {PROBLEM_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-4 py-4 border-4 border-stone-800 rounded-sm font-bold text-lg flex justify-between items-center transition-all ${activeCategory === cat.id ? 'bg-orange-500 shadow-[4px_4px_0px_#292524] translate-x-1 -translate-y-1' : 'bg-white hover:bg-stone-50'}`}
                >
                  <span>{cat.label}</span>
                  <span className="font-mono">{activeCategory === cat.id ? '→' : '+'}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
             <div className="font-mono text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">The Tools</div>
             <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-display">Estimate the Damage. Plan the Fix.</h2>
             <p className="text-stone-700 text-base font-medium mb-8">
              Use our field calculators to see exactly how much a problem is costing you and what it takes to solve it. 
             </p>
             <div className="bg-white p-6 md:p-8 border-4 border-stone-800 shadow-[8px_8px_0px_#292524]">
                {activeTool && (
                   <ToolCard tool={activeTool} ctaLabel={activeToolData?.cta} />
                )}
             </div>
          </div>
        </div>
      </section>
      
      {/* The Fixes (Hardware Kits) */}
      <section id="kits" className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t-4 border-stone-800 w-full">
        <div className="max-w-3xl mb-12 pt-8">
            <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Hardware Solutions</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">Rugged, Snap-On Monitors.</h2>
            <p className="text-stone-700 text-base md:text-lg font-medium leading-relaxed">
                You found the leak. Now fix it for good. Field-tested hardware that works offline and doesn't require an engineering degree.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {FIX_KITS.map(kit => (
             <article key={kit.id} className="bg-white border-4 border-stone-800 p-6 flex flex-col justify-between shadow-[8px_8px_0px_#292524] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#292524] transition-all">
                <div>
                   <div className="text-4xl mb-4">{kit.icon}</div>
                   <h3 className="text-2xl font-bold font-display text-stone-900 mb-2">{kit.title}</h3>
                   <div className="inline-block bg-stone-200 px-2 py-1 font-mono text-[10px] font-bold text-stone-800 uppercase tracking-wider mb-4 border border-stone-400">
                     {kit.spec}
                   </div>
                   <p className="text-stone-600 text-sm font-medium mb-6">
                     {kit.description}
                   </p>
                </div>
                <div>
                   <div className="font-mono text-lg font-bold text-stone-900 mb-4 pb-4 border-b-2 border-stone-200">
                     {kit.price}
                   </div>
                   <button className="w-full bg-stone-900 text-white font-bold py-3 text-center border-2 border-transparent hover:bg-stone-800 transition-colors uppercase tracking-widest text-sm">
                      Get the Right Monitor
                   </button>
                </div>
             </article>
          ))}
        </div>
      </section>

      {/* Proof & Trust */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t-4 border-stone-800 w-full mb-12">
        <div className="bg-stone-900 text-stone-100 p-8 md:p-12 border-4 border-stone-800 shadow-[8px_8px_0px_#EA580C]">
           <div className="max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-white">Built for folks who fix things themselves.</h2>
             <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Farms and ranches bleed money through silent leaks, overworked pumps, and unseen fence faults. Most "smart farm" tech requires a degree in IT just to turn it on.
             </p>
             <p className="text-lg text-stone-300 leading-relaxed">
                We built Solve because rural operators don't need digital transformation—they need a simple, reliable way to find the leak, track the problem, and prove the work got done. No tech guys required.
             </p>
           </div>
        </div>
      </section>

      <section className="px-6 md:px-8 pb-16">
        <aside className="max-w-7xl mx-auto">
          <CalculatorDisclaimer className="!mt-0 shadow-[4px_4px_0px_#292524] border-2 border-stone-800 bg-[#FEF9C3]" />
        </aside>
      </section>
    </div>
  );
}

