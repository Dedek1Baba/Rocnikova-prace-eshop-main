import { useState } from 'react'
import AppRoutes from './pages/AppRoutes'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Mainpage from "./components/ui/Mainpage";
import ScrollToTop from './components/ui/nahoru'
import Vyhody from './components/ui/vyhody';
import Cardproduct from './components/ui/cardproduct';

function App() {
  return (
    <>
   <AppRoutes />
    </>
  )
}

export default App
