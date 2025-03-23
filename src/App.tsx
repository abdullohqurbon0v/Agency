import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover opacity-70 z-0 blur-md"
      >
        <source src="/4408477.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="relative h-[16vh] bg-[#110e19] z-40 overflow-hidden">
        <Navbar />
      </header>

      <Routes>
        <Route index element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
