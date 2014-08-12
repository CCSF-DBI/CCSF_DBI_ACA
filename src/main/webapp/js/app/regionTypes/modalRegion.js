/**
 * for modal dialog content
 */
define ([
    'jquery', 'marionette'
],
function($, Marionette) {
    var ModalRegion = Marionette.Region.extend({
        open: function (view) {
            this.focus();
            $("#focusContent", this.$el).html(view.$el);
        },
        onClose: function (view) {
            this.hide();
        },
        focus: function() {

        },
        unFocus: function() {

        }
    });
    return ModalRegion;
});