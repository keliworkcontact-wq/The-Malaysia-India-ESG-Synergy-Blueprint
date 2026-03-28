import { motion } from 'motion/react';

const navItems = [
  { id: 'macro', label: 'Macro Background' },
  { id: 'audit', label: 'Benchmark Audit' },
  { id: 'localization', label: 'Localization' },
  { id: 'conclusion', label: 'Conclusion' },
];

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-corporate-blue/90 backdrop-blur-md rounded-full shadow-lg border border-white/10"
      id="main-navbar"
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
