import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Layout from './components/layout';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route  element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/details/:id' element={<ContactDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
