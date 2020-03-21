let langs = {};
let lang;
let langDirection;

const getLanguage = () => {
  let lang = getQueryParam('lang');
  if (lang) {
    return lang.toLowerCase();
  }
  lang = localStorage.getItem('language');
  if (lang) {
    return lang.toLowerCase();
  }
  return 'he';
};

// Save language in local storage if not already there, update HTML
const setLanguage = (selectedLang) => {
  lang = selectedLang;
  localStorage.setItem('language', lang);
  setQueryParam('lang', lang);
  langDirection = langs[lang].direction;
  setTranslationInHTML();
  document.title = i18n('title');
};

const setTranslationInHTML = () => {
  // For keys that match element IDs:
  for (var key in langs[lang]) {
    setTranslationByID(key, key);
  }
  // For keys that don't, since 2 elements have the same text
  setTranslationByID('magen-david-adom-mobile', 'magen-david-adom');
  setTranslationByID('health-ministry-mobile', 'health-ministry');
  setTranslationByID('last-updated-title-sick', 'last-updated-text');
  setTranslationByID('select-language-header', 'select-language');
};

const setTranslationByID = (id, langKey) => {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = i18n(langKey);
  }
};

const i18n = langKey => {
  if (langs[lang].hasOwnProperty(langKey)) {
    return langs[lang][langKey];
  } else {
    console.log(langKey);
    return langs['he'][langKey];
  }
};

const initLanguage = () => {
  // Get language from url or local storage
  lang = getLanguage();
  // Set it, and update everything needed
  setLanguage(lang);
};
