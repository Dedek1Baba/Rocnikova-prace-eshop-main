import { useState } from 'react'
import AppRoutes from './pages/AppRoutes'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Mainpage from "./components/ui/Mainpage";
import ScrollToTop from './components/ui/nahoru'
import Vyhody from './components/ui/vyhody';

function App() {
  return (
    <>
      <Header />
      <Mainpage />
      <Vyhody />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
