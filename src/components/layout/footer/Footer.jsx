import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";
import FooterGlow from "./FooterGlow";

export default function Footer() {
  return (
    <footer className="w-full mt-16 bg-transparent">
      <div className="relative max-w-6xl px-6 py-6 mx-auto overflow-hidden text-white shadow-inner bg-space bg-opacity-90 backdrop-blur-md rounded-t-2xl">
        {/* Bakgrunnsglød */}
        <FooterGlow />

        {/* Faktisk innhold */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-center md:flex-row">
          <FooterCopyright />
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}
