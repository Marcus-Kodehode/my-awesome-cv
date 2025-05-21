import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  //! Lag logikk så header og footer IKKE vises når url er startscreen
  return (
    <html lang="en">
      <body className="bg-space text-star">
        {/* <main className='px-8 md:px-16 lg:px-24'> */}
          {children}
          {/* </main> */}
        
      </body>
    </html>
  );
}

