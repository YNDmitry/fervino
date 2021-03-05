const loader = document.querySelector('.preloader')

window.addEventListener('load', handleLoad)

function handleLoad() {
  setTimeout(() => {
    loader.classList.remove('open')
  }, 200)
}
