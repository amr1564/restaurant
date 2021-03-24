const homeLoad = () => {
    const content = document.getElementById('content');

    const subContent = document.getElementsByClassName('sub-content');
    Array.from(subContent).forEach(element => element.remove());
    
    let newContent = [];

    const title = document.createElement('div');
    title.id = 'title';
    title.innerHTML = 'Cafe Odin';
    newContent.push(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'sub-title';
    subTitle.innerHTML = 'Fine dining for software developers';
    newContent.push(subTitle);

    newContent.forEach(function(e) {
        e.classList.add('sub-content');
        content.appendChild(e);
    })
}

export { homeLoad }