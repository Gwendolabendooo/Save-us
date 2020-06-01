import Nav from '../components/nav';
import Tigre from '../components/tigre';

import React from 'react';


class tigre extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Tigre />
            </body>
        )
    }

}

export default tigre;