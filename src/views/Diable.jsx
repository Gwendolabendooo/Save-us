import Nav from '../components/nav';
import Diable from '../components/diable';

import React from 'react';


class diable extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Diable />
            </body>
        )
    }

}

export default diable;