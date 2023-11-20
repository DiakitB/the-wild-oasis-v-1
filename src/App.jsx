import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
`;

const Dive = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  height: 500px;
`;
const Button = styled.button`
  font-size: 1rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`;
function App() {
  return (
    <div>
      <H1>The wild Oasis</H1>
      <Button onClick={() => alert("check in")}>Texting</Button>
    </div>
  );
}

export default App;
