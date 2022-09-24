import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = ({cosmetic}) => {

    const addToCart = (id) => {
        addToDb(id)
    };
    

    return (
        <div style={{ border: '2px solid green', margin: '20px' }} key={cosmetic.id}>
            <h2>{cosmetic.name} Gender: {cosmetic.gender}</h2>
            <p>Email {cosmetic.email}</p>
            <p>phone {cosmetic.phone}</p>
            <p>Price : {cosmetic.price} id: {cosmetic.id}</p>
            <button onClick={() => addToCart(cosmetic.id)} >Add to Cart</button>
        </div>
    );
};

export default Cosmetic;