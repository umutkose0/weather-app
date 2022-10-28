const WeatherStatus=({status,temp})=>{
//id,main,description,icon
return(
<div className="w-status">
    <div className="w-title">
    <img className="img" src={`https://openweathermap.org/img/wn/${status.icon}@2x.png`} />
    {Math.round(temp)}°C
    </div>
    <p className="w-text">{status.description}</p>
</div>
)
}
export default WeatherStatus;