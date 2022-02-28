function manipulateDom() {
    // 
    const items = document.querySelectorAll('.quote');

    items.forEach(item => {
        item.style.borderColor = 'blue';
        item.style.backgroundColor = 'lightblue';
        item.style.fontStyle = 'italic';
    })
};

export { manipulateDom };