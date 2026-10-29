
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
      number: "01",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "C", icon: <SiC /> },
      ],
    },
    {
      title: "Frontend Development",
      number: "02",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend Development",
      number: "03",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Databases",
      number: "04",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "AI & Machine Learning",
      number: "05",
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
      number: "06",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
      ],
    },
  ];

  const learning = [
    "Next.js",
    "TypeScript",
    "Generative AI",
    "LangChain",
  ];

  return (
    <section
      id="skills"
      className="w-full scroll-mt-16 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            Technologies and tools I use to build web applications,
            intelligent systems, and practical software solutions.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: (index % 3) * 0.06,
              }}
              className="group min-w-0 rounded-2xl border border-white/[0.09] bg-slate-900/70 p-4 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-slate-800/80 sm:p-5"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold text-cyan-400">
                  {category.number}
                </span>

                <h3 className="pt-1 text-base font-semibold leading-6 text-white sm:text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex min-h-9 max-w-full items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill.icon && (
                      <span className="shrink-0 text-cyan-400">
                        {skill.icon}
                      </span>
                    )}
                    <span className="break-words">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] to-blue-500/[0.04] p-4 sm:mt-8 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Currently Exploring
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Expanding my knowledge through continuous learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-slate-950/50 px-3 py-2 text-xs font-medium text-cyan-300 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
