import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStudent from './Components/AddStudent'
import SearchStudent from './Components/SearchStudent'
import DeleteStudent from './Components/DeleteStudent'
import ViewStudent from './Components/ViewStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/search" element={<SearchStudent />} />
        <Route path="/delete" element={<DeleteStudent />} />
        <Route path="/view" element={<ViewStudent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
