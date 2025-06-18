import styles from "../style";
import { arrowUp } from "../assets";
import { callToAction } from "../constants";

const LetsConnect = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-yellow-400/40 relative overflow-hidden`}
      onClick={() => window.open(callToAction)}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-600 opacity-0 group-hover:opacity-40 blur-[6px] transition-all duration-300 z-0"></span>
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full relative z-10`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient drop-shadow-lg group-hover:drop-shadow-yellow-400 transition-all duration-300">
              Let's
            </span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] ml-2 group-hover:animate-bounce"
          />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient drop-shadow-lg group-hover:drop-shadow-yellow-400 transition-all duration-300">
              Connect
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
