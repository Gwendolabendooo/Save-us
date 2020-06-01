import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class australie extends React.Component {

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
                    <h2>L'OCEANIE</h2>
                    <div className="ctnImg3">
                        <a href="/Diable" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg">
                                Le diable de tasmanie
                            </div>
                        </a>
                    </div>

                </div>
                <div className="img2">
                    <div className="ctnImg4">
                        <a href="/koala" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg2">
                                Le koala
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }
}
export default australie;