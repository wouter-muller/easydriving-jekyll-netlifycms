var Menu = {
  init: function() {
    const menu = document.querySelector('.js-menu');
    const open = document.querySelector('.js-menu-open');
    const close = document.querySelector('.js-menu-close');

    open.addEventListener('click', function(){
      menu.classList.add('--active');
    })

    close.addEventListener('click', function() {
      menu.classList.remove('--active');
    })
  }
};
