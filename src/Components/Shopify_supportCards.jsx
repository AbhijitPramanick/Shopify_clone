import Styles from "../Styles/shopify_supportCards.module.css";

const Shopify_supportCards = ({ logo, heading, info, buttonText }) => {
  return (
    <div className={Styles.card}>
      <img src={`${logo}`} alt="symbol" className={Styles.symbol} />
      <div className={Styles.heading}>{heading}</div>
      <div className={Styles.info}>{info}</div>
      <button className={Styles.btn}>{buttonText}</button>
    </div>
  );
};

export default Shopify_supportCards;
