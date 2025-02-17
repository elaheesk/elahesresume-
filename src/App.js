import { Link, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react"
import Details from "./pages/Details";
import Home from "./pages/Home";
function App() {
  
    return (
        <div className="pt-4 grid justify-items-stretch">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<Fragment>Page Not Found</Fragment>} />
            </Routes>
        </div>
    );
}
export default App;
