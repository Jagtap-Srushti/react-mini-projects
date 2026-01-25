import React from "react";

const Card = ({ elem, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md shadow-black/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
    >
      <img
        src={elem.download_url}
        alt={elem.author}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md p-2 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-semibold truncate">{elem.author}</p>
      </div>
    </div>
  );
};

export default Card;
