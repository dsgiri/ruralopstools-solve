import { SEO } from '../components/SEO';
import { articles } from '../data/articles';
import { NavLink } from 'react-router-dom';

export function ArticlesHub() {
  return (
    <div className="flex flex-col flex-grow bg-stone-50">
      <SEO 
        title="Field Guides & Articles | Solve Rural Diagnostics" 
        description="Practical guides on finding hidden water loss, tracking fence faults, and estimating the real cost of rural operations." 
      />
      
      <header className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-16 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase transform -rotate-1 shadow-[2px_2px_0px_#292524]">
            Field Guides
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 font-display">
            How to spot the problem before it's a repair bill.
        </h1>
        <p className="text-lg text-stone-700 max-w-2xl font-medium">
            Read our practical field guides to diagnose rural operations issues, estimate the damage, and find the right fix.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => (
             <article key={article.slug} className="tactile-card interactive p-6 flex flex-col justify-between">
                <div>
                   <h3 className="text-2xl font-bold font-display text-stone-900 mb-4">{article.title}</h3>
                   <p className="text-stone-700 text-base font-medium mb-6 leading-relaxed">
                     {article.metaDescription}
                   </p>
                </div>
                <div className="border-t-2 border-stone-200 pt-4 mt-auto">
                   <NavLink to={`/articles/${article.slug}`} className="font-mono font-bold text-orange-600 uppercase tracking-wider text-sm flex items-center">
                      Read Guide &rarr;
                   </NavLink>
                </div>
             </article>
          ))}
        </div>
      </section>
    </div>
  );
}
