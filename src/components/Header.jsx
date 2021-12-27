import React, { useState } from "react";
import styled from "styled-components";
import img from "../images/disney-hotstar-logo-dark.svg";
import kids from "../images/kids.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [inputWidth, setInputWidth] = useState([
    {
      width: "",
      borderBottom: "",
    },
  ]);

  return (
    <>
      <MainHeader>
        <NavContainer>
          <LeftMenu>
            <MenuBar>
              <MenuIcon />
            </MenuBar>
            <Logo>
              <NavLink to="/">
                <img src={img} alt="Disney+ Hotstar" />
              </NavLink>
            </Logo>
            <NavLinks>
              <NavLink to="/tv">TV</NavLink>
              <NavLink to="/movies">Movies</NavLink>
              <NavLink to="/sports">Sports</NavLink>
              <NavLink to="/disney">Disney+</NavLink>
              <NavLink to="/kids">
                <img src={kids} alt="kids" />
              </NavLink>
            </NavLinks>
          </LeftMenu>
          <RightMenu>
            <SearchDiv>
              <SearchBar
                inputWidth={inputWidth}
                style={{
                  width: `${inputWidth.width}`,
                  borderBottom: `${inputWidth.borderBottom}`,
                }}
              >
                <InputField
                  onClick={() =>
                    setInputWidth({
                      width: "400px",
                      borderBottom: "1.5px solid #1f80e0",
                    })
                  }
                >
                  <input type="text" placeholder="Search" />
                </InputField>
                <InputIcon>
                  <SearchIcon />
                </InputIcon>
              </SearchBar>
            </SearchDiv>
            <SubButton>
              <button>SUBSCRIBE</button>
            </SubButton>
            <Login>
              <NavLink to="/login">LOGIN</NavLink>
            </Login>
          </RightMenu>
        </NavContainer>
      </MainHeader>
    </>
  );
};

export default Header;
const MainHeader = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  max-width: 100%;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  background-color: #121926;
  overflow-x: hidden;
  z-index: 999;
`;

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;
  margin: 0 auto;
  margin-top: 6px;
  min-height: 74px;
`;
const LeftMenu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;
`;
const NavLinks = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #ffffffcc;
    font-size: 16px;
    &:hover {
      color: #ffffff99;
    }
  }
`;

const MenuBar = styled(MenuIcon)`
  color: #ffffff99;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
`;
const Logo = styled.div`
  padding-bottom: 10px;
  cursor: pointer;
`;
const RightMenu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const SearchDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const SearchBar = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.4px solid #ffffff99;
`;
const InputField = styled.div`
  input {
    border: none;
    outline: none;
    min-height: 32px;
    color: #ffffffcc;
    font-size: 18px;
    background-color: #121926;
    &::placeholder {
      font-size: 18px;
      font-weight: normal;
      color: #ffffffcc;
    }
  }
`;
const InputIcon = styled(SearchIcon)`
  color: #ffffff99;
`;
const SubButton = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  button {
    color: #ffffff;
    font-size: 13px;
    background: #1f80e0;
    padding: 6px 12px;
    font-weight: 600;
    border: #1f80e0;
    outline: none;
    border-radius: 5px;
    text-transform: capitalize;
  }
`;
const Login = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: #ffffffcc;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      color: #ffffff99;
    }
  }
`;
