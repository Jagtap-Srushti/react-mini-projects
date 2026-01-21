import React, { useState } from 'react';

const App = () => {

  const [num,setNum]=useState(0);

  function increase(){
    setNum(num+1);
  }

  function decrease(){
    setNum(num-1);
  }

  function reset(){
    setNum(0);
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Counter App</h2>
        <h1 className="value">{num}</h1>

        <div className="btn-group">
          <button onClick={increase} className="btn">Increase</button>
          <button onClick={reset} className="btn reset">Reset</button>
          <button onClick={decrease} className="btn">Decrease</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
