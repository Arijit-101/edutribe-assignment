import React from "react";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function Navbar() {
	return (

		<div className='font-sans text-sm bg-white  w-100vw  text-[#D9D9D9]  p-0.5 items-end text-left flow-root m-5 ml-20 cursor-pointer '>

			<img className="rounded-full w-10 h-10 float-right bg-orange-400 border  ml-3   my-1 cursor-pointer " src='topman.png' alt="User Image" />
			<NotificationsNoneOutlinedIcon className="ml-3 mr-3 my-1 text-slate-500 float-right cursor-pointer p-1.5" style={{ fontSize: 36 }} />
			<div className="h-3 w-3 rounded-full border-2 border-red-100 bg-red-400  float-right relative top-2 right-[14px] "></div>
			<ChatOutlinedIcon className="ml-3 my-1 text-slate-500 float-right cursor-pointer p-1.5" style={{ fontSize: 36 }} />
			<div className="h-3 w-3 rounded-full border-2 border-red-100 bg-red-400  float-right relative top-2 -right-[101px] "></div>
			<a href="">
				<button class='mx-3 my-1 bg-blue-500 flex hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg float-right cursor-pointer'>
					+ <p className="pl-2">Create </p>
				</button>
			</a>

		</div>
	);
}

export default Navbar;
