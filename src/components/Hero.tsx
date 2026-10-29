import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 relative overflow-hidden max-md:min-h-0 max-md:px-4 max-md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full max-md:left-0 max-md:w-52 max-md:h-52"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full max-md:right-0 max-md:w-52 max-md:h-52"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[35%_65%] gap-6 items-center max-md:w-full max-md:gap-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-start max-md:justify-center"
        >
          <img
            src={hero}
            alt="Akshay"
            className="
              w-[320px]
              h-[320px]
              max-md:w-56
              max-md:h-56
              md:w-[400px]
              md:h-[400px]
              object-cover
              rounded-full
              border-4
              border-cyan-400
              shadow-[0_0_80px_rgba(34,211,238,0.45)]
            "
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-22 max-md:mt-0 max-md:text-center"
        >

          <p className="text-cyan-400 text-xl font-medium mb-4 max-md:text-base max-md:mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent max-md:text-4xl max-md:leading-tight">
            Akshay R
          </h1>

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
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-2xl md:text-3xl max-md:block max-md:min-h-14 max-md:text-xl"
          />

          <p className="mt-3 text-lg text--400 font-medium max-md:text-base max-md:leading-7">
            Studying Information Science & Engineering at
            M.S. Ramaiah Institute of Technology, Bangalore
          </p>


          <p className="max-w-2xl mt-6 text-gray-300 leading-8 text-lg max-md:mt-4 max-md:text-base max-md:leading-7">
            Passionate about building AI-powered applications,
            scalable web platforms, and innovative software
            solutions using modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 max-md:mt-6 max-md:justify-center max-md:gap-3">

            <a
              href="https://drive.google.com/file/d/1zp3lmgaqtjXMfJfKMcAQzthPlhtaijbr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-600 transition px-7 py-3 rounded-xl flex items-center gap-2 font-medium max-md:min-h-11 max-md:px-5"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#projects"
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-7 py-3 rounded-xl font-medium max-md:min-h-11 max-md:px-5"
            >
              View Projects
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl max-md:justify-center max-md:mt-6">

            <a
              href="https://github.com/Akshay001-A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/akshayofficial0207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>



          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-10 max-md:grid max-md:grid-cols-3 max-md:gap-3 max-md:mt-8">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400 max-md:text-2xl">
                8.83
              </h3>
              <p className="text-gray-400">
                CGPA
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400 max-md:text-2xl">
                4+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400 max-md:text-2xl">
                2027
              </h3>
              <p className="text-gray-400">
                Graduate
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="mt-10 max-md:mt-8">

            <h3 className="text-cyan-400 text-xl mb-4 max-md:text-lg">
              Core Technologies
            </h3>

            <div className="flex flex-wrap gap-3 max-md:justify-center max-md:gap-2">

              {[
                "Java",
                "Python",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Docker",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    max-md:px-3
                    max-md:py-1.5
                    bg-white/5
                    border
                    border-white/10
                    rounded-full
                    text-sm
                    hover:border-cyan-400
                    hover:text-cyan-400
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
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
