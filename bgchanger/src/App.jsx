import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: colour}}>  
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button onClick={()=>setColour("red")}
          className='outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg'>
            Red
          </button>
          <button onClick={()=>setColour("green")}
          className='outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg'>
            Green
          </button>
          <button onClick={()=>setColour("blue")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>
            Blue
          </button>
        </div>
      </div>
    </>
  )
}

export default App
