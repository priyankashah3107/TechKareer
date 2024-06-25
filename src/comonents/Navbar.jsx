import { MessageSquare } from 'lucide-react'
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
    <div>Navbar</div>
  )
}

export default Navbar