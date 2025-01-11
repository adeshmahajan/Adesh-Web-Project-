import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [wetherInfo , setwetherInfo] = useState({
        city : 'New Delhi',
        feelsLike: 24.84,
        temp: 25.05,
        temMin: 25.05,
        temMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateinfo = (newInfo) => {
        setwetherInfo(newInfo);
    }


    return(
      <div style={{textAlign: "center"}}>
        <h2>Wether App</h2>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox info={wetherInfo}/>
       </div>
    )
}