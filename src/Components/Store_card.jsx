import { styled } from "styled-components";

const Store_card = ({ title, content, link, onMouseEnter }) => {
  return (
    <Card onMouseEnter={onMouseEnter}>
      <div id="loadBar"></div>
      <div className="info">
        <p id="cardTitle">{title}</p>
        <p id="cardContent">{content}</p>
      </div>
      <a href="#">{link}</a>
    </Card>
  );
};

export default Store_card;

const Card = styled.div`
  height: 10vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4vh;
  transition: 333ms;
  padding: 0.5vh;
  font-family: ShopifySans, Helvetica, Arial, sans-serif;
  #loadBar {
    height: 12px;
    width: 100%;
    background-color: red;
  }
  #cardTitle {
    font-size: 1.2em;
    font-weight: 600;
  }
  #cardContent {
    font-size: 1.1em;
    color: #545252;
    margin-top: 2vh;
  }

  a {
    color: black;
    font-size: 0.9em;
    font-weight: 500;
  }
  p:hover {
    color: grey;
  }
  a:hover {
    color: #959292;
  }
`;
