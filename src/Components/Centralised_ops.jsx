import BuiltIn_card from "./BuiltIn_card";
import Styles from "../Styles/centralised_ops.module.css";
import { BsArrowRight } from "react-icons/bs";

const Centralised_ops = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <div className={Styles.builtInTop}>
          <div className={Styles.builtInLeft}>
            <p className={Styles.sideHeading}>
              CENTRALIZED BUSINESS OPERATIONS
            </p>
            <p className={Styles.heading1}>Streamline your back office</p>
          </div>
          <button className={Styles.special_btn}>
            Manage your business
            <BsArrowRight />
          </button>
        </div>
        <div className={Styles.cardsSection}>
          <div className={Styles.cardsLeft}>
            <img src="/images/theSill.png" alt="an image" />
          </div>
          <div className={Styles.cardsRight}>
            <BuiltIn_card
              symbol={"/images/stats.svg"}
              heading={"Oversee your operations"}
              info={
                "Manage inventory, track payments, and view real-time business insights -- all in one place, so you can focus on building your business."
              }
            />
            <BuiltIn_card
              symbol={"/images/box.svg"}
              heading={"Fulfill every order"}
              info={
                "Get your products where they need to be with intregated inventory management, streamlined returns, and a dedicated shipping and fulfillment network."
              }
            />
            <BuiltIn_card
              symbol={"/images/bankHouse.svg"}
              heading={"Manage your money where you make it"}
              info={
                "manage you business finances all from one place with money managment and flexible funding designed with enterpreneurs in mind."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centralised_ops;
