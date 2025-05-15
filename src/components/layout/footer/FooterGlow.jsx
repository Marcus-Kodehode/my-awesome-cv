export default function FooterGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient bakgrunn */}
      <div className="absolute inset-0 bg-gradient-to-t from-space to-transparent opacity-80" />

      {/* Glow orb venstre */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400 blur-[80px] opacity-20 rounded-full translate-y-1/3 translate-x-1/4" />

      {/* Glow orb høyre */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400 rounded-full blur-2xl opacity-10 translate-y-1/3 translate-x-1/4" />
    </div>
  );
}
