import React from 'react'

const foo = [
  {
    id: 1,
    title: "Company size",
    val: "1k - 2k Employees"
  },
  {
    id: 2,
    title: "Sector",
    val: "Information Technology, Infrastructure"
  },

  {
    id: 3,
    title: "Founded In",
    val: "2019"
  },


]

const foot = [
  {
    id: 1,
    title: "Type",
    val: "Private"
  },
  {
    id: 2,
    title: "Funding",
    val: "Bootstrapped"
  },

  {
    id: 3,
    title: "Founded By",
    val: "Scott Farquhar,Mike Cannon-Brookes"
  },


]

const Footer = () => {
  return (
    <>
     <div className=''>

        <div className='flex flex-row gap-4 mt-6 items-center'>
          <img src="/icon.png" alt='img' className='size-[2rem]'/>
           <h1 className="text-[#4f4f4f] text-xl font-medium">Atlassian</h1>
        </div>

      <div className="flex flex-row justify-between">

      
        <div className='mt-6' >

          {foo.map((val, idx) => (
            <div key={idx} className='flex flex-col mt-2'> 
              <h3 className="text-sm font-medium mt-2" >{val.title}</h3> 
              <p className=" text-[#3D3D3D] text-base font-medium font mt-2">{val.val}</p>
            </div> 
          ))}
        </div>

        <div className='mt-6'>
          {foot.map((val, idx) => (
            <div key={idx} className='flex flex-col mt-2'> 
              <h3 className="text-sm font-medium mt-2">{val.title}</h3> 
              <p className=" text-[#3D3D3D] text-base font-medium font mt-2">{val.val}</p>
            </div> 
          ))}
        </div>
        </div>
     </div>
    </>
  )
}

export default Footer