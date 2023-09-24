import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  console.log(props);
  const [count, setCount] = useState(props.count);

   let updateCount = ()=>{
    setCount(count + 1);
  }
   let reduceCount = ()=>{
    setCount(count - 1);
  }

  return (
    <>
      <h1 className="bg-green-400 text-white rounded-lg px-3">Tailwind CSS</h1>
      
    </>
    // <>
    //   <div>Hello React</div>  
    //   <p>Count is {count}</p>
    //   <button onClick={updateCount}>Click +1</button>
    //   <button onClick={reduceCount}>Click -1</button>
    // </>
  )
}

export default App
