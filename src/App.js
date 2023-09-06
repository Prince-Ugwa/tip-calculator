import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalc />
    </div>
  );
}

export default App;

function TipCalc() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const tip = bill * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percent={percent1} onSelect={setPercent1}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percent={percent2} onSelect={setPercent2}>
        How did your friends like the service
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      {bill > 0 && <ResetBtn onReset={handleReset} />}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}
function SelectPercentage({ percent, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percent} onChange={(e) => onSelect(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={15}> It was very good (15%)</option>
        <option value={20}> It was excellent(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        you pay {bill + tip}(${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
function ResetBtn({ bill, onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
