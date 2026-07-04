import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CalculatorDisclaimer } from '../components/CalculatorDisclaimer';

export function Home() {
  const featuredTools = tools.slice(0, 3);
  const remainingTools = tools.slice(3);

  return (
    <div className="flex flex-col flex-grow">
      <SEO 
        title="Solve | DIY Farm & Ranch Monitors | Rural Ops Tools" 
        description="Grab a tool to find and fix your farm utility leaks. Estimate costs for IoT projects, farm automation, and sensor deployments." 
        keywords="IoT cost estimator, sensor network budgeting, rural ops tools, farm automation cost, diy monitors"
      />
      
      {/* Top Alert Notification Bar */}
      <div className="bg-orange-600 border-b-4 border-stone-800 text-center py-2 px-4 text-sm font-bold text-white tracking-wide">
          🛠️ Grab a tool below to find and fix your farm utility leaks.
      </div>
      
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20 text-left shrink-0">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            Field Guide & Tools
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-stone-900 max-w-4xl font-display">
            Stop guessing.<br/>
            <span className="text-orange-600 underline decoration-8 underline-offset-4">Find the leak.</span> Fix it fast.
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mb-10 font-medium">
            We built simple, rugged "snap-on" monitors and cost calculators for your pumps, tanks, and fences. No tech guys. No confusing manuals. Just plug it in and check the stats.
        </p>
        <div className="flex flex-wrap gap-4">
            <a href="#calculators" onClick={(e) => {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'click', { element: 'start_estimating_hero_btn' });
                }
              }} className="tactile-btn bg-orange-500 hover:bg-orange-600 text-stone-900 px-8 py-4 rounded-sm text-lg text-center w-full sm:w-auto transition-colors">
                Calculate My Waste
            </a>
            <a href="#suite" className="tactile-btn bg-stone-100 hover:bg-white text-stone-900 px-8 py-4 rounded-sm text-lg text-center w-full sm:w-auto transition-colors">
                Explore The Tool Wall
            </a>
        </div>
      </header>

      {/* Basic Math Calculators (Featured) */}
      <section id="calculators" className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t-4 border-stone-800 w-full mb-8">
        <div className="max-w-3xl mb-12 pt-8">
            <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Chapter 01: The Math</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">Run the numbers.</h2>
            <p className="text-stone-700 text-base md:text-lg font-medium leading-relaxed">
                Use our scratchpad to figure out exactly how much cash is slipping through the cracks. Once we find the problem, we'll hand you the exact tool to fix it.
            </p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
      
      {/* The Tool Wall */}
      <section id="suite" className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t-4 border-stone-800 w-full">
        <div className="max-w-3xl mb-12 pt-8">
            <div className="font-mono text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Chapter 02: The Hardware</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">The Tool Wall</h2>
            <p className="text-stone-700 text-base md:text-lg font-medium leading-relaxed">
                Click any kit box to open the manual. You'll see what's inside, how to snap it on in 15 minutes, and what it costs. No hidden fees.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {remainingTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
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
