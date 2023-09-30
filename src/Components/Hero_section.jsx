import { styled } from "styled-components";
import videoBg from "/images/front_video.mp4";
const Hero_section = () => {
  return (
    <Hero>
      <div className="backgndVideo">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="background-clip"
        ></video>
      </div>
      <div id="main">
        <h1>Making Commerce Better for Everyone</h1>
        <p>
          Shopify is supporting the next generation of entrepreneurs, the
          world’s biggest brands, and everyone in between
        </p>
      </div>
      <footer>
        <a href="#" id="whiteBgn">
          Start free trial
        </a>
        <div id="info">
          <p>Start for free, then get your first 3 months for ₹20/mo.</p>
        </div>
        <a href="#">Watch the Shopify story</a>
      </footer>
    </Hero>
  );
};

export default Hero_section;

const Hero = styled.div`
  height: 87.9vh;
  padding: 0 5vw;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  .background-clip {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  @media (min-aspect-ratio: 16/9) {
    .background-clip {
      width: 100%;
      height: auto;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    .background-clip {
      width: auto;
      height: 100%;
    }
  }
  #main {
    padding: 0 1vw;
    h1 {
      width: 60%;
      font-size: 3.2em;
      margin-top: 20vh;
      font-weight: 600;
    }
    p {
      margin-top: 4vh;
      width: 70%;
      font-size: 1.4em;
    }
  }

  footer {
    margin-top: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 20vh; */
    /* padding-bottom: -10vh; */
    a {
      color: white;
      text-decoration: none;
      padding: 10px;
      font-size: 1.1em;
      height: 50px;
      border: 2px solid white;
      border-radius: 20px;
    }
    #info {
      margin-left: 5vw;
      margin-right: 45vw;
      width: 13vw;
      font-size: 0.9em;
    }
    #whiteBgn {
      color: black;
      background-color: white;
      font-weight: 550;
    }
  }
`;
