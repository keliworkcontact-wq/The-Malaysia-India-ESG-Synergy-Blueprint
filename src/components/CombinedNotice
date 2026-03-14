import React from 'react';

interface CombinedNoticeProps {
  variant?: 'light' | 'dark';
}

export default function CombinedNotice({ variant = 'dark' }: CombinedNoticeProps) {
  const textColor = variant === 'dark' ? 'text-white/40' : 'text-stone-400';
  const titleColor = variant === 'dark' ? 'text-white/60' : 'text-stone-600';

  return (
    <div className="max-w-4xl mx-auto border-t border-current/10 pt-8 mt-12 opacity-80">
      <p className={`text-[10px] md:text-xs ${textColor} leading-relaxed text-center italic`}>
        <span className={`font-bold not-italic ${titleColor} block mb-1`}>Combined Notice</span>
        <span className="block mb-1"><strong>© 2026 Tham Ke Li. All Rights Reserved. | Licensed under CC BY-NC-ND 4.0.</strong></span>
        <strong>Strategic Disclaimer:</strong> This is an independent analytical proposal for professional demonstration and is not an officially commissioned document by HUL or governmental authorities. For commercial licensing or collaboration, please contact the author.
      </p>
    </div>
  );
}
