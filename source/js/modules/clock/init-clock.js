export const initClock = () => {
  setInterval(clock, 1000);
  clock();
};

const clockEl = document.querySelector('#clock');

function clock() {
  let date = new Date();
  let hours = date.getHours() - (date.getHours() >= 12 ? 12 : 0);
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let period = date.getHours() >= 12 ? 'PM' : 'AM';

  if (clockEl) {
    clockEl.innerHTML = hours + ':' + minutes + ' ' + period;
  }
}
