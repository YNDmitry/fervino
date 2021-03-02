const overlay = document.querySelector('.year-confirm-overlay')
const confirmBlock = document.querySelector('.year-conform')

function createModal() {
  const modal = document.createElement('div')
  modal.classList.add('ymodal')
  modal.insertAdjacentHTML('afterBegin', `
    <div class="year-confirm-overlay">
      <div class="year-confirm"><img src="assets/site/images/year-im.svg" alt="">
        <p class="year-p">Сайт содержит информацию, которая не рекомендована лицам, не достигшим совершеннолетия. Для входа на сайт, подтвердите свой возраст.</p>
        <a href="#" class="button bg-red w-inline-block">
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

document.body.addEventListener('DOMContentLoaded', () => {
  $modal.classList.add('open')
})