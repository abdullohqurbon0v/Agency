import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full pt-20 min-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
