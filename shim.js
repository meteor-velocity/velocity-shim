// Make Velocity globals available in this package
var packageContext = this,
    packages       = [
      'velocity:core'
    ];
_.forEach(packages, function (packageName) {
  var packageGlobals = Package[packageName];
  if (packageGlobals) {
    _.forEach(packageGlobals, function (globalValue, globalName) {
      packageContext[globalName] = globalValue;
    });
  }
});
