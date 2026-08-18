import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App



