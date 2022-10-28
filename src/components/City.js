import React from 'react'

function City({city,updateLocation}) {
  return (
    <div className="city" onClick={()=>{updateLocation(city.latitude,city.longitude)}}><span className="city-id">{city.id}</span> {city.name}</div>
  )
}

export default City