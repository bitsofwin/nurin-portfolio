import styles from "../style";
import { arrowUp } from "../assets";
import { callToAction } from "../constants";

const BlobButton = () => {
  return (
    <button
      className="blob-btn"
      onClick={() => window.open(callToAction)}
    >
      <span className="blob-btn-bg"></span>
      <span className="blob-btn-content">
        Say Hello
        <img src={arrowUp} alt="arrowUp" className="w-[22px] h-[22px]" />
      </span>
    </button>
  );
};

export default BlobButton;
