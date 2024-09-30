import React from 'react'
import "../../App.css"

import IMG1 from '/src/assets/img/photo_1_2024-09-30_23-50-32.jpg'
import IMG2 from '/src/assets/img/photo_2_2024-09-30_23-50-32.jpg'
import IMG3 from '/src/assets/img/photo_3_2024-09-30_23-50-32.jpg'
import IMG4 from '/src/assets/img/photo_4_2024-09-30_23-50-32.jpg'
import IMG5 from '/src/assets/img/photo_5_2024-09-30_23-50-32.jpg'
import IMG6 from '/src/assets/img/photo_1_2024-10-01_00-07-12.jpg'
import IMG7 from '/src/assets/img/photo_2_2024-10-01_00-07-12.jpg'
import IMG8 from '/src/assets/img/photo_3_2024-10-01_00-07-12.jpg'


// MUI 

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Gallery() {
  return (
    <>
    <div className='bg-[#A9B388]'>

    <h1 className='Jenet text-[50px] text-center py-[20px] font-semibold'>
        Photo
    </h1>
    <div className='grid grid-cols-2 overflow-y-scroll h-[50vh] gap-[10px] bg-black'>
        <img src={IMG1} alt="PeterParker" />
        <img src={IMG2} alt="MarryJame" />
        <img src={IMG6} alt="MarryJame" />
        <img src={IMG5} alt="PeterParker" />
        <img src={IMG4} alt="PeterParker" />
        <img src={IMG8} alt="MarryJame" />
        <img src={IMG3} alt="MarryJame" />
        <img src={IMG7} alt="PeterParker" />
    </div>
    <br /><br />
    <h1 className='font-semibold text-center py-[28.5px] text-[16px]'>
    Твои фото — это настоящие шедевры, но в реальной жизни ты просто огонь. Они не передают всей той магии, что есть в тебе.
</h1>
    </div>
    </>
  )
}

export default Gallery