import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className=' h-[calc(100vh)]  w-1/6 flex bg-white  overflow-hidden'>
        
            <div className='w-full text-center items-center justify-between'>
              <div> 
                <img className='h-14 mx-5 mt-8 mb-6 px-2' src="polygon.png" alt="" />
                <div className='relative -top-[59px] left-[40px] flex space-x-5 '>
                  <div className='h-3 w-1 rounded-sm bg-white '></div>
              
                  <div className='h-3 w-1 rounded-sm bg-white '></div>
                </div>
                <div className='relative -top-[75px] left-[52px] h-5 w-1 rounded-sm bg-white '></div>
              </div>
               
                <div className='w-full h-full border-r-2 flex flex-col space-y-5 '>

                  <div className='w-[calc(86%)] h-12 rounded bg-[#EFEFEF] shadow-md mx-auto cursor-pointer'>
                    
                    <div className=''>
                      <HomeIcon className='mt-2 mx-3 float-left ' style={{fontSize:30}}/>
                      <p className='float-left my-2 font-bold text-lg'>Home</p>
                    </div>
                    
                  </div> 

                  <div className='w-[calc(86%)] h-12 rounded bg-white mx-auto cursor-pointer'>
                    
                    <div className='text-[#6F767E]'>
                      <DiamondIcon className='mt-2 mx-3 float-left  ' style={{fontSize:30}}/>
                      <p className='float-left my-2 font-bold text-lg'>Products</p>
                      <ExpandLessOutlinedIcon className='float-right mt-3 mr-2 border-2 rounded-full'/>
                      <AddOutlinedIcon className='float-right mt-3 mr-2 border-2 rounded-full'/>
                    </div>
                    
                  </div> 

                  <div className='w-[calc(86%)] h-12 rounded bg-white mx-auto cursor-pointer'>
                    
                    <div className='text-[#6F767E]'>
                      <AccountCircleOutlinedIcon className='mt-2 mx-3 float-left  ' style={{fontSize:30}}/>
                      <p className='float-left my-2 font-bold text-lg'>Customers</p>
                      <ExpandMoreOutlinedIcon className='float-right mt-3 mr-2 border-2 rounded-full' />
                    </div>
                    
                  </div> 

                  <div className='w-[calc(86%)] h-12 rounded bg-white mx-auto cursor-pointer'>
                    
                    <div className='text-[#6F767E]'>
                      <StorefrontIcon className='mt-2 mx-3 float-left  ' style={{fontSize:30}}/>
                      <p className='float-left my-2 font-bold text-lg'>Shop</p>
                    </div>
                    
                  </div> 


                  <div className='w-[calc(86%)] h-12 rounded bg-white  mx-auto cursor-pointer'>
                    
                    <div className='text-[#6F767E]'>
                      <DataUsageOutlinedIcon className='mt-2 mx-3 float-left  ' style={{fontSize:30}}/>
                      <p className='float-left my-2 font-bold text-lg'>Income</p>
                      <ExpandMoreOutlinedIcon className='float-right mt-3 mr-2 border-2 rounded-full' />
                      
                    </div>
                    
                  </div>
                  
                </div>
            </div>
        </div>
  )
}

export default Sidebar;