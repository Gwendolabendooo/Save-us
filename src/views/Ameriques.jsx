import Nav from '../components/nav';
import Ameriques from '../components/ameriques';

import React from 'react';


class ameriques extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Ameriques />
            </body>
        )
    }

}

export default ameriques;