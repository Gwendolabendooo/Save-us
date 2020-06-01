import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link
} from "react-router-dom";

import Agenda from './views/Agenda';
import Connexion from './views/Connexion';
import Index from './views/index';
import OursPolaire from './views/OursPolaire';
import Morse from './views/Morse';
import Australie from './views/Australie';
import Diable from './views/Diable';
import Koala from './views/koala';
import Ocean from './views/Ocean';
import Baleine from './views/Baleine';
import Requin from './views/Requin';
import Afrique from './views/Afrique';
import Gorille from './views/Gorille';
import Elephant from './views/Elephant';
import Ameriques from './views/Ameriques';
import Loutreg from './views/Loutreg';
import Singe from './views/Singe';
import Ameriquen from './views/Ameriquen';
import Loutrem from './views/Loutrem';
import Europe from './views/Europe';
import Loup from './views/Loup';
import Vison from './views/Vison';
import Asie from './views/Asie';
import Panda from './views/Panda';
import Tigre from './views/Tigre';
import "animate.css/animate.min.css";
import Axolotl from './views/Axolotl';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/Agenda">
            <Agenda />
          </Route>
          <Route exact path="/Connexion">
            <Connexion />
          </Route>
          <Route exact path="/OursPolaire">
            <OursPolaire />
          </Route>
          <Route exact path="/Morse">
            <Morse />
          </Route>
          <Route exact path="/Australie">
            <Australie />
          </Route>
          <Route exact path="/Diable">
            <Diable />
          </Route>
          <Route exact path="/Koala">
            <Koala />
          </Route>
          <Route exact path="/Ocean">
            <Ocean />
          </Route>
          <Route exact path="/Baleine">
            <Baleine />
          </Route>
          <Route exact path="/Requin">
            <Requin />
          </Route>
          <Route exact path="/Afrique">
            <Afrique />
          </Route>
          <Route exact path="/Gorille">
            <Gorille />
          </Route>
          <Route exact path="/Elephant">
            <Elephant />
          </Route>
          <Route exact path="/Ameriques">
            <Ameriques />
          </Route>
          <Route exact path="/Loutreg">
            <Loutreg />
          </Route>
          <Route exact path="/Singe">
            <Singe />
          </Route>
          <Route exact path="/Ameriquen">
            <Ameriquen />
          </Route>
          <Route exact path="/Loutrem">
            <Loutrem />
          </Route>
          <Route exact path="/Axolotl">
            <Axolotl />
          </Route>
          <Route exact path="/Europe">
            <Europe />
          </Route>
          <Route exact path="/Loup">
            <Loup />
          </Route>
          <Route exact path="/Vison">
            <Vison />
          </Route>
          <Route exact path="/Asie">
            <Asie />
          </Route>
          <Route exact path="/Panda">
            <Panda />
          </Route>
          <Route exact path="/Tigre">
            <Tigre />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
