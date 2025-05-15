import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
        <Header />
        <main className="flex-grow max-w-4xl px-4 py-8 pt-32 mx-auto sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
