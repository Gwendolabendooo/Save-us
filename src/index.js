import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// window.onscroll = function() {hiddmenu(), animation()};
 
// var precedent = 0;
// var tier = window.innerHeight / 3;
if (window.location == "http://localhost:3000/"){
    window.alert("Merci d'appuyer sur F11 afin d'améliorer votre visite");
}

// function animation() {
//     if (window.location == "http://localhost:3000/"){
//         if ( document.documentElement.scrollTop > document.querySelector("div.back-exp").offsetTop - tier ){
//             document.querySelector("div.barre").classList.add("barrewidth");
//             document.querySelector("div.explications").classList.add("app-left");
//             document.querySelector("div.title2").classList.add("app-right");
//         }
//     }
// }

// function hiddmenu() {
//     var x = document.scrollTop || document.documentElement.scrollTop;
//     if (( x >  window.innerHeight - 1)  && ( x > precedent ))
//     {
//         document.querySelector("nav").classList.add("hidd");
//         precedent = x - 1;
//     }
//     else{
//         document.querySelector("nav").classList.remove("hidd");
//         precedent = x + 1;
//     }
//     console.log(x);
// }

ReactDOM.render(<App />, document.getElementById('root'));
