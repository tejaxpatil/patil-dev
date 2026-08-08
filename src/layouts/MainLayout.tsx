import type { ReactNode } from 'react';

import { Navbar } from '@/components/layout/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div id="top" className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;