/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const copyToClipboard = () => {
  let clipboard = new ClipboardJS('#copyToClipboardButton', {
    container: document.getElementsByClassName('modal')
  });
  clipboard.on('success', function() {
    changeCopyToClipboardButtonText();
  });
};

const changeCopyToClipboardButtonText = () => {
  let button = document.getElementById("copyToClipboardButton");
  button.innerText="הועתק";
  button.classList.remove("btn-copy-clipboard");
  button.classList.add("btn-copy-clipboard-success");
  setTimeout(function () {
    button.innerText="העתקה";
    button.classList.add("btn-copy-clipboard");
    button.classList.remove("btn-copy-clipboard-success");
  }, 3000);
};
