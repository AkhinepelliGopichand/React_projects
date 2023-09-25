import { useEffect, useState, useRef, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [isNumeric, setisNumeric] = useState(false);
  const [isSpecialChar, setisSpecialChar] = useState(false);
  let passRef = useRef(password);

  useEffect(() => {
    passwordGenerator();
    console.log("Running useEffect");
  }, [length,isNumeric,isSpecialChar]);


  let passwordGenerator = useCallback(()=>{
    // console.log("Password length ==>",length);
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumeric) str +="1234567890"
    if(isSpecialChar) str+="!@#%^&*_+~`"
    let pass = "";
    for (let index = 0; index < length; index++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass+= char;
    }
    // console.log(pass, pass.length);
    setPassword(pass);
  },[length,isNumeric,isSpecialChar]);

  let copyPass = useCallback(() =>{
    window.navigator?.clipboard?.writeText(password);
    passRef?.current.select();
  },[password]) 


  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
      my-8 bg-gray-800 text-orange-500">
      <h2 className="text-white my-3">Password Generator</h2>
        <div className='flex justify-between align-center'>
            <input className="mx-3 px-4 border-black outline-black-500 w-3/4 rounded-lg" type="text" value={password} ref={passRef}  readOnly/>
            <button className="bg-blue-500 text-white"  onClick={copyPass}>Copy</button>
        </div>
        <div className='flex justify-between align-middle my-4'>
          <input type="range" value={length} name="" id="" min="8" max="50" onChange={(e)=> {setLength(e.target.value);}} />
          <div>length: {length} </div>
          <input type="checkbox" name="numeric" id="" onChange={()=> setisNumeric((prev)=> !prev)} />
          <label htmlFor="numeric">Numeric</label>
          <input type="checkbox" name="specialChar" id="" onChange={()=> setisSpecialChar((prev)=> !prev)}/>
          <label htmlFor="specialChar">Special char</label>
        </div>
      </div>
    </>
  )
}

export default App
