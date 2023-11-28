import React, { useState } from 'react';
import Navbar2 from '../components/NavBar2';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Design/addDishDesign.css';

export const AddDish = (props) => {
    const [dishName, setDishName] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [steps, setSteps] = useState(['']);

    // State for handling the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            // You may want to perform additional checks on the file (e.g., size, type)
            // Update the state with the selected image
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    // Function to open the file input when the "Add Image" button is clicked
    const handleSelectImageClick = () => {
        const fileInput = document.getElementById('dishImage');
        fileInput.click();
    };

    const handleAddMore = (stateSetter) => {
        stateSetter((prevState) => [...prevState, '']);
    };

    const handleRemove = (index, stateSetter) => {
        stateSetter((prevState) => {
            const updatedState = [...prevState];
            updatedState.splice(index, 1);
            return updatedState;
        });
    };

    const handleInputChange = (index, event, stateSetter) => {
        stateSetter((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = event.target.value;
            return updatedState;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gather form data and perform actions, such as API calls or state updates
        const formData = {
            dishName,
            dishDescription,
            ingredients,
            steps,
        };
        console.log(formData); // You can replace this with your actual form submission logic
    };

    return (
        <>
            <Navbar2 />
            <div className='addDish-container'>
                <div className='addDish-Title'>Add Dish</div>
                <div className='form-addDish'>
                    <div className='dishimg-holder'></div>
                    {/* Display the selected image */}
                    <img
                        src={selectedImage}
                        alt=""
                        className="dish-image"
                    />

                    {/* Input for selecting the image */}
                    <input
                        type="file"
                        id="dishImage"
                        accept="image/*"
                        name="dishImage"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />

                    {/* Button to trigger file input */}
                    <button
                        type="button"
                        className="bttn-imagedish-select"
                        onClick={handleSelectImageClick}
                    >
                        <FaPlusCircle />
                    </button>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='dishName'>Name</label>
                        <input
                            type="text"
                            id="dishName"
                            name="dishName"
                            placeholder="Dish Name"
                            value={dishName}
                            onChange={(e) => setDishName(e.target.value)}
                        />

                        <label htmlFor='dishDescription'>Description</label>
                        <input
                            type="text"
                            id="dishDescription"
                            name="dishDescription"
                            placeholder="Dish Description"
                            value={dishDescription}
                            onChange={(e) => setDishDescription(e.target.value)}
                        />

                        <label htmlFor='dishIngredients'>Ingredients</label>
                        {ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Ingredient"
                                    value={ingredient}
                                    onChange={(event) => handleInputChange(index, event, setIngredients)}
                                    style={{ width: '20vw', height: '2.5vw' }}
                                />
                                {index > 0 && (
                                    <button
                                        className='remove-ingred'
                                        onClick={() => handleRemove(index, setIngredients)}
                                    >
                                        <FaMinusCircle />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button className='add-more' onClick={() => handleAddMore(setIngredients)}>
                            Add Ingredient
                        </button>

                        <label htmlFor='dishSteps'>Steps</label>
                        {steps.map((step, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Step"
                                    value={step}
                                    onChange={(event) => handleInputChange(index, event, setSteps)}
                                    style={{ width: '20vw', height: '2.5vw' }}
                                />
                                {index > 0 && (
                                    <button
                                        className='remove-step'
                                        onClick={() => handleRemove(index, setSteps)}
                                    >
                                        <FaMinusCircle />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button className='add-more' onClick={() => handleAddMore(setSteps)}>
                            Add Step
                        </button>

                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                        <Link to="/menu"><div><button class='cancel-dish'>Cancel</button></div></Link>
                    </form>
                </div>
            </div>
        </>
    );
};
