import { styled } from "styled-components";

const BuiltIn_card = ({ symbol, heading, info }) => {
  return (
    <Cards>
      <div className="symbol">
        <img src={`${symbol}`} alt="Card image" />
      </div>
      <div className="cardInfo">
        <div className="heading">{heading}</div>
        <div className="details">{info}</div>
        <div className="loadBar"></div>
      </div>
    </Cards>
  );
};

export default BuiltIn_card;

const Cards = styled.div`
  padding: 1vw;
  display: flex;
  /* align-items: center; */
  justify-content: start;
  gap: 0.5vw;
  width: 47vw;
  margin: 5vh 5vw;
  .symbol img {
    padding-top: 1vh;
    padding-right: 3vh;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    border-bottom: 2px solid black;
    padding-bottom: 4vh;
  }
  .heading {
    font-size: 1.6em;
    font-weight: 550;
  }
  .details {
    font-size: 1.1em;
    color: #535353;
  }
`;
