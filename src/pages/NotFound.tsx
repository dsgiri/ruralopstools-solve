import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex-grow py-16 px-8 flex flex-col items-center justify-center">
      <SEO 
        title="404 - Page Not Found | Solve" 
        description="The page you are looking for does not exist on Rural Ops Tools Solve hub." 
      />
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-stone-900 mb-4 font-display">404</h1>
        <h2 className="text-xl font-bold uppercase tracking-widest mb-6 text-orange-600">Page Not Found</h2>
        <p className="text-sm text-stone-600 mb-8 font-medium">
          The estimation tool or planning resource you are looking for has been moved or no longer exists.
        </p>
        <Link 
          to="/" 
          className="tactile-btn bg-stone-900 text-white min-h-[48px] px-8 py-3 text-sm font-bold uppercase tracking-widest rounded hover:bg-stone-800 transition-colors inline-block"
        >
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
