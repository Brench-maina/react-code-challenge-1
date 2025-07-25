import React, { useState} from "react";

function NewPlantForm({ onAddPlant})  {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPlant ={
            name,
            image,
            price,
            SoldOut: false,
        };

        onAddPlant(newPlant);

        setName("");
        setImage("");
        setPrice("");
    };

    return(
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Plant name" value={name}  onChange={(e) => setName(e.target.value)}/>
              <input type="text" name="image" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}/>
              <input type="Number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
              <button type="submit">Add Plant</button>
            </form>
        </div>
    );
}

export default NewPlantForm;