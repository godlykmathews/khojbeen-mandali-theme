document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var navContainer = document.querySelector('.header-nav-container');
  var toggleButton = document.querySelector('.mobile-menu-toggle');
  var closeButton = document.querySelector('.mobile-menu-close');

  function closeMenu() {
    body.classList.remove('menu-open');
  }

  function openMenu() {
    body.classList.add('menu-open');
  }

  if (toggleButton && closeButton && navContainer) {
    toggleButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    navContainer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  var yearTarget = document.getElementById('current-year');
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  var carouselTracks = Array.prototype.slice.call(
    document.querySelectorAll('.logo-carousel-track')
  );
  var autoScrollStates = new Map();

  function getLogoCount(track) {
    return track.querySelectorAll('.logo-item:not(.is-clone)').length;
  }

  function getAutoScrollState(track) {
    return autoScrollStates.get(track) || null;
  }

  function measureLoopDistance(track) {
    var firstOriginal = track.querySelector('.logo-item:not(.is-clone)');
    var firstClone = track.querySelector('.logo-item.is-clone');

    if (!firstOriginal || !firstClone) {
      return 0;
    }

    return Math.max(firstClone.offsetLeft - firstOriginal.offsetLeft, 0);
  }

  function getOriginalContentWidth(track) {
    var originals = Array.prototype.slice.call(
      track.querySelectorAll('.logo-item:not(.is-clone)')
    );

    if (originals.length === 0) {
      return 0;
    }

    var contentWidth = 0;
    originals.forEach(function (item) {
      contentWidth += item.getBoundingClientRect().width;
    });

    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.gap || styles.columnGap || '0') || 0;
    var padLeft = parseFloat(styles.paddingLeft || '0') || 0;
    var padRight = parseFloat(styles.paddingRight || '0') || 0;

    if (originals.length > 1) {
      contentWidth += gap * (originals.length - 1);
    }

    contentWidth += padLeft + padRight;
    return contentWidth;
  }

  function removeClones(track) {
    track.querySelectorAll('.logo-item.is-clone').forEach(function (item) {
      item.remove();
    });
    Array.prototype.slice.call(track.children).forEach(function(child) {
      child.style.transform = '';
    });
  }

  function buildLoop(track) {
    var originals = Array.prototype.slice.call(
      track.querySelectorAll('.logo-item:not(.is-clone)')
    );

    removeClones(track);

    if (originals.length < 2) {
      return false;
    }

    originals.forEach(function (item) {
      var clone = item.cloneNode(true);
      clone.classList.add('is-clone');
      clone.setAttribute('aria-hidden', 'true');
      if (clone.tagName === 'A') {
        clone.setAttribute('tabindex', '-1');
      }
      clone.querySelectorAll('a, button, input, select').forEach(function(el) {
        el.setAttribute('tabindex', '-1');
      });
      track.appendChild(clone);
    });

    var distance = measureLoopDistance(track);
    if (distance <= 1) {
      removeClones(track);
      return false;
    }

    autoScrollStates.set(track, {
      rafId: null,
      lastTime: 0,
      distance: distance,
      speed: 40,
      currentPosition: 0
    });

    track.scrollLeft = 0;
    return true;
  }

  function stopAutoScroll(track) {
    var state = getAutoScrollState(track);
    if (!state) {
      return;
    }

    if (state.rafId) {
      window.cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }
    state.lastTime = 0;
  }

  function teardownLoop(track) {
    stopAutoScroll(track);
    autoScrollStates.delete(track);
    removeClones(track);
  }

  function startAutoScroll(track) {
    if (!track.classList.contains('is-overflowing')) {
      return;
    }

    var state = getAutoScrollState(track);
    if (!state || state.rafId) {
      return;
    }

    function tick(timestamp) {
      var latest = getAutoScrollState(track);
      if (!latest || !track.classList.contains('is-overflowing')) {
        return;
      }

      if (!latest.lastTime) {
        latest.lastTime = timestamp;
      }

      var delta = timestamp - latest.lastTime;
      if (delta > 100 || delta < 0) {
        delta = 16.66; // Smooth out frame drops or inactive tab
      }
      latest.lastTime = timestamp;
      
      latest.currentPosition += latest.speed * (delta / 1000);

      if (latest.currentPosition >= latest.distance) {
        latest.currentPosition -= latest.distance;
      }

      if (track.scrollLeft > 0) {
        track.scrollLeft = 0;
      }

      var transformValue = 'translate3d(-' + latest.currentPosition + 'px, 0, 0)';
      Array.prototype.slice.call(track.children).forEach(function(child) {
        child.style.transform = transformValue;
      });

      latest.rafId = window.requestAnimationFrame(tick);
    }

    state.rafId = window.requestAnimationFrame(tick);
  }

  function detectOverflow(track) {
    return getOriginalContentWidth(track) - track.clientWidth > 4;
  }

  function updateTrackMode(track) {
    var logoCount = getLogoCount(track);

    track.classList.remove('few-items');
    track.classList.remove('is-overflowing');
    teardownLoop(track);

    if (logoCount === 0) {
      return;
    }

    if (logoCount <= 3) {
      track.classList.add('few-items');
      track.scrollLeft = 0;
      return;
    }

    var isOverflowing = detectOverflow(track);
    if (isOverflowing) {
      track.classList.add('is-overflowing');
      if (buildLoop(track)) {
        startAutoScroll(track);
      }
      return;
    }

    track.scrollLeft = 0;
  }

  function refreshCarousels() {
    carouselTracks.forEach(function (track) {
      updateTrackMode(track);
    });
  }

  carouselTracks.forEach(function (track) {
    updateTrackMode(track);

    track.querySelectorAll('img').forEach(function (image) {
      image.addEventListener('load', function () {
        updateTrackMode(track);
      });
    });
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      refreshCarousels();
    }, 180);
  });

  window.setTimeout(refreshCarousels, 220);
  window.setTimeout(refreshCarousels, 900);
});
