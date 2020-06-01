import Nav from '../components/nav';
import Asie from '../components/asie';

import React from 'react';


class asie extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Asie />
            </body>
        )
    }

}

export default asie;