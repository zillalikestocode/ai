import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Image from './components/Image'

function App() {

  return (
    <div className=" text-white">
       <Header />
       <Routes>
         <Route path='/' element={<Landing />}/>
         <Route path='/image-generator' element={<Image />}/>
       </Routes>

    </div>
  )
}

export default App
