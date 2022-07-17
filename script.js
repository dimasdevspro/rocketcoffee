function menuOpen(){
    
    const moving = document.querySelector('.menu');
    moving.classList.add('open');
    moving.classList.remove('close');
    
    const iconOpenMenu = document.querySelector('.button-open-menu');
    iconOpenMenu.classList.add('hidden');
    const iconCloseMenu = document.querySelector('.button-close-menu');
    iconCloseMenu.classList.add('show')
}

function menuClose(){
    
    const moving = document.querySelector('.menu');
    moving.classList.add('close');
    moving.classList.remove('open');
    
    const iconCloseMenu = document.querySelector('.button-close-menu');
    iconCloseMenu.classList.remove('show');
    const iconOpenMenu = document.querySelector('.button-open-menu');
    iconOpenMenu.classList.remove('hidden');
}

