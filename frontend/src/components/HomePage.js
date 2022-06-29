import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(){
    return(
        <div>
            <div>
                <Link to = '/group'>Groupes</Link>
            </div>
            <div>
                <Link to = '/student'>Liste d'élèves</Link>
            </div>
        </div>
    );
}

export default HomePage;