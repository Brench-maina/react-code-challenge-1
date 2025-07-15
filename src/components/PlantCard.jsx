import REACT,  { useState } from "react";

function PlantCard({ id, name, image, price, soldOut, onToggleSoldOut, onDeletePlant }) {
    const [inStock, setInStock]=useState(true);
    return (
       <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={() => onToggleSoldOut(id, false)}>Out of Stock</button>
         ) : (
        <button className="primary" onClick={() =>onToggleSoldOut(id, true)}>In Stock</button>
      )}
       <button onClick={() => onDeletePlant(id)}>Delete</button>
    </li>
  ); 
}

export default PlantCard;