var app = new Vue({
    el: '#vue',
    data: {
        signUpModalVisible: false,
        mobileMenuIsVisible: false
    }
})

// ---------------------------------------------------
// Sign up form ajax request
// ---------------------------------------------------

let testForm = document.querySelector("#signup");

testForm.addEventListener('submit', e => {
    document.querySelector('.js-sign-up-submit').setAttribute('disabled', 'disabled');
    e.preventDefault();
    const formData = new FormData(testForm);
    fetch(testForm.getAttribute('action'), {
        method: 'POST',
        headers: {
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(res => {
    if (res) {
        document.querySelector('.js-sign-up-form').style.display = 'none';
        document.querySelector('.js-sign-up-success').style.display = 'block';
    }
  });
});

// Home slider
const HomeSlider = {
    init: function() {

        var value = "one"

        var myInterval = setInterval(interval, 5000);

        function interval() {
            if(value == "one") {
                document.querySelector('.js-hero-slider.--one').classList.remove('--active')
                document.querySelector('.js-hero-slider-control-one').classList.remove('--active')
                document.querySelector('.js-hero-slider.--two').classList.add('--active')
                document.querySelector('.js-hero-slider-control-two').classList.add('--active')
                value = "two"
            }
            else if(value == "two") {
                document.querySelector('.js-hero-slider.--two').classList.remove('--active')
                document.querySelector('.js-hero-slider-control-two').classList.remove('--active')
                document.querySelector('.js-hero-slider.--three').classList.add('--active')
                document.querySelector('.js-hero-slider-control-three').classList.add('--active')
                value = "three"
            }
            else {
                document.querySelector('.js-hero-slider.--three').classList.remove('--active')
                document.querySelector('.js-hero-slider-control-three').classList.remove('--active')
                document.querySelector('.js-hero-slider.--one').classList.add('--active')
                document.querySelector('.js-hero-slider-control-one').classList.add('--active')
                value = "one"
            }
        }

        // Controls
        document.querySelector('.js-hero-slider-control-one').addEventListener('click', function() {
            clearInterval(myInterval)
            document.querySelector('.js-hero-slider.--two').classList.remove('--active')
            document.querySelector('.js-hero-slider.--three').classList.remove('--active')
            document.querySelector('.js-hero-slider.--one').classList.add('--active')
            document.querySelector('.js-hero-slider-control-one').classList.add('--active')
            document.querySelector('.js-hero-slider-control-two').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-three').classList.remove('--active')
        })

        document.querySelector('.js-hero-slider-control-two').addEventListener('click', function() {
            clearInterval(myInterval)
            document.querySelector('.js-hero-slider.--two').classList.add('--active')
            document.querySelector('.js-hero-slider.--three').classList.remove('--active')
            document.querySelector('.js-hero-slider.--one').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-one').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-two').classList.add('--active')
            document.querySelector('.js-hero-slider-control-three').classList.remove('--active')
        })

        document.querySelector('.js-hero-slider-control-three').addEventListener('click', function() {
            clearInterval(myInterval)
            document.querySelector('.js-hero-slider.--two').classList.remove('--active')
            document.querySelector('.js-hero-slider.--three').classList.add('--active')
            document.querySelector('.js-hero-slider.--one').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-one').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-two').classList.remove('--active')
            document.querySelector('.js-hero-slider-control-three').classList.add('--active')
        })

    }
};

HomeSlider.init();




