import { motion } from "framer-motion";
import ramaiahLogo from "../assets/Ramaiah_Logo.png";
import vidyanidhiLogo from "../assets/vidyanidhi_logo.png";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "B.E. Information Science & Engineering",
      institute: "M.S. Ramaiah Institute of Technology",
      location: "Bangalore, Karnataka",
      score: "CGPA: 8.83",
      status: "Current",
      logo: ramaiahLogo,
      description:
        "Currently pursuing B.E. in Information Science & Engineering at M.S. Ramaiah Institute of Technology with a CGPA of 8.83. Actively building expertise in Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",
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
      className="relative scroll-mt-20 px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:px-12 md:pt-16 md:pb-20"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center sm:mb-10"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-4 sm:space-y-6">
          {education.map((item, index) => (
            <motion.article
              key={item.institute}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.10)] sm:rounded-3xl sm:p-6 md:p-7"
            >
              <div className="flex min-w-0 flex-col gap-4 sm:gap-5 md:flex-row md:items-start md:gap-6">

                {/* Institution Logo */}
                <div className="flex shrink-0 justify-start md:justify-center">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2 sm:h-20 sm:w-20 md:h-24 md:w-24">
                    <img
                      src={item.logo}
                      alt={`${item.institute} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Education Details */}
                <div className="min-w-0 flex-1">

                  {/* Year and Status */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-cyan-400 sm:text-base">
                      {item.year}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        item.status === "Current"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-blue-500/15 text-blue-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="mt-2 break-words text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>

                  {/* Institute */}
                  <p className="mt-2 break-words text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                    {item.institute}
                  </p>

                  {/* Location */}
                  <p className="mt-1 text-sm text-gray-400">
                    <span aria-hidden="true">📍 </span>
                    {item.location}
                  </p>

                  {/* Score */}
                  <p className="mt-3 text-lg font-bold text-cyan-400 sm:text-xl">
                    {item.score}
                  </p>

                  {/* Description */}
                  <p className="mt-3 break-words text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
