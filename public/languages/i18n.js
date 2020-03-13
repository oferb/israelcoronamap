let translation = En;
const setLanguage = selectedLanguage => {
  language = selectedLanguage;
  setTranslation();
};

const setTranslation = () => {
  if (language === 'He') {
    translation = He;
  } else {
    translation = En;
  }

  setDirection();
};

const i18n = text => {
  if (translation.hasOwnProperty(text)) {
    return translation[text];
  } else {
    return text;
  }
};

const setDirection = () => {
//   document.body.style.direction = getDirection();
};

const getDirection = () => {
  if (language === 'He' || language === 'Ar') {
    return 'rtl';
  } else {
    return 'ltr';
  }
};
