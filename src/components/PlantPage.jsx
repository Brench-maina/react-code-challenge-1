import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
    const [plants,setPlants] = useState([]);
    const [search,setSearch] =useState("");

    useEffect(() => {
        fetch("http://localhost:6001/plants")
        .then((res) =>res.json())
        .then((data) => setPlants(data))
        .catch((err) => console.error("Failed to fetch plants:",err));
    }, []);

    const handleAddPlant = (newPlant) => {
        fetch("http://localhost:6001/plants", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newPlant),
        })
        .then((res) => res.json())
        .then((savedPlant) => {
            setPlants([...plants, savedPlant]);
        })
        .catch((err) => console.error("Failed to add plant:", err))
        };

        const handleToggleSoldOut = (id,newStatus) =>{
            fetch(`http://localhost:6001/plants/${id}`,{
             method: "PATCH",
             headers: {
                "Content-Type":"application/json",
                 },
                 body: JSON.stringify({ soldOut: newStatus}),   
            })
            .then((res) =>res.json())
            .then((updatedPlant) => {
                const updatedPlants = plants.map((plant) =>
                    plant.id ===id ? updatedPlant : plant
                );
                setPlants(updatedPlants);
            })
        }

        const handleDeletePlant = (id) => {
            fetch(`http://localhost:6001/plants/${id}`, {
                method: "DELETE"
            })
            .then(() => {
                const updatePlants = plants.filter((plant) => plant.id !== id);
                setPlants(updatePlants);
            })
            .catch((err) => console.error("Failed to delete plant,",err));
           };

           const filteredPlants = plants.filter((plant) => 
         plant.name && plant.name.toLowerCase().includes(search.toLowerCase())
        );
    return(
    <main>
        <NewPlantForm onAddPlant={handleAddPlant} />
        <Search search={search} onSearchChange={setSearch} />
        <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} 
        onDeletePlant={handleDeletePlant} />
    </main>
    );
}
export default PlantPage;