export default function FooterCopyright() {
  return (
    <p className="text-sm font-light text-gray-400">
      © {new Date().getFullYear()} <span className="font-medium text-white">Børresen Utvikling</span>.
    </p>
  );
}
