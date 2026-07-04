import React, { useState } from 'react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate API call for form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="flex-grow py-16 px-4 sm:px-8">
      <SEO 
        title="Contact Us | Rural Ops Tools" 
        description="Get in touch with the Rural Ops Tools team. We are here to help with questions about our estimation tools." 
      />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 font-display uppercase tracking-tight mb-4">Contact Us</h1>
          <div className="w-16 h-2 bg-orange-600 mb-8 border-2 border-stone-800 shadow-[2px_2px_0px_#292524] -rotate-1"></div>
          <p className="text-base font-medium text-stone-700 leading-relaxed max-w-2xl">
            Get in touch regarding the Rural Ops Tools platform or any of its subdomains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white border-4 border-stone-800 p-6 shadow-[6px_6px_0px_#292524] flex flex-col items-start gap-4">
              <div className="text-xs font-bold font-mono uppercase tracking-widest text-orange-800 bg-orange-100 border-2 border-orange-800 px-2 py-1 shadow-[2px_2px_0px_#9a3412]">Models</div>
              <div>
                <h3 className="font-bold font-display text-2xl mb-2 text-stone-900">Model Feedback</h3>
                <p className="text-sm font-medium text-stone-600 mb-4">
                  Noticed an error in a calculator's assumptions or want to suggest a new variable?
                </p>
                <a href="mailto:models@ruralopstools.com" className="font-mono text-sm font-bold text-orange-600 hover:text-orange-500 transition-colors">models@ruralopstools.com &rarr;</a>
              </div>
            </div>

            <div className="bg-white border-4 border-stone-800 p-6 shadow-[6px_6px_0px_#292524] flex flex-col items-start gap-4">
              <div className="text-xs font-bold font-mono uppercase tracking-widest text-blue-800 bg-blue-100 border-2 border-blue-800 px-2 py-1 shadow-[2px_2px_0px_#1e3a8a]">General</div>
              <div>
                <h3 className="font-bold font-display text-2xl mb-2 text-stone-900">General Inquiries</h3>
                <p className="text-sm font-medium text-stone-600 mb-4">
                  For press, partnership, or general platform inquiries.
                </p>
                <a href="mailto:hello@ruralopstools.com" className="font-mono text-sm font-bold text-orange-600 hover:text-orange-500 transition-colors">hello@ruralopstools.com &rarr;</a>
              </div>
            </div>
            
            <div className="border border-stone-300 p-6 bg-stone-100 mt-6 rounded-sm">
               <h3 className="text-xs font-black uppercase tracking-widest mb-2">Business Address</h3>
               <address className="text-sm text-gray-600 not-italic">
                 Rural Ops Tools Ecosystem<br />
                 123 Technology Corridor<br />
                 Agriculture Tech District
               </address>
            </div>
          </div>
          
          <div className="bg-white border-4 border-stone-800 shadow-[8px_8px_0px_#292524] p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-display uppercase tracking-tight mb-6 text-stone-900 border-b-2 border-stone-200 pb-2">Send a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-800 text-green-900 font-bold text-sm shadow-[2px_2px_0px_#166534]" role="alert">
                Thank you! Your message has been sent successfully. We will respond shortly.
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border-2 border-red-800 text-red-900 font-bold text-sm shadow-[2px_2px_0px_#991b1b]" role="alert">
                Please fill in all required fields (Name, Email, Message).
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs font-bold font-mono tracking-wider mb-2 text-stone-700">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  autoComplete="name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-stone-100 border-2 border-stone-800 rounded-sm font-bold shadow-[2px_2px_0px_#292524] focus:outline-none focus:border-orange-500 transition-colors" 
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold font-mono tracking-wider mb-2 text-stone-700">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  autoComplete="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-stone-100 border-2 border-stone-800 rounded-sm font-bold shadow-[2px_2px_0px_#292524] focus:outline-none focus:border-orange-500 transition-colors" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold font-mono tracking-wider mb-2 text-stone-700">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-stone-100 border-2 border-stone-800 rounded-sm font-bold shadow-[2px_2px_0px_#292524] focus:outline-none focus:border-orange-500 transition-colors" 
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold font-mono tracking-wider mb-2 text-stone-700">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-100 border-2 border-stone-800 rounded-sm font-bold shadow-[2px_2px_0px_#292524] focus:outline-none focus:border-orange-500 transition-colors resize-y" 
                  placeholder="Include details about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="tactile-btn w-full py-4 mt-4 bg-orange-500 text-stone-900 text-sm font-bold uppercase rounded-sm hover:bg-orange-600 transition-colors focus:outline-none"
              >
                Send Message &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
