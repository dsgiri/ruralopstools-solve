import { tools } from '../data';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Favorites() {
  const { favorites } = useFavorites();
  const favoriteTools = tools.filter(tool => favorites.includes(tool.id));

  return (
    <div className="flex-grow py-12 px-4 sm:px-8 bg-[#F9FAF8]">
      <SEO 
        title="My Favorites | Solve | Rural Utility Cost" 
        description="Access your saved IoT and automation cost estimation tools." 
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 pb-6 border-b border-[#E5E7EB]">
          <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-4">My Favorites</h1>
          <p className="text-sm font-medium text-gray-600">Your saved calculators and estimators for quick access.</p>
        </div>

        {favoriteTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="bg-[#F1F3F0] rounded-lg border border-[#D1D5DB] border-dashed p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-lg font-bold uppercase mb-3">No tools saved yet</h2>
            <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto italic">
              You haven't added any calculators to your favorites. Browse the planning tools and click the heart icon to save them here.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white text-[10px] uppercase font-bold tracking-widest rounded hover:bg-black transition-colors"
            >
              Browse Calculators
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
