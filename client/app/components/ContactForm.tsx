"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { sendContactForm } from "../lib/submissions_api";
import { ContactFormData } from "../types/contacts";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await sendContactForm(form);
      setSuccess("Message sent successfully!");
      setForm(initialFormData);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Oops! Something went wrong. Please try again later.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <h2 className="text-4xl font-extrabold text-center mb-16">Get In Touch</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-700 mb-8">
            Have a question, project idea, or collaboration in mind? I'd love to
            hear from you. Feel free to reach out through the form or directly
            using the contact details below.
          </p>

          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href="tel:+254795524137"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                +254 795 524 137
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:kashbel747@gmail.com"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                kashbel747@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <a
                href="https://maps.app.goo.gl/2dRym5vD6DEEGpVg6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                Murang'a, Kenya
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-blue-600" />
              <p className="text-gray-800">Available</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              I aim to respond to all messages within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 transition-all duration-300"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="text-black w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="text-black w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="text-black w-full mb-4 p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {success && <p className="text-blue-600 text-sm mb-2">{success}</p>}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
