import Nav from '../components/nav';
import Loup from '../components/loup';

import React from 'react';


class loup extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Loup />
            </body>
        )
    }

}

export default loup;