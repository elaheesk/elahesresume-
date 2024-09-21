
import './App.css';
import React, { useState } from "react";

function App() {
    const [toggleAccordion, setToggleAccordion] = useState(false);
    return (
        <div className="p-6">

            <div class="flex flex-row">
                {/*<div class="basis-0 hover:basis-1/2">01vfsdfsdfsdfsdf</div>*/}
                {/*<div class="basis-1/4">02</div>*/}
                {/*<div class="basis-1/2">03</div>*/}

                <div className="basis-1/4 bg-violet-500 rounded "

                > <button className="">
                        Section 1
                    </button>
                    <div style={{ display: toggleAccordion ? "block" : "none" }}>
                        <p></p>
                    </div>
                    <div className="blur-xs hover:blur-none">Email</div>
                    <div className="text-xl font-semibold">Personal</div>
                    <div>Tel
                        +46 738923888</div>
                    <div>Address</div>
                    <div>Github</div>
                    <div>Linkedin
                        <a href="https://www.linkedin.com/in/elahe-eskandari/">https://www.linkedin.com/in/elahe-eskandari/</a>
                    </div>
                    <div>Github
                        <a href="https://github.com/elaheesk?tab=repositories">https://github.com/elaheesk?tab=repositories</a>
                    </div>
                    <div className="text-xl font-semibold">Languages</div>
                    <div className="bg-zinc-300"></div>

                </div>
                <div className="basis-2/3 "
                    onMouseOver={() => setToggleAccordion(!toggleAccordion)}>
                    <p className="divide-y divide-grey-200">
                 
                        hhhhhhhhhhhhhhhhhhhhhhhh smod tempor incididuntliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu
                    </p>
                </div>

                {/*<button className="accordion mt-6">Section 2</button>*/}
                {/*<div className="">*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>*/}
                {/*</div>*/}
            </div>
        </div >
    );
}

export default App;
