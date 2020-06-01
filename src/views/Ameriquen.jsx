import Nav from '../components/nav';
import Afrique from '../components/afrique';

import React from 'react';
import Ameriquen from '../components/ameriquen';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Ameriquen />
            </body>
        )
    }

}

export default Index;