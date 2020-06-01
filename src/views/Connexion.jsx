import Nav from '../components/nav';
import Connexion from '../components/connexion';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Connexion />
            </body>
        )
    }

}

export default Index;