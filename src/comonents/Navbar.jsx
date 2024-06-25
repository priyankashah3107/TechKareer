import { MessageSquare } from 'lucide-react'
import { BellIcon } from 'lucide-react'
import { ArrowDown } from 'lucide-react'
import { HandCoins } from 'lucide-react'
import { Briefcase } from 'lucide-react'
import React from 'react'

const navinfo = [
  {
    id: 1,
   icon: <Briefcase />,
  text: "Jobs",
  },
  {
    id: 2,
   icon: <MessageSquare />,
  text: "Messages",
  },
  {
    id: 3,
   icon: <HandCoins />,
  text: "Payments",
  },
]

const Navbar = () => {
  return (
    <>
     <nav className='flex flex-row justify-between p-4 items-center border-b ml-6 mr-6'>

      <div className='bg-[#B0B0B0] p-4 w-[80px] text-[#DC4A2D] text-center ml-6 text-xl font-bold '>Logo</div>

      <div className='flex flex-row border pt-4 pb-4 pr-3 rounded-full'>{navinfo.map((val, idx) => (
         <div key={idx} className='flex flex-row gap-4 '> 
          <div className='ml-4 flex flex-row gap-2 bg text-xl font-medium items-center'>{val.icon} {val.text}</div>
           
          </div>
      ))}</div>
      
      <div className="flex flex-row gap-4 items-center ">
        <BellIcon />
        <img src="/icon.png" alt="img" className='size-8 rounded-full'  />
        <ArrowDown  />
      </div>
     </nav>
    </>
  )
}

export default Navbar