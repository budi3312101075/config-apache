import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Laptop = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header
        Judul="Service Laptop"
        gambar="https://blogs.powercode.id/wp-content/uploads/2023/08/servis-laptop-rusak-4.webp"
      />

      <div className="w-[800px] mx-auto text-justify font-bold mt-20 mb-36">
        <p>
          Jasa Komputer Online memberikan layanan jasa service komputer dan
          maintenance komputer dengan dukungan staff terlatih dan professional
          dibidangnya. Kami siap membantu Anda untuk jasa ini baik dari pribadi,
          kantor, warnet, toko, sekolah, yayasan dan lainnya.
        </p>

        <h1 className="mt-7">
          Beberapa problem kumputer yang bisa kami tangani yaitu:
        </h1>
        <ul className="list-disc ml-6 mb-4">
          <li>Tidak bisa loading Windows (Crash)</li>
          <li>Komputer mengeluarkan bunyi beep secara terus menerus</li>
          <li>Lupa password windows</li>
          <li>Kinerja komputer menjadi lambat</li>
          <li>Komputer sering hang</li>
          <li>Windows corrupt / blue screen</li>
          <li>Komputer tiba-tiba restart sendiri</li>
          <li>Komputer terkena virus (Basmi Virus/Perbaikan System)</li>
          <li>Aplikasi tidak bisa digunakan sebagaimana mestinya</li>
          <li>Service hardware/Sparepart Komputer/Upgrade</li>
          <li>Backup data & Recovery Data</li>
          <li>Dan lain-lain.</li>
        </ul>

        <p>
          Tanyakan/konsultasikan semua permasalahan yang terjadi pada komputer
          anda, kami insyaallah siap memberikan solusi terbaik
        </p>
        <p className="mt-5">
          untuk info lebih lanjut silahkan
          <span className="text-blue-700 underline"> hubungi kami</span>
          <br />
          NB:Free/Gratis Konsultasi
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Laptop;
