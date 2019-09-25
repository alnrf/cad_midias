import React  from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar  = () => {
    return (
        <nav className="nav-wrapper red lighten-1">
            <div className="container" >
                <Link to='/' className='brand-logo'>Gestão de Midias</Link>
                <strong><SignedInLInks /></strong>
                <SignedOutLInks />
            </div>
        </nav>
    )

}


export default connect()(Navbar);