import React from 'react'
import './Namecard.css'

const Namecard=({suggestedname})=>{

return(
<div className="result-name-card">
    <p className="result-name">{suggestedname}</p>
</div>
)
}

export default Namecard;