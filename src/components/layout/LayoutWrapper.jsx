'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import BackgroundStars from '@/components/Stars/BgStars';
import MobileMenu from '@/components/layout/header/MobileMenu';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStartScreen = pathname === '/startscreen';

  return (
    <>
      {!isStartScreen && <MobileMenu />}
      {!isStartScreen && <Header />}
      {children}
      {!isStartScreen && <Footer />}
      {!isStartScreen && <BackgroundStars />}
    </>
  );
}
