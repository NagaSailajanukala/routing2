// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Profile from './components/Profile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigation';
// import Routesfile from './components/Routesfile';
function App() {
  return (
    <>
     {/* <navbar>
       <Home/>
       <Contact/>
       <Profile/>
     </navbar> */}
     
    {/* <Routesfile/> */}


   <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<><Navigation /><Home/></>}/>
      <Route path="/contact" element={<><Navigation /><Contact/></>}/>
      <Route path="/profile" element={<><Navigation /><Profile/></>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
