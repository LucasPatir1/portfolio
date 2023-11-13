import React from "react";
import { Link as ScrollLink } from "react-scroll";

const AboutSectionAbout = () => {
  return (
    <section name="About" className="relative w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8">
        <div className="flex mt-8 md:mt-0">
          <img
            src="/images/profile.jpg"
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20"
            style={{ filter: "drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))" }}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-[85%] md:h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            Who am I?
          </h1>

          <p className="text-md md:text-lg text-gray-300 py-4 max-x-md text-justify">
            I am a professional graduated from Politécnico Grancolombiano
            University and for the past eight years, I've been immersed in the
            dynamic world of video editing, working with "Noticias Caracol",
            which is not only the most-watched newcast in Colombia but also has
            alliances with several countries worldwide.
          </p>

          <p className="text-md md:text-lg text-gray-300 max-x-md text-justify">
            This experience has given me incredible opportunities to collaborate
            with diverse teams and shoulder substantial responsibilities. As the
            last line of defense before content went live, I honed my skills in
            working effectively with large teams and ensuring top-notch results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAbout;
