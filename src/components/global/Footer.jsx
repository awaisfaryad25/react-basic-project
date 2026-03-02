import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-semibold text-left mb-2">About Us</h3>
            <p className="text-gray-400 text-sm">
              We provide resources and support for international students 
              to thrive in their academic journey abroad.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg text-left font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-1 text-sm text-left">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg text-left font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-left">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer