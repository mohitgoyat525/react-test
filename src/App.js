
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import About from './view/About';
import SimpleSlider from './components/home/Slider';
import Form from './view/Form';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element= {<Form/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
