import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: orange;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <h1>hello header</h1>
    </StyledHeader>
  );
}

export default Header;
