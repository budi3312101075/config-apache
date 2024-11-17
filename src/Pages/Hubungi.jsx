import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Hubungi = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-20 bg-[#888] flex items-center pl-20">
        <h1 className="text-white text-xl">HUBUNGI KAMI</h1>
      </div>
      <div className="h-screen pt-16 pl-28 flex flex-col gap-8 text-xl font-semibold">
        <h1>
          <span className="font-bold">Office :</span> JL. Prof. Dr Hamka No.1{" "}
          <br />
          Kel. Kibing, Kec. Batuaji <br /> Kota Batam, 29422
        </h1>

        <h1>
          <span className="font-bold">Phone / Whatshap:</span> 0778 - 365909 /
          081234567890
        </h1>

        <h1>E-mail : mail@shinkansen. sch.id</h1>

        <Link to="https://wa.me/+628117001616" target="blank">
          <button className="flex items-center p-5 bg-green-600 w-60 h-16 rounded-lg text-white text-2xl font-extrabold ">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="whatsapp--v1"
            />
            Chat Via WA
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Hubungi;
