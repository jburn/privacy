'use strict';

const languagePicker = document.querySelector('[data-language-selector]');

if (languagePicker) {
  const languageSelect = languagePicker.querySelector('select');
  languageSelect.addEventListener('change', () => {
    window.location.assign(languageSelect.value);
  });
  languagePicker.hidden = false;
}
