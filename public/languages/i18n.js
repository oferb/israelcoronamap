let translation = He;

const setLanguage = selectedLanguage => {
  localStorage.setItem('language', selectedLanguage);
};

const setTranslation = language => {
  if (language === 'He') {
    translation = He;
  } else if (language === 'Ar') {
    translation = Ar;
  } else if (language === 'Ru') {
    translation = Ru;
  } else {
    translation = En;
  }
};

const i18n = text => {
  if (translation.hasOwnProperty(text)) {
    return translation[text];
  } else {
    return text;
  }
};

const getDirection = () => {
  const language = localStorage.getItem('language');
  if (language === 'He' || language === 'Ar') {
    return 'rtl';
  } else {
    return 'ltr';
  }
};

const setTranslationByID = (id, text) => {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = i18n(text);
  }
};

const addClassByID = (id, className) => {
  const el = document.getElementById(id);
  el.classList.add(className);
};

const getLanguage = () => {
  const lang = localStorage.getItem('language');
  return lang ? lang : 'He';
};

const getQueryParam = (name) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

const initializeLanguage = () => {
  let language = 'He';
  if (window.location.pathname.includes('embed')) {
    setTranslation(language);
    return;
  }

  const queryParamLanguage = getQueryParam('language');
  if (queryParamLanguage) {
    language = queryParamLanguage;
  } else {
    const LSLanguage = localStorage.getItem('language');
    if (LSLanguage) {
      language = LSLanguage;
      let params = `/?language=${language}`;
      const id = parseInt(getQueryParam('id'));
      if (id) {
        params += `&id=${id}`;
      }
      window.history.pushState('Corona map', 'Corona map', params);
    }
  }

  localStorage.setItem('language', language);
  setTranslation(language);
  return;
};
