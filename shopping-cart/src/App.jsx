
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counterPluse  = () =>{
    let mainCount = count + 1
    setCount(mainCount)
  }
  const counterMinus = () =>{
    if(count== 0){
      alert('you has no value for minus')
    }else{
      let minusCount = count - 1
      setCount(minusCount)
    }
  }

  const resetBtn = ()=>{
    setCount(0)
  }
  

  return (
    <>
    <h1>Count: {count}</h1>
    <div className='main'>
      <div className="pluse" onClick={counterPluse }>+</div>
      <div className="mainus" onClick={counterMinus}>-</div>
      <div className="reset" onClick={resetBtn}>Reset</div>
    </div>
    </>
  )
}

export default App
