export default function FooterCopyright() {
  return (
    <p className="text-sm font-medium text-secondary">
      © {new Date().getFullYear()} <span className="font-semibold text-star">Børresen Utvikling</span>.
    </p>
  );
}
