import { useState } from 'react';
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
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="Contact Us | Solve | Rural Utility Cost" 
        description="Get in touch with the Solve team regarding IoT calculators, automation planning, or general Rural Utility Cost inquiries." 
      />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Contact the Team</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-2xl">
            Get in touch regarding the Solve hub or the broader Rural Utility Cost platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-lg flex flex-col items-start gap-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-2 py-1 rounded">Models</div>
              <div>
                <h3 className="font-bold text-base mb-1">Model Feedback</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Noticed an error in a calculator's assumptions or want to suggest a new variable?
                </p>
                <a href="mailto:models@ruralutilitycost.com" className="text-xs font-bold uppercase tracking-widest border-b border-[#1A1A1A] hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-colors pb-0.5">models@ruralutilitycost.com</a>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-6 rounded-lg flex flex-col items-start gap-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] bg-green-50 px-2 py-1 rounded">General</div>
              <div>
                <h3 className="font-bold text-base mb-1">General Inquiries</h3>
                <p className="text-xs text-gray-500 mb-4">
                  For press, partnership, or general inquiries directed to the master domain.
                </p>
                <a href="mailto:hello@ruralutilitycost.com" className="text-xs font-bold uppercase tracking-widest border-b border-[#1A1A1A] hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-colors pb-0.5">hello@ruralutilitycost.com</a>
              </div>
            </div>
            
            <div className="border hover:border-[#E5E7EB] border-transparent p-6 rounded-lg bg-[#F1F3F0] mt-6">
               <h3 className="text-xs font-black uppercase tracking-widest mb-2">Business Address</h3>
               <address className="text-sm text-gray-600 not-italic">
                 Rural Utility Cost Ecosystem<br />
                 123 Technology Corridor<br />
                 Agriculture Tech District
               </address>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-sm">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-6 text-[#1A1A1A]">Send a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded text-sm font-medium" role="alert">
                Thank you! Your message has been sent successfully. We will respond shortly.
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded text-sm font-medium" role="alert">
                Please fill in all required fields (Name, Email, Message).
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  autoComplete="name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-[#F9FAF8] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow" 
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  autoComplete="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-[#F9FAF8] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 min-h-[48px] bg-[#F9FAF8] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow" 
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-[#F9FAF8] border border-[#D1D5DB] rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow resize-y" 
                  placeholder="Include details about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 mt-4 min-h-[48px] bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-[#1E3A8A] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
