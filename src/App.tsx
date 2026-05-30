import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import KvartiryIrpen from "./pages/KvartiryIrpen";
import KvartiryBucha from "./pages/KvartiryBucha";
import KvartiryGostomel from "./pages/KvartiryGostomel";
import "./styles/bagira.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kvartiry-irpen" element={<KvartiryIrpen />} />
        <Route path="/kvartiry-bucha" element={<KvartiryBucha />} />
        <Route path="/kvartiry-gostomel" element={<KvartiryGostomel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;