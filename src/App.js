import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Content from './pages/Content';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/menu' element={<Menu />} />          
          <Route path='/about' element={<About />} />          
          <Route path='/content' element={<Content />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
