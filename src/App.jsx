function Calculator() {
  return <div className=" bg-white p-5 rounded-2xl">
  <div className ="grid grid-cols-4 gap-5">
  <button className =" bg-gray-100 py-3 aspect-square 
  rounded-2x1 shadow-sm text-grey-600 hover:brightness-95 
  hover:cursor-pointer active:brightness-90">
    C
  </button>
  <button>%</button>
  <button>✔</button>
  <button>÷</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>×</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>-</button>
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>+</button>
  <button>0</button>
  <button>,</button>
  <button>=</button>
  </div>
</div>;
}

function App() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-950  h-dvh w-full flex items-center justify-center relative overflow-clip">
      <Calculator />
    </div>
  );
}

export default App;
