import {useEffect, useState} from "react";
import  axios from "axios";
import './App.css';

function App() {
  

const [weatherdata,setWeatherData]=useState({
  main:{},
  weather:[{}]

});
useEffect(()=>{
    async function getdata(){
      const Api="https://api.openweathermap.org/data/2.5/weather?&appid=0cf3d05c6cb443424f42856d18e090b3&q=Madrid,Spain&units=metric";

      try{
        let response = await axios.get(Api)
        setWeatherData(response.data)

        console.log(response.data);
        
      }catch(err){
          console.log(err);
      }
    }
getdata()
},[])



  return (
    
    <div className="home-container">
      <div className='main-container'>
        <div className='card'>
          <h1>{weatherdata.name}</h1>
          <h1>{`${Math.round(weatherdata.main.temp)}`}&deg;C</h1>
          <h1>{weatherdata.weather[0].main}</h1>
          <h6>{weatherdata.weather[0].description}</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
