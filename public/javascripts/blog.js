$(document).ready(function() {
    // add custom button classes
    $('.fm-medium-profile.button').addClass('dark');
    // add target blank to outgoing links
    $('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
           $(this).attr("target","_blank");
        }
     });
});