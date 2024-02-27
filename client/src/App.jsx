import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Auth from './pages/Auth'

const App=()=>{
  return(
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />} />
        </Routes>
    <Footer />    
    </BrowserRouter>
  )
}

export default App