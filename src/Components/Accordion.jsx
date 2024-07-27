import React from 'react'

function Accordion({question, answer, toggle}) {

  return (
    <>
    <div onClick={toggle} style={{height:"60px"}} className="accordion-item w-full overflow-hidden transition-all">
      <h1 className="p-4 bg-blue-900 rounded-xl text-[25px] cursor-pointer select-none">
          {question}
      </h1>
      
      <div  className= "bg-blue-950 w-full  text-[20px]">
        <p className='p-4'>{answer}</p> 
      </div>
    </div>
    </>
  )
}

export default Accordion;


