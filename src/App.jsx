import React from 'react'
import HomePage from './Pages/HomePage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/layout'
import PianoCardHolder from './Pages/pianoCardHolder'
import Intervals from './Pages/Intervals'
import Scales from './Pages/Scales'
import Chords from './Pages/Chords'
import Theory from './Pages/Theory'
import RhythmQuiz from './Pages/RhythmQuiz'
import About from './Pages/About'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path='/absolute-pitch' element={<PianoCardHolder />} />
      <Route path='/ear-training' element={<Intervals />} />
      <Route path='/scale-exercises' element={<Scales />} />
      <Route path='/chord-recognition' element={<Chords />} />
      <Route path='/theory' element={<Theory />} />
      <Route path='/rhythm-practice' element={<RhythmQuiz />} />
      <Route path='/about' element={<About />} />
    </Route> 
    
  ))

  return <RouterProvider router={router} />
}

export default App