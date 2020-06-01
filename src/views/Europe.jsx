import Nav from '../components/nav';

import React from 'react';
import Europe from '../components/europe';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Europe />
            </body>
        )
    }

}

export default Index;