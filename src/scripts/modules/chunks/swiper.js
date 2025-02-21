const defaultSlidersArr = document.querySelectorAll('.swiper');

defaultSlidersArr.forEach((slider, idx) => {
  const paginationArr = slider.querySelectorAll('.swiper-pagination');

  let sliderLength = slider.children[0].children.length;
  let result = sliderLength > 1 ? [idx] : false;

  new Swiper(slider, {
    grabCursor: true,
    loop: result,
    speed: 500,
    spaceBetween: 15,
    slidesPerView: 1,

    pagination: {
      el: paginationArr[idx],
      clickable: true,
    },

    breakpoints: {},
  });
});
