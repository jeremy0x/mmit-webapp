import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { cloneElement, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full bg-hero-bg bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/70"></div>

      <div className="container relative z-10 grid gap-8 px-4 pb-10 pt-16 text-white sm:px-12 sm:pt-24">
        <h1
          className="max-w-3xl text-4xl font-semibold !leading-tight sm:text-5xl"
          data-aos="fade-right"
        >
          Dedicated to <span className="text-primary-500">Empowering</span>{" "}
          Individuals Through Technology and Mentorship
        </h1>

        <p className="max-w-md" data-aos="fade-right" data-aos-delay="200">
          Welcome to mentormeintech, where we unlock limitless opportunities in
          the world of technology! We&apos;re excited to have you as a part of
          our vibrant community of tech enthusiasts.
        </p>

        <div
          className="flex flex-wrap gap-4 font-medium"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <Link
            href="/findamentor"
            className="w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 text-white transition-all hover:bg-opacity-70"
          >
            Find a Mentor
          </Link>

          <Link
            href="/auth/mentorlogin"
            className="w-fit rounded border border-primary-500 px-6 py-2 transition-all hover:bg-white/10"
          >
            Become a Mentor
          </Link>
        </div>

        <div
          className="flex gap-4 py-4 text-lg"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <SocialLink
            href="https://linkedin.com/company/mentormeintech"
            hoverBgColor="blue-200"
            iconColor="text-blue-500"
          >
            <FaLinkedinIn />
          </SocialLink>

          <SocialLink
            href="https://x.com/mentormeintech"
            hoverBgColor="neutral-200"
            iconColor="text-black"
          >
            <RiTwitterXFill />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/mentormeintech5"
            hoverBgColor="red-200"
            iconColor="text-red-500"
          >
            <RiInstagramFill />
          </SocialLink>
        </div>

        <p className="text-right text-sm text-primary-500" data-aos="fade-down">
          MMIT, Your tech odyssey starts here!
        </p>
      </div>
    </section>
  );
};

const SocialLink = ({ href, children, hoverBgColor, iconColor }) => (
  <Link
    href={href}
    target="blank"
    className={`flex items-center justify-center rounded-full bg-white p-2 transition-all hover:bg-${hoverBgColor}`}
  >
    {cloneElement(children, { className: iconColor })}
  </Link>
);
