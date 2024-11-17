import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Pengadaan = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-20 bg-[#888] flex items-center pl-20">
        <h1 className="text-white text-xl">Pengadaan dan perakitan Komputer</h1>
      </div>
      <div className="flex justify-center mt-5">
        <img
          className=" w-[500px] h-[400px]"
          src="https://id-static.z-dn.net/files/d14/9fb197f44f39144a0b55684ab76b211b.jpg"
          alt="Komputer"
        />
        <img
          className="w-[500px] h-[400px]"
          src="https://basobasri.files.wordpress.com/2010/02/h_1.jpg"
          alt="Laptop"
        />
      </div>
      <div className="font-bold px-44 mx-auto mt-24 mb-28 text-justify">
        <p>
          Jasa Komputer Online, kami juga menerima jasa pengadaan komputer
          rakitan baru, built up / bermerk dan Seken. Komputer sekarang ini
          merupakan bagian penting dalam kehidupan manusia baik itu untuk
          mendukung pekerjaan, fasilitas hiburan atau bisa juga sebagai pencari
          informasi di dunia maya melalui perangkat internet. Oleh karena
          kegunaan dari komputer tersebut baik perorangan/pribadi, perusahaan
          atau badan usaha baik dari Skala yang kecil maupun besar, lembaga
          pendidikan pasti membutuhkan teknologi komputer untuk mempercepat
          proses kerja mereka demi mencapai proses kerja yang maksimal.
        </p>
        <p className="mt-7">
          Anda bingung untuk menetukan komputer yang tepat untuk keperluan Anda?
          Diskusikanlah dengan kami keperluan Anda. Maka kami akan memberikan
          solusi spesifikasi komputer yang Anda perlukan.
        </p>

        <h1 className="mt-7">
          Keuntungan anda merakit komputer di Rumah Komputer :
        </h1>
        <ul className="list-decimal ml-6 mb-6">
          <li>
            Berpengalaman merakit ratusan komputer dengan berbagai keperluan
            yang berbeda, jadi kami bisa menentukan budget sehingga uang Anda
            dapat di gunakan secara maksimal.
          </li>
          <li>
            Memakai motto 3 M : Murah Meriah Mantab. Kami akan mencari
            penjual-penjual komponen yang termurah.
          </li>
          <li>Sudah termasuk Instalasi Windows & Aplikasi yang diinginkan</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Pengadaan;
