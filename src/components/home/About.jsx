import React from 'react'
import Input from '../global/Input'
import Textarea from '../global/Textarea'
import Select from '../global/Select'
import Checkbox from '../global/Checkbox'
import RadioGroup from '../global/RadioGroup'

const About = ({id}) => {
  return (
    <div id={id}>
      About Section
      <div className="p-6 flex flex-col gap-4">
      <Input placeholder="Primary Input" variant="primary" />
      <Input placeholder="Custom Input" className="bg-gray-100" />

      <Select
        variant="primary"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
          { label: "Option 3", value: "3" },
        ]}
      />
      
      <Textarea placeholder="Primary Textarea..." variant="primary" />

      <Checkbox label="Accept Terms" onChange={() => {}} />
      <Checkbox label="Subscribe to Newsletter" checked={false} onChange={() => {}} className="text-blue-500" />
      <Checkbox label="Default" variant="default" />

      <RadioGroup
        name="example"
        options={[
          { label: "Option A", value: "A" },
          { label: "Option B", value: "B" },
          { label: "Option C", value: "C" },
        ]}
        value="A"
        onChange={(val) => console.log(val)}
      />

    </div>
    </div>
  )
}

export default About