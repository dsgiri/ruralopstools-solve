import { useParams, Link } from 'react-router-dom';
import { tools } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { SEO } from '../components/SEO';
import { AdContainer } from '../components/AdContainer';
import { CalculatorDisclaimer } from '../components/CalculatorDisclaimer';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find(t => t.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!tool) return null;

  const favorite = isFavorite(tool.id);

  return (
    <div className="flex flex-col flex-grow py-16">
      <SEO 
        title={`${tool.title} | Solve | Rural Utility Cost`} 
        description={tool.description}
        keywords={`${tool.category.toLowerCase()}, automation cost, farm technology calculator`}
      />
      <div className="bg-stone-900 text-white border-b-4 border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link to="/" className="inline-flex items-center text-stone-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-6 min-h-[48px] py-1" aria-label="Go back to calculators">
            &larr; Back
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-orange-600 border-2 border-stone-800 text-stone-900 text-[10px] font-bold shadow-[2px_2px_0px_#292524] uppercase tracking-widest">
                  {tool.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black font-display tracking-tight mb-2 text-white">{tool.title}</h1>
              <p className="text-stone-300 max-w-2xl text-base font-medium">{tool.description}</p>
            </div>
            <button
              onClick={() => toggleFavorite(tool.id)}
              className={`tactile-btn flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] transition-colors text-[12px] font-bold uppercase tracking-widest ${
                favorite 
                  ? 'bg-red-500 text-white shadow-[4px_4px_0px_white]' 
                  : 'bg-stone-800 border-stone-600 text-white hover:bg-stone-700'
              }`}
              aria-label={favorite ? "Remove from favorites" : "Save to favorites"}
            >
              <span className="text-lg">❤</span> {favorite ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border-4 border-stone-800 shadow-[8px_8px_0px_#292524] p-6">
              <h3 className="font-bold text-lg font-display uppercase tracking-widest mb-6 border-b-2 border-stone-200 pb-2 text-stone-900">Parameters</h3>
              
              <form className="space-y-5 opacity-50 pointer-events-none" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="scale-quantity" className="block text-xs font-bold font-mono text-stone-600 uppercase mb-2">Scale / Quantity</label>
                  <input type="number" id="scale-quantity" className="w-full border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 focus:outline-none min-h-[48px] text-sm font-bold shadow-[2px_2px_0px_#292524]" defaultValue={50} />
                </div>
                <div>
                  <label htmlFor="assumption-scenario" className="block text-xs font-bold font-mono text-stone-600 uppercase mb-2">Assumption Scenario</label>
                  <select id="assumption-scenario" className="w-full border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 focus:outline-none min-h-[48px] text-sm font-bold shadow-[2px_2px_0px_#292524]">
                    <option>Conservative</option>
                    <option>Balanced</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="time-horizon" className="block text-xs font-bold font-mono text-stone-600 uppercase mb-2">Time Horizon</label>
                  <input type="range" id="time-horizon" className="w-full" min="1" max="10" defaultValue="5" />
                </div>
                <button type="submit" className="tactile-btn w-full py-3 min-h-[48px] bg-orange-500 text-stone-900 rounded-sm text-sm font-bold mt-4 hover:bg-orange-600 focus:outline-none">Compile</button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="notepad rounded-sm p-6 flex flex-col items-center justify-center min-h-[400px] text-center shadow-[8px_8px_0px_#292524] rotate-1 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-400/50"></div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-2 text-stone-400 relative z-10">Awaiting Parameters</h3>
              <p className="text-stone-500 font-medium max-w-sm text-sm italic relative z-10">Adjust inputs on the left and click Compile.</p>
            </div>
            
            <CalculatorDisclaimer className="!mt-8 shadow-[4px_4px_0px_#292524] border-2 border-stone-800 bg-[#FEF9C3]" />
            
            <div className="border-l-4 border-orange-600 pl-4 py-2 mt-4">
              <h4 className="text-sm font-bold uppercase mb-1 text-stone-900">Placeholder Notice</h4>
              <p className="text-xs text-stone-600 font-medium italic leading-relaxed">
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
