import { useEffect } from 'react';

interface AdContainerProps {
  slotId: string;
  format?: string;
  className?: string;
}

export function AdContainer({ slotId, format = "auto", className = "" }: AdContainerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // Only push if there are uninitialized ad slots
        const uninitializedAds = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])');
        if (uninitializedAds.length > 0) {
           (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    } catch (e) {
      // Ignore adsbygoogle errors during dev/preview
    }
  }, [slotId]); // re-run if this ad block changes

  return (
    <div className={`flex justify-center items-center bg-[#F1F3F0] border border-[#D1D5DB] min-h-[250px] w-full text-center overflow-hidden relative ${className}`} aria-hidden="true" title="Advertisement Placeholder">
      <div className="absolute inset-0 flex items-center justify-center opacity-30 text-xs font-bold uppercase tracking-widest pointer-events-none text-gray-500">
        Ad Placement ({slotId})
      </div>
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%' }}
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
    </div>
  );
}
