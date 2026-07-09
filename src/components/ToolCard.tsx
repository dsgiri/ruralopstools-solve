import React from 'react';
import { Tool } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
  key?: React.Key;
  ctaLabel?: string;
}

export function ToolCard({ tool, ctaLabel }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);

  let tagColor = 'bg-gray-50 text-gray-600';
  if (tool.category.includes('IoT') || tool.category.includes('Cloud') || tool.category.includes('app')) tagColor = 'bg-blue-50 text-[#1E3A8A]';
  if (tool.category.includes('Automation') || tool.category.includes('Sensor') || tool.category.includes('device')) tagColor = 'bg-green-50 text-[#4D7C0F]';
  if (tool.category.includes('Build') || tool.category.includes('Total') || tool.category.includes('Maintenance') || tool.category.includes('Integration')) tagColor = 'bg-amber-50 text-[#92400E]';

  return (
    <article className="tactile-card p-4 sm:p-6 flex flex-col justify-between group h-full cursor-pointer relative">
      <div className="flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4 border-b-2 border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <span className={`w-10 h-10 border-2 border-stone-800 flex items-center justify-center text-lg shadow-[2px_2px_0px_#292524] ${tagColor}`}>
              ⚙️
            </span>
            <span className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest">{tool.category}</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(tool.id);
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'click', { element: 'favorite_button', tool_id: tool.id });
              }
            }}
            className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] rounded-full z-20 relative ${
              favorite ? 'text-red-500' : 'text-stone-300 hover:text-red-500'
            }`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
            style={{ fontFamily: 'sans-serif' }}
          >
            ❤
          </button>
        </div>
        <h3 className="text-xl font-bold mb-2 font-display text-stone-900 group-hover:text-blue-600 transition-colors">
          {tool.title}
        </h3>
        <p className="text-stone-600 text-sm font-medium mb-6 line-clamp-3">
          {tool.description}
        </p>
      </div>
      
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold text-orange-600" aria-label={`Primary outcome: ${tool.primaryOutcome}`}>
          {tool.primaryOutcome}
        </span>
        <Link 
          to={`/tool/${tool.id}`}
          onClick={(e) => {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'click', { element: 'launch_tool_button', tool_id: tool.id });
            }
          }}
          className="font-mono font-bold text-sm text-orange-600 flex items-center gap-2 z-10 before:absolute before:inset-0"
          aria-label={`Open Manual for ${tool.title}`}
        >
          {ctaLabel || 'Open Tool'} <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
    </article>
  );
}
