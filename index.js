
var assert = require('assert');
var indexOf = require('indexof');


/**
 * Expose `Tester`.
 */

module.exports = Tester;


/**
 * Initialize a new `Tester`.
 *
 * @param {Integration} integration
 */

function Tester (integration) {
  if (!(this instanceof Tester)) return new Tester(integration);
  this.integration = integration;
}


/**
 * Assert that the integration's name is `string`.
 *
 * @param {String} name
 * @return {Tester}
 */

Tester.prototype.name = function (string) {
  var name = this.integration.name;
  assert(
    string === name,
    'Expected name to be "' + string + '", but it was "' + name + '".'
  );
  return this;
};


/**
 * Assert that the integration has a global `key`.
 *
 * @param {String} key
 * @return {Tester}
 */

Tester.prototype.global = function (key) {
  assert(
    indexOf(this.integration.globals, key) !== -1,
    'Expected global "' + key + '" to be registered.'
  );
  return this;
};


/**
 * Assert that the integration has an `option` with a default `value`.
 *
 * @param {String} option
 * @param {Mixed} value
 * @return {Tester}
 */

Tester.prototype.option = function (key, value) {
  var val = this.integration.defaults[key];
  assert(
    val === value,
    'Expected option "' + key + '" to be "' + value + '", but it was "'+ val + '".'
  );
  return this;
};


/**
 * Assert that the integration assumes a pageview.
 *
 * @return {Tester}
 */

Tester.prototype.assumesPageview = function () {
  assert(
    this.integration._assumesPageview,
    'Expected integration to assume a pageview.'
  );
  return this;
};


/**
 * Assert that the integration is ready on initialize.
 *
 * @return {Tester}
 */

Tester.prototype.readyOnInitialize = function () {
  assert(
    this.integration._readyOnInitialize,
    'Expected integration to be ready on initialize.'
  );
  return this;
};


/**
 * Assert that the integration is ready on load.
 *
 * @return {Tester}
 */

Tester.prototype.readyOnLoad = function () {
  assert(
    this.integration._readyOnLoad,
    'Expected integration to be ready on load.'
  );
  return this;
};