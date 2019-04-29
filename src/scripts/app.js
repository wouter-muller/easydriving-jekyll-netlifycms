var app = new Vue({
    el: '#vue',
    data: {
        signUpModalVisible: false,
        mobileMenuIsVisible: false
    }
})

let testForm = document.querySelector("#signup");

testForm.addEventListener('submit', e => {
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
      console.log('true')
    }
  });
});
