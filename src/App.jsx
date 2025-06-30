import { useState } from 'react'
import './App.css'
import Form from './features/Form/Form'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (

    <main className='h-screen w-100%  box-border'>
    <Navbar></Navbar>
    </main>
 
  )
}

export default App
