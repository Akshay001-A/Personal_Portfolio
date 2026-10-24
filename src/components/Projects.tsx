import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import deepfakeImg from "../assets/deepfake.png";
import potatoImg from "../assets/potato.png";
import shoemartImg from "../assets/shoemart.png";
import gymImg from "../assets/gym.png";
import flashlearnImg from "../assets/flashlearn.png";
import echobrainImg from "../assets/dashboard.png";

function Projects() {
  const projects = [
    {
      image: deepfakeImg,
      category: "Artificial Intelligence",
      title: "Deepfake Audio Detection",
      description:
        "AI-powered audio forensics platform built with Python, Flask, Scikit-Learn, and Librosa to detect deepfake speech and classify audio authenticity.",
      github:
        "https://github.com/Akshay001-A/Deepfake-Audio-Detection",
      tech: ["Python", "Flask", "Scikit-Learn", "Librosa"],
    },
    {
      image: potatoImg,
      category: "Deep Learning",
      title: "Potato Plant Disease Recognition",
      description:
        "Deep learning application built with TensorFlow, Flask, and EfficientNetV2 to identify potato plant diseases from uploaded leaf images.",
      github:
        "https://github.com/Akshay001-A/potato-plant-disease-recognition",
      tech: ["TensorFlow", "Flask", "MongoDB"],
    },
    {
      image: shoemartImg,
      category: "Full Stack Development",
      title: "Shoe Mart E-Commerce Platform",
      description:
        "AI-driven footwear marketplace built with React, Node.js, MongoDB, Gemini AI, and OpenCLIP, designed to enhance product discovery and the online shopping experience.",
      github:
        "https://github.com/Akshay001-A/Shoe-Mart-E-commerce-Web-Application",
      liveDemo: "https://shoemart-frontend.onrender.com/",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      image: echobrainImg,
      category: "AI Developer Tool",
      title: "EchoBrain X",
      description:
        "AI-powered repository intelligence platform that helps developers explore codebases, generate project summaries, search code semantically, and understand software architecture.",
      github: "https://github.com/Akshay001-A/EchoBrain",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vector Embeddings",
      ],
    },
    {
      image: gymImg,
      category: "Java Application",
      title: "Gym Management System",
      description:
        "Desktop application built with Java Swing, MySQL, and JDBC for managing gym members, payments, workout schedules, and administrative tasks.",
      github:
        "https://github.com/Akshay001-A/Gym-Management-System",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
    },
    {
      image: flashlearnImg,
      category: "Educational Platform",
      title: "Flash Learn",
      description:
        "Interactive learning platform featuring digital flashcards, quizzes, progress tracking, daily streaks, and personalized study experiences.",
      github: "https://github.com/Akshay001-A/FLASH_LEARN",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore my work in Artificial Intelligence, Machine Learning,
            Full Stack Development, and Software Engineering. Each project
            demonstrates practical implementation of technologies to solve
            real-world problems.
          </p>
        </motion.div>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/5"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-[10px] font-semibold text-cyan-300 backdrop-blur-sm sm:text-xs">
                  {project.category}
                </span>
              </div>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1.5 text-[11px] font-medium text-cyan-200 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project actions */}
                <div
                  className={`mt-6 grid gap-3 ${
                    project.liveDemo ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}

                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-2 py-3 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-500/20 sm:px-3 sm:text-sm"
                  >
                    <FaGithub className="shrink-0 text-base" />
                    <span>View Code</span>
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live ${project.title} website`}
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:brightness-110 sm:px-3 sm:text-sm"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="shrink-0 text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;