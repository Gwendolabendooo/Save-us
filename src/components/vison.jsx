import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class vison extends React.Component {

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
            <div className="backBeast9">
                <h2>
                    Le vison d'europe
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le vison d’Europe est un petit mammifère avec des taches blanches sur le museaux. Celui-ci vit dans les ruisseaux pour se nourrir. Braconné à cause de sa fourrure, on a classé cette espèce animale en :  “En danger critique d’extinction”. Il devient de plus en plus rare lorsque l’on introduit l’espèce d’Amérique pour repeupler l’espèce.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 50 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 0,6/1 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 30 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 5/6 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/vison.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/iykjTpd9pVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default vison;