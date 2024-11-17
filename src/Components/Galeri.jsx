import React from "react";

const Galeri = (props) => {
  return (
    <div className="h-[350px] w-72 bg-gray-200">
      <img className="h-64" src={props.gambar} alt="gambar" />
      <h1 className="text-center mt-7 font-bold">{props.title}</h1>
    </div>
  );
};

export default Galeri;
