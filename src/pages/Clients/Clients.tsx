import {
  ClientsComponent,
  Footer,
  Header,
  LogoContainer,
  Main,
  NavContainer,
  StyledNavLink,
} from "./style";
import { ClientsProps } from "./types";

function Clients({ children }: ClientsProps) {
  return (
    <ClientsComponent>
      <Header>
        <LogoContainer
          to="/"
          style={({ isActive }) => ({
            transform: isActive ? "scale(0.9)" : "scale(1)",
            backgroundColor: isActive ? "#e0e0e0" : "white",
            transition: "all 0.3s ease",
          })}
        ></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About You
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Otto
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
           Zalando
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Футер</Footer>
    </ClientsComponent>
  );
}

export default Clients;
