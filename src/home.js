const homeLoad = () => {
    const subContent = document.getElementsByClassName('sub-content');
    Array.from(subContent).forEach(element => element.remove());
    
    const title = document.createElement('div');
    title.classList.add('sub-content');
    title.id = 'title';
    title.innerHTML = 'Cafe Odin';
    content.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.classList.add('sub-content');
    subTitle.id = 'sub-title';
    subTitle.innerHTML = 'Fine dining for software developers';
    content.appendChild(subTitle);
}

export { homeLoad }