import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [flags, setFlags] =useState([]);

  const handleVisitedCountries = (country) =>{
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const handleFlags = (flag) =>{
    console.log('falg added');
    const newFlags = [...flags, flag];
    setFlags(newFlags);
  }

  useEffect(()=>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())
   .then(data => setCountries(data));
  }, [])
  return (
    <div>
        <h3>Coutries: {countries.length}</h3>      
        <div>
          <h4>Visited Countris List: {visitedCountries.length} </h4>
          <ol>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
           }
          </ol>
           
        </div>
        <div>
            {
              flags.map(flag => <img src={flag}></img>)
            }
           </div>
        <div className="country-container">
        {
        countries.map(country => <Country
           key={country.cca3}
           handleVisitedCountries ={handleVisitedCountries}
           handleFlags = {handleFlags}
           country={country}></Country>)
       }
        </div>
       
    </div>
  );
};

export default Countries;