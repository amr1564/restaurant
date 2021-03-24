import { pageLoad } from './page-load';
import { homeLoad } from './home';
import { menuLoad } from './menu';

pageLoad();
homeLoad();

const home = document.getElementById('home');
home.addEventListener('click', homeLoad);

const menu = document.getElementById('menu');
menu.addEventListener('click', menuLoad);
