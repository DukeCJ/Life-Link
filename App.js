// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Auth from "./Components/Auth/Auth";
import AmbulanceDetails from "./Components/AmbulanceDetails/AmbulanceDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ambulance/:id" element={<AmbulanceDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
