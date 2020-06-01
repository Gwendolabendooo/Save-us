import Nav from '../components/nav';
import Loutrem from '../components/loutrem';

import React from 'react';


class loutrem extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Loutrem />
            </body>
        )
    }

}

export default loutrem;