import { Users } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { Pen } from 'lucide-react'
import { MessageSquare } from 'lucide-react'
import { UserCheck } from 'lucide-react'
import { User2 } from 'lucide-react'
import React from 'react'

const infomation = [
  {
    id: 1,
   icon: <Users />,
  text: "Applicants",
  num: "400"
  },
  {
    id: 2,
   icon: <UserCheck />,
    text: "Matches",
    num: "200"
  },
  {
    id: 3,
   icon: <MessageSquare />,
    text: "Messages",
    num: "800"
  },
  {
    id: 4,
   icon: <Eye />,
    text: "Views",
    num: "800"
  },
]

const Left = () => {
  return (
    <>
     <div className=''>
       <div className='mt-6 flex flex-row justify-center gap-3'>
       <button className="btn outline-red-600 bg-red-50 hover:bg-red-50 text-[#DC4A2D] text-center items-center text-base font-medium"> <Trash2 className='size-[16px]' /> Delete job </button>
       <button className="btn btn-error text-white text-center items-center text-base font-medium"> <Pen className="size-[16px]"/> Edit job</button>
       </div>

        <div className='mt-10'>
          {infomation.map((val, idx) => (
            <div key={idx} className='flex flex-row justify-between p-4 items-center  border-b-2 border-[#E7E7E7]'>

              <div className='flex flex-row gap-2 ml-2 items-center text-base font-medium text-[#4F4F4F] '>{val.icon} {val.text}</div>
              <h1 className='mr-6 text-xl font-semibold  text-[#3D3D3D] '>{val.num}</h1>
              
            </div>
          ))}
        </div>
     </div>
    </>
  )
}

export default Left