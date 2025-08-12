import './App.css';
import Home from "./pages/home";
import Fav from "./pages/favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className='main-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Fav />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
