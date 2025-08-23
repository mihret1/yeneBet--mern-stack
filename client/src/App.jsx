import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import AllHouses from './pages/AllHouse'
import Towns from './pages/Towns'
import Type from './pages/Type'
import Rent from './pages/Rent' 
import Sale from './pages/Sale'

const App=()=>{
  return(
    <BrowserRouter>
    {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />} />
          <Route path='/allhouse' element={<AllHouses />}/>
          <Route path='/town' element={<Towns />}/>
          <Route path='/type' element={<Type />}/>
          <Route path='/sale' element={<Sale />}/>
          <Route path='/rent' element={<Rent />}/>

        </Routes>
    <Footer />    
    </BrowserRouter>
  )
}

export default App