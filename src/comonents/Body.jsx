import React from 'react'
import ProductDesign from './ProductDesign'
import Skills from './Skills'
import AboutJob from './AboutJob'
import Footer from './Footer'
import Left from './Left'

const Body = () => {
  return (
    <>
     <div className="flex flex-row justify-between p-16 pt-10">
       <div className='w-1/3 bg-slate-400 p-10 h-screen'>
         <ProductDesign />
         <Skills />
         <AboutJob />
         <Footer />
       </div>
       <div className='w-1/4 bg-red-300 h-screen'>
        <Left />
       </div>
     </div>
    </>
  )
}

export default Body