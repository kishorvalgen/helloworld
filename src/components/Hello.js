import React from 'react'

const Hello = () => {
/*     return(
        <div>
            <h1> Hello Kishor Valgen </h1>
        </div>
    ) */
    return React.createElement('div', {id: 'hello', className:'dummy-class'}, React.createElement('h1', null, 'Hello Kishor'))
}

export default Hello