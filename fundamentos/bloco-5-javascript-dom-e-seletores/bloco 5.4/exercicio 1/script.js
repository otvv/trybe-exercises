window.onload = () => {

  (function readLocalStorage() {

    // page elements
    const body = document.querySelector('body');
    const headerElement = document.querySelector('.header-text');
    const paragraphElement = document.querySelector('p');

    // check if the storage is valid
    if (typeof Storage && localStorage) {
      
      body.style.background = localStorage.getItem('bgColor');
      paragraphElement.style.color = localStorage.getItem('txtColor');
      paragraphElement.style.fontSize = localStorage.getItem('fntSize');
      headerElement.style.letterSpacing = localStorage.getItem('txtSpacing');
      headerElement.style.fontFamily = localStorage.getItem('fntFamily');
      paragraphElement.style.lineHeight = localStorage.getItem('lnHeight');
    }
  })();

  function updateLocalStorage() {
    
    // page elements
    const body = document.querySelector('body');
    const headerElement = document.querySelector('.header-text');
    const paragraphElement = document.querySelector('.header-text');

    // input elements
    const bgColor = document.getElementById('bg-col');
    const txtCol = document.getElementById('txt-col');
    const fntSize = document.getElementById('fnt-size');
    const txtSpacing = document.getElementById('txt-spacing');
    const fntFamily = document.getElementById('fnt-family');
    const lnHeight = document.getElementById('ln-height');
    
    // check if the storage is valid
    if (typeof Storage && localStorage) {
      
      localStorage.setItem('bgColor', body.style.background);
      localStorage.setItem('txtColor', paragraphElement.style.color);
      localStorage.setItem('fntSize', paragraphElement.style.fontSize);
      localStorage.setItem('txtSpacing', headerElement.style.letterSpacing);
      localStorage.setItem('fntFamily', headerElement.style.fontFamily);
      localStorage.setItem('lnHeight', paragraphElement.style.lineHeight);
    }

    body.style.background = bgColor.value.toString();
    paragraphElement.style.color = txtCol.value.toString();
    paragraphElement.style.fontSize = fntSize.value + 'px';
    headerElement.style.letterSpacing = txtSpacing.value + 'px';
    headerElement.style.fontFamily = fntFamily.value.toString();
    paragraphElement.style.lineHeight = lnHeight.value + 'px';
  }

  // listen for click event
  document.getElementById('btn-update').addEventListener('click', updateLocalStorage);
}