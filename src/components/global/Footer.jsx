import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We provide resources and support for international students 
              to thrive in their academic journey abroad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer