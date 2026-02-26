import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import HomeButton from '../components/HomeButton';

interface PresentationLayoutProps {
  children: ReactNode;
  activeSection: string;
  onNavClick: (id: string) => void;
  onHomeClick: () => void;
}

export default function PresentationLayout({
  children,
  activeSection,
  onNavClick,
  onHomeClick,
}: PresentationLayoutProps) {
  return (
    <div className="relative min-h-screen bg-stone-50">
      <HomeButton onClick={onHomeClick} />
      <Navbar activeSection={activeSection} onNavClick={onNavClick} />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
}
