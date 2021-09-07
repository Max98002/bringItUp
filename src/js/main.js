import MainSlider from "./modules/slider/slider-main";
import SliderMini from "./modules/slider/slider-mini";
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";
import {
  CheckTextInput,
  InitMask
} from './modules/services/service';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const mainSlider = new MainSlider({
    container: '.page',
    btns: '.next'
  });
  mainSlider.render();
  
  const modulemainSlider = new MainSlider({
    container: '.moduleapp',
    btns: '.next'
  });
  modulemainSlider.render();

  const miniSlider = new SliderMini({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    active: 'card-active',
    animate: true,
    autoplay: true
  });

  miniSlider.init();

  const modulesSlider = new SliderMini({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    active: 'card-active',
    animate: true,
    autoplay: true
  });

  modulesSlider.init();

  const feedSlider = new SliderMini({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    active: 'feed__item-active',
    autoplay: true
  });

  feedSlider.init();



  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('.module__video-item .play', '.overlay').init();

  new Difference('.officerold', '.officernew', '.officer__card-item').init();

  new Forms('form').init();

  new InitMask('[name="phone"]').init();
  new CheckTextInput('[type="email"]').init();
  new ShowInfo('.plus__content').init();
  new Download('.download').init();
});