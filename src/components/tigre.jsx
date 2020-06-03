import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class tigre extends React.Component {

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
            <div className="backBeast11">
                <h2>
                    Le tigre du bengale
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le tigre du Bengale est un félin, et la sous-espèce de tigre la plus connue. Également appelé tigre royal du Bengale, il est plus léger et moins imposant que le tigre de Sibérie.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 2/3 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 140/200 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 1 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 15 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/le-cri-du-tigre-magazine-touk-touk-bretagne-coree-du-sud.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/GfKLJ3i_5p8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default tigre;