function toggleSidebar() {
  var isClosed = document.getElementsByClassName('sidebar-closed');
  if(isClosed.length > 0) {
    isClosed[0].setAttribute('class', 'sidebar-open');
    document.getElementsByClassName('sidebar-open')[0].focus();
  } else {
    // document.getElementsByClassName('sidebar-open')[0].setAttribute('class', 'sidebar-closed');
  }
}

function toggleWhyAndroid() {
  var isClosed = document.getElementsByClassName('why-android-list-closed');
  if(isClosed.length > 0) {
    isClosed[0].setAttribute('class', 'why-android-list-open');
    document.getElementsByClassName('why-android-expand-closed')[0].setAttribute('class', 'fa fa-caret-up why-android-expand-open');
    document.getElementsByClassName('menu-list-label')[0].setAttribute('class', 'menu-list-label-active');
    document.getElementsByClassName('why-android-list-open')[0].focus();
  } else {
    document.getElementsByClassName('why-android-list-open')[0].setAttribute('class', 'why-android-list-closed');
    document.getElementsByClassName('menu-list-label-active')[0].setAttribute('class', 'menu-list-label');
    document.getElementsByClassName('why-android-expand-open')[0].setAttribute('class', 'fa fa-caret-down why-android-expand-closed');
  }
}
