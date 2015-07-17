import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('zero-clipboard', 'Integration | Component | zero clipboard', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zero-clipboard}}`);

  assert.equal(this.$().text(), '');
});

test('it renders with an innerClass', function(assert) {
  this.render(hbs`{{zero-clipboard innerClass="some-test-class"}}`);

  assert.ok(this.$('button').hasClass('some-test-class'));
});

test('it renders with a label', function(assert) {
  this.render(hbs`{{zero-clipboard label="Mystical Unicorn"}}`);

  assert.equal(this.$().text(), "Mystical Unicorn");
});

test('it has a default title', function(assert) {
  this.render(hbs`{{zero-clipboard}}`);
  assert.equal(this.$('.ember-view').attr('title'), "Copy to clipboard");
});

test('it sets the data-clipboard-test property based on a passed in text value', function(assert) {
  this.render(hbs`{{zero-clipboard text="Some text to copy"}}`);
  assert.equal(this.$('.ember-view').attr('data-clipboard-text'), "Some text to copy");
});