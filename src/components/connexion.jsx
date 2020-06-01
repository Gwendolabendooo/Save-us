import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class header extends React.Component {

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
                    <h2>L'ARCTIQUE</h2>
                    <div className="ctnImg1">
                        <a href="/OursPolaire" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg">
                                L'ours polaire
                            </div>
                        </a>
                    </div>

                </div>
                <div className="img2">
                    <div className="ctnImg2">
                        <a href="/Morse" className="linkbeast">
                            <div className="sombre"></div>
                            <div className="titleImg2">
                                Le morse
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }
}
export default header;