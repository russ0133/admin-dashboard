import _ from 'lodash';
import './style/style.css';
import Background from './kai-mason-BNMKtpMgkUw-unsplash.jpg';
import Data from './data.xml';
import Notes from './data.csv';


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['rrs', 'wevsbpasck'], ' ');
    element.classList.add('hello');

    // Add the image
    const myImage = new Image();
    myImage.src = Background;

    element.appendChild(myImage);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());