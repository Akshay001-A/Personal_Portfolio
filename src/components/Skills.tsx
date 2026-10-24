import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiC,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "C", icon: <SiC /> },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "REST APIs" },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Artificial Intelligence",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Computer Vision" },
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16"
    >
      {/* Heading */}

      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-3"
        >
          Skills
        </motion.h2>

        <p className="text-gray-400">
          Technologies and tools I work with
        </p>
      </div>

      {/* Skill Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-md
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-300
                    text-sm
                    hover:bg-cyan-500/20
                    transition
                  "
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}

            </div>
          </motion.div>
        ))}

      </div>

      {/* Currently Learning */}

      <div className="max-w-6xl mx-auto mt-8">

        <div
          className="
          bg-white/5
          border
          border-cyan-400/20
          rounded-3xl
          p-6
          text-center
        "
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Next.js",
              "TypeScript",
              "Generative AI",
              "LangChain",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                "
              >
                {item}
              </span>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;