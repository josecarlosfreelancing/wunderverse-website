import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Wunderverse from './pages/Wunderverse';
import Story from './pages/Story/Story';
import Mint from './pages/Mint';

function App() {
  return (
    <div className="App">
      {/* <Browser */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wunderverse" element={<Wunderverse />} />
          <Route path="/story" element={<Story/>} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
