import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut, onDeletePlant }) {
    return (
        <ul className="cards">
            {plants.map((plant,index) =>
            <PlantCard
            key={plant.id}
    id={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    soldOut={plant.soldOut} 
    onToggleSoldOut={onToggleSoldOut}
    onDeletePlant={onDeletePlant}
    />
    )}

    </ul>
    );
}

export default PlantList;