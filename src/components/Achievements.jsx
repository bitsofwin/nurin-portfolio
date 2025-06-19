import React, { useState, useEffect, useRef } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { achievements } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../style";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardTotalWidth, setCardTotalWidth] = useState(0);
  const containerRef = useRef(null);

  // Popup state
  const [popupImages, setPopupImages] = useState(null); // array of images
  const [popupImgIndex, setPopupImgIndex] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector('.achievement-card');
        if (card) {
          const cardWidth = card.offsetWidth;
          const cardMargin = parseInt(window.getComputedStyle(card).marginRight, 10);
          setCardTotalWidth(cardWidth + cardMargin);
        }
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Popup navigation
  const handlePopupNext = (e) => {
    e.stopPropagation();
    setPopupImgIndex((idx) => (popupImages && idx < popupImages.length - 1 ? idx + 1 : idx));
  };
  const handlePopupPrev = (e) => {
    e.stopPropagation();
    setPopupImgIndex((idx) => (popupImages && idx > 0 ? idx - 1 : idx));
  };
  const closePopup = () => {
    setPopupImages(null);
    setPopupImgIndex(0);
  };

  const isNextDisabled = currentIndex >= achievements.length - 1;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section className="bg-primary overflow-hidden text-white mt-5 md:mt-10 relative" id="achievements">
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] text-center w-full">
            Awards & Certificates
          </h1>
        </div>
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} overflow-hidden`}>
          <div className="my-20">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardTotalWidth}px)`,
              }}
            >
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  {...achievement}
                  onCardClick={() =>
                    achievement.images && achievement.images.length > 0
                      ? (setPopupImages(achievement.images), setPopupImgIndex(0))
                      : null
                  }
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-4 mb-4 w-full">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className="p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {popupImages && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all duration-500 animate-fadeIn"
          onClick={closePopup}
        >
          <div className="relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {/* Left Arrow - only show if more than 1 image */}
            {popupImages.length > 1 && (
              <button
                onClick={handlePopupPrev}
                disabled={popupImgIndex === 0}
                className={`absolute left-2 top-1/2 -translate-y-1/2 
                  text-white text-4xl p-3 bg-black bg-opacity-30 rounded-full shadow-lg 
                  transition-all duration-200 z-10
                  ${popupImgIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-60 hover:opacity-100"}
                `}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
            )}
            <img
              src={popupImages[popupImgIndex]}
              alt="Achievement"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl transition-all duration-500 animate-zoomIn"
              draggable={false}
              style={{ userSelect: "none" }}
            />
            {/* Right Arrow - only show if more than 1 image */}
            {popupImages.length > 1 && (
              <button
                onClick={handlePopupNext}
                disabled={popupImgIndex === popupImages.length - 1}
                className={`absolute right-2 top-1/2 -translate-y-1/2 
                  text-white text-4xl p-3 bg-black bg-opacity-30 rounded-full shadow-lg 
                  transition-all duration-200 z-10
                  ${popupImgIndex === popupImages.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-60 hover:opacity-100"}
                `}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            )}
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white text-3xl bg-black bg-opacity-40 rounded-full p-2 shadow-lg opacity-60 hover:opacity-100 transition-all duration-200 z-20"
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <div
      className="achievement-card feature-card flex-shrink-0 flex flex-col md:w-[400px] w-[320px] justify-between px-6 py-4 rounded-[20px] md:mr-10 mr-6 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent cursor-pointer"
      onClick={props.onCardClick}
      style={{ minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div className="flex flex-col flex-1 justify-start">
        <div className="flex flex-col items-left text-left">
          <img
            src={props.icon}
            alt={props.event}
            className="w-[45px] h-[45px] rounded-full mt-3 mb-1"
          />
          <p className="font-poppins font-semibold text-xl text-lg text-gradient leading-[24px] mb-2 mt-3">
            {props.event}
          </p>
        </div>
        <p className="font-poppins italic font-normal text-white mb-2 text-left">
          {props.position}
        </p>
        {/* Duration always shown */}
        {props.duration && (
          <p className="font-poppins font-normal text-[14px] text-dimWhite mb-2 text-left">
            {props.duration}
          </p>
        )}
        {/* Youtube icon under duration if present */}
        {props.youtube && (
          <a
            className="inline-flex items-center mb-2 hover:text-yellow-200 text-left"
            href={props.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size="1.5rem" className="inline" />
          </a>
        )}
        {props.content1 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1 text-left">
            🚀 {props.content1}
          </p>
        )}
        {props.content2 && !props.images && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1 text-left">
            ⚡ {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-4 text-left">
            🔥 {props.content3}
          </p>
        )}
      </div>
      {/* Certificate button for all cards with images, always at the bottom, with margin for tally */}
      <div className="flex justify-center mt-4 mb-2 min-h-[56px]">
        {props.images && props.images.length > 0 && (
          <button
            className="inline-flex items-center justify-center bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none py-4 px-8 rounded-full shadow-md hover:bg-yellow-400 hover:scale-105 hover:shadow-lg transition transform duration-300 text-lg"
            onClick={e => {
              e.stopPropagation();
              if (props.onCardClick) {
                props.onCardClick();
              }
            }}
          >
            Certificate
          </button>
        )}
      </div>
      <div className="flex flex-row mb-2 font-poppins font-normal text-dimWhite">
        {props.article && (
          <a
            className="inline-flex items-center mr-2 hover:text-yellow-200"
            href={props.article}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiNews size="1.5rem" className="inline" />
          </a>
        )}
        {props.github && (
          <a
            className="inline-flex items-center mr-2 hover:text-yellow-200"
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="1.5rem" className="inline" />
          </a>
        )}
        {props.project && (
          <a
            className="inline-flex items-center hover:text-yellow-200"
            href={props.project}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLink45Deg size="1.5rem" className="inline" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Achievements;