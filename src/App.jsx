import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue((v) => {
      return v + 1;
    });
    setValue((v) => {
      return v + 1;
    });
  }

  return (
    <>
      <h1>test</h1>
      <button onClick={handleClick}>{value}</button>
    </>
  );
}

export default App;
