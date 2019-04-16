window.onload = function() {

    if (location.hostname === "localhost") {
      console.log('window.onload');
    }

    Hero.init();
    Menu.init();

};
