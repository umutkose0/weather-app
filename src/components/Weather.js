import WeatherStatus from "./WeatherStatus.js"
const Weather=({w})=>{
    console.log(w)
    //w.dt
    var day=new Date().getDay();
    var days=["Pazartesi","Salı","Çarsamba","Perşembe","Cuma"];
    return(
        <>
        <div className="weather">
            <h1 className="city-head">{w.name}</h1>   
            <p>{days[day-1]}</p>
            <div>
                {w.weather.map((wr)=>{
                    return <WeatherStatus key={wr.id} status={wr} temp={w.main.temp}/>
                    })}
            </div>
        </div>
        </>
    )
}
export default Weather;