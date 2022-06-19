import React from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Upload() {
    return (
        <div className='box-border flex flex-col items-start p-[12px] gap-[24px] h-[580px] w-[650px] rounded-xl  text-black bg-white shadow-2xl'>
            <div className='mx-auto'>
                <p className='text-xl m-4 text-black font-bold'>Upload</p>
                <div className='h-[200px] w-[500px] rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 cursor-pointer'>
                    <CloudOutlinedIcon className="text-blue-800 mt-2 relative top-[1px] left-[9px]" style={{ fontSize: 56 }} />
                    <ArrowUpwardIcon className="text-blue-800 mt-2 rounded-full border-4 border-blue-800 relative top-[17px] right-[32px] bg-gray-100" style={{ fontSize: 26 }} />
                    <p className="mt-4">Drop or Drag files or <a href='' className="text-blue-500"> <u>Browse</u> </a> </p>
                    <p className="mt-4 text-gray-400">Supported Formats : JPEG , PNG ,GIF , MP4 , PDF , PSD , AI , Word , PPT</p>
                </div>
                <p className='text-left mt-3 mb-2'>Uploading - 3/3 files</p>
                <div className="w-[500px] rounded-sm border border-gray-300 ">
                    <p className="text-left mx-3 my-1">your-file-here.PDF</p>
                </div>
                <div className="h-1 w-[300px] bg-[#483EA8] mb-5"></div>

                <p className='text-left my-2'>Uploaded</p>

                <div className="w-[500px] rounded-sm border border-green-500 my-3">
                    <p className="text-left mx-3 my-1">document-name.PDF</p>
                </div>

                <div className="w-[500px] rounded-sm border border-green-500">
                    <p className="text-left mx-3 my-1">image-name-goes-here.png</p>
                </div>
                <div className="w-[500px] rounded border bg-[#483EA8] text-white mt-5 cursor-pointer">
                    <p className="my-1 p-1">UPLOAD FILES</p>
                </div>
            </div>
        </div>
    );
}

export default Upload;
