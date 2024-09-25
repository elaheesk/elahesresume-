import React, { useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";



const Home = () => {
    const [tooltipContent, setTooltipContent] = useState(false);
    return (
        <div className="w-[1000px] justify-self-center">
            <div className="md:flex flex-row">
                <div className="md:basis-1/4 rounded bg-[#e9e9e9]">
                    <div className="flex flex-col gap-24">
                        <div className="img-container">
                            <div className="heading-container grid justify-items-stretch">
                                <h1 className="text-2xl font-semibold justify-self-center text-white px-4 mt-2">Elahe Eskandari</h1>
                                <img src="/Image.jpg" alt="avatar"
                                    className="avatar px-4 justify-self-center mt-14" />
                            </div>
                        </div>
                        <SideBar tooltipContent={tooltipContent} setTooltipContent={setTooltipContent} />
                    </div>
                </div>
                <MainContent />
            </div>
        </div>
    )
}
export default Home;