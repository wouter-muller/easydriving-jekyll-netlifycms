var app = new Vue({
    el: '#vue',
    data: {
        signUpModalVisible: false,
        mobileMenuIsVisible: false
    },
    methods: {
        changeCar: function() {
            console.log('trigger')
        }
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
