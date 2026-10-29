(() => {
  const button = document.getElementById('languageSwitch');
  const translatable = document.querySelectorAll('[data-id][data-en]');
  let language = 'id';

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    translatable.forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });
    button.textContent = language === 'id' ? 'EN' : 'ID';
    button.setAttribute('aria-label', language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
  }

  button.addEventListener('click', () => setLanguage(language === 'id' ? 'en' : 'id'));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
