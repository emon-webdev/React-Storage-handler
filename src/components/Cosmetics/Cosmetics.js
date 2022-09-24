import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('data.json');
                const data = await res.json();
                console.log(data)
                setCosmetics(data)

            } catch (error) {
                console.error(error)
            }
        }
        loadData()
    }, [])

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total {cosmetics.length}</p>
            {
                cosmetics.map((cosmetic) =>
                    <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    />
                )
            }
        </div>
    );
};

export default Cosmetics;