import React from 'react'
import {v4 as uuidv4} from 'uuid';

const NutritionDetails = ({digest}) => {
    return digest.map(dig => {
        return (
        <ul key={uuidv4()} className="ingredients">
            <li className="ingredient-text">
                {dig.label}&emsp;{dig.total.toFixed(2)}&nbsp;{dig.unit}
            </li>
        </ul>
        )
    });
};

export default NutritionDetails
