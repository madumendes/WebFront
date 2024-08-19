import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Navigation from './components/Header/Navigation'
import Forms from '../src/pages/Forms/Form'

function App() {

  return (
    <>
    <Layout>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/Orçamentos' element={<Forms />} />
      </Routes>
    </Router>
    </Layout>

    </>                           
  )     
}

export default App
