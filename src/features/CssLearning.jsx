import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  font-size: 30px;
  display: grid;
  grid-template-columns: 26rem 1fr;

  margin: 40px;
  width: 100vw;
  height: 700px;
  justify-content: center;
  /* justify-content: space-between; */
  align-content: cent;
  /* align-items: center; */
  /* justify-items: center; */
`;

const Div1 = styled.div`
  background-color: red;
`;
const Div2 = styled.div`
  background-color: blue;
  grid-row: 1/-1;
`;
const Div3 = styled.div`
  background-color: yellow;
`;
// const Div4 = styled.div`
//   background-color: black;
// `;
// const Div5 = styled.div`
//   background-color: green;
//`;
// const Div6 = styled.div`
//   background-color: purple;
// `;
// const Div7 = styled.div`
//   background-color: #ffa60062;
// `;
// const Div8 = styled.div`
//   background-color: #00ffa6;
// `;

function CssLearning() {
  return (
    <Container>
      <Div1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam
        maxime. Repellat voluptatibus inventore eaque? Corporis natus suscipit a
        quos! Officiis quisquam amet nulla libero fugit fuga quod qui sequi.
      </Div1>
      <Div2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure
        inventore possimus quo nostrum ipsa, iste dignissimos recusandae harum
        et corporis accusantium? Neque placeat esse ex possimus! Ad, suscipit
        est.
      </Div2>
      <Div3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        voluptas iure molestias consequatur nobis soluta atque velit error,
        praesentium eos ab itaque assumenda? Ratione, nulla? Modi exercitationem
        quaerat id cum!
      </Div3>
      {/* <Div4>4</Div4>
      <Div5>5</Div5>
      <Div6>6</Div6> */}

      {/* <Div8>divve8</Div8> */}
      {/* <Div1>divve7</Div1>
      <Div2>divve8</Div2>
      <Div3>divve9</Div3>
      <Div4>divve10</Div4>
      <Div5>divve11</Div5>
    <Div6>divve12</Div6> */}
    </Container>
  );
}

export default CssLearning;
