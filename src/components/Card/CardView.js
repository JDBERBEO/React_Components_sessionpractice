
import './card.css'

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa'


export const CardView = ( {alante, atras, name, url, testimonials} ) => {
    console.log(name)
    

    return (<>
        <div className="container">
            <div><img src={url} className="picture" /></div>
            <div><h2>{name}</h2></div>
            <div><p>{testimonials}</p></div>
            <div>
            <FaArrowAltCircleLeft onClick={atras}/>

            <FaArrowAltCircleRight onClick={alante}/>
            </div>

        </div>
    </>
    )
}
