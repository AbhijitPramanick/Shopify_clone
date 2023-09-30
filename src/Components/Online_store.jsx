import { useState } from "react";
import Store_card from "./Store_card";
import styles from "../Styles/online_store.module.css";

const Online_store = () => {
  const [card, setCard] = useState(1);
  const handleHover = (num) => {
    setCard(num);
  };

  return (
    <div className={styles.container}>
      <div id={styles.online_store_container}>
        <p id={styles.sideHeading}>BUILD AND ONLINE STORE</p>
        <p id={styles.heading}>Your store, your way</p>
        <div className={styles.displayPic}>
          <img src={`/images/card${card}.png`} alt={`Image no ${card}`} />
        </div>
        <div className={styles.storeCardsSection}>
          <Store_card
            title={"Build an online storefront"}
            content={
              "Bring your vision to life with our drap-and-drop store creator. No coding expertise required -- just your next big idea."
            }
            link={"Online store builder"}
            onMouseEnter={() => {
              handleHover(1);
            }}
          />
          <Store_card
            title={"Craft the brand you want"}
            content={
              "Select from customizable templates created by a community of world-class designers."
            }
            link={"Theme store"}
            onMouseEnter={() => {
              handleHover(2);
            }}
          />
          <Store_card
            title={"Level up with apps"}
            content={
              "Add more features and functionality to your online store with apps built by trusted Shopify developers."
            }
            link={"Shopify app store"}
            onMouseEnter={() => {
              handleHover(3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Online_store;
