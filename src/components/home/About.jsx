import React from 'react'
import Input from '../global/Input'
import Textarea from '../global/Textarea'

const About = ({id}) => {
  return (
    <div id={id}>
      About Section
      <div className="p-6 flex flex-col gap-4">
      <Input placeholder="Primary Input" variant="primary" />
      <Input placeholder="Outline Input" variant="outline" />
      <Input placeholder="Underline Input" variant="underline" />
      <Input placeholder="Custom Input" className="bg-gray-100" />

      <Textarea placeholder="Primary Textarea..." variant="primary" />
    </div>
    </div>
  )
}

export default About