import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    translateV(){
        document.querySelector("#ctnnn").classList.toggle("margin100");
    }

    
    render() {

        library.add(
            faSortUp
        );

        return (
            <div className="ctnheadd" id="ctnnn">
                <header> 
                    <a className="ctnSave" onClick={this.translateV}>
                        <h1>
                            SAVE US
                        </h1>
                        <FontAwesomeIcon className="lanceur" icon={['fas', 'sort-up']} />
                    </a>
                </header>
                <div className="ctnVideo">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xoVsVQvw-fM?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div>
                        <a href="/Agenda" className="popag">
                            Acceder au Webdoc <FontAwesomeIcon className="lanceur2" icon={['fas', 'sort-up']} />
                        </a>
                    </div>
                </div>
            </div>
        )  
    }
}
export default header;