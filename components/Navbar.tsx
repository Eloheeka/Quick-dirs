import React from 'react'

const Navbar: React.FC = () => {
    return(
        <main>
           <nav className='flex items-center justify-between px-8 py-4 bg-gray-800 text-white'>
              <div className='flex-shrink-0'>
                <h2 className='text-2xl front-bold'>QuickDirs</h2>
              </div>
              <ul className='flex space-x-8 mx-auto'>
                 <li className='hover:text-gray-300 cursor-pointer'>Home</li>
                 <li className='hover:text-gray-300 cursor-pointer'>Products</li>
                 <li className='hover:text-gray-300 cursor-pointer'>Blog</li>
              </ul>
           </nav>
        </main>
    )
}

export default Navbar
