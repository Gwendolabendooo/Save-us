import Nav from '../components/nav';
import Contact from '../components/contact';

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
            </body>
        )
    }

}

export default contact;