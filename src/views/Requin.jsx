import Nav from '../components/nav';
import Requin from '../components/requin';

import React from 'react';


class requin extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Requin />
            </body>
        )
    }

}

export default requin;