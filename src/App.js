
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import About from './view/About';
import Form from './view/Form';
import TaskUse from './view/TaskUse';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form />} />
          <Route path='/Task' element={<TaskUse/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
