import styled from "styled-components";

interface CarProps {
  curPosition: number;
}

const Car = styled.div<CarProps>`
  font-size: 2rem;
  position: absolute;
  transform: translateY(-2.5rem) scaleX(-1);
  left: ${(props) => `${10 + (props.curPosition * 0.8)}%`};
  transition: left 0.5s ease;
`;

export default Car;
