import { useState } from 'react'
import Header from './Components/Header'
import Popular from './Components/Popular'
import './App.css'
import Irrecha from './Components/Holidays/Irrecha'
import ScrollToTop from './Components/Scrolltotop'
import Eid from './Components/Holidays/Eid'
import Lalibela from './Components/Places/Lalibela'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className='text-xl font-bold text-gray-1000 px-4'>Popular</h1>
      <Popular />
      <h1 className='text-xl font-bold text-gray-1000 px-4'>Irrecha</h1>
      <Irrecha />

      <h1 className='text-xl font-bold text-gray-1000 px-4'>Eid</h1>
      <Eid />

      <h1 className='text-xl font-bold text-gray-1000 px-4'>Lalibela</h1>
      <Lalibela />

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App