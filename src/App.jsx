import { Navigate, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import "./index.css";
import { Footer } from "./components/Footer";
import { DAM } from "./pages/DAM";
import { DAW } from "./pages/DAW";
import { ASIR } from "./pages/ASIR";
import { DAMmaterial } from "./pages/DAMmaterial";
import { DAWmaterial } from "./pages/DAWmaterial";
import { ASIRmaterial } from "./pages/ASIRmaterial";
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers = {
  "Accept-Version": "v1",
  Authorization: "Client-ID AMdJl9M0jNqkFI9Q8wfE1DwhLk_tAyqobtxkCnX6IGc",
};

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* DAM routes */}
          <Route path="/DAM" element={<DAM />} />
          <Route path="/DAM/material" element={<DAMmaterial />} />
          {/* DAW routes */}
          <Route path="/DAW" element={<DAW />} />
          <Route path="/DAW/material" element={<DAWmaterial />} />
          {/* ASIR Routes */}
          <Route path="/ASIR" element={<ASIR />} />
          <Route path="/ASIR/material" element={<ASIRmaterial />} />
          <Route path="/material" element={<h1>Material</h1>} />
          {/* Fallback */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
