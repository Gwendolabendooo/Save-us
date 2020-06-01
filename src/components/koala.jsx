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
                    Le koala
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Animal nocturne, il se nourrit essentiellement le soir et la nuit. Gros dormeur, le koala dort environ 19 heures par jour. Le koala possède un gros nez et de larges oreilles. La principale cause de leur disparition est la perte de leur habitat naturel (80%). Causé principalement par la déforestation et le changement climatique.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 80 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 10/15 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 43 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 13/18 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/oI3ADcDH0Uc?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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