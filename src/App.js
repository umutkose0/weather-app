import axios from "axios"
import {useEffect, useState} from "react"
import { usePosition } from 'use-position'
import Weather from "./components/Weather"
import CityList from "./components/CityList"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import "./App.css"
function App(){
    const [weather,setWeather]=useState([]);
    const [cities,setCities]=useState([]);
    const [loading,setLoading]=useState(true);
    const {latitude,longitude} = usePosition();
    const [modal,setModal]=useState(false);
    const getWeatherData=async(lat,lon)=>{
       setLoading(true)
        const key=process.env.REACT_APP_API_KEY
        const lang=navigator.language.substr(0,2);
        try{
            const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
            //data.then(()=>{setLoading(false)})
            setWeather(data)
            console.log(data)
        }
        catch(e){
            console.log(e);
            alert("hata");
        }
        setLoading(false)
        //console.log("loaded")
    }
    const getCities=async()=>{
        try{
            const {data}=await axios.get(`cities.json`)
            setCities(data)
            console.log(data)
        }
        catch(e){
            console.log(e);
            alert("hata");
        }
    }
    const updateLocation=(lat,lon)=>{
        getWeatherData(lat,lon)
        setModal(false)
    }
    useEffect(()=>{
        latitude && longitude && getWeatherData(latitude,longitude)
        getCities()
    },[latitude,longitude])
    
    return(
        <>
    {loading? <div className="weather">"(By Location)Loading..."</div>:
    (
        <>
        <Weather w={weather}/>
        </>
    )}
    <div className="choose-city">
        <h1 className="choose-text">Başka bir şehir seç</h1>
        <div className="city-button" onClick={()=>{setModal(true)}}>
            {weather.name}
        </div>
    </div>
    <PureModal
        header="Şehirler"
        footer={
            <div>
              
            </div>
          }
        isOpen={modal}
        closeButton="Kapat"
        closeButtonPosition="bottom"
        onClose={() => {
            setModal(false);
            return true;
        }}
        >
        <CityList cities={cities} updateLocation={updateLocation}/>
    </PureModal>
    </>

    )
}
export default App;