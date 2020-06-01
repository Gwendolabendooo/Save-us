import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class axolotl extends React.Component {

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
            <div className="backBeast8">
                <h2>
                    L'axolotl
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">L' axolotl (nom scientifique : Ambystoma mexicanum) est un amphibien aquatique de l'ordre des urodèles, qui vit dans les cavernes du Mexique. Cet animal à la particularité, contrairement à la plupart des autres amphibiens, de conserver ses branchies à l'âge adulte.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 30 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 100 gr <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> ?? <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 5/6 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/_yOL3t4LMUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default axolotl;