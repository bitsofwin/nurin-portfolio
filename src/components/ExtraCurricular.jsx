import React from "react";
import styles from "../style";
import { extraCurricular } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Content = ({ text, link, youtube }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
        ● {text}{" "}
        {link ? (
          <a href={link} target="_blank">
            <BsLink45Deg size="1rem" className="inline hover:text-yellow-200" />
          </a>
        ) : null}
      </p>
      {youtube && (
        <a
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mb-2 group"
        >
          <FaYoutube size="1.5rem" className="inline ml-1 text-white group-hover:text-yellow-200 transition-colors duration-200" />
        </a>
      )}
    </div>
  );
};

const ExtraCurricularCard = (props) => {
  return (
    <motion.div
      className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 mr-0 my-5 feedback-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center text-center mb-4">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[55px] h-[55px] rounded-full mx-auto"
        />
        <h4 className="font-poppins font-semibold text-[19px] text-gradient leading-[32px] mt-2">
          {props.organisation}
        </h4>
        <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
          {props.title}
        </p>
        <p className="font-poppins italic font-normal text-[14px] text-dimWhite">
          {props.duration}
        </p>
      </div>
      <div className="text-left">
        {props.content.map((info,index) => {
          return <Content key={index} {...info} />;
        })}
      </div>
    </motion.div>
  );
};

const ExtraCurricular = () => {
  return (
    <section id="extraCurricular">
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] text-center w-full">
        Extra Curricular
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0 gap-x-3 mt-8 md:mt-16 md:grid-cols-3">
          {extraCurricular.map((card) => (
            <ExtraCurricularCard key={card.id} index={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
