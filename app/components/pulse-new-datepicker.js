import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let popup = this.$().popup({
      popup: '.popup',
      on: 'manual',
      position: "top left",
      closable: false,
      lastResort: 'bottom right',
    });

    this.set('popup', popup);
  },

  toggle() {
    this.get('popup').popup('toggle');
  },

  actions: {
    apply(granularity, newDate) {
      //this.sendAction('onApply', granularity, newDate);
      this.toggle();
    },

    showPopup() {
      this.toggle();
    },

    cancel() {
      //this.sendAction('onCancel');
      this.toggle();
    }
  }
});
