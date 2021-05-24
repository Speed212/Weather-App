import React,{useEffect,useState} from 'react'
import axios from "axios";

function App() {

    const [weather, setWeather] = useState(null)
    const [input, setInput] = useState('')

    useEffect(() =>{
        axios.get('http://api.weatherapi.com/v1/current.json?key=c48f289c21554487bee92730211805&q=Urgench&aqi=no')
            .then(data => setWeather(data))
    }, [])

    function inputHandler(event){
        setInput(event.target.value)
    }
    function searchHandler(){
        axios.get(`http://api.weatherapi.com/v1/current.json?key=c48f289c21554487bee92730211805&q=${input}&aqi=no`)
            .then(data => setWeather(data))
    }

  return (
    <div className="App">

        {weather &&(
            <div className='loc'>
                <div className='location'>
                    <div className='first-location'>
                        <h1 className='first'>{weather.data.location.name}</h1>
                        <h1 className='second'>{weather.data.current.temp_c} ºC</h1>
                    </div>
                    <div className='second-location'>
                        <img src={weather.data.current.condition.icon}/>
                        <h2>{weather.data.current.condition.text}</h2>
                    </div>
                </div>
            </div>
        )}
        <div className='buttons'>
            <input type="text" onChange={inputHandler}/>
            <button onClick={searchHandler}>OK</button>
        </div>
    </div>
  );
}

export default App;
