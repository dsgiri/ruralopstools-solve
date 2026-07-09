/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, ScrollRestoration, useLocation } from 'react-router-dom';
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
import { Calculators } from './pages/Calculators';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { CookieBanner } from './components/CookieBanner';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHashElement />
      <AnalyticsTracker />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-[#1A1A1A] focus:font-bold">
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col font-sans text-stone-900 overflow-x-hidden w-full">
        <Navigation />
        
        <main id="main-content" className="flex-grow flex flex-col w-full relative" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/fix" element={<Navigate to="/#diagnostics" replace />} />
            <Route path="/kits" element={<Navigate to="/#kits" replace />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      <CookieBanner />
    </BrowserRouter>
  );
}


