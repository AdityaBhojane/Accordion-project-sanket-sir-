import { useState } from 'react'
import './App.css'
import Accordion from "./Components/Accordion"


function App() {
  const [count, setCount] = useState(0)

  const toggle = (e) => {
    const accordionItem = e.currentTarget;
    const allAccordions = document.querySelectorAll('.accordion-item');
 
    allAccordions.forEach((item) => {
        if(item !== accordionItem){
          item.style.height = "60px"
        }
        else if(accordionItem.style.height == "120px"){
          item.style.height = "60px"
        }
        else{
          item.style.height = "120px"
        }
    });
  }

  return (
    <>
      <div className="w-[800px] h-[320px] border border-white rounded-xl">
        <Accordion toggle={toggle}  question="Best Way to solve doubts in pw skills ?" answer="It's Super Fast Email Support"></Accordion>
        <Accordion toggle={toggle}  question="What is the best thing in pw skills ?" answer="It's Management"></Accordion>
        <Accordion toggle={toggle}  question="How's the pw skills platform (website) ?" answer="Fast login, Video player is great"></Accordion>
        <Accordion toggle={toggle}  question="Doubt session in pw skills  ?" answer="Doubt Mentor is very good specially in DSA"></Accordion>
      </div>
    </>
  )
}

export default App
