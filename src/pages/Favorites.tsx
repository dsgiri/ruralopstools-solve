import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Favorites() {
  const { favorites } = useFavorites();
  const favoriteTools = tools.filter(tool => favorites.includes(tool.id));

  return (
    <div className="flex-grow py-12 px-4 sm:px-8">
      <SEO 
        title="My Favorites | Solve | Rural Utility Cost" 
        description="Access your saved IoT and automation cost estimation tools." 
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 pb-6 border-b-4 border-stone-800">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display tracking-tight uppercase mb-4">My Favorites</h1>
          <p className="text-base font-medium text-stone-600">Your saved calculators and estimators for quick access.</p>
        </div>

        {favoriteTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="bg-white border-4 border-stone-800 shadow-[8px_8px_0px_#292524] p-12 text-center max-w-2xl mx-auto rotate-1">
            <h2 className="text-2xl font-bold font-display uppercase mb-4 text-stone-900">No tools saved yet</h2>
            <p className="text-sm text-stone-600 font-medium mb-8 max-w-md mx-auto italic">
              You haven't added any calculators to your favorites. Browse the planning tools and click the heart icon to save them here.
            </p>
            <Link 
              to="/" 
              className="tactile-btn inline-block bg-orange-500 hover:bg-orange-600 text-stone-900 px-8 py-4 text-sm uppercase rounded-sm transition-colors"
            >
              Browse Calculators
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
