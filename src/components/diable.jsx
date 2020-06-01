import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class oursPolaire extends React.Component {

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
            <div className="backBeast3">
                <h2>
                    Le diable de tasmanie
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">diable de tasmanie: Le diable de tasmanie est un marsupial carnivore, il est bien connu pour dégager une forte odeur lorsqu’il stresse. Depuis 1996, cette espèce est touchée par une maladie, la tumeur faciale transmissible du Diable de Tasmanie (DFTD), fatale à presque 100% et qui a décimé 85% de sa population. Les animaux meurent notamment de faim lorsque la tumeur atteint leur bouche, les empêchant de se nourrir.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 60 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 6/8 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 16 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 8/10 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/znvKe1SvwpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default oursPolaire;