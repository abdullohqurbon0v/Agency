import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="p-4 sm:p-5 pt-16 sm:pt-20">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
