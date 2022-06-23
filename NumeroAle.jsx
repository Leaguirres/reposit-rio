import React from 'react'

export default (props)=> {

    const min = props.min
    const max = props.max

    const sorteado = parseInt(Math.random() * (max-mix)) + min; //gerar números aleátorios
    
    
    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo:</strong> {min} </p>
            <p><strong>Valor Máximo:</strong> {max} </p>
            <p><strong>Valor Sorteado:</strong> {sorteado} </p>
        </div>
    )
}