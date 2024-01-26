import React from 'react';
import { extendedFetch } from '../Services/extendedFetch';
import { Link } from 'react-router-dom';

const Menu = () => {
    extendedFetch('url')
    .then(rep=>rep.json())
    .catch(err => console.log(err))

    return (
        <div>
            <Link to='/meal'> Meal </Link>
            <Link to='/meal'> Sport </Link>
            <Link to='/profile'> Profile </Link>
            <Link to='data'> Data </Link>
        </div>
    );
};

export default Menu;