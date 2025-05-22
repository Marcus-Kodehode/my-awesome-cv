export default function FooterCopyright() {
  return (
    <p className="text-sm font-medium text-black">
      © {new Date().getFullYear()} <span className="font-semibold">Børresen Utvikling</span>.
    </p>
  );
}
