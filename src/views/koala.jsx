import Nav from '../components/nav';
import Koala from '../components/koala';

import React from 'react';


class koala extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Koala />
            </body>
        )
    }

}

export default koala;