import Nav from '../components/nav';
import Baleine from '../components/baleine';

import React from 'react';


class baleine extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Baleine />
            </body>
        )
    }

}

export default baleine;