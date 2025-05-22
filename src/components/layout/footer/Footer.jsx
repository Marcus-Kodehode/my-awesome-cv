'use client';

import { usePathname } from 'next/navigation';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';
import FooterGlow from './FooterGlow';

export default function Footer() {
  const pathname = usePathname();
  const isStartScreen = pathname === '/startscreen';

  return (
    <footer className={`relative z-50 w-full mt-16 ${isStartScreen ? 'pointer-events-none opacity-40' : 'pointer-events-auto opacity-100'}`}>
      <div className="relative max-w-6xl px-6 py-6 mx-auto overflow-hidden text-black bg-transparent rounded-t-2xl">
        <FooterGlow />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-center md:flex-row">
          <FooterCopyright />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}
