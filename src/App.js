import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Pages from "./Pages/Pages";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  });
  return (
    <div className="App">
      <Navbar />
      <Pages />
      <ToastContainer style={{ zIndex: 100 }} />
    </div>
  );
}

export default App;
