import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
            <ul className="right">
                <li>
                    <NavLink to='/newmovie' >Nova Mídia</NavLink>
                </li>
                <li>
                    <NavLink to='/' >Sair</NavLink>
                </li>
                <li>
                    <NavLink to='/' className='btn btn-floating green lighten-1'>ARF</NavLink>
                </li>
            </ul>

    )
}

export default SignedInLinks;