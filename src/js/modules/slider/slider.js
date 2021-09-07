export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    active = '',
    animate,
    autoplay
  } = {}) {
    try {
      this.container = document.querySelector(container);
      this.slides = this.container.children;
      this.btns = document.querySelectorAll(btns);
      this.prev = document.querySelector(prev);
      this.next = document.querySelector(next);
    } catch (error) {}
    this.activeClass = active;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slidIndex = 1;
  }
}