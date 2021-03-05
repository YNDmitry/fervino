// create modal
function createModal() {
  const modal = document.createElement('div')
  modal.classList.add('ymodal')
  modal.insertAdjacentHTML('afterBegin', `
    <div class="year-confirm-overlay">
      <div class="year-confirm"><img src="assets/site/images/year-im.svg" alt="">
        <p class="year-p">Сайт содержит информацию, которая не рекомендована лицам, не достигшим совершеннолетия. Для входа на сайт, подтвердите свой возраст.</p>
        <a href="#" class="button bg-red" id="close-year-modal">
          <div>Подтверждаю, мне есть 18</div>
          <div class="button-border _1"></div>
          <div class="button-border _2"></div>
          <div class="button-border _3"></div>
          <div class="button-border _4"></div>
        </a>
      </div>
    </div>
  `)
  document.body.appendChild(modal)
  return modal
}

let $modal = createModal()
let destroyed = false

// destroy modal window
function destroy() {
  if (!openModal.loaded) {
    $modal.remove()
    destroyed = true
  }
}

// open modal window
window.addEventListener('load', openModal)

function openModal() {
  let loaded = localStorage.getItem('year-confirm')
  !loaded ? '' : destroy()
  if (!loaded) {
    $modal.classList.add('open')
    document.body.style.overflow = 'hidden'
  }
}


// close modal window
const closeModalBtn = document.getElementById('close-year-modal')
closeModalBtn.addEventListener('click', closeModal)

function closeModal() {
  localStorage.setItem('year-confirm', JSON.stringify(true))
  $modal.classList.add('hidden')
  document.body.style.overflow = 'visible'
  setTimeout(() => {
    destroy()
  }, 300)
}

// Api index.js
Webflow.require('ix2').init()