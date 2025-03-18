export function initSubmenu() {
    const categoriesLink = Array.from(document.querySelectorAll('.nav-link-submenu'))
    .find(link => link.textContent.includes('Categorie'));
    const chevronIcon = categoriesLink.querySelector('.chevron-down');

    const submenu = document.createElement('ul');
    submenu.classList.add('submenu');

    const submenuItems = ['Più Venduti', 'Stagionali', 'In Offerta', 'Personalizzati'];
    submenuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        li.appendChild(a);
        submenu.appendChild(li);
    });

    categoriesLink.parentNode.insertBefore(submenu, categoriesLink.nextSibling);

    let isHoveringSubmenu = false;

    categoriesLink.addEventListener('mouseenter', () => {
        submenu.classList.add('active');
        chevronIcon.classList.add('active');
    });

    categoriesLink.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!isHoveringSubmenu) {
                submenu.classList.remove('active');
                chevronIcon.classList.remove('active');
            }
        }, 200);
    });

    submenu.addEventListener('mouseenter', () => {
        isHoveringSubmenu = true;
    });

    submenu.addEventListener('mouseleave', () => {
        isHoveringSubmenu = false;
        submenu.classList.remove('active');
        chevronIcon.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-link-submenu') && !event.target.closest('.submenu')) {
            submenu.classList.remove('active');
            chevronIcon.classList.remove('active');
        }
    });
}