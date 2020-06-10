import Nav from '../components/nav';
import Contact from '../components/contact';
import Audio from '../components/audio';

import React from 'react';


class contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Contact />
                <Audio />
            </body>
        )
    }

}

export default contact;