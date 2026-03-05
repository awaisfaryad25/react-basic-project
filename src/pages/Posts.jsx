import React from 'react'
import Input from '../components/global/Input'
import Button from '../components/global/Button'

const Posts = () => {
  return (
    <div className=''>
      <form action="" className='w-full max-w-xl mx-auto mt-8 p-12 rounded-lg shadow bg-[#f2f4fa]'>
        <h1 className='text-2xl font-bold'>Posts Page</h1>

        <div className="w-full max-w-sm mt-4 mx-auto space-y-4">
          <Input type="file" placeholder="Enter name" className='mb-4'/>
          <Input type="text" placeholder="Enter name" required className='mb-8'/>

          <Button variant="primary" label='Submit'/>
        </div>

      </form>
    </div>
  )
}

export default Posts