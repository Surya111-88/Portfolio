export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e2127] text-white z-50 shadow-lg">
      <ul className="flex flex-wrap justify-center gap-5 sm:gap-6 text-base sm:text-lg font-medium py-4 sm:py-6">
        <li>
          <a href="#hero" className="hover:opacity-70 transition-opacity">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:opacity-70 transition-opacity">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:opacity-70 transition-opacity">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:opacity-70 transition-opacity">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
