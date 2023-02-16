import React, { useState } from 'react';
import Events from './Events';
import Performers from './Performers';
import Venues from './Venues';

const BASE_URL = 'https://mobile-staging.gametime.co/v1/search?q='


const Search = () => {
    // search state
    const [searchTerm, setSearchTerm] = useState('');

    // result from the api
    const [results, setResults] = useState(null);

    // api call
    const getResults = async (value) => {
        if (value==='') return
        const data = await (await fetch(`${BASE_URL}${value}`)).json();
        setResults(data);
    }

    // input change
    const handleChange = (event) => {
        // reset searchterm
        if(event.target.value === '') {
            setResults(null);
        }
        // if new letter is typed, call api
        else {
            getResults(event.target.value);
        }
        //update input value
        setSearchTerm(event.target.value);

    };
    
  return (
    <div className='search-container'>
        <div className='searchbar-input-container'>
            <input type="text" 
                className='searchbar-input' 
                placeholder='Start typing to search'
                value={searchTerm} 
                onChange={handleChange} />
        </div>

        {/* If api call was correct, results will have data and we can show it */}
        {results ? (
            <div className='results-container'>
                {/* requirements mentioned only 3 elements per entity, so we slice the arrays inside of results*/}
                <Events events={results?.events?.slice(0,3)} />
                <Performers performers={results?.performers?.slice(0,3)} />
                <Venues venues={results?.venues?.slice(0,3)} />
            </div>
        ) : null}
        
    </div>
  )
}

export default Search;