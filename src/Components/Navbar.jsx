import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="h-14 w-screen bg-black text-white flex items-center justify-between px-20 ">
      <h1 className="font-bold text-2xl">JKO</h1>
      <div className="flex gap-5 text-xs uppercase">
        <Link to="/">Home</Link>
        <Link to="/TentangKami">Tentang Kami</Link>
        <div className="relative inline-block text-left">
          <p onMouseEnter={handleDropDown}>Layanan Kami</p>
          {dropDown && (
            <div className="origin-top-right absolute -right-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link
                  to="/LayananKami"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  service Komputer
                </Link>
                <Link
                  to="/ServiceLaptop"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  service Laptop
                </Link>
                <Link
                  to="/Pengadaan"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pengadaan & Perakitan
                </Link>
                <Link
                  to="/Instalasi"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Instalasi Windows & Linux
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/Informasi">Informasi</Link>
        <Link to="/HubungiKami">Hubungi kami</Link>
      </div>
    </div>
  );
};

export default Navbar;
