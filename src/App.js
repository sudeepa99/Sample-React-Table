import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <div className="h-auto bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage/>} path="/" ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
