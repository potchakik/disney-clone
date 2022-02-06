import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
    }
  }
`;

const UserImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;

export { Nav, Logo, NavMenu, UserImg };
