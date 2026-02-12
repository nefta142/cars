import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Policy from "./pages/policy/Policy"
import Ferrari from "./pages/ferrari/Ferrari"
import Mitsubishi from "./pages/mitsubishi/Mitsubishi"
import Porsche from "./pages/porsche/Porsche"
import Subaru from "./pages/subaru/Subaru"
import Toyota from "./pages/toyota/Toyota"
import Ford from "./pages/ford/Ford"
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
          <Route path="/policy" element={<Policy />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
