/*jshint -W117, -W097 */
"use strict";

Package.describe({
  name: 'velocity:shim',
  summary: 'A package to expose the Velocity package to the global object.',
  version: '0.0.2',
  git: 'https://github.com/meteor-velocity/velocity-shim.git',
  debugOnly: true
});

Package.on_use(function (api) {
  var BOTH = ['server', 'client'];
  api.use('underscore@1.0.1', BOTH);
  api.add_files('shim.js', BOTH);
});
