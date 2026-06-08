import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-8 flex flex-col items-center justify-center">
      <SEO 
        title="404 - Page Not Found | Solve" 
        description="The page you are looking for does not exist on Rural Utility Cost Solve hub." 
      />
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-[#1A1A1A] mb-4">404</h1>
        <h2 className="text-xl font-bold uppercase tracking-widest mb-6 text-[#1E3A8A]">Page Not Found</h2>
        <p className="text-sm text-gray-600 mb-8">
          The estimation tool or planning resource you are looking for has been moved or no longer exists.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center min-h-[48px] px-8 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-black transition-colors"
        >
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
