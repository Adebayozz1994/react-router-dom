import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
