import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="About Solve | Rural Utility Cost" 
        description="Learn about the methodology behind Solve, the IoT and automation cost hub for Rural Utility Cost." 
        keywords="rural utility cost, IoT estimation, farm automation, capEx opEx"
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">About Solve</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-2xl">
            Solve is an integral part of the Rural Utility Cost ecosystem. This hub is dedicated exclusively to helping users estimate the costs associated with IoT hardware, automation deployments, and connected software.
          </p>
        </div>

        <div className="space-y-12 text-[#1A1A1A] max-w-2xl">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] mb-3">Our Goal</h2>
            <p className="text-sm leading-relaxed mb-6">
              Technology in agriculture and rural settings is often sold on the promise of immediate ROI, obscuring the complex realities of maintenance, software integration, and recurring connectivity tariffs. Our goal is to help decision-makers—farmers, ranchers, integrators, and technical founders—make practical technology decisions through clear, simple estimation tools.
            </p>
          </div>
          
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] mb-3">The Methodology</h2>
            <p className="text-sm leading-relaxed mb-6">
              By separating CapEx (initial hardware and build cost) from OpEx (long-term connectivity, maintenance, and cloud fees), Solve calculators provide a holistic view of Total Cost of Ownership across a realistic 5-to-10 year hardware lifecycle. This ensures technical planning is grounded in financial reality.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-white border border-[#E5E7EB] rounded-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Part of Rural Utility Cost</h3>
            <p className="text-[12px] text-gray-500 italic">
              Solve shares the core mission of the master domain: providing transparent, unbiased cost insight for rural systems. The calculators and guidance presented here adhere to our network-wide commitment to straightforward methodology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
