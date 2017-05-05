import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pulse-new-datepicker-content', 'Integration | Component | pulse new datepicker content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pulse-new-datepicker-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pulse-new-datepicker-content}}
      template block text
    {{/pulse-new-datepicker-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
