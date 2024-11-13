import styled from "styled-components";

interface CarProps {
  curPosition: number;
}

const Car = styled.div<CarProps>`
  font-size: 2rem;
  position: absolute;
  left: ${(props) => `${10 + (props.curPosition * 0.8)}%`};
`;

export default Car;
