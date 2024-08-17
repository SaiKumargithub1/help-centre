import React from "react";
import Card from "./Card";
import "../styles/CardList.css";

function CardList({ cards }) {
  if (cards.length === 0) {
    return <p>No cards available</p>;
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default CardList;
