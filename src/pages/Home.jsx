import { useState } from 'react'

import Input from "../components/global/Input";
import Textarea from '../components/global/Textarea'
import Select from '../components/global/Select'
import Checkbox from '../components/global/Checkbox'
import RadioGroup from '../components/global/RadioGroup'
import Switch from '../components/global/Switch'
import Modal from '../components/global/Modal'
import Loader from '../components/global/Loader'
import Alert from '../components/global/Alert'

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

const Home = () => {

  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState("male");
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4 md:space-y-8 mb-4 md:mb-8">
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
        
        <Loader size="md" />

        <Alert type="success" message="This is a success alert" />
        <Alert type="error" message="This is an error alert" />
      </div>
    </div>
  );
};

export default Home;