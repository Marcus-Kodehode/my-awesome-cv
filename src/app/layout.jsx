import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-space text-star">
        <Analytics/>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
