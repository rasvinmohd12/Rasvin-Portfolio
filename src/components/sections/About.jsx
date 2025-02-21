import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Bootstrap"];
  const backendSkills = ["Node.js", "Python", "MongoDB", "Mysql", "Express.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Aspiring MERN stack developer with experience in building scalable and efficient web applications.
Expertise in front-end and back-end technologies, API development, and integration. Strong focus on
problem-solving, clean code practices, and collaboration to deliver exceptional user experiences and
maintainable solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(255,165,0,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(255,165,0,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelors of Computer Applications </strong> - Calicut University
                  (2021-2024)
                </li>
                <li>
                  <strong> Higher Seconday School </strong> - MSP HSS Malappuram
                  (2018-2020)
                </li>
                <li>
                  <strong> High School </strong> - MSP EMHS Malappuram
                  (2017-2018)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <ul className="font-semibold list-disc list-inside">
                  <li> <strong> Intern at Luminar Technolab (2024)</strong></li>
                  </ul>
                  <p>
                    Assisted in building Full stack projects and integrated
                    REST APIs.Designed and maintained responsive web applications using React.js and Node.js, combined MongoDB
                    for reliable data handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
