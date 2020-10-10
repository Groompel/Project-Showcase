// Make the canvas have 100% height and width
function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const containerWidth = document.querySelector('.canvas-container').clientWidth;
    canvas.setAttribute('width',`${containerWidth}px`);
    var height; 
    if (document.documentElement.clientWidth < 769) {
        height = document.documentElement.clientHeight - document.querySelector('header').clientHeight;
    } else {
        height =  document.documentElement.clientHeight - document.querySelector('header').clientHeight - document.querySelector('footer').clientHeight;
    }

    document.querySelector('main .tabs-container').style.height = `${height}px`;
    canvas.setAttribute('height',`${height}px`);
}

function toggleSideMenu() {
    document.querySelector('main .layout-container').classList.toggle('side-menu-shown');
}

document.addEventListener('DOMContentLoaded', () => {
    // Resize canvas on load
    resizeCanvas();
    
    // Resize canvas on window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Activate tabs
    document.querySelectorAll('main .panel-settings .panel-tabs a').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabId = parseInt(e.target.dataset.tabId);
            document.querySelectorAll('main .panel-settings .panel-tabs a').forEach(tab => {
                if (tab === e.target) {
                    tab.classList.add('is-active');
                } else {
                    tab.classList.remove('is-active');
                }
            });
            document.querySelectorAll(`main .panel-settings .panel-tab-body`).forEach(tab => {
                const tabBodyId = parseInt(tab.dataset.tabId);
                if (tabBodyId === tabId) {
                    tab.classList.add('is-active');
                } else {
                    tab.classList.remove('is-active');
                }
            });
        });
    });

    // Make the side menu slide in
    document.querySelector('main .button.side-menu').addEventListener('click', toggleSideMenu);
    document.querySelector('main .dark-overlay').addEventListener('click', toggleSideMenu);
    document.querySelector('main .panel-settings .panel-heading .close-icon').addEventListener('click', toggleSideMenu);
});