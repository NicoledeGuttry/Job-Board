import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App



