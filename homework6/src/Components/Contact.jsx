import React from 'react'
import { Link } from 'react-router-dom';
function Contact(){
  return (
    <>
      <div style={{display: "flex", flexDirection: "col" }}>
        <div style={{display: 'inline-block', border: "2px solid black", padding: "1em", borderRadius: "0em 2em", boxShadow: ".2em .2em black"}}>
          <form >
            <h2 style={{display: "inline-block", padding: ".8em", border: "2px solid black", backgroundColor: "red", borderRadius: "2em 0em", fontFamily: "fantasy"}}>Contact Information</h2>
            <div>
              <input placeholder="FirstName" style={{ backgroundColor: "white", color: "black", padding: "1em 0em", margin: "1em", textAlign: "center", width: "20em", borderRadius: "2em"}}/>   
            </div>
            <div>   
              <input placeholder='LastName' style={{ backgroundColor: "white", color: "black", padding: "1em 0em", margin: "1em", textAlign: "center", width: "20em", borderRadius: "2em"}}/>   
            </div>
            <div>
              <input placeholder='PhoneNumber' style={{ backgroundColor: "white", color: "black", padding: "1em 0em", margin: "1em", textAlign: "center", width: "20em", borderRadius: "2em"}}/>   
            </div>
            <div>
              <input placeholder='Email' style={{ backgroundColor: "white", color: "black", padding: "1em 0em", margin: "1em", textAlign: "center", width: "20em", borderRadius: "2em"}}/>   
            </div>
            <div style={{borderBottom: "1px solid black", marginTop: ".8em", marginBottom: ".8em"}}>
            </div>
            <button style={{  borderRadius: "0em 2em", padding: ".5em 2em", backgroundColor: "red" ,color: "white"}}>Submit</button>
          </form>    
        </div>
      </div>
      <div>
        <button>
          <Link to="/">Home</Link>
        </button>        
      </div>
        
    </>
  )
}

export default Contact