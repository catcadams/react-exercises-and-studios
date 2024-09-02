import { useState } from "react";
import "./App.css";
import ShoeButton from "./components/ShoeButton";
import Report from "./components/Report";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoeButton />
      <Report />
    </>
  );
}

export default App;
