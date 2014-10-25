/*jshint -W117, -W097 */
"use strict";

Package.describe({
  name: 'velocity:shim',
  summary: 'Exposes the Velocity package to the global object',
  version: '0.0.1',
  git: 'https://github.com/meteor-velocity/velocity-shim.git',
  debugOnly: true
});

Npm.depends({
  'lodash': '2.4.1'
});

Package.on_use(function (api) {
  api.add_files('shim.js', 'server');
});
