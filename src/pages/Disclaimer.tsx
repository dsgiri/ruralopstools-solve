import React from 'react';
import { SEO } from '../components/SEO';
import { DISCLAIMER_CONFIG } from '../config/disclaimer';

export function Disclaimer() {
  return (
    <div className="flex-grow py-16 px-4 sm:px-8">
      <SEO 
        title={`${DISCLAIMER_CONFIG.legalPageTitle} | Rural Utility Cost`} 
        description="Legal agreements, definitions, and model estimation disclaimers for the Rural Utility Cost platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display uppercase tracking-tight mb-4">{DISCLAIMER_CONFIG.legalPageTitle}</h1>
          <div className="w-16 h-2 bg-orange-600 mb-8 border-2 border-stone-800 shadow-[2px_2px_0px_#292524] -rotate-1"></div>
        </div>

        <div className="space-y-8 text-stone-900">
          <div className="bg-[#FEF9C3] border-4 border-stone-800 shadow-[4px_4px_0px_#292524] p-6 mb-10 text-stone-900">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-orange-800 flex items-center gap-2">
              <span className="w-5 h-5 bg-orange-200 border-2 border-stone-800 rounded-sm flex items-center justify-center font-bold text-stone-900">!</span> Important Notice on Estimations
            </p>
            <p className="text-sm italic font-medium">
              {DISCLAIMER_CONFIG.calculatorDefault}
            </p>
          </div>

          {DISCLAIMER_CONFIG.fullDisclaimerSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm font-black font-display uppercase text-orange-600 tracking-wider mb-2">{section.title}</h2>
              <p className="text-sm text-stone-700 font-medium mb-6 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
