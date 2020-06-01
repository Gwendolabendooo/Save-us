import React from 'react';
import data from "../BDD.json";
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faBookmark, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Body extends React.Component {

    render() {
          library.add(
            faPlusSquare,
            faBookmark,
            faTimesCircle
        );

        function Pastille(props) {
          return <a href={props.link}><div className={props.class}></div></a>
        }

        return (
            <div className="agenda" >
              <div className="ctnMapBack">
                <div className="ctnMap">
                    <Pastille link="/Ameriquen" class="ctnPastille pos1"></Pastille>
                    <Pastille link="/Ameriques" class="ctnPastille pos2"></Pastille>
                    <Pastille link="/Europe" class="ctnPastille pos3"></Pastille>
                    <Pastille link="/Afrique" class="ctnPastille pos4"></Pastille>
                    <Pastille link="/Asie" class="ctnPastille pos5"></Pastille>
                    <Pastille link="/Australie" class="ctnPastille pos6"></Pastille>
                    <Pastille link="/Ocean" class="ctnPastille pos7"></Pastille>
                    <Pastille link="/Connexion" class="ctnPastille pos8"></Pastille>
                </div>
              </div>
                <div className="feuille">

                </div>
            </div>
        )  
    }
}
export default Body;