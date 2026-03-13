import React, { useEffect } from 'react';

interface SecurityWrapperProps {
  children: React.ReactNode;
}

export default function SecurityWrapper({ children }: SecurityWrapperProps) {
  useEffect(() => {
    // 1. Disable Right-Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
      }
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
      }
      // Disable Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Disable F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Disable PrintScreen
      if (e.key === 'PrintScreen') {
        // We can't actually block the OS-level PrintScreen, 
        // but we can try to clear the clipboard or show a warning.
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled for this document.');
      }
    };

    // 3. Detect PrintScreen (Limited success)
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
      }
    };

    // 4. Disable Dragging (to prevent saving images)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="security-layer">
      {children}
    </div>
  );
}
