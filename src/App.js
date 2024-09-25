import { Link, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./Home";
function App() {
  
    return (
        <div className="p-6 [1000px] grid justify-items-stretch">
            <Link to="/"></Link>
            <Routes>
                <Route path="/Details" element={<Details />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div >
    );
}

export default App;
