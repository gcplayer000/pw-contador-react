import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                // O parametro event é o evento da tag (input nesse caso)
                //O sinal de + converter o value (que por padrão é string) para number
                onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
)