import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Tentang = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header
        Judul="Visi Misi Jasa Komputer Online"
        gambar="https://www.its.ac.id/mt/wp-content/uploads/sites/48/2018/03/visi-misi-dan-moto.png"
      />
      <div className="font-bold w-[900px] mx-auto mt-24 mb-28">
        <h1>VISI</h1>
        <p className="text-justify">
          Visi Jasa Komputer Online adalah menjadi partner IT Solutions terbaik
          dan menjadi sebuah jasa service komputer dan lainnya yang dapat
          dipercaya serta menjadi sebuah usaha yang bisa lebih dikenal luas Oleh
          masyarakat Kepulauan Riau pada umumnya.
        </p>
        <h1 className="mt-7">MISI</h1>
        <p>Misi Jasa komputer online adalah:</p>
        <ul className="list-decimal ml-6 mb-4">
          <li>
            Kualitas dalam hal pelayanan sehingga menjadi efektif dan efisien
          </li>
          <li>
            Harga yang ekonomis dengan kualitas yang baik, bagus, dan terpercaya
          </li>
          <li>Penyelesaian pekerjaan secara tepat waktu</li>
          <li>
            Bertanggung jawab terhadap segala sesuatu yang telah disepakati
            bersama
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Tentang;
