import React from 'react'
import Input from '../global/Input'

const About = ({id}) => {
  return (
    <div id={id}>
      About Section
      <div className="p-6 flex flex-col gap-4">
      {/* Primary Input */}
      <Input placeholder="Primary Input" variant="primary" />

      {/* Outline Input */}
      <Input placeholder="Outline Input" variant="outline" />

      {/* Underline Input */}
      <Input placeholder="Underline Input" variant="underline" />

      {/* Custom Extra Class */}
      <Input placeholder="Custom Input" className="bg-gray-100" />
    </div>
    </div>
  )
}

export default About