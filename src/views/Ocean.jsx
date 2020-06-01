import Nav from '../components/nav';
import Ocean from '../components/ocean';

import React from 'react';


class ocean extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Ocean />
            </body>
        )
    }

}

export default ocean;