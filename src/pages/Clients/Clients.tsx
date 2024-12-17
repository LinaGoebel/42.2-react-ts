import { ClientsComponent, Header, NavContainer, StyledLink } from "./style";

function Clients() {
  return (
    <ClientsComponent>
      <Header>
        <NavContainer>
          <StyledLink to="about-you">About You</StyledLink>
          <StyledLink to="otto">Otto</StyledLink>
          <StyledLink to="zalando">Zalando</StyledLink>
        </NavContainer>
      </Header>
    </ClientsComponent>
  );
}

export default Clients;
