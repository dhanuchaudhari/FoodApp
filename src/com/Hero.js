import React from 'react'

function Hero() {
//   return (
//     <div className='max-w-[1640px] mx-auto p-4'>
//       <div className='max-h-[500px] relative'>
//         <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
//       <h1 className=' text-4xl sm:text-6xl lg:text-7xl font-bold text-left' > The <span className='text-orange-500 '>Best</span></h1>
//       <h1 className=' text-4xl sm:text-6xl lg:text-7xl font-bold  text-left '> Foods <span className='text-orange-500 '>Devlivered</span></h1>
//       </div>
//       <img className='w-full max-h[500px] object-cover' src='https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
//     </div>
//     </div>
//   )
// }

return ( 
  <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left'>The <span className='text-orange-500'>Best</span></h1>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left'> <span className='text-orange-500'>Foods</span> Devlivered</h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
  </div>
)
}
export default Hero
