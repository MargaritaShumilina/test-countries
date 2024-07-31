import './App.css';

import {useEffect, useState} from 'react';

import {fetchCountries} from './utils/API/api';
import CountryItem from './components/CountryItem/CountryItem';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countries = await fetchCountries();
        setCountries(countries);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadCountries();
  }, []);


  return (
    <div className='countryTable'>
      { countries !== [] &&
          countries.map((item, ) => {
            return <CountryItem countryInfo={item} key={item.latlng}/>
          })
      }
    </div>
  );
}

export default App;
