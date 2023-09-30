import Styles from "../Styles/businessGrow.module.css";

const BusinessGrow = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <p className={Styles.heading}>Grow your business here</p>
        <p className={Styles.info}>
          Whether you want to sell products down the street or around the world,
          we have all the tools you need.
        </p>
        <button id={Styles.blackBgn}>Start free trial</button>
      </div>
    </div>
  );
};

export default BusinessGrow;
