import { useParams, Navigate, NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }
  
  // We'll replace the placeholder comments with actual CTA components
  const contentParts = article.content.split(/<!-- (EARLY|MID) CTA INJECTED HERE -->/);

  return (
    <div className="flex flex-col flex-grow bg-stone-50">
      <SEO 
        title={article.metaTitle} 
        description={article.metaDescription} 
      />
      
      <header className="max-w-3xl mx-auto px-6 md:px-8 pt-16 pb-8 text-left w-full">
        <div className="inline-block px-4 py-1 bg-stone-200 border-2 border-stone-800 text-stone-800 text-xs font-bold mb-6 tracking-widest uppercase shadow-[2px_2px_0px_#292524]">
            Field Guide
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 font-display leading-tight">
            {article.title}
        </h1>
      </header>

      <section className="max-w-3xl mx-auto px-6 md:px-8 pb-24 w-full">
        <div className="article-content">
          {contentParts.map((part, index) => {
            if (part === 'EARLY') {
              return (
                <div key={index} className="my-12 p-6 bg-white border-4 border-stone-800 shadow-[6px_6px_0px_#292524]">
                  <p className="font-bold text-stone-900 mb-4 not-prose text-lg">Not sure what's broken?</p>
                  <NavLink to={article.fixPath} className="tactile-btn inline-block bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-sm not-prose">
                    {article.earlyCtaText} &rarr;
                  </NavLink>
                </div>
              );
            }
            if (part === 'MID') {
              return (
                <div key={index} className="my-12 p-6 bg-stone-900 text-white border-4 border-stone-800 shadow-[6px_6px_0px_#EA580C]">
                  <p className="font-bold text-white mb-4 not-prose text-lg">Stop guessing. Run the numbers.</p>
                  <NavLink to={article.calculatorPath} className="tactile-btn inline-block bg-white hover:bg-stone-100 text-stone-900 px-6 py-3 text-sm not-prose">
                    {article.midCtaText} &rarr;
                  </NavLink>
                </div>
              );
            }
            
            return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
          })}
        </div>
        
        {/* End CTA */}
        <div className="mt-16 p-8 bg-stone-100 border-t-4 border-stone-800 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0 sm:pr-8">
            <h3 className="text-2xl font-bold font-display text-stone-900 mb-2">Ready to fix it for good?</h3>
            <p className="text-stone-700 font-medium">Rugged, snap-on monitors that don't require an IT guy.</p>
          </div>
          <NavLink to={article.kitPath} className="tactile-btn inline-block bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 text-sm w-full sm:w-auto shrink-0 text-center">
            {article.endCtaText}
          </NavLink>
        </div>
      </section>
    </div>
  );
}
