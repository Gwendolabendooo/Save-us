import Nav from '../components/nav';
import Australie from '../components/australie';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Australie />
            </body>
        )
    }

}

export default Index;