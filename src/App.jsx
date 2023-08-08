import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./components/ErrorPage"
// import { Suspense } from "react"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  return (
    <main>
      <BrowserRouter>
      <ErrorBoundary>
      {/* <Suspense fallback={<h1>Hola...</h1>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="*" element={<ErrorPage />} /> 
         
          {/* This shows an error page when an unknown url is added */}
        </Routes>
        {/* </Suspense> */}
        </ErrorBoundary>
      </BrowserRouter> 
    </main>
  )
}

export default App