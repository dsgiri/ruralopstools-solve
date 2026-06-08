import { Tool } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);

  let tagColor = 'bg-gray-50 text-gray-600';
  if (tool.category.includes('IoT') || tool.category.includes('Cloud') || tool.category.includes('app')) tagColor = 'bg-blue-50 text-[#1E3A8A]';
  if (tool.category.includes('Automation') || tool.category.includes('Sensor') || tool.category.includes('device')) tagColor = 'bg-green-50 text-[#4D7C0F]';
  if (tool.category.includes('Build') || tool.category.includes('Total') || tool.category.includes('Maintenance') || tool.category.includes('Integration')) tagColor = 'bg-amber-50 text-[#92400E]';

  return (
    <article className="bg-white border border-[#E5E7EB] p-4 rounded-lg flex flex-col justify-between hover:shadow-lg transition-shadow group h-full">
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${tagColor}`}>
            {tool.category}
          </span>
          <button
            onClick={() => {
              toggleFavorite(tool.id);
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'click', { element: 'favorite_button', tool_id: tool.id });
              }
            }}
            className={`p-2 -mr-2 -mt-2 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] rounded-full ${
              favorite ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
            }`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
            style={{ fontFamily: 'sans-serif' }}
          >
            ❤
          </button>
        </div>
        <h3 className="font-bold text-base leading-tight mb-1 group-hover:text-[#1E3A8A] transition-colors">
          {tool.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 italic mb-4 flex-grow">
          {tool.description}
        </p>
      </div>
      
      <div className="mt-4 flex items-center justify-between border-t border-transparent pt-2">
        <span className="text-[10px] font-mono text-gray-400" aria-label={`Primary outcome: ${tool.primaryOutcome}`}>
          RESULT: {tool.primaryOutcome}
        </span>
        <Link 
          to={`/tool/${tool.id}`}
          onClick={() => {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'click', { element: 'launch_tool_button', tool_id: tool.id });
            }
          }}
          className="text-[10px] font-bold uppercase bg-[#1A1A1A] text-white px-4 py-3 min-h-[48px] rounded hover:bg-black transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A]"
          aria-label={`Launch ${tool.title}`}
        >
          Launch
        </Link>
      </div>
    </article>
  );
}
