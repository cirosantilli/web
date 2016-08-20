// Make assertions and show useful fail information on top of the web page.

function report_error(extra) {
  var err = new Error('AssertFailed')
  var error_message = '<div style="background-color:red; border: 1px solid black;'
    + 'font-size:36px; font-weight:bold; padding:3px;">ASSERT FAILED</div><pre>'
    + err.stack + '</pre>'
  if (extra) {
    error_message += '<pre>' + String(extra) + '</pre>'
  }
  document.body.insertAdjacentHTML('afterBegin', error_message)
}

function report_error_eq(actual, expect) {
  report_error("actual = " + actual + "\nexpect = " + expect)
}

function assert(tf) {
  if (!tf) {
    report_error()
  }
}

function assert_eq(actual, expect) {
  if (actual !== expect) {
    report_error_eq(actual, expect)
  }
}

function assert_array_eq(actual, expect) {
  if (
    ! (
      actual.length === expect.length &&
      actual.every(function(v,i) { return v === expect[i] })
    )
  ) {
    report_error_eq(actual, expect)
  }
}

function assert_neq(actual, expect) {
  if (actual === expect) {
    report_error_eq(actual, expect)
  }
}

function assert_throws(func, err_constructor) {
    var had_err = false
    try {
      func()
    } catch (err) {
      had_err = true
      assert_eq(err.constructor, err_constructor)
    }
    if (!had_err) {
      report_error('Did not throw.')
    }
}

function assert_not_throws(func) {
    var had_err = false
    try {
      func()
    } catch (err) {
      had_err = true
    }
    assert(!had_err)
}

// Test our asserts.
assert(true)
//assert(false)
assert_eq(0, 0)
//assert_eq(0, 1)
assert_neq(0, 1)
