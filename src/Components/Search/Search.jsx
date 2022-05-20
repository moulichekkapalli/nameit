import React from 'react';
import './Search.css'


const Search = (props) => {
    return (
       <div className="search-container">
           <input onChange={(event)=>props.oninputchange(event.target.value)} placeholder="enter the search keyword" className="search-input"/>
       </div>
    )

}
 
export default Search;

