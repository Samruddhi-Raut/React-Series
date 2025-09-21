import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive") 

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center gap-3 shadow-lg bg-white rounded">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1  text-white rounded-full shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1  text-white rounded-full shadow-lg "
          style={{backgroundColor: "blue"}}>blue</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1  text-white rounded-full shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>
          <button 
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1  text-white rounded-full shadow-lg"
          style={{backgroundColor: "maroon"}}>maroon</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1  text-white rounded-full shadow-lg"
          style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
