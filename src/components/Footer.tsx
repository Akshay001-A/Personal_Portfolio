import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Akshay001-A",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akshayofficial0207/",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/akshay_authentic",
      icon: <FaInstagram />,
    },
  ];

  return (
        <footer className="relative mt-6 overflow-hidden border-t border-white/10 bg-slate-950/70">      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[80px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight transition hover:opacity-80"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Akshay R
              </span>
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Information Science & Engineering student passionate about
              Full Stack Development, Artificial Intelligence, and building
              innovative software solutions.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Have a project idea, internship opportunity, or something
              interesting to discuss? Feel free to reach out.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              Get in Touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:mt-12 sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {currentYear} Akshay R. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 sm:text-sm">
            Designed with <span className="text-cyan-400">♥</span> and built
            with React & Tailwind CSS.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;