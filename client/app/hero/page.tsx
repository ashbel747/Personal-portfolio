"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroTypingText from "../components/hero_typing";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-60" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse items-center gap-10 py-16 lg:flex-row lg:gap-16 lg:py-24">
          
          {/* Left Side - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <motion.span
                className="text-blue-600 bg-clip-text"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                Ashbel King&apos;ori
              </motion.span>
            </h1>

            {/* Typewriter Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HeroTypingText />
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700"
                >
                  Contact me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/Resume.pdf"
                  download="Ashbel_Resume.pdf"
                  className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50"
                >
                  View my resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] rounded-full overflow-hidden shadow-xl"
            >
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl rounded-full" />
              <Image
                src="/profile.png"
                alt="Ashbel King'ori"
                fill
                className="object-cover object-center relative z-10"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
