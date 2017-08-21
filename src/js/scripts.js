function toggleSidebar(e) {
  var isClosed = document.getElementsByClassName('sidebar-closed');
  if(isClosed.length > 0 && window.innerWidth < 1000) {
    isClosed[0].setAttribute('class', 'sidebar-open');
    document.getElementsByClassName('sidebar-open')[0].focus();
    addBlurListeners();
  }
}

window.addEventListener('resize', resizeMenuChecker);

function resizeMenuChecker(e) {
  if(e.relatedTarget === null) {
    document.getElementsByClassName('sidebar-open')[0].setAttribute('class', 'sidebar-closed');
  }
  if(window.innerWidth > 999) {
    if(document.getElementsByClassName('sidebar-closed')[0]) {
      document.getElementsByClassName('search-form-input')[0].removeEventListener('blur', resizeMenuChecker, false);
      document.getElementsByClassName('language-selector')[0].removeEventListener('blur', resizeMenuChecker, false);
    } else {
      document.getElementsByClassName('sidebar-open')[0].setAttribute('class', 'sidebar-closed');
    }
  }
}

function addBlurListeners() {
  document.getElementsByClassName('sidebar-open')[0].addEventListener('blur', resizeMenuChecker, false);
  document.getElementsByClassName('search-form-input')[0].addEventListener('blur', resizeMenuChecker, false);
  document.getElementsByClassName('language-selector')[0].addEventListener('blur', resizeMenuChecker, false);
}

function toggleWhyAndroid() {
  var isClosed = document.getElementsByClassName('why-android-list-closed');
  if(isClosed.length > 0) {
    isClosed[0].setAttribute('class', 'why-android-list-open');
    document.getElementsByClassName('caret-down')[0].setAttribute('class', 'why-android-expand-open caret-up');
    document.getElementsByClassName('menu-list-label')[0].setAttribute('class', 'menu-list-label-active');
    document.getElementsByClassName('why-android-list-open')[0].focus();
  } else {
    document.getElementsByClassName('why-android-list-open')[0].setAttribute('class', 'why-android-list-closed');
    document.getElementsByClassName('menu-list-label-active')[0].setAttribute('class', 'menu-list-label');
    document.getElementsByClassName('caret-up')[0].setAttribute('class', 'why-android-expand-closed caret-down');
  }
}

function addGreen(className) {
  if(className === 'why-android-wrapper') {
    document.getElementsByClassName(className)[0].children[0].style.cssText = 'color: #6ab344;';
    document.getElementsByClassName(className)[0].children[1].style.cssText = 'fill: #6ab344;';
  } else {
    document.getElementsByClassName(className)[0].children[0].children[0].style.cssText = 'fill: #6ab344;';
    document.getElementsByClassName(className)[0].children[1].style.cssText = 'color: #6ab344;';
  }
}

function removeGreen (className) {
  if(className === 'why-android-wrapper') {
    document.getElementsByClassName(className)[0].children[0].style.cssText = '';
    document.getElementsByClassName(className)[0].children[1].style.cssText = '';
  } else {
    document.getElementsByClassName(className)[0].children[0].children[0].style.cssText = '';
    document.getElementsByClassName(className)[0].children[1].style.cssText = '';
  }
}

function viewSearch() {
  if(document.getElementsByClassName('search-form')[0]) {
    document.getElementsByClassName('search-form')[0].setAttribute('class', 'search-form-desktop');
    document.getElementsByClassName('search-form-icon-desktop')[0].style.cssText = 'display: none;';
    document.getElementsByClassName('search-form-icon-desktop-active')[0].style.cssText = 'display: inline-block;';
  }
}

function closeDesktopSearch() {
  document.getElementsByClassName('search-form-desktop')[0].setAttribute('class', 'search-form');
  document.getElementsByClassName('search-form-icon-desktop-active')[0].style.cssText = 'display: none;';
  document.getElementsByClassName('search-form-icon-desktop')[0].style.cssText = 'display: inline-block;';
}