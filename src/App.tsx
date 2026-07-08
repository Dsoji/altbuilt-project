import { Routes, Route } from 'react-router-dom'
import { TopBar } from './components/layout/TopBar'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollManager } from './components/layout/ScrollManager'
import { Home } from './pages/Home'
import { ServicePage } from './pages/ServicePage'
import { Careers } from './pages/Careers'

export default function App() {
  return (
    <>
      <ScrollManager />
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
