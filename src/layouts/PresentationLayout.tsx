import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PresentationLayoutProps {
  children: React.ReactNode;
  onBackToHub?: () => void; // 设为可选，增加灵活性
}

export default function PresentationLayout({
  children,
  onBackToHub,
}: PresentationLayoutProps) {
  
  // 优先执行传入的返回函数，如果没有则执行浏览器后退
  const handleBack = () => {
    if (onBackToHub) {
      onBackToHub();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-50 font-sans">
      {/* 顶部导航栏 */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleBack}
          className="group flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-stone-200 text-stone-600 rounded-full shadow-sm hover:shadow-md hover:border-stone-300 hover:text-stone-900 transition-all duration-300 cursor-pointer"
        >
          {/* 箭头图标，hover时会有向左微动效果 */}
          <ArrowLeft 
            size={18} 
            strokeWidth={1.5} 
            className="group-hover:-translate-x-1 transition-transform duration-300" 
          />
          <span className="text-sm font-medium tracking-tight">Back to Overview</span>
        </button>
      </div>

      {/* 主内容区域 */}
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
