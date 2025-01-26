import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './pages/AppRoutes'
import Header from './components/ui/header'

function App() {
  return (
    <>
    <Header></Header>
      <AppRoutes/>
    </>
  )
}

export default App
