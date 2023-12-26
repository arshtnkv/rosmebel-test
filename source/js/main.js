import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initClock} from './modules/clock/init-clock.js';
import {Burger} from './modules/burger/burger.js';
import {StickyHeader} from './modules/burger/sticky-header.js';


window.addEventListener('DOMContentLoaded', () => {

  mobileVhFix();

  window.addEventListener('load', () => {
    initClock();
    const burger = new Burger();
    burger.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
