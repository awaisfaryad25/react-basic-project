import { useState } from 'react'
import Input from '../global/Input'
import Textarea from '../global/Textarea'
import Select from '../global/Select'
import Checkbox from '../global/Checkbox'
import RadioGroup from '../global/RadioGroup'
import Switch from '../global/Switch'
import Modal from '../global/Modal'
import Loader from '../global/Loader'

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


const About = ({ id }) => {

  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState("male");
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div id={id}>
    About Section
    <div className="p-6 flex flex-col gap-4">
      <Input placeholder="Primary Input" variant="primary" />
      <Input placeholder="Custom Input" className="bg-gray-100" />
      
      <Select variant="primary" options={selectOptions} />
      <Textarea placeholder="Primary Textarea..." variant="primary" />

      <Checkbox label="Accept Terms" checked={checked} onChange={() => setChecked(!checked)} />

      <RadioGroup
        name="gender"
        value={gender}
        onChange={setGender}
        options={radioOptions}
      />
      <Switch checked={darkMode} onChange={setDarkMode} />

      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-pink-500 text-white rounded">
        Open Modal
      </button>
      
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold">Modal Content</h2>
        <p>This is inside modal</p>
      </Modal>
        
      <Loader size="8" className="border-t-blue-500" />
    </div>
  </div>
  )
}

export default About
