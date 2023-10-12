/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line func-names
const animateSmth = function (dur, callback, fin) {
  let timeStart;

  function _animateInTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    const timeElapsed = time - timeStart;
    const complection = Math.min(timeElapsed / dur, 1);

    callback(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateInTime);
    } else if (typeof fin === 'function') {
      fin();
    }
  }

  return _animateInTime;
};

export function fadeIn(dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateInTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
}

export function fadeOut(dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) { this[i].style.display = 'none'; }
    };

    const ani = this.animateInTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
}

export function fadeToggle(dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateInTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) { this[i].style.display = 'none'; }
      };

      const ani = this.animateInTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
}
