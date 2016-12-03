var test = require('tape')
var getAbi = require('../index').getAbi

test('getAbi calculates correct Node ABI', function (t) {
  t.equal(getAbi(undefined), process.versions.modules)
  t.equal(getAbi(null), process.versions.modules)
  t.throws(function () { getAbi('a.b.c') })
  t.throws(function () { getAbi('1.0.0') })
  t.equal(getAbi('7.2.0'), '51')
  t.equal(getAbi('7.0.0'), '51')
  t.equal(getAbi('6.9.9'), '48')
  t.equal(getAbi('6.0.0'), '48')
  t.equal(getAbi('5.9.9'), '47')
  t.equal(getAbi('5.0.0'), '47')
  t.equal(getAbi('4.9.9'), '46')
  t.equal(getAbi('4.0.0'), '46')
  t.equal(getAbi('0.12.17'), '14')
  t.equal(getAbi('0.12.0'), '14')
  t.equal(getAbi('0.10.48'), '11')
  t.equal(getAbi('0.10.0'), '11')
  t.end()
})

test('getAbi calculates correct Electron ABI', function (t) {
  t.throws(function () { getAbi(undefined, 'electron') })
  t.throws(function () { getAbi('7.2.0', 'electron') })
  t.equal(getAbi('1.4.0', 'electron'), '50')
  t.equal(getAbi('1.3.0', 'electron'), '49')
  t.equal(getAbi('1.2.0', 'electron'), '48')
  t.equal(getAbi('1.1.0', 'electron'), '48')
  t.equal(getAbi('1.0.0', 'electron'), '47')
  t.equal(getAbi('0.37.0', 'electron'), '47')
  t.equal(getAbi('0.36.0', 'electron'), '47')
  t.equal(getAbi('0.35.0', 'electron'), '46')
  t.equal(getAbi('0.34.0', 'electron'), '46')
  t.equal(getAbi('0.33.0', 'electron'), '46')
  t.equal(getAbi('0.32.0', 'electron'), '45')
  t.equal(getAbi('0.31.0', 'electron'), '45')
  t.equal(getAbi('0.30.0', 'electron'), '44')
  t.end()
})

test('getAbi supports leading v', function (t) {
  t.equal(getAbi('v7.2.0'), '51')
  t.end()
})
