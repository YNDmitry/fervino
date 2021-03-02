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

const $modal = createModal()
window.addEventListener('load', openModal)

function openModal() {
  const loaded = localStorage.getItem('year-confirm')
  if (!loaded) {
    $modal.classList.add('open')
    document.body.style.overflow = 'hidden'
  }
}

// closeModal

const closeModal = document.getElementById('close-year-modal')
closeModal.addEventListener('click', handlerModal)

function handlerModal() {
  $modal.classList.add('hidden')
  setTimeout(() => {
    $modal.classList.remove('open')
  }, 300)
  document.body.style.overflow = 'visible'
  localStorage.setItem('year-confirm', JSON.stringify(true))
}

Webflow.require('ix2').init()