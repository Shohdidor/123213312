import React from 'react'

// IMG 
import She from "/src/assets/img/photo_1_2024-09-30_23-50-32.jpg"



// MUI 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



function MemoryOne() {
  return (
    <>
    <div className='flex'>
      <div className='bg-[#8f8570] w-[350px] h-[749px]'>
        <h1 className='text-[20px] tracking-[3px] font-serif py-[15px] mb-[30px] text-gray-800 pl-[25px]'>
        Shakhrizoda 
        </h1>
        <div className='bg-[#f7f4e6] p-[10px] mb-[10px] pr-[20px] w-[200px]'>
          <h1 className='p-[5px] font-serif text-gray-800'>
          Когда я смотрю на Луну, мне кажется, что вижу тебя          
          </h1>
        </div>
        <h1 className='p-[25px_10px] text-gray-900 font-semibold text-[15px]'>
        Я тебя очень люблю, но порой ты говоришь так, будто не ценишь меня.
        </h1> 
        
        <div className='bg-[#f7f4e6] p-[10px] mb-[10px] pr-[20px] w-[200px]'>
          <h1 className='p-[5px] font-serif text-gray-800'>
          Мен сени жуда яхши кўраман, лекин баъзан сен шундай гапирасанки, мендан қадрланмайсан.
          </h1>
        </div>
      </div>
      <div className='w-[500px] p-[20px] bg-[#635d4f]'>
        <img src={She} className='w-[500px]' alt="" />
      </div>
    </div>
    </>
  )
}

export default MemoryOne