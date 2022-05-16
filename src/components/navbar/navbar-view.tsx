import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../styles/common.styled";
import { NavWrapper } from "./styled";
const NavbarView: React.FC = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <Header fontSize="20px">FakeShop</Header>
      </Link>
      <Link to="/cart">
        <Header fontSize="20px">Cart</Header>
      </Link>
    </NavWrapper>
  );
};
export default NavbarView;
