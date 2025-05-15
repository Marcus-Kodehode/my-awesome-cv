import NavButtons from "@/components/base/NavButtons";

export default function NavBar() {
  return (
    <nav className="flex pr-2 space-x-6">
      <NavButtons href="#about">About</NavButtons>
      <NavButtons href="#skills">Skills</NavButtons>
      <NavButtons href="#experience">Experience</NavButtons>
      <NavButtons href="#contact">Contact</NavButtons>
    </nav>
  );
}
