import { Users } from 'lucide-react'
import { Eye } from 'lucide-react'
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
    <div>Left</div>
  )
}

export default Left