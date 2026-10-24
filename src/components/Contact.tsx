import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || loading) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "akshay02072005@gmail.com",
      href: "mailto:akshay02072005@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 9686606689",
      href: "tel:+919686606689",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bangalore, Karnataka, India",
      href: "https://maps.google.com/?q=Bangalore,Karnataka,India",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/Akshay001-A",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/akshayofficial0207/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/akshay_authentic",
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span className="mb-3 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            Get in touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an opportunity, project idea, or question? I'd love to
            connect and discuss Software Development, Artificial Intelligence,
            Machine Learning, and innovative solutions.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:rounded-3xl sm:p-8"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
              Choose your preferred way to reach me. I'll be happy to hear
              from you.
            </p>

            <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 sm:gap-4 sm:p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-base text-cyan-400 transition-colors group-hover:bg-cyan-400/20 sm:h-12 sm:w-12 sm:text-lg">
                    {item.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-gray-500 sm:text-sm">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-xs font-medium text-gray-200 transition-colors group-hover:text-cyan-300 sm:text-sm">
                      {item.value}
                    </span>
                  </span>

                  <FaArrowRight className="hidden shrink-0 text-xs text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-cyan-400 sm:block" />
                </a>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-6 sm:mt-9 sm:pt-7">
              <p className="text-sm font-semibold text-white">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:rounded-3xl sm:p-8"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Fill in the details below and I'll receive your message by email.
            </p>

            {/* Status notifications */}
            {success && (
              <div
                role="status"
                aria-live="polite"
                className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm leading-6 text-emerald-300"
              >
                Message sent successfully! Thank you for reaching out.
              </div>
            )}

            {error && (
              <div
                role="alert"
                aria-live="assertive"
                className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300"
              >
                Failed to send your message. Please try again or contact me
                directly by email.
              </div>
            )}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 space-y-5 sm:mt-7"
            >
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={5000}
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Your details are used to respond to your message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;