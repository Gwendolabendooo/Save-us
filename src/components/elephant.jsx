import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class elephant extends React.Component {

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
            <div className="backBeast5">
                <h2>
                    L'elephant
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Les éléphants sont les plus grands animaux terrestres vivant actuellement : l'éléphant d'Afrique mesure en moyenne 4 mètres de haut (à l'épaule) et pèse environ 6 tonnes, pour le mâle (contre 4 chez la femelle). Ce sont des mammifères herbivores à la peau très épaisse. Au cours des 3 dernières générations, la population des éléphants aurait chuté de 50%.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 5/6 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 5 000 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 400 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 60/70 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/-S11RxfW2mo?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default elephant;