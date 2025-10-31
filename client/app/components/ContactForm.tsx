"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactForm } from "../lib/submissions_api";
import { ContactFormData } from "../types/contacts";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await sendContactForm(form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-100 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Contact Me
        </h2>

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
            placeholder="Write Your Message Here..."
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
    </section>
  );
}
