import React from 'react';
import data from "../BDD.json";
import { Link } from 'react-router-dom';

class Body extends React.Component {

    render() {

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
                  <a href="/Equipe" className="ctnctt">
                    Qui sommes nous ?
                  </a>
                </div>
            </div>
        )  
    }
}
export default Body;