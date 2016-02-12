(function() {
  // updates content height to fill window
  setContentMinHeight = function() {
    // check width for phones
    var titleEl = document.querySelector('main .title');
    var contentEl = document.querySelector('main .content');
    // set content height to fill window
    var height = window.innerHeight - (titleEl ? titleEl.clientHeight : 0) - 200;
    var styles = contentEl.getAttribute('style') || '';
    contentEl.setAttribute('style', styles + 'min-height: ' + height + 'px;');
  };

  // listen resize events
  window.addEventListener('resize', setContentMinHeight);
  // initial sizing
  setContentMinHeight();
})();