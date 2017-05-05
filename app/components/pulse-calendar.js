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
      hoveringTooltip: false,
      showTopbar: false,
    });

  }
});
