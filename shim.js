// Make Velocity globals available in this package
var _ = Npm.require('lodash'),
    packageContext = this;

_.forEach(Package['velocity:core'], function (globalValue, globalName) {
  packageContext[globalName] = globalValue
});
