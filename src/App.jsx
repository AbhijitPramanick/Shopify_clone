import "./App.css";
import Advertisement_userReview from "./Components/Advertisement_userReview";
import BuiltInMarketingTools from "./Components/BuiltInMarketingTools";
import BusinessGrow from "./Components/BusinessGrow";
import Centralised_ops from "./Components/Centralised_ops";
import Community from "./Components/Community";
import Hero_section from "./Components/Hero_section";
import Merchant_obsessed_2 from "./Components/Merchant_obsessed_2";
import Navigation from "./Components/Navigation";
import Online_store from "./Components/Online_store";
import Sales_channel from "./Components/Sales_channel";
import Scroll_marquee from "./Components/Scroll_marquee";
import ShopifySupport from "./Components/ShopifySupport";
import UserReviewCard from "./Components/userReviewCard";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero_section />
      <Community />
      <Online_store />
      <Sales_channel />
      <BuiltInMarketingTools />
      <Centralised_ops />
      <Scroll_marquee />
      <Merchant_obsessed_2 />
      <Advertisement_userReview />
      <UserReviewCard />
      <ShopifySupport />
      <BusinessGrow />
      <Footer />
    </div>
  );
};

export default App;
