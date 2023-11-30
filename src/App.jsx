import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Backbutton } from './components/backbutton'
import { Ejercicio } from './components/ejercicios/ejercicios'

function App() {

  return (
    <div className='container'>
      <Backbutton/>
      <Ejercicio></Ejercicio>
    </div>
  )
}

export default App
