import { useState } from 'react';

function App() {

const [firstInput, setFirstInput]=useState('');
const [secondInput, setSecondInput]=useState('');
const [result, setResult]=useState(null);

const add = () =>{
  setResult(Number(firstInput)+ Number(secondInput));
}

  return (
    <div>
      <input type="number" value={firstInput} onChange={e=> setFirstInput(e.target.value)}></input>
      <button onClick={add}>+</button>
      <button onClick={() =>setResult(+firstInput - +secondInput)}>-</button>
      <button onClick={() =>setResult(+firstInput * +secondInput)}>*</button>
      <button onClick={() =>setResult(+firstInput / +secondInput)}>/</button>
      <input type="number" value={secondInput} onChange={e=> setSecondInput(e.target.value)}></input>
      <span>{result}</span>
    </div>
  )
};

export default App