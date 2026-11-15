document.querySelectorAll<HTMLElement>('[data-faq]').forEach((faq) => {
  faq.querySelectorAll<HTMLButtonElement>('.faq__trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!open));
      const item = trigger.closest('.faq-item');
      item?.classList.toggle('is-open', !open);
    });
  });
});
