import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="h-96 w-72 bg-white flex flex-col border border-solid gap-7 shadow-2xl p-5">
        <img
          className="mx-auto mt-5"
          width="64"
          height="64"
          src={props.gambar}
          alt="laptop--v1"
        />
        <h1 className="text-center font-bold text-2xl">{props.judul}</h1>
        <p className="text-center">{props.isi}</p>

        <button className="bg-red-300 w-32 h-8 rounded-lg mx-auto text-white">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Card;
