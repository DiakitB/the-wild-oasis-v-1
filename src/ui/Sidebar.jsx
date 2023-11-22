import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: green;
  padding: 3.2re 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 /-1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <h1>hello from sidebar</h1>
    </StyledSidebar>
  );
}

export default Sidebar;
