import { Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Layout from './components/layout';
import ContactDetails from './components/ContactDetails';
import ApiBackend from './components/ApiBackend';
import Error from './components/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      {/* <Navbar/> */}
      <Routes>
        <Route  element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Navigate to ="/" />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/details/:id' element={<ContactDetails />} />
          <Route path='/ApiBackend' element={<ApiBackend/>} />
          <Route path='*' element={<Error/>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
