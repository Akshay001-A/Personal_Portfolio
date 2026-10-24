import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
         id="about"
         className="relative flex items-center justify-center px-4 pt-14 pb-8 sm:px-6 sm:py-16 md:px-12 md:py-20"
           >
        <div className="mx-auto w-full max-w-5xl">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-center text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 md:text-xl md:leading-10">
              I am an Information Science &amp; Engineering student at
              <span className="font-medium text-cyan-400">
                {" "}M.S. Ramaiah Institute of Technology
              </span>
              {" "}with a strong passion for Full Stack Development,
              Artificial Intelligence, Machine Learning, Deep Learning,
              and Computer Vision.
            </p>

            <p className="mt-4 text-center text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl md:leading-10">
              I enjoy building innovative software solutions that solve
              real-world problems and create meaningful impact through
              technology and intelligent systems.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:mt-12 sm:gap-6"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-1 py-4 text-center sm:px-3 sm:py-5">
              <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                8.83
              </h3>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                CGPA
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-1 py-4 text-center sm:px-3 sm:py-5">
              <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                4+
              </h3>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Projects
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-1 py-4 text-center sm:px-3 sm:py-5">
              <h3 className="text-base font-bold text-cyan-400 sm:text-2xl md:text-3xl">
                Bangalore
              </h3>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Location
              </p>
            </div>
          </motion.div>

          {/* Read More */}
           <div className="mt-7 flex justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 sm:text-base"
            >
              Read More
            </button>
          </div>

        </div>
      </section>

      {/* About Me Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="my-auto max-h-[90dvh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-cyan-500/20 bg-slate-900 p-5 shadow-2xl shadow-cyan-950/30 sm:rounded-3xl sm:p-8 md:p-10"
          >
            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between gap-4 sm:mb-8">
              <h2
                id="about-modal-title"
                className="text-2xl font-bold text-cyan-400 sm:text-3xl md:text-4xl"
              >
                About Me
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close About Me dialog"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-3xl text-gray-300 transition hover:bg-white/10 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-sm leading-7 text-gray-300 sm:space-y-6 sm:text-base sm:leading-8 md:text-lg">
              <p>
                I am currently pursuing Information Science &amp;
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
                Alongside web development, I am passionate about
                Artificial Intelligence, Machine Learning, Deep
                Learning, Computer Vision, and Image Processing.
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
                My long-term goal is to become a skilled Software
                Engineer who combines Full Stack Development and
                Artificial Intelligence to build innovative,
                scalable, and impactful products.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end border-t border-white/10 pt-5 sm:mt-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-cyan-400/50 px-5 py-2.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 sm:text-base"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default About;
