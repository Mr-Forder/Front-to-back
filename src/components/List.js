import React from "react";
import ItemCard from "./ItemCard";

const List = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data to show.</p>;
  }

  return (
    <div className="feedback-list">
      {data.map((item, i) => (
        <ItemCard
          rating={item.rating}
          name={item.name}
          message={item.message}
          key={i}
          id={i}
        />
      ))}
    </div>
  );
};

export default List;
