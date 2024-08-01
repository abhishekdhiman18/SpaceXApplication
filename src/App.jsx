import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Rockets from './components/Rockets'


function App() {
  return (
    <>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/rocket' element={<Rockets/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
