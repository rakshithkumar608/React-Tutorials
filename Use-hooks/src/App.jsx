import React, { useMemo, useReducer } from "react";

function handleCount(state, action) {
  switch (action) {
    case "add":
      return state + 1;

    case "minus":
      return state - 1;

    case "reset":
      return 0;
  }
}

function squareOfNum(num) {
  return num * num;
}

const App = () => {
  const [count, setCount] = useReducer(handleCount, 0);

  const squareOfCount = useMemo(() => squareOfNum(count), [count]);

  //this is a older version
  // const handleAdd = () =>{
  //   setCount(count + 1);
  // }

  // const handleMinus = () =>{
  //   setCount(count - 1);
  // }

  // const handleReset = () => {
  //   setCount(0);
  // }

  return (
    <div className="items-center m-12 text-center justify-center gap-12">
      <h1 className="text-5xl font-semibold">{count}</h1>
      <button
        className="p-2 border-2 mt-10 border-blue-500 shadow-md rounded-lg hover:transition duration-200 text-2xl font-bold"
        onClick={() => setCount("add")}
      >
        ADD
      </button>

      <button
        className="p-2 border-2 mt-10 border-blue-500 shadow-md rounded-lg hover:transition duration-200 text-2xl font-bold ml-5"
        onClick={() => setCount("minus")}
      >
        MINUS
      </button>

      <div className="text-center items-center justify-center ">
        <button
          onClick={() => setCount("reset")}
          className="p-2 border-2 mt-10 border-blue-500 shadow-md rounded-lg hover:transition duration-200 text-2xl font-bold bg-rose-400"
        >
          RESET
        </button>
          
          <div className="items-center text-center mt-12 ">
          <h1 className="text-4xl font-bold ">Square of Count</h1>
        <h3 className="text-2xl font-semibold ">{squareOfCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
