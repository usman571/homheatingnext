import React from "react";

const Card = ({ data }) => {
  const { title, description, img } = data;

  return (
    <div className="max-w-[350px] bg-white rounded-md shadow-md mx-auto my-4 p-3 border border-gray-100 h-fit transform transition-transform hover:scale-105">
      <img
        className="w-full h-48 object-cover object-center"
        src={img}
        alt={title}
      />
      <div className="p-4">
        <h1 className="text-xs font-bold mb-2">{title}</h1>
        <p className="text-black font-normal text-xs line-clamp-2">{description}</p>
        <div className="mt-4">
          <a href="#" className="text-black text-xs font-bold">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
