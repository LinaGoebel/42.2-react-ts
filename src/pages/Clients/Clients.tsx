import { ClientsComponent, Header, NavContainer, StyledNavLink } from "./style";

function Clients() {
  return (
    <ClientsComponent>
      <Header>
        <NavContainer>
          <StyledNavLink
            to="/clients/about-you"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About You
          </StyledNavLink>
          <StyledNavLink
            to="/clients/otto"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Otto
          </StyledNavLink>
          <StyledNavLink
            to="/clients/zalando"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Zalando
          </StyledNavLink>
        </NavContainer>
      </Header>
    </ClientsComponent>
  );
}

export default Clients;
