import React from 'react';
import DisplayWeather from './DisplayWeather'

let APIKey = "71af9c2805889d9aa3f3ac839c94ca11";

type WeatherFetchProps = {
    
}
 
type WeatherFetchState = {
    loaded: boolean;
    weather: object;
    position: object;
    lat: number;
    lon: number
}
 
class FetchWeather extends React.Component<WeatherFetchProps, WeatherFetchState> {
    constructor(props: WeatherFetchProps) {
        super(props)
        this.state = {
            loaded: false,
            weather: {},
            position: {},
            lat: 0,
            lon: 0
        }
    }
    
    async componentDidMount() {
        if ('geolocation' in navigator) {
            console.log('geolocation available');
            
              navigator.geolocation.getCurrentPosition((position) => {
                  this.setState({
                    position: position,
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
                console.log(
                    `lat: ${this.state.lat} long: ${this.state.lon}`
                )
                  this.fetchWeatherData(position)
              })
                  ;
        }
        else {
        window.alert("Finding local weather requires accessing your current location")
        }
    }
    
    async fetchWeatherData(position: object) {
        console.log('the component did update');
        try {
        let URL = `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${APIKey}`
        console.log(URL);
            const weatherresponse = fetch(URL);
            console.log(weatherresponse);
            const weatherjson = await weatherresponse;
            console.log(weatherjson);
       this.setState({
           loaded: true,
           weather: weatherjson
       })
            console.log(`The Weather Data is: ${this.state.weather}`);
        } catch (error) {
            console.log(error);
        };
    };
    
    render() { 
        return (  
        <div>
                <h1>
                Current Location
                </h1>
                <p>
                    Your current location is <br></br>
                    &nbsp;
                    {this.state.lat} 
&nbsp; latitude <br></br>
                &nbsp;
                    {this.state.lon}
                    &nbsp;longitude
                </p>
                <DisplayWeather />
            </div>

);
    }
}
 
export default FetchWeather;