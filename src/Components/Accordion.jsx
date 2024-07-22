import React from 'react'

function Accordion({question, answer}) {
  let answerOpen = false;
  function ShowAnswer(e){
    const parent = e.currentTarget;
      if(answerOpen){
        parent.style.height = "55px"
        answerOpen = false;
      }else{
        parent.style.height = "120px";
        answerOpen = true
      }
  }
  return (
    <>
    <div onClick={ShowAnswer} className="outerParent w-full h-[60px] overflow-hidden transition-all">
      <h1 className="p-4 bg-blue-900 rounded-xl text-[25px] cursor-pointer select-none">
          {question}
      </h1>
      <div  className= {` bg-blue-950 w-full  text-[20px] `}>
        <p className='p-4'>{answer}</p> 
      </div>
    </div>
    </>
  )
}

export default Accordion;