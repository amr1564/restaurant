const menuLoad = () => {
    const subContent = document.getElementsByClassName('sub-content');
    Array.from(subContent).forEach(element => element.remove());

    
}

export {menuLoad};