import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Instalasi = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div>
        <div className="h-20 bg-[#888888] flex items-center pl-20">
          <h1 className="text-white text-xl">Instalasi Windows & Linux</h1>
        </div>
        <div className="flex justify-center mt-5">
          <img
            className=" w-[500px]"
            src="https://e0.pxfuel.com/wallpapers/97/875/desktop-wallpaper-windows-10-blue-neon-logo-modern-operating-system-emblem-logo-windows-for-with-resolution-high-quality.jpg"
            alt="Windows"
          />
          <img
            className="w-[500px]"
            src="https://miro.medium.com/v2/1*M8WP_RFKNaqRLSujd9Ik3w.png"
            alt="Linux"
          />
        </div>
        <div className="font-bold w-[900px] mx-auto mt-24 mb-28">
          <p>
            Jasa Komputer Online, kami juga menerima jasa install ulang windows.
            Jika Anda memiliki masalah pada system operasi Windows Anda,
            seperti: crash atau hang dan beberapa driver tidak bisa bekerjaj
            tidak terhubung dengan internet sehingga komputer / laptop / netbook
            terasa menjadi berat atau lambat dan terkena virus dan sebagainya.
          </p>
          <p className="mt-7">
            Dan jika Anda seorang yang baru berkecimpung atau baru belajar di
            dunia IT, dan bingung untuk mencari jasa instalasi Linux, maka
            disini kami menyediakan juga jasa untuk install ulang system operasi
            Linux.
          </p>

          <h1 className="mt-7">
            Daftar layanan jasa install system operasi komputer / laptop /
            netboook :
          </h1>
          <ul className="list-disc ml-6 mb-6">
            <li>Jasa Install WINDOWS ( Versi : 7, 8.1, 10, 11 )</li>
            <li>Jasa Install LINUX ( Versi : Ubuntu, Mint, Kali dll)</li>
            <li>Jasa Install Dual Boot WINDOWS dan LINUX</li>
          </ul>
          <p>
            untuk info lebih lanjut silahkan{" "}
            <span className="text-blue-800 underline">Hubungi Kami</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instalasi;
