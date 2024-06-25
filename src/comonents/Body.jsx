import React from 'react'
import ProductDesign from './ProductDesign'
import Skills from './Skills'
import AboutJob from './AboutJob'
import Footer from './Footer'
import Left from './Left'

const Body = () => {
  return (
    <>
     <div className="flex flex-row justify-between p-16 pt-0 pr-1 border-t border-neutral-200">
       <div className='w-[75vw] h-full bg-slate-50 p-10 border-r'>
         <ProductDesign />
         <Skills />
         <AboutJob />
         <Footer />
       </div>
       <div className=" w-[20vw] h-full bg-[#FCFCFC]  shadow border-l border-r border-t ">
        <Left />
       </div>
     </div>
    </>
  )
}

export default Body