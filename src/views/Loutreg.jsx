import Nav from '../components/nav';
import Loutreg from '../components/loutreg';

import React from 'react';


class loutreg extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Loutreg />
            </body>
        )
    }

}

export default loutreg;