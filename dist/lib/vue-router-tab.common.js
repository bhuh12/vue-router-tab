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

/***/ "6b67":
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
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
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
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
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

  Gp[toStringTagSymbol] = "Generator";

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

/***/ "cec0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b67");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ea7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f4d0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f4d0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "RouterAlive", function() { return /* reexport */ RouterAlive; });
__webpack_require__.d(__webpack_exports__, "RouterTabRoutes", function() { return /* reexport */ routes; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"971ce2f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/RouterTab.vue?vue&type=template&id=4af9cf8f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab"},[_c('header',{ref:"header",staticClass:"router-tab__header"},[_c('div',{staticClass:"router-tab__slot-start"},[_vm._t("start")],2),_c('tab-scroll',{ref:"scroll"},[_c('transition-group',_vm._b({staticClass:"router-tab__nav",attrs:{"tag":"ul"}},'transition-group',_vm.tabTrans,false),_vm._l((_vm.items),function(item,index){return _c('tab-item',{key:item.id || item.to,ref:"tab",refInFor:true,attrs:{"data":item,"index":index},nativeOn:{"contextmenu":function($event){$event.preventDefault();return (function (e) { return _vm.showContextmenu(item.id, index, e); })($event)}},scopedSlots:_vm._u([(_vm.$scopedSlots.default)?{key:"default",fn:function(scope){return [_vm._t("default",null,null,scope)]}}:null],null,true)})}),1)],1),_c('div',{staticClass:"router-tab__slot-end"},[_vm._t("end")],2)],1),_c('div',{staticClass:"router-tab__container",class:{ loading: _vm.loading }},[_c('router-alive',{attrs:{"page-class":"router-tab-page","keep-alive":_vm.keepAlive,"reuse":_vm.reuse,"max":_vm.maxAlive,"transition":_vm.pageTrans},on:{"ready":_vm.onAliveReady,"change":_vm.onAliveChange}}),_c('transition-group',_vm._b({staticClass:"router-tab__iframes",attrs:{"tag":"div"}},'transition-group',_vm.pageTrans,false),_vm._l((_vm.iframes),function(url){return _c('iframe',{directives:[{name:"show",rawName:"v-show",value:(url === _vm.currentIframe),expression:"url === currentIframe"}],key:url,staticClass:"router-tab__iframe",attrs:{"src":url,"name":_vm.iframeNamePrefix + url,"frameborder":"0"},on:{"load":function($event){return _vm.iframeLoaded(url)}}})}),0)],1),_c('transition',{attrs:{"name":"router-tab-zoom"}},[(_vm.contextmenu.id)?_c('div',{staticClass:"router-tab__contextmenu",style:(("left: " + (_vm.contextmenu.left) + "px; top: " + (_vm.contextmenu.top) + "px;"))},[_c('a',{staticClass:"router-tab__contextmenu-item",on:{"click":function($event){return _vm.refreshTab(_vm.contextmenu.id)}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.refresh)+" ")]),_c('a',{staticClass:"router-tab__contextmenu-item",attrs:{"disabled":_vm.items.length < 2},on:{"click":function($event){_vm.items.length > 1 && _vm.refreshAll()}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.refreshAll)+" ")]),_c('a',{staticClass:"router-tab__contextmenu-item",attrs:{"disabled":!_vm.isContextTabCanBeClosed},on:{"click":function($event){_vm.isContextTabCanBeClosed && _vm.closeTab(_vm.contextmenu.id)}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.close)+" ")]),_c('a',{staticClass:"router-tab__contextmenu-item",attrs:{"disabled":!_vm.tabsLeft.length},on:{"click":function($event){_vm.tabsLeft.length && _vm.closeMulti(_vm.tabsLeft)}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.closeLefts)+" ")]),_c('a',{staticClass:"router-tab__contextmenu-item",attrs:{"disabled":!_vm.tabsRight.length},on:{"click":function($event){_vm.tabsRight.length && _vm.closeMulti(_vm.tabsRight)}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.closeRights)+" ")]),_c('a',{staticClass:"router-tab__contextmenu-item",attrs:{"disabled":!_vm.tabsOther.length},on:{"click":function($event){_vm.tabsOther.length && _vm.closeMulti(_vm.tabsOther)}}},[_vm._v(" "+_vm._s(_vm.lang.contextmenu.closeOthers)+" ")])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./lib/RouterTab.vue?vue&type=template&id=4af9cf8f&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./lib/util/index.js
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
} // 防抖

function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var timeout = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.call(context, args);
    }, delay);
  };
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
} // 提取计算属性

function mapGetters(prop, keys) {
  var map = {};
  keys.forEach(function (key) {
    map[key] = function () {
      return this[prop][key];
    };
  });
  return map;
} // 去除路径中的 hash

var prunePath = function prunePath(path) {
  return path.split('#')[0];
}; // 解析过渡配置

function getTransOpt(trans) {
  return typeof trans === 'string' ? {
    name: trans
  } : trans;
}
// CONCATENATED MODULE: ./lib/mixins/contextmenu.js


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // 右键菜单

/* harmony default export */ var mixins_contextmenu = ({
  data: function data() {
    return {
      // 右键菜单
      contextmenu: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    };
  },
  computed: {
    // 右键页签是否允许关闭
    isContextTabCanBeClosed: function isContextTabCanBeClosed() {
      var items = this.items,
          contextmenu = this.contextmenu;
      var contextTab = items[contextmenu.index];
      return items.length > 1 && contextTab && contextTab.closable !== false;
    },
    // 左侧可关闭的页签
    tabsLeft: function tabsLeft() {
      var items = this.items,
          _this$contextmenu = this.contextmenu,
          id = _this$contextmenu.id,
          index = _this$contextmenu.index;
      return id ? items.slice(0, index).filter(function (_ref) {
        var closable = _ref.closable;
        return closable !== false;
      }) : emptyArray;
    },
    // 左侧可关闭的页签
    tabsRight: function tabsRight() {
      var items = this.items,
          _this$contextmenu2 = this.contextmenu,
          id = _this$contextmenu2.id,
          index = _this$contextmenu2.index;
      return id ? items.slice(index + 1).filter(function (_ref2) {
        var closable = _ref2.closable;
        return closable !== false;
      }) : emptyArray;
    },
    // 其他可关闭的页签
    tabsOther: function tabsOther() {
      var items = this.items,
          id = this.contextmenu.id;
      return id ? items.filter(function (_ref3) {
        var closable = _ref3.closable,
            tid = _ref3.id;
        return closable !== false && id !== tid;
      }) : emptyArray;
    }
  },
  watch: {
    // 路由切换隐藏右键菜单
    $route: function $route(_$route) {
      this.hideContextmenu();
    },
    // 监听右键菜单显示关闭
    'contextmenu.id': function contextmenuId(val, old) {
      var _this = this;

      if (!old && val) {
        // 显示右键菜单，绑定点击关闭事件
        document.addEventListener('click', this.onClick = function (e) {
          if (e.target !== _this.$el.querySelector('.router-tab-contextmenu')) {
            _this.hideContextmenu();
          }
        });
      } else if (old && !val) {
        // 隐藏右键菜单，移除点击关闭事件
        document.removeEventListener('click', this.onClick);
      }
    }
  },
  methods: {
    // 显示页签右键菜单
    showContextmenu: function showContextmenu(id, index, e) {
      // 菜单定位
      var _ref4 = e || emptyObj,
          top = _ref4.clientY,
          left = _ref4.clientX;

      Object.assign(this.contextmenu, {
        id: id,
        index: index,
        top: top,
        left: left
      });
    },
    // 关闭页签右键菜单
    hideContextmenu: function hideContextmenu() {
      this.showContextmenu(null, -1);
    },
    // 关闭多个页签
    closeMulti: function closeMulti(tabs) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var items, $router, contextmenu, nextTab, _iterator, _step, id;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                items = _this2.items, $router = _this2.$router, contextmenu = _this2.contextmenu;
                nextTab = items.find(function (_ref5) {
                  var id = _ref5.id;
                  return id === contextmenu.id;
                });
                _iterator = _createForOfIteratorHelper(tabs);
                _context.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context.next = 16;
                  break;
                }

                id = _step.value.id;
                _context.prev = 7;
                _context.next = 10;
                return _this2.removeTab(id);

              case 10:
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);

              case 14:
                _context.next = 5;
                break;

              case 16:
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context["catch"](3);

                _iterator.e(_context.t1);

              case 21:
                _context.prev = 21;

                _iterator.f();

                return _context.finish(21);

              case 24:
                // 当前页签如已关闭，则打开右键选中页签
                if (items.findIndex(function (_ref6) {
                  var id = _ref6.id;
                  return id === _this2.activeTabId;
                }) === -1) {
                  $router.replace(nextTab.to);
                }

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 18, 21, 24], [7, 12]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./lib/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  tab: {
    untitled: '无标题'
  },
  contextmenu: {
    refresh: '刷新',
    refreshAll: '刷新所有',
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
// CONCATENATED MODULE: ./lib/lang/en.js
/* harmony default export */ var en = ({
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
// CONCATENATED MODULE: ./lib/lang/index.js


/* harmony default export */ var lib_lang = ({
  'zh-CN': zh_CN,
  en: en
});
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
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || i18n_unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function i18n_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return i18n_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i18n_arrayLikeToArray(o, minLen); }

function i18n_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // 语言配置

 // 国际化

/* harmony default export */ var i18n = ({
  computed: {
    // 语言内容
    lang: function lang() {
      var lang = this.language;

      if (typeof lang === 'string') {
        lang = lib_lang[lang];
      } // 找不到语言配置，则使用英文


      if (!lang) lang = lib_lang['en'];
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
          warn(hasI18nProp, this.lang.msg.i18nProp);
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
// iframe 页签
/* harmony default export */ var iframe = ({
  data: function data() {
    return {
      iframes: [],
      currentIframe: null,
      iframeNamePrefix: 'RouterTabIframe-'
    };
  },
  methods: {
    // 获取 iframe 页签路由路径
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
    // 打开 iframe 页签
    openIframe: function openIframe(src, title, icon) {
      var path = this.getIframePath(src, title, icon);
      this.$router.push(path);
    },
    // 关闭 iframe 页签
    closeIframe: function closeIframe(src) {
      var path = this.getIframePath(src);
      this.close({
        path: path,
        match: false
      });
    },
    // 刷新 iframe 页签
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

function _slicedToArray(arr, i) { return operate_arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || operate_unsupportedIterableToArray(arr, i) || operate_nonIterableRest(); }

function operate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function operate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return operate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return operate_arrayLikeToArray(o, minLen); }

function operate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function operate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // 获取关闭参数

function getCloseArgs(args) {
  args = Array.from(args);
  var argsLen = args.length;
  var arg = args[0]; // 首个选项

  if (!argsLen) {
    // close()
    return {};
  } else if (_typeof(arg) === 'object' && !arg.name && !arg.fullPath && !arg.params && !arg.query && !arg.hash) {
    // close({id, path, match, force, to, refresh})
    return arg;
  } else {
    // close(path, to)
    var _args = args,
        _args2 = _slicedToArray(_args, 2),
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

                throw new Error(_this2.lang.msg.keepLastTab);

              case 5:
                if (force) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 8;
                return _this2.pageLeavePromise(id, 'close');

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
     *   1. this.$routerTab.close({id, path, match, force, to, refresh})
     *   2. this.$routerTab.close(path, to)
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
                return _this5.pageLeavePromise(id, 'refresh');

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
                return _this6.pageLeavePromise(id, 'refresh');

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
 // 页面离开

/* harmony default export */ var pageLeave = ({
  created: function created() {
    this.$router.beforeEach(this.routerPageLeaveGuard);
  },
  methods: {
    // 页面离开导航守卫
    routerPageLeaveGuard: function routerPageLeaveGuard(to, from, next) {
      if (this._isDestroyed) {
        var hooks = this.$router.beforeHooks;
        var idx = hooks.indexOf(this.routerPageLeaveGuard); // 移除已销毁的 RouterTab 实例注册的导航守卫

        if (idx > -1) hooks.splice(idx, 1);
        next();
      } else {
        var id = this.getRouteKey(to);
        var $alive = this.$alive;

        var _ref = $alive && $alive.cache[id] || emptyObj,
            alivePath = _ref.alivePath;

        var matched = this.matchRoute(to); // 如果不是相同路由则检查 beforePageLeave

        if (alivePath && alivePath !== matched.alivePath) {
          this.pageLeavePromise(id, 'replace').then(function () {
            return next();
          }).catch(function () {
            return next(false);
          });
        } else {
          next();
        }
      }
    },
    // 页面离开Promise
    pageLeavePromise: function pageLeavePromise(id, type) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var tab = _this.items.find(function (item) {
          return item.id === id;
        }); // 当前页签


        var _ref2 = _this.$alive.cache[id] || emptyObj,
            vm = _ref2.vm; // 缓存数据


        var beforePageLeave = vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave;

        if (typeof beforePageLeave === 'function') {
          // 页签关闭前
          beforePageLeave.bind(vm)(resolve, reject, tab, type);
        } else {
          resolve();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./lib/mixins/scroll.js


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
    // 页面载入和浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.onResize = debounce(this.adjust));
  },
  destroyed: function destroyed() {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    // 调整页签滚动，保证当前页签在可视区域
    adjust: function adjust() {
      if (!this.$el) return;
      var scroll = this.$refs.scroll;
      var cur = this.$el.querySelector('.router-tab__item.is-active');
      if (!scroll.isInView(cur)) scroll.scrollIntoView(cur);
    }
  }
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"971ce2f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/RouterAlive.vue?vue&type=template&id=9a476282&
var RouterAlivevue_type_template_id_9a476282_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-alive"},[_c('transition',_vm._b({attrs:{"appear":""},on:{"after-enter":_vm.onTransChange,"after-leave":_vm.onTransChange}},'transition',_vm.pageTrans,false),[_c('keep-alive',{attrs:{"max":_vm.max}},[(_vm.alive && !_vm.onRefresh)?_c('router-view',_vm._g({key:_vm.key,ref:"page",class:_vm.pageClass},_vm.hooks)):_vm._e()],1)],1),_c('transition',_vm._b({attrs:{"appear":""},on:{"after-enter":_vm.onTransChange,"after-leave":_vm.onTransChange}},'transition',_vm.pageTrans,false),[(!_vm.alive && !_vm.onRefresh)?_c('router-view',{key:_vm.key,ref:"page",class:_vm.pageClass}):_vm._e()],1)],1)}
var RouterAlivevue_type_template_id_9a476282_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/RouterAlive.vue?vue&type=template&id=9a476282&

// CONCATENATED MODULE: ./lib/util/RouteMatch.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // 内置规则

var rules = {
  // 地址，params 不一致则独立缓存
  path: function path(route) {
    return route.path;
  },
  // 完整地址 (忽略 hash)，params 或 query 不一致则独立缓存
  fullpath: function fullpath(route) {
    return prunePath(route.fullPath);
  }
}; // 解析路由 key

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
  for (var key in params) {
    path = path.replace(':' + key, params[key]);
  }

  return path;
} // 匹配路由数据


var RouteMatch_RouteMatch = /*#__PURE__*/function () {
  function RouteMatch(vm, $route) {
    _classCallCheck(this, RouteMatch);

    this.vm = vm;
    this.$route = $route;
  } // 设置路由


  _createClass(RouteMatch, [{
    key: "$route",
    set: function set($route) {
      if ($route && !$route.matched) {
        var $router = this.vm.$router;
        $route = $router.match($route, $router.currentRoute);
      }

      this._$route = $route;
    } // 获取路由
    ,
    get: function get() {
      return this._$route || this.vm.$route;
    } // 页面路由索引

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
      if (!this.routeIndex) return '/';
      var baseRoute = this.$route.matched[this.routeIndex - 1];
      var path = baseRoute.path;
      return path && parsePath(path, this.$route.params);
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
      var route = this.route;
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
function RouterAlivevue_type_script_lang_js_slicedToArray(arr, i) { return RouterAlivevue_type_script_lang_js_arrayWithHoles(arr) || RouterAlivevue_type_script_lang_js_iterableToArrayLimit(arr, i) || RouterAlivevue_type_script_lang_js_unsupportedIterableToArray(arr, i) || RouterAlivevue_type_script_lang_js_nonIterableRest(); }

function RouterAlivevue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RouterAlivevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RouterAlivevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RouterAlivevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function RouterAlivevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RouterAlivevue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RouterAlivevue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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

      var events = {};
      var hooks = ['created', 'mounted', 'activated'];
      hooks.forEach(function (hook) {
        events['hook:' + hook] = function () {
          return _this.pageHook(hook);
        };
      });
      return events;
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
            meta = this.meta,
            reusable = this.reusable,
            alivePath = this.alivePath,
            nest = this.nest;
        var cacheItem = this.cache[key] || {};
        var cacheAlivePath = cacheItem.alivePath,
            cacheFullPath = cacheItem.fullPath,
            vm = cacheItem.vm; // 不复用且路由改变则清理组件缓存

        if (cacheAlivePath && !reusable && cacheAlivePath !== alivePath) {
          cacheAlivePath = '';
          this.refresh(key);
        } // 嵌套路由，地址跟缓存不一致


        if (nest && vm && $route.fullPath !== cacheFullPath) {
          var oldKey = this.matchRoute(old).key;

          if (oldKey !== key) {
            this.nestForceUpdate = true;
          }
        }

        if ($route.query._forceReload && old) return; // 类型：更新或者新建缓存

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
        var _ref3 = RouterAlivevue_type_script_lang_js_slicedToArray(_ref2, 2),
            id = _ref3[0],
            item = _ref3[1];

        if (item && item.data.key === key) {
          // 销毁组件实例
          item.componentInstance && item.componentInstance.$destroy();
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
      this.cache[this.key].vm = this.$refs.page;
    },
    // 页面激活
    'pageHook:activated': function pageHookActivated() {
      // 嵌套路由缓存导致页面不匹配时强制更新
      if (this.nestForceUpdate) {
        delete this.nestForceUpdate;
        this.$refs.page.$forceUpdate();
      }
    },
    // 页面过渡后结束刷新状态
    onTransChange: function onTransChange() {
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
  RouterAlivevue_type_template_id_9a476282_render,
  RouterAlivevue_type_template_id_9a476282_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RouterAlive = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"971ce2f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/TabItem.vue?vue&type=template&id=64b9760c&
var TabItemvue_type_template_id_64b9760c_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{class:( _obj = {
    'router-tab__item': true
  }, _obj[_vm.tabClass || ''] = true, _obj['is-active'] =  _vm.RouterTab.activeTabId === _vm.id, _obj['is-closable'] =  _vm.closable, _obj['is-contextmenu'] =  _vm.RouterTab.contextmenu.id === _vm.id, _obj ),attrs:{"tag":"li","to":_vm.to}},[_vm._t("default",[(_vm.icon)?_c('i',{staticClass:"router-tab__item-icon",class:_vm.icon}):_vm._e(),_c('span',{staticClass:"router-tab__item-title",attrs:{"title":_vm.tips}},[_vm._v(_vm._s(_vm.title))]),(_vm.closable)?_c('i',{staticClass:"router-tab__item-close",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.close($event)}}}):_vm._e()],null,this)],2)}
var TabItemvue_type_template_id_64b9760c_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/TabItem.vue?vue&type=template&id=64b9760c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/TabItem.vue?vue&type=script&lang=js&
function TabItemvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TabItemvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TabItemvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { TabItemvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TabItemvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TabItemvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 // 页签项

/* harmony default export */ var TabItemvue_type_script_lang_js_ = ({
  name: 'TabItem',
  inject: ['RouterTab'],
  props: {
    // 页签原始数据，方便 slot 插槽自定义数据
    data: {
      type: Object,
      required: true
    },
    // 页签项索引
    index: Number
  },
  computed: TabItemvue_type_script_lang_js_objectSpread(TabItemvue_type_script_lang_js_objectSpread({}, mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href'])), {}, {
    // 国际化
    i18nText: function i18nText() {
      return this.RouterTab.i18nText;
    },
    // 未命名页签
    untitled: function untitled() {
      return this.RouterTab.lang.tab.untitled;
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
      var _this$RouterTab = this.RouterTab,
          keepLastTab = _this$RouterTab.keepLastTab,
          items = _this$RouterTab.items;
      return this.data.closable !== false && !(keepLastTab && items.length < 2);
    }
  }),
  methods: {
    // 关闭当前页签
    close: function close() {
      this.RouterTab.closeTab(this.id);
    }
  }
});
// CONCATENATED MODULE: ./lib/components/TabItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TabItemvue_type_script_lang_js_ = (TabItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./lib/components/TabItem.vue





/* normalize component */

var TabItem_component = normalizeComponent(
  components_TabItemvue_type_script_lang_js_,
  TabItemvue_type_template_id_64b9760c_render,
  TabItemvue_type_template_id_64b9760c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabItem = (TabItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"971ce2f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/components/TabScroll.vue?vue&type=template&id=7fea0f42&
var TabScrollvue_type_template_id_7fea0f42_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab__scroll",on:{"wheel":function($event){$event.preventDefault();return _vm.onMouseWheel($event)},"mouseenter":_vm.update}},[_c('div',{ref:"container",staticClass:"router-tab__scroll-container",class:{ 'is-mobile': _vm.isMobile },on:{"scroll":_vm.update}},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroller),expression:"hasScroller"}],ref:"bar",staticClass:"router-tab__scrollbar",class:{ 'is-dragging': _vm.dragData }},[_c('div',{ref:"thumb",staticClass:"router-tab__scrollbar-thumb",style:(("width: " + _vm.thumbWidth + "px; transform: translateX(" + _vm.thumbLeft + "px)")),on:{"mousedown":function($event){$event.preventDefault();return _vm.onDragStart($event)}}})])])}
var TabScrollvue_type_template_id_7fea0f42_staticRenderFns = []


// CONCATENATED MODULE: ./lib/components/TabScroll.vue?vue&type=template&id=7fea0f42&

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
      return !this.isMobile && this.scrollData.scrollWidth > this.scrollData.clientWidth;
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
    // 是否移动端
    this.isMobile = /mobile/i.test(navigator.userAgent);
    this.update();
  },
  methods: {
    // 更新滚动数据
    update: function update() {
      var _this$$refs$container = this.$refs.container,
          clientWidth = _this$$refs$container.clientWidth,
          scrollWidth = _this$$refs$container.scrollWidth,
          scrollLeft = _this$$refs$container.scrollLeft;
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
    onMouseWheel: function onMouseWheel(e) {
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
  TabScrollvue_type_template_id_7fea0f42_render,
  TabScrollvue_type_template_id_7fea0f42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabScroll = (TabScroll_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/eslint-loader??ref--13-0!./lib/RouterTab.js?vue&type=script&lang=js&


function RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function RouterTabvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { RouterTabvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function RouterTabvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RouterTabvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RouterTabvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { RouterTabvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RouterTabvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RouterTabvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 方法
 // 功能模块混入







 // 子组件



 // RouterTab 组件

var RouterTab = {
  name: 'RouterTab',
  mixins: [mixins_contextmenu, i18n, iframe, operate, pageLeave, mixins_scroll, restore],
  components: {
    RouterAlive: RouterAlive,
    TabItem: TabItem,
    TabScroll: TabScroll
  },
  // 注入子组件
  provide: function provide() {
    return {
      RouterTab: this
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
    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },
    // 默认页面
    defaultPage: [String, Object],
    // 页签国际化配置 i18n (key, [args])
    i18n: Function,

    /**
     * 组件语言
     * - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
     * - 为对象时，可设置自定义的语言
     */
    language: {
      type: [String, Object],
      default: 'zh-CN'
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
    }
  },
  data: function data() {
    return {
      items: [],
      // 页签项
      loading: false,
      // 路由页面 loading
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
    // 当前激活的页签
    activeTab: function activeTab() {
      var _this = this;

      return this.items.find(function (item) {
        return item.id === _this.activeTabId;
      });
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
  watch: {
    // 路由切换更新激活的页签
    $route: function $route(_$route) {
      this.loading = false;
    }
  },
  created: function created() {
    // 添加到原型链
    RouterTab.Vue.prototype.$routerTab = this;
  },
  destroyed: function destroyed() {
    var proto = RouterTab.Vue.prototype; // 取消原型挂载

    if (proto.$routerTab === this) {
      proto.$routerTab = null;
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
      var items = this.items;
      var matchIdx = items.findIndex(function (_ref) {
        var id = _ref.id;
        return id === matched.key;
      });
      var item = this.getRouteTab(matched); // 页签已存在

      if (matchIdx > -1) {
        if (type === 'create') {
          // 替换原页签
          this.$set(items, matchIdx, item);
        } else if (type === 'update') {
          // 地址更改则替换页签
          if (items[matchIdx].to !== matched.$route.fullPath) {
            this.$set(items, matchIdx, item);
          }
        }
      } else {
        // 新增页签
        items.push(item);
      }
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
// EXTERNAL MODULE: ./lib/scss/routerTab.scss?vue&type=style&index=0&lang=scss&
var routerTabvue_type_style_index_0_lang_scss_ = __webpack_require__("cec0");

// EXTERNAL MODULE: ./lib/scss/transition.scss?vue&type=style&index=1&lang=scss&
var transitionvue_type_style_index_1_lang_scss_ = __webpack_require__("ea7e");

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"971ce2f4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/page/Iframe.vue?vue&type=template&id=f9e4f0ec&
var Iframevue_type_template_id_f9e4f0ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab-iframe-fake"})}
var Iframevue_type_template_id_f9e4f0ec_staticRenderFns = []


// CONCATENATED MODULE: ./lib/page/Iframe.vue?vue&type=template&id=f9e4f0ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./lib/page/Iframe.vue?vue&type=script&lang=js&


function Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Iframevue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Iframevue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
// iframe 页签页面
/* harmony default export */ var Iframevue_type_script_lang_js_ = ({
  name: 'Iframe',
  inject: ['RouterTab'],
  props: {
    src: String,
    title: String,
    icon: String
  },
  computed: {
    // 链接安全过滤，避免执行js
    url: function url() {
      var src = this.src; // XSS 攻击链接返回空白页

      if (/^javascript:/.test(src)) {
        return 'about:blank';
      }

      return src;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Iframevue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var url, $tab, iframes;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _this.url, $tab = _this.RouterTab;
              iframes = $tab.iframes;

              if (!iframes.includes(url)) {
                iframes.push(url);
              }

              $tab.currentIframe = url;
              _context.next = 6;
              return _this.$nextTick();

            case 6:
              _this.RouterTab.iframeMounted(url);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  activated: function activated() {
    this.RouterTab.currentIframe = this.url;
  },
  deactivated: function deactivated() {
    this.RouterTab.currentIframe = null;
  },
  // 组件销毁后移除 iframe
  destroyed: function destroyed() {
    var url = this.url;
    var iframes = this.RouterTab.iframes;
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
  Iframevue_type_template_id_f9e4f0ec_render,
  Iframevue_type_template_id_f9e4f0ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Iframe = (Iframe_component.exports);
// CONCATENATED MODULE: ./lib/util/routes.js
 // 注入的路由

/* harmony default export */ var routes = ([{
  // iframe 路由
  path: 'iframe/:src/:title?/:icon?',
  component: Iframe,
  props: true,
  meta: {
    key: function key(route) {
      return "iframe-".concat(route.params.src);
    },
    title: function title(route) {
      return route.params.title;
    },
    icon: function icon(route) {
      return route.params.icon;
    }
  }
}]);
// CONCATENATED MODULE: ./lib/mixins/routerPage.js
// 路由页面混入
/* harmony default export */ var routerPage = ({
  // 创建前记录缓存
  mounted: function mounted() {
    // 监听 routerTab 字段，更新页签信息
    this.$watch('routeTab', function (val) {
      if (!val) return;
      var tab = typeof val === 'string' ? {
        title: val
      } : val;

      var _ref = this.$routerTab || {},
          activeTab = _ref.activeTab;

      if (tab && activeTab) {
        for (var key in tab) {
          if (!['id', 'to'].includes(key)) {
            this.$set(activeTab, key, tab[key]);
          }
        }
      }
    }, {
      deep: true,
      immediate: true
    });
  }
});
// CONCATENATED MODULE: ./lib/index.js



 // 安装

lib_RouterTab.install = function install(Vue, options) {
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