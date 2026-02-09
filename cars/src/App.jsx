import Ford from "./pages/Ford"
import Toyota from "./pages/Toyota"
import Subaru from "./pages/Subaru"
import Porsche from "./pages/Porsche"
import Mitsubishi from "./pages/Mitsubishi"
import Ferrari from "./pages/Ferrari"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/ford" element={<Ford />}/>
          <Route path="/toyota" element={<Toyota />}/>
          <Route path="/subaru" element={<Subaru />}/>
          <Route path="/porsche" element={<Porsche />}/>
          <Route path="/mitsubishi" element={<Mitsubishi />}/>
          <Route path="/ferrari" element={<Ferrari />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
