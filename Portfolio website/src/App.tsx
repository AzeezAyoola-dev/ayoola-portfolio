import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import JunBank from './pages/JunBank'
import ShiftGrid from './pages/ShiftGrid'
import BudgetBite from './pages/BudgetBite'
import MotionController from './components/MotionController'

export default function App() {
  return (
    <BrowserRouter>
      <MotionController />
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      >
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/jun-bank" element={<JunBank />} />
            <Route path="/work/shiftgrid" element={<ShiftGrid />} />
            <Route path="/work/budgetbite" element={<BudgetBite />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
