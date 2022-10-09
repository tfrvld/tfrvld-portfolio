const scriptURL = 'https://script.google.com/macros/s/AKfycbwk9SR5mBGYiITPL8_yPJoB388U6wtpDXs37JIndXp-lc9HvOuoQoDXI02chZWnnjc/exec'
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
// const galleryImage = document.querySelectorAll('.gallery-img');

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

// AOS
// galleryImage.forEach((img, i) => {
//    img.dataset.aos = 'fade-down';
//    img.dataset.aosDelay = i * 150;
//    img.dataset.aosDuration = 1000;
// })

AOS.init({
   once: true,
   duration: 1500
});

// GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 1.5, delay: 1.5, text: 'college student | Web Developer' });
gsap.from('.jumbotron img', { duration: 1, y: -100, opacity: 0, delay: .5 });
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0 });
gsap.from('.display-4', { duration: 1, x: -150, opacity: 0, delay: .25 });