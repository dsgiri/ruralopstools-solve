import { DISCLAIMER_CONFIG } from '../config/disclaimer';

interface CalculatorDisclaimerProps {
  customText?: string;
  className?: string;
}

export function CalculatorDisclaimer({ customText, className = "" }: CalculatorDisclaimerProps) {
  const text = customText || DISCLAIMER_CONFIG.calculatorDefault;
  
  return (
    <div className={`mt-6 p-6 bg-[#FEF9C3] border-4 border-stone-800 shadow-[4px_4px_0px_#292524] text-stone-900 text-xs leading-relaxed ${className}`} role="note" aria-label="Disclaimer">
      <div className="font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-6 h-6 bg-red-200 border-2 border-stone-800 rounded-sm flex items-center justify-center font-bold">!</span> Important Notice
      </div>
      <p className="font-medium italic text-stone-700">
        {text}
      </p>
    </div>
  );
}
