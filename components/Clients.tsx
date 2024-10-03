import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/Data'

const Clients = () => {
  return (
<div className='py-20' id='testimonials'>
      <h1 className='heading text-white'>
       Kinds words from
        <br />
        <span className='text-purple'> Satisfied Clients</span>
      </h1>
      <div className='text-white flex flex-col items-center max-lg:mt-10'>  
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
         items={testimonials}
         direction='right'
         speed='slow'
        />
        <div className='flex flex-wrap items-center justify-center gap-10 md:gap-16 max:lg '>
            {companies.map(({id, img, name, nameImg})=>(
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                    <img src={img} alt={name} 
                    className='md:w-10 w-5'
                    />

                    <img src={nameImg} alt={name} 
                    className='md:w-20 w-15'
                    />
                
                </div>
            ))}

        </div>
        </div>
        
       </div>
       </div> 

  )
}


export default Clients