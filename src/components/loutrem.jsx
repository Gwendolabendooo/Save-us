import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class loutrem extends React.Component {

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
                    La loutre de mer
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">La loutre de mer (Enhydra lutris) est une grande loutre (famille des mustélidés) vivant dans le Pacifique Nord, du nord du Japon (île de Hokkaidō) à la Californie, en passant par le Kamtchatka, les Aléoutiennes et l'Alaska. C'est la plus aquatique et la plus massive des loutres (elle peut atteindre jusqu'à 45 kilos), mais aussi la seule à pouvoir vivre en permanence dans la mer.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 1,5 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 22/45 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 2 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 15/20 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/cri-dune-loutre.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" height="315" className="ana" src="https://www.youtube.com/embed/Tj1hLS8AGDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default loutrem;