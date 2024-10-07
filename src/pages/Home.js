import React, { useState } from "react";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const Home = () => {
    const [tooltipContent, setTooltipContent] = useState(false);
    return (
        <div className="md:w-[793px] justify-self-center">
            <div className="md:flex flex-row">
                <div className="md:basis-1/4 rounded bg-[#e9e9e9] pb-4">
                    <div className="flex flex-col gap-24">
                        <div className="img-container">
                            <div className="heading-container grid justify-items-stretch">
                                <h1 className="text-xl font-semibold justify-self-center text-white px-4 mt-3">Elahe Eskandari</h1>
                                <img src="/Image.jpg" alt="avatar" className="avatar px-4 justify-self-center mt-10" />
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