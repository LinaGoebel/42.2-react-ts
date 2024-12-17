import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rebeccapurple;
  color: white;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;
