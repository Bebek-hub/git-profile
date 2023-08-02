import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import DisplayRepo from "./pages/DisplayRepo"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="display-repo" element={<DisplayRepo />} />
        </Routes>
      </BrowserRouter> 
    </main>
  )
}

export default App