import Nav from '../components/nav';
import Vison from '../components/vison';

import React from 'react';


class vison extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Vison />
            </body>
        )
    }

}

export default vison;