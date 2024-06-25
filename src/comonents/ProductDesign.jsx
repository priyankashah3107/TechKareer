import { DotIcon } from 'lucide-react'
import { DatabaseIcon } from 'lucide-react'
import { Pin } from 'lucide-react'
import { Badge } from 'lucide-react'
import React from 'react'

const ProductDesign = () => {
  return (
   <>
    <div className='p-6 pl-0 border-b-2  '>

      <div className='flex flex-row justify-start gap-4'>
        <h1 className="text-[#3D3D3D] text-[2.2rem] font-semibold">Senior Product Designer</h1>

        <div className='flex flex-row items-center gap-2'>
        <div className="w-1 h-1 bg-neutral-300 rounded-full" />
        <p className="text-[#888888] text-sm font-medium ">posted 2 days ago</p>
        </div>
       
         <div className='w-[59px] h-[22px]  flex flex-row items-center gap-1 bg-[#AAEFC6] border border-[#17B26A] rounded-full'>
         <div className="w-2 h-2 bg-[#17B26A] rounded-full ml-0.5" />
           <p className='text-[#057647]'>Open</p>
         </div>
      </div>

      <div className="flex flex-row mt-6 gap-4 text-[#5D5D5D] items-center">
        
        <div className="flex flex-row gap-2 items-center">
          <Pin />
         <h4 className="text-xl font-medium ">Delaware, USA</h4>
        </div>
        <div className="w-1 h-1 bg-neutral-300 rounded-full" />

        <div className="flex flex-row gap-2 items-center">
          <DatabaseIcon />
          <h4 className="text-xl font-medium ">$300k-$400k</h4>
        </div>
      </div>
    </div>
   </>
  )
}

export default ProductDesign