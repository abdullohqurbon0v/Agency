import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <header className="h-[16vh] bg-[#110e19] z-40 overflow-hidden">
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
