import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [spCharsAllowed, setSpCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str+="0123456789";
    if(spCharsAllowed) str+="@_{}[]()&#!";

    for (let i = 1; i <= length; i++) {
      let index =Math.floor(Math.random() * str.length +1);
      pass += str.charAt(index);
    }

    setPassword(pass);

  },[length,numbersAllowed,spCharsAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{ 
    passwordGenerator()
  },[length,numbersAllowed,spCharsAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-300 bg-gray-600'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-100'>
          <input type="text" value={password} 
          className='outline-none w-full py-1 px-3 text-amber-700' placeholder='password' readOnly
          ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
          onClick={copyPasswordToClip}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={25} value={length} className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numbersAllowed} id='numberInput'
            onChange={()=>{
              setNumbersAllowed((prev)=> !prev);
            }}/>
            <label>Numbers Allowed</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={spCharsAllowed} id='charsInput'
            onChange={()=>{
              setSpCharsAllowed((prev)=> !prev);
            }}/>
            <label>Special Charecters Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
