import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class panda extends React.Component {

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
            <div className="backBeast10">
                <h2>
                    Le panda géant
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le panda géant est une espèce de mammifères, habituellement classée dans la famille des ursidés, endémique de la Chine centrale. Il fait partie de l'ordre des Carnivores, même si son régime alimentaire est constitué à 99 % de végétaux, principalement du bambou.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 1,2/2 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 70/100 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 1 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 25 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/dqT-UlYlg1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default panda;