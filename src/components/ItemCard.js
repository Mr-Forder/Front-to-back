import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ItemCard = ({ rating, name, message, id }) => {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-name">
        <h3>{name}</h3>
      </div>
      <div className="text-display">{message}</div>
      <button className="close">
        <FaTimes
          onClick={() => {
            console.log(id);
          }}
        />
      </button>
    </div>
  );
};

export default ItemCard;
