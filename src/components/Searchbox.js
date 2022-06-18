import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Searchbox() {
  return (
    <div className='box-border flex flex-col items-start p-[12px] gap-[24px] h-[470px] w-[450px] rounded-xl  text-black bg-white shadow-2xl ' >
      
      <div className='mx-auto cursor-text'>
        <div className='w-[calc(350px-40px)] border-2 border-blue-500 rounded-lg flex gap-3 text-blue-500'>
        <ArrowBackOutlinedIcon className='my-1 ml-2 cursor-pointer'/>
        <div className='flex '>
            <p className='my-1 text-black mr-1 '>Earning</p>
            <div className='h-[18px] w-[2.5px] bg-blue-500 my-2'></div>
        </div>
        
        <CancelTwoToneIcon className='cursor-pointer  text-gray-500 ml-auto mr-2 my-auto'  style={{ fontSize: 24 }}/>
        </div>
      </div>

    <div className='w-[calc(350px-40px)] mx-auto'>
        <p className='text-left text-sm text-gray-500 font-bold'>Recent Search</p>
        <div className='flex my-4'>
            <img className='h-12 w-12 rounded-lg' src="img1.jfif" alt="" />
            <div className='text-left ml-3'>
                <p className='text-sm text-gray-700'>Small caption</p>
                <p >Put your title here</p>
            </div>
            <CloseIcon className='ml-auto my-auto text-gray-400'/>
            
        </div>

        <div className='flex my-4'>
            <img className='h-12 w-12 rounded-lg' src="img2.jfif" alt="" />
            <div className='text-left ml-3'>
                <p className='text-sm text-gray-700'>Small caption</p>
                <p >Put your title here</p>
            </div>
            <CloseIcon className='ml-auto my-auto text-gray-400'/>
            
        </div>
    </div>
    
    <div className='h-[.25px] w-[calc(350px-40px)] mx-auto bg-gray-200'></div>

    <div  className='w-[calc(350px-40px)] mx-auto'>
        <p className='text-left text-sm text-gray-500 font-bold mb-2'>Suggestions</p>
        <div className='flex '>
            <div className='rounded-full border-2 border-gray-300 p-2 my-auto mr-5 cursor-pointer'> <AddPhotoAlternateOutlinedIcon/></div>
            <div className='text-left space-y-1'>
                <p className='text-sm font-bold' >Put your title here</p>
                <div className='h-20 w-20 rounded-lg bg-gray-300'></div>
                <p className='text-sm text-gray-700'>Small caption</p>
            </div>
            <ChevronRightIcon className='my-auto text-gray-400 ml-auto' style={{ fontSize: 34 }}/>
           
        </div>
    </div>
    

    </div>
  )
}

export default Searchbox
