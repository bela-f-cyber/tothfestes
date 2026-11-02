const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const panel = document.getElementById('sidePanel');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open);
  panel.setAttribute('aria-hidden', !open);
  (open ? closeBtn : menuBtn).focus();
}

menuBtn.addEventListener('click', () => setMenu(true));
closeBtn.addEventListener('click', () => setMenu(false));
overlay.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Menüpontra kattintva bezáródik a panel
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

(function () {
  const loader = document.getElementById("loader");
  if (!loader) return;

  const MIN_TIME = 500; // loader shows at least 1 second
  const MAX_TIME = 4000; // safety net: never block longer than this
  const start = Date.now();
  let done = false;

  const hide = () => {
    if (done) return;
    done = true;
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 1000); // clean up after the animation
  };

  window.addEventListener("load", () => {
    const remaining = Math.max(0, MIN_TIME - (Date.now() - start));
    setTimeout(hide, remaining);
  });

  setTimeout(hide, MAX_TIME);
})();