import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
    render() {
        
        function Prdt(props) {
            return <div className="prdt">
            <h3 className="title-prdt">
            {props.nproduit}
            </h3>
            <div className="desc-prdt">
            {props.desc}
            </div>
            <div className={props.img}>
            </div>
            <Link to={props.lien} className="button">
                M'y emmener
            </Link>
            </div>
          }

        return (
            <div className="Contenu">
                <div className="back-exp">
                    <div className="title2">
                        Pourquoi avoir créé cette application ?
                    </div>
                    <div className="barre"></div>
                    <div className="explications">
                        Permettre aux utilisateurs de pouvoir prendre leurs notes plus efficacement, De pouvoir consulter son calendrier et son agenda personnel. 
                        <div className="marg-top">
                        Tout cela sur une seule et même application. Comment utiliser l'application ?
                        </div>
                    </div>
                </div>
                <div className="Container-prdt">
                    <Prdt nproduit="MES NOTES" lien="/mes_notes" img="img-prdt1" desc="Permettre aux utilisateurs de pouvoir prendre leurs notes plus efficacement, De pouvoir consulter son calendrier et son agenda personnel. Je sui et je reste non ni l'un ni l'autre">
                    </Prdt>
                    <Prdt nproduit="MON CALENDRIER" lien="/mes_notes" img="img-prdt2" desc="Permettre aux utilisateurs de pouvoir prendre leurs notes plus efficacement, De pouvoir consulter son calendrier et son agenda personnel. Je sui et je reste non ni l'un ni l'autre">
                    </Prdt>
                    <Prdt nproduit="MON AGENDA" lien="/mes_notes" img="img-prdt3" desc="Permettre aux utilisateurs de pouvoir prendre leurs notes plus efficacement, De pouvoir consulter son calendrier et son agenda personnel. Je sui et je reste non ni l'un ni l'autre">
                    </Prdt>
                </div>
            </div>
        )  
    }
}
export default Body;