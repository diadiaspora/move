document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu');
  const nav = document.querySelector('#nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const date = document.querySelector('#date');
  if (date) {
    const now = new Date();
    date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }
  const form = document.querySelector('#quote-form');
  const status = document.querySelector('#status');
  if (form && status) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.name.value.trim();
    status.textContent = `Thanks, ${name}. This demo form has not sent your request. Connect a secure form service or CRM before publishing.`;
    form.reset();
  });
});