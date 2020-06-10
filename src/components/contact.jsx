import React from 'react';
import data from "../BDD.json";
import { Link } from 'react-router-dom';

class contact extends React.Component {

    render() {

        function Pastille(props) {
          return <a href={props.link}><div className={props.class}></div></a>
        }

        return (
            <div className="ctnContact">
                <h2>
                    L'ÉQUIPE
                </h2>
                <div className="ctnuser1">
                    <div className="user1 usrr">
                        <div className="nomuser">
                            Gwendal LE FLOCH
                        </div>
                        <div className="profil gwe"></div>
                    </div>  
                    <div className="user2 usrr">
                        <div className="nomuser">
                            Antoine ASCASO
                        </div>
                        <div className="profil an"></div>
                    </div>  
                </div>
                <div className="ctnuser2">
                    <div className="user3 usrr">
                        <div className="nomuser">
                            Maxime CERVERA
                        </div>
                        <div className="profil ma"></div>
                    </div>  
                </div>
                <div className="ctnuser3">
                    <div className="user1 usrr">
                        <div className="nomuser">
                            Yohan MARQUES
                        </div>
                        <div className="profil yo"></div>
                    </div>  
                    <div className="user2 usrr">
                        <div className="nomuser">
                            Lucas SABATHE
                        </div>
                        <div className="profil lu"></div>
                    </div>  
                </div>
                <div className="Noussommes">
                Nous sommes 5 étudiants de première année en DUT Informatique à l’IUT de <a href="https://www.univ-tlse3.fr/" className="balisea" target="blank">Paul Sabatier</a> de l'année scolaire 2019/2020. <br></br> Ce webdoc fait l'objet de notre évaluation pour la matière d'expression et communication. Nous avons choisi de faire un webdoc sur les espèces en voie de disparition car c'est un sujet qui nous tiens particulièrement à cœur. Nous avons réalisé ce projet sans framework, en utilisant uniquement nos bases sur les langages tel que react, javascript, html et css.
                </div>
            </div>
        )  
    }
}
export default contact;