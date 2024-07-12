import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom';
import {Homepage, About, Projects, Contact} from "./index";
// SASS
import "./global_css.scss";
import ScrollNavigator from './components/ScrollNavigator';


function App() {
  return (
    <>
    <div className='flex'>
    <Navbar />
    <ScrollNavigator />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>  
    </div>
    
     
      
    </>
  );
}

export default App;
