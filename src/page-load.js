const pageLoad = (() => {
    const content = document.getElementById('content');
    
    const header = document.createElement('div');
    header.id = 'header';
    header.innerHTML = 'Cafe Odin';
    content.appendChild(header);

    const subHeader = document.createElement('div');
    subHeader.id = 'sub-header';
    subHeader.innerHTML = 'Fine dining for software developers';
    content.appendChild(subHeader);

})()

export default pageLoad;