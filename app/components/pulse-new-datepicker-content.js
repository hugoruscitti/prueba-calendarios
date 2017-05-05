import Ember from 'ember';

export default Ember.Component.extend({
  periodos: [
    {text: "dia"},
    //{text: "semana"},
    {text: "mes"},
  ],
  selected: 'dia',

  esDia: Ember.computed('selected', function() {
    return this.get('selected') === 'dia';
  }),

  esMes: Ember.computed('selected', function() {
    return this.get('selected') === 'mes';
  }),



});
