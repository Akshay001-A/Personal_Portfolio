import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
      >
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>

          <p className="text-xl text-gray-300 leading-10 text-center">
            I am an Information Science & Engineering student at
            <span className="text-cyan-400">
              {" "}M.S. Ramaiah Institute of Technology
            </span>
            {" "}with a strong passion for Full Stack Development,
            Artificial Intelligence, Machine Learning, Deep Learning,
            and Computer Vision.
          </p>

          <p className="text-xl text-gray-300 leading-10 text-center mt-6">
            I enjoy building innovative software solutions that solve
            real-world problems and create meaningful impact through
            technology and intelligent systems.
          </p>

          <div className="flex justify-center gap-12 mt-12">

            <div className="text-center">
              <h3 className="text-cyan-400 text-3xl font-bold">
                8.83
              </h3>
              <p className="text-gray-400">
                CGPA
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-cyan-400 text-3xl font-bold">
                4+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-cyan-400 text-3xl font-bold">
                Bangalore
              </h3>
              <p className="text-gray-400">
                Location
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => setOpen(true)}
              className="
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                hover:scale-105
                transition-all
                duration-300
                font-medium
              "
            >
              Read More
            </button>
          </div>

        </div>
      </section>

      {/* Modal */}

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-[100]
            p-6
          "
        >
          <div
            className="
              bg-slate-900
              border
              border-cyan-500/20
              rounded-3xl
              max-w-4xl
              w-full
              max-h-[85vh]
              overflow-y-auto
              p-8
            "
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-cyan-400">
                About Me
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="
                  text-3xl
                  hover:text-cyan-400
                  transition
                "
              >
                ×
              </button>
            </div>

            <div className="space-y-6 text-gray-300 leading-9">

              <p>
                I am currently pursuing Information Science &
                Engineering at M.S. Ramaiah Institute of Technology,
                where I continuously strengthen my knowledge in
                software development, data structures, databases,
                and modern computing technologies.
              </p>

              <p>
                My primary interest lies in Full Stack Development.
                I enjoy building scalable web applications using
                technologies such as React.js, Node.js, Express.js,
                MongoDB, MySQL, Java, and Python.
              </p>

              <p>
                Alongside web development, I am highly passionate
                about Artificial Intelligence, Machine Learning,
                Deep Learning, Computer Vision, and Image Processing.
                I enjoy developing intelligent systems capable of
                solving practical real-world challenges.
              </p>

              <p>
                Through academic projects and personal learning,
                I have gained hands-on experience in creating
                modern applications, integrating AI solutions,
                and building user-friendly software systems.
              </p>

              <p>
                My long-term goal is to become a highly skilled
                Software Engineer who combines Full Stack
                Development and Artificial Intelligence to build
                innovative, scalable, and impactful products
                that contribute positively to society.
              </p>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default About;
