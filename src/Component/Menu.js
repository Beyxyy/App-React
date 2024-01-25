import React from 'react';
import { extendedFetch } from '../Services/extendedFetch';

const Menu = () => {
    extendedFetch('url')
    .then(rep=>rep.json())
    .catch(err => console.log(err))

    return (
        <div>
            <div>Menu</div>
        </div>
    );
};

export default Menu;