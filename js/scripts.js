function toggleSidebar() {
  var isClosed = document.getElementsByClassName('sidebar-closed');
  if(isClosed.length > 0) {
    isClosed[0].setAttribute('class', 'sidebar-open');
    document.getElementsByClassName('sidebar-open')[0].focus();
  } else {
    document.getElementsByClassName('sidebar-open')[0].setAttribute('class', 'sidebar-closed');
  }
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
    document.getElementsByClassName('caret-up')[0].setAttribute('class', 'why-android-expand-open caret-down');
  }
  // document.getElementsByClassName('why-android-list-closed')[0].style.cssText = 'opacity: 1; height: auto;';
  // document.getElementsByClassName('caret-down')[0].setAttribute('class', 'why-android-expand-open caret-up');
}

function addGreen(className) {
  document.getElementsByClassName(className)[0].children[0].children[0].style.cssText = 'fill: #6ab344;';
  document.getElementsByClassName(className)[0].children[1].style.cssText = 'color: #6ab344;';
}

function removeGreen (className) {
  document.getElementsByClassName(className)[0].children[0].children[0].style.cssText = '';
  document.getElementsByClassName(className)[0].children[1].style.cssText = '';
}
