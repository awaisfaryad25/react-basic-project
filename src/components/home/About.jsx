import React from 'react'
import Input from '../global/Input'
import Textarea from '../global/Textarea'
import Select from '../global/Select'
import Checkbox from '../global/Checkbox'
import RadioGroup from '../global/RadioGroup'
import Switch from '../global/Switch'

const selectOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
]

const radioOptions = [
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B" },
  { label: "Option C", value: "C" },
]

const About = ({ id }) => (
  <div id={id}>
    About Section
    <div className="p-6 flex flex-col gap-4">
      <Input placeholder="Primary Input" variant="primary" />
      <Input placeholder="Custom Input" className="bg-gray-100" />
      
      <Select variant="primary" options={selectOptions} />
      <Textarea placeholder="Primary Textarea..." variant="primary" />
      <Checkbox label="Accept Terms" onChange={() => {}} />
      
      <RadioGroup
        name="example"
        options={radioOptions}
        value="A"
        onChange={console.log}
      />
      <Switch checked={true} onChange={() => {}} />
        
    </div>
  </div>
)

export default About