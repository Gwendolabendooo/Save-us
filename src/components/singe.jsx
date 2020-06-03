import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class loutreg extends React.Component {

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
            <div className="backBeast7">
                <h2>
                    Le Singe-araignée à tête brune
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Le singe-araignée à tête brune est un singe social et grégaire. Les singe-araignées à têtes brunes sont actifs en début de matinée et en fin de journée. Très agile, le primate saute d’arbres en arbres grâce à ses longues pattes et ne descend que très rarement au sol. On l’appelle singe-araignée en raison de sa longue queue préhensile qui agit comme un cinquième membre.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 50 cm <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 5/8 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> ?? <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 15/20 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/1100742-Cri_datele_ou_singe-araignee.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/K9NGG4CLCCg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default loutreg;