import React, {useState} from 'react';
import RecipeDetails from "./RecipeDetails";
import NutritionDetails from "./NutritionDetails";
const Recipe = ({recipe}) => {
    const [showi, setShowi] = useState(false);
    const [showc, setShowc] = useState(false);
    const {label, image, url, ingredients, digest} = recipe.recipe;
    return (
        <div>
            <div className="recipe">
                <h2>{label}</h2>
                <img src={image} alt={label}/>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    Visit Site
                </a>
                <button onClick={() => setShowi(!showi)}>Ingredients</button>
                {showi && <RecipeDetails ingredients={ingredients}/>}
                <br/>
                <button onClick={() => setShowc(!showc)}>Nutrition Info</button>
                {showc && <NutritionDetails digest={digest}/>}
            </div>
        </div>
    )
}

export default Recipe
