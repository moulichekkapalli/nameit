import React,{useState} from 'react'
import './App.css'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Results from '../Results/Results'

const name =require('@rstacruz/startup-name-generator')
const res=name('cloud')
function App() {
    
    const [title]=useState("Name it")
    const [expanded,setexpanded]=useState(true)
    const [suggestednames,setsuggestednames]=useState([])
    const handleInputChange=(inputtext)=>{
        
        setsuggestednames(name(inputtext))
        if(inputtext.length){
            setexpanded(false) 
        }
        else{
            setexpanded(true)
            setsuggestednames([])
        }
        
    }
    return (
        
        <div>
            <Header headerexpanded={expanded} title={title} expanded={expanded}/>
            <Search oninputchange={handleInputChange} />
            <Results suggestednames={suggestednames}/>
        </div>
    )
}

export default App;