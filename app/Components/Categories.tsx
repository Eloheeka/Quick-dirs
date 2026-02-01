import React from 'react'

export default function Categories() {
  const categoryData = [
    { name: "Technology", count: 2 },
    { name: "Healthcare", count: 5 },
    { name: "Real Estate", count: 12 },
    { name: "Services", count: 8 },
    { name: "Design", count: 4 },
    { name: "Marketing", count: 7 },
    { name: "Finance", count: 3 },
    { name: "Education", count: 6 },
    { name: "Travel", count: 9 },
    { name: "Food & Beverage", count: 11 },
  ];

  return (
    <div className='flex flex-col items-center justify-center bg-gray-850 min-h-[700px] p-8'>
        <h1 className='font-bold text-3xl text-white text-center mb-6'>Items By Categories</h1>
        
        <p className='text-gray-500 text-center text-xl font-semibold max-w-2xl mb-12'>
          Browse listings organized by category. You can create any type of directory including products, local businesses, services, communities, and more.
        </p>

        <div className='flex flex-wrap items-center justify-center gap-4 max-w-4xl'>
            {categoryData.map((cat, index) => (
              <div 
                key={index} 
                className='flex w-fit items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all cursor-pointer group hover:border-white/20'
              >
                  <h4 className='text-gray-500 font-medium group-hover:text-gray-300 transition-colors'>
                    {cat.name}
                  </h4>
                  <span className='flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-gray-400 text-sm group-hover:bg-white/20 group-hover:text-white transition-all'>
                    {cat.count}
                  </span>
              </div>
            ))}
        </div>
    </div>
  )
}