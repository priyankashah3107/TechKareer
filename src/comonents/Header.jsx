import React from 'react'

const headerinfo = [
  {
    id: 1,
    text: "Job preview"
  },
  {
    id: 2,
    text: "Applicants"
  },
  {
    id: 3,
    text: "Match"
  },
  {
    id: 4,
    text: "Messages"
  },
]

const Header = () => {
  return (
    <>
    <div className='flex flex-row p-4 ml-20 gap-20 border-b'>
      {headerinfo.map((val, idx) => (
        <div  key={idx}> 
          <p className='para '>{val.text}</p> 
        </div>
      ))}
    </div>
    </>
  )
}

export default Header