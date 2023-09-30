import { styled } from "styled-components";
const Explore_card = ({ icon, head, text }) => {
  return (
    <Card>
      <img src={"/images/" + `${icon}`} alt="image" />
      <p id="title">{head}</p>
      <p id="text">{text}</p>
    </Card>
  );
};

export default Explore_card;
const Card = styled.div`
  width: 20vw;
  height: 15vw;
  padding: 2vh;
  border-radius: 0.5vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  img {
    height: 4vw;
    margin-bottom: 2.7vh;
  }
  #title {
    font-size: 1.07em;
    font-weight: 500;
    margin-bottom: 1.2vh;
  }
  #text {
    font-size: 0.92em;
    color: #575656;
  }
`;
