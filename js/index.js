document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('toogleicon');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const head = document.getElementById('hd');
    const close = document.getElementById('cross');
    icon.addEventListener('click', () => {
        sidebar.style.visibility = 'visible';
    });

    main.addEventListener('click', () => {
        sidebar.style.visibility = 'hidden';
    });

    head.addEventListener('click', () => {
        sidebar.style.visibility = 'hidden';
    });
    close.addEventListener('click', () => {
        sidebar.style.visibility = 'hidden';
    });
});
