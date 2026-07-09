import { SEO } from '../components/SEO';

const FIX_KITS = [
  {
    id: 'flowwatch',
    title: 'FlowWatch Snap-On',
    subtype: 'Clamp-on Ultrasonic Flow Monitor',
    description: 'Tracks water flow rates and sends an alert the second a line drops pressure or runs continuously.',
    whyItHelps: 'Catches silent leaks and blown valves before they drain your tank and burn up your pump.',
    spec: 'Cellular / LoRaWAN',
    price: '$149 / node',
    icon: '💧',
    tags: ['10-YEAR BATTERY', 'CLAMP-ON']
  },
  {
    id: 'pulseguard',
    title: 'PulseGuard Monitor',
    subtype: 'Electric Fence Voltage Tracker',
    description: "Hooks directly onto your perimeter wire and texts you if the voltage drops below your safe threshold.",
    whyItHelps: "Stops you from driving the fence line every day just to find out a branch fell on the wire.",
    spec: 'Solar / LoRaWAN',
    price: '$199 / node',
    icon: '⚡',
    tags: ['SOLAR POWERED', 'LORA BUILT-IN']
  },
  {
    id: 'gatelog',
    title: 'GateLog Sensor',
    subtype: 'Heavy-Duty Open/Close Sensor',
    description: 'A weather-proof magnetic contact that proves exactly when a remote gate, shed, or pump house is opened.',
    whyItHelps: 'Eliminates the "did the contractor leave the gate open?" panic drive and provides a hard audit trail.',
    spec: '10-Year Battery',
    price: '$89 / node',
    icon: '🚪',
    tags: ['WEATHER-PROOF', 'CELLULAR']
  }
];

export function KitsHub() {
  return (
    <div className="flex flex-col flex-grow bg-stone-50">
      <SEO 
        title="Hardware Kits | Solve Rural Diagnostics" 
        description="Field-tested hardware bundles that work offline, survive the weather, and don’t require an IT guy to install." 
      />
      
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-16 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            Hardware Solutions
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 font-display">
            Rugged, Snap-On Monitors.
        </h1>
        <p className="text-lg text-stone-700 max-w-2xl font-medium">
            You found the leak—now fix it for good. Field-tested hardware bundles that work offline, survive the weather, and don’t require an IT guy to install.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FIX_KITS.map(kit => (
             <article key={kit.id} className="tactile-card flex flex-col justify-between h-full p-0">
                <div className="p-6">
                   <div className="flex gap-2 flex-wrap mb-4">
                     {kit.tags.map(tag => (
                       <span key={tag} className="inline-block bg-stone-100 px-2 py-1 font-mono text-[10px] font-bold text-stone-800 uppercase tracking-wider border-2 border-stone-800">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <div className="text-4xl mb-4">{kit.icon}</div>
                   <h3 className="text-2xl font-bold font-display text-stone-900 mb-1">{kit.title}</h3>
                   <div className="text-stone-500 font-mono text-xs uppercase tracking-widest font-bold mb-4 pb-4 border-b-2 border-stone-200">
                     {kit.subtype}
                   </div>
                   <p className="text-stone-900 text-base font-bold mb-4 leading-snug">
                     {kit.description}
                   </p>
                   <div className="bg-stone-100 border-l-4 border-stone-400 p-3 mb-6">
                     <p className="text-stone-700 font-mono text-sm leading-relaxed">
                       {kit.whyItHelps}
                     </p>
                   </div>
                </div>
                <div className="p-6 bg-stone-100 border-t-4 border-stone-800 mt-auto">
                   <div className="font-mono text-lg font-bold text-stone-900 mb-4 text-center">
                     {kit.price}
                   </div>
                   <button className="tactile-btn w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 text-center block">
                      View Kit &rarr;
                   </button>
                </div>
             </article>
          ))}
        </div>
      </section>
    </div>
  );
}
