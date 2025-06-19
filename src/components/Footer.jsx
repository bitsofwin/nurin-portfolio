import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { resumeLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-vintage-brown py-8">
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full gap-y-6 md:gap-x-5">
      
      {/* Right Section - Image (on top for mobile) */}
      <div className="flex-shrink-0 pr-0 md:pr-8 group order-1 md:order-2">
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 p-1 group-hover:shadow-yellow-500 group-hover:shadow-2xl transition-all duration-500">
          <img
            src={profilePic}
            alt="Nurin Ilyana"
            className="w-full h-full object-cover rounded-full border-2 border-yellow"
          />
        </div>
      </div>

      {/* Left Section - Text, Icons, Button */}
      <div className="flex flex-col items-center md:items-start justify-center pl-0 md:pl-8 mt-5 order-2 md:order-1">
        <h2 className="text-2xl md:text-2xl font-bold text-white font-poppins hover:text-yellow-200 transition duration-300">
          {aboutMe.name}
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[15px] md:text-[16px] leading-[26px] max-w-[400px] mt-3 text-center md:text-left">
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-3">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              className="text-white mr-4 text-[22px] hover:text-yellow-200 transition duration-300"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="mt-7">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <Button
              styles="inline-flex items-center justify-center bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:scale-105 hover:shadow-lg transition transform duration-300 text-base"
              text="Resume"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;