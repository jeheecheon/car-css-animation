import GlobalStyles from "@/styles/GlobalStyles";
import { Road } from "@/components/Road";
import { Car } from "@/components/Car";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(0);

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
