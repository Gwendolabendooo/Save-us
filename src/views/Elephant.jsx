import Nav from '../components/nav';
import Elephant from '../components/elephant';

import React from 'react';


class elephant extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Elephant />
            </body>
        )
    }

}

export default elephant;