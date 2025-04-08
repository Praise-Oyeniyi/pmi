import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SpecialProgram from './pages/SpecialPrograms/SpecialProgram'
import EventDetails from './pages/EventDetails'
import Certifications from './pages/Certifications'
import About from './pages/About'
import Training from './pages/Training'
import Contact from './pages/Contact'
import ScrollToTop from './components/global/ScrollToTop'
import Profile from './pages/User/Dashboard/Profile'
import Login from './pages/User/Auth/Login'
import Otp from './pages/User/Auth/Otp'
import Volunteering from './pages/Volunteering'
import NonProfit from './pages/SpecialPrograms/NonProfit'
import AcademicRelations from './pages/SpecialPrograms/AcademicRelations'
import Membership from './pages/Membership'

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
          <Route path='/Volunteer' element={<Volunteering/>}/>
          <Route path='/non-profit' element={<NonProfit/>}/>
          <Route path='/academic-relations' element={<AcademicRelations/>}/>
          <Route path='/membership' element={<Membership/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
