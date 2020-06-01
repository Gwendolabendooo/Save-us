import Nav from '../components/nav';
import Morse from '../components/morse';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Morse />
            </body>
        )
    }

}

export default Index;