import { Home } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeButtonProps {
  onClick: () => void;
}

export default function HomeButton({ onClick }: HomeButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onClick}
      className="fixed top-6 left-6 z-50 p-3 bg-white/80 backdrop-blur-md border border-stone-200 rounded-full shadow-sm hover:shadow-md transition-all text-corporate-blue"
      id="home-button"
    >
      <Home size={24} />
    </motion.button>
  );
}
