import GlobalStyles from "@/styles/GlobalStyles";
import { Road } from "@/components/Road";
import { Car } from "@/components/Car";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);

  // 방향키 이벤트를 통해 스피드 증가
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setSpeed((prevSpeed) => prevSpeed + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 스피드에 따라 position 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => Math.min(prevPosition + speed, 100));
    }, 100);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <>
      <GlobalStyles />
      <Road>
        <Car curPosition={position}>🚗</Car>
      </Road>
    </>
  );
}

export default App;
