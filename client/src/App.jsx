import { useState } from 'react'
import AppRoutes from './pages/AppRoutes'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Mainpage from "./components/ui/Mainpage";
import ScrollToTop from './components/ui/nahoru'

function App() {
  return (
    <>
      <Header />
      <Mainpage />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
