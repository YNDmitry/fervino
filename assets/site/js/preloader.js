function init() {
  const loader = document.createElement('div')
  loader.classList.add('preloader')
  loader.classList.add('open')
  loader.insertAdjacentHTML('afterBegin', `
    <div class="loader-content">
      <img src="assets/site/images/logo-1.png">
      <div class="loader-vec"></div>
    </div>
    <div class="loader-txt"></div>
  `)
  document.body.appendChild(loader)
  return loader
}
let initLoader = init()

window.addEventListener('load', handleLoad)

function handleLoad() {
  setTimeout(() => {
    initLoader.remove()
  }, 300)
  destroyed = true
}
