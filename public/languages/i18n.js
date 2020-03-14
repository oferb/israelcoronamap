let translation = En;

const setLanguage = selectedLanguage => {
  localStorage.setItem('language', selectedLanguage);
};

const setTranslation = language => {
  if (language === 'He') {
    translation = He;
  } else if ( language === 'Ar'){
    translation = Ar;
  }
  else {
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

const setTranslationInHTML = () => {
  setTranslationByID('last-updated-text', 'lastUpdatedIn');
  setTranslationByID('magen-david-adom', 'magenDavidAdom');
  setTranslationByID('health-ministry', 'healthMinistry');
  setTranslationByID('magen-david-adom-mobile', 'magenDavidAdom');
  setTranslationByID('health-ministry-mobile', 'healthMinistry');
  setTranslationByID('search-for-flights', 'searchForFlights');
  setTranslationByID('embed-code', 'embedCodes');
  setTranslationByID('about', 'about');
  setTranslationByID('contact-use', 'contactUse');
  setTranslationByID('select-language', 'selectLanguage');

  
};

const setTranslationByID = (id, text) => {
  document.getElementById(id).innerText = i18n(text);
};

const addClassByID = (id, className) => {
  const el = document.getElementById(id);
  el.classList.add(className);
};

const getLanguage = () =>{
  return localStorage.getItem('language');
}

const setSelectedLanguageDefaultValue = (language) =>{
  var mySelect = document.getElementById('language-select');
  for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == language) {
        mySelect.selectedIndex = j;
        break;
    }
  }
}

const initTranslation = () => {
  let language = 'He';
  const LSLanguage = localStorage.getItem('language');
  if(LSLanguage){
    language = LSLanguage;
    let params = `/?language=${language}`;
    const id = parseInt(getQueryParam('id'));
    if(id){
      params += `&id=${id}`;
    }
    window.history.pushState("Corona map", "Corona map", params);
  }else{
    const queryParamlanguage = getQueryParam('language');
    if(queryParamlanguage){
      language = queryParamlanguage;
    }
  }
  localStorage.setItem('language', language);
  setTranslation(language);
  setTranslationInHTML();
  setSelectedLanguageDefaultValue(language);
};
