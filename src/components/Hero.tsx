
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  const technologies = [
    "Java",
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git",
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-16 items-center overflow-x-clip px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-10 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-32 -z-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-[100px] sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-48 w-48 rounded-full bg-blue-500/20 blur-[100px] sm:h-72 sm:w-72" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-7 sm:gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 lg:gap-14">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex min-w-0 justify-center md:justify-start"
        >
          <img
            src={hero}
            alt="Akshay R"
            className="h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_45px_rgba(34,211,238,0.3)] min-[400px]:h-48 min-[400px]:w-48 sm:h-64 sm:w-64 md:h-auto md:w-full md:max-w-[340px] lg:max-w-[400px]"
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0 text-center md:text-left"
        >
          <p className="mb-2 text-base font-medium text-cyan-400 sm:mb-3 sm:text-xl">
            👋 Hello, I'm
          </p>

          <h1 className="mb-2 break-words bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-7xl">
            Akshay R
          </h1>

          <div className="min-h-8 text-lg text-cyan-400 sm:min-h-10 sm:text-2xl lg:text-3xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI/ML Enthusiast",
                2000,
                "Machine Learning Developer",
                2000,
                "React & Node.js Developer",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
              className="break-words"
            />
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-gray-200 sm:mt-4 sm:text-lg sm:leading-7 md:mx-0">
            Studying Information Science & Engineering at M.S. Ramaiah
            Institute of Technology, Bangalore.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:mt-5 sm:text-lg sm:leading-8 md:mx-0">
            Passionate about building AI-powered applications, scalable web
            platforms, and innovative software solutions using modern
            technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-4 md:justify-start">
            <a
              href="https://drive.google.com/file/d/1zp3lmgaqtjXMfJfKMcAQzthPlhtaijbr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:min-h-12 sm:px-7 sm:text-base"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-cyan-400 px-4 py-2.5 text-sm font-medium transition hover:bg-cyan-400 hover:text-black sm:min-h-12 sm:px-7 sm:text-base"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="mt-5 flex justify-center gap-5 text-2xl sm:mt-7 sm:gap-6 sm:text-3xl md:justify-start">
            <a
              href="https://github.com/Akshay001-A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akshayofficial0207"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Statistics */}
          <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-2 sm:mt-9 sm:gap-6 md:mx-0 md:max-w-md">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 sm:text-3xl">
                8.83
              </h3>
              <p className="text-xs text-gray-400 sm:text-base">CGPA</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 sm:text-3xl">
                4+
              </h3>
              <p className="text-xs text-gray-400 sm:text-base">Projects</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 sm:text-3xl">
                2027
              </h3>
              <p className="text-xs text-gray-400 sm:text-base">Graduate</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7 sm:mt-9">
            <h3 className="mb-3 text-base font-medium text-cyan-400 sm:mb-4 sm:text-xl">
              Core Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
