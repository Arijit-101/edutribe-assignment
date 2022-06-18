import React from "react";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

function Message() {
	return (
		<div className='w-[calc(100vw-50px-290px)] h-[700px] box-border flex flex-col items-start rounded-xl  text-black bg-gray-100 mx-auto'>
			<p className='text-left text-5xl font-bold mx-5 mb-10 '>Message center</p>

			<div className='w-[calc(100%)] h-[calc(100%)]  flex flex-col text-black border-2  rounded-lg   bg-white shadow-2xl'>
				
                <div className='w-[calc(100%-40px)] h-[calc(90%)]  flex flex-col text-black border border-dotted border-slate-300 rounded-lg mx-auto my-auto bg-white'>
					<p className='border-2 border-dotted border-slate-300 rounded  w-[200px] mx-auto my-5 p-2 font-bold'>
						Load Conversation
					</p>

					<div className='text-left mt-2 mx-3 flex px-4 py-1'>
						<img
							className='rounded-full h-12 w-12 border border-white bg-purple-300'
							src='man2.png'
							alt=''
						/>
						<div className='px-4'>
							<div className='flex text-left space-x-4'>
								<p className='my-auto text-gray-500 text-lg '>Orval Casper</p>
								<p className='my-auto text-gray-400 font-thin'>11:59 AM</p>
							</div>

							<p className='text-left '>
								When do you release the coded for the Fleet - Travel kit?
							</p>
							<p className='text-left text-blue-400 font-bold'>
								<a href=''>https://ui8.net/product-link</a>
							</p>
						</div>
					</div>

					<div className='text-left mt-2 mx-3 flex px-4 py-1'>
						<img
							className='rounded-full h-12 w-12 border border-white bg-orange-400'
							src='topman.png'
							alt=''
						/>
						<div className='px-4'>
							<div className='flex text-left space-x-4'>
								<p className='my-auto text-gray-500 text-lg '>Britney Beer</p>
								<p className='my-auto text-gray-400 font-thin '>11:59 AM</p>
							</div>

							<p className='text-left '>Hi @orval, thanks for contacting.</p>
							<p className='text-left '>
								Yes, I'm working on it. It would be released next 2 weeks. You
								could check the progress here :{" "}
								<p className='text-blue-400 font-bold'><a href=""> https://ui8.net/progress</a></p>{" "}
							</p>
							<p className='text-left mt-4 '>
								Thanks for your patience and understanding. 🙌
							</p>
							<p className='text-left mb-4'>Regards,</p>
							<p className='text-left'>Britney Beer</p>
						</div>
					</div>

					<div className='w-[calc(100vw-50px-290px-110px)] h-14 bg-white mx-auto mt-auto mb-4 rounded flex'>
						<NoteAddOutlinedIcon
							className='my-auto text-gray-500 mr-3 cursor-pointer'
							style={{ fontSize: 30 }}
						/>
						<SentimentSatisfiedAltOutlinedIcon
							className='my-auto text-gray-500 ml-3 mr-3 cursor-pointer'
							style={{ fontSize: 30 }}
						/>
						<div className=' w-[calc(90%)] h-12 bg-[#EFEFEF] my-auto ml-3 rounded-lg flex cursor-text'>
							<p className='flex mx-4 text-black my-auto'>
								P/s : One more thing i need to tell you
								<div className='h-5 w-[3px] bg-blue-400 mt-1 ml-1'></div>
							</p>
							<button class='h-10 ml-auto my-auto p-1 px-4 bg-blue-500  hover:bg-blue-700 text-white font-bold  border border-blue-700 rounded float-right cursor-pointer'>
								Send
							</button>
						</div>
					</div>
				</div>

				{/* Here */}
			</div>
		</div>
	);
}

export default Message;
