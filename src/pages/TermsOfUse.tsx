import React from 'react';
import { SEO } from '../components/SEO';

export function TermsOfUse() {
  return (
    <div className="flex-grow py-16 px-4 sm:px-8">
      <SEO 
        title="Terms of Use | Rural Ops Tools" 
        description="Terms of Use and user agreements for the Rural Ops Tools platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display uppercase tracking-tight mb-4">Terms of Use</h1>
          <div className="w-16 h-2 bg-orange-600 mb-8 border-2 border-stone-800 shadow-[2px_2px_0px_#292524] -rotate-1"></div>
          <p className="text-sm font-medium text-stone-700 leading-relaxed">
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-[#FEF9C3] border-4 border-stone-800 shadow-[4px_4px_0px_#292524] p-6 mb-10 text-stone-900">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-orange-800 flex items-center gap-2">
             <span className="w-5 h-5 bg-orange-200 border-2 border-stone-800 rounded-sm flex items-center justify-center font-bold text-stone-900">!</span> Plain-Language Summary
          </p>
          <p className="text-sm italic font-medium">
            By using Rural Ops Tools and any of its subdomains, you agree to these terms. Our tools are provided "as is" to help with estimations, but they are not a replacement for professional engineering, legal, or financial advice. We are not liable for business or capital decisions made based on these tools.
          </p>
        </div>

        <div className="space-y-8 text-stone-900">
          <section id="scope">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">1. Scope of Use</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              These terms apply to the main domain (ruralopstools.com) and all its affiliated subdomains (collectively, the "Platform"). You may use the tools freely for personal, educational, and internal business estimation purposes.
            </p>
          </section>

          <section id="responsibilities">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">2. User Responsibilities</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              You agree to use this platform responsibly and not to engage in unauthorized scraping, automated programmatic access (without explicit permission), or the resale of calculation outputs as authoritative engineering documents.
            </p>
          </section>

          <section id="intellectual-property">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">3. Intellectual Property</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              The layout, formulas, design elements, and associated intellectual property of the Rural Ops Tools platform remain ours. You may reference outputs (such as taking screenshots of cost estimates for a business plan) provided the source is credited, but you may not duplicate the tool logic to create a competing product.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">4. Limitations of Liability</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              The data and calculators are provided on an "as-is" and "as available" basis. Rural Ops Tools disclaims all warranties of any kind. Under no circumstances shall Rural Ops Tools, its creators, or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from your reliance on the tools, estimations, or methodologies provided on the Platform.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">5. Changes to the Terms</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              We reserve the right to update or modify these Terms of Use at any time. Your continued use of the platform and subdomains after any changes signifies your acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
