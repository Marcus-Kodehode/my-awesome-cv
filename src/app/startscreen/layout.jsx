export default function StartscreenLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-space text-star">
        {children} {/* Ingen Header/Footer her */}
      </body>
    </html>
  );
}
