import { useMemo } from 'react';
import { SEO } from '../components/SEO';
import { parsePortfolioMarkdown } from '../utils/parsePortfolio';
import portfolioMd from '../content/portfolio-sites.md?raw';

export function Portfolio() {
  const sites = useMemo(() => parsePortfolioMarkdown(portfolioMd), []);
  
  // Group by category, but keep order within category by priority
  const groupedSites = useMemo(() => {
    const map = new Map<string, typeof sites>();
    
    sites.forEach(site => {
      const cat = site.category || 'Other';
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(site);
    });
    
    // Sort categories (maybe a custom order, or just alphabetically except for Core)
    const sortedCategories = Array.from(map.keys()).sort((a, b) => {
      if (a === 'Core') return -1;
      if (b === 'Core') return 1;
      return a.localeCompare(b);
    });
    
    return sortedCategories.map(cat => ({
      category: cat,
      sites: map.get(cat)!
    }));
  }, [sites]);

  return (
    <div className="flex flex-col flex-grow">
      <SEO 
        title="Network Portfolio | Rural Ops Tools" 
        description="Explore the full network of planning, budgeting, and estimation tools in the Rural Ops Tools ecosystem." 
      />
      
      {/* Header */}
      <header className="px-6 md:px-8 py-12 bg-stone-900 border-b-4 border-stone-800 text-white shrink-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tight leading-none mb-4">
            Ecosystem Network
          </h1>
          <p className="max-w-2xl text-base text-stone-400 font-medium pb-4">
            The Rural Ops Tools platform consists of interconnected subdomains, 
            each dedicated to a specific area of agricultural and rural cost modeling.
          </p>
        </div>
      </header>

      {/* Directory Content */}
      <section className="py-16 px-6 md:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <div className="space-y-16">
            {groupedSites.map(({ category, sites }) => (
              <div key={category} className="scroll-mt-8">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-black font-display uppercase tracking-tight text-stone-900">{category}</h2>
                  <div className="h-1 bg-stone-200 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sites.map(site => (
                    <article 
                      key={site.name} 
                      className={`tactile-card p-6 flex flex-col justify-between group ${
                        site.status.toLowerCase() === 'retired' 
                          ? 'opacity-60 grayscale' 
                          : ''
                      }`}
                    >
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-bold font-display text-xl leading-tight text-stone-900">
                            {site.name}
                          </h3>
                          {site.status.toLowerCase() === 'retired' && (
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-stone-100 text-stone-500 border-2 border-stone-300 px-2 py-0.5 shadow-[2px_2px_0px_#d6d3d1] -rotate-2">Retired</span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-stone-600 line-clamp-3 h-14">
                          {site.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto border-t-2 border-stone-100 pt-4">
                        {site.status.toLowerCase() === 'retired' ? (
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-400">Offline</span>
                        ) : (
                          <a 
                            href={`https://${site.url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-mono font-bold text-sm text-orange-600 flex items-center gap-2 group-hover:text-orange-500 transition-colors inline-block"
                            aria-label={`Visit ${site.name} at ${site.url}`}
                          >
                            Visit Site <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                          </a>
                        )}
                        <p className="mt-2 text-xs font-mono text-stone-400">
                          {site.url}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
