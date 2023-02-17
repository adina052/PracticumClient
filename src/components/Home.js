import { useNavigate } from "react-router-dom"

export default function Home(){
    const nevigate=useNavigate();
    return(
        <div>
           <button onClick={()=>{nevigate('/Form')}}>Form</button> 
           <button onClick={()=>{nevigate('/Instructions')}}>Instructions</button>
           <p>Welcome to our form</p>
           <p>Here you need to fill your details, for instructions, click on instructions tab, click on form tab to start filling the form.</p>
           <p>Have a nice day!</p>
        </div>
    )
}