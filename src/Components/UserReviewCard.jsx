import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import Styles from "../Styles/userReviewCard.module.css";

const UserReviewCard = () => {
  const [user, setUser] = useState(true);
  const handleClick = () => {
    setUser(!user);
    console;
  };
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <div className={Styles.infoSection}>
          <div className={Styles.reviewText}>
            {user
              ? '"Shopify helped me take something that I put my heart and soul into and share it with people that need it and find it useful."'
              : '"We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand."'}
          </div>
          <div className={Styles.pername}>{user ? "Satya" : "BLK & Bold"}</div>
          <div className={Styles.personDesignation}>
            {user ? "Patrice Mousseau " : "Rod Johnson "}{" "}
            <span className={Styles.span}>— Owner</span>
          </div>
          <div className={Styles.buttonSection}>
            <button className={Styles.button} onClick={handleClick}>
              {" "}
              <GoArrowLeft />{" "}
            </button>
            <button className={Styles.button} onClick={handleClick}>
              {" "}
              <GoArrowRight />{" "}
            </button>
          </div>
        </div>
        <div className={Styles.userImgSection}>
          <img
            src={user ? "/images/userReview1.png" : "/images/userReview2.png"}
            alt="userImage"
          />
        </div>
      </div>
    </div>
  );
};

export default UserReviewCard;
