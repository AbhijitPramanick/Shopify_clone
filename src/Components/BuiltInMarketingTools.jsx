import BuiltIn_card from "./BuiltIn_card";
import Styles from "../Styles/builtInMarketingTools.module.css";
import { BsArrowRight } from "react-icons/bs";
const BuiltInMarketingTools = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <div className={Styles.builtInTop}>
          <div className={Styles.builtInLeft}>
            <p className={Styles.sideHeading}>BUILT-IN MARKETING TOOLS</p>
            <p className={Styles.heading1}>From first touch to full funnel</p>
          </div>
          <button className={Styles.special_btn}>
            Leverage your full marketing suit
            <BsArrowRight />
          </button>
        </div>
        <div className={Styles.cardsSection}>
          <div className={Styles.cardsLeft}>
            <BuiltIn_card
              symbol={"/images/HashTag.svg"}
              heading={"Reach new leads"}
              info={
                "Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are."
              }
            />
            <BuiltIn_card
              symbol={"/images/@.svg"}
              heading={"Engage with customers"}
              info={
                "Build custom email campaigns, set automations to serve every segment, and connect with customers on the go with integrated messaging tools."
              }
            />
            <BuiltIn_card
              symbol={"/images/stats.svg"}
              heading={"Data you can build on"}
              info={
                "Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth."
              }
            />
          </div>
          <div className={Styles.cardsRight}>
            <img src="/images/theSill.png" alt="an image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltInMarketingTools;
