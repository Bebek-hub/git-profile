import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./components/ErrorPage"
// import DisplayRepo from "./pages/DisplayRepo"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="error-page" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter> 
    </main>
  )
}

export default App