import { useParams, Link } from 'react-router-dom';
import { tools } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { SEO } from '../components/SEO';
import { CalculatorDisclaimer } from '../components/CalculatorDisclaimer';
import { useState, useEffect } from 'react';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find(t => t.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [formValues, setFormValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    if (tool?.fields) {
      tool.fields.forEach(f => {
        initial[f.id] = f.defaultValue;
      });
    }
    return initial;
  });
  const [calculation, setCalculation] = useState<any>(null);
  const [isCompiled, setIsCompiled] = useState(false);
  
  useEffect(() => {
    if (tool && tool.fields) {
      const initial: Record<string, any> = {};
      tool.fields.forEach(f => {
        initial[f.id] = f.defaultValue;
      });
      setFormValues(initial);
      setCalculation(null);
      setIsCompiled(false);
    }
  }, [tool]);

  if (!tool) return null;

  const favorite = isFavorite(tool.id);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormValues(prev => ({ ...prev, [fieldId]: value }));
    setIsCompiled(false);
  };

  const handleCompile = (e: React.FormEvent) => {
    e.preventDefault();
    if (tool.calcFn) {
      setCalculation(tool.calcFn(formValues));
      setIsCompiled(true);
    }
  };

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
              
              <form className="space-y-5" onSubmit={handleCompile}>
                {tool.fields?.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs font-bold font-mono text-stone-600 uppercase mb-2">
                      {field.label}
                      {field.type === 'range' && <span className="ml-2 text-stone-900 bg-stone-200 px-1 py-0.5 rounded-sm">{formValues[field.id]}</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select 
                        id={field.id}
                        value={formValues[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 focus:outline-none min-h-[48px] text-sm font-bold shadow-[2px_2px_0px_#292524]"
                      >
                        {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input 
                        type={field.type} 
                        id={field.id}
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={formValues[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, field.type === 'number' || field.type === 'range' ? Number(e.target.value) : e.target.value)}
                        className={`w-full ${field.type === 'range' ? '' : 'border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 focus:outline-none min-h-[48px] text-sm font-bold shadow-[2px_2px_0px_#292524]'}`} 
                      />
                    )}
                  </div>
                ))}
                
                <button type="submit" className="tactile-btn w-full py-3 min-h-[48px] bg-orange-500 text-stone-900 rounded-sm text-sm font-bold mt-4 hover:bg-orange-600 focus:outline-none">Compile</button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div className="notepad rounded-sm p-6 flex flex-col min-h-[400px] shadow-[8px_8px_0px_#292524] rotate-1 relative bg-white">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-400/50"></div>
              
              {!isCompiled ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-2 text-stone-400 relative z-10">Awaiting Parameters</h3>
                  <p className="text-stone-500 font-medium max-w-sm text-sm italic relative z-10">Adjust inputs on the left and click Compile.</p>
                </div>
              ) : (
                <div className="flex-grow pl-8 relative z-10 w-full pt-4">
                  <h2 className="text-xl font-bold font-mono uppercase text-stone-500 mb-6 border-b-2 border-stone-200 pb-2">Results: {tool.title}</h2>
                  
                  <div className="bg-stone-50 border-4 border-stone-800 p-6 shadow-[4px_4px_0px_#292524] mb-8 inline-block min-w-[300px]">
                    <div className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{tool.primaryOutcome}</div>
                    <div className="text-4xl lg:text-5xl font-black font-display text-orange-600">{calculation?.result}</div>
                  </div>

                  {calculation?.breakdown && (
                    <div className="mt-8">
                      <h3 className="text-lg font-bold font-display uppercase tracking-widest mb-4 border-b-2 border-stone-200 pb-2 inline-block">Breakdown</h3>
                      <ul className="space-y-4">
                        {Object.entries(calculation.breakdown).map(([key, value]) => (
                          <li key={key} className="flex justify-between items-end border-b-2 border-stone-100 pb-2 max-w-md">
                            <span className="font-mono text-sm font-bold text-stone-600">{key}</span>
                            <span className="font-mono font-bold text-stone-900">{value as React.ReactNode}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-12 pt-6 border-t-2 border-stone-200">
                    <Link to="/#suite" className="tactile-btn inline-block bg-stone-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-stone-800 focus:outline-none">
                      Get Required Hardware &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <CalculatorDisclaimer className="!mt-8 shadow-[4px_4px_0px_#292524] border-2 border-stone-800 bg-[#FEF9C3]" />
          </div>

        </div>
      </div>
    </div>
  );
}
