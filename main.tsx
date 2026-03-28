@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  
  --color-sustainability-green: #10B981;
  --color-corporate-blue: #1B365D;
  --color-audit-green: #10B981;
  --color-deep-amber: #F59E0B;
}

@layer base {
  body {
    @apply font-sans text-stone-900 bg-stone-50;
  }
}

.section-container {
  @apply min-h-screen flex flex-col items-center justify-center p-8;
}
