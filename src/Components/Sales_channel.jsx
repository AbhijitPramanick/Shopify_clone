import Styles from "../Styles/sales_channel.module.css";
import { BsArrowRight } from "react-icons/bs";
const Sales_channel = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.sell}>
        <div className={Styles.sell_left}>
          <p className={Styles.sideHeading}>SALES CHANNEL</p>
          <p className={Styles.heading1}>Sell to every buyer, everywhere</p>
        </div>
        <div className={Styles.sell_right}>
          <p className={Styles.info}>
            Sell online, in person, and around the world with the marketing
            tools, social integrations, and sales channels you need to get your
            products in front of customers.
          </p>
          <button className={Styles.special_btn}>
            Start Selling
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className={Styles.sell_pics}>
        <img src="/images/happy_user.jpeg" alt="A Happy user" />
        <img
          src="/images/mobile_accessibility.jpeg"
          alt="Mobile accesibility"
        />
        <img
          src="/images/ease_of_transaction.png"
          alt="Transactions simplified"
        />
      </div>
      <div className={Styles.converting_checkout}>
        <div className={Styles.converting_checkout_img}>
          <img src="/images/converting_1.jpeg" alt="A snake plant image" />
        </div>
        <div className={Styles.converting_checkout_info}>
          <p className={Styles.sideHeading}>FAST, RELIABLE CHECKOUT</p>
          <p className={Styles.heading2}>
            The best converting checkout on the planet
          </p>
          <p className={Styles.info}>
            Back your business with Shop Pay—the one-click checkout that's built
            to convert.
          </p>
          <button className={Styles.special_btn}>
            Seize every sale
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className={Styles.point_sale}>
        <div className={Styles.point_sale_info}>
          <p className={Styles.sideHeading}>POINT OF SALE</p>
          <p className={Styles.heading2}>
            Flexible point of sale to power your retail store
          </p>
          <p className={Styles.info}>
            A POS system that allows customers to shop their way, from online to
            checkout line.
          </p>
          <button className={Styles.special_btn}>
            Meet Shopify POS
            <BsArrowRight />
          </button>
        </div>
        <div className={Styles.point_sale_img}>
          <img src="/images/woman_typing_laptop.png" alt="A woman typing" />
        </div>
      </div>
    </div>
  );
};

export default Sales_channel;
