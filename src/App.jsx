import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { Link } from "react-router-dom"
import FirstTimePage from './Components/FirstTime/FirstTimePage'
import ScrollToTop from './Components/ScrollToTop'
import HetsMainPage from './Components/HowEveryThingsStart.jsx/HetsMainPage'
import BlackHolePage from './Components/BlackHole/BlackHolePage'
import GalaxyPages from './Components/TopicsPages/GalaxyPage'
import Galaxy from './Components/Galaxy'
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/FirstTime' element={<FirstTimePage/>}/>
        <Route path='/HowItAllBegan' element={<HetsMainPage/>}/>
        <Route path='/BlackHole' element={<BlackHolePage/>}/>
        <Route path='/Galaxies' element={<GalaxyPages/>}/>
        <Route path='/Galaxy/:id' element={<Galaxy/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </>

  )
}

export default App
