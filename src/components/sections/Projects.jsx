import { RevealOnScroll } from "../RevealOnScroll";
import music from "../../assets/1.png"; 
import weather from "../../assets/2.png"; 
import media from "../../assets/3.png"; 
import project from "../../assets/4.png"; 

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Musigo Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(255,165,0,0.2)] transition">
              <img
                src={music} // Replace with actual image path
                alt="Musigo Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Musigo</h3>
              <p className="text-gray-400 mb-4">
                A dynamic music streaming platform featuring real-time chat functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "Socket.io", "Zustand"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rasvinmohd12/MusiGo"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Fair */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(255,165,0,0.1)] transition-all">
              <img
                src={project} // Replace with actual image path
                alt="Project Fair Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Project Fair</h3>
              <p className="text-gray-400 mb-4">
                Website enabling users to upload, share, and access project repositories on GitHub.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rasvinmohd12/ProjectFair"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Media Player App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(255,165,0,0.1)] transition-all">
              <img
                src={media} // Replace with actual image path
                alt="Media Player Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Media Player App</h3>
              <p className="text-gray-400 mb-4">
                A media player to manage and categorize YouTube video content.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rasvinmohd12/Media-Player"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Weather App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(255,165,0,0.1)] transition-all">
              <img
                src={weather} // Replace with actual image path
                alt="Weather App Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                A weather application to provide real-time weather metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Weather API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rasvinmohd12/WeatherApp"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
