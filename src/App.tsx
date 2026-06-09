/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Disclaimer } from './pages/Disclaimer';
import { ToolDetail } from './pages/ToolDetail';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { CookieBanner } from './components/CookieBanner';
import { AdContainer } from './components/AdContainer';

// Simple scroll-to-hash wrapper 
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <AnalyticsTracker />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-[#1A1A1A] focus:font-bold">
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col font-sans text-stone-900 overflow-x-hidden w-full">
        <Navigation />
        
        {/* Top Header Ad */}
        <section aria-label="Top Ad Space" className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-4 hidden md:block">
          <AdContainer slotId="HEADER_SLOT_1" className="min-h-[90px]" />
        </section>

        <main id="main-content" className="flex-grow flex flex-col w-full relative" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Bottom Ad before footer */}
        <section aria-label="Bottom Ad Space" className="w-full max-w-7xl mx-auto px-4 sm:px-8 mb-8 pb-4 border-b border-[#E5E7EB]">
          <AdContainer slotId="FOOTER_SLOT_1" className="min-h-[90px]" />
        </section>

        <Footer />
      </div>
      <CookieBanner />
    </BrowserRouter>
  );
}


