import React, { useState } from 'react'
import {motion} from 'framer-motion'


const ProductCard = ({item}) => {

  return (
    <div className='flex flex-col items-center justify-between 
     gap-4 p-4 mt-10 ml-5 rounded-xl shadow-lg hover:shadow-gray-800 border border-sky-500'>
     
       <motion.div
         whileHover={{
          scale: 0.9,
          transition: { duration: 2 },
        }}
        whileTap={{ scale: 1 }}
        className='flex flex-col items-center justify-between' >
 
          <div className='h-[160px]'>
            <img src={item.image} alt='card-image' className="h-full w-full"/>
          </div> 

             <div className='mt-2'>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'> {item.title} </p>
             </div> 
            
       </motion.div>


    </div>
  )
}

export default ProductCard