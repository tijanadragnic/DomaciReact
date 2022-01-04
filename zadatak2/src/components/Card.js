import React from 'react';
import '../Card.css'
function Card(props) {




    return (

        <div className="card" >
            <img className='frontSide' src={props.flower} alt='Flower' onClick={props.flip} />
            <img className='backSide' src={props.backImg} alt='Flower' onClick={props.flip} style={{ zIndex: props.index }} data-id={props.id} />
        </div>

    );
}

export default Card;