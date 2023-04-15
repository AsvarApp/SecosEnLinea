import { useState } from "react"

const Modal = ()=>{
  return(
    <>
      <section className="w-full h-full bg-gray-900/80 fixed left-0 top-0 z-20 overflow-y-auto overflow-x-hidden cursor-pointer flex justify-center items-center">
        <div className="absolute w-96 h-[90%] bg-slate-300 rounded-2xl cursor-default">
          <h1>Modal</h1>
        </div> 
      </section>
    </>
  )
}
export default Modal