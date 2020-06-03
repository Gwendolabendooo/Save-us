import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class requin extends React.Component {

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
                    Le requin
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le grand requin blanc est un poisson prédateur appartenant à la race des lamnidés. Il fait d’ailleurs partie des poissons cartilagineux car à l’inverse des poissons osseux, le requin blanc possède un corset cutané composé de collagènes. </div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 3/6 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 500/1000 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> ?? <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 70 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/N4Gd1FBzfN0?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default requin;