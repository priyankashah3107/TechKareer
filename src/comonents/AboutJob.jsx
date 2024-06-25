import { icons } from 'lucide-react'
import { DotIcon } from 'lucide-react'
import React from 'react'

const aboutjob = [
  {
    id: 1,
    num: 1,
    icon: <DotIcon />,
    text: "Handle the UI/UX research design"
  },
  {
    id: 2,
    num: 2,
    icon: <DotIcon />,
    text: "Work on researching on latest web applications designs & trends"
  },
  {
    id: 3,
    num: 3,
    icon: <DotIcon />,
    text: "Work on conceptualizing and visualizing"
  },
  {
    id: 4,
    num: 4,
    icon: <DotIcon />,
    text: "Work on creating graphics content and other graphic related works"
  }
]

const benefits = [
  {
    id: 1,
   icon: <DotIcon />,
    text: "Health insurance"
  },
  {
    id: 2,
   icon: <DotIcon />,
    text: "Provident Fund"
  }
]

const schedule = [
  {
    id: 1,
   icon: <DotIcon />,
    text: "Day Shift"
  },
]

const paytypes = [
  {
    id: 1,
   icon: <DotIcon />,
    text: "Performance bonus"
  },
  {
    id: 2,
   icon: <DotIcon />,
    text: "Yearly bonus"
  },
]



const AboutJob = () => {
  return (
    <>
     <div className="flex flex-col mt-4">

      <div>
        <h3 >About the job</h3>
        <div className='mt-3'>
          {aboutjob.map((val, idx) => (
             <div key={idx} >
                <p className='text-base font-medium leading-7'>{val.num}  {val.text}</p>
             </div>
          
          ))}
        </div>
      </div>

      
      <div className='mt-2'>
        <h1>Benefits:</h1>
        <div>
          {benefits.map((val, idx) => (
             <div key={idx}>
                <p className='flex flex-row text-base font-medium leading-7'>{val.icon}  {val.text}</p>
             </div>
          
          ))}
        </div>
      </div>
      


      <div className='mt-2'>
        <h1>Schedule:</h1>
        <div>
          {schedule.map((val, idx) => (
             <div key={idx}>
                <p className='flex flex-row text-base font-medium leading-7'> {val.icon}  {val.text}</p>
             </div>
          
          ))}
        </div>
      </div>

      <div className='mt-2'>
        <h1>Supplemental pay types:</h1>
        <div>
          {paytypes.map((val, idx) => (
             <div key={idx}>
                <p className='flex flex-row text-base font-medium leading-7'> {val.icon}  {val.text}</p>
             </div>
          
          ))}
        </div>
      </div>
       <p className="font-medium leading-7">Work Location: In person</p>
     </div>
    </>
  )
}

export default AboutJob