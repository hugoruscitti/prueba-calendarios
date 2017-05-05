import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pulse-new-datepicker', 'Integration | Component | pulse new datepicker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pulse-new-datepicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pulse-new-datepicker}}
      template block text
    {{/pulse-new-datepicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
