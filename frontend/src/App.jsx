import './App.css';
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
