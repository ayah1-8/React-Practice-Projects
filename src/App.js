import "./App.css";
import "./User.js";
import "./Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar.js";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { useState, useContext, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Ayah");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
