import Nav from '../components/nav';
import Axolotl from '../components/axolotl';

import React from 'react';


class axolotl extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <body>
                <Nav />
                <Axolotl />
            </body>
        )
    }

}

export default axolotl;