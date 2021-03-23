const pageLoad = (() => {
    const content = document.getElementById('content');
    
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    content.appendChild(headerContainer);

    const home = document.createElement('div');
    home.classList.add('nav');
    home.id = 'home';
    home.innerHTML = 'Home';
    headerContainer.appendChild(home);

    const menu = document.createElement('div');
    menu.classList.add('nav');
    menu.id = 'menu';
    menu.innerHTML = 'Menu';
    headerContainer.appendChild(menu);
    
    const contact = document.createElement('div');
    contact.classList.add('nav');
    contact.id = 'contact';
    contact.innerHTML = 'Contact';
    headerContainer.appendChild(contact);

    const title = document.createElement('div');
    title.id = 'title';
    title.innerHTML = 'Cafe Odin';
    content.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'sub-title';
    subTitle.innerHTML = 'Fine dining for software developers';
    content.appendChild(subTitle);

})()

export default pageLoad;