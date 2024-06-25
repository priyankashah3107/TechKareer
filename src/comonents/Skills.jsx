import React from 'react'

const skills = [
  {
    id: 1,
    icon: "/figma.png",
    text: "Figma"
  },
  {
    id: 2,
    icon: "/ai.png",
    text: "Adobe Illustrator"
  },
  {
    id: 1,
    icon: "/xd.png",
    text: "Adobe XD"
  }
]

const lang = [
  {
    id: 1,
    text: "English"
  }
]

const type = [
  {
    id: 1,
    text: "Full time"
  }
]

const exp = [
  {
    id: 1,
    text: "3+ Years of Experience"
  }
]

const Skills = () => {
  return (
    <>
     <div className="flex flex-row gap-44 mt-10 pb-10 border-b-2">
      <div>
        <h1 className="text-sm font-medium">Skills Required</h1>
         <div className=' flex flex-col gap-2 mt-4 '>
          {skills.map((val, idx) => (
            <div key={idx} className='flex flex-row gap-2 border-2  rounded-md items-center w-auto pl-2 p-2 mt-2'>
              <img src={val.icon} alt='' className="size-[18px]"/>
              <p className="text-center text-[#344054] text-md font-medium ">{val.text}</p>
            </div>
          ))}
         </div>
      </div>


      <div>
      <h1 className="text-sm font-medium">Preferred Language</h1>

      <div>{lang.map((val, idx) => (
         <div key={idx} className=" text-[#3D3D3D] text-base font-semibold mt-2"> {val.text} </div>
      ))}
      </div>
      </div>


      <div>
      <h1 className="text-sm font-medium">Type</h1>

      <div>{type.map((val, idx) => (
         <div key={idx} className=" text-[#3D3D3D] text-base font-semibold mt-2"> {val.text} </div>
      ))}
      </div>
      </div>

      <div>
      <h1 className="text-sm font-medium">Years of Experience</h1>

      <div>{exp.map((val, idx) => (
         <div key={idx} className=" text-[#3D3D3D] text-base font-semibold mt-2"> {val.text} </div>
      ))}
      </div>
      </div>

     </div>
    </>
  )
}

export default Skills