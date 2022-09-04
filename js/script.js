const scriptURL = 'https://script.google.com/macros/s/AKfycbwk9SR5mBGYiITPL8_yPJoB388U6wtpDXs37JIndXp-lc9HvOuoQoDXI02chZWnnjc/exec'
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
   e.preventDefault()
   // ketika tombol di klik
   // tampilkan tmbl loading hilangkan tmbl kirim
   btnLoading.classList.toggle('d-none')
   btnKirim.classList.toggle('d-none')
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
         // tampilkan tombol kirim hilangkan tombol loading
         btnLoading.classList.toggle('d-none');
         btnKirim.classList.toggle('d-none');
         // tampilkan Alert
         myAlert.classList.toggle('d-none');
         // reset
         form.reset();
         console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
})