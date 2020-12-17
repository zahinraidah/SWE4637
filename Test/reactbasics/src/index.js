import React from 'react';
import ReactDOM from 'react-dom';

const Submit = "Enter"
const App = () => {
  return (
    <div>
      <label forHTML="name"> Enter Name: </label>
      <input id="name" type="text" />
      <button style ={{backgroundColor: "blue", color: "white"}}> {Submit} </button>
    </div >
  );
};

// const SayHi = () => {
//   return (
//     <div>
//       <h1 style={{ color: "tomato", backgroundColor: "dodgerblue" }}> HI World </h1>
//     </div>
//   );
// };
ReactDOM.render(<App />, document.getElementById("root"));
