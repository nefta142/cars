import Ford from "./pages/Ford"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Toyota from "./pages/Toyota"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/ford" element={<Ford />}/>
          <Route path="/toyota" element={<Toyota />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
