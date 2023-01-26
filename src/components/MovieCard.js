import React, { useState } from 'react';
import Carte from './Carte';

const MovieCard = ( {film} ) => {
    const [show, setShow] = useState(false);
    return (
        <div onClick={()=> setShow(!show)} className='card'>
            <h1>{film.name}</h1>
            <img src={film.posterurl}/>
           <h3> {film.description} </h3>
          <h4>  {film.rating}</h4>
               
              {show ? <Carte film ={film}/> : null}

             </div>



        )}



        
    


export default MovieCard;
