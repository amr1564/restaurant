import { pageLoad } from './page-load';
import { homeLoad } from './home';
import { menuLoad } from './menu';
import { contactLoad } from './contact';

pageLoad();
homeLoad();

const home = document.getElementById('home');
home.addEventListener('click', homeLoad);

const menu = document.getElementById('menu');
menu.addEventListener('click', menuLoad);

const contact = document.getElementById('contact');
contact.addEventListener('click', contactLoad);