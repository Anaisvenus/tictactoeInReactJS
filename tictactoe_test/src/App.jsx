import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          < Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
