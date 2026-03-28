import { ReactNode } from 'react';

interface PresentationLayoutProps {
  children: ReactNode;
  onBackToHub: () => void;
}

export default function PresentationLayout({
  children,
  onBackToHub,
}: PresentationLayoutProps) {
  return (
    <div className="relative min-h-screen bg-stone-50">
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <button
          onClick={onBackToHub}
          className="px-6 py-2.5 bg-white/80 backdrop-blur-md border border-stone-200 text-corporate-blue rounded-full font-bold shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center gap-2"
        >
          <span className="text-lg">←</span> Back to Overview
        </button>
      </div>
      <main className="pt-24 pb-20">
        {children}
      </main>
    </div>
  );
}
