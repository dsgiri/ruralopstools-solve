import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdContainer } from '../components/AdContainer';

export function Home() {
  const featuredTools = tools.slice(0, 3);
  const remainingTools = tools.slice(3);

  return (
    <div className="flex flex-col flex-grow bg-[#F9FAF8]">
      <SEO 
        title="Solve | IoT App Cost Estimator & Rural Utility Calculator" 
        description="Estimate costs for IoT projects, farm automation, and sensor deployments. Calculate Total Cost of Ownership across hardware, cloud, and maintenance." 
        keywords="IoT cost estimator, sensor network budgeting, rural utility cost, farm automation cost, build vs buy software"
      />
      
      {/* Hero Section */}
      <header className="px-4 sm:px-8 py-12 bg-[#1E3A8A] text-white shrink-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
            IoT & Automation Cost Hub
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm md:text-base font-medium leading-relaxed mb-8">
            Systemic cost estimation for rural infrastructure. Model project builds, integration layers, and connectivity overhead 
            within the Rural Utility Cost ecosystem. Practical tech for smart agriculture.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#featured" 
              className="bg-[#1A1A1A] hover:bg-black text-white text-[12px] font-bold uppercase tracking-widest px-6 py-3 min-h-[48px] rounded transition-colors inline-flex items-center justify-center text-center"
              onClick={() => {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'click', { element: 'start_estimating_hero_btn' });
                }
              }}
            >
              Start Estimating
            </a>
            <Link 
              to="/about" 
              className="bg-transparent text-white border border-white text-[12px] font-bold uppercase tracking-widest px-6 py-3 min-h-[48px] rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center text-center"
            >
              Read Methodology
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Tools */}
      <section id="featured" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F]">Featured Calculators</h2>
            <div className="h-px flex-1 bg-[#E5E7EB] ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Mid-page Responsive Ad placement */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mb-4">
        <AdContainer slotId="IN_CONTENT_SLOT_1" />
      </div>

      {/* All Tools Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">All Planning Tools</h2>
            <div className="h-px flex-1 bg-[#E5E7EB] ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 pb-16">
        <aside className="max-w-7xl mx-auto">
          <div className="border-l-2 border-[#1E3A8A] pl-4 py-2">
            <h4 className="text-xs font-bold uppercase mb-1">Methodology Notice</h4>
            <p className="text-[11px] text-gray-600 italic leading-snug">
              Results are decision-support estimates based on standard rural integration benchmarks. Verify major capital allocations independently.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
