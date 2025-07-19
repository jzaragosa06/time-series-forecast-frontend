import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Analysis from './pages/analysis/Analysis'
import About from './pages/about/About'
import { AnalysisProvider } from './context/UseAnalyzeContext'

function App() {
  return (
    <BrowserRouter>
      <AnalysisProvider >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnalysisProvider>
    </BrowserRouter>
  )
}

export default App
