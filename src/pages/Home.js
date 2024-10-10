import React, { useState, Suspense, lazy } from "react"; 
import img0046 from '../IMG_0046.JPG';
const SideBar = lazy(() => import('../components/SideBar'));
const MainContent = lazy(() => import('../components/MainContent'));
const Home = () => {
    const [tooltipContent, setTooltipContent] = useState(false);
    return (
        <div className="md:w-[793px] justify-self-center">
            <div className="md:flex flex-row">
                <div className="md:basis-1/4 rounded bg-[#e9e9e9] pb-4">
                    <div className="flex flex-col gap-20">
                        <div className="img-container">
                            <div className="heading-container grid justify-items-stretch">
                                <h1 className="text-xl font-semibold justify-self-center text-white px-4 mt-3">Elahe Eskandari</h1>
                                <img src={img0046} alt="avatar" className="avatar px-4 justify-self-center mt-8" />
                            </div>
                        </div>
                        <Suspense fallback={<div>Loading…</div>}>
                            <SideBar tooltipContent={tooltipContent} setTooltipContent={setTooltipContent} />
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<div>Loading…</div>}>
                    <MainContent />
                </Suspense>
            </div>
        </div>
    )
}
export default Home;