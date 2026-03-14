import React from 'react';

interface CopyrightFooterProps {
  variant?: 'light' | 'dark';
}

export default function CopyrightFooter({ variant = 'dark' }: CopyrightFooterProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-corporate-blue';
  const borderColor = variant === 'dark' ? 'border-white/10' : 'border-corporate-blue/10';
  const opacityHigh = variant === 'dark' ? 'text-white/80' : 'text-corporate-blue/80';
  const opacityMid = variant === 'dark' ? 'text-white/60' : 'text-corporate-blue/60';
  const opacityLow = variant === 'dark' ? 'text-white/40' : 'text-corporate-blue/40';

  return (
    <div className={`max-w-4xl mx-auto border-t ${borderColor} pt-8 mt-12 text-center`}>
      <div className="mb-6">
        <p className={`text-[10px] md:text-xs ${opacityLow} leading-relaxed italic mb-4`}>
          <span className={`font-bold not-italic ${opacityMid} block mb-1`}>Note on Document Status:</span>
          This report is a Strategic Pitching Blueprint developed for professional demonstration and portfolio purposes. While based on official HUL disclosures and Malaysia–India bilateral frameworks, it serves as an independent analytical proposal rather than an officially commissioned governmental or corporate document.
        </p>
      </div>

      <div className="mb-4">
        <p className={`text-xs md:text-sm font-bold ${opacityHigh} mb-1`}>
          © 2026 THAM KE LI. All Rights Reserved.
        </p>
        <p className={`text-[10px] md:text-xs ${opacityMid}`}>
          This project is licensed under <span className="font-semibold">CC BY-NC-ND 4.0</span>
        </p>
      </div>
      
      <div className="space-y-3">
        <p className={`text-[10px] md:text-xs ${opacityLow} leading-relaxed italic`}>
          <span className={`font-bold not-italic ${opacityMid} block mb-1 underline decoration-sustainability-green/30`}>Intellectual Property Notice:</span>
          While the code serves as a functional vehicle for demonstration, the <span className={`${opacityMid} font-semibold`}>Strategic Concepts, Architectural Logic, and Localization Frameworks</span> (RAP, Shakti 2.0, LC-SF Synergy) are the original intellectual property of the author.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] md:text-xs">
          <div className="flex items-center gap-2 text-sustainability-green">
            <span className="text-base">✅</span>
            <span className="font-medium">Personal/Educational Use: Encouraged</span>
          </div>
          <div className="flex items-center gap-2 text-red-500">
            <span className="text-base">❌</span>
            <span className="font-medium">Commercial Redistribution: Strictly Prohibited</span>
          </div>
        </div>
      </div>
    </div>
  );
}
