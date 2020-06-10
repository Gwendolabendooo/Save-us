import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    translateV(){
        document.querySelector("#ctnnn").classList.toggle("margin100");
    }

    dispar(){
        document.querySelector("#ctnnn > header > div").classList.toggle("none");
    }
    
    render() {

        library.add(
            faSortUp
        );

        return (
            <div className="ctnheadd" id="ctnnn">
                <header> 
                    <div className="backpopinecr">
                        <div className="popinecr">
                            <div className="ecraa">
                                Merci de bien vouloir mettre la page en <a className="gros">plein écran (f11) ou bien fn + f11.</a>
                            </div>
                            <div className="ctnglobe">
                                <div className="globe">

                                </div>
                                <div className="txtglobe">
                                    Ce globe vous servira de bouton retour
                                </div>
                            </div>
                            <div className="ctnok">
                                <div className="btnok" onClick={this.dispar}>OK</div>
                            </div>
                        </div>
                    </div>
                    <a className="ctnSave" onClick={this.translateV}>
                        <h1>
                            SAVE US
                        </h1>
                        <FontAwesomeIcon className="lanceur" icon={['fas', 'sort-up']} />
                    </a>
                </header>
                <div className="ctnVideo">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xoVsVQvw-fM?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div>
                        <a href="/Carte-du-monde" className="popag">
                            Acceder au Webdoc <FontAwesomeIcon className="lanceur2" icon={['fas', 'sort-up']} />
                        </a>
                    </div>
                </div>
            </div>
        )  
    }
}
export default header;