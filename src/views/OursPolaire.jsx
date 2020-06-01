import Nav from '../components/nav';
import OursPolaire from '../components/oursPolaire';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <OursPolaire />
            </body>
        )
    }

}

export default Index;