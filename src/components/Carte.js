import React from 'react';

const Carte = ({film}) => {
    return (
        <div className='carte'>
            <img src={film.posterurl} alt=''/>
        </div>
    );
}

export default Carte;
