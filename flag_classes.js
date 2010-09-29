(function ($) {

// Update the CSS classes of flagged items after their flag link is clicked.
$(document).bind('flagGlobalAfterLinkUpdate', function(event, data) {
  var class_names = data.contentType + '-flagged-' + data.flagName.replace(/_/g, '-');
  class_names += ' ' + class_names + '-self';
  var method = (data.flagStatus == 'flagged') ? 'addClass' : 'removeClass';
  $(data.link).parents('.flag-classes-wrapper, .views-row').eq(0)[method](class_names);
});

})(jQuery);
