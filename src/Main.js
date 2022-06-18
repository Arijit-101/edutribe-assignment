import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Main() {
	return (
		<div>
            <div className='flex flex-row bg-red-400 overflow-hidden'>
                <Sidebar/>
                <Home/>
            </div>
		</div>
	);
}

export default Main;
