import React from "react";
import Message from "./Message";
import Navbar from "./Navbar";
import Searchbox from "./Searchbox";
import Upload from "./Upload";

function Home() {
    return (
        <div className='h-[calc(100vh)] w-[calc(100vw-50px)] md:w-5/6 bg-gray-100 overflow-y-auto overflow-x-hidden '>
            <div>
                <Navbar />
            </div>

            <div className='relative top-[-72px] left-[50px]'>
                <Searchbox />
            </div>

            <div className="relative top-[-450px] left-[575px]">
                <Upload />
            </div>

            <div className="relative top-[-340px] left-[10px] ">
                <Message />
            </div>

        </div>
    );
}

export default Home;
