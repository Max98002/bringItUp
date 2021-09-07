import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }

  showSlides(n) {
    
    try {
      if (n > this.slides.length) {
        this.slidIndex = 1;
      }
      if (n < 1) {
        this.slidIndex = this.slides.length;
      }
      this.hanson.style.bottom = '-164px';

      if (n === 3) {
        setTimeout(() => {
          this.hanson.style.bottom = '0';
        }, 3000);
      } else {
        this.hanson.style.bottom = '-164px';
      }
    } catch (error) {

    }

    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });

    this.slides[this.slidIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides(this.slidIndex += n);
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
      });

      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slidIndex = 1;
        this.showSlides(this.slidIndex);
      })
    });
    document.querySelectorAll('.prevmodule').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });

    document.querySelectorAll('.nextmodule').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }

  render() {

    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (error) {}
      this.showSlides(this.slidIndex);

      this.bindTriggers();
    } 
  }
}