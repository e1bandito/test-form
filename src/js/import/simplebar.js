import SimpleBar from 'simplebar';

const $simpleBars = document.querySelectorAll('.js-simplebar');

$simpleBars.forEach((el) => {
  new SimpleBar(el, {
    autoHide: false,
  });
});
