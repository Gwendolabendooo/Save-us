import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class loutreg extends React.Component {

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
            <div className="backBeast6">
                <h2>
                    La loutre géante
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">La Loutre géante a la fourrure la plus rase de toutes les espèces de loutres. Le museau des Loutres géantes est court et incliné. Les oreilles sont petites et arrondies. Les membres sont courts et trapus, et se terminent par des pieds palmés armés de griffes pointues. Elle a une vision bien développée. Grégaire et diurne.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 1,5 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 32/45 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 5 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 10 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/NGooWWIElXs?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default loutreg;