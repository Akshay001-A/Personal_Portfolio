
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

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
        "An AI-powered audio forensics system built with Python, Flask, Scikit-Learn, and Librosa to identify potentially manipulated speech and classify audio authenticity.",
      github:
        "https://github.com/Akshay001-A/Deepfake-Audio-Detection",
      tech: ["Python", "Flask", "Scikit-Learn", "Librosa"],
    },
    {
      image: potatoImg,
      category: "Deep Learning",
      title: "Potato Plant Disease Recognition",
      description:
        "A deep learning application using TensorFlow, EfficientNetV2, Flask, and MongoDB to recognize potato plant diseases from uploaded images.",
      github:
        "https://github.com/Akshay001-A/potato-plant-disease-recognition",
      tech: ["TensorFlow", "Flask", "MongoDB"],
    },
    {
      image: shoemartImg,
      category: "Full Stack Development",
      title: "Shoe Mart E-Commerce",
      description:
        "An AI-driven footwear marketplace built with React, Node.js, and MongoDB, featuring conversational shopping, personalized recommendations, and visual product discovery.",
      github:
        "https://github.com/Akshay001-A/Shoe-Mart-E-commerce-Web-Application",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      image: echobrainImg,
      category: "AI Developer Tool",
      title: "EchoBrain X",
      description:
        "An AI-powered repository intelligence platform for project summaries, semantic code search, architecture analysis, source browsing, and natural-language codebase conversations.",
      github:
        "https://github.com/Akshay001-A/EchoBrain",
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
        "A desktop application built with Java Swing, MySQL, and JDBC for managing gym members, payments, workout schedules, and administrative tasks.",
      github:
        "https://github.com/Akshay001-A/Gym-Management-System",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
    },
    {
      image: flashlearnImg,
      category: "Educational Platform",
      title: "Flash Learn",
      description:
        "An interactive learning platform built with HTML, CSS, JavaScript, and jQuery, featuring flashcards, quizzes, learning progress, and daily study streaks.",
      github:
        "https://github.com/Akshay001-A/FLASH_LEARN",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full scroll-mt-16 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
            
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            A selection of applications I have built across AI,
            machine learning, web development, and software
            engineering.
          </p>
        </div>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.4,
                delay: (index % 3) * 0.06,
              }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-900/75 transition-colors duration-300 hover:border-cyan-400/40 sm:rounded-3xl"
            >
              {/* Image preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <h3 className="break-words text-lg font-bold leading-snug text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 break-words text-sm leading-6 text-gray-400 sm:text-[15px] sm:leading-7">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full break-words rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-300 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub action */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08] px-4 py-3 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-base"
                >
                  <FaGithub className="shrink-0" />
                  View Source Code
                  <FaArrowUpRightFromSquare className="shrink-0 text-xs" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
