import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="h-20 bg-[#888] flex items-center pl-20">
        <h1 className="text-white text-xl">{props.Judul}</h1>
      </div>
      <img
        className="mx-auto w-[500px] mt-5"
        src={props.gambar}
        // src="https://www.its.ac.id/mt/wp-content/uploads/sites/48/2018/03/visi-misi-dan-moto.png"
        alt="gambar"
      />
    </div>
  );
};

export default Header;
