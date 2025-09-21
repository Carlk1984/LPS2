import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import SectorsPage from './pages/SectorsPage'
import SmartEnergyPage from './pages/SmartEnergyPage'
import ProjectsPage from './pages/ProjectsPage'
import FinancePage from './pages/FinancePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/smart-energy" element={<SmartEnergyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
