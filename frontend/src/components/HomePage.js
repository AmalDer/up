import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(){
    return(
        <div>
            <div>
                <Link to = '/groups'>Groupes</Link>
            </div>
            <div>
                <Link to = '/students/'>Liste d'élèves</Link>
            </div>
        </div>
    );
}

export default HomePage;