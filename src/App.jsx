import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tentang from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Laptop from "./Pages/Laptop";
import Pengadaan from "./Pages/Pengadaan";
import Instalasi from "./Pages/Instalasi";
import Hubungi from "./Pages/Hubungi";
import Informasi from "./Pages/Informasi";

const App = () => {
  return (
    <div>
      {/* this */}
      <BrowserRouter basename="/react-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TentangKami" element={<Tentang />}></Route>
          <Route path="/LayananKami" element={<Layanan />}></Route>
          <Route path="/ServiceLaptop" element={<Laptop />}></Route>
          <Route path="/Pengadaan" element={<Pengadaan />}></Route>
          <Route path="/Instalasi" element={<Instalasi />}></Route>
          <Route path="/HubungiKami" element={<Hubungi />}></Route>
          <Route path="/Informasi" element={<Informasi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
