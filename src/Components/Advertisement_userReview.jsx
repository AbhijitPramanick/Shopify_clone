import Styles from "../Styles/advertisement_userReview.module.css";

const Advertisement_userReview = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.subContainer}>
        <video
          controls
          autoPlay
          muted
          loop
          src="/images/muckBrassVideo.mp4"
          className={Styles.muckVideo}
        ></video>
      </div>
    </div>
  );
};

export default Advertisement_userReview;
