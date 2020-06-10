import React from 'react';
import data from "../BDD.json";
import { Link } from 'react-router-dom';

class audio extends React.Component {

    render() {
        return (
            <audio ref="audio_tag" src="https://ia801309.us.archive.org/34/items/auboutdufil-archives/506/PhilippWeigl-SubdivisionOfTheMasses.mp3" autoPlay/>
        )  
    }
}
export default audio;