import React from 'react';

class nav extends React.Component {
    scrollstart() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <a className="Menu" id="Menu" href="javascript:history.go(-1)">
                    
            </a>
        )  
    }
}
export default nav;