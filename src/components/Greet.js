import React from "react"

// function Greet(){
//     return <h1>Welcome Valgen Kishor</h1>
// }
const Greet = props => {
    const {name, nikName} = props
    return(
        <div>
            <h1> Hello {name} a.k.a {nikName} </h1>
        </div>
    ) 
}

export default Greet
