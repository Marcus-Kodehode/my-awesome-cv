export default function FooterGlow() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[30vh] pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 via-yellow-300 to-transparent opacity-80" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 blur-[80px] opacity-20 rounded-full translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-10 translate-y-1/3 translate-x-1/4" />
    </div>
  );
}
