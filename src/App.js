import './App.css';
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  //const location = useLocation();
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
