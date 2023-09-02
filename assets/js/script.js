const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', () => {
        allSideMenu.forEach(item => {
            item.parentElement.classList.remove('active');
        });

        li.classList.add('active');
    });
});