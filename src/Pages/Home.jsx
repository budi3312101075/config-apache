import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Galeri from "../Components/Galeri";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-cover h-screen w-screen flex items-center justify-center"
        style={{ backgroundImage: "url('./Motherboard.jpg')" }}
      >
        <h1 className="text-white text-3xl text-center w-[850px] ">
          Kami mengutamakan kepuasan pelanggan. kami akan memberikan layanan
          yang ramah dan komunikatif dengan harga yang terjangkau
        </h1>
      </div>

      <div className="h-52 bg-blue-500 flex justify-between items-center px-32">
        <p className="text-white w-[850px] text-xl capitalize">
          selamat datang diwebsite kami
          <br /> adalah salah satu penyedia service komputer dan laptop, rakit
          komputer, <br /> install windows dekstop & server, install linux
          dekstop & server, jaringan lan, DLL. <br /> yang telah berpengalaman
          melayani klien-klien kami diseluruh kawasan batam sekitarnya.
          BERGARANSI!!!
        </p>
        <button className="bg-slate-200 w-40 h-10 rounded-lg font-semibold">
          Selengkapnya
        </button>
      </div>
      <div className="h-[75%] ">
        <h1 className="text-center text-4xl font-bold mt-5">
          Kami Siap melayani
        </h1>
        <div className="flex justify-evenly mt-10 pb-20">
          <Card
            gambar="https://img.icons8.com/pastel-glyph/64/FA5252/laptop--v1.png"
            judul="Service Komputer"
            isi="layanan jasa service laptop harus cepat dan tepat. Laptop yang rusak
            harus segera diperbaiki agar dapat digunakan kembali"
          />
          <Card
            isi="Kami menyediakan untuk jasa pengadaan yang ada di jasa komputer online seperti, aksesoris komputer laptop dan rakit komputer"
            gambar="./truck.png"
            judul="Jasa pengadaan"
          />
          <Card
            gambar="https://img.icons8.com/wired/64/FA5252/phone.png"
            judul="Konsultasi"
            isi="Kami menyediakan untuk jasa pengadaan yang ada di jasa komputer online seperti, aksesoris komputer laptop dan rakit komputer"
          />
        </div>
      </div>
      <div className="h-[75%] bg-gray-100 p-20">
        <h1 className="text-2xl font-bold ml-16">Galeri Service</h1>
        <div className="flex justify-evenly gap-32 mt-10">
          <Galeri
            gambar="https://cdn.eraspace.com/pub/media/mageplaza/blog/post/1/6/1633072326856-cara-merakit-pc.jpeg"
            title="Service Komputer"
          />
          <Galeri
            gambar="https://i0.wp.com/lamdaconnect.com/wp-content/uploads/2019/06/Kabel-Jaringan-Termurah.png"
            title="Instalasi Jaringan LAN"
          />
          <Galeri
            gambar="https://fixitindonesia.com/wp-content/uploads/2021/12/Jasa-Service-Laptop-Di-semarang.png"
            title="Service Laptop"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
