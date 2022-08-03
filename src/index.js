import _ from 'lodash';
import myName from './myName';
import './style.css';
import Rabbit from './rabbit.jpeg';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '<br />'], ' ');
  element.textContent += myName('Jimmy');
  element.classList.add('hello');

  // Add image to div
  const myRabbit  = new Image();
  myRabbit.src = Rabbit;

  element.appendChild(myRabbit);

  // Add button
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());