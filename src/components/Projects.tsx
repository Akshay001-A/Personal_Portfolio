import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import deepfakeImg from "../assets/deepfake.png";
import potatoImg from "../assets/potato.png";
import shoemartImg from "../assets/shoemart.png";
import gymImg from "../assets/gym-dashboard.png";
import flashlearnImg from "../assets/flashlearn.png";
import echobrainImg from "../assets/dashboard.png";

function Projects() {
    const projects = [
        {
            image: deepfakeImg,
            order: 3,
            category: "Artificial Intelligence",
            title: "Deepfake Audio Detection",
            description:
                "Built a Flask application that analyzes uploaded audio to identify potential deepfake speech. Used Librosa for audio feature extraction and Scikit-Learn for authenticity classification.",
            github:
                "https://github.com/Akshay001-A/Deepfake-Audio-Detection",
            tech: ["Python", "Flask", "Scikit-Learn", "Librosa"],
        },

        {
            image: potatoImg,
            order: 4,
            category: "Deep Learning",
            title: "Potato Plant Disease Recognition",
            description:
                "Developed a web application that classifies potato leaf images to support plant disease identification. Built with TensorFlow, EfficientNetV2, Flask, and MongoDB.",
            github:
                "https://github.com/Akshay001-A/potato-plant-disease-recognition",
            tech: ["TensorFlow", "Flask", "MongoDB",]
        },

        {
            image: shoemartImg,
            order: 1,
            category: "Full Stack Development",
            title: "Shoe Mart E-Commerce Platform",
            description:
                "Created a full stack footwear marketplace with React, Node.js, and MongoDB. Integrated Gemini AI and OpenCLIP to support conversational shopping and visual product discovery.",
            github:
                "https://github.com/Akshay001-A/Shoe-Mart-E-commerce-Web-Application",
            liveDemo: "https://shoemart-frontend.onrender.com/",
            tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
        },

        {
                    image: echobrainImg,
                    order: 5,
                    category: "AI Developer Tool",
                    title: "EchoBrain X",
                    description:
                        "Built a repository intelligence tool for exploring codebases through summaries, semantic search, architecture analysis, and natural-language questions. Developed with Next.js, Express, MongoDB, and Gemini AI.",
                    github:
                        "https://github.com/Akshay001-A/EchoBrain",
                    tech: [
                        "Next.js",
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Vector Embeddings"
                    ],
          },

        {
            image: gymImg,
            order: 2,
            category: "Full Stack Development",
            title: "Gym Management System",
            description:
                "A full stack gym management system built with React, Spring Boot microservices, and PostgreSQL. Includes member and admin dashboards, memberships, payments, QR-based attendance, and Kafka-powered membership activation.",
            github:
                "https://github.com/Akshay001-A/Gym-Management-System",
            tech: ["React", "Spring Boot", "PostgreSQL", "Kafka"],
        },

        {
            image: flashlearnImg,
            order: 6,
            category: "Educational Platform",
            title: "Flash Learn",
            description:
                "Created an interactive study platform with flashcards, quizzes, progress tracking, and daily streaks. Built the interface with HTML, CSS, JavaScript, and jQuery.",
            github:
                "https://github.com/Akshay001-A/FLASH_LEARN",
            tech: ["HTML", "CSS", "JavaScript", "jQuery"],
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-6 pt-1 pb-16 scroll-mt-16 max-md:min-h-0 max-md:px-4 max-md:pt-12"
        >
            {/* Heading */}

            <div className="text-center mb-10 max-md:mb-8">
                <h2 className="text-5xl font-bold mb-4 max-md:text-3xl max-md:mb-3">
                    Projects
                </h2>

                <p className="text-gray-400 max-w-3xl mx-auto text-lg max-md:text-base max-md:leading-7">
                    A collection of AI, Machine Learning, Full Stack Development,
                    and Software Engineering projects focused on solving
                    real-world problems and delivering impactful user experiences.
                </p>
            </div>

            {/* Projects Grid */}

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-5">

                {[...projects].sort((a, b) => a.order - b.order).map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              max-md:rounded-2xl
              overflow-hidden
              backdrop-blur-md
              hover:border-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              transition-all
              duration-300
              flex
              flex-col
              h-full
            "
                    >
                        {/* Image */}

                        <div className="relative h-56 overflow-hidden max-md:h-48">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-110
                "
                            />

                            <div
                                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-transparent
                  to-transparent
                "
                            />

                        </div>

                        {/* Content */}

                        <div className="p-6 flex flex-col flex-1 max-md:p-4">

                            <p className="text-cyan-400 text-sm mb-3">
                                {project.category}
                            </p>

                            <h3 className="text-2xl font-bold mb-4 max-md:text-xl max-md:mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 leading-7 mb-5 max-md:line-clamp-4 max-md:text-sm max-md:leading-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">

                                {project.tech.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="
                      px-3
                      py-1
                      bg-cyan-500/10
                      border
                      border-cyan-500/30
                      text-cyan-400
                      rounded-full
                      text-sm
                      max-md:text-xs
                    "
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                            {/* Button */}

                            <div className={`mt-auto grid gap-3 ${project.liveDemo ? "sm:grid-cols-2" : "grid-cols-1"}`}>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    block
                    w-full
                    text-center
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-slate-950
                    font-semibold
                    py-3
                    max-md:min-h-12
                    max-md:py-3.5
                    rounded-xl
                    transition-all
                    duration-300
                  "
                                >
                                    <span className="inline-flex items-center justify-center gap-2">
                                        <FaGithub aria-hidden="true" className="text-lg" />
                                        View Source Code
                                    </span>
                                </a>

                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-400 bg-transparent px-4 py-3 text-center font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                                    >
                                        <FaExternalLinkAlt aria-hidden="true" />
                                        Live Demo
                                    </a>
                                )}

                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}

export default Projects;
