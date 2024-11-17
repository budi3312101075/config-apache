import React from "react";

const Footer = () => {
  return (
    <div className="h-80 bg-black text-white px-16 pt-10 pb-80 flex justify-between">
      <div className="w-96">
        <h1 className="font-bold">Tentang Kami</h1>
        <p className="text-justify ">
          Jasa Komputer Online adalah sebuah jasa di bidang IT Solutions
          meliputi jasa service komputer, netbook dan laptop, install ulang
          windows dan linux, install windows server dan maintenance, install
          ulang aplikasi dan games, pengadaan dan perakitan komputer, jasa
          instalasi jaringan LAN dan mikrotik, backup dan recovery data,
          maintenance komputer, maintenance netbook dan laptop, Jasa instalasi
          Warnet, dan Jasa instalasi CCTV. Kami siap membantu Anda untuk jasa
          diatas baik dari pribadi, kantor, warnet, toko, sekolah, yayasan dan
          lainnya.
        </p>
      </div>
      <div>
        <h1 className="font-bold mb-3">Layanan Kami</h1>
        <p>Jasa service Komputer</p>
        <p>Jasa service Notebook & Laptop</p>
        <p>Jasa Install ulang Windows & Linux</p>
        <p>Jasa Rental Laptop & Komputer</p>
        <p>Jasa Pengadaan & perakitan komputer</p>
        <p>Jasa install jaringan LAN & Mikrotik</p>
        <p>Jasa Maintenance komputer, Laptop & Notebook</p>
      </div>
      <div>
        <h1 className="font-bold">Hubungi Kami</h1>
        <p>Jasa Komputer Online | IT Solutions</p>
        <p>Tiban koperasi no.76 </p>
        <p>Kota Batam Kepri</p>
        <p>Phone / Whatshapp: 08117001616</p>
      </div>
    </div>
  );
};

export default Footer;
