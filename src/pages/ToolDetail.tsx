import { useParams, Link } from 'react-router-dom';
import { tools } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { SEO } from '../components/SEO';
import { AdContainer } from '../components/AdContainer';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find(t => t.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!tool) return null;

  const favorite = isFavorite(tool.id);

  return (
    <div className="flex flex-col flex-grow bg-[#F9FAF8]">
      <SEO 
        title={`${tool.title} | Solve | Rural Utility Cost`} 
        description={tool.description}
        keywords={`${tool.category.toLowerCase()}, automation cost, farm technology calculator`}
      />
      <div className="bg-[#1E3A8A] text-white border-b border-[#1E3A8A] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-6 min-h-[48px] py-1" aria-label="Go back to calculators">
            &larr; Back
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-white/10 text-white text-[10px] font-bold rounded uppercase tracking-widest">
                  {tool.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-black tracking-tighter mb-2 text-white uppercase">{tool.title}</h1>
              <p className="text-blue-100 max-w-2xl text-sm italic">{tool.description}</p>
            </div>
            <button
              onClick={() => toggleFavorite(tool.id)}
              className={`flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 min-h-[48px] rounded border transition-colors text-[10px] font-bold uppercase tracking-widest ${
                favorite 
                  ? 'border-red-400 bg-red-400/20 text-red-100 hover:bg-red-400/30' 
                  : 'border-white/30 bg-transparent text-white hover:bg-white/10'
              }`}
              aria-label={favorite ? "Remove from favorites" : "Save to favorites"}
            >
              <span style={{ fontFamily: 'sans-serif' }}>❤</span> {favorite ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#F1F3F0] rounded-lg border border-[#D1D5DB] p-6">
              <h3 className="font-black text-xs uppercase tracking-widest mb-6 border-b border-[#D1D5DB] pb-2 text-[#1A1A1A]">Parameters</h3>
              
              <form className="space-y-5 opacity-50 pointer-events-none" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="scale-quantity" className="block text-[11px] font-bold uppercase mb-1">Scale / Quantity</label>
                  <input type="number" id="scale-quantity" className="w-full border border-[#D1D5DB] bg-white rounded py-2 px-3 focus:outline-none min-h-[48px] text-sm" defaultValue={50} />
                </div>
                <div>
                  <label htmlFor="assumption-scenario" className="block text-[11px] font-bold uppercase mb-1">Assumption Scenario</label>
                  <select id="assumption-scenario" className="w-full border border-[#D1D5DB] bg-white rounded py-2 px-3 focus:outline-none min-h-[48px] text-sm">
                    <option>Conservative</option>
                    <option>Balanced</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="time-horizon" className="block text-[11px] font-bold uppercase mb-1">Time Horizon</label>
                  <input type="range" id="time-horizon" className="w-full" min="1" max="10" defaultValue="5" />
                </div>
                <button type="submit" className="w-full py-3 min-h-[48px] bg-[#1A1A1A] text-white rounded text-[10px] font-bold uppercase tracking-widest mt-4 hover:bg-black focus:outline-none">Compile</button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded border border-[#E5E7EB] p-6 flex flex-col items-center justify-center min-h-[400px] text-center shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-tight mb-2 text-gray-400">Awaiting Parameters</h3>
              <p className="text-gray-500 max-w-sm text-xs italic">Adjust inputs on the left and click Compile.</p>
            </div>
            
            <div className="border-l-2 border-[#1E3A8A] pl-4 py-2 mt-4">
              <h4 className="text-xs font-bold uppercase mb-1">Disclaimer</h4>
              <p className="text-[11px] text-gray-600 italic leading-snug">
                This is a placeholder interface for the calculation engine. Actual models are loaded from the master repository.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            {/* Sidebar Ad Container */}
            <AdContainer slotId="SIDEBAR_SLOT_1" format="vertical" className="min-h-[600px] w-full bg-transparent border-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
