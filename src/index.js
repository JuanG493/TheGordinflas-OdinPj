import { mkChildElments, mkinnerContent as mkcont } from "./pageLoad";
import { mkHomePage } from "./home";
import { mkMenuPage } from "./menu";
import { mkContactPage } from "./contact";
import logo from './img/logo.png'
// import wings from './img/wings.jpg';

import './style.css';

let content = document.querySelector('#content');
mkChildElments(content, ['div-header', '+', 'img-logo','div-bar', '+', 'ul', '+', 'li-home', 'li-menu', 'li-contact',]);

mkChildElments(content, ['div-mainframe']);
let mainFrame = document.querySelector('.mainframe');


mkcont('home','Home')
mkcont('menu', 'Menu')
mkcont('contact', 'Contact')

let logotype = document.querySelector('.logo');
logotype.setAttribute('src', `${logo}`)



let home = document.querySelector('.home'); 
home.addEventListener('click', () =>{
    mkHomePage(mainFrame)
})

let menu = document.querySelector('.menu'); 
menu.addEventListener('click', () =>{
    mkMenuPage(mainFrame)
})

let contact = document.querySelector('.contact'); 
contact.addEventListener('click', () =>{
    mkContactPage(mainFrame)
})

mkHomePage(mainFrame);





