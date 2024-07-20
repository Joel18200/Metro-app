import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Faq from './components/Faq';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;