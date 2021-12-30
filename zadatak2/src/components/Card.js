import React from 'react';
import '../Card.css'
function Card(props) {




    return (

        <div className="card" >
            <img src={props.backImg} alt='Flower' data-flower={props.flower} onClick={props.flip} />
        </div>

    );
}

export default Card;