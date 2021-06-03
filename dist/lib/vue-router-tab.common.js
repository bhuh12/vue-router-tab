module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tab: {
    untitled: '无标题'
  },
  contextmenu: {
    refresh: '刷新',
    refreshAll: '刷新全部',
    close: '关闭',
    closeLefts: '关闭左侧',
    closeRights: '关闭右侧',
    closeOthers: '关闭其他'
  },
  msg: {
    keepLastTab: '至少应保留1个页签',
    i18nProp: '请提供“i18n”方法以处理国际化内容'
  }
});

/***/ }),

/***/ "3dec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tab: {
    untitled: 'Untitled'
  },
  contextmenu: {
    refresh: 'Refresh',
    refreshAll: 'Refresh All',
    close: 'Close',
    closeLefts: 'Close to the Left',
    closeRights: 'Close to the Right',
    closeOthers: 'Close Others'
  },
  msg: {
    keepLastTab: 'Keep at least 1 tab',
    i18nProp: 'Method "i18n" is not defined on the instance'
  }
});

/***/ }),

/***/ "751c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "b13e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.js": "3dec",
	"./zh.js": "0d3e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "b13e";

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "RouterAlive", function() { return /* reexport */ RouterAlive; });
__webpack_require__.d(__webpack_exports__, "RouterTabRoutes", function() { return /* reexport */ routes; });
__webpack_require__.d(__webpack_exports__, "Iframe", function() { return /* reexport */ Iframe; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/RouterTab.vue?vue&type=template&id=4c6845c4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab"},[_c('header',{ref:"header",staticClass:"router-tab__header"},[_c('div',{staticClass:"router-tab__slot-start"},[_vm._t("start")],2),_c('tab-scroll',{ref:"scroll"},[_c('transition-group',_vm._b({staticClass:"router-tab__nav",attrs:{"tag":"ul"},on:{"after-enter":_vm.onTabTrans,"after-leave":_vm.onTabTrans}},'transition-group',_vm.tabTrans,false),_vm._l((_vm.items),function(item,index){return _c('tab-item',{key:item.id || item.to,ref:"tab",refInFor:true,attrs:{"data":item,"index":index},nativeOn:{"contextmenu":function($event){$event.preventDefault();return (function (e) { return _vm.showContextmenu(item.id, index, e); }).apply(null, arguments)}}})}),1)],1),_c('div',{staticClass:"router-tab__slot-end"},[_vm._t("end")],2)],1),_c('div',{staticClass:"router-tab__container"},[_c('router-alive',{attrs:{"page-class":"router-tab-page","keep-alive":_vm.keepAlive,"reuse":_vm.reuse,"max":_vm.maxAlive,"transition":_vm.pageTrans,"page-scroller":_vm.pageScroller},on:{"ready":_vm.onAliveReady,"change":_vm.onAliveChange}}),_c('transition-group',_vm._b({staticClass:"router-tab__iframes",attrs:{"tag":"div"}},'transition-group',_vm.pageTrans,false),_vm._l((_vm.iframes),function(url){return _c('iframe',{directives:[{name:"show",rawName:"v-show",value:(url === _vm.currentIframe),expression:"url === currentIframe"}],key:url,staticClass:"router-tab__iframe",attrs:{"src":url,"name":_vm.iframeNamePrefix + url,"frameborder":"0"},on:{"load":function($event){return _vm.iframeLoaded(url)}}})}),0)],1),_c('transition',{attrs:{"name":"router-tab-zoom"}},[(_vm.contextmenu !== false && _vm.contextData.index > -1)?_c('tab-contextmenu',{attrs:{"data":_vm.contextData,"menu":_vm.contextMenu}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./lib/RouterTab.vue?vue&type=template&id=4c6845c4&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./lib/util/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 空对象和数组
var emptyObj = Object.create(null);
var emptyArray = []; // 从数组删除项

function util_remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * 滚动到指定位置
 * @export
 * @param {Element} wrap 滚动区域
 * @param {number} [left=0]
 * @param {number} [top=0]
 */

function util_scrollTo(_ref) {
  var wrap = _ref.wrap,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$smooth = _ref.smooth,
      smooth = _ref$smooth === void 0 ? true : _ref$smooth;
  if (!wrap) return;

  if (wrap.scrollTo) {
    wrap.scrollTo({
      left: left,
      top: top,
      behavior: smooth ? 'smooth' : 'auto'
    });
  } else {
    wrap.scrollLeft = left;
    wrap.scrollTop = top;
  }
}
/**
 * 指定元素滚动到可视区域
 * @export
 * @param {Element} el 目标元素
 * @param {Element} wrap 滚动区域
 * @param {String} block 垂直方向的对齐，可选：'start', 'center', 'end', 或 'nearest'
 * @param {String} inline 水平方向的对齐，可选值同上
 */

function util_scrollIntoView(_ref2) {
  var el = _ref2.el,
      wrap = _ref2.wrap,
      _ref2$block = _ref2.block,
      block = _ref2$block === void 0 ? 'start' : _ref2$block,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? 'nearest' : _ref2$inline;
  if (!el || !wrap) return;

  if (el.scrollIntoView) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: block,
      inline: inline
    });
  } else {
    var offsetLeft = el.offsetLeft,
        offsetTop = el.offsetTop;
    var left, top;

    if (block === 'center') {
      top = offsetTop + (el.clientHeight - wrap.clientHeight) / 2;
    } else {
      top = offsetTop;
    }

    if (inline === 'center') {
      left = offsetLeft + (el.clientWidth - wrap.clientWidth) / 2;
    } else {
      left = offsetLeft;
    }

    util_scrollTo({
      wrap: wrap,
      left: left,
      top: top
    });
  }
} // 获取滚动条宽度

var getScrollbarWidth = function () {
  var width = null;
  return function () {
    if (width !== null) return width;
    var div = document.createElement('div');
    div.style.cssText = 'width: 100px; height: 100px;overflow-y: scroll';
    document.body.appendChild(div);
    width = div.offsetWidth - div.clientWidth;
    div.parentElement.removeChild(div);
    return width;
  };
}();
/**
 * 提取计算属性
 * @export
 * @param {String} origin 来源属性
 * @param {Array|Object} props 需要提取的计算属性
 * @param {String} context 来源选项为 function 时的入参
 * @returns {Object}
 */

function mapGetters(origin, props, context) {
  var map = {};

  var each = function each(prop, option) {
    if (option === null || _typeof(option) !== 'object') {
      option = {
        default: option
      };
    }

    var _option = option,
        def = _option.default,
        alias = _option.alias;

    map[alias || prop] = function () {
      var val = this[origin][prop];

      if (context && typeof val === 'function') {
        // 函数返回
        return val(this[context]);
      } else if (def !== undefined && val === undefined) {
        // 默认值
        if (typeof def === 'function') {
          return def.bind(this)();
        }

        return def;
      }

      return val;
    };
  };

  if (Array.isArray(props)) {
    props.forEach(function (prop) {
      return each(prop);
    });
  } else {
    Object.entries(props).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          prop = _ref4[0],
          def = _ref4[1];

      return each(prop, def);
    });
  }

  return map;
} // 去除路径中的 hash

var prunePath = function prunePath(path) {
  return path.split('#')[0];
}; // 解析过渡配置

function getTransOpt(trans) {
  return typeof trans === 'string' ? {
    name: trans
  } : trans;
} // 获取组件 id

function getCtorId(vm) {
  return vm.$vnode.componentOptions.Ctor.cid;
}
// CONCATENATED MODULE: ./lib/mixins/contextmenu.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // 右键菜单

/* harmony default export */ var contextmenu = ({
  data: function data() {
    return {
      // 右键菜单
      contextData: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    };
  },
  computed: {
    // 菜单配置
    contextMenu: function contextMenu() {
      return Array.isArray(this.contextmenu) ? this.contextmenu : undefined;
    }
  },
  watch: {
    // 路由切换隐藏右键菜单
    $route: function $route() {
      this.hideContextmenu();
    },
    // 拖拽排序隐藏右键菜单
    onDragSort: function onDragSort() {
      this.hideContextmenu();
    }
  },
  mounted: function mounted() {
    // 显示右键菜单，绑定点击关闭事件
    document.addEventListener('click', this.contextmenuClickOutSide);
  },
  destroyed: function destroyed() {
    // 隐藏右键菜单，移除点击关闭事件
    document.removeEventListener('click', this.contextmenuClickOutSide);
  },
  methods: {
    // 显示页签右键菜单
    showContextmenu: function showContextmenu(id, index, e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _ref, top, left;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(id !== null && _this.contextData.id !== null)) {
                  _context.next = 4;
                  break;
                }

                _this.hideContextmenu();

                _context.next = 4;
                return _this.$nextTick();

              case 4:
                // 菜单定位
                _ref = e || emptyObj, top = _ref.clientY, left = _ref.clientX;
                Object.assign(_this.contextData, {
                  id: id,
                  index: index,
                  top: top,
                  left: left
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 关闭页签右键菜单
    hideContextmenu: function hideContextmenu() {
      this.showContextmenu(null, -1);
    },
    // 菜单外部点击关闭
    contextmenuClickOutSide: function contextmenuClickOutSide(e) {
      if (e.target !== this.$el.querySelector('.router-tab-contextmenu')) {
        this.hideContextmenu();
      }
    }
  }
});
// CONCATENATED MODULE: ./lib/config/lang/index.js
function lang_slicedToArray(arr, i) { return lang_arrayWithHoles(arr) || lang_iterableToArrayLimit(arr, i) || lang_unsupportedIterableToArray(arr, i) || lang_nonIterableRest(); }

function lang_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function lang_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lang_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lang_arrayLikeToArray(o, minLen); }

function lang_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lang_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function lang_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 引入目录下语言配置
var context = __webpack_require__("b13e"); // 语言配置


/* harmony default export */ var config_lang = (context.keys().reduce(function (map, path) {
  var _$exec = /\.\/(.*).js/g.exec(path),
      _$exec2 = lang_slicedToArray(_$exec, 2),
      key = _$exec2[1];

  map[key] = context(path).default;
  return map;
}, {}));
// CONCATENATED MODULE: ./lib/util/warn.js
var prefix = '[Vue Router Tab]'; // 错误

function assert(condition, message) {
  if (!condition) {
    throw new Error("".concat(prefix, " ").concat(message));
  }
} // 警告

function warn(condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn("".concat(prefix, " ").concat(message));
  }
} // 常用消息

var messages = {
  renamed: function renamed(newName) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '方法';
    return "\u8BE5".concat(target, "\u5DF2\u66F4\u540D\u4E3A\u201C").concat(newName, "\u201D\uFF0C\u8BF7\u4FEE\u6539\u540E\u4F7F\u7528");
  }
};
// CONCATENATED MODULE: ./lib/mixins/i18n.js
function _toArray(arr) { return i18n_arrayWithHoles(arr) || _iterableToArray(arr) || i18n_unsupportedIterableToArray(arr) || i18n_nonIterableRest(); }

function i18n_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function i18n_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return i18n_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i18n_arrayLikeToArray(o, minLen); }

function i18n_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function i18n_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // 语言配置

 // 国际化

/* harmony default export */ var i18n = ({
  computed: {
    // 语言内容
    langs: function langs() {
      var lang = this.lang; // 自动识别浏览器语言

      if (lang === 'auto') {
        lang = (navigator.language || navigator.userLanguage).substr(0, 2);
      }

      if (typeof lang === 'string') {
        lang = config_lang[lang];
      } // 找不到语言配置，则使用英文


      if (!lang) lang = config_lang['en'];
      return lang;
    }
  },
  methods: {
    // 获取国际化内容
    i18nText: function i18nText(text) {
      var _this$i18nParse = this.i18nParse(text),
          key = _this$i18nParse.key,
          params = _this$i18nParse.params;

      if (key) {
        var hasI18nProp = typeof this.i18n === 'function'; // 未配置 i18n 方法则警告

        if (!this._hasI18nPropWarn) {
          warn(hasI18nProp, this.langs.msg.i18nProp);
          this._hasI18nPropWarn = true;
        }

        if (hasI18nProp) {
          return this.i18n(key, params);
        }
      }

      return text;
    },
    // 解析国际化
    i18nParse: function i18nParse(text) {
      var key;
      var params; // 获取国际化配置

      if (typeof text === 'string') {
        // 字符串方式配置：'i18n:custom.lang.key'
        var res = /^i18n:([^\s]+)$/.exec(text);

        if (res) {
          key = res[1];
          params = [];
        }
      } else if (Array.isArray(text)) {
        // 数组方式配置：['tab.i18n.key', 'param1', 'param2', ...]
        ;

        var _text = _toArray(text);

        key = _text[0];
        params = _text.slice(1);
      }

      return {
        key: key,
        params: params
      };
    }
  }
});
// CONCATENATED MODULE: ./lib/mixins/iframe.js
// Iframe 页签
/* harmony default export */ var iframe = ({
  data: function data() {
    return {
      iframes: [],
      currentIframe: null,
      iframeNamePrefix: 'RouterTabIframe-'
    };
  },
  methods: {
    // 获取 Iframe 页签路由路径
    getIframePath: function getIframePath(src) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var path = "".concat(this.basePath, "/iframe/").replace(/\/+/g, '/') + encodeURIComponent(src);

      if (title) {
        path += '/' + title;
        if (icon) path += '/' + icon;
      }

      return path;
    },
    // 打开 Iframe 页签
    openIframe: function openIframe(src, title, icon) {
      var path = this.getIframePath(src, title, icon);
      this.$router.push(path);
    },
    // 关闭 Iframe 页签
    closeIframe: function closeIframe(src) {
      var path = this.getIframePath(src);
      this.close({
        path: path,
        match: false
      });
    },
    // 刷新 Iframe 页签
    refreshIframe: function refreshIframe(src) {
      var path = this.getIframePath(src);
      this.refresh(path, false);
    },
    // 根据 url 获取 iframe 节点
    getIframeEl: function getIframeEl(url) {
      var name = this.iframeNamePrefix + url;
      return document.getElementsByName(name)[0];
    },
    // iframe 节点 mounted
    iframeMounted: function iframeMounted(url) {
      var iframe = this.getIframeEl(url);
      this.$emit('iframe-mounted', url, iframe);
    },
    // iframe 加载成功
    iframeLoaded: function iframeLoaded(url) {
      var iframe = this.getIframeEl(url);
      this.$emit('iframe-loaded', url, iframe);
    }
  }
});
// CONCATENATED MODULE: ./lib/mixins/operate.js


function operate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function operate_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { operate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { operate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function operate_slicedToArray(arr, i) { return operate_arrayWithHoles(arr) || operate_iterableToArrayLimit(arr, i) || operate_unsupportedIterableToArray(arr, i) || operate_nonIterableRest(); }

function operate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function operate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return operate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return operate_arrayLikeToArray(o, minLen); }

function operate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function operate_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function operate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function operate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { operate_typeof = function _typeof(obj) { return typeof obj; }; } else { operate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return operate_typeof(obj); }

 // 获取关闭参数

function getCloseArgs(args) {
  args = Array.from(args);
  var argsLen = args.length;
  var arg = args[0]; // 首个选项

  if (!argsLen) {
    // close()
    return {};
  } else if (arg && operate_typeof(arg) === 'object' && !arg.name && !arg.fullPath && !arg.params && !arg.query && !arg.hash) {
    // close({id, path, match, force, to, refresh})
    return arg;
  } else {
    // close(path, to)
    var _args = args,
        _args2 = operate_slicedToArray(_args, 2),
        path = _args2[0],
        to = _args2[1];

    return {
      path: path,
      to: to
    };
  }
} // 路径是否一致


function equalPath(path1, path2) {
  var reg = /\/$/;
  return path1.replace(reg, '') === path2.replace(reg, '');
} // 页签操作


/* harmony default export */ var operate = ({
  methods: {
    /**
     * 打开页签（默认全新打开）
     * @param {location} path 页签路径
     * @param {Boolean} [isReplace = false] 是否 replace 方式替换当前路由
     * @param {Boolean | String} [refresh = true] 是否全新打开，如果为 `sameTab` 则仅同一个页签才全新打开
     */
    open: function open(path) {
      var _arguments = arguments,
          _this = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var isReplace, refresh, curId, tarId, isSameTab;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isReplace = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
                refresh = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : true;
                curId = _this.activeTabId;
                tarId = _this.getRouteKey(path);
                isSameTab = equalPath(curId, tarId); // 打开路由与当前路由相同页签才刷新

                refresh === 'sameTab' && (refresh = isSameTab);
                refresh && _this.refresh(path, false);
                _context.prev = 7;
                _context.next = 10;
                return _this.$router[isReplace ? 'replace' : 'push'](path);

              case 10:
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);

              case 14:
                _context.prev = 14;
                isSameTab && _this.reload();
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 12, 14, 17]]);
      }))();
    },
    // 移除 tab 项
    removeTab: function removeTab(id) {
      var _arguments2 = arguments,
          _this2 = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var force, items, idx;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                force = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : false;
                items = _this2.items;
                idx = items.findIndex(function (item) {
                  return item.id === id;
                }); // 最后一个页签不允许关闭

                if (!(!force && _this2.keepLastTab && items.length === 1)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error(_this2.langs.msg.keepLastTab);

              case 5:
                if (force) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 8;
                return _this2.leavePage(id, 'close');

              case 8:
                // 承诺关闭后移除页签和缓存
                _this2.$alive.remove(id);

                idx > -1 && items.splice(idx, 1);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * 关闭页签
     * 支持以下方式调用：
     *   1. this.$tabs.close({id, path, match, force, to, refresh})
     *   2. this.$tabs.close(path, to)
     * @param {String} id 通过页签 id 关闭
     * @param {location} path 通过路由路径关闭页签，如果未配置 id 和 path 则关闭当前页签
     * @param {Boolean} [match = true] path 方式关闭时，是否匹配 path 完整路径
     * @param {Boolean} [force = true] 是否强制关闭
     * @param {location} to 关闭后跳转的地址，为 null 则不跳转
     * @param {Boolean} [refresh = false] 是否全新打开跳转地址
     */
    close: function close() {
      var _arguments3 = arguments,
          _this3 = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var _getCloseArgs, id, path, _getCloseArgs$match, match, _getCloseArgs$force, force, to, _getCloseArgs$refresh, refresh, activeTabId, items, idx, nextTab;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 解析参数
                _getCloseArgs = getCloseArgs(_arguments3), id = _getCloseArgs.id, path = _getCloseArgs.path, _getCloseArgs$match = _getCloseArgs.match, match = _getCloseArgs$match === void 0 ? true : _getCloseArgs$match, _getCloseArgs$force = _getCloseArgs.force, force = _getCloseArgs$force === void 0 ? true : _getCloseArgs$force, to = _getCloseArgs.to, _getCloseArgs$refresh = _getCloseArgs.refresh, refresh = _getCloseArgs$refresh === void 0 ? false : _getCloseArgs$refresh;
                activeTabId = _this3.activeTabId, items = _this3.items; // 根据 path 获取 id

                if (!(!id && path)) {
                  _context3.next = 6;
                  break;
                }

                id = _this3.getIdByPath(path, match);

                if (id) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                // 默认当前页签
                if (!id) id = activeTabId;
                _context3.prev = 7;
                idx = items.findIndex(function (item) {
                  return item.id === id;
                }); // 移除页签

                _context3.next = 11;
                return _this3.removeTab(id, force);

              case 11:
                if (!(to === null)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return");

              case 13:
                // 如果关闭当前页签，则打开后一个页签
                if (!to && activeTabId === id) {
                  nextTab = items[idx] || items[idx - 1];
                  to = nextTab ? nextTab.to : _this3.defaultPath;
                }

                if (to) {
                  _this3.open(to, true, refresh === false ? 'sameTab' : true);
                }

                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](7);
                warn(false, _context3.t0);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 17]]);
      }))();
    },
    // 通过页签 id 关闭页签
    closeTab: function closeTab() {
      var _arguments4 = arguments,
          _this4 = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        var id, to, force;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : _this4.activeTabId;
                to = _arguments4.length > 1 ? _arguments4[1] : undefined;
                force = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : false;

                _this4.close({
                  id: id,
                  to: to,
                  force: force
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },

    /**
     * 通过路由地址刷新页签
     * @param {location} path 需要刷新的地址
     * @param {Boolean} [match = true] 是否匹配 target 完整路径
     * @param {Boolean} [force = true] 是否强制刷新
     */
    refresh: function refresh(path) {
      var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var id = path && this.getIdByPath(path, match) || undefined;
      this.refreshTab(id, force);
    },
    // 刷新指定页签
    refreshTab: function refreshTab() {
      var _arguments5 = arguments,
          _this5 = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        var id, force;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : _this5.activeTabId;
                force = _arguments5.length > 1 && _arguments5[1] !== undefined ? _arguments5[1] : false;
                _context5.prev = 2;

                if (force) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 6;
                return _this5.leavePage(id, 'refresh');

              case 6:
                _this5.$alive.refresh(id);

                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                warn(false, _context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 9]]);
      }))();
    },

    /**
     * 刷新所有页签
     * @param {Boolean} [force = false] 是否强制刷新，如果强制则忽略页面 beforePageLeave
     */
    refreshAll: function refreshAll() {
      var _arguments6 = arguments,
          _this6 = this;

      return operate_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        var force, cache, id;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                force = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : false;
                cache = _this6.$alive.cache;
                _context6.t0 = regenerator_default.a.keys(cache);

              case 3:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 16;
                  break;
                }

                id = _context6.t1.value;
                _context6.prev = 5;

                if (force) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 9;
                return _this6.leavePage(id, 'refresh');

              case 9:
                _this6.$alive.refresh(id);

                _context6.next = 14;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t2 = _context6["catch"](5);

              case 14:
                _context6.next = 3;
                break;

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[5, 12]]);
      }))();
    },

    /**
     * 重置 RouterTab 到默认状态，关闭所有页签并清理缓存页签数据
     * @param {location} [to = this.defaultPath] 重置后跳转页面
     */
    reset: function reset() {
      var _this7 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultPath;
      // 遍历删除缓存
      this.items.forEach(function (_ref) {
        var id = _ref.id;
        return _this7.$alive.remove(id);
      }); // 清除缓存页签

      this.clearTabsStore(); // 初始页签数据

      this.initTabs();
      this.open(to, true, true);
    }
  }
});
// CONCATENATED MODULE: ./lib/mixins/pageLeave.js


function pageLeave_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function pageLeave_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { pageLeave_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { pageLeave_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // 路由导航守卫

var pageLeave_leaveGuard = function leaveGuard(router) {
  return function (to, from, next) {
    var $tabs = router.app.$tabs;

    if (!$tabs) {
      next();
      return;
    }

    var fromId = $tabs.getRouteKey(from);
    var toId = $tabs.getRouteKey(to);
    var $alive = $tabs.$alive;
    var fromCache = $alive && $alive.cache[fromId];

    var _ref = $alive && $alive.cache[toId] || emptyObj,
        alivePath = _ref.alivePath;

    var matched = $tabs.matchRoute(to);
    var id, type;

    if (alivePath && alivePath !== matched.alivePath) {
      // 页签地址被替换：to 存在缓存但缓存路由不一致
      type = 'replace';
      id = toId;
    } else if ($alive.basePath !== matched.basePath) {
      // 离开页签组件：to 不在当前页签组件路由下
      type = 'leave';
      id = $tabs.activeTabId;
    } else if (!fromCache && fromId !== toId) {
      // 当前组件未缓存时离开页签
      type = 'leave';
      id = $tabs.activeTabId;
    }

    if (type) {
      $tabs.leavePage(id, type).then(next).catch(function () {
        return next(false);
      });
    } else {
      next();
    }
  };
}; // 页面离开

/* harmony default export */ var mixins_pageLeave = ({
  created: function created() {
    var $router = this.$router;
    if ($router._RouterTabInit) return; // 初始化路由导航守卫

    $router.beforeEach(pageLeave_leaveGuard($router));
    $router._RouterTabInit = true;
  },
  methods: {
    // 页面离开 Promise
    leavePage: function leavePage(id, type) {
      var _this = this;

      return pageLeave_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var tab, _ref2, vm, pageLeave;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tab = _this.items.find(function (item) {
                  return item.id === id;
                }); // 当前页签

                _ref2 = _this.$alive.cache[id] || emptyObj, vm = _ref2.vm; // 缓存数据
                // 未开启缓存时，获取当前页面组件实例

                if (!vm && _this.activeTabId === id) {
                  vm = _this.$route.matched[_this.$alive.routeMatch.routeIndex].instances.default;
                }

                if (!(!vm || !tab)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                pageLeave = vm.$vnode.componentOptions.Ctor.options.beforePageLeave;

                if (!(typeof pageLeave === 'function')) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", pageLeave.bind(vm)(tab, type));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./lib/util/decorator.js
/* 装饰器 */

/**
 * 防抖
 * @param {number} [delay=200] 延迟
 */
var debounce = function debounce() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  return function (target, name, desc) {
    var fn = desc.value;
    var timeout = null;

    desc.value = function () {
      for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      var context = this;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn.call.apply(fn, [context].concat(rest));
      }, delay);
    };
  };
};
// CONCATENATED MODULE: ./lib/mixins/scroll.js
var _dec, _obj;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }



function scroll_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function scroll_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { scroll_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { scroll_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // 页签滚动

/* harmony default export */ var mixins_scroll = ({
  watch: {
    activeTabId: {
      handler: function handler() {
        var _this = this;

        return scroll_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.$el) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return _this.$nextTick();

                case 4:
                  _this.adjust();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    // 浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.adjust);
  },
  destroyed: function destroyed() {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.adjust);
  },
  methods: (_dec = debounce(), (_obj = {
    adjust: function adjust() {
      if (!this.$el) return;
      var scroll = this.$refs.scroll;
      var cur = this.$el.querySelector('.router-tab__item.is-active');
      if (scroll && cur && !scroll.isInView(cur)) scroll.scrollIntoView(cur); // 关闭右键菜单

      this.hideContextmenu();
    },
    // 页签过渡
    onTabTrans: function onTabTrans() {
      this.adjust();
    }
  }, (_applyDecoratedDescriptor(_obj, "adjust", [_dec], Object.getOwnPropertyDescriptor(_obj, "adjust"), _obj)), _obj))
});
// CONCATENATED MODULE: ./lib/mixins/restore.js
// 页签刷新后还原
/* harmony default export */ var restore = ({
  computed: {
    // 刷新还原存储 key
    restoreKey: function restoreKey() {
      var restore = this.restore,
          basePath = this.basePath;
      if (!restore || typeof sessionStorage === 'undefined') return '';
      var key = "RouterTab:restore:".concat(basePath);
      typeof restore === 'string' && (key += ":".concat(restore));
      return key;
    }
  },
  mounted: function mounted() {
    // 页面重载前保存页签数据
    window.addEventListener('beforeunload', this.saveTabs);
  },
  destroyed: function destroyed() {
    window.removeEventListener('beforeunload', this.saveTabs);
  },
  watch: {
    // 监听 restoreKey 变化自动还原页签
    restoreKey: function restoreKey() {
      if (this.restoreWatch) {
        var activeTab = this.activeTab;
        this.initTabs();

        if (!this.activeTab) {
          this.items.push(activeTab);
        }
      }
    }
  },
  methods: {
    // 保存页签数据
    saveTabs: function saveTabs() {
      this.restoreKey && sessionStorage.setItem(this.restoreKey, JSON.stringify(this.items));
    },
    // 清除页签缓存数据
    clearTabsStore: function clearTabsStore() {
      this.restoreKey && sessionStorage.removeItem(this.restoreKey);
    },
    // 从缓存读取页签
    restoreTabs: function restoreTabs() {
      if (!this.restoreKey) return false;
      var tabs = sessionStorage.getItem(this.restoreKey);
      var hasStore = false;

      try {
        tabs = JSON.parse(tabs);

        if (Array.isArray(tabs) && tabs.length) {
          hasStore = true;
          this.presetTabs(tabs);
        }
      } catch (e) {}

      return hasStore;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/RouterAlive.vue?vue&type=template&id=279e5a35&
var RouterAlivevue_type_template_id_279e5a35_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-alive"},[_c('transition',_vm._b({attrs:{"appear":""},on:{"after-enter":_vm.onTrans,"after-leave":_vm.onTrans}},'transition',_vm.pageTrans,false),[_c('keep-alive',{attrs:{"max":_vm.max}},[(_vm.alive && !_vm.onRefresh)?_c('router-view',_vm._g({key:_vm.key,ref:"page",class:_vm.pageClass,on:{"page-loaded":_vm.onPageLoaded}},_vm.hooks)):_vm._e()],1)],1),_c('transition',_vm._b({attrs:{"appear":""},on:{"after-enter":_vm.onTrans,"after-leave":_vm.onTrans}},'transition',_vm.pageTrans,false),[(!_vm.alive && !_vm.onRefresh)?_c('router-view',{key:_vm.key,ref:"page",class:_vm.pageClass}):_vm._e()],1)],1)}
var RouterAlivevue_type_template_id_279e5a35_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/RouterAlive.vue?vue&type=template&id=279e5a35&

// CONCATENATED MODULE: ./lib/config/rules.js
 // 内置规则

/* harmony default export */ var rules = ({
  // 地址，params 不一致则独立缓存
  path: function path(route) {
    return route.path;
  },
  // 完整地址 (忽略 hash)，params 或 query 不一致则独立缓存
  fullpath: function fullpath(route) {
    return prunePath(route.fullPath);
  }
});
// CONCATENATED MODULE: ./lib/util/RouteMatch.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function RouteMatch_slicedToArray(arr, i) { return RouteMatch_arrayWithHoles(arr) || RouteMatch_iterableToArrayLimit(arr, i) || RouteMatch_unsupportedIterableToArray(arr, i) || RouteMatch_nonIterableRest(); }

function RouteMatch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RouteMatch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RouteMatch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RouteMatch_arrayLikeToArray(o, minLen); }

function RouteMatch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RouteMatch_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RouteMatch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // 解析路由 key

function parseRouteKey($route, route, key) {
  var defaultKey = route.path;
  if (!key) return defaultKey;

  if (typeof key === 'string') {
    // 规则
    var rule = rules[key.toLowerCase()];
    return rule ? rule($route) : key;
  }

  if (typeof key === 'function') {
    return parseRouteKey($route, route, key($route));
  }

  return defaultKey;
} // 解析匹配的路径


function parsePath(path, params) {
  return Object.entries(params).reduce(function (p, _ref) {
    var _ref2 = RouteMatch_slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return p.replace(':' + key, val);
  }, path);
} // 匹配路由数据


var RouteMatch_RouteMatch = /*#__PURE__*/function () {
  function RouteMatch(vm, $route) {
    _classCallCheck(this, RouteMatch);

    this.vm = vm;
    this.$route = $route;
  } // 设置路由


  _createClass(RouteMatch, [{
    key: "$route",
    get: // 获取路由
    function get() {
      return this._$route || this.vm.$route;
    } // 页面路由索引
    ,
    set: function set($route) {
      if ($route && !$route.matched) {
        var $router = this.vm.$router;
        $route = $router.match($route, $router.currentRoute);
      }

      this._$route = $route;
    }
  }, {
    key: "routeIndex",
    get: function get() {
      return this.vm.routeIndex;
    } // 下级路由

  }, {
    key: "route",
    get: function get() {
      return this.$route.matched[this.routeIndex];
    } // 根路径

  }, {
    key: "basePath",
    get: function get() {
      if (this.routeIndex < 1) return '/';
      var baseRoute = this.$route.matched[this.routeIndex - 1] || {};
      var path = baseRoute.path;
      return path && parsePath(path, this.$route.params) || '/';
    } // 缓存路径，用于判断是否复用

  }, {
    key: "alivePath",
    get: function get() {
      var $route = this.$route; // 嵌套路由

      if (this.nest) {
        return parsePath(this.route.path, $route.params);
      }

      return prunePath($route.fullPath);
    } // 路由元

  }, {
    key: "meta",
    get: function get() {
      var route = this.route,
          $nuxt = this.vm.$nuxt; // Nuxt 优先从页面配置获取 meta

      if ($nuxt) {
        try {
          var _$nuxt$context$route$ = $nuxt.context.route.meta,
              metas = _$nuxt$context$route$ === void 0 ? [] : _$nuxt$context$route$;
          var meta = metas[this.routeIndex];

          if (meta && Object.keys(meta).length) {
            return meta;
          }
        } catch (e) {
          console.error(e);
        }
      }

      return route && route.meta || {};
    } // 是否嵌套路由

  }, {
    key: "nest",
    get: function get() {
      return this.$route.matched.length > this.routeIndex + 1;
    } // 路由 key

  }, {
    key: "key",
    get: function get() {
      if (!this.route) return '';
      return parseRouteKey(this.$route, this.route, this.meta.key);
    } // 是否缓存

  }, {
    key: "alive",
    get: function get() {
      var keepAlive = this.meta.keepAlive;
      return typeof keepAlive === 'boolean' ? keepAlive : this.vm.keepAlive;
    } // 是否复用组件

  }, {
    key: "reusable",
    get: function get() {
      var reuse = this.meta.reuse;
      return typeof reuse === 'boolean' ? reuse : this.vm.reuse;
    }
  }]);

  return RouteMatch;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/RouterAlive.vue?vue&type=script&lang=js&


function RouterAlivevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function RouterAlivevue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { RouterAlivevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { RouterAlivevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function RouterAlivevue_type_script_lang_js_slicedToArray(arr, i) { return RouterAlivevue_type_script_lang_js_arrayWithHoles(arr) || RouterAlivevue_type_script_lang_js_iterableToArrayLimit(arr, i) || RouterAlivevue_type_script_lang_js_unsupportedIterableToArray(arr, i) || RouterAlivevue_type_script_lang_js_nonIterableRest(); }

function RouterAlivevue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RouterAlivevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RouterAlivevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RouterAlivevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function RouterAlivevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RouterAlivevue_type_script_lang_js_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RouterAlivevue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 页面监听钩子

var PAGE_HOOKS = ['created', 'mounted', 'activated', 'deactivated', 'destroyed'];
/**
 * 路由缓存控件
 */

/* harmony default export */ var RouterAlivevue_type_script_lang_js_ = ({
  name: 'RouterAlive',
  provide: function provide() {
    // 提供实例给子组件调用
    return {
      RouterAlive: this
    };
  },
  props: {
    // 默认是否开启缓存
    keepAlive: {
      type: Boolean,
      default: false
    },
    // 是否复用路由组件
    reuse: {
      type: Boolean,
      default: false
    },
    // 最大缓存数，0 则不限制
    max: {
      type: Number,
      default: 0
    },
    // 页面 class
    pageClass: {
      type: [Array, Object, String],
      default: 'router-alive-page'
    },
    // 页面滚动元素选择器
    pageScroller: {
      type: String,
      default: ''
    },
    // 过渡效果
    transition: {
      type: [String, Object]
    }
  },
  data: function data() {
    // 缓存记录
    this.cache = {};
    return {
      // 路由匹配信息
      routeMatch: new RouteMatch_RouteMatch(this),
      // 页面路由索引
      routeIndex: this.getRouteIndex(),
      // 是否正在更新
      onRefresh: false
    };
  },
  computed: _objectSpread(_objectSpread({}, mapGetters('routeMatch', ['key', 'meta', 'nest', 'alive', 'reusable', 'basePath', 'alivePath'])), {}, {
    // 监听子页面钩子
    hooks: function hooks() {
      var _this = this;

      return PAGE_HOOKS.reduce(function (events, hook) {
        events['hook:' + hook] = function () {
          return _this.pageHook(hook);
        };

        return events;
      }, {});
    },
    // 页面过渡
    pageTrans: function pageTrans() {
      return getTransOpt(this.transition);
    }
  }),
  watch: {
    // 监听路由
    $route: {
      handler: function handler($route, old) {
        // 组件就绪
        if (!old) this.$emit('ready', this);
        if (!$route.matched.length) return;
        var key = this.key,
            alive = this.alive,
            reusable = this.reusable,
            alivePath = this.alivePath,
            nest = this.nest;
        var cacheItem = this.cache[key] || {};
        var cacheAlivePath = cacheItem.alivePath,
            cacheFullPath = cacheItem.fullPath,
            cacheVM = cacheItem.vm; // 不复用且路由改变则清理组件缓存

        if (cacheAlivePath && !reusable && cacheAlivePath !== alivePath) {
          cacheAlivePath = '';
          this.refresh(key);
        } // 嵌套路由，地址跟缓存不一致


        if (nest && cacheVM && $route.fullPath !== cacheFullPath) {
          var oldKey = this.matchRoute(old).key;

          if (oldKey !== key) {
            this.nestForceUpdate = true;
          }
        } // 类型：更新或者新建缓存


        var type = cacheAlivePath ? 'update' : 'create';
        this.$emit('change', type, this.routeMatch); // 更新缓存路径

        if (alive) {
          cacheItem.fullPath = $route.fullPath;
        }
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    // 获取 keepAlive 组件实例
    this.$refs.alive = this._vnode.children[0].child._vnode.componentInstance;
  },
  // 销毁后清理
  destroyed: function destroyed() {
    this.cache = null;
    this.routeMatch = null;
    this._match = null;
    this.$refs.alive = null;
  },
  methods: {
    // 获取页面路由索引
    getRouteIndex: function getRouteIndex() {
      var cur = this;
      var depth = -1; // 路由深度

      while (cur && depth < 0) {
        var _ref = cur.$vnode || {},
            data = _ref.data;

        if (data && data.routerView) {
          depth = data.routerViewDepth;
        } else {
          cur = cur.$parent;
        }
      }

      return depth + 1;
    },
    // 移除缓存
    remove: function remove() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.key;
      var $alive = this.$refs.alive;
      if (!$alive) return;
      var cacheItem = this.cache[key];
      var cache = $alive.cache,
          keys = $alive.keys; // 销毁缓存组件实例，清理 RouterAlive 缓存记录

      if (cacheItem) {
        cacheItem.vm.$destroy();
        cacheItem.vm = null;
        this.cache[key] = null;
      } // 清理 keepAlive 缓存记录


      Object.entries(cache).find(function (_ref2) {
        var _vm$$vnode, _vm$$vnode$data;

        var _ref3 = RouterAlivevue_type_script_lang_js_slicedToArray(_ref2, 2),
            id = _ref3[0],
            item = _ref3[1];

        var vm = item === null || item === void 0 ? void 0 : item.componentInstance;

        if ((vm === null || vm === void 0 ? void 0 : (_vm$$vnode = vm.$vnode) === null || _vm$$vnode === void 0 ? void 0 : (_vm$$vnode$data = _vm$$vnode.data) === null || _vm$$vnode$data === void 0 ? void 0 : _vm$$vnode$data.key) === key) {
          // 销毁组件实例
          vm.$destroy();
          cache[id] = null;

          util_remove(keys, id);

          return true;
        }
      });
    },
    // 刷新
    refresh: function refresh() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.key;
      this.remove(key); // 非当前缓存，直接移除

      if (key === this.key) {
        this.reload();
      }
    },
    // 重新加载
    reload: function reload() {
      if (this.onRefresh) return;
      this.onRefresh = true;
    },
    // 缓存页面组件钩子
    pageHook: function pageHook(hook) {
      var handler = this["pageHook:".concat(hook)];
      if (typeof handler === 'function') handler();
    },
    // 页面创建
    'pageHook:created': function pageHookCreated() {
      this.cache[this.key] = {
        alivePath: this.alivePath,
        fullPath: this.$route.fullPath
      };
    },
    // 页面挂载
    'pageHook:mounted': function pageHookMounted() {
      this.cache[this.key].vm = this.$refs.page; // 重置初始滚动位置

      this.resetScrollPosition();
    },
    // 页面激活
    'pageHook:activated': function pageHookActivated() {
      var pageVm = this.$refs.page; // 热重载更新

      if (this.checkHotReloading()) return; // 嵌套路由缓存导致页面不匹配时强制更新

      if (this.nestForceUpdate) {
        delete this.nestForceUpdate;
        pageVm.$forceUpdate();
      } // 还原滚动位置


      this.restoreScrollPosition();
    },
    // 页面失活
    'pageHook:deactivated': function pageHookDeactivated() {
      if (this.checkHotReloading()) return; // 保存滚动位置

      this.saveScrollPosition();
    },
    // 页面销毁后清理 cache
    'pageHook:destroyed': function pageHookDestroyed() {
      var _this2 = this;

      return RouterAlivevue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$nextTick();

              case 2:
                if (_this2.cache) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                // 清理已销毁页面的缓存信息
                Object.entries(_this2.cache).forEach(function (_ref4) {
                  var _ref5 = RouterAlivevue_type_script_lang_js_slicedToArray(_ref4, 2),
                      key = _ref5[0],
                      item = _ref5[1];

                  var _ref6 = item || {},
                      vm = _ref6.vm;

                  if (vm && vm._isDestroyed) {
                    _this2.remove(key);
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 页面过渡后结束刷新状态
    onTrans: function onTrans() {
      if (this.onRefresh) {
        this.onRefresh = false;
        this.$emit('change', 'create', this.routeMatch);
      }
    },
    // 匹配路由信息
    matchRoute: function matchRoute($route) {
      var matched = this._match; // 当前路由

      if ($route === this.$route || $route.fullPath === this.$route.fullPath || $route === this.$route.fullPath) {
        return this.routeMatch;
      }

      if (matched) {
        matched.$route = $route;
        return matched;
      }

      return this._match = new RouteMatch_RouteMatch(this, $route);
    },
    // 检测热重载
    checkHotReloading: function checkHotReloading() {
      var pageVm = this.$refs.page;
      var lastCid = pageVm._lastCtorId;
      var cid = pageVm._lastCtorId = getCtorId(pageVm); // 热重载更新

      if (lastCid && lastCid !== cid) {
        this.refresh();
        return true;
      }

      return false;
    },
    // 获取滚动元素
    getScroller: function getScroller(selector) {
      return selector.startsWith('$') ? document.querySelector(selector.replace(/^\$/, '')) : this.$el.querySelector(selector);
    },
    // 保存滚动位置
    saveScrollPosition: function saveScrollPosition() {
      var _this3 = this;

      var pageVm = this.$refs.page;
      if (!pageVm) return; // 页面内部配置的滚动元素

      var pageScroller = pageVm.$vnode.componentOptions.Ctor.options.pageScroller;

      if (typeof pageScroller === 'string' && pageScroller.length) {
        pageScroller = pageScroller.split(/\s?,\s?/);
      }

      if (!Array.isArray(pageScroller)) {
        pageScroller = [];
      } // 默认保存页面根节点位置


      pageScroller.push('.' + this.pageClass); // 添加全局的滚动元素配置
      // 组件外部选择器使用 $ 前缀区分

      if (this.pageScroller) {
        pageScroller.push('$' + this.pageScroller);
      } // 记录位置


      var position = pageScroller.reduce(function (pos, selector) {
        var el = _this3.getScroller(selector);

        if (el) {
          pos[selector] = {
            left: el.scrollLeft,
            top: el.scrollTop
          };
        }

        return pos;
      }, {});
      pageVm._pageScrollPosition = position;
    },
    // 还原滚动位置
    restoreScrollPosition: function restoreScrollPosition() {
      var _this4 = this;

      var pageVm = this.$refs.page;
      var position = pageVm === null || pageVm === void 0 ? void 0 : pageVm._pageScrollPosition;
      if (!position) return;
      Object.entries(position).forEach(function (_ref7) {
        var _ref8 = RouterAlivevue_type_script_lang_js_slicedToArray(_ref7, 2),
            selector = _ref8[0],
            pos = _ref8[1];

        var el = _this4.getScroller(selector);

        if (el) {
          el.scrollLeft = pos.left;
          el.scrollTop = pos.top;
        }
      });
    },
    // 重置全局滚动位置
    resetScrollPosition: function resetScrollPosition() {
      if (!this.pageScroller) return;
      var el = this.getScroller('$' + this.pageScroller);
      if (!el) return;
      el.scrollLeft = 0;
      el.scrollTop = 0;
    },
    // 页面数据加载成功
    onPageLoaded: function onPageLoaded() {
      var _this5 = this;

      return RouterAlivevue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this5.$nextTick();

              case 2:
                // 页面数据加载成功后还原滚动位置
                _this5.restoreScrollPosition();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./lib/components/RouterAlive.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RouterAlivevue_type_script_lang_js_ = (RouterAlivevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./lib/components/RouterAlive.vue





/* normalize component */

var component = normalizeComponent(
  components_RouterAlivevue_type_script_lang_js_,
  RouterAlivevue_type_template_id_279e5a35_render,
  RouterAlivevue_type_template_id_279e5a35_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RouterAlive = (component.exports);
// CONCATENATED MODULE: ./lib/components/TabItem.js
function TabItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function TabItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TabItem_ownKeys(Object(source), true).forEach(function (key) { TabItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TabItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TabItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 拖拽传输数据前缀

var TRANSFER_PREFIX = 'RouterTabDragSortIndex:'; // 排序拖拽数据
// 用以解决双核浏览器兼容模式下无法通过 dataTransfer.getData 获取数据

var dragSortData = null; // 页签项
// @vue/component

/* harmony default export */ var TabItem = ({
  name: 'TabItem',
  inject: ['$tabs'],
  props: {
    // 页签原始数据，方便 slot 插槽自定义数据
    data: {
      type: Object,
      required: true
    },
    // 页签项索引
    index: Number
  },
  data: function data() {
    return {
      onDragSort: false,
      // 是否正在拖拽
      isDragOver: false // 是否拖拽经过

    };
  },
  computed: TabItem_objectSpread(TabItem_objectSpread({}, mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href'])), {}, {
    // class
    classList: function classList() {
      return ['router-tab__item', this.tabClass, {
        'is-active': this.$tabs.activeTabId === this.id,
        'is-closable': this.closable,
        'is-contextmenu': this.$tabs.contextData.id === this.id,
        'is-drag-over': this.isDragOver && !this.onDragSort
      }];
    },
    // 国际化
    i18nText: function i18nText() {
      return this.$tabs.i18nText;
    },
    // 未命名页签
    untitled: function untitled() {
      return this.$tabs.langs.tab.untitled;
    },
    // 页签标题
    title: function title() {
      return this.i18nText(this.data.title) || this.untitled;
    },
    // 页签提示
    tips: function tips() {
      return this.i18nText(this.data.tips || this.data.title) || this.untitled;
    },
    // 是否可关闭
    closable: function closable() {
      var _this$$tabs = this.$tabs,
          keepLastTab = _this$$tabs.keepLastTab,
          items = _this$$tabs.items;
      return this.data.closable !== false && !(keepLastTab && items.length < 2);
    }
  }),
  methods: {
    // 插槽默认内容
    slotDefault: function slotDefault() {
      var _this = this;

      var h = this.$createElement;
      return [this.icon && h("i", {
        "class": ['router-tab__item-icon', this.icon]
      }), h("span", {
        "class": "router-tab__item-title",
        "attrs": {
          "title": this.tips
        }
      }, [this.title]), this.closable && h("i", {
        "class": "router-tab__item-close",
        "on": {
          "click": function click($event) {
            $event.preventDefault();
            $event.stopPropagation();
            return _this.close($event);
          }
        }
      })];
    },
    // 关闭当前页签
    close: function close() {
      this.$tabs.closeTab(this.id);
    },
    // 拖拽
    onDragStart: function onDragStart(e) {
      this.onDragSort = this.$tabs.onDragSort = true;
      e.dataTransfer.dropEffect = 'move';
      dragSortData = TRANSFER_PREFIX + this.index;
      e.dataTransfer.setData('text', dragSortData);
    },
    // 拖拽结束
    onDragEnd: function onDragEnd() {
      this.onDragSort = this.$tabs.onDragSort = false;
      dragSortData = null;
    },
    // 释放后排序
    onDrop: function onDrop(e) {
      var items = this.$tabs.items;
      var raw = e.dataTransfer.getData('text') || dragSortData;
      this.isDragOver = false;
      if (typeof raw !== 'string' || !raw.startsWith(TRANSFER_PREFIX)) return;
      var fromIndex = raw.replace(TRANSFER_PREFIX, '');
      var tab = items[fromIndex];
      items.splice(fromIndex, 1);
      items.splice(this.index, 0, tab);
    }
  },
  // 渲染组件
  // 使用 jsx render 模式替换 template，避免 Vue 2.5.22 版本不支持子组件使用父组件的 slot 导致出错。
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var _this$$tabs$$scopedSl = this.$tabs.$scopedSlots.default,
        slot = _this$$tabs$$scopedSl === void 0 ? this.slotDefault : _this$$tabs$$scopedSl;
    return h("router-link", {
      "attrs": {
        "tag": "li",
        "to": this.to,
        "draggable": this.$tabs.dragsort
      },
      "class": this.classList,
      "nativeOn": {
        "dragstart": this.onDragStart,
        "dragend": this.onDragEnd,
        "dragover": function dragover($event) {
          $event.preventDefault();
          return function () {
            return _this2.isDragOver = true;
          }($event);
        },
        "dragleave": function dragleave($event) {
          $event.preventDefault();
          return function () {
            return _this2.isDragOver = false;
          }($event);
        },
        "drop": function drop($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _this2.onDrop($event);
        },
        "mouseup": function mouseup($event) {
          if ("button" in $event && $event.button !== 1) return null;
          return function () {
            return _this2.closable && _this2.close();
          }($event);
        }
      }
    }, [slot(this)]);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/TabScroll.vue?vue&type=template&id=14132362&
var TabScrollvue_type_template_id_14132362_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab__scroll",on:{"wheel":function($event){$event.preventDefault();return _vm.onWheel.apply(null, arguments)},"mouseenter":_vm.update}},[_c('div',{ref:"container",staticClass:"router-tab__scroll-container",class:{ 'is-mobile': _vm.isMobile },on:{"scroll":_vm.update}},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroller),expression:"hasScroller"}],ref:"bar",staticClass:"router-tab__scrollbar",class:{ 'is-dragging': _vm.dragData }},[_c('div',{ref:"thumb",staticClass:"router-tab__scrollbar-thumb",style:({
        width: (_vm.thumbWidth + "px"),
        transform: ("translateX(" + _vm.thumbLeft + "px")
      }),on:{"mousedown":function($event){$event.preventDefault();return _vm.onDragStart.apply(null, arguments)}}})])])}
var TabScrollvue_type_template_id_14132362_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/TabScroll.vue?vue&type=template&id=14132362&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/TabScroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 滚动条

/* harmony default export */ var TabScrollvue_type_script_lang_js_ = ({
  name: 'TabScroll',
  props: {
    // 每次滚动距离
    space: {
      type: Number,
      default: 300
    }
  },
  data: function data() {
    return {
      isMobile: false,
      // 是否移动端
      scrollData: {
        clientWidth: 0,
        scrollWidth: 0,
        scrollLeft: 0
      },
      dragData: null
    };
  },
  computed: {
    // 是否拥有滚动条
    hasScroller: function hasScroller() {
      return !this.isMobile && !this.$tabs.onDragSort && this.scrollData.scrollWidth > this.scrollData.clientWidth;
    },
    // 滑块宽度
    thumbWidth: function thumbWidth() {
      if (!this.hasScroller) return;
      var _this$scrollData = this.scrollData,
          clientWidth = _this$scrollData.clientWidth,
          scrollWidth = _this$scrollData.scrollWidth;
      return clientWidth / scrollWidth * clientWidth;
    },
    // 滑块 left
    thumbLeft: function thumbLeft() {
      if (!this.hasScroller) return; // 拖拽滚动

      if (this.dragData) {
        return this.dragData.thumbLeft;
      }

      var _this$scrollData2 = this.scrollData,
          clientWidth = _this$scrollData2.clientWidth,
          scrollWidth = _this$scrollData2.scrollWidth,
          scrollLeft = _this$scrollData2.scrollLeft;
      return (clientWidth - this.thumbWidth) * (scrollLeft / (scrollWidth - clientWidth));
    }
  },
  mounted: function mounted() {
    this.update();
  },
  methods: {
    // 更新滚动数据
    update: function update() {
      var _this$$refs$container = this.$refs.container,
          clientWidth = _this$$refs$container.clientWidth,
          scrollWidth = _this$$refs$container.scrollWidth,
          scrollLeft = _this$$refs$container.scrollLeft; // 判断是否移动端
      // userAgent 中包含 mobile 字段，或者浏览器滚动条宽度为 0

      this.isMobile = /mobile/i.test(navigator.userAgent) || !getScrollbarWidth();
      Object.assign(this.scrollData, {
        clientWidth: clientWidth,
        scrollWidth: scrollWidth,
        scrollLeft: scrollLeft
      });
    },
    // 滚动到指定位置
    scrollTo: function scrollTo(left) {
      var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      util_scrollTo({
        wrap: this.$refs.container,
        left: left,
        smooth: smooth
      });
    },
    // 滚动到元素
    scrollIntoView: function scrollIntoView(el) {
      util_scrollIntoView({
        el: el,
        wrap: this.$refs.container,
        inline: 'center'
      });
    },
    // 判断子节点是否完全在可视区域
    isInView: function isInView(el) {
      var container = this.$refs.container;
      var offsetLeft = el.offsetLeft;
      var scrollLeft = container.scrollLeft;

      if (offsetLeft < scrollLeft || offsetLeft + el.clientWidth > scrollLeft + container.clientWidth) {
        return false;
      }

      return true;
    },
    // 页签鼠标滚动
    onWheel: function onWheel(e) {
      var now = +new Date();
      var enable = now - (this.lastWheel || 0) > 100;
      if (!enable) return;
      this.lastWheel = now;
      var space = this.space;
      var isWheelUp = e.deltaY < 0;
      this.scrollTo(this.$refs.container.scrollLeft + (isWheelUp ? -space : space));
    },
    // 拖拽
    onDragStart: function onDragStart(e) {
      var thumbLeft = this.thumbLeft;
      this.dragData = {
        startPageX: e.pageX,
        startScrollLeft: this.$refs.container.scrollLeft,
        startThumbLeft: thumbLeft,
        thumbLeft: thumbLeft
      };
      document.addEventListener('mousemove', this.onDragMove);
      document.addEventListener('mouseup', this.onDragEnd);
    },
    // 拖拽移动
    onDragMove: function onDragMove(e) {
      var dragData = this.dragData,
          thumbWidth = this.thumbWidth;
      var _this$scrollData3 = this.scrollData,
          clientWidth = _this$scrollData3.clientWidth,
          scrollWidth = _this$scrollData3.scrollWidth;
      var thumbLeft = dragData.startThumbLeft + e.pageX - dragData.startPageX;
      var maxThumbLeft = clientWidth - thumbWidth;

      if (thumbLeft < 0) {
        thumbLeft = 0;
      } else if (thumbLeft > maxThumbLeft) {
        thumbLeft = maxThumbLeft;
      } // 更新滑块定位


      dragData.thumbLeft = thumbLeft; // 滚动

      this.scrollTo(thumbLeft * (scrollWidth - clientWidth) / (clientWidth - thumbWidth), false);
      e.preventDefault();
    },
    // 拖拽结束
    onDragEnd: function onDragEnd(e) {
      this.dragData = null;
      document.removeEventListener('mousemove', this.onDragMove);
      document.removeEventListener('mouseup', this.onDragEnd);
      e.preventDefault();
    }
  }
});
// CONCATENATED MODULE: ./lib/components/TabScroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TabScrollvue_type_script_lang_js_ = (TabScrollvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/components/TabScroll.vue





/* normalize component */

var TabScroll_component = normalizeComponent(
  components_TabScrollvue_type_script_lang_js_,
  TabScrollvue_type_template_id_14132362_render,
  TabScrollvue_type_template_id_14132362_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabScroll = (TabScroll_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/Contextmenu.vue?vue&type=template&id=e3520a3a&
var Contextmenuvue_type_template_id_e3520a3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab__contextmenu",class:{ 'has-icon': _vm.hasIcon },style:({
    left: ((_vm.data.left) + "px"),
    top: ((_vm.data.top) + "px")
  })},_vm._l((_vm.menuList),function(item){return _c('tab-contextmenu-item',{key:item.id,attrs:{"data":item}})}),1)}
var Contextmenuvue_type_template_id_e3520a3a_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/Contextmenu.vue?vue&type=template&id=e3520a3a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/ContextmenuItem.vue?vue&type=template&id=69b43a93&
var ContextmenuItemvue_type_template_id_69b43a93_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('a',{staticClass:"router-tab__contextmenu-item",class:_vm.menuClass,attrs:{"data-action":_vm.id,"disabled":!_vm.enable,"title":_vm.tips},on:{"click":function($event){_vm.enable && _vm.data.handler(_vm.context)}}},[(_vm.icon)?_c('i',{staticClass:"router-tab__contextmenu-icon",class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.title)+" ")]):_vm._e()}
var ContextmenuItemvue_type_template_id_69b43a93_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/ContextmenuItem.vue?vue&type=template&id=69b43a93&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/ContextmenuItem.vue?vue&type=script&lang=js&
function ContextmenuItemvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ContextmenuItemvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContextmenuItemvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { ContextmenuItemvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContextmenuItemvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContextmenuItemvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ContextmenuItemvue_type_script_lang_js_ = ({
  name: 'ContextmenuItem',
  inject: ['$tabs'],
  props: {
    // 菜单数据
    data: {
      type: Object,
      required: true
    }
  },
  computed: ContextmenuItemvue_type_script_lang_js_objectSpread({
    // 参数
    context: function context() {
      var $tabs = this.$tabs,
          $menu = this.$parent;
      var target = $menu.target,
          data = $menu.data;
      return {
        $tabs: $tabs,
        $menu: $menu,
        target: target,
        data: data
      };
    }
  }, mapGetters('data', {
    id: '',
    // 菜单标题
    title: function title() {
      return this.$tabs.langs.contextmenu[this.id];
    },
    icon: '',
    tips: '',
    class: {
      default: '',
      alias: 'menuClass'
    },
    visible: true,
    // 是否显示
    enable: true // 是否启用

  }, 'context'))
});
// CONCATENATED MODULE: ./lib/components/ContextmenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContextmenuItemvue_type_script_lang_js_ = (ContextmenuItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/components/ContextmenuItem.vue





/* normalize component */

var ContextmenuItem_component = normalizeComponent(
  components_ContextmenuItemvue_type_script_lang_js_,
  ContextmenuItemvue_type_template_id_69b43a93_render,
  ContextmenuItemvue_type_template_id_69b43a93_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContextmenuItem = (ContextmenuItem_component.exports);
// CONCATENATED MODULE: ./lib/config/contextmenu.js
function contextmenu_slicedToArray(arr, i) { return contextmenu_arrayWithHoles(arr) || contextmenu_iterableToArrayLimit(arr, i) || contextmenu_unsupportedIterableToArray(arr, i) || contextmenu_nonIterableRest(); }

function contextmenu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function contextmenu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return contextmenu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return contextmenu_arrayLikeToArray(o, minLen); }

function contextmenu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function contextmenu_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function contextmenu_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 菜单数据
var menuMap = {
  // 刷新
  refresh: {
    handler: function handler(_ref) {
      var data = _ref.data,
          $tabs = _ref.$tabs;
      $tabs.refreshTab(data.id);
    }
  },
  // 刷新全部
  refreshAll: {
    handler: function handler(_ref2) {
      var $tabs = _ref2.$tabs;
      $tabs.refreshAll();
    }
  },
  // 关闭
  close: {
    enable: function enable(_ref3) {
      var target = _ref3.target;
      return target.closable;
    },
    handler: function handler(_ref4) {
      var data = _ref4.data,
          $tabs = _ref4.$tabs;
      $tabs.closeTab(data.id);
    }
  },
  // 关闭左侧
  closeLefts: {
    enable: function enable(_ref5) {
      var $menu = _ref5.$menu;
      return $menu.lefts.length;
    },
    handler: function handler(_ref6) {
      var $menu = _ref6.$menu;
      $menu.closeMulti($menu.lefts);
    }
  },
  // 关闭右侧
  closeRights: {
    enable: function enable(_ref7) {
      var $menu = _ref7.$menu;
      return $menu.rights.length;
    },
    handler: function handler(_ref8) {
      var $menu = _ref8.$menu;
      $menu.closeMulti($menu.rights);
    }
  },
  // 关闭其他
  closeOthers: {
    enable: function enable(_ref9) {
      var $menu = _ref9.$menu;
      return $menu.others.length;
    },
    handler: function handler(_ref10) {
      var $menu = _ref10.$menu;
      $menu.closeMulti($menu.others);
    }
  }
}; // 遍历填充 id

Object.entries(menuMap).forEach(function (_ref11) {
  var _ref12 = contextmenu_slicedToArray(_ref11, 2),
      id = _ref12[0],
      item = _ref12[1];

  return item.id = id;
});
/* harmony default export */ var config_contextmenu = (menuMap); // 默认菜单

var defaultMenu = ['refresh', 'refreshAll', 'close', 'closeLefts', 'closeRights', 'closeOthers'];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/Contextmenu.vue?vue&type=script&lang=js&


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Contextmenuvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function Contextmenuvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Contextmenuvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Contextmenuvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Contextmenuvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Contextmenuvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Contextmenuvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Contextmenuvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Contextmenuvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Contextmenuvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Contextmenuvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Contextmenuvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Contextmenuvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Contextmenuvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Contextmenuvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Contextmenuvue_type_script_lang_js_ = ({
  name: 'TabContextmenu',
  components: {
    TabContextmenuItem: ContextmenuItem
  },
  inject: ['$tabs'],
  props: {
    // 右键数据
    data: {
      type: [Boolean, Object]
    },
    // 菜单配置
    menu: {
      type: Array,
      default: function _default() {
        return defaultMenu;
      }
    }
  },
  computed: {
    // 激活菜单的页签
    target: function target() {
      return this.tabMap[this.data.id];
    },
    // 菜单选项
    menuList: function menuList() {
      return this.menu.map(function (item) {
        if (typeof item === 'string') {
          // 内置菜单
          return config_contextmenu[item];
        } else if (item && item.id) {
          // 扩展内置菜单
          var origin = config_contextmenu[item.id];
          return origin ? Contextmenuvue_type_script_lang_js_objectSpread(Contextmenuvue_type_script_lang_js_objectSpread({}, origin), item) : item;
        }
      }).filter(function (item) {
        return item;
      });
    },
    // 是否显示图标
    hasIcon: function hasIcon() {
      return this.menuList.some(function (item) {
        return item.icon;
      });
    },
    // 页签 map
    tabMap: function tabMap() {
      return this.$tabs.$refs.tab.reduce(function (map, item) {
        map[item.id] = item;
        return map;
      }, {});
    },
    // 页签组件列表
    tabs: function tabs() {
      var _this = this;

      return this.$tabs.items.map(function (item) {
        return _this.tabMap[item.id];
      });
    },
    // 左侧可关闭的页签
    lefts: function lefts() {
      return this.tabs.slice(0, this.data.index).filter(function (item) {
        return item.closable;
      });
    },
    // 左侧可关闭的页签
    rights: function rights() {
      return this.tabs.slice(this.data.index + 1).filter(function (item) {
        return item.closable;
      });
    },
    // 其他可关闭的页签
    others: function others() {
      var _this2 = this;

      return this.tabs.filter(function (item) {
        return item.closable && _this2.data.id !== item.id;
      });
    }
  },
  mounted: function mounted() {
    this.adjust();
  },
  methods: {
    // 关闭多个页签
    closeMulti: function closeMulti(tabs) {
      var _this3 = this;

      return Contextmenuvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _iterator, _step, id;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(tabs);
                _context.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context.next = 14;
                  break;
                }

                id = _step.value.id;
                _context.prev = 5;
                _context.next = 8;
                return _this3.$tabs.removeTab(id);

              case 8:
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](5);

              case 12:
                _context.next = 3;
                break;

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t1 = _context["catch"](1);

                _iterator.e(_context.t1);

              case 19:
                _context.prev = 19;

                _iterator.f();

                return _context.finish(19);

              case 22:
                // 当前页签如已关闭，则打开右键选中页签
                if (!_this3.$tabs.activeTab) {
                  _this3.$router.replace(_this3.target.to);
                }

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16, 19, 22], [5, 10]]);
      }))();
    },
    // 适应边界位置
    adjust: function adjust() {
      var clientWidth = this.$el.clientWidth;
      var winWidth = window.innerWidth;

      if (this.data.left + clientWidth > winWidth) {
        this.data.left = winWidth - clientWidth - 5;
      }
    }
  }
});
// CONCATENATED MODULE: ./lib/components/Contextmenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contextmenuvue_type_script_lang_js_ = (Contextmenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/components/Contextmenu.vue





/* normalize component */

var Contextmenu_component = normalizeComponent(
  components_Contextmenuvue_type_script_lang_js_,
  Contextmenuvue_type_template_id_e3520a3a_render,
  Contextmenuvue_type_template_id_e3520a3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Contextmenu = (Contextmenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./lib/RouterTab.js?vue&type=script&lang=js&


function RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function RouterTabvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function RouterTabvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function RouterTabvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RouterTabvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { RouterTabvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RouterTabvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RouterTabvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 方法
 // 功能模块混入







 // 子组件




 // RouterTab 组件
// @vue/component

var RouterTab = {
  name: 'RouterTab',
  components: {
    RouterAlive: RouterAlive,
    TabItem: TabItem,
    TabScroll: TabScroll,
    TabContextmenu: Contextmenu
  },
  mixins: [contextmenu, i18n, iframe, operate, mixins_pageLeave, mixins_scroll, restore],
  // 注入子组件
  provide: function provide() {
    return {
      $tabs: this
    };
  },
  props: {
    // 初始页签数据
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 页面刷新后是否恢复页签
    restore: {
      type: [Boolean, String],
      default: false
    },
    // 是否监听 restoreKey 变化自动还原页签
    restoreWatch: {
      type: Boolean,
      default: false
    },
    // 页面滚动元素选择器
    pageScroller: {
      type: String,
      default: '.router-tab__container'
    },
    // 默认页面
    defaultPage: [String, Object],
    // 页签过渡效果
    tabTransition: {
      type: [String, Object],
      default: 'router-tab-zoom'
    },
    // 页面过渡效果
    pageTransition: {
      type: [String, Object],
      default: function _default() {
        return {
          name: 'router-tab-swap',
          mode: 'out-in'
        };
      }
    },

    /**
     * 自定义右键菜单
     * 1. 为 false 时禁用
     * 2. 为数组时可自定义右键菜单
     */
    contextmenu: {
      type: [Boolean, Array],
      default: true
    },
    // 是否支持页签拖拽排序
    dragsort: {
      type: Boolean,
      default: true
    },
    // 新页签插入位置，last 末尾，next 下一个
    append: {
      type: String,
      default: 'last'
    },
    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },
    // 默认是否缓存，可通过路由 meta.keepAlive 重置
    keepAlive: {
      type: Boolean,
      default: true
    },
    // 最大缓存数，0 则不限制
    maxAlive: {
      type: Number,
      default: 0
    },
    // 是否复用路由组件，可通过路由 meta.reuse 重置
    reuse: {
      type: Boolean,
      default: false
    },
    // 页签国际化配置 i18n (key, [args])
    i18n: Function,

    /**
     * 组件语言
     * - 为字符串时，可选值： 'zh'-中文，'en'-英文
     * - 为对象时，可设置自定义的语言
     * - 默认值：'auto'。根据浏览器语言自动识别组件语言。
     */
    lang: {
      type: [String, Object],
      default: 'auto'
    }
  },
  data: function data() {
    return {
      items: [],
      // 页签项
      onDragSort: false,
      // 拖拽排序中
      aliveReady: false // RouterAlive 初始化

    };
  },
  computed: {
    // routerAlive
    $alive: function $alive() {
      return this.aliveReady ? this.$refs.routerAlive : null;
    },
    // 当前激活的页签 id
    activeTabId: function activeTabId() {
      return this.$alive ? this.$alive.key : null;
    },
    // 当前激活的页签索引
    activeTabIndex: function activeTabIndex() {
      var _this = this;

      return this.items.findIndex(function (item) {
        return item.id === _this.activeTabId;
      });
    },
    // 当前激活的页签
    activeTab: function activeTab() {
      return this.items[this.activeTabIndex];
    },
    // 根路径
    basePath: function basePath() {
      return this.$alive ? this.$alive.basePath : '/';
    },
    // 默认路径
    defaultPath: function defaultPath() {
      return this.defaultPage || this.basePath || '/';
    },
    // 页签过渡
    tabTrans: function tabTrans() {
      return getTransOpt(this.tabTransition);
    },
    // 页面过渡
    pageTrans: function pageTrans() {
      return getTransOpt(this.pageTransition);
    }
  },
  created: function created() {
    // 添加到原型链
    RouterTab.Vue.prototype.$tabs = this;
  },
  destroyed: function destroyed() {
    var proto = RouterTab.Vue.prototype; // 取消原型挂载

    if (proto.$tabs === this) {
      proto.$tabs = null;
    }
  },
  methods: {
    // RouterAlive 组件就绪
    onAliveReady: function onAliveReady($alive) {
      // 获取 keepAlive 组件实例
      this.$refs.routerAlive = $alive;
      this.aliveReady = true;
      this.initTabs();
    },
    // 初始页签数据
    initTabs: function initTabs() {
      if (this.restoreTabs()) return;
      this.presetTabs();
    },
    // 预设页签
    presetTabs: function presetTabs() {
      var _this2 = this;

      var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tabs;
      var ids = {};
      this.items = tabs.map(function (item) {
        item = typeof item === 'string' ? {
          to: item
        } : item || emptyObj;

        var matched = item.to && _this2.matchRoute(item.to);

        if (matched) {
          var tab = _this2.getRouteTab(matched);

          var id = tab.id; // 根据 id 去重

          if (!ids[id]) {
            // id 不允许更改
            delete item.id; // 初始 tab 数据

            return ids[id] = Object.assign(tab, item);
          }
        }
      }).filter(function (item) {
        return !!item;
      });
    },
    // RouterAlive 缓存更新时同步更改页签
    onAliveChange: function onAliveChange(type, matched) {
      var items = this.items,
          lastMatchedKey = this.lastMatchedKey;
      var key = matched.key;
      var matchIdx = items.findIndex(function (_ref) {
        var id = _ref.id;
        return id === key;
      });
      var item = this.getRouteTab(matched); // 页签已存在

      if (matchIdx > -1) {
        if (type === 'create' || // 创建缓存
        type === 'update' && items[matchIdx].to !== matched.$route.fullPath // 更新缓存且地址更改
        ) {
            // 替换原页签
            this.$set(items, matchIdx, item);
          }
      } else {
        // 新增页签
        if (this.append === 'next' && lastMatchedKey !== undefined) {
          var lastIndex = this.items.findIndex(function (item) {
            return item.id === lastMatchedKey;
          });
          items.splice(lastIndex + 1, 0, item);
        } else {
          items.push(item);
        }
      } // 上次缓存 key


      this.lastMatchedKey = key;
    },
    // 从 route 中获取 tab 配置
    getRouteTab: function getRouteTab(_ref2) {
      var key = _ref2.key,
          $route = _ref2.$route,
          meta = _ref2.meta;

      var tab = RouterTabvue_type_script_lang_js_objectSpread({}, meta); // 支持根据路由函数返回的页签属性


      var props = ['title', 'tips', 'icon', 'closable'];

      for (var i in tab) {
        if (props.includes(i)) {
          var val = tab[i];

          if (typeof val === 'function') {
            tab[i] = val($route);
          }
        }
      }

      return Object.assign(tab, {
        id: key,
        to: $route.fullPath
      });
    },
    // 重载路由视图
    reload: function reload() {
      var _this3 = this;

      return RouterTabvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.$alive.reload();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 匹配路由信息
    matchRoute: function matchRoute($route) {
      return this.$alive.matchRoute($route);
    },
    // 获取路由缓存 key
    getRouteKey: function getRouteKey() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$route;
      return this.matchRoute(route).key;
    },
    // 从路由地址匹配页签 id
    getIdByPath: function getIdByPath(path) {
      var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!path) return;
      var matched = this.matchRoute(path);
      var key = matched.key;

      if (match) {
        // 路由地址精确匹配页签
        var matchTab = this.items.find(function (_ref3) {
          var to = _ref3.to;
          return prunePath(to) === prunePath(matched.$route.fullPath);
        });

        if (matchTab) {
          return key;
        }
      }

      return key;
    }
  }
};
/* harmony default export */ var RouterTabvue_type_script_lang_js_ = (RouterTab);
// CONCATENATED MODULE: ./lib/RouterTab.js?vue&type=script&lang=js&
 /* harmony default export */ var lib_RouterTabvue_type_script_lang_js_ = (RouterTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/RouterTab.vue





/* normalize component */

var RouterTab_component = normalizeComponent(
  lib_RouterTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lib_RouterTab = (RouterTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d04e0d04-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/page/Iframe.vue?vue&type=template&id=67b32182&
var Iframevue_type_template_id_67b32182_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab-iframe-fake"})}
var Iframevue_type_template_id_67b32182_staticRenderFns = []


// CONCATENATED MODULE: ./lib/page/Iframe.vue?vue&type=template&id=67b32182&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/page/Iframe.vue?vue&type=script&lang=js&


function Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Iframevue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
// Iframe 路由元
var iframeMeta = {
  key: function key(route) {
    return "iframe-".concat(route.params.src);
  },
  title: function title(route) {
    return route.params.title;
  },
  icon: function icon(route) {
    return route.params.icon;
  }
}; // Iframe 页签页面

/* harmony default export */ var Iframevue_type_script_lang_js_ = ({
  name: 'Iframe',
  inject: ['$tabs'],
  meta: iframeMeta,
  // Nuxt 页面路由元
  props: {
    src: String,
    title: String,
    icon: String
  },
  computed: {
    /**
     * 链接安全过滤，屏蔽以下方式 XSS 攻击，并返回空白页：
     * 1. `javascript:` 执行代码：`javascript:alert(1)`
     * 2. `data:` Base64 链接: `'data:text/html;base64,' + window.btoa('<script>alert(1)<\/script>')`
     */
    url: function url() {
      var src = decodeURIComponent(this.src);

      if (/^(javascript|data):/i.test(src)) {
        return 'about:blank';
      }

      return src;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Iframevue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var url, $tabs, iframes;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _this.url, $tabs = _this.$tabs;
              iframes = $tabs.iframes;

              if (!iframes.includes(url)) {
                iframes.push(url);
              }

              $tabs.currentIframe = url;
              _context.next = 6;
              return _this.$nextTick();

            case 6:
              _this.$tabs.iframeMounted(url);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  activated: function activated() {
    this.$tabs.currentIframe = this.url;
  },
  deactivated: function deactivated() {
    this.$tabs.currentIframe = null;
  },
  // 组件销毁后移除 iframe
  destroyed: function destroyed() {
    var url = this.url;
    var iframes = this.$tabs.iframes;
    var index = iframes.indexOf(url);

    if (index > -1) {
      iframes.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./lib/page/Iframe.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_Iframevue_type_script_lang_js_ = (Iframevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/page/Iframe.vue





/* normalize component */

var Iframe_component = normalizeComponent(
  page_Iframevue_type_script_lang_js_,
  Iframevue_type_template_id_67b32182_render,
  Iframevue_type_template_id_67b32182_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Iframe = (Iframe_component.exports);
// CONCATENATED MODULE: ./lib/config/routes.js
 // 注入的路由

/* harmony default export */ var routes = ([{
  // iframe 路由
  path: 'iframe/:src/:title?/:icon?',
  component: Iframe,
  props: true,
  meta: iframeMeta
}]);

// CONCATENATED MODULE: ./lib/mixins/routerPage.js
 // 浏览器窗口关闭或者刷新

var beforeunload = function beforeunload($tabs, tabId, beforePageLeave) {
  return function (e) {
    if (!$tabs && $tabs._isDestroyed) return;
    var tab = $tabs.items.find(function (item) {
      return item.id === tabId;
    });
    var msg = beforePageLeave(tab, 'unload');

    if (msg && typeof msg === 'string') {
      e.preventDefault();
      e.returnValue = msg; // 非当前页签则切换

      if ($tabs.activeTabId !== tabId) {
        $tabs.open(tab.to, false, false);
      }

      return msg;
    }
  };
}; // 路由页面混入


/* harmony default export */ var routerPage = ({
  watch: {
    // 监听 routerTab 字段，更新页签信息
    routeTab: {
      handler: function handler(val) {
        if (!val) return;
        var tab = typeof val === 'string' ? {
          title: val
        } : val;

        var _ref = this.$tabs || emptyObj,
            activeTab = _ref.activeTab;

        if (tab && activeTab) {
          for (var key in tab) {
            if (!['id', 'to'].includes(key)) {
              this.$set(activeTab, key, tab[key]);
            }
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  // 创建前记录缓存
  mounted: function mounted() {
    var $tabs = this.$tabs;

    var _ref2 = this.$vnode && this.$vnode.componentOptions.Ctor.options || emptyObj,
        beforePageLeave = _ref2.beforePageLeave; // 页面离开确认


    if ($tabs && beforePageLeave) {
      window.addEventListener('beforeunload', this._beforeunload = beforeunload($tabs, $tabs.activeTabId, beforePageLeave.bind(this)));
    }
  },
  destroyed: function destroyed() {
    if (this._beforeunload) {
      window.removeEventListener('beforeunload', this._beforeunload);
    }
  }
});
// EXTERNAL MODULE: ./lib/scss/routerTab.scss
var routerTab = __webpack_require__("751c");

// CONCATENATED MODULE: ./lib/index.js




 // 安装

lib_RouterTab.install = function install(Vue) {
  if (install.installed) return;
  lib_RouterTab.Vue = Vue;
  install.installed = true;
  Vue.component(lib_RouterTab.name, lib_RouterTab);
  Vue.mixin(routerPage);
}; // 如果浏览器环境且拥有全局Vue，则自动安装组件


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lib_RouterTab);
}

/* harmony default export */ var lib = (lib_RouterTab); // 导出


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ });
//# sourceMappingURL=vue-router-tab.common.js.map