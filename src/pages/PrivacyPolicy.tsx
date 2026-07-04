import React from 'react';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <div className="flex-grow py-16 px-4 sm:px-8">
      <SEO 
        title="Privacy Policy | Rural Ops Tools" 
        description="Privacy policy and data handling guidelines for the Rural Ops Tools platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display uppercase tracking-tight mb-4">Privacy Policy</h1>
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
            We value your privacy. Calculator inputs are processed locally in your browser. "My favorites" preferences are stored in your device's local storage. We do not aggregate or transmit your exact financial planning inputs to external servers. We use basic analytics to understand site performance, but we do not sell your personal data.
          </p>
        </div>

        <div className="space-y-8 text-stone-900">
          <section id="information-collection">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">1. Information We Collect</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              <strong>1.1. User-Provided Information:</strong> When you use our calculators across any of our subdomains, the data you enter (such as costs, localized rates, or project dimensions) is processed locally within your web browser. We do not transmit or store these calculation inputs on our remote servers.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>1.2. Automated Information:</strong> We may collect standard analytics data including IP addresses, browser types, and referring subdomains to ensure our platforms function correctly and to understand which calculators provide the most value.
            </p>
          </section>

          <section id="use-of-information">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">2. Use of Information</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              Data collected directly (such as through contact forms) is used solely to respond to your inquiries. Anonymized usage data helps us optimize the user interface and prioritize updates to our mathematical models.
            </p>
          </section>

          <section id="local-storage">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">3. Cookies and Local Storage</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              We utilize browser Local Storage to save specific non-sensitive preferences, such as your "Favorite Tools" or UI preferences. This data remains on your local machine and is not sent to our databases. You may clear this data at any time via your browser settings.
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">4. Third-Party Services</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              Some pages may include embedded features or utilize third-party analytics providers. These providers have their own privacy policies governing their data collection methods. We ensure any integrated providers are reputable and adhere to standard data protection laws.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-600">5. Contact Us</h2>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              If you have any questions or concerns regarding this Privacy Policy or data handling across the Rural Ops Tools network, please reach out via our centralized Contact Us page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
