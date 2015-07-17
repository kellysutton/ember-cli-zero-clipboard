import Ember from 'ember';
import layout from '../templates/components/zero-clipboard';
/* global ZeroClipboard */

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['title', 'data-clipboard-text', 'data-clipboard-target'],
  title: 'Copy to clipboard',

  didInsertElement: function() {
    var client = new ZeroClipboard(this.get('element'));

    //bind aftercopy to an ember event
    client.on("aftercopy", Ember.run.bind(this, function(event) {
      this.send('afterCopy', event);
    }));
  },

  "data-clipboard-text": computed('text', function() {
    return this.get('text');
  }),

  "data-clipboard-target": computed('cbTarget', function() {
    return this.get('cbTarget');
  })
});
