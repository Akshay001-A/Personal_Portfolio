import { motion } from "framer-motion";
import ramaiahLogo from "../assets/Ramaiah_Logo.png";
import vidyanidhiLogo from "../assets/vidyanidhi_logo.png";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.E Information Science & Engineering",
      institute: "M.S. Ramaiah Institute of Technology",
      location: "Bangalore, Karnataka",
      score: "CGPA: 8.83",
      status: "Current",
      logo: ramaiahLogo,
      description:
        "Currently pursuing B.E in Information Science & Engineering at M.S. Ramaiah Institute of Technology with a CGPA of 8.83. Actively building expertise in Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",
    },
    {
      year: "2021 - 2023",
      title: "Pre-University (PCMB)",
      institute: "VIDYANIDHI IND PU COLLEGE",
      location: "Bangalore, Karnataka",
      score: "93.5%",
      status: "Completed",
      logo: vidyanidhiLogo,
      description:
        "Completed Pre-University (PCMB) with 93.5%, building a strong academic foundation in Mathematics, Physics, Chemistry, and Biology while developing analytical and problem-solving skills.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 pt-16 pb-12 max-md:min-h-0 max-md:px-4 max-md:py-16"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold max-md:text-3xl">
          Education
        </h2>

        <p className="text-gray-400 mt-2">
          My academic journey and achievements
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto space-y-6">

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -5,
              scale: 1.01,
            }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              max-md:p-4
              backdrop-blur-md
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col md:flex-row gap-6">

              {/* Logo */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.logo}
                  alt={item.institute}
                  className="
                    w-24
                    h-24
                    object-contain
                    bg-white
                    rounded-xl
                    p-2
                  "
                />
              </div>

              {/* Content */}
              <div className="flex-1">

                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-cyan-400 font-semibold text-lg">
                    {item.year}
                  </p>

                  <span
                    className={`
                      px-3 py-1
                      rounded-full
                      text-xs
                      font-medium
                      ${item.status === "Current"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-2 max-md:text-xl max-md:leading-7">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-lg mt-1 max-md:text-base">
                  {item.institute}
                </p>

                <p className="text-gray-500 mt-1">
                  📍 {item.location}
                </p>

                <p className="text-cyan-400 font-bold text-xl mt-4">
                  {item.score}
                </p>

                <p className="mt-3 text-gray-300 leading-7">
                  {item.description}
                </p>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Education;
