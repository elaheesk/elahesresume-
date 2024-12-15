import { Link, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
function App() {
  
    return (
        <div className="pt-4 grid justify-items-stretch">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </div>
    );
}
export default App;
