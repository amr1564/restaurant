const contactLoad = () => {
    const content = document.getElementById('content');
    
    const subContent = document.getElementsByClassName('sub-content');
    Array.from(subContent).forEach(element => element.remove());

    let newContent = [];

    const address1 = document.createElement('div');
    address1.innerHTML = '123 Main Street';
    address1.id = 'address1';
    newContent.push(address1);

    const address2 = document.createElement('div');
    address2.innerHTML = 'New York, NY 10001';
    newContent.push(address2);

    newContent.forEach(function(e) {
        e.classList.add('sub-content', 'sub-item', 'address');
        content.appendChild(e);
    })

}

export { contactLoad }