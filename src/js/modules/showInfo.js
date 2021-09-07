export default class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const minus = btn.querySelector('svg').firstElementChild;

        if (btn.closest('.module__info-show').nextElementSibling.style.display == 'block') {
          btn.closest('.module__info-show').nextElementSibling.style.display = 'none';
          minus.style.opacity = '1';
        } else {
          btn.closest('.module__info-show').nextElementSibling.style.display = 'block';
          minus.style.opacity = '0';
        }

      });
    });
  }

  init() {
    this.bindTriggers();
  }
}