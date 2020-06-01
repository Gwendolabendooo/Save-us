import Nav from '../components/nav';
import Afrique from '../components/afrique';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Afrique />
            </body>
        )
    }

}

export default Index;