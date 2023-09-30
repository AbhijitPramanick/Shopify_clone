import Marquee from "react-fast-marquee";
import Styles from "../Styles/Scroll_marquee.module.css";
import { GoArrowRight } from "react-icons/go";
const App = () => {
  return (
    <div className={Styles.stripe}>
      <div className={Styles.cnt}>
        <Marquee direction="right">
          <div className={Styles.elem}>
            START YOU FREE TRIAL <GoArrowRight />
          </div>
          <div className={Styles.elem}>
            START YOU FREE TRIAL <GoArrowRight />
          </div>
          <div className={Styles.elem}>
            START YOU FREE TRIAL <GoArrowRight />
          </div>
          <div className={Styles.elem}>
            START YOU FREE TRIAL <GoArrowRight />
          </div>
          <div className={Styles.elem}>
            START YOU FREE TRIAL <GoArrowRight />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default App;
