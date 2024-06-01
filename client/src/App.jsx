import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Potlitcs from './pages/Potlitcs';
import Tech from './pages/Tech';
import Entertainment from './pages/Entertainment';
import Travel from './pages/Travel';
import Sports from './pages/Sports';
import Signup from './pages/Signup';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/politics" element={<Potlitcs/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/travel" element={<Travel/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
