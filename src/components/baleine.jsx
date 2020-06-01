import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class baleine extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    render() {


        library.add(
            faRuler,
            faBalanceScale,
            faHeartbeat,
            faRestroom,
            faVolumeUp
        );

        return (
            <div className="backBeast4">
                <h2>
                    La baleine
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">c'est le plus gros animal vivant à notre époque et dans l'état actuel des connaissances, le plus gros) ayant vécu sur Terre. Comme les autres baleines, la baleine bleue se nourrit essentiellement d’un petit crustacé, le krill, de planctons mais également de petits poissons et parfois de calmars.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 30 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 170 tonnes <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 10 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 90 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/-TRwh0vPquU?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="ctncauses">
                    <div className="cause pos_1">
                        Pollution
                    </div>
                    <div className="cause pos_2">
                        Braconnage
                    </div>
                    <div className="cause pos_3">
                        Réchauffement climatique
                    </div>
                </div>
            </div>
        )  
    }
}
export default baleine;