const menuLoad = () => {
    const content = document.getElementById('content');
    
    const subContent = document.getElementsByClassName('sub-content');
    Array.from(subContent).forEach(element => element.remove());

    let newContent = [];

    let menuItems = [];

    const appetizerHeader = document.createElement('h1');
    appetizerHeader.innerHTML = 'Appetizer';
    newContent.push(appetizerHeader);

    const appetizer1 = document.createElement('div');
    appetizer1.innerHTML = 'Seared Tuna'
    menuItems.push(appetizer1);
    newContent.push(appetizer1);

    const appetizer2 = document.createElement('div');
    appetizer2.innerHTML = 'House Salad';
    menuItems.push(appetizer2);
    newContent.push(appetizer2);

    const entreeHeader = document.createElement('h1');
    entreeHeader.innerHTML = 'Entree';
    newContent.push(entreeHeader);

    const entree1 = document.createElement('div');
    entree1.innerHTML = 'Grilled Steak';
    menuItems.push(entree1);
    newContent.push(entree1);

    const entree2 = document.createElement('div');
    entree2.innerHTML = 'Chicken Parmigiana';
    menuItems.push(entree2);
    newContent.push(entree2);

    const desertHeader = document.createElement('h1');
    desertHeader.innerHTML = 'Desert';
    newContent.push(desertHeader);

    const desert1 = document.createElement('div');
    desert1.innerHTML = 'Gelato';
    menuItems.push(desert1);
    newContent.push(desert1);

    const desert2 = document.createElement('div');
    desert2.innerHTML = 'Espresso';
    menuItems.push(desert2);
    newContent.push(desert2);

    menuItems.forEach(function(e) {
        e.classList.add('sub-item');
    })

    newContent.forEach(function(e) {
        e.classList.add('sub-content');
        content.appendChild(e);
    })
}

export { menuLoad };