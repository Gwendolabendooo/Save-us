import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class morse extends React.Component {

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
            <div className="backBeast2">
                <h2>
                    Le morse
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le morse possède un corps massif et conique terminé par une queue courte. Le museau aplati est orné de nombreuses vibrisses faisant songer à une épaisse moustache, et de deux canines ou défenses pointant de la mâchoire supérieure. Leur longueur varie en fonction du sexe. Les yeux, petits et sombres sont situés haut de part et d'autre d'une tête un peu cubique. Le cou est massif et les nageoires antérieures également appelées palettes natatoires qui atteignent le quart de la longueur du corps, sont attachées sur des muscles puissants. Les postérieures sont un peu plus courtes.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 3/4 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 1000 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 25 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 20/30 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/FoBMvftrkJg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    <div className="cause pos_4">
                        Fonte des glaces
                    </div>
                </div>
            </div>
        )  
    }
}
export default morse;