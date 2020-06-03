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
            <div className="backBeast">
                <h2>
                    L'ours polaire
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">L’ours blanc, que l’on appelle plus souvent ours polaire, est le plus grand ursidé de la planète et sans conteste le plus grand prédateur de l’Arctique. Symbole puissant de la vigueur et de la résistance de l’Arctique, ce chasseur infatigable voit sa survie menacée par le réchauffement climatique. La banquise, son habitat essentiel et fondement de l’écosystème arctique à l’équilibre fragile, est en train, littéralement, de lui fondre entre les pattes.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 2/3 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 800 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 26 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 15/30 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/cri-ours-polaire.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/tnnlOEAXOrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="ctncauses">
                    <div className="cause pos_1">
                        Pollution
                    </div>
                    <div className="cause pos_2">
                        Surpêche
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
export default oursPolaire;