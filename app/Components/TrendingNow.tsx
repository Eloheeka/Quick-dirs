import React from 'react'

export const TrendingNow = () => {
  
   const cardData = [
      {title: "Listing 1", desc: "A sample listing used to showcase how items appear in the directory"},
      {title: "Listing 2", desc: "A sample listing used to showcase how items appear in the directory"},
      {title: "Listing 3", desc: "A sample listing used to showcase how items appear in the directory"},
      {title: "Listing 4", desc: "A sample listing used to showcase how items appear in the directory"},
      {title: "Listing 5", desc: "A sample listing used to showcase how items appear in the directory"}, 
      {title: "Listing 6", desc: "A sample listing used to showcase how items appear in the directory"}, 
      {title: "Listing 7", desc: "A sample listing used to showcase how items appear in the directory"},
      {title: "Listing 8", desc: "A sample listing used to showcase how items appear in the directory"},
   ];

   return(
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center p-6 min-h-screen mt-6'>
        {cardData.map((item, index) => (
           <div key={index} className='w-73 rounded-2xl border border-white/5 bg-gray-850 p-6 shadow-2xl my-2 mx-3'>
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5'>
                 <span className='text-xl text-red-500'>▲</span>
              </div>
              
              <h2 className='text-2xl font-bold text-white transition-colors hover:text-red-400 cursor-pointer'>
                {item.title}
              </h2>

              <div className='mt-3'>
                <span className='rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-400'>
                  New
                </span>
              </div>

              <p className='mt-6 text-[15px] leading-relaxed text-gray-400/80'>{item.desc}</p>
              
              <a href="#" className='mt-8 flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-white/5 hover:text-white'>
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
           </div>
        ))}
      </div>
   )
}