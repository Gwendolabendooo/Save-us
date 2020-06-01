import Header from '../components/header';

import React from 'react';


class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Header />
            </body>
        )
    }

}

export default Index;