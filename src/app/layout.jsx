import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-space text-star">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
