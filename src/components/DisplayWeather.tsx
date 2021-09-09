import React from 'react';

type DisplayWeatherProps = {
temperature: number
}

const DisplayWeather=()=>{
        return (
            <div>
                <h1>Local Weather Conditions </h1>
                <p>The Weather in your area is</p>
          {/* {this.props.temperature} */}
            </div> 
        );
    }


    
export default DisplayWeather;