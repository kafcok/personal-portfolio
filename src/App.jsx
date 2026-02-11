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
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}

export default App;
