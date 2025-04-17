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
import NotFound from './pages/NotFound'
import RecentVideos from './pages/User/RecentVideos'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ='/special Program/:id' element={<SpecialProgram/>}/>
          <Route path ='/special Program/:name/:id' element={<EventDetails/>}/>
          <Route path='/certifications/:id' element={<Certifications/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path= 'profile/Videos/:id' element={<RecentVideos/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/volunteer' element={<Volunteering/>}/>
          <Route path='/non-profit' element={<NonProfit/>}/>
          <Route path='/academic-relations' element={<AcademicRelations/>}/>
          <Route path='/membership' element={<Membership/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
