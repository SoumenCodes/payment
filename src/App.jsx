import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Qr from "./Qr";

function App() {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  function payfun() {
    console.log("pay function");
    setAmount(price);
    console.log(price, "price");
  }

  return (
    <div>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={payfun}>pay</button>
      <div>
        <Qr amount={amount} />
      </div>
    </div>
  );
}

export default App;
