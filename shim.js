// Make Velocity globals available in this package
var packageContext = this,
    packages       = [
      'velocity:core',
      'velocity:node-soft-mirror'
    ];
_.forEach(packages, function (package) {
  _.forEach(Package[package], function (globalValue, globalName) {
    packageContext[globalName] = globalValue;
  });
});
