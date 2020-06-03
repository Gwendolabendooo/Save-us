import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class ameriques extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    render() {


        library.add(
            faUserCircle,
            faUser,
            faUnlockAlt,
            faEnvelope
        );

        return (
            <div className="CtnChoix">
                <div className="img1">
                    <h2>L'amérique du sud</h2>
                    <div className="ctnImg9">
                        <a href="/Loutreg" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg">
                                La loutre géante
                            </div>
                        </a>
                    </div>

                </div>
                <div className="img2">
                    <div className="ctnImg10">
                        <a href="/Singe" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg2">
                                Le Singe-araignée à tête brune
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }
}
export default ameriques;