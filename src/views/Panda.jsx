import Nav from '../components/nav';
import Panda from '../components/panda';

import React from 'react';


class panda extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Panda />
            </body>
        )
    }

}

export default panda;