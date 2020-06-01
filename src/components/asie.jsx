import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class asie extends React.Component {

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
                    <h2>L'asie</h2>
                    <div className="ctnImg15">
                        <a href="/Panda" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg">
                                Le panda géant
                            </div>
                        </a>
                    </div>

                </div>
                <div className="img2">
                    <div className="ctnImg16">
                        <a href="/Tigre" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg2">
                                Le tigre du bengale
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }
}
export default asie;