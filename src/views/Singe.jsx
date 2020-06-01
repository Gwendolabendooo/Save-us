import Nav from '../components/nav';
import Singe from '../components/singe';

import React from 'react';


class singe extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Singe />
            </body>
        )
    }

}

export default singe;