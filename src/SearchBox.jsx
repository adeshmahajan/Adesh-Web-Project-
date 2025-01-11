import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({ updateinfo }) {
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9fad10d8b2048021c936ff14c4ce2222";
   
    let getWetherInfo = async() => {
        try {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       let result = {
        city : city,
        temp : jsonResponse.main.temp,
        temMin : jsonResponse.main.temp_min,
        temMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
    }catch(error){
        throw error;
    }

    }
    
    let handelChange = (evt) => {
        setCity(evt.target.value)
    };

    let handelSubmit= async(evt) => {
        try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWetherInfo();
        updateinfo (newInfo);
        }catch(error){
        setError(true);
        }
    }

    return(
        <div className='SearchBox'>
           
            <form onSubmit={handelSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined"
                 required 
                 value={city} 
                 onChange={handelChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' > Search </Button>
                {error && <p style={{color: "red"}}>No Such place exist</p>}
            </form>
        </div>
    )
}