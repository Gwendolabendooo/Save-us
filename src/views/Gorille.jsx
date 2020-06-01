import Nav from '../components/nav';
import Gorille from '../components/gorille';

import React from 'react';


class gorille extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Gorille />
            </body>
        )
    }

}

export default gorille;