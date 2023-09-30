import { styled } from "styled-components";
import Explore_card from "./Explore_card";

const Community = () => {
  return (
    <>
      <ComDiv>
        <div className="left">
          <div className="earth">
            <img
              src="/images/earthImg.png"
              alt="Earth"
              height={"810px"}
              width={"810px"}
            />
          </div>
        </div>
        <div className="right">
          <div id="title">
            <p>
              Discover why millions of entrepreneurs chose Shopify to build
              their business —
            </p>
            <p id="gradBlue">from hello world to IPO.</p>
          </div>
          <div id="stats">
            <div className="item item-1">
              <p className="statsHeading">Millions</p>
              <p className="statsContainer">of merchants worldwide</p>
            </div>
            <div className="item item-2">
              <p className="statsHeading">170+</p>
              <p className="statsContainer">countries represented</p>
            </div>
            <div className="item item-3">
              <p className="statsHeading">10%</p>
              <p className="statsContainer">of total US ecommerce</p>
            </div>
            <div className="item item-4">
              <p className="statsHeading">$444B</p>
              <p className="statsContainer">global economic activity</p>
            </div>
          </div>
        </div>
      </ComDiv>
      <Explore>
        <p>EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY</p>
        <div className="cards">
          <Explore_card
            icon={"enterprise_logo.svg"}
            head={"Enterprise"}
            text={"The modern, composable stack for enterprise retail"}
          />
          <Explore_card
            icon={"plus_logo.svg"}
            head={"Plus"}
            text={"A commerce solution for growing digital brands"}
          />
          <Explore_card
            icon={"partners_logo.svg"}
            head={"Partners"}
            text={"Offer you expertise to Shopify me all over the world"}
          />
          <Explore_card
            icon={"developers_logo.svg"}
            head={"Developers"}
            text={"Build the future of commerce with Shopify's powerful API"}
          />
          <Explore_card
            icon={"retail_stores_logo.svg"}
            head={"Retails stores"}
            text={"The complete system for selling in person"}
          />
        </div>
      </Explore>
    </>
  );
};

export default Community;

const ComDiv = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    padding-top: 3.8vh;
    height: 100vh;
    width: 42.5vw;
    position: relative;
    left: -18vw;
    z-index: -1;
  }
  .right {
    width: 56.5vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10vh;
    #title {
      /* margin-left: 38vw; */
      width: 80%;
      p {
        font-size: 2.7rem;
        line-height: 1.2;
        font-weight: 530;
      }
      #gradBlue {
        width: 75%;
        border: 2px solid transparent;
        background-image: linear-gradient(
          to right,
          #e8e8fc,
          #bbcbff,
          #f5def5,
          #e8e8fc
        );
      }
    }
    #stats {
      /* margin-left: 38vw; */
      width: 50%;
      display: grid;
      grid-template-rows: repeat(2, 11vh);
      grid-template-columns: repeat(2, 20vw);
      grid-gap: 7vh 4.3vw;

      .item {
        color: black;
        border-left: 5px solid #03afbc;
        padding-left: 2vw;
      }
      .statsHeading {
        font-size: 2.4em;
        font-weight: 500;
        line-height: 1.08;
      }
      .statsContainer {
        color: #636262;
        font-size: 1.11em;
      }
    }
  }
`;
const Explore = styled.div`
  width: 87vw;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 7vh;
  .cards {
    display: flex;
    gap: 1.7vw;
  }
`;
