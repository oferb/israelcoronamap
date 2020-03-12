const i18n = text => {
  if (He.hasOwnProperty(text)) {
    return He[text];
  } else {
    return text;
  }
};
