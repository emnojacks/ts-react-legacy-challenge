import React from 'react';

type DisplayWeatherProps = {
    temperature: number,
    description: string,
    humidity: number
}


const DisplayWeather=(props:DisplayWeatherProps)=>{
        return (
            <div>
                <h1>Local Weather Conditions </h1>
                <p>The Weather in your area is</p>
                 Temperature:   {props.temperature} Kelvins <br></br>
                Humidity:  {props.humidity}%<br></br>
                Conditions: {props.description}<br></br>
            </div> 
        );
    }

export default DisplayWeather;