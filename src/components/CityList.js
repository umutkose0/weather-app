import React from 'react'
import City from './City'
function CityList({cities,updateLocation}) {

  return (
    <div className="cities">
        {cities.map((city)=>{
            return <City updateLocation={updateLocation} key={city.id} city={city}/>
        })}
    </div>
  )
}

export default CityList