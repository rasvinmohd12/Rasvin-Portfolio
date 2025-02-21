import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import photo from "../../assets/photo.jpg"; // ✅ Correct path
import { FaX, FaXTwitter } from "react-icons/fa6";

export const Home = () => {



  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-orange-400"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Image */}
          <img
            src={photo}
            alt="Mohammed Rasvin T"
            className="w-46 h-46 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />

          {/* Social Media Links */}
          <div className="flex justify-center space-x-12 mb-6">
            <a
              href="https://www.linkedin.com/in/mohammed-rasvin-t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rasvinmohd12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-orange-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-orange-400 transition"
            >
              <FaXTwitter />
            </a>
          </div>

           

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            <span className="text-white"> Hi, I'm</span> Mohammed Rasvin T
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 165, 0, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 165, 0, 0.2)] hover:bg-orange-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
