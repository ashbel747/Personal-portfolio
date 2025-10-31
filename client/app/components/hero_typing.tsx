"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTypingText() {
  return (
    <p className="mt-6 text-lg leading-8 text-gray-600">
      <Typewriter
        words={[
          "I'm a Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications.",
          "Explore my projects, skills, and experience below.",
        ]}
        loop={0} // 0 = infinite loop, or set to 1 to type once
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={20}
        delaySpeed={2000} // pause before deleting
      />
    </p>
  );
}
