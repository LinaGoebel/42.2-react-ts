import {
  Footer,
  Header,
  LayoutComponent,
  LogoContainer,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
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
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to="/lesson13"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson13
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Футер</Footer>
    </LayoutComponent>
  );
}

export default Layout;
