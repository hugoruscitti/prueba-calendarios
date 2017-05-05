import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let batchMode = false;
    let singleDate = false;

    if (this.get('wholeMonth')) {
      batchMode = 'month';
      singleDate = false;
    } else {
      singleDate = true;
    }

    this.$('#calendario').dateRangePicker({
      alwaysOpen: true,
      inline: true,
      container: '#calendario',
      singleMonth: true,
      batchMode: batchMode,
    	showShortcuts: false,
      singleDate: singleDate,
      hoveringTooltip: true   ,
      hoveringTooltip: function(days) {
  var D = ['One','Two', 'Three','Four','Five'];
  return D[days] ? D[days] : days;
},
      showTopbar: false,
    });

    console.log({batchMode});
  }
});
