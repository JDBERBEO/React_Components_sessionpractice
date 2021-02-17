import React, { useState, useEffect } from 'react'
import { CardView } from './CardView'
import { testimonials as initialState } from '../../Database'

export const CardContainer = () => {

    const [state, setState] = useState(0)

    const { id, name, url, testimonials } = initialState[state]
 
   
    const alante = () =>{
        if (state === 4) {
            setState(0)
        } else {
            setState(state + 1)
        }

    }
    const atras = () =>{
        if (state === 0) {
            setState(4)
        } else {
            setState(state - 1)
        }
    }

    return (
        <div>
            <CardView alante={alante} atras={atras} name={name}
            url={url} testimonials={testimonials}/>
        </div>
    )
}