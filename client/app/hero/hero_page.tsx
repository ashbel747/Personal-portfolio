import Image from "next/image";
import Link from "next/link";
import HeroTypingText from "../components/hero_typing";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-10 py-16 lg:flex-row lg:gap-16 lg:py-24">
          
          {/* Left Side - Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-blue-600">Ashbel King&apos;ori</span>
            </h1>
            <HeroTypingText />

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700"
              >
                Contact me
              </Link>
              {/* Resume download button */}
              <a
                href="/Resume.pdf"
                download="Ashbel_Resume.pdf"
                className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50"
              >
                View my resume
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
            <div className="flex-1 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <Image
                src="/profile.jpg"
                alt="Ashbel King'ori"
                fill
                className="
                    object-bottom shadow-xl 
                    [mask-image:url('/mask.png')] 
                    [-webkit-mask-image:url('/mask.png')] 
                    [mask-size:cover] 
                    [mask-repeat:no-repeat] 
                    [mask-position:center]"
                priority
                />
            </div>
            </div>


        </div>
      </div>
    </section>
  );
}
