import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class loup extends React.Component {

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
                    Le loup
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le loup est un mammifère qui vit en meute avec un mâle alpha et des dominés.On y trouve une vraie hiérarchie. On le trouve majoritaire dans l’est de l’europe (Russie, roumanie…), mais il revient petit à petit en Europe de l’Ouest via l’Italie. Cette espèce animale à besoin d’une grande zone de chasse pour survivre.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 80 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 25/40 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 18 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 15/20 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/loup.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/YvTaDvP3bVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default loup;