import { useState } from 'react'
import './App.css'
import Accordion from "./Components/Accordion"


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className="w-[800px] h-[500px] border border-white rounded-xl">
        <Accordion  question="Best Way to solve doubts in pw skills ?" answer="It's Super Fast Email Support"></Accordion>
        <Accordion  question="What is the best thing in pw skills ?" answer="It's Management"></Accordion>
        <Accordion  question="How's the pw skills platform (website) ?" answer="Fast login, Video player is great"></Accordion>
        <Accordion  question="Doubt session in pw skills ?" answer="Doubt Mentor is very good specially in DSA"></Accordion>
      </div>
    </>
  )
}

export default App
