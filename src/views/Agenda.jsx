import Nav from '../components/nav';
import Agenda from '../components/agenda';
import Audio from '../components/audio';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Agenda />
                <Audio />
            </body>
        )
    }

}

export default Index;