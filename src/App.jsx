import { twMerge } from "tailwind-merge";
import { useState } from "react";

function CalculatorBotton({ children, className, ...rest})
{
  return (
    <button 
      className = {twMerge(
        `bg-gray-800 py-5 aspect-square rounded-3xl shadow-sm 
        text-white hover:brightness-95 hover:cursor-pointer 
        active:brightness-90 transition-all duration-100 text-3xl
        ` + 
        className
  )}
  {...rest}
      >
        {children}
    </button>
  );
}

function Calculator() {
  const [CURRENT_VALUE, setCURRENT_VALUE] = useState("");

  function handleDecimalClick(i)
  {
    setCURRENT_VALUE((prev) => prev + i)
  }

  return ( 
  <div className=" bg-black p-5 rounded-2xl">
    <div className="bg-gray-100 p-3 text-right text-6xl
      rounded-xl mb-6 shadow-sm">
        {CURRENT_VALUE}
    </div>
  <div className ="grid grid-cols-4 gap-5 text-white">
  <CalculatorBotton className=" bg-gray-500 text-white">AC</CalculatorBotton>
  <CalculatorBotton className=" bg-gray-500 text-white">%</CalculatorBotton>
  <CalculatorBotton className=" bg-gray-500 text-white">✔</CalculatorBotton>
  <CalculatorBotton className=" bg-amber-400 text-white">
    ÷
  </CalculatorBotton>
  <CalculatorBotton onClick={() => handleDecimalClick("1")}>
    1
    </CalculatorBotton>
  <CalculatorBotton>2</CalculatorBotton>
  <CalculatorBotton>3</CalculatorBotton>
  <CalculatorBotton className=" bg-amber-400 text-white">
    ×
  </CalculatorBotton>
  <CalculatorBotton>4</CalculatorBotton>
  <CalculatorBotton>5</CalculatorBotton>
  <CalculatorBotton>6</CalculatorBotton>
  <CalculatorBotton className=" bg-amber-400 text-white">
    -
  </CalculatorBotton>
  <CalculatorBotton>7</CalculatorBotton>
  <CalculatorBotton>8</CalculatorBotton>
  <CalculatorBotton>9</CalculatorBotton>
  <CalculatorBotton className="bg-amber-400 text-white">
    +
  </CalculatorBotton>
  <CalculatorBotton className="col-span-2 aspect-auto">
    0
  </CalculatorBotton>
  <CalculatorBotton>,</CalculatorBotton>
  <CalculatorBotton className=" bg-amber-400 text-white">=</CalculatorBotton>
  </div>
</div>);
}

function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950  h-dvh w-full flex items-center justify-center relative overflow-clip">
      <Calculator />
    </div>
  );
}

export default App;
