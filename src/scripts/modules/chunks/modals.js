import { bodyLock, bodyUnLock } from '../functions/body_lock.js';

const parentContainer = document.getElementById('modal-wrapper');

const popupSpeed = parentContainer.dataset.popupSpeed;
const time = popupSpeed ? Number(popupSpeed) : 500;

let unlock = true;

document.addEventListener('click', (e) => {
  const eTarget = e.target;

  if (eTarget.closest('[data-popup]')) {
    const popupName = eTarget.getAttribute('data-popup');
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
  }
});

const close = document.querySelectorAll('[data-popup-close]');

close.forEach((item) => {
  item.addEventListener('click', () => {
    popupClose(item.closest('.popup'));
  });
});

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.is-active');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add('is-active');

    currentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__body')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('is-active');

    if (doUnlock) {
      bodyUnLock(time);
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    const popupActive = document.querySelector('.popup.is-active');

    popupClose(popupActive);
  }
});

(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function () {
  if (!Element.prototype.matches) {
    Element.prototype.mathes =
      Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();
