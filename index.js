/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-zero-clipboard',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/zeroclipboard/dist/ZeroClipboard.js');
    app.import(app.bowerDirectory + '/zeroclipboard/dist/ZeroClipboard.swf', { destDir: 'assets' });
  }
};
