const header = document.querySelector('.header');

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    header.classList.remove('is-scroll');
  } else {
    header.classList.add('is-scroll');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(header);
