function toggleSidebar() {
  var isClosed = document.getElementsByClassName('sidebar-closed');
  // console.log('isClosed ', isClosed);
  if(isClosed.length > 0) {
    isClosed[0].setAttribute('class', 'sidebar-open');
    document.getElementsByClassName('sidebar-open')[0].focus();
  } else {
    // document.getElementsByClassName('sidebar-open')[0].setAttribute('class', 'sidebar-closed');
  }
}
