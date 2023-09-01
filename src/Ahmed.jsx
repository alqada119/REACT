import * as React from 'react'
function h11(){
    const welcome={
        name:"ahmed",
        age:'21'
    }
    return(
        
        <h1>
            Hello, my name is {welcome.ahmed}
        </h1>,
        <h1>
            I am {welcome.age} years old!
        </h1>
    )
}

export default h11;