$(document).ready(function () {
  $('.header__burger').click(function (event) {
    // добавляем бургеру и меню класс active
    $('.header__burger, .header__menu').toggleClass('active');
    // убираем прокрутку под бургером
    $('body').toggleClass('lock');
  });
});
