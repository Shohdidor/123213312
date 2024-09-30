import React from 'react'
import Earth from '../../assets/components/Earth/Earth'

function MemoryTwo() {
  return (
    <>
    <div className='bg-gray-900 py-[150px]'>
        <h1 className='p-[20px] font-semibold text-center text-[18px] text-white'>
        В тот вечер в ресторане, когда наши взгляды встретились, время будто остановилось. Ты, в униформе официантки, с легкой улыбкой подошла ко мне с меню. 
        <span className='text-[#B5BFA1] mr-1'>
        Твои глаза сияли, как звезды, и в них я увидел целый мир — нежность, мечты и возможность. Каждый твой взгляд наполнял воздух волшебством, а мои чувства разгорались, словно огонь.
        </span>
         В тот миг я понял, что это не просто встреча — это начало чего-то удивительного.
        </h1>
        <div className='flex justify-center overflow-hidden'>
        <Earth />
        </div>
    </div>
    </>
  )
}

export default MemoryTwo