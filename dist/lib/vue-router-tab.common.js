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

/***/ "02eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4795":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");


/***/ }),

/***/ "4ba7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_transition_scss_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

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

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
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

/***/ "e42d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f42e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_routerTab_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f42e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33e18d7e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RouterTab.vue?vue&type=template&id=74fe07f8&
var RouterTabvue_type_template_id_74fe07f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"router-tab"},[_c('header',{staticClass:"router-tab-header"},[_c('div',{staticClass:"router-tab-scroll"},[_c('transition-group',_vm._b({staticClass:"router-tab-nav",attrs:{"tag":"ul"},on:{"after-enter":_vm.onTabTransitionEnd,"after-leave":_vm.onTabTransitionEnd}},'transition-group',typeof _vm.tabTransition === 'string' ? { name: _vm.tabTransition } : _vm.tabTransition,false),_vm._l((_vm.items),function(ref,index){
var id = ref.id;
var to = ref.to;
var title = ref.title;
var icon = ref.icon;
var tips = ref.tips;
var closable = ref.closable;
return _c('router-link',{key:id || to,staticClass:"router-tab-item",class:{ actived: _vm.activedTab === id, contextmenu: _vm.contextmenu.id === id },attrs:{"tag":"li","title":tips || title || '',"to":to},nativeOn:{"contextmenu":function($event){$event.preventDefault();return (function (e) { return _vm.showContextmenu(id, index, e); })($event)}}},[_vm._t("default",[(icon)?_c('i',{staticClass:"tab-icon",class:icon}):_vm._e(),_c('span',{staticClass:"tab-title"},[_vm._v(_vm._s(title || _vm.lang.tab.untitled))]),(closable !== false && _vm.items.length > 1)?_c('i',{staticClass:"tab-close",attrs:{"title":_vm.lang.contextmenu.close},on:{"click":function($event){$event.preventDefault();return _vm.closeTab(id)}}}):_vm._e()],null,{
              tab: _vm.items[index],
              tabs: _vm.items,
              index: index
            })],2)}),1)],1),_c('a',{staticClass:"el-icon-caret-left nav-prev",on:{"click":function($event){return _vm.tabScroll('left')}}}),_c('a',{staticClass:"el-icon-caret-right nav-next",on:{"click":function($event){return _vm.tabScroll('right')}}})]),_c('div',{staticClass:"router-tab-container",class:{ loading: _vm.loading }},[_c('router-alive',{ref:"routerAlive",attrs:{"alive-id":_vm.aliveId},on:{"update":_vm.updateTab}},[_c('transition',_vm._b({attrs:{"appear":""},on:{"after-enter":_vm.onPageTransitionEnd,"after-leave":_vm.onPageTransitionEnd}},'transition',typeof _vm.pageTransition === 'string' ? { name: _vm.pageTransition } : _vm.pageTransition,false),[(_vm.isRouterAlive)?_c('router-view',_vm._b({ref:"routerView",staticClass:"router-tab-page"},'router-view',_vm.routerView,false)):_vm._e()],1)],1)],1),_c('transition',{attrs:{"name":"router-tab-zoom-lt"}},[(_vm.contextmenu.id)?_c('div',{staticClass:"router-tab-contextmenu",style:(("left: " + (_vm.contextmenu.left) + "px; top: " + (_vm.contextmenu.top) + "px;"))},[_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":!_vm.isContextTabActived},on:{"click":function($event){_vm.isContextTabActived && _vm.refreshTab(_vm.contextmenu.id)}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.refresh)+"\n      ")]),_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":_vm.items.length < 2},on:{"click":function($event){_vm.items.length > 1 && _vm.refreshAll()}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.refreshAll)+"\n      ")]),_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":!_vm.isContextTabCanBeClosed},on:{"click":function($event){_vm.isContextTabCanBeClosed && _vm.closeTab(_vm.contextmenu.id)}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.close)+"\n      ")]),_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":!_vm.tabsLeft.length},on:{"click":function($event){_vm.tabsLeft.length && _vm.closeMulti(_vm.tabsLeft)}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.closeLefts)+"\n      ")]),_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":!_vm.tabsRight.length},on:{"click":function($event){_vm.tabsRight.length && _vm.closeMulti(_vm.tabsRight)}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.closeRights)+"\n      ")]),_c('a',{staticClass:"contextmenu-item",attrs:{"disabled":!_vm.tabsOther.length},on:{"click":function($event){_vm.tabsOther.length && _vm.closeMulti(_vm.tabsOther)}}},[_vm._v("\n        "+_vm._s(_vm.lang.contextmenu.closeOthers)+"\n      ")])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RouterTab.vue?vue&type=template&id=74fe07f8&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("4795");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/util/index.js
// 空对象和数组
var emptyObj = Object.create(null);
var emptyArray = []; // 是否定义

function isDef(v) {
  return v !== undefined && v !== null;
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
// CONCATENATED MODULE: ./src/util/rules.js
// 页签规则
/* harmony default export */ var rules = ({
  // 地址，例如："/page/1?type=a#title" 则取 "/page/1"
  path: function path(route) {
    return route.path;
  },
  // 完整地址 (忽略hash)，例如："/page/1?type=a#title" 则取 "/page/1?type=a"
  fullpath: function fullpath(route) {
    return route.fullPath.replace(route.hash, '');
  }
});
// CONCATENATED MODULE: ./src/util/alive.js
 // 获取缓存 id

function getAliveId() {
  var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$route;
  var rule = route.meta && route.meta.aliveId || this.aliveId;

  if (typeof rule === 'string') {
    rule = rules[rule.toLowerCase()];
  }

  if (typeof rule !== 'function') {
    rule = rules.path;
  }

  return rule.bind(this)(route);
}
// CONCATENATED MODULE: ./src/util/dom.js
 // 滚动

function scrollTo($el) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if ($el.scrollTo) {
    $el.scrollTo({
      left: left,
      top: top,
      behavior: 'smooth'
    });
  } else {
    $el.scrollLeft = left;
    $el.scrollTop = top;
  }
} // 获取第一个子组件

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
} // 是否异步占位

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
// CONCATENATED MODULE: ./src/util/route.js
// 获取路由不带hash的路径
function getPathWithoutHash(route) {
  return route.hash ? route.fullPath.replace(route.hash, '') : route.fullPath;
} // 是否相似路由

function isAlikeRoute(route1, route2) {
  return getPathWithoutHash(route1) === getPathWithoutHash(route2);
} // 获取路由页面组件

function getRouteComponent(_ref) {
  var matched = _ref.matched;
  return matched[matched.length - 1].components.default;
} // 路由是否共用组件

function isSameComponentRoute(route1, route2) {
  return getRouteComponent(route1) === getRouteComponent(route2);
}
// CONCATENATED MODULE: ./src/lang/zh-CN.js
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
    keepOneTab: '至少应保留1个页签'
  }
});
// CONCATENATED MODULE: ./src/lang/en.js
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
    keepOneTab: 'Keep at least 1 tab'
  }
});
// CONCATENATED MODULE: ./src/lang/index.js


/* harmony default export */ var src_lang = ({
  'zh-CN': zh_CN,
  en: en
});
// CONCATENATED MODULE: ./src/components/RouterAlive.js




/* harmony default export */ var RouterAlive = ({
  name: 'RouterAlive',
  props: {
    // 缓存id，如果为函数，则参数为route
    aliveId: {
      type: [String, Function],
      default: 'path'
    }
  },
  beforeCreate: function beforeCreate() {
    Object.assign(this, {
      cache: Object.create(null),
      lastRoute: this.$route
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var vmOpts = vnode && vnode.componentOptions;

    if (vmOpts) {
      var cache = this.cache,
          $route = this.$route,
          lastRoute = this.lastRoute; // 如果是transition组件，页面组件则为子元素

      var pageNode = vmOpts.tag === 'transition' ? vmOpts.children[0] : vnode;

      if (pageNode && pageNode.componentOptions) {
        // 获取缓存
        var key = this.getAliveId();
        var cacheItem = cache[key];

        var _ref = cacheItem || emptyObj,
            cacheVm = _ref.vm,
            cacheRoute = _ref.route; // 是否需要重载路由强制刷新页面组件


        var needReloadRouter = false; // 路由是否改变

        var isRouteChange = lastRoute !== $route; // 是否跟上次路由共用组件

        var isSameComponent = isRouteChange && isSameComponentRoute($route, lastRoute);

        if (isRouteChange) {
          // 更新上次路由
          this.lastRoute = $route; // 添加缓存

          if (!cacheItem) this.set(key, {
            route: $route
          });
        }

        if (cacheVm) {
          // 缓存组件的路由地址除hash外一致则取缓存的组件
          if (isAlikeRoute(cacheRoute, $route)) {
            pageNode.componentInstance = cacheVm;
          } else {
            // 缓存组件路由地址不匹配则销毁缓存并重载路由
            cacheVm.$destroy();
            cacheItem.vm = null;
            needReloadRouter = true;
          }
        } // 路由改变后但组件相同需重载路由


        if (isSameComponent) needReloadRouter = true; // 重载路由以强制更新页面

        needReloadRouter && this.$routerTab.reloadRouter(); // 标记为keepAlive和routerAlive

        pageNode.data.keepAlive = true;
        pageNode.data.routerAlive = this;
      }
    }

    return vnode || slot && slot[0];
  },
  methods: {
    getAliveId: getAliveId,
    // 设置缓存项
    set: function set(key, item) {
      var cache = this.cache;
      this.$emit('update', key, item); // 更新缓存数据

      return cache[key] = item;
    },
    // 删除缓存项
    remove: function remove(key) {
      var cache = this.cache;
      var item = cache[key]; // 销毁组件实例

      if (item) {
        item.vm && item.vm.$destroy();
        delete cache[key];
      }

      this.$emit('remove', [key]);
    },
    // 清理缓存
    clear: function clear(key) {
      var item = this.cache[key];
      var vm = item && item.vm;

      if (vm) {
        vm.$destroy();
        item.vm = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-eslint/node_modules/eslint-loader??ref--13-0!./src/components/RouterTab.js?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // 方法




 // 语言配置

 // 子组件


/* harmony default export */ var RouterTabvue_type_script_lang_js_ = ({
  name: 'RouterTab',
  components: {
    RouterAlive: RouterAlive
  },
  props: {
    // 缓存id，如果为函数，则参数为route
    aliveId: RouterAlive.props.aliveId,
    // 语言配置
    // - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
    // - 为对象时，可设置自定义的语言
    i18n: {
      type: [String, Object],
      default: 'zh-CN'
    },
    // 初始页签数据
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // router-view组件配置
    routerView: Object,
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
      loading: false,
      // 路由页面loading
      items: [],
      // 页签项
      activedTab: null,
      // 当前激活的页签
      isRouterAlive: true,
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
    // 语言内容
    lang: function lang() {
      var lang = null;
      var i18n = this.i18n;

      if (typeof i18n === 'string') {
        lang = src_lang[i18n];
      } else if (_typeof(i18n) === 'object') {
        lang = i18n;
      } // 找不到语言配置，则使用英文


      if (!lang) lang = src_lang['en'];
      return lang;
    },
    // 右键菜单是否当前页签
    isContextTabActived: function isContextTabActived() {
      return this.contextmenu.id === this.activedTab;
    },
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
    // 路由切换更新激活的页签
    $route: function $route(_$route) {
      this.loading = false;
      this.hideContextmenu();
      this.updateActivedTab();
      this.fixCommentPage();
    },
    activedTab: function () {
      var _activedTab = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var $cur, $scr, cLeft, sLeft;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$nextTick();

              case 2:
                $cur = this.$el.querySelector('.router-tab-nav .actived');
                $scr = this.$el.querySelector('.router-tab-scroll');

                if ($cur) {
                  cLeft = $cur.offsetLeft;
                  sLeft = $scr.scrollLeft;

                  if (cLeft < sLeft || cLeft + $cur.clientWidth > sLeft + $scr.clientWidth) {
                    this.adjust();
                  }
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activedTab() {
        return _activedTab.apply(this, arguments);
      }

      return activedTab;
    }(),
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
  beforeCreate: function beforeCreate() {
    // 添加到原型链
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$routerTab = this; // 获取跟路径

    var matched = this.$route.matched;
    this.basePath = (matched[matched.length - 2] || {}).path;
  },
  created: function created() {
    this.getTabItems();
    this.updateActivedTab();
    this.$router.beforeEach(this.routerPageLeaveGuard);
    this.$nextTick(this.adjust);
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
    getAliveId: getAliveId,
    // 页面离开导航守卫
    routerPageLeaveGuard: function routerPageLeaveGuard(to, from, next) {
      if (this._isDestroyed) {
        var hooks = this.$router.beforeHooks;
        var idx = hooks.indexOf(this.routerPageLeaveGuard); // 移除已销毁的RouterTab实例注册的导航守卫

        if (idx > -1) hooks.splice(idx, 1);
        next();
      } else {
        var id = this.getAliveId(to);
        var $alive = this.$refs.routerAlive;

        var _ref4 = $alive && $alive.cache[id] || emptyObj,
            cacheRoute = _ref4.route; // 如果不是相同路由则检查beforePageLeave


        if (cacheRoute && !isAlikeRoute(to, cacheRoute)) {
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
    // 根据初始页签数据生成页签列表
    getTabItems: function getTabItems() {
      var _this2 = this;

      var tabs = this.tabs,
          $router = this.$router;
      var ids = {};
      this.items = tabs.map(function (item, index) {
        var _ref5 = typeof item === 'string' ? {
          to: item
        } : item || emptyObj,
            to = _ref5.to,
            closable = _ref5.closable,
            title = _ref5.title,
            tips = _ref5.tips;

        var route = to && $router.match(to);

        if (route) {
          var tab = _this2.getRouteTab(route);

          var id = tab.id; // 根据id去重

          if (!ids[id]) {
            // 初始 tab 数据
            if (title) tab.title = title;
            if (tips) tab.tips = tips;
            tab.closable = closable !== false;
            return ids[id] = tab;
          }
        }
      }).filter(function (item) {
        return !!item;
      });
    },
    // 更新激活的页签
    updateActivedTab: function updateActivedTab() {
      this.activedTab = this.getAliveId();
    },
    // 更新tab数据
    updateTab: function updateTab(key, _ref6) {
      var route = _ref6.route,
          tab = _ref6.tab;
      var items = this.items;
      var matchIdx = items.findIndex(function (_ref7) {
        var id = _ref7.id;
        return id === key;
      });
      var item = Object.assign(this.getRouteTab(route), tab);

      if (matchIdx > -1) {
        var matchTab = items[matchIdx];
        item.closable = matchTab.closable !== false;
        this.$set(items, matchIdx, item);
      } else {
        items.push(item);
      }
    },
    // 从路由地址获取 aliveId
    getIdByLocation: function getIdByLocation(location) {
      var fullMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!location) return;
      var $route = this.$router.match(location, this.$router.currentRoute); // 路由地址精确匹配页签

      if (fullMatch) {
        var matchPath = getPathWithoutHash($route);
        var matchTab = this.items.find(function (_ref8) {
          var to = _ref8.to;
          return to.split('#')[0] === matchPath;
        });

        if (matchTab) {
          return matchTab.id;
        }
      } else {
        return this.getAliveId($route);
      }
    },
    // 从route中获取tab数据
    getRouteTab: function getRouteTab(route) {
      var id = this.getAliveId(route);
      var to = route.fullPath,
          meta = route.meta;
      var title = meta.title,
          icon = meta.icon,
          tips = meta.tips;
      return {
        id: id,
        to: to,
        title: title,
        icon: icon,
        tips: tips
      };
    },
    // 页面离开Promise
    pageLeavePromise: function pageLeavePromise(id, type) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var $alive = _this3.$refs.routerAlive;

        var tab = _this3.items.find(function (item) {
          return item.id === id;
        }); // 当前页签


        var _ref9 = $alive.cache[id] || emptyObj,
            vm = _ref9.vm; // 缓存数据


        var beforePageLeave = vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave;

        if (typeof beforePageLeave === 'function') {
          // 页签关闭前
          beforePageLeave.bind(vm)(resolve, reject, tab, type);
        } else {
          resolve();
        }
      });
    },
    // 移除tab项
    removeTab: function () {
      var _removeTab = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(id) {
        var items, $alive, idx;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                items = this.items;
                $alive = this.$refs.routerAlive;
                idx = items.findIndex(function (item) {
                  return item.id === id;
                });

                if (!(items.length === 1)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error(this.lang.msg.keepOneTab);

              case 5:
                _context2.prev = 5;
                _context2.next = 8;
                return this.pageLeavePromise(id, 'close');

              case 8:
                // 承诺关闭后移除页签和缓存
                $alive.remove(id);
                idx > -1 && items.splice(idx, 1);
                _context2.next = 14;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](5);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 12]]);
      }));

      function removeTab(_x) {
        return _removeTab.apply(this, arguments);
      }

      return removeTab;
    }(),
    // 通过路由地址关闭页签
    close: function close(location) {
      var fullMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (location) {
        var id = this.getIdByLocation(location, fullMatch);

        if (id) {
          this.closeTab(id);
        }
      } else {
        this.closeTab();
      }
    },
    // 通过页签id关闭页签
    closeTab: function () {
      var _closeTab = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        var id,
            activedTab,
            items,
            $router,
            idx,
            nextTab,
            _args3 = arguments;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : this.activedTab;
                activedTab = this.activedTab, items = this.items, $router = this.$router;
                idx = items.findIndex(function (item) {
                  return item.id === id;
                });
                _context3.prev = 3;
                _context3.next = 6;
                return this.removeTab(id);

              case 6:
                // 如果关闭当前页签，则打开后一个页签
                if (activedTab === id) {
                  nextTab = items[idx] || items[idx - 1];
                  $router.replace(nextTab.to);
                }

                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](3);
                console.warn(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 9]]);
      }));

      function closeTab() {
        return _closeTab.apply(this, arguments);
      }

      return closeTab;
    }(),
    // 关闭多个页签
    closeMulti: function () {
      var _closeMulti = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(tabs) {
        var _this4 = this;

        var items, $router, contextmenu, nextTab, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id;

        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                items = this.items, $router = this.$router, contextmenu = this.contextmenu;
                nextTab = items.find(function (_ref10) {
                  var id = _ref10.id;
                  return id === contextmenu.id;
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 5;
                _iterator = tabs[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 19;
                  break;
                }

                id = _step.value.id;
                _context4.prev = 9;
                _context4.next = 12;
                return this.removeTab(id);

              case 12:
                _context4.next = 16;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](9);

              case 16:
                _iteratorNormalCompletion = true;
                _context4.next = 7;
                break;

              case 19:
                _context4.next = 25;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t1 = _context4["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context4.t1;

              case 25:
                _context4.prev = 25;
                _context4.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 28:
                _context4.prev = 28;

                if (!_didIteratorError) {
                  _context4.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context4.finish(28);

              case 32:
                return _context4.finish(25);

              case 33:
                // 当前页签如已关闭，则打开右键选中页签
                if (items.findIndex(function (_ref11) {
                  var id = _ref11.id;
                  return id === _this4.activedTab;
                }) === -1) {
                  $router.replace(nextTab.to);
                }

              case 34:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 21, 25, 33], [9, 14], [26,, 28, 32]]);
      }));

      function closeMulti(_x2) {
        return _closeMulti.apply(this, arguments);
      }

      return closeMulti;
    }(),
    // 通过路由地址刷新页签
    refresh: function refresh(location) {
      var fullMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (location) {
        var id = this.getIdByLocation(location, fullMatch);

        if (id) {
          this.refreshTab(id);
        }
      } else {
        this.refreshTab();
      }
    },
    // 刷新指定页签
    refreshTab: function () {
      var _refreshTab = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5() {
        var id,
            _args5 = arguments;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : this.activedTab;
                _context5.prev = 1;
                _context5.next = 4;
                return this.pageLeavePromise(id, 'refresh');

              case 4:
                this.$refs.routerAlive.clear(id);
                if (id === this.activedTab) this.reloadRouter();
                _context5.next = 10;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 8]]);
      }));

      function refreshTab() {
        return _refreshTab.apply(this, arguments);
      }

      return refreshTab;
    }(),

    /**
     * 刷新所有页签
     * @param {boolean} [force=false] 是否强制刷新，如果强制则忽略页面beforePageLeave
     */
    refreshAll: function () {
      var _refreshAll = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6() {
        var force,
            $alive,
            cache,
            id,
            _args6 = arguments;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                force = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : false;
                $alive = this.$refs.routerAlive;
                cache = $alive.cache;
                _context6.t0 = regenerator_default.a.keys(cache);

              case 4:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 20;
                  break;
                }

                id = _context6.t1.value;

                if (force) {
                  _context6.next = 17;
                  break;
                }

                _context6.prev = 7;
                _context6.next = 10;
                return this.pageLeavePromise(id, 'refresh');

              case 10:
                $alive.clear(id);
                _context6.next = 15;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t2 = _context6["catch"](7);

              case 15:
                _context6.next = 18;
                break;

              case 17:
                $alive.clear(id);

              case 18:
                _context6.next = 4;
                break;

              case 20:
                this.reloadRouter();

              case 21:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 13]]);
      }));

      function refreshAll() {
        return _refreshAll.apply(this, arguments);
      }

      return refreshAll;
    }(),
    // 重载路由组件
    reloadRouter: function () {
      var _reloadRouter = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7() {
        var ignoreTransition,
            _args7 = arguments;
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                ignoreTransition = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;
                this.isRouterAlive = false; // 默认在页面过渡结束后会设置 isRouterAlive 为 true
                // 如果过渡事件失效，则需传入 ignoreTransition 为 true 手动更改

                if (!ignoreTransition) {
                  _context7.next = 6;
                  break;
                }

                _context7.next = 5;
                return this.$nextTick();

              case 5:
                this.isRouterAlive = true;

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function reloadRouter() {
        return _reloadRouter.apply(this, arguments);
      }

      return reloadRouter;
    }(),
    // 页签过渡结束
    onTabTransitionEnd: function onTabTransitionEnd() {
      this.adjust();
    },
    // 页面过渡结束
    onPageTransitionEnd: function onPageTransitionEnd() {
      if (!this.isRouterAlive) this.isRouterAlive = true;
    },
    // 显示页签右键菜单
    showContextmenu: function showContextmenu(id, index, e) {
      // 菜单定位
      var _ref12 = e || emptyObj,
          top = _ref12.clientY,
          left = _ref12.clientX;

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
    // Tab滚动
    tabScroll: function tabScroll(direction) {
      var $tab = this.$el.querySelector('.router-tab-header');
      var $scr = $tab.querySelector('.router-tab-scroll');
      var space = $tab.clientWidth - 110;
      scrollTo($scr, $scr.scrollLeft + (direction === 'left' ? -space : space));
    },
    // 调整Tab滚动显示
    adjust: function adjust() {
      var $tab = this.$el.querySelector('.router-tab-header');
      var $scr = $tab.querySelector('.router-tab-scroll');
      var $nav = $scr.querySelector('.router-tab-nav');
      var $cur = $nav.querySelector('.actived');
      var isScroll = $nav.clientWidth > $scr.clientWidth; // 判断是否需要滚动

      $tab.classList[isScroll ? 'add' : 'remove']('is-scroll');

      if ($cur && isScroll) {
        scrollTo($scr, $cur.offsetLeft + ($cur.clientWidth - $scr.clientWidth) / 2);
      }
    },
    // 修复：当快速频繁切换页签时，旧页面离开过渡效果尚未完成，新页面内容无法正常mount，内容节点为comment类型
    fixCommentPage: function fixCommentPage() {
      if (this.$refs.routerAlive.$el.nodeType === 8) {
        this.reloadRouter(true);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/RouterTab.js?vue&type=script&lang=js&
 /* harmony default export */ var components_RouterTabvue_type_script_lang_js_ = (RouterTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/scss/routerTab.scss?vue&type=style&index=0&lang=scss&
var routerTabvue_type_style_index_0_lang_scss_ = __webpack_require__("e42d");

// EXTERNAL MODULE: ./src/scss/transition.scss?vue&type=style&index=1&lang=scss&
var transitionvue_type_style_index_1_lang_scss_ = __webpack_require__("4ba7");

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/components/RouterTab.vue







/* normalize component */

var component = normalizeComponent(
  components_RouterTabvue_type_script_lang_js_,
  RouterTabvue_type_template_id_74fe07f8_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RouterTab = (component.exports);
// CONCATENATED MODULE: ./src/mixins/routerPage.js
// 路由页面混入
/* harmony default export */ var routerPage = ({
  // 创建前记录缓存
  created: function created() {
    var $route = this.$route,
        $vnode = this.$vnode;
    var $alive = $vnode && $vnode.data.routerAlive;
    if (!$alive) return false; // 标记为路由页面

    this._isRouterPage = true;
    var key = $alive.getAliveId($route); // 更新缓存数据

    var cacheItem = $alive.set(key, {
      route: $route,
      vm: this
    }); // 监听routerTab字段，更新页签信息

    this.$watch('routeTab', function (val, old) {
      cacheItem.tab = typeof val === 'string' ? {
        title: val
      } : val;
      $alive.set(key, cacheItem);
    }, {
      deep: true,
      immediate: true
    });
  },
  // 解决webpack热加载后组件缓存不更新
  activated: function activated() {
    if (!this._isRouterPage) return false;
    var ctorId = this.$vnode.componentOptions.Ctor.cid; // 热加载后Ctor.cid改变

    if (this._ctorId && this._ctorId !== ctorId) {
      this.$destroy();
      this.$routerTab.refreshTab();
    }

    this._ctorId = ctorId;
  }
});
// CONCATENATED MODULE: ./src/index.js

 // 安装

RouterTab.install = function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(RouterTab.name, RouterTab);
  Vue.mixin(routerPage);
}; // 如果浏览器环境且拥有全局Vue，则自动安装组件


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RouterTab);
}

/* harmony default export */ var src = (RouterTab);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=vue-router-tab.common.js.map