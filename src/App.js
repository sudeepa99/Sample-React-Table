import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage/>} path="/" ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
