import React, {useState} from 'react';
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import {v4 as uuidv4} from 'uuid';
const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const APP_ID = "df331e38";
    const APP_KEY = "099d1a1d42c819f93fe0989503859a15";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async () => {
        if(query !== ""){
            const res =  await fetch(url)
            const data = await res.json()
            if(data.more === false){
                setRecipes(data['hits'])
                return setAlert("No food with such name")
            }
            setRecipes(data['hits'])
            console.log(data)
            setQuery("");
            setAlert("");
        }
        else{
            setAlert("Please fill the form")
        }
        
    }
    const onChange = e => {
        setQuery(e.target.value);
    }
    const onSubmit =  e => {
        e.preventDefault();
        getData();
    }
    return (
        <div className="App">
            <h1>Food Searching App</h1>
            <form className= "search-form" onSubmit={onSubmit}>
                {alert !== ""  && <Alert alert={alert}/>}
                <input type="text" placeholder="Search Food" 
                autoComplete="off" onChange={onChange}
                value={query} />
                <input type="submit" value="search"/>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default App;
