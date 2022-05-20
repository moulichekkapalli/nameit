 import React from 'react'
 import './Results.css'
 import Namecard from '../Namecard/Namecard'

 const Results=({suggestednames})=>{

    const namesjsx=suggestednames.map((suggestedname)=>{
        return <Namecard key={suggestedname} suggestedname= {suggestedname}/>
    })

    return(
      <div className='results-container'>  
        <p>{namesjsx}</p>
      </div>
    )
 }

 export default Results;