import './styles.css';
import gridInfo from './menu.json';
import gridTpl from './templates/grid.hbs';

insertMarkup();

const checkboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxEl.addEventListener('change', changeTheme);

function insertMarkup() {
    const markup = createMarkup(gridInfo);
const menuEl = document.querySelector('.js-menu');
menuEl.innerHTML = markup;
    
}

function createMarkup(gridInfo) {
    return gridInfo.map(gridTpl).join('');
}

if (localStorage.getItem('theme') === 'dark') {
    bodyEl.classList.add(Theme.DARK);
    checkboxEl.checked = true;
}

if (bodyEl.classList.contains(Theme.LIGHT || Theme.DARK) === false) {
    bodyEl.classList.add(Theme.LIGHT);
}

function changeTheme(evt) {
    if ((evt.target.checked === true) && (bodyEl.classList.contains(Theme.LIGHT))) {
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', 'dark');
    } else if ((evt.target.checked === false) && (bodyEl.classList.contains(Theme.DARK))) {
        bodyEl.classList.replace(Theme.DARK, Theme.LIGHT); 
        localStorage.setItem('theme', 'white');
    }
}