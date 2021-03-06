import React from 'react';
import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
        <ul key={uuidv4()} className="ingredients">
            <li className="ingredient-text">
                {ingredient.text}
            </li>
        </ul>
        )
    });
};

export default RecipeDetails
