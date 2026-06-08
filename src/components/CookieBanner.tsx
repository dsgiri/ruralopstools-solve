import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = [useState(false)[0], useState(false)[1]];
  const [hasConsented, setHasConsented] = useState<boolean>(true); // Assume consented initially to prevent flicker

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setHasConsented(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setHasConsented(true);
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'cookie_consent', { consent: 'accepted' });
    }
  };

  if (hasConsented) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] text-white p-4 z-50 shadow-lg border-t border-[#333]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm">
          We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies in accordance with our <a href="/legal" className="underline hover:text-[#4D7C0F]">Privacy Policy</a>.
        </div>
        <div className="flex shrink-0">
          <button 
            onClick={handleAccept}
            className="bg-white text-[#1A1A1A] px-6 py-3 min-h-[48px] rounded text-xs font-bold uppercase tracking-widest hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
