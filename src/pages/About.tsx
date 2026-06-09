import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="flex-grow py-16 px-4 sm:px-8">
      <SEO 
        title="About Us | Rural Utility Cost" 
        description="Learn about the Rural Utility Cost platform, our connected ecosystem of calculators, and our mission to simplify agricultural financial planning." 
        keywords="rural utility cost, agricultural estimation, farm budgeting, rural infrastructure"
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display uppercase tracking-tight mb-4">About Us</h1>
          <div className="w-16 h-2 bg-orange-600 mb-8 border-2 border-stone-800 shadow-[2px_2px_0px_#292524] -rotate-1"></div>
          <p className="text-base font-medium text-stone-700 leading-relaxed max-w-2xl">
            Rural Utility Cost is a comprehensive ecosystem of tools and calculators designed to simplify financial planning, procurement, and cost analysis for agriculture, utility infrastructure, and rural development.
          </p>
        </div>

        <div className="space-y-12 text-stone-900 max-w-2xl">
          <div>
            <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-orange-600 mb-3">Our Mission</h2>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              Our mission is to bring transparency and financial clarity to physical infrastructure, land management, and technological deployments in rural environments. We aim to help decision-makers—farmers, ranchers, integrators, and developers—make practical capital decisions through simple, reliable estimation tools.
            </p>
          </div>
          
          <div>
            <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-orange-600 mb-3">The Ecosystem</h2>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              The Rural Utility Cost platform consists of multiple specialized subdomains, each focusing on a specific area of agricultural and rural cost modeling (such as Forecast, WhatIf, Habitat, Solve, Grid, and many more). This connected network of tools is designed to provide holistic insights by breaking complex systems down into manageable, independent calculators.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-white border-4 border-stone-800 shadow-[4px_4px_0px_#292524] rotate-1">
            <h3 className="text-sm font-bold font-display uppercase tracking-widest text-stone-900 mb-2 border-b-2 border-stone-200 pb-2">Informational Purposes Only</h3>
            <p className="text-xs text-stone-600 font-medium italic">
              All tools, calculators, and models provided across the Rural Utility Cost network are intended for informational, estimation, and decision-support purposes only. They do not constitute professional financial, legal, engineering, or agronomic advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
