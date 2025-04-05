import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SpecialProgram from './pages/SpecialProgram'
import EventDetails from './pages/EventDetails'
import Certifications from './pages/Certifications'
import About from './pages/About'
import Training from './pages/Training'
import Contact from './pages/Contact'
import ScrollToTop from './components/global/ScrollToTop'
import Profile from './pages/User/Dashboard/Profile'
import Login from './pages/User/Auth/Login'
import VDashboard from './pages/User/Dashboard/VDashboard'
import Otp from './pages/User/Auth/Otp'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ='/Home/Special Program/' element={<SpecialProgram/>}/>
          <Route path ='/Home/Special Program/:id' element={<EventDetails/>}/>
          <Route path='/Home/Certifications/:id' element={<Certifications/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Training' element={<Training/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/Dashboard' element={<VDashboard/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
