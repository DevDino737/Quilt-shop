// Simple mobile nav toggle and smooth anchor scrolling

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');

  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('is-open');
    if (nav?.classList.contains('is-open')) {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = '#fff7f1';
      nav.style.padding = '12px 14px';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '16px';
      nav.style.border = '1px solid rgba(236, 155, 184, 0.18)';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 12px 30px rgba(60, 31, 42, 0.12)';
    } else {
      nav?.removeAttribute('style');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', evt => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        evt.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        nav?.classList.remove('is-open');
        nav?.removeAttribute('style');
      }
    });
  });
});
