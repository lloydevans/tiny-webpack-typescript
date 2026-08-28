import './style.css';
import { greeting } from './greeting';

let el = window.document.createElement('h1');
window.document.body.appendChild(el);
el.id = 'title';
el.innerText = greeting();
