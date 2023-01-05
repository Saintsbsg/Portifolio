import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
