import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    
    render() {

        library.add(
            faSortUp
        );

        return (
            <header> 
                <a href="/Agenda" className="ctnSave">
                    <h1>
                        SAVE US
                    </h1>
                    <FontAwesomeIcon className="lanceur" onClick={this} icon={['fas', 'sort-up']} />
                </a>
            </header>
        )  
    }
}
export default header;