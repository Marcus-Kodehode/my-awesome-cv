import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-space text-star">
        {children}
      </body>
    </html>
  );
}

