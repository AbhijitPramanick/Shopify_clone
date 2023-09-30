import { styled } from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <NavDiv>
      <Logo>
        <img src="/images/shopify_logo.png" alt="Shopify Logo" />
      </Logo>
      <ListBar>
        <ul>
          <li>
            <a href="#">
              Solutions <RiArrowDropDownLine />{" "}
            </a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">
              Resources <RiArrowDropDownLine />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              What's new <RiArrowDropDownLine />{" "}
            </a>
          </li>
        </ul>
      </ListBar>
      <UserEnter>
        <ul>
          <li>
            <a href="#">Log in</a>
          </li>
          <li id="whiteBgn">
            <a href="#">Start free trial</a>
          </li>
        </ul>
      </UserEnter>
    </NavDiv>
  );
};

export default Navigation;

const NavDiv = styled.div`
  position: sticky;
  top: 0;

  height: 10vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: black; */
  z-index: 1;
`;
const Logo = styled.div`
  height: 40px;

  img {
    height: 36px;
    margin: auto 10px;
  }
`;

const ListBar = styled.div`
  margin-left: 2.6vw;
  font-size: 15.4px;
  font-weight: 400;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8vw;
  }
  li a {
    color: white;
    text-decoration: none;
  }
`;

const UserEnter = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 1.8vw;
    margin-left: 32vw;
  }
  li a {
    padding: 1.5vh 1vw;
    color: white;
    text-decoration: none;
  }
  #whiteBgn a {
    font-weight: 550;
    color: black;
    background-color: white;
    border-radius: 20px;
  }
`;
