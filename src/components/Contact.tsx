import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";


function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    setSuccess(true);
                    setError(false);

                    form.current?.reset();
                    setLoading(false);

                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                },
                (error) => {
                    console.error(error);

                    setSuccess(false);
                    setError(true);
                    setLoading(false);

                    setTimeout(() => {
                        setError(false);
                    }, 5000);
                }
            );
    };

    return (
        <section
            id="contact"
            className="pt-0 pb-16 px-6 scroll-mt-24 max-md:px-4 max-md:pb-14"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16 max-md:mb-9">
                    <h2 className="text-5xl font-bold mb-4 max-md:text-3xl max-md:mb-3">
                        Contact Me
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto max-md:text-base max-md:leading-7">
                        Let's connect and discuss opportunities in Software Development,
                        Artificial Intelligence, Machine Learning, and innovative projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-md:gap-8">

                    {/* Contact Info */}
                    <div className="space-y-5 max-md:space-y-3">

                        <a
                            href="mailto:akshay02072005@gmail.com"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 max-md:gap-3 max-md:p-4 max-md:text-sm"
                        >
                            <FaEnvelope className="text-cyan-400 text-xl" />
                            <span className="min-w-0 break-all">akshay02072005@gmail.com</span>
                        </a>

                        <a
                            href="tel:+919686606689"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 max-md:gap-3 max-md:p-4 max-md:text-sm"
                        >
                            <FaPhone className="text-cyan-400 text-xl" />
                            <span>+91 9686606689</span>
                        </a>

                        <a
                            href="https://github.com/Akshay001-A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2 max-md:gap-3 max-md:p-4 max-md:text-sm"
                        >
                            <FaGithub className="text-cyan-400 text-xl" />
                            <span>GitHub Profile</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/akshayofficial0207/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2 max-md:gap-3 max-md:p-4 max-md:text-sm"
                        >
                            <FaLinkedin className="text-cyan-400 text-xl" />
                            <span>LinkedIn Profile</span>
                        </a>

                        <a
                            href="https://www.instagram.com/akshay_authentic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2 max-md:gap-3 max-md:p-4 max-md:text-sm"
                        >
                            <FaInstagram className="text-cyan-400 text-xl" />
                            <span>@akshay_authentic</span>
                        </a>

                    </div>


                    {/* Success Notification */}
                    {success && (
                        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 max-md:top-20 max-md:w-[calc(100%-2rem)]">
                            <div className="bg-[#111827] border border-green-500 text-green-400 px-8 py-4 rounded-xl shadow-2xl backdrop-blur-md max-md:px-4 max-md:text-sm">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        </div>
                    )}

                    {/* Error Notification */}
                    {error && (
                        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 max-md:top-20 max-md:w-[calc(100%-2rem)]">
                            <div className="bg-[#111827] border border-red-500 text-red-400 px-8 py-4 rounded-xl shadow-2xl backdrop-blur-md max-md:px-4 max-md:text-sm">
                                ❌ Failed to send message. Please try again.
                            </div>
                        </div>
                    )}

                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-5 max-md:space-y-4"
                    >

                        <input
                            type="text"
                            name="from_name"
                            required
                            placeholder="Your Name"
                            className="w-full min-h-12 p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none max-md:p-3"
                        />

                        <input
                            type="email"
                            name="from_email"
                            required
                            placeholder="Your Email"
                            className="w-full min-h-12 p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none max-md:p-3"
                        />

                        <textarea
                            rows={6}
                            name="message"
                            required
                            placeholder="Your Message"
                            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none max-md:p-3"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-semibold
                px-8
                py-4
                max-md:w-full
                rounded-2xl
                transition-all
                duration-300
                hover:scale-105
              "
                        >
                            {loading ? "Sending..." : "Send Message →"}
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;
