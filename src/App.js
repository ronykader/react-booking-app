import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/hotels" element={<List/>} />
            <Route path="/hotels/:id" element={<Hotel/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
