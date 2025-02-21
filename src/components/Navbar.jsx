import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle CV Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "cv.pdf"; // Include base path
    link.download = "Mohammed_Rasvin_T_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Update body overflow when menu opens/closes
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Scroll Listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Mohammed<span className="text-orange-500"> Rasvin T</span>
          </a>

          {/* Hamburger for mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`${
                activeSection === "home" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                activeSection === "about" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`${
                activeSection === "contact" ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              Contact
            </a>

            {/* Download CV Button */}
            <button
              onClick={handleDownload}
              className="bg-orange-500 text-white py-2 px-4 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
