module.exports = {
  description: 'Adds zeroclipboard as a bower dependency to the parent project'

  afterInstall: function(options) {
    return this.addBowerPackageToProject('zeroclipboard', '2.2.0');
  }
};
