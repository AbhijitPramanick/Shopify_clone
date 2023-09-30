import Styles from "../Styles/merchant_obsessed_2.module.css";
const Merchant_obsessed_2 = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <div className={Styles.backSection} id={Styles.backSection1}>
          <img
            src="/images/merchantObs_left_1.jpeg"
            alt="imgLeft1"
            id={Styles.imgLeft1}
          />
          <img
            src="/images/merchantObs_right_1.png"
            alt="imgRight1"
            id={Styles.imgRight1}
          />
        </div>
        <div className={Styles.backSection} id={Styles.backSection2}>
          <img
            src="/images/merchantObs_left_2.jpg"
            alt="imgLeft2"
            id={Styles.imgLeft2}
          />
          <img
            src="/images/merchantObs_right_2.png"
            alt="imgRight2"
            id={Styles.imgRight2}
          />
        </div>
        <div className={Styles.backSection} id={Styles.backSection3}>
          <img
            src="/images/merchantObs_left_3.png"
            alt="imgLeft3"
            id={Styles.imgLeft3}
          />
          <img
            src="/images/merchantObs_right_3.jpeg"
            alt="imgRight3"
            id={Styles.imgRight3}
          />
        </div>
        <div className={Styles.midSection}>
          <p className={Styles.sideHeading}>MERCHANT OBSESSED</p>
          <p className={Styles.middleContent}>
            Meet <br />
            the people who chose <span className={Styles.colored}>Shopify</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merchant_obsessed_2;
