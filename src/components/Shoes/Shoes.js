import React from 'react';
import { add, multiply } from '../../utilities/calculator';
import './Shoes.css';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    
    

    return (
        <div>
            <h2>This is Shoes Components</h2>
            <p>result {result}</p>
            <p>sum {sum}</p>
        </div>
    );
};

export default Shoes;