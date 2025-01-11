import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {
    const INIT_URL ="https://images.unsplash.com/photo-1647438485078-8aae74c78fe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

    const HOT_URL = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670356694351-dcfc50b7547c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                 sx={{ height: 140 }}
                 image={ info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL }
                 title="green iguana"
                 />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                  {info.city} { info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 25 ? <WbSunnyIcon from/> : <AcUnitIcon /> }
                 </Typography>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div" >
                  <p>Temperature = {info.temp}&deg;C</p> 
                  <p>Humidity = {info.humidity}</p>  
                  <p>Min Temp = {info.temMin}</p>
                  <p>Max Temp = {info.temMax}</p>
                  <p>The wether can be describe as <b>{info.weather}</b> feel like <b>{info.feelsLike}&deg;C</b></p>
            
                 </Typography>
                 </CardContent>
            </Card>
            </div>
        </div>
    )
}