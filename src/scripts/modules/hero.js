var Hero = {
  init: function() {
    if (document.contains(document.querySelector('.js-hero-heading1'))) {
      setTimeout(function() {
        document.querySelector('.js-hero-heading1').classList.add('--active');
      }, 100);

      setTimeout(function() {
        document.querySelector('.js-hero-heading2').classList.add('--active');
      }, 2000);

      setTimeout(function() {
        document.querySelector('.js-hero-cta').classList.add('--active');
      }, 4000);

    }
  }
};
