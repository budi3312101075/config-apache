import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Informasi = () => {
  const [layanan, setLayanan] = useState([
    {
      id: 1,
      gambar: "./obeng.jpg",
      judul: "Servis Cepat",
      isi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
    quod quos ullam ex ea recusandae, est amet. Sint iste voluptas,
    sit eos, aliquam rerum cumque tempore laboriosam quaerat, totam
    cupiditate`,
    },
    {
      id: 2,
      gambar: "./obeng.jpg",
      judul: "Servis Cepat",
      isi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
    quod quos ullam ex ea recusandae, est amet. Sint iste voluptas,
    sit eos, aliquam rerum cumque tempore laboriosam quaerat, totam
    cupiditate`,
    },
    {
      id: 3,
      gambar: "./obeng.jpg",
      judul: "Servis Cepat",
      isi: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
    quod quos ullam ex ea recusandae, est amet. Sint iste voluptas,
    sit eos, aliquam rerum cumque tempore laboriosam quaerat, totam
    cupiditate`,
    },
  ]);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex h-screen pl-10">
        <div className="flex flex-col w-[50%] px-40 gap-5 items-center justify-center">
          <h1 className="text-[65px] font-bold text-[#6e7bda]">
            Komputer <span className="text-black">Perbaikan dan</span> Service
          </h1>
          <h1 className="text-xl text-gray-600">
            Layanan Jasa service laptop harus cepat dan tepat laptop yang rusak
            harus segera diperbaiki agar dapat digunkana kembali
          </h1>
          <div className="flex gap-5">
            <button className="w-52 h-12 bg-[#6e7bda] rounded-tl-2xl rounded-br-2xl text-white font-bold">
              Kontak Kami
            </button>
            <button className="w-52 h-12 text-[#6e7bda] border border-[#6e7bda] rounded-tl-2xl rounded-br-2xl font-bold">
              Kontak Kami
            </button>
          </div>
          <div className="flex gap-16 mt-10 mr-48">
            <div>
              {/* <div className="h-10 w-5 bottom-[65px] left-[190px] bg-orange-500 absolute z-[-1] rounded-l-full transform rotate-[40deg] " /> */}
              <h1 className="text-3xl font-bold">10,500</h1>
              <p className="text-gray-600 font-semibold mt-2">Servis Selesai</p>
            </div>
            <div>
              {/* <div className="h-10 w-5 bottom-[65px] left-[350px] bg-[#5dd1c6] absolute z-[-1] rounded-l-full transform rotate-[40deg] " /> */}
              <h1 className="text-3xl font-bold">10,500</h1>
              <p className="text-gray-600 font-semibold mt-2">
                Perbaikan Selesai
              </p>
            </div>
          </div>
        </div>
        <div className="absolute mt-5 left-[700px] bg-[#5dd1c6] h-48 w-32 rounded-t-full" />
        <div className="absolute mt-[650px] left-[1250px] bg-[#5dd1c6] w-48 h-32 rounded-r-full" />
        <img
          className="h-[700px] w-[800px] rounded-bl-[300px] z-10"
          src="./layanan.jpg"
          alt=""
        />
      </div>
      {/* ============================================================================================================ */}
      <div className="h-screen mt-7">
        <h1 className="text-4xl font-bold ml-40">Layanan Unggulan</h1>
        <div className="flex justify-between mt-8 px-40">
          {/* card */}
          {layanan.map((card) => (
            <div
              key={card.id}
              className="p-10 h-80 w-96 rounded-lg border border-black flex flex-col gap-5"
            >
              <img className="rounded-3xl h-16 w-16" src={card.gambar} alt="" />
              <h1 className="font-bold">{card.judul}</h1>
              <p>{card.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Informasi;
