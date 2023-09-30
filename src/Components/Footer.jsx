import Styles from "../Styles/footer.module.css";
import { TbWorld } from "react-icons/tb";
import { BiSolidDownArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <div className={Styles.topSection}>
          <div className={Styles.symbol}>
            <img src="/images/shopifySymbol.svg" alt="Shopify logo" />
          </div>
          <div className={Styles.listContainer}>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Shopify</p>
              <ul className={Styles.listContent}>
                <li>About</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Press and Media</li>
                <li>Partners</li>
                <li>Affiliates</li>
                <li>Legal</li>
                <li>Services status</li>
              </ul>
            </div>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Support</p>
              <ul className={Styles.listContent}>
                <li>Merchant support</li>
                <li>Help center</li>
                <li>Hire an Expert</li>
                <li>Shopify Community</li>
                <li>Shopify Events</li>
              </ul>
            </div>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Developers</p>
              <ul className={Styles.listContent}>
                <li>Shopify.dev</li>
                <li>API Documentation</li>
                <li>Dev Degree</li>
              </ul>
            </div>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Products</p>
              <ul className={Styles.listContent}>
                <li>Shop</li>
                <li>Shop Pay</li>
                <li>Shopify Plus</li>
                <li>Shopify Fulfillment Network</li>
                <li>Linkpop</li>
                <li>Commerce Components</li>
              </ul>
            </div>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Global Impact</p>
              <ul className={Styles.listContent}>
                <li>Sustainability</li>
                <li>Social impact</li>
                <li>Build Back</li>
                <li>Build Native</li>
                <li>Research</li>
              </ul>
            </div>
            <div className={Styles.listBox}>
              <p className={Styles.listHead}>Solutions</p>
              <ul className={Styles.listContent}>
                <li>Online store builder</li>
                <li>Website builder</li>
                <li>Ecommerce website</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.termsContactsSection}>
          <div className={Styles.tcLeft}>
            <a href="#">
              <TbWorld /> USA <BiSolidDownArrow />
            </a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
          <div className={Styles.tcRight}>
            <img src="/images/facebookLogo.svg" alt="Facebook logo" />
            <img src="/images/Xlogo.svg" alt="X Logo" />
            <img src="/images/youtubeLogo.svg" alt="YouTube Logo" />
            <img src="/images/instaLogo.svg" alt="Instagram Logo" />
            <img src="/images/tiktokLogo.svg" alt="Tiktok Logo" />
            <img src="/images/linkedinLogo.svg" alt="LinkedIn Logo" />
            <img src="/images/pinInterestLogo.svg" alt="PinInterest Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
