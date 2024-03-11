import { useEffect, useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries,handleFlags}) => {
  const {name, area, flags,capital, cca3} = country;
  const [visited, setVisited] = useState(false);
   const handleVisited = () =>{
    setVisited(!visited);
   }

   

  return (
    <div className={`country ${visited && 'visited'}`}>
      <h2>name; {name?.common}</h2>
      <h3>Capital: {capital}</h3>
      <p>Area: {area}</p>
      <p><samp>Code: {cca3}</samp></p>
      <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
      
      <button onClick={() =>handleVisitedCountries(country)} style={{marginTop: "10px"}}>Mark As Visited</button>
      <br />
      <button onClick={()=>handleFlags(country.flags.png)}>Add Flags</button>
      <br />
      <img src={flags.png} alt="" />
      <br />
      {visited && 'I have visited this country'}
    </div>
  );
};

export default Country;