import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import SpecialProgram from './pages/SpecialProgram'
import EventDetails from './pages/EventDetails'
import Certifications from './pages/Certifications'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/Home/Special Program/' element={<SpecialProgram/>}/>
        <Route path ='/Home/Special Program/:id' element={<EventDetails/>}/>
        <Route path='/Home/Certifications/:id' element={<Certifications/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
