import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faRuler, faBalanceScale, faHeartbeat, faRestroom, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles
import {inscription} from '../connexion.js'


class gorille extends React.Component {

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
            <div className="backBeast5">
                <h2>
                    Le gorille
                </h2>
                <div className="ficheprdtt">
                    <div className="descAnim">Les gorilles, plus grands primates vivants, sont des animaux robustes avec une large poitrine, des épaules trapues et de grosses mains. Le visage est noir et sans poils, avec un front bas et des arcades sourcilières saillantes, de petits yeux rapprochés, des narines bien visibles et des mâchoires puissantes.</div>
                    <div className="ctnMensuration">
                        <FontAwesomeIcon className="paddd" icon={['fas', 'ruler']} /> 2 m <FontAwesomeIcon className="paddd" icon={['fas', 'balance-scale']} /> 150/300 kg <FontAwesomeIcon className="paddd" icon={['fas', 'restroom']} /> 5 000 <FontAwesomeIcon className="paddd" icon={['fas', 'heartbeat']} /> 30/50 ans
                    </div>
                    <div className="disparition">
                            <audio ref="audio_tag" src="https://raw.githubusercontent.com/Gwendolabendooo/sonsAnimaux/master/SFB-gorille-3.mp3" controls/>
                    </div>
                </div>
                <iframe width="560" className="ana" height="315" src="https://www.youtube.com/embed/fWZdB128KOQ?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
export default gorille;