import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => {
    return (
            <ul className="right">
                <li>
                    <NavLink to='/signup' >Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to='/signin' >Logar</NavLink>
                </li>

            </ul>

    )
}

export default SignedOutLinks;