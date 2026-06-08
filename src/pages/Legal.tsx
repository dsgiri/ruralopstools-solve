import { SEO } from '../components/SEO';

export function Legal() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="Legal & Disclaimer | Solve | Rural Utility Cost" 
        description="Legal agreements, definitions, and model estimation disclaimers for the Solve planning hub." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Legal & Disclaimer</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
        </div>

        <div className="space-y-10 max-w-2xl">
          <div className="bg-amber-50 border-l-4 border-[#92400E] p-6 mb-10 text-amber-900">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#92400E]">Important Notice on Estimations</p>
            <p className="text-sm italic">
              Calculator results generated within the Solve app are approximations and decision support models only. Users must verify all financial models, hardware prices, and engineering specs independently before committing capital.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase mb-2">1. Non-Binding Projections</h2>
            <p className="text-[13px] text-gray-700 mb-6 leading-relaxed">
              Any ROI (Return on Investment) models or cost-savings projections shown are strictly assumption-based estimates. Actual savings or costs will vary significantly based on local labor rates, scale of installation, inflation, supply chain conditions, and unmodeled edge cases. 
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase mb-2">2. Assumption of Risk</h2>
            <p className="text-[13px] text-gray-700 mb-6 leading-relaxed">
              By using these calculators, you agree that Rural Utility Cost and the Solve application hold no liability for procurement decisions or financial outcomes resulting from these baseline estimates. 
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase mb-2">3. Data Privacy</h2>
            <p className="text-[13px] text-gray-700 mb-6 leading-relaxed">
              Calculator inputs are processed locally in your browser. "My favorites" preferences are stored in your device's local storage. We do not aggregate or transmit your exact financial planning inputs to external servers.
            </p>
          </div>
          
          <div>
            <h2 className="text-sm font-black uppercase mb-2">4. Shared Agreements</h2>
            <p className="text-[13px] text-gray-700 mb-6 leading-relaxed">
              As a subdomain of Rural Utility Cost, Solve operates under the global Terms of Service and Privacy Policy defined on the master domain. By accessing this site, you accept the primary domain agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
