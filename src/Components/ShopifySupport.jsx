import Styles from "../Styles/shopifySupport.module.css";
import Shopify_supportCards from "./Shopify_supportCards";

const ShopifySupport = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <div className={Styles.topContainer}>
          <p className={Styles.sideHeading}>SHOPIFY SUPPORT</p>
          <p className={Styles.banner}>The help you need, when you need it</p>
        </div>
        <div className={Styles.cardsContainer}>
          <Shopify_supportCards
            logo={"/images/newspaper.svg"}
            heading={"Blog"}
            info={
              "Get all the marketing and business strategy tips you need to help you run an online business"
            }
            buttonText={"Read"}
          />
          <Shopify_supportCards
            logo={"/images/book.svg"}
            heading={"Online courses"}
            info={
              "Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs"
            }
            buttonText={"Learn"}
          />
          <Shopify_supportCards
            logo={"/images/community.svg"}
            heading={"Community"}
            info={
              "Connect with the community of brands, partners and fellow merchantswho understand Shopify"
            }
            buttonText={"Discuss"}
          />
          <Shopify_supportCards
            logo={"/images/questionmark.svg"}
            heading={"Help center"}
            info={
              "Find answers with a dedicated helpdesk resiurce full of articles and videos from our Support team."
            }
            buttonText={"Get help"}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopifySupport;
