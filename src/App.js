import { Link, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
function App() {
  
    return (
        <div className="pt-4 grid justify-items-stretch">
            <Link to="/"></Link>
            <Routes>
                <Route path="/Details" element={<Details />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div >
    );
}
export default App;
