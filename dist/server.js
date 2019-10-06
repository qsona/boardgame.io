'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Flatted = (function (Primitive, primitive) {

  /*!
   * ISC License
   *
   * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */

  var Flatted = {

    parse: function parse(text) {
      var input = JSON.parse(text, Primitives).map(primitives);
      var value = input[0];
      return typeof value === 'object' && value ?
              revive(input, new Set, value) : value;
    },

    stringify: function stringify(value) {
      for (var
        firstRun,
        known = new Map,
        input = [],
        output = [],
        i = +set(known, input, value),
        replace = function (key, value) {
          if (firstRun) return (firstRun = !firstRun), value;
          switch (typeof value) {
            case 'object':
              if (value === null) return value;
            case primitive:
              return known.get(value) || set(known, input, value);
          }
          return value;
        };
        i < input.length; i++
      ) {
        firstRun = true;
        output[i] = JSON.stringify(input[i], replace);
      }
      return '[' + output.join(',') + ']';
    }

  };

  return Flatted;

  function revive(input, parsed, output) {
    return Object.keys(output).reduce(
      function (output, key) {
        var value = output[key];
        if (value instanceof Primitive) {
          var tmp = input[value];
          if (typeof tmp === 'object' && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[key] = revive(input, parsed, tmp);
          } else {
            output[key] = tmp;
          }
        }
        return output;
      },
      output
    );
  }

  function set(known, input, value) {
    var index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
  }

  function primitives(value) {
    return value instanceof Primitive ? Primitive(value) : value;
  }

  function Primitives(key, value) {
    return typeof value === primitive ? new Primitive(value) : value;
  }

}(String, 'string'));
const parse = Flatted.parse;
const stringify = Flatted.stringify;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Inlined version of Alea from https://github.com/davidbau/seedrandom.

/*
 * Copyright 2015 David Bau.
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software
 * and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall
 * be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function Alea(seed) {
  var me = this,
      mash = Mash();

  me.next = function () {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  }; // Apply the seeding algorithm from Baagoe.


  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);

  if (me.s0 < 0) {
    me.s0 += 1;
  }

  me.s1 -= mash(seed);

  if (me.s1 < 0) {
    me.s1 += 1;
  }

  me.s2 -= mash(seed);

  if (me.s2 < 0) {
    me.s2 += 1;
  }

  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function mash(data) {
    data = data.toString();

    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }

    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}

function alea(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.quick = prng;

  if (state) {
    if (_typeof(state) == 'object') copy(state, xg);

    prng.state = function () {
      return copy(xg, {});
    };
  }

  return prng;
}

/**
 * Random
 *
 * Calls that require a pseudorandom number generator.
 * Uses a seed from ctx, and also persists the PRNG
 * state in ctx so that moves can stay pure.
 */

var Random =
/*#__PURE__*/
function () {
  /**
   * constructor
   * @param {object} ctx - The ctx object to initialize from.
   */
  function Random(ctx) {
    _classCallCheck(this, Random);

    // If we are on the client, the seed is not present.
    // Just use a temporary seed to execute the move without
    // crashing it. The move state itself is discarded,
    // so the actual value doesn't matter.
    this.state = ctx._random || {
      seed: '0'
    };
  }
  /**
   * Updates ctx with the PRNG state.
   * @param {object} ctx - The ctx object to update.
   */


  _createClass(Random, [{
    key: "update",
    value: function update(state) {
      var ctx = _objectSpread2({}, state.ctx, {
        _random: this.state
      });

      return _objectSpread2({}, state, {
        ctx: ctx
      });
    }
    /**
     * Attaches the Random API to ctx.
     * @param {object} ctx - The ctx object to attach to.
     */

  }, {
    key: "attach",
    value: function attach(ctx) {
      return _objectSpread2({}, ctx, {
        random: this._api()
      });
    }
    /**
     * Generate a random number.
     */

  }, {
    key: "_random",
    value: function _random() {
      var R = this.state;
      var fn;

      if (R.prngstate === undefined) {
        // No call to a random function has been made.
        fn = new alea(R.seed, {
          state: true
        });
      } else {
        fn = new alea('', {
          state: R.prngstate
        });
      }

      var number = fn();
      this.state = _objectSpread2({}, R, {
        prngstate: fn.state()
      });
      return number;
    }
  }, {
    key: "_api",
    value: function _api() {
      var random = this._random.bind(this);

      var SpotValue = {
        D4: 4,
        D6: 6,
        D8: 8,
        D10: 10,
        D12: 12,
        D20: 20
      }; // Generate functions for predefined dice values D4 - D20.

      var predefined = {};

      var _loop = function _loop(key) {
        var spotvalue = SpotValue[key];

        predefined[key] = function (diceCount) {
          if (diceCount === undefined) {
            return Math.floor(random() * spotvalue) + 1;
          } else {
            return _toConsumableArray(new Array(diceCount).keys()).map(function () {
              return Math.floor(random() * spotvalue) + 1;
            });
          }
        };
      };

      for (var key in SpotValue) {
        _loop(key);
      }

      return _objectSpread2({}, predefined, {
        /**
         * Roll a die of specified spot value.
         *
         * @param {number} spotvalue - The die dimension (default: 6).
         * @param {number} diceCount - number of dice to throw.
         *                             if not defined, defaults to 1 and returns the value directly.
         *                             if defined, returns an array containing the random dice values.
         */
        Die: function Die(spotvalue, diceCount) {
          if (spotvalue === undefined) {
            spotvalue = 6;
          }

          if (diceCount === undefined) {
            return Math.floor(random() * spotvalue) + 1;
          } else {
            return _toConsumableArray(new Array(diceCount).keys()).map(function () {
              return Math.floor(random() * spotvalue) + 1;
            });
          }
        },

        /**
         * Generate a random number between 0 and 1.
         */
        Number: function Number() {
          return random();
        },

        /**
         * Shuffle an array.
         *
         * @param {Array} deck - The array to shuffle. Does not mutate
         *                       the input, but returns the shuffled array.
         */
        Shuffle: function Shuffle(deck) {
          var clone = deck.slice(0);
          var srcIndex = deck.length;
          var dstIndex = 0;
          var shuffled = new Array(srcIndex);

          while (srcIndex) {
            var randIndex = srcIndex * random() | 0;
            shuffled[dstIndex++] = clone[randIndex];
            clone[randIndex] = clone[--srcIndex];
          }

          return shuffled;
        }
      });
    }
  }]);

  return Random;
}();
/**
 * Removes the attached Random api from ctx.
 *
 * @param {object} ctx - The ctx object with the Random API attached.
 * @returns {object} A plain ctx object without the Random API.
 */

Random.detach = function (ctx) {
  var random = ctx.random,
      rest = _objectWithoutProperties(ctx, ["random"]); // eslint-disable-line no-unused-vars


  return rest;
};
/**
 * Generates a new seed from the current date / time.
 */


Random.seed = function () {
  return (+new Date()).toString(36).slice(-10);
};

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : defineProperty({}, "immer-nothing", true);

var DRAFTABLE = typeof Symbol !== "undefined" ? Symbol("immer-draftable") : "__$immer_draftable";

var DRAFT_STATE = typeof Symbol !== "undefined" ? Symbol("immer-state") : "__$immer_state";

function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}

function isDraftable(value) {
    if (!value || (typeof value === "undefined" ? "undefined" : _typeof$1(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    if (!proto || proto === Object.prototype) return true;
    return !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE];
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

var ownKeys$1 = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;

function shallowCopy(base) {
    var invokeGetters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (Array.isArray(base)) return base.slice();
    var clone = Object.create(Object.getPrototypeOf(base));
    ownKeys$1(base).forEach(function (key) {
        if (key === DRAFT_STATE) {
            return; // Never copy over draft state.
        }
        var desc = Object.getOwnPropertyDescriptor(base, key);
        if (desc.get) {
            if (!invokeGetters) {
                throw new Error("Immer drafts cannot have computed properties");
            }
            desc.value = desc.get.call(base);
        }
        if (desc.enumerable) {
            clone[key] = desc.value;
        } else {
            Object.defineProperty(clone, key, {
                value: desc.value,
                writable: true,
                configurable: true
            });
        }
    });
    return clone;
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i], value);
        }
    } else {
        ownKeys$1(value).forEach(function (key) {
            return cb(key, value[key], value);
        });
    }
}

function isEnumerable(base, prop) {
    return Object.getOwnPropertyDescriptor(base, prop).enumerable;
}

function has(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

// @ts-check

var descriptors = {};

// For nested produce calls:
var scopes = [];
var currentScope = function currentScope() {
    return scopes[scopes.length - 1];
};

function willFinalize(result, baseDraft, needPatches) {
    var scope = currentScope();
    scope.forEach(function (state) {
        return state.finalizing = true;
    });
    if (result === undefined || result === baseDraft) {
        if (needPatches) markChangesRecursively(baseDraft);
        // This is faster when we don't care about which attributes changed.
        markChangesSweep(scope);
    }
}

function createDraft(base, parent) {
    var isArray = Array.isArray(base);
    var draft = clonePotentialDraft(base);
    each(draft, function (prop) {
        proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
    });

    // See "proxy.js" for property documentation.
    var state = {
        scope: parent ? parent.scope : currentScope(),
        modified: false,
        finalizing: false, // es5 only
        finalized: false,
        assigned: {},
        parent: parent,
        base: base,
        draft: draft,
        copy: null,
        revoke: revoke,
        revoked: false // es5 only
    };

    createHiddenProperty(draft, DRAFT_STATE, state);
    state.scope.push(state);
    return draft;
}

function revoke() {
    this.revoked = true;
}

function source(state) {
    return state.copy || state.base;
}

function _get(state, prop) {
    assertUnrevoked(state);
    var value = source(state)[prop];
    // Drafts are only created for proxyable values that exist in the base state.
    if (!state.finalizing && value === state.base[prop] && isDraftable(value)) {
        prepareCopy(state);
        return state.copy[prop] = createDraft(value, state);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnrevoked(state);
    state.assigned[prop] = true;
    if (!state.modified) {
        if (is(source(state)[prop], value)) return;
        markChanged(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged(state.parent);
    }
}

function prepareCopy(state) {
    if (!state.copy) state.copy = clonePotentialDraft(state.base);
}

function clonePotentialDraft(base) {
    var state = base && base[DRAFT_STATE];
    if (state) {
        state.finalizing = true;
        var draft = shallowCopy(state.draft, true);
        state.finalizing = false;
        return draft;
    }
    return shallowCopy(base);
}

function proxyProperty(draft, prop, enumerable) {
    var desc = descriptors[prop];
    if (desc) {
        desc.enumerable = enumerable;
    } else {
        descriptors[prop] = desc = {
            configurable: true,
            enumerable: enumerable,
            get: function get$$1() {
                return _get(this[DRAFT_STATE], prop);
            },
            set: function set$$1(value) {
                _set(this[DRAFT_STATE], prop, value);
            }
        };
    }
    Object.defineProperty(draft, prop, desc);
}

function assertUnrevoked(state) {
    if (state.revoked === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(source(state)));
}

// This looks expensive, but only proxies are visited, and only objects without known changes are scanned.
function markChangesSweep(scope) {
    // The natural order of drafts in the `scope` array is based on when they
    // were accessed. By processing drafts in reverse natural order, we have a
    // better chance of processing leaf nodes first. When a leaf node is known to
    // have changed, we can avoid any traversal of its ancestor nodes.
    for (var i = scope.length - 1; i >= 0; i--) {
        var state = scope[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged(state);
            } else if (hasObjectChanges(state)) markChanged(state);
        }
    }
}

function markChangesRecursively(object) {
    if (!object || (typeof object === "undefined" ? "undefined" : _typeof$1(object)) !== "object") return;
    var state = object[DRAFT_STATE];
    if (!state) return;
    var base = state.base,
        draft = state.draft,
        assigned = state.assigned;

    if (!Array.isArray(object)) {
        // Look for added keys.
        Object.keys(draft).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (base[key] === undefined && !has(base, key)) {
                assigned[key] = true;
                markChanged(state);
            } else if (!assigned[key]) {
                // Only untouched properties trigger recursion.
                markChangesRecursively(draft[key]);
            }
        });
        // Look for removed keys.
        Object.keys(base).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (draft[key] === undefined && !has(draft, key)) {
                assigned[key] = false;
                markChanged(state);
            }
        });
    } else if (hasArrayChanges(state)) {
        markChanged(state);
        assigned.length = true;
        if (draft.length < base.length) {
            for (var i = draft.length; i < base.length; i++) {
                assigned[i] = false;
            }
        } else {
            for (var _i = base.length; _i < draft.length; _i++) {
                assigned[_i] = true;
            }
        }
        for (var _i2 = 0; _i2 < draft.length; _i2++) {
            // Only untouched indices trigger recursion.
            if (assigned[_i2] === undefined) markChangesRecursively(draft[_i2]);
        }
    }
}

function hasObjectChanges(state) {
    var base = state.base,
        draft = state.draft;

    // Search for added keys. Start at the back, because non-numeric keys
    // are ordered by time of definition on the object.

    var keys = Object.keys(draft);
    for (var i = keys.length - 1; i >= 0; i--) {
        // The `undefined` check is a fast path for pre-existing keys.
        if (base[keys[i]] === undefined && !has(base, keys[i])) {
            return true;
        }
    }

    // Since no keys have been added, we can compare lengths to know if an
    // object has been deleted.
    return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
    var draft = state.draft;

    if (draft.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}



var legacyProxy = Object.freeze({
	scopes: scopes,
	currentScope: currentScope,
	willFinalize: willFinalize,
	createDraft: createDraft
});

// @ts-check

// For nested produce calls:
var scopes$1 = [];
var currentScope$1 = function currentScope() {
    return scopes$1[scopes$1.length - 1];
};

// Do nothing before being finalized.
function willFinalize$1() {}

function createDraft$1(base, parent) {
    var state = {
        // Track which produce call this is associated with.
        scope: parent ? parent.scope : currentScope$1(),
        // True for both shallow and deep changes.
        modified: false,
        // Used during finalization.
        finalized: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned: {},
        // The parent draft state.
        parent: parent,
        // The base state.
        base: base,
        // The base proxy.
        draft: null,
        // Any property proxies.
        drafts: {},
        // The base copy with any updated values.
        copy: null,
        // Called by the `produce` function.
        revoke: null
    };

    var _ref = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps),
        revoke = _ref.revoke,
        proxy = _ref.proxy;

    state.draft = proxy;
    state.revoke = revoke;

    state.scope.push(state);
    return proxy;
}

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source$1(target);
    },
    ownKeys: function ownKeys$$1(target) {
        return Reflect.ownKeys(source$1(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: function defineProperty() {
        throw new Error("Object.defineProperty() cannot be used on an Immer draft"); // prettier-ignore
    },
    getPrototypeOf: function getPrototypeOf(target) {
        return Object.getPrototypeOf(target.base);
    },
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function (state, prop) {
    if (isNaN(parseInt(prop))) {
        throw new Error("Immer only supports deleting array indices"); // prettier-ignore
    }
    return objectTraps.deleteProperty.call(this, state[0], prop);
};
arrayTraps.set = function (state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) {
        throw new Error("Immer only supports setting array indices and the 'length' property"); // prettier-ignore
    }
    return objectTraps.set.call(this, state[0], prop, value);
};

function source$1(state) {
    return state.copy || state.base;
}

function get$1(state, prop) {
    if (prop === DRAFT_STATE) return state;
    var drafts = state.drafts;

    // Check for existing draft in unmodified state.

    if (!state.modified && has(drafts, prop)) {
        return drafts[prop];
    }

    var value = source$1(state)[prop];
    if (state.finalized || !isDraftable(value)) return value;

    // Check for existing draft in modified state.
    if (state.modified) {
        // Assigned values are never drafted. This catches any drafts we created, too.
        if (value !== state.base[prop]) return value;
        // Store drafts on the copy (when one exists).
        drafts = state.copy;
    }

    return drafts[prop] = createDraft$1(value, state);
}

function set$1(state, prop, value) {
    if (!state.modified) {
        // Optimize based on value's truthiness. Truthy values are guaranteed to
        // never be undefined, so we can avoid the `in` operator. Lastly, truthy
        // values may be drafts, but falsy values are never drafts.
        var isUnchanged = value ? is(state.base[prop], value) || value === state.drafts[prop] : is(state.base[prop], value) && prop in state.base;
        if (isUnchanged) return true;
        markChanged$1(state);
    }
    state.assigned[prop] = true;
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (state.base[prop] !== undefined || prop in state.base) {
        state.assigned[prop] = false;
        markChanged$1(state);
    }
    if (state.copy) delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = source$1(state);
    var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (desc) {
        desc.writable = true;
        desc.configurable = !Array.isArray(owner) || prop !== "length";
    }
    return desc;
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = assign(shallowCopy(state.base), state.drafts);
        state.drafts = null;
        if (state.parent) markChanged$1(state.parent);
    }
}

var modernProxy = Object.freeze({
	scopes: scopes$1,
	currentScope: currentScope$1,
	willFinalize: willFinalize$1,
	createDraft: createDraft$1
});

function generatePatches(state, basePath, patches, inversePatches) {
    Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy,
        assigned = state.assigned;

    var minLength = Math.min(base.length, copy.length);

    // Look for replaced indices.
    for (var i = 0; i < minLength; i++) {
        if (assigned[i] && base[i] !== copy[i]) {
            var path = basePath.concat(i);
            patches.push({ op: "replace", path: path, value: copy[i] });
            inversePatches.push({ op: "replace", path: path, value: base[i] });
        }
    }

    // Did the array expand?
    if (minLength < copy.length) {
        for (var _i = minLength; _i < copy.length; _i++) {
            patches.push({
                op: "add",
                path: basePath.concat(_i),
                value: copy[_i]
            });
        }
        inversePatches.push({
            op: "replace",
            path: basePath.concat("length"),
            value: base.length
        });
    }

    // ...or did it shrink?
    else if (minLength < base.length) {
            patches.push({
                op: "replace",
                path: basePath.concat("length"),
                value: copy.length
            });
            for (var _i2 = minLength; _i2 < base.length; _i2++) {
                inversePatches.push({
                    op: "add",
                    path: basePath.concat(_i2),
                    value: base[_i2]
                });
            }
        }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy;

    each(state.assigned, function (key, assignedValue) {
        var origValue = base[key];
        var value = copy[key];
        var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
        if (origValue === value && op === "replace") return;
        var path = basePath.concat(key);
        patches.push(op === "remove" ? { op: op, path: path } : { op: op, path: path, value: value });
        inversePatches.push(op === "add" ? { op: "remove", path: path } : op === "remove" ? { op: "add", path: path, value: origValue } : { op: "replace", path: path, value: origValue });
    });
}

function applyPatches(draft, patches) {
    for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var path = patch.path;

        if (path.length === 0 && patch.op === "replace") {
            draft = patch.value;
        } else {
            var base = draft;
            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {
                base = base[path[_i3]];
                if (!base || (typeof base === "undefined" ? "undefined" : _typeof$1(base)) !== "object") throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); // prettier-ignore
            }
            var key = path[path.length - 1];
            switch (patch.op) {
                case "replace":
                case "add":
                    // TODO: add support is not extensive, it does not support insertion or `-` atm!
                    base[key] = patch.value;
                    break;
                case "remove":
                    if (Array.isArray(base)) {
                        if (key !== base.length - 1) throw new Error("Only the last index of an array can be removed, index: " + key + ", length: " + base.length); // prettier-ignore
                        base.length -= 1;
                    } else {
                        delete base[key];
                    }
                    break;
                default:
                    throw new Error("Unsupported patch operation: " + patch.op);
            }
        }
    }
    return draft;
}

function verifyMinified() {}

var configDefaults = {
    useProxies: typeof Proxy !== "undefined" && typeof Reflect !== "undefined",
    autoFreeze: typeof process !== "undefined" ? process.env.NODE_ENV !== "production" : verifyMinified.name === "verifyMinified",
    onAssign: null,
    onDelete: null,
    onCopy: null
};

var Immer = function () {
    function Immer(config) {
        classCallCheck(this, Immer);

        assign(this, configDefaults, config);
        this.setUseProxies(this.useProxies);
        this.produce = this.produce.bind(this);
    }

    createClass(Immer, [{
        key: "produce",
        value: function produce(base, recipe, patchListener) {
            var _this = this;

            // curried invocation
            if (typeof base === "function" && typeof recipe !== "function") {
                var defaultBase = recipe;
                recipe = base;

                // prettier-ignore
                return function () {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBase;
                    return _this.produce(base, function (draft) {
                        var _recipe;

                        return (_recipe = recipe).call.apply(_recipe, [draft, draft].concat(args));
                    });
                };
            }

            // prettier-ignore
            {
                if (typeof recipe !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
                if (patchListener !== undefined && typeof patchListener !== "function") throw new Error("the third argument of a producer should not be set or a function");
            }

            var result = void 0;
            // Only create proxies for plain objects/arrays.
            if (!isDraftable(base)) {
                result = recipe(base);
                if (result === undefined) return base;
            }
            // The given value must be proxied.
            else {
                    this.scopes.push([]);
                    var baseDraft = this.createDraft(base);
                    try {
                        result = recipe.call(baseDraft, baseDraft);
                        this.willFinalize(result, baseDraft, !!patchListener);

                        // Never generate patches when no listener exists.
                        var patches = patchListener && [],
                            inversePatches = patchListener && [];

                        // Finalize the modified draft...
                        if (result === undefined || result === baseDraft) {
                            result = this.finalize(baseDraft, [], patches, inversePatches);
                        }
                        // ...or use a replacement value.
                        else {
                                // Users must never modify the draft _and_ return something else.
                                if (baseDraft[DRAFT_STATE].modified) throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore

                                // Finalize the replacement in case it contains (or is) a subset of the draft.
                                if (isDraftable(result)) result = this.finalize(result);

                                if (patchListener) {
                                    patches.push({
                                        op: "replace",
                                        path: [],
                                        value: result
                                    });
                                    inversePatches.push({
                                        op: "replace",
                                        path: [],
                                        value: base
                                    });
                                }
                            }
                    } finally {
                        this.currentScope().forEach(function (state) {
                            return state.revoke();
                        });
                        this.scopes.pop();
                    }
                    patchListener && patchListener(patches, inversePatches);
                }
            // Normalize the result.
            return result === NOTHING ? undefined : result;
        }
    }, {
        key: "setAutoFreeze",
        value: function setAutoFreeze(value) {
            this.autoFreeze = value;
        }
    }, {
        key: "setUseProxies",
        value: function setUseProxies(value) {
            this.useProxies = value;
            assign(this, value ? modernProxy : legacyProxy);
        }
    }, {
        key: "applyPatches",
        value: function applyPatches$$1(base, patches) {
            // Mutate the base state when a draft is passed.
            if (isDraft(base)) {
                return applyPatches(base, patches);
            }
            // Otherwise, produce a copy of the base state.
            return this.produce(base, function (draft) {
                return applyPatches(draft, patches);
            });
        }
        /**
         * @internal
         * Finalize a draft, returning either the unmodified base state or a modified
         * copy of the base state.
         */

    }, {
        key: "finalize",
        value: function finalize(draft, path, patches, inversePatches) {
            var _this2 = this;

            var state = draft[DRAFT_STATE];
            if (!state) {
                if (Object.isFrozen(draft)) return draft;
                return this.finalizeTree(draft);
            }
            // Never finalize drafts owned by an outer scope.
            if (state.scope !== this.currentScope()) {
                return draft;
            }
            if (!state.modified) return state.base;
            if (!state.finalized) {
                state.finalized = true;
                this.finalizeTree(state.draft, path, patches, inversePatches);
                if (this.onDelete) {
                    // The `assigned` object is unreliable with ES5 drafts.
                    if (this.useProxies) {
                        var assigned = state.assigned;

                        for (var prop in assigned) {
                            if (!assigned[prop]) this.onDelete(state, prop);
                        }
                    } else {
                        var base = state.base,
                            copy = state.copy;

                        each(base, function (prop) {
                            if (!has(copy, prop)) _this2.onDelete(state, prop);
                        });
                    }
                }
                if (this.onCopy) this.onCopy(state);

                // Nested producers must never auto-freeze their result,
                // because it may contain drafts from parent producers.
                if (this.autoFreeze && this.scopes.length === 1) {
                    Object.freeze(state.copy);
                }

                if (patches) generatePatches(state, path, patches, inversePatches);
            }
            return state.copy;
        }
        /**
         * @internal
         * Finalize all drafts in the given state tree.
         */

    }, {
        key: "finalizeTree",
        value: function finalizeTree(root, path, patches, inversePatches) {
            var _this3 = this;

            var state = root[DRAFT_STATE];
            if (state) {
                if (!this.useProxies) {
                    state.finalizing = true;
                    state.copy = shallowCopy(state.draft, true);
                    state.finalizing = false;
                }
                root = state.copy;
            }

            var onAssign = this.onAssign;

            var finalizeProperty = function finalizeProperty(prop, value, parent) {
                if (value === parent) {
                    throw Error("Immer forbids circular references");
                }

                // The only possible draft (in the scope of a `finalizeTree` call) is the `root` object.
                var inDraft = !!state && parent === root;

                if (isDraft(value)) {
                    value =
                    // Patches are never generated for assigned properties.
                    patches && inDraft && !state.assigned[prop] ? _this3.finalize(value, path.concat(prop), patches, inversePatches) // prettier-ignore
                    : _this3.finalize(value);

                    // Preserve non-enumerable properties.
                    if (Array.isArray(parent) || isEnumerable(parent, prop)) {
                        parent[prop] = value;
                    } else {
                        Object.defineProperty(parent, prop, { value: value });
                    }

                    // Unchanged drafts are never passed to the `onAssign` hook.
                    if (inDraft && value === state.base[prop]) return;
                }
                // Unchanged draft properties are ignored.
                else if (inDraft && is(value, state.base[prop])) {
                        return;
                    }
                    // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
                    else if (isDraftable(value) && !Object.isFrozen(value)) {
                            each(value, finalizeProperty);
                        }

                if (inDraft && onAssign) {
                    onAssign(state, prop, value);
                }
            };

            each(root, finalizeProperty);
            return root;
        }
    }]);
    return Immer;
}();

var immer = new Immer();

/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */
var produce = immer.produce;
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */
var setAutoFreeze = immer.setAutoFreeze.bind(immer);

/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */
var setUseProxies = immer.setUseProxies.bind(immer);

/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
var applyPatches$1 = immer.applyPatches.bind(immer);

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * Plugin that allows using Immer to make immutable changes
 * to G by just mutating it.
 */

var PluginImmer = {
  fnWrap: function fnWrap(move) {
    return produce(move);
  }
};

/**
 * List of plugins that are always added.
 */

var DEFAULT_PLUGINS = [PluginImmer];
/**
 * Applies the provided plugins to ctx before processing a move / event.
 *
 * @param {object} ctx - The ctx object.
 * @param {object} plugins - The list of plugins.
 */

var CtxPreMove = function CtxPreMove(ctx, plugins) {
  [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
    return plugin.ctx !== undefined;
  }).filter(function (plugin) {
    return plugin.ctx.preMove !== undefined;
  }).forEach(function (plugin) {
    ctx = plugin.ctx.preMove(ctx, plugins);
  });
  return ctx;
};
/**
 * Applies the provided plugins to G before processing a move / event.
 *
 * @param {object} G - The G object.
 * @param {object} plugins - The list of plugins.
 */


var GPreMove = function GPreMove(G, plugins) {
  [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
    return plugin.G !== undefined;
  }).filter(function (plugin) {
    return plugin.G.preMove !== undefined;
  }).forEach(function (plugin) {
    G = plugin.G.preMove(G, plugins);
  });
  return G;
};
/**
 * Postprocesses G after a move / event.
 *
 * @param {object} G - The G object.
 * @param {object} plugins - The list of plugins.
 */


var GPostMove = function GPostMove(G, plugins) {
  [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
    return plugin.G !== undefined;
  }).filter(function (plugin) {
    return plugin.G.postMove !== undefined;
  }).forEach(function (plugin) {
    G = plugin.G.postMove(G, plugins);
  });
  return G;
};
/**
 * Applies the provided plugins to the given move / flow function.
 *
 * @param {function} fn - The move function or trigger to apply the plugins to.
 * @param {object} plugins - The list of plugins.
 */


var FnWrap = function FnWrap(fn, plugins) {
  var reducer = function reducer(acc, _ref) {
    var fnWrap = _ref.fnWrap;
    return fnWrap(acc, plugins);
  };

  var g = [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
    return plugin.fnWrap !== undefined;
  }).reduce(reducer, fn);
  return function (G, ctx) {
    G = GPreMove(G, plugins);
    ctx = CtxPreMove(ctx, plugins);

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    G = g.apply(void 0, [G, ctx].concat(args));
    G = GPostMove(G, plugins);
    return G;
  };
};
var G = {
  /**
   * Applies the provided plugins to G during game setup.
   *
   * @param {object} G - The G object.
   * @param {object} ctx - The ctx object.
   * @param {object} game - The game object.
   */
  setup: function setup(G, ctx, game) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.G !== undefined;
    }).filter(function (plugin) {
      return plugin.G.setup !== undefined;
    }).forEach(function (plugin) {
      G = plugin.G.setup(G, ctx, game);
    });
    return G;
  },

  /**
   * Applies the provided plugins to G during the beginning of the phase.
   *
   * @param {object} G - The G object.
   * @param {object} ctx - The ctx object.
   * @param {object} plugins - The list of plugins.
   */
  onPhaseBegin: function onPhaseBegin(G, ctx, plugins) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
      return plugin.G !== undefined;
    }).filter(function (plugin) {
      return plugin.G.onPhaseBegin !== undefined;
    }).forEach(function (plugin) {
      G = plugin.G.onPhaseBegin(G, ctx, plugins);
    });
    return G;
  }
};
var ctx = {
  /**
   * Applies the provided plugins to ctx during game setup.
   *
   * @param {object} ctx - The ctx object.
   * @param {object} game - The game object.
   */
  setup: function setup(ctx, game) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(game.plugins)).filter(function (plugin) {
      return plugin.ctx !== undefined;
    }).filter(function (plugin) {
      return plugin.ctx.setup !== undefined;
    }).forEach(function (plugin) {
      ctx = plugin.ctx.setup(ctx, game);
    });
    return ctx;
  },

  /**
   * Applies the provided plugins to ctx during the beginning of the phase.
   *
   * @param {object} ctx - The ctx object.
   * @param {object} plugins - The list of plugins.
   */
  onPhaseBegin: function onPhaseBegin(ctx, plugins) {
    [].concat(DEFAULT_PLUGINS, _toConsumableArray(plugins)).filter(function (plugin) {
      return plugin.ctx !== undefined;
    }).filter(function (plugin) {
      return plugin.ctx.onPhaseBegin !== undefined;
    }).forEach(function (plugin) {
      ctx = plugin.ctx.onPhaseBegin(ctx, plugins);
    });
    return ctx;
  }
};

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var DEV = process.env.NODE_ENV === 'development' || process.env.NODE_ENV == 'test';
var logfn = DEV ? console.log : function () {};
var errorfn = DEV ? console.error : function () {};
function info(msg) {
  logfn("INFO: ".concat(msg));
}
function error(error) {
  errorfn('ERROR:', error);
}

/**
 * Event to change the active players (and their stages) in the current turn.
 */

function SetActivePlayersEvent(state, playerID, arg) {
  return _objectSpread2({}, state, {
    ctx: SetActivePlayers(state.ctx, playerID, arg)
  });
}
function SetActivePlayers(ctx, playerID, arg) {
  var _prevActivePlayers = ctx._prevActivePlayers;

  var _nextActivePlayers = arg.next || null;

  if (arg.revert) {
    _prevActivePlayers = _prevActivePlayers.concat({
      activePlayers: ctx.activePlayers,
      _activePlayersMoveLimit: ctx._activePlayersMoveLimit,
      _activePlayersNumMoves: ctx._activePlayersNumMoves
    });
  } else {
    _prevActivePlayers = [];
  }

  var activePlayers = {};
  var _activePlayersMoveLimit = {};

  if (Array.isArray(arg)) {
    var value = {};
    arg.forEach(function (v) {
      return value[v] = Stage.NULL;
    });
    activePlayers = value;
  }

  if (arg.value) {
    for (var id in arg.value) {
      ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, id, arg.value[id]);
    }
  }

  if (arg.player !== undefined) {
    ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, playerID, arg.player);
  }

  if (arg.others !== undefined) {
    for (var i = 0; i < ctx.playOrder.length; i++) {
      var _id = ctx.playOrder[i];

      if (_id !== playerID) {
        ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, _id, arg.others);
      }
    }
  }

  if (arg.all !== undefined) {
    for (var _i = 0; _i < ctx.playOrder.length; _i++) {
      var _id2 = ctx.playOrder[_i];
      ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, _id2, arg.all);
    }
  }

  if (arg.moveLimit) {
    for (var _id3 in activePlayers) {
      if (_activePlayersMoveLimit[_id3] === undefined) {
        _activePlayersMoveLimit[_id3] = arg.moveLimit;
      }
    }
  }

  if (Object.keys(activePlayers).length == 0) {
    activePlayers = null;
  }

  if (Object.keys(_activePlayersMoveLimit).length == 0) {
    _activePlayersMoveLimit = null;
  }

  var _activePlayersNumMoves = {};

  for (var _id4 in activePlayers) {
    _activePlayersNumMoves[_id4] = 0;
  }

  return _objectSpread2({}, ctx, {
    activePlayers: activePlayers,
    _activePlayersMoveLimit: _activePlayersMoveLimit,
    _activePlayersNumMoves: _activePlayersNumMoves,
    _prevActivePlayers: _prevActivePlayers,
    _nextActivePlayers: _nextActivePlayers
  });
}
/**
 * Update activePlayers, setting it to previous, next or null values
 * when it becomes empty.
 * @param {Object} ctx
 */

function UpdateActivePlayersOnceEmpty(ctx) {
  var _ctx = ctx,
      activePlayers = _ctx.activePlayers,
      _activePlayersMoveLimit = _ctx._activePlayersMoveLimit,
      _activePlayersNumMoves = _ctx._activePlayersNumMoves,
      _prevActivePlayers = _ctx._prevActivePlayers;

  if (activePlayers && Object.keys(activePlayers).length == 0) {
    if (ctx._nextActivePlayers) {
      ctx = SetActivePlayers(ctx, ctx.currentPlayer, ctx._nextActivePlayers);
      var _ctx2 = ctx;
      activePlayers = _ctx2.activePlayers;
      _activePlayersMoveLimit = _ctx2._activePlayersMoveLimit;
      _activePlayersNumMoves = _ctx2._activePlayersNumMoves;
      _prevActivePlayers = _ctx2._prevActivePlayers;
    } else if (_prevActivePlayers.length > 0) {
      var lastIndex = _prevActivePlayers.length - 1;
      var _prevActivePlayers$la = _prevActivePlayers[lastIndex];
      activePlayers = _prevActivePlayers$la.activePlayers;
      _activePlayersMoveLimit = _prevActivePlayers$la._activePlayersMoveLimit;
      _activePlayersNumMoves = _prevActivePlayers$la._activePlayersNumMoves;
      _prevActivePlayers = _prevActivePlayers.slice(0, lastIndex);
    } else {
      activePlayers = null;
      _activePlayersMoveLimit = null;
    }
  }

  return _objectSpread2({}, ctx, {
    activePlayers: activePlayers,
    _activePlayersMoveLimit: _activePlayersMoveLimit,
    _activePlayersNumMoves: _activePlayersNumMoves,
    _prevActivePlayers: _prevActivePlayers
  });
}
/**
 * Apply an active player argument to the given player ID
 * @param {Object} activePlayers
 * @param {Object} _activePlayersMoveLimit
 * @param {String} playerID The player to apply the parameter to
 * @param {(String|Object)} arg An active player argument
 */

function ApplyActivePlayerArgument(activePlayers, _activePlayersMoveLimit, playerID, arg) {
  if (_typeof(arg) !== 'object' || arg === Stage.NULL) {
    arg = {
      stage: arg
    };
  }

  if (arg.stage !== undefined) {
    activePlayers[playerID] = arg.stage;
    if (arg.moveLimit) _activePlayersMoveLimit[playerID] = arg.moveLimit;
  }
}
/**
 * Converts a playOrderPos index into its value in playOrder.
 * @param {Array} playOrder - An array of player ID's.
 * @param {number} playOrderPos - An index into the above.
 */


function getCurrentPlayer(playOrder, playOrderPos) {
  return playOrder[playOrderPos] + '';
}
/**
 * Called at the start of a turn to initialize turn order state.
 *
 * TODO: This is called inside StartTurn, which is called from
 * both UpdateTurn and StartPhase (so it's called at the beginning
 * of a new phase as well as between turns). We should probably
 * split it into two.
 *
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 */


function InitTurnOrderState(G, ctx, turn) {
  var order = turn.order;

  var playOrder = _toConsumableArray(new Array(ctx.numPlayers)).map(function (d, i) {
    return i + '';
  });

  if (order.playOrder !== undefined) {
    playOrder = order.playOrder(G, ctx);
  }

  var playOrderPos = order.first(G, ctx);
  var currentPlayer = getCurrentPlayer(playOrder, playOrderPos);
  ctx = _objectSpread2({}, ctx, {
    currentPlayer: currentPlayer,
    playOrderPos: playOrderPos,
    playOrder: playOrder
  });
  ctx = SetActivePlayers(ctx, currentPlayer, turn.activePlayers || {});
  return ctx;
}
/**
 * Called at the end of each turn to update the turn order state.
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 * @param {string} endTurnArg - An optional argument to endTurn that
                                may specify the next player.
 */

function UpdateTurnOrderState(G, ctx, turn, endTurnArg) {
  var order = turn.order;
  var playOrderPos = ctx.playOrderPos;
  var currentPlayer = ctx.currentPlayer;
  var endPhase = false;

  if (endTurnArg && endTurnArg !== true) {
    if (ctx.playOrder.includes(endTurnArg.next)) {
      playOrderPos = ctx.playOrder.indexOf(endTurnArg.next);
      currentPlayer = endTurnArg.next;
    } else {
      error("invalid argument to endTurn: ".concat(endTurnArg));
    }
  } else {
    var t = order.next(G, ctx);

    if (t === undefined) {
      endPhase = true;
    } else {
      playOrderPos = t;
      currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
    }
  }

  ctx = _objectSpread2({}, ctx, {
    playOrderPos: playOrderPos,
    currentPlayer: currentPlayer
  });
  return {
    endPhase: endPhase,
    ctx: ctx
  };
}
/**
 * Set of different turn orders possible in a phase.
 * These are meant to be passed to the `turn` setting
 * in the flow objects.
 *
 * Each object defines the first player when the phase / game
 * begins, and also a function `next` to determine who the
 * next player is when the turn ends.
 *
 * The phase ends if next() returns undefined.
 */

var TurnOrder = {
  /**
   * DEFAULT
   *
   * The default round-robin turn order.
   */
  DEFAULT: {
    first: function first(G, ctx) {
      return ctx.playOrderPos;
    },
    next: function next(G, ctx) {
      return (ctx.playOrderPos + 1) % ctx.playOrder.length;
    }
  },

  /**
   * RESET
   *
   * Similar to DEFAULT, but starts from 0 each time.
   */
  RESET: {
    first: function first() {
      return 0;
    },
    next: function next(G, ctx) {
      return (ctx.playOrderPos + 1) % ctx.playOrder.length;
    }
  },

  /**
   * ONCE
   *
   * Another round-robin turn order, but goes around just once.
   * The phase ends after all players have played.
   */
  ONCE: {
    first: function first() {
      return 0;
    },
    next: function next(G, ctx) {
      if (ctx.playOrderPos < ctx.playOrder.length - 1) {
        return ctx.playOrderPos + 1;
      }
    }
  },

  /**
   * CUSTOM
   *
   * Identical to DEFAULT, but also sets playOrder at the
   * beginning of the phase.
   *
   * @param {Array} playOrder - The play order.
   */
  CUSTOM: function CUSTOM(_playOrder) {
    return {
      playOrder: function playOrder() {
        return _playOrder;
      },
      first: function first() {
        return 0;
      },
      next: function next(G, ctx) {
        return (ctx.playOrderPos + 1) % ctx.playOrder.length;
      }
    };
  },

  /**
   * CUSTOM_FROM
   *
   * Identical to DEFAULT, but also sets playOrder at the
   * beginning of the phase to a value specified by a field
   * in G.
   *
   * @param {string} playOrderField - Field in G.
   */
  CUSTOM_FROM: function CUSTOM_FROM(playOrderField) {
    return {
      playOrder: function playOrder(G) {
        return G[playOrderField];
      },
      first: function first() {
        return 0;
      },
      next: function next(G, ctx) {
        return (ctx.playOrderPos + 1) % ctx.playOrder.length;
      }
    };
  },

  /**
   * SKIP
   *
   * Round-robin, but skips over any players that have passed.
   * Meant to be used with Pass above.
   */
  SKIP: {
    first: function first(G, ctx) {
      return ctx.playOrderPos;
    },
    next: function next(G, ctx) {
      if (G.allPassed) return;
      var playOrderPos = ctx.playOrderPos;

      for (var i = 0; i < ctx.playOrder.length; i++) {
        playOrderPos = (playOrderPos + 1) % ctx.playOrder.length;

        if (!G.passOrder.includes(ctx.playOrder[playOrderPos] + '')) {
          return playOrderPos;
        }
      }
    }
  }
};
var Stage = {
  NULL: null
};

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var MAKE_MOVE = 'MAKE_MOVE';
var GAME_EVENT = 'GAME_EVENT';
var REDO = 'REDO';
var RESET = 'RESET';
var SYNC = 'SYNC';
var UNDO = 'UNDO';
var UPDATE = 'UPDATE';

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * Generate a game event to be dispatched to the flow reducer.
 *
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */

var gameEvent = function gameEvent(type, args, playerID, credentials) {
  return {
    type: GAME_EVENT,
    payload: {
      type: type,
      args: args,
      playerID: playerID,
      credentials: credentials
    }
  };
};
/**
 * Generate an automatic game event that is a side-effect of a move.
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */

var automaticGameEvent = function automaticGameEvent(type, args, playerID, credentials) {
  return {
    type: GAME_EVENT,
    payload: {
      type: type,
      args: args,
      playerID: playerID,
      credentials: credentials
    },
    automatic: true
  };
};

/**
 * Events
 */

var Events =
/*#__PURE__*/
function () {
  function Events(flow, playerID) {
    _classCallCheck(this, Events);

    this.flow = flow;
    this.playerID = playerID;
    this.dispatch = [];
  }
  /**
   * Attaches the Events API to ctx.
   * @param {object} ctx - The ctx object to attach to.
   */


  _createClass(Events, [{
    key: "attach",
    value: function attach(ctx) {
      var _this = this;

      var events = {};
      var phase = ctx.phase,
          turn = ctx.turn;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var key = _step.value;

          events[key] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.dispatch.push({
              key: key,
              args: args,
              phase: phase,
              turn: turn
            });
          };
        };

        for (var _iterator = this.flow.eventNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _objectSpread2({}, ctx, {
        events: events
      });
    }
    /**
     * Updates ctx with the triggered events.
     * @param {object} state - The state object { G, ctx }.
     */

  }, {
    key: "update",
    value: function update(state) {
      var length = this.dispatch.length;

      for (var i = 0; i < length; i++) {
        var item = this.dispatch[i]; // If the turn already ended some other way,
        // don't try to end the turn again.

        if (item.key === 'endTurn' && item.turn !== state.ctx.turn) {
          continue;
        } // If the phase already ended some other way,
        // don't try to end the phase again.


        if ((item.key === 'endPhase' || item.key === 'setPhase') && item.phase !== state.ctx.phase) {
          continue;
        }

        var action = automaticGameEvent(item.key, item.args, this.playerID);
        state = _objectSpread2({}, state, {}, this.flow.processEvent(state, action));
      }

      return state;
    }
  }]);

  return Events;
}();
/**
 * Detaches the Events API from ctx.
 * @param {object} ctx - The ctx object to strip.
 */

Events.detach = function (ctx) {
  var events = ctx.events,
      rest = _objectWithoutProperties(ctx, ["events"]); // eslint-disable-line no-unused-vars


  return rest;
};

/**
 * Context API to allow writing custom logs in games.
 */

var GameLoggerCtxAPI =
/*#__PURE__*/
function () {
  function GameLoggerCtxAPI() {
    _classCallCheck(this, GameLoggerCtxAPI);

    this._payload = undefined;
  }

  _createClass(GameLoggerCtxAPI, [{
    key: "_api",
    value: function _api() {
      var _this = this;

      return {
        setPayload: function setPayload(payload) {
          _this._payload = payload;
        }
      };
    }
  }, {
    key: "attach",
    value: function attach(ctx) {
      return _objectSpread2({}, ctx, {
        log: this._api()
      });
    }
  }, {
    key: "update",
    value: function update(state) {
      if (this._payload === undefined) {
        return state;
      } // attach the payload to the last log event


      var deltalog = state.deltalog;
      deltalog[deltalog.length - 1] = _objectSpread2({}, deltalog[deltalog.length - 1], {
        payload: this._payload
      });
      this._payload = undefined;
      return _objectSpread2({}, state, {
        deltalog: deltalog
      });
    }
  }], [{
    key: "detach",
    value: function detach(ctx) {
      var log = ctx.log,
          ctxWithoutLog = _objectWithoutProperties(ctx, ["log"]); // eslint-disable-line no-unused-vars


      return ctxWithoutLog;
    }
  }]);

  return GameLoggerCtxAPI;
}();
/**
 * This class is used to attach/detach various utility objects
 * onto a ctx, without having to manually attach/detach them
 * all separately.
 */

var ContextEnhancer =
/*#__PURE__*/
function () {
  function ContextEnhancer(ctx, game, player) {
    _classCallCheck(this, ContextEnhancer);

    this.random = new Random(ctx);
    this.events = new Events(game.flow, player);
    this.log = new GameLoggerCtxAPI();
  }

  _createClass(ContextEnhancer, [{
    key: "attachToContext",
    value: function attachToContext(ctx) {
      var ctxWithAPI = this.random.attach(ctx);
      ctxWithAPI = this.events.attach(ctxWithAPI);
      ctxWithAPI = this.log.attach(ctxWithAPI);
      return ctxWithAPI;
    }
  }, {
    key: "_update",
    value: function _update(state, updateEvents) {
      var newState = updateEvents ? this.events.update(state) : state;
      newState = this.random.update(newState);
      newState = this.log.update(newState);
      return newState;
    }
  }, {
    key: "updateAndDetach",
    value: function updateAndDetach(state, updateEvents) {
      var newState = this._update(state, updateEvents);

      newState.ctx = ContextEnhancer.detachAllFromContext(newState.ctx);
      return newState;
    }
  }], [{
    key: "detachAllFromContext",
    value: function detachAllFromContext(ctx) {
      var ctxWithoutAPI = Random.detach(ctx);
      ctxWithoutAPI = Events.detach(ctxWithoutAPI);
      ctxWithoutAPI = GameLoggerCtxAPI.detach(ctxWithoutAPI);
      return ctxWithoutAPI;
    }
  }]);

  return ContextEnhancer;
}();

/**
 * Flow
 *
 * Creates a reducer that updates ctx (analogous to how moves update G).
 *
 * @param {...object} endIf - The game automatically ends if this function
 *                            returns anything (checked after each move).
 *                            The return value is available at ctx.gameover.
 *                            (G, ctx) => {}
 *
 * @param {...object} turn - Customize the turn structure (see turn-order.js).
 *
 * {
 *   // The turn order.
 *   order: TurnOrder.DEFAULT,
 *
 *   // Code to run at the beginning of the turn.
 *   onBegin: (G, ctx) => G,
 *
 *   // Code to run at the end of the turn.
 *   onEnd: (G, ctx) => G,
 *
 *   // The turn automatically ends if this returns a truthy
 *   // value (checked after each move).
 *   // If the return value is { next: playerID },
 *   // then that player is the next player
 *   // instead of following the turn order.
 *   endIf: (G, ctx) => boolean|object,
 *
 *   // End the turn automatically after a certain number
 *   // of moves.
 *   moveLimit: 1,
 *
 *   // Code to run at the end of a move.
 *   onMove: (G, ctx, { type: 'moveName', args: [] }) => G
 * }
 *
 * @param {...object} events - Section that allows enabling / disabling events.
 *
 * {
 *   endTurn - Set to false to disable the `endTurn` event.
 *
 *   endPhase - Set to false to disable the `endPhase` event.
 *
 *   endGame - Set to true to enable the `endGame` event.
 * }
 *
 *
 * @param {...object} phases - A map of phases in the game.
 *
 * {
 *   // Any setup code to run before the phase begins.
 *   onBegin: (G, ctx) => G,
 *
 *   // Any cleanup code to run after the phase ends.
 *   onEnd: (G, ctx) => G,
 *
 *   // The phase ends if this function returns a truthy value.
 *   // If the return value is of the form { next: 'phase name' }
 *   // then that will be chosen as the next phase.
 *   endIf: (G, ctx) => boolean|object,
 *
 *   // A phase-specific set of moves that overrides the global.
 *   moves: { ... },
 *
 *   // A phase-specific turn structure that overrides the global.
 *   turn: { ... },
 *
 *   // Set to true to begin the game in this phase. Only one phase
 *   // can have this set to true.
 *   start: false,
 * }
 */

function Flow(_ref) {
  var moves = _ref.moves,
      phases = _ref.phases,
      endIf = _ref.endIf,
      turn = _ref.turn,
      events = _ref.events,
      plugins = _ref.plugins;

  // Attach defaults.
  if (moves === undefined) {
    moves = {};
  }

  if (events === undefined) {
    events = {};
  }

  if (plugins === undefined) {
    plugins = [];
  }

  if (phases === undefined) {
    phases = {};
  }

  if (!endIf) endIf = function endIf() {
    return undefined;
  };
  if (!turn) turn = {};

  var phaseMap = _objectSpread2({}, phases);

  if ('' in phaseMap) {
    error('cannot specify phase with empty name');
  }

  phaseMap[''] = {};
  var moveMap = {};
  var moveNames = new Set();
  var startingPhase = null;
  Object.keys(moves).forEach(function (name) {
    return moveNames.add(name);
  });

  for (var phase in phaseMap) {
    var conf = phaseMap[phase];

    if (conf.start === true) {
      startingPhase = phase;
    }

    if (conf.moves !== undefined) {
      for (var _i = 0, _Object$keys = Object.keys(conf.moves); _i < _Object$keys.length; _i++) {
        var move = _Object$keys[_i];
        moveMap[phase + '.' + move] = conf.moves[move];
        moveNames.add(move);
      }
    }

    if (conf.endIf === undefined) {
      conf.endIf = function () {
        return undefined;
      };
    }

    if (conf.onBegin === undefined) {
      conf.onBegin = function (G) {
        return G;
      };
    }

    conf.onBegin = FnWrap(conf.onBegin, plugins);

    if (conf.onEnd === undefined) {
      conf.onEnd = function (G) {
        return G;
      };
    }

    conf.onEnd = FnWrap(conf.onEnd, plugins);

    if (conf.turn === undefined) {
      conf.turn = turn;
    }

    if (conf.turn.order === undefined) {
      conf.turn.order = TurnOrder.DEFAULT;
    }

    if (conf.turn.onBegin === undefined) {
      conf.turn.onBegin = function (G) {
        return G;
      };
    }

    if (conf.turn.onEnd === undefined) {
      conf.turn.onEnd = function (G) {
        return G;
      };
    }

    if (conf.turn.endIf === undefined) {
      conf.turn.endIf = function () {
        return false;
      };
    }

    if (conf.turn.onMove === undefined) {
      conf.turn.onMove = function (G) {
        return G;
      };
    }

    if (conf.turn.stages === undefined) {
      conf.turn.stages = {};
    }

    for (var stage in conf.turn.stages) {
      var stageConfig = conf.turn.stages[stage];

      var _moves = stageConfig.moves || {};

      for (var _i2 = 0, _Object$keys2 = Object.keys(_moves); _i2 < _Object$keys2.length; _i2++) {
        var _move = _Object$keys2[_i2];
        var key = phase + '.' + stage + '.' + _move;
        moveMap[key] = _moves[_move];
        moveNames.add(_move);
      }
    }

    conf.turn.onMove = FnWrap(conf.turn.onMove, plugins);
    conf.turn.onBegin = FnWrap(conf.turn.onBegin, plugins);
    conf.turn.onEnd = FnWrap(conf.turn.onEnd, plugins);
  }

  function GetPhase(ctx) {
    return ctx.phase ? phaseMap[ctx.phase] : phaseMap[''];
  }

  function OnMove(s) {
    return s;
  }

  function Process(state, events) {
    var phasesEnded = new Set();
    var turnsEnded = new Set();

    for (var i = 0; i < events.length; i++) {
      var _events$i = events[i],
          fn = _events$i.fn,
          arg = _events$i.arg,
          rest = _objectWithoutProperties(_events$i, ["fn", "arg"]); // Detect a loop of EndPhase calls.
      // This could potentially even be an infinite loop
      // if the endIf condition of each phase blindly
      // returns true. The moment we detect a single
      // loop, we just bail out of all phases.


      if (fn === EndPhase) {
        turnsEnded.clear();
        var _phase = state.ctx.phase;

        if (phasesEnded.has(_phase)) {
          var ctx = _objectSpread2({}, state.ctx, {
            phase: null
          });

          return _objectSpread2({}, state, {
            ctx: ctx
          });
        }

        phasesEnded.add(_phase);
      } // Process event.


      var next = [];
      state = fn(state, _objectSpread2({}, rest, {
        arg: arg,
        next: next
      }));

      if (fn === EndGame) {
        break;
      } // Check if we should end the game.


      var shouldEndGame = ShouldEndGame(state);

      if (shouldEndGame) {
        events.push({
          fn: EndGame,
          arg: shouldEndGame,
          turn: state.ctx.turn,
          phase: state.ctx.phase,
          automatic: true
        });
        continue;
      } // Check if we should end the phase.


      var shouldEndPhase = ShouldEndPhase(state);

      if (shouldEndPhase) {
        events.push({
          fn: EndPhase,
          arg: shouldEndPhase,
          turn: state.ctx.turn,
          phase: state.ctx.phase,
          automatic: true
        });
        continue;
      } // Check if we should end the turn.


      if (fn === OnMove) {
        var shouldEndTurn = ShouldEndTurn(state);

        if (shouldEndTurn) {
          events.push({
            fn: EndTurn,
            arg: shouldEndTurn,
            turn: state.ctx.turn,
            phase: state.ctx.phase,
            automatic: true
          });
          continue;
        }
      }

      events.push.apply(events, next);
    }

    return state;
  } ///////////
  // Start //
  ///////////


  function StartGame(state, _ref2) {
    var next = _ref2.next;
    next.push({
      fn: StartPhase
    });
    return state;
  }

  function StartPhase(state, _ref3) {
    var next = _ref3.next;
    var G$1 = state.G,
        ctx$1 = state.ctx;
    var conf = GetPhase(ctx$1); // Allow plugins to modify G and ctx at the beginning of a phase.

    G$1 = G.onPhaseBegin(G$1, ctx$1, plugins);
    ctx$1 = ctx.onPhaseBegin(ctx$1, plugins); // Run any phase setup code provided by the user.

    G$1 = conf.onBegin(G$1, ctx$1);
    next.push({
      fn: StartTurn
    });
    return _objectSpread2({}, state, {
      G: G$1,
      ctx: ctx$1
    });
  }

  function StartTurn(state, _ref4) {
    var currentPlayer = _ref4.currentPlayer;
    var G = state.G,
        ctx = state.ctx;
    var conf = GetPhase(ctx); // Initialize the turn order state.

    if (currentPlayer) {
      ctx = _objectSpread2({}, ctx, {
        currentPlayer: currentPlayer
      });

      if (conf.turn.activePlayers) {
        ctx = SetActivePlayers(ctx, ctx.currentPlayer, conf.turn.activePlayers);
      }
    } else {
      // This is only called at the beginning of the phase
      // when there is no currentPlayer yet.
      ctx = InitTurnOrderState(G, ctx, conf.turn);
    }

    G = conf.turn.onBegin(G, ctx);
    var turn = ctx.turn + 1;
    ctx = _objectSpread2({}, ctx, {
      turn: turn,
      numMoves: 0,
      _prevActivePlayers: []
    });
    var plainCtx = ContextEnhancer.detachAllFromContext(ctx);
    var _undo = [{
      G: G,
      ctx: plainCtx
    }];
    return _objectSpread2({}, state, {
      G: G,
      ctx: ctx,
      _undo: _undo,
      _redo: []
    });
  } ////////////
  // Update //
  ////////////


  function UpdatePhase(state, _ref5) {
    var arg = _ref5.arg,
        next = _ref5.next,
        phase = _ref5.phase;
    var conf = GetPhase({
      phase: phase
    });
    var _state = state,
        ctx = _state.ctx;

    if (arg && arg.next) {
      if (arg.next in phaseMap) {
        ctx = _objectSpread2({}, ctx, {
          phase: arg.next
        });
      } else {
        error('invalid phase: ' + arg.next);
        return state;
      }
    } else if (conf.next !== undefined) {
      ctx = _objectSpread2({}, ctx, {
        phase: conf.next
      });
    } else {
      ctx = _objectSpread2({}, ctx, {
        phase: null
      });
    }

    state = _objectSpread2({}, state, {
      ctx: ctx
    }); // Start the new phase.

    next.push({
      fn: StartPhase
    });
    return state;
  }

  function UpdateTurn(state, _ref6) {
    var arg = _ref6.arg,
        currentPlayer = _ref6.currentPlayer,
        next = _ref6.next;
    var _state2 = state,
        G = _state2.G,
        ctx = _state2.ctx;
    var conf = GetPhase(ctx); // Update turn order state.

    var _UpdateTurnOrderState = UpdateTurnOrderState(G, _objectSpread2({}, ctx, {
      currentPlayer: currentPlayer
    }), conf.turn, arg),
        endPhase = _UpdateTurnOrderState.endPhase,
        newCtx = _UpdateTurnOrderState.ctx;

    ctx = newCtx;
    state = _objectSpread2({}, state, {
      G: G,
      ctx: ctx
    });

    if (endPhase) {
      next.push({
        fn: EndPhase,
        turn: ctx.turn,
        phase: ctx.phase
      });
    } else {
      next.push({
        fn: StartTurn,
        currentPlayer: ctx.currentPlayer
      });
    }

    return state;
  }

  function UpdateStage(state, _ref7) {
    var arg = _ref7.arg,
        playerID = _ref7.playerID;

    if (typeof arg === 'string') {
      arg = {
        stage: arg
      };
    }

    var ctx = state.ctx;
    var _ctx = ctx,
        activePlayers = _ctx.activePlayers,
        _activePlayersMoveLimit = _ctx._activePlayersMoveLimit,
        _activePlayersNumMoves = _ctx._activePlayersNumMoves;

    if (arg.stage) {
      if (activePlayers === null) {
        activePlayers = {};
      }

      activePlayers[playerID] = arg.stage;
      _activePlayersNumMoves[playerID] = 0;

      if (arg.moveLimit) {
        if (_activePlayersMoveLimit === null) {
          _activePlayersMoveLimit = {};
        }

        _activePlayersMoveLimit[playerID] = arg.moveLimit;
      }
    }

    ctx = _objectSpread2({}, ctx, {
      activePlayers: activePlayers,
      _activePlayersMoveLimit: _activePlayersMoveLimit,
      _activePlayersNumMoves: _activePlayersNumMoves
    });
    return _objectSpread2({}, state, {
      ctx: ctx
    });
  } ///////////////
  // ShouldEnd //
  ///////////////


  function ShouldEndGame(_ref8) {
    var G = _ref8.G,
        ctx = _ref8.ctx;
    return endIf(G, ctx);
  }

  function ShouldEndPhase(_ref9) {
    var G = _ref9.G,
        ctx = _ref9.ctx;
    var conf = GetPhase(ctx);
    return conf.endIf(G, ctx);
  }

  function ShouldEndTurn(_ref10) {
    var G = _ref10.G,
        ctx = _ref10.ctx;
    var conf = GetPhase(ctx); // End the turn if the required number of moves has been made.

    var currentPlayerMoves = ctx.numMoves || 0;

    if (conf.turn.moveLimit && currentPlayerMoves >= conf.turn.moveLimit) {
      return true;
    }

    return conf.turn.endIf(G, ctx);
  } /////////
  // End //
  /////////


  function EndGame(state, _ref11) {
    var arg = _ref11.arg,
        phase = _ref11.phase;
    state = EndPhase(state, {
      phase: phase
    });

    if (arg === undefined) {
      arg = true;
    }

    return _objectSpread2({}, state, {
      ctx: _objectSpread2({}, state.ctx, {
        gameover: arg
      })
    });
  }

  function EndPhase(state, _ref12) {
    var arg = _ref12.arg,
        next = _ref12.next,
        turn = _ref12.turn,
        automatic = _ref12.automatic;
    // End the turn first.
    state = EndTurn(state, {
      turn: turn,
      force: true
    });
    var G = state.G;
    var ctx = state.ctx;

    if (next) {
      next.push({
        fn: UpdatePhase,
        arg: arg,
        phase: ctx.phase
      });
    } // If we aren't in a phase, there is nothing else to do.


    if (ctx.phase === null) {
      return state;
    } // Run any cleanup code for the phase that is about to end.


    var conf = GetPhase(ctx);
    G = conf.onEnd(G, ctx); // Reset the phase.

    ctx = _objectSpread2({}, ctx, {
      phase: null
    }); // Add log entry.

    var action = gameEvent('endPhase', arg);
    var logEntry = {
      action: action,
      _stateID: state._stateID,
      turn: state.ctx.turn,
      phase: state.ctx.phase
    };

    if (automatic) {
      logEntry.automatic = true;
    }

    var deltalog = [].concat(_toConsumableArray(state.deltalog), [logEntry]);
    return _objectSpread2({}, state, {
      G: G,
      ctx: ctx,
      deltalog: deltalog
    });
  }

  function EndTurn(state, _ref13) {
    var arg = _ref13.arg,
        next = _ref13.next,
        turn = _ref13.turn,
        force = _ref13.force,
        automatic = _ref13.automatic;

    // This is not the turn that EndTurn was originally
    // called for. The turn was probably ended some other way.
    if (turn !== state.ctx.turn) {
      return state;
    }

    var G = state.G,
        ctx = state.ctx;
    var conf = GetPhase(ctx); // Prevent ending the turn if moveLimit haven't been made.

    var currentPlayerMoves = ctx.numMoves || 0;

    if (!force && conf.turn.moveLimit && currentPlayerMoves < conf.turn.moveLimit) {
      return state;
    } // Run turn-end triggers.


    G = conf.turn.onEnd(G, ctx);

    if (next) {
      next.push({
        fn: UpdateTurn,
        arg: arg,
        currentPlayer: ctx.currentPlayer
      });
    } // Reset activePlayers.


    ctx = _objectSpread2({}, ctx, {
      activePlayers: null
    }); // Add log entry.

    var action = gameEvent('endTurn', arg);
    var logEntry = {
      action: action,
      _stateID: state._stateID,
      turn: state.ctx.turn,
      phase: state.ctx.phase
    };

    if (automatic) {
      logEntry.automatic = true;
    }

    var deltalog = [].concat(_toConsumableArray(state.deltalog || []), [logEntry]);
    return _objectSpread2({}, state, {
      G: G,
      ctx: ctx,
      deltalog: deltalog,
      _undo: [],
      _redo: []
    });
  }

  function EndStage(state, _ref14) {
    var arg = _ref14.arg,
        next = _ref14.next,
        automatic = _ref14.automatic,
        playerID = _ref14.playerID;
    playerID = playerID || state.ctx.currentPlayer;
    var ctx = state.ctx;
    var _ctx2 = ctx,
        activePlayers = _ctx2.activePlayers,
        _activePlayersMoveLimit = _ctx2._activePlayersMoveLimit;
    var playerInStage = activePlayers !== null && playerID in activePlayers;

    if (!arg && playerInStage) {
      var _conf = GetPhase(ctx);

      var _stage = _conf.turn.stages[activePlayers[playerID]];
      if (_stage && _stage.next) arg = _stage.next;
    }

    if (next && arg) {
      next.push({
        fn: UpdateStage,
        arg: arg,
        playerID: playerID
      });
    } // If player isn’t in a stage, there is nothing else to do.


    if (!playerInStage) return state; // Remove player from activePlayers.

    activePlayers = Object.keys(activePlayers).filter(function (id) {
      return id !== playerID;
    }).reduce(function (obj, key) {
      obj[key] = activePlayers[key];
      return obj;
    }, {});

    if (_activePlayersMoveLimit) {
      // Remove player from _activePlayersMoveLimit.
      _activePlayersMoveLimit = Object.keys(_activePlayersMoveLimit).filter(function (id) {
        return id !== playerID;
      }).reduce(function (obj, key) {
        obj[key] = _activePlayersMoveLimit[key];
        return obj;
      }, {});
    }

    ctx = UpdateActivePlayersOnceEmpty(_objectSpread2({}, ctx, {
      activePlayers: activePlayers,
      _activePlayersMoveLimit: _activePlayersMoveLimit
    })); // Add log entry.

    var action = gameEvent('endStage', arg);
    var logEntry = {
      action: action,
      _stateID: state._stateID,
      turn: state.ctx.turn,
      phase: state.ctx.phase
    };

    if (automatic) {
      logEntry.automatic = true;
    }

    var deltalog = [].concat(_toConsumableArray(state.deltalog || []), [logEntry]);
    return _objectSpread2({}, state, {
      ctx: ctx,
      deltalog: deltalog
    });
  }
  /**
   * Retrieves the relevant move that can be played by playerID.
   *
   * If ctx.activePlayers is set (i.e. one or more players are in some stage),
   * then it attempts to find the move inside the stages config for
   * that turn. If the stage for a player is '', then the player is
   * allowed to make a move (as determined by the phase config), but
   * isn't restricted to a particular set as defined in the stage config.
   *
   * If not, it then looks for the move inside the phase.
   *
   * If it doesn't find the move there, it looks at the global move definition.
   *
   * @param {object} ctx
   * @param {string} name
   * @param {string} playerID
   */


  function GetMove(ctx, name, playerID) {
    var conf = GetPhase(ctx);
    var stages = conf.turn.stages;
    var activePlayers = ctx.activePlayers;

    if (activePlayers && activePlayers[playerID] !== undefined && activePlayers[playerID] !== Stage.NULL && stages[activePlayers[playerID]] !== undefined && stages[activePlayers[playerID]].moves !== undefined) {
      // Check if moves are defined for the player's stage.
      var _stage2 = stages[activePlayers[playerID]];
      var _moves2 = _stage2.moves;

      if (name in _moves2) {
        return _moves2[name];
      }
    } else if (conf.moves) {
      // Check if moves are defined for the current phase.
      if (name in conf.moves) {
        return conf.moves[name];
      }
    } else if (name in moves) {
      // Check for the move globally.
      return moves[name];
    }

    return null;
  }

  function ProcessMove(state, action) {
    var conf = GetPhase(state.ctx);
    var _state3 = state,
        ctx = _state3.ctx;
    var _activePlayersNumMoves = ctx._activePlayersNumMoves;
    var playerID = action.playerID;
    if (ctx.activePlayers) _activePlayersNumMoves[playerID]++;
    var numMoves = state.ctx.numMoves;

    if (playerID == state.ctx.currentPlayer) {
      numMoves++;
    }

    state = _objectSpread2({}, state, {
      ctx: _objectSpread2({}, ctx, {
        numMoves: numMoves,
        _activePlayersNumMoves: _activePlayersNumMoves
      })
    });

    if (ctx._activePlayersMoveLimit && _activePlayersNumMoves[playerID] >= ctx._activePlayersMoveLimit[playerID]) {
      state = EndStage(state, {
        playerID: playerID,
        automatic: true
      });
    }

    var G = conf.turn.onMove(state.G, state.ctx, action);
    state = _objectSpread2({}, state, {
      G: G
    }); // Update undo / redo state.

    var undo = state._undo || [];
    var moveType = action.type;
    var plainCtx = ContextEnhancer.detachAllFromContext(state.ctx);
    state = _objectSpread2({}, state, {
      _undo: [].concat(_toConsumableArray(undo), [{
        G: state.G,
        ctx: plainCtx,
        moveType: moveType
      }]),
      _redo: []
    });
    var events = [{
      fn: OnMove
    }];
    return Process(state, events);
  }

  function SetStageEvent(state, playerID, arg) {
    return Process(state, [{
      fn: EndStage,
      arg: arg,
      playerID: playerID
    }]);
  }

  function EndStageEvent(state, playerID) {
    return Process(state, [{
      fn: EndStage,
      playerID: playerID
    }]);
  }

  function SetPhaseEvent(state, _playerID, newPhase) {
    return Process(state, [{
      fn: EndPhase,
      phase: state.ctx.phase,
      turn: state.ctx.turn,
      arg: {
        next: newPhase
      }
    }]);
  }

  function EndPhaseEvent(state) {
    return Process(state, [{
      fn: EndPhase,
      phase: state.ctx.phase,
      turn: state.ctx.turn
    }]);
  }

  function EndTurnEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: EndTurn,
      turn: state.ctx.turn,
      phase: state.ctx.phase,
      arg: arg
    }]);
  }

  function EndGameEvent(state, _playerID, arg) {
    return Process(state, [{
      fn: EndGame,
      turn: state.ctx.turn,
      phase: state.ctx.phase,
      arg: arg
    }]);
  }

  var eventHandlers = {
    endStage: EndStageEvent,
    setStage: SetStageEvent,
    endTurn: EndTurnEvent,
    endPhase: EndPhaseEvent,
    setPhase: SetPhaseEvent,
    endGame: EndGameEvent,
    setActivePlayers: SetActivePlayersEvent
  };
  var enabledEventNames = [];

  if (events.endTurn !== false) {
    enabledEventNames.push('endTurn');
  }

  if (events.endPhase !== false) {
    enabledEventNames.push('endPhase');
  }

  if (events.setPhase !== false) {
    enabledEventNames.push('setPhase');
  }

  if (events.endGame !== false) {
    enabledEventNames.push('endGame');
  }

  if (events.setActivePlayers !== false) {
    enabledEventNames.push('setActivePlayers');
  }

  if (events.endStage !== false) {
    enabledEventNames.push('endStage');
  }

  if (events.setStage !== false) {
    enabledEventNames.push('setStage');
  }

  function ProcessEvent(state, action) {
    var _action$payload = action.payload,
        type = _action$payload.type,
        playerID = _action$payload.playerID,
        args = _action$payload.args;

    if (eventHandlers.hasOwnProperty(type)) {
      var eventArgs = [state, playerID].concat(args);
      return eventHandlers[type].apply({}, eventArgs);
    }

    return state;
  }

  function IsPlayerActive(_G, ctx, playerID) {
    if (ctx.activePlayers) {
      return playerID in ctx.activePlayers;
    }

    return ctx.currentPlayer === playerID;
  }

  return {
    ctx: function ctx(numPlayers) {
      return {
        numPlayers: numPlayers,
        turn: 0,
        currentPlayer: '0',
        playOrder: _toConsumableArray(new Array(numPlayers)).map(function (_d, i) {
          return i + '';
        }),
        playOrderPos: 0,
        phase: startingPhase,
        activePlayers: null
      };
    },
    init: function init(state) {
      return Process(state, [{
        fn: StartGame
      }]);
    },
    isPlayerActive: IsPlayerActive,
    eventHandlers: eventHandlers,
    eventNames: Object.keys(eventHandlers),
    enabledEventNames: enabledEventNames,
    moveMap: moveMap,
    moveNames: _toConsumableArray(moveNames.values()),
    processMove: ProcessMove,
    processEvent: ProcessEvent,
    getMove: GetMove
  };
}

/**
 * Game
 *
 * Helper to generate the game move reducer. The returned
 * reducer has the following signature:
 *
 * (G, action, ctx) => {}
 *
 * You can roll your own if you like, or use any Redux
 * addon to generate such a reducer.
 *
 * The convention used in this framework is to
 * have action.type contain the name of the move, and
 * action.args contain any additional arguments as an
 * Array.
 *
 * @param {...object} setup - Function that returns the initial state of G.
 *
 * @param {...object} moves - A dictionary of move functions.
 *
 * @param {...object} playerView - A function that returns a
 *                                 derivative of G tailored for
 *                                 the specified player.
 *
 * @param {...object} seed - Seed for the PRNG.
 *
 * @param {Array} plugins - List of plugins. Each plugin is an object like the following:
 *                          {
 *                            // Optional: Wraps a move / trigger function and returns
 *                            // the wrapped function. The wrapper can do anything
 *                            // it wants, but will typically be used to customize G.
 *                            fnWrap: (fn) => {
 *                              return (G, ctx, ...args) => {
 *                                G = preprocess(G);
 *                                G = fn(G, ctx, ...args);
 *                                G = postprocess(G);
 *                                return G;
 *                              };
 *                            },
 *
 *                            // Optional: Called during setup. Can be used to
 *                            // augment G with additional state during setup.
 *                            setup: (G, ctx) => G,
 *                          }
 */

function Game(game) {
  // The Game() function has already been called on this
  // config object, so just pass it through.
  if (game.processMove) {
    return game;
  }

  if (game.name === undefined) game.name = 'default';
  if (game.setup === undefined) game.setup = function () {
    return {};
  };
  if (game.moves === undefined) game.moves = {};
  if (game.playerView === undefined) game.playerView = function (G) {
    return G;
  };
  if (game.plugins === undefined) game.plugins = [];

  if (game.name.includes(' ')) {
    throw new Error(game.name + ': Game name must not include spaces');
  }

  var flow = Flow(game);
  return _objectSpread2({}, game, {
    flow: flow,
    moveNames: flow.moveNames,
    processMove: function processMove(G, action, ctx) {
      var moveFn = flow.getMove(ctx, action.type, action.playerID);

      if (moveFn instanceof Object && moveFn.move) {
        moveFn = moveFn.move;
      }

      if (moveFn instanceof Function) {
        var ctxWithPlayerID = _objectSpread2({}, ctx, {
          playerID: action.playerID
        });

        var args = [G, ctxWithPlayerID].concat(action.args);
        var fn = FnWrap(moveFn, game.plugins);
        return fn.apply(void 0, _toConsumableArray(args));
      }

      return G;
    }
  });
}

/**
 * InitializeGame
 *
 * Creates the initial game state.
 *
 * @param {...object} game - Return value of Game().
 * @param {...object} numPlayers - The number of players.
 * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
 */

function InitializeGame(_ref) {
  var game = _ref.game,
      numPlayers = _ref.numPlayers,
      setupData = _ref.setupData;
  game = Game(game);

  if (!numPlayers) {
    numPlayers = 2;
  }

  var ctx$1 = game.flow.ctx(numPlayers);
  var seed = game.seed;

  if (seed === undefined) {
    seed = Random.seed();
  }

  ctx$1._random = {
    seed: seed
  }; // Pass ctx through all the plugins that want to modify it.

  ctx$1 = ctx.setup(ctx$1, game); // Augment ctx with the enhancers (TODO: move these into plugins).

  var apiCtx = new ContextEnhancer(ctx$1, game, ctx$1.currentPlayer);
  var ctxWithAPI = apiCtx.attachToContext(ctx$1);
  var initialG = game.setup(ctxWithAPI, setupData); // Pass G through all the plugins that want to modify it.

  initialG = G.setup(initialG, ctxWithAPI, game);
  var initial = {
    // User managed state.
    G: initialG,
    // Framework managed state.
    ctx: ctx$1,
    // List of {G, ctx} pairs that can be undone.
    _undo: [],
    // List of {G, ctx} pairs that can be redone.
    _redo: [],
    // A monotonically non-decreasing ID to ensure that
    // state updates are only allowed from clients that
    // are at the same version that the server.
    _stateID: 0,
    // A snapshot of this object so that actions can be
    // replayed over it to view old snapshots.
    // TODO: This will no longer be necessary once the
    // log stops replaying actions (but reads the actual
    // game states instead).
    _initial: {}
  };
  var state = game.flow.init({
    G: initial.G,
    ctx: ctxWithAPI
  });
  initial.G = state.G;
  initial._undo = state._undo;
  state = apiCtx.updateAndDetach(state, true);
  initial.ctx = state.ctx;

  var deepCopy = function deepCopy(obj) {
    return parse(stringify(obj));
  };

  initial._initial = deepCopy(initial);
  return initial;
}

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const uuid = require('shortid').generate;
const cors = require('@koa/cors');
const isGameMetadataKey = (key, gameName) => key.match(gameName + ':.*:metadata');
const getNamespacedGameID = (gameID, gameName) => `${gameName}:${gameID}`;
const createGameMetadata = () => ({
    players: {},
});
const GameMetadataKey = gameID => `${gameID}:metadata`;
/**
 * Creates a new game.
 *
 * @param {object} db - The storage API.
 * @param {object} game - The game config object.
 * @param {number} numPlayers - The number of players.
 * @param {object} setupData - User-defined object that's available
 *                             during game setup.
 * @param {object } lobbyConfig - Configuration options for the lobby.
 */
const CreateGame = async (db, game, numPlayers, setupData, lobbyConfig) => {
    const gameMetadata = createGameMetadata();
    const state = InitializeGame({
        game,
        numPlayers,
        setupData,
    });
    for (let playerIndex = 0; playerIndex < numPlayers; playerIndex++) {
        const credentials = lobbyConfig.uuid();
        gameMetadata.players[playerIndex] = { id: playerIndex, credentials };
    }
    const gameID = lobbyConfig.uuid();
    const namespacedGameID = getNamespacedGameID(gameID, game.name);
    await db.set(GameMetadataKey(namespacedGameID), gameMetadata);
    await db.set(namespacedGameID, state);
    return gameID;
};
const createApiServer = ({ db, games, lobbyConfig }) => {
    const app = new Koa();
    return addApiToServer({ app, db, games, lobbyConfig });
};
const addApiToServer = ({ app, db, games, lobbyConfig }) => {
    if (!lobbyConfig) {
        lobbyConfig = {};
    }
    if (!lobbyConfig.uuid) {
        lobbyConfig = { ...lobbyConfig, uuid };
    }
    const router = new Router();
    router.get('/games', async (ctx) => {
        ctx.body = games.map(game => game.name);
    });
    router.post('/games/:name/create', koaBody(), async (ctx) => {
        // The name of the game (for example: tic-tac-toe).
        const gameName = ctx.params.name;
        // User-data to pass to the game setup function.
        const setupData = ctx.request.body.setupData;
        // The number of players for this game instance.
        let numPlayers = parseInt(ctx.request.body.numPlayers);
        if (!numPlayers) {
            numPlayers = 2;
        }
        const game = games.find(g => g.name === gameName);
        const gameID = await CreateGame(db, game, numPlayers, setupData, lobbyConfig);
        ctx.body = {
            gameID,
        };
    });
    router.get('/games/:name', async (ctx) => {
        const gameName = ctx.params.name;
        const gameList = await db.list();
        let rooms = [];
        for (let key of [...gameList]) {
            if (isGameMetadataKey(key, gameName)) {
                const gameID = key.slice(gameName.length + 1, key.lastIndexOf(':metadata'));
                const metadata = await db.get(key);
                rooms.push({
                    gameID: gameID,
                    players: Object.values(metadata.players).map((player) => {
                        // strip away credentials
                        return { id: player.id, name: player.name };
                    }),
                });
            }
        }
        ctx.body = {
            rooms: rooms,
        };
    });
    router.get('/games/:name/:id', async (ctx) => {
        const gameName = ctx.params.name;
        const gameID = ctx.params.id;
        const room = await db.get(`${gameName}:${GameMetadataKey(gameID)}`);
        if (!room) {
            ctx.throw(404, 'Room ' + gameID + ' not found');
        }
        const strippedRoom = {
            roomID: gameID,
            players: Object.values(room.players).map((player) => {
                return { id: player.id, name: player.name };
            }),
        };
        ctx.body = strippedRoom;
    });
    router.post('/games/:name/:id/join', koaBody(), async (ctx) => {
        const playerID = ctx.request.body.playerID;
        const playerName = ctx.request.body.playerName;
        if (typeof playerID === 'undefined' || playerID === null) {
            ctx.throw(403, 'playerID is required');
        }
        if (!playerName) {
            ctx.throw(403, 'playerName is required');
        }
        const gameName = ctx.params.name;
        const roomID = ctx.params.id;
        const namespacedGameID = getNamespacedGameID(roomID, gameName);
        const gameMetadata = await db.get(GameMetadataKey(namespacedGameID));
        if (!gameMetadata) {
            ctx.throw(404, 'Game ' + roomID + ' not found');
        }
        if (!gameMetadata.players[playerID]) {
            ctx.throw(404, 'Player ' + playerID + ' not found');
        }
        if (gameMetadata.players[playerID].name) {
            ctx.throw(409, 'Player ' + playerID + ' not available');
        }
        gameMetadata.players[playerID].name = playerName;
        const playerCredentials = gameMetadata.players[playerID].credentials;
        await db.set(GameMetadataKey(namespacedGameID), gameMetadata);
        ctx.body = {
            playerCredentials,
        };
    });
    router.post('/games/:name/:id/leave', koaBody(), async (ctx) => {
        const gameName = ctx.params.name;
        const roomID = ctx.params.id;
        const playerID = ctx.request.body.playerID;
        const credentials = ctx.request.body.credentials;
        const namespacedGameID = getNamespacedGameID(roomID, gameName);
        const gameMetadata = await db.get(GameMetadataKey(namespacedGameID));
        if (typeof playerID === 'undefined' || playerID === null) {
            ctx.throw(403, 'playerID is required');
        }
        if (!gameMetadata) {
            ctx.throw(404, 'Game ' + roomID + ' not found');
        }
        if (!gameMetadata.players[playerID]) {
            ctx.throw(404, 'Player ' + playerID + ' not found');
        }
        if (credentials !== gameMetadata.players[playerID].credentials) {
            ctx.throw(403, 'Invalid credentials ' + credentials);
        }
        delete gameMetadata.players[playerID].name;
        if (Object.values(gameMetadata.players).some((val) => val.name)) {
            await db.set(GameMetadataKey(namespacedGameID), gameMetadata);
        }
        else {
            // remove room
            await db.remove(roomID);
            await db.remove(GameMetadataKey(namespacedGameID));
        }
        ctx.body = {};
    });
    router.post('/games/:name/:id/playAgain', koaBody(), async (ctx) => {
        const gameName = ctx.params.name;
        const roomID = ctx.params.id;
        const playerID = ctx.request.body.playerID;
        const credentials = ctx.request.body.credentials;
        const namespacedGameID = getNamespacedGameID(roomID, gameName);
        const gameMetadata = await db.get(GameMetadataKey(namespacedGameID));
        // User-data to pass to the game setup function.
        const setupData = ctx.request.body.setupData;
        // The number of players for this game instance.
        let numPlayers = parseInt(ctx.request.body.numPlayers);
        if (!numPlayers) {
            numPlayers = 2;
        }
        if (typeof playerID === 'undefined' || playerID === null) {
            ctx.throw(403, 'playerID is required');
        }
        if (!gameMetadata) {
            ctx.throw(404, 'Game ' + roomID + ' not found');
        }
        if (!gameMetadata.players[playerID]) {
            ctx.throw(404, 'Player ' + playerID + ' not found');
        }
        if (credentials !== gameMetadata.players[playerID].credentials) {
            ctx.throw(403, 'Invalid credentials ' + credentials);
        }
        // Check if nextRoom is already set, if so, return that id.
        if (gameMetadata.nextRoomID) {
            ctx.body = { nextRoomID: gameMetadata.nextRoomID };
            return;
        }
        const game = games.find(g => g.name === gameName);
        const nextRoomID = await CreateGame(db, game, numPlayers, setupData, lobbyConfig);
        gameMetadata.nextRoomID = nextRoomID;
        await db.set(GameMetadataKey(namespacedGameID), gameMetadata);
        ctx.body = {
            nextRoomID,
        };
    });
    router.post('/games/:name/:id/rename', koaBody(), async (ctx) => {
        const gameName = ctx.params.name;
        const roomID = ctx.params.id;
        const playerID = ctx.request.body.playerID;
        const credentials = ctx.request.body.credentials;
        const newName = ctx.request.body.newName;
        const namespacedGameID = getNamespacedGameID(roomID, gameName);
        const gameMetadata = await db.get(GameMetadataKey(namespacedGameID));
        if (typeof playerID === 'undefined') {
            ctx.throw(403, 'playerID is required');
        }
        if (!newName) {
            ctx.throw(403, 'newName is required');
        }
        if (!gameMetadata) {
            ctx.throw(404, 'Game ' + roomID + ' not found');
        }
        if (!gameMetadata.players[playerID]) {
            ctx.throw(404, 'Player ' + playerID + ' not found');
        }
        if (credentials !== gameMetadata.players[playerID].credentials) {
            ctx.throw(403, 'Invalid credentials ' + credentials);
        }
        gameMetadata.players[playerID].name = newName;
        await db.set(GameMetadataKey(namespacedGameID), gameMetadata);
        ctx.body = {};
    });
    app.use(cors());
    // If API_SECRET is set, then require that requests set an
    // api-secret header that is set to the same value.
    app.use(async (ctx, next) => {
        if (!!process.env.API_SECRET &&
            ctx.request.headers['api-secret'] !== process.env.API_SECRET) {
            ctx.throw(403, 'Invalid API secret');
        }
        await next();
    });
    app.use(router.routes()).use(router.allowedMethods());
    return app;
};

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * InMemory data storage.
 */
var InMemory =
/*#__PURE__*/
function () {
  /**
   * Creates a new InMemory storage.
   */
  function InMemory() {
    _classCallCheck(this, InMemory);

    this.games = new Map();
  }
  /**
   * Connect.
   * No-op for the InMemory instance.
   */


  _createClass(InMemory, [{
    key: "connect",
    value: function connect() {
      return;
    }
    /**
     * Write the game state to the in-memory object.
     * @param {string} id - The game id.
     * @param {object} store - A game state to persist.
     */

  }, {
    key: "set",
    value: function set(id, state) {
      return this.games.set(id, state);
    }
    /**
     * Read the game state from the in-memory object.
     * @param {string} id - The game id.
     * @returns {object} - A game state, or undefined
     *                     if no game is found with this id.
     */

  }, {
    key: "get",
    value: function get(id) {
      return this.games.get(id);
    }
    /**
     * Check if a particular game id exists.
     * @param {string} id - The game id.
     * @returns {boolean} - True if a game with this id exists.
     */

  }, {
    key: "has",
    value: function has(id) {
      return this.games.has(id);
    }
    /**
     * Remove the game state from the in-memory object.
     * @param {string} id - The game id.
     */

  }, {
    key: "remove",
    value: function remove(id) {
      if (!this.games.has(id)) return;
      this.games["delete"](id);
    }
    /**
     * Return all keys.
     * @returns {array} - Array of keys (strings)
     */

  }, {
    key: "list",
    value: function list() {
      return _toConsumableArray(this.games.keys());
    }
  }]);

  return InMemory;
}();

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var LRU = require('lru-cache');
/**
 * MongoDB connector.
 */


var Mongo =
/*#__PURE__*/
function () {
  /**
   * Creates a new Mongo connector object.
   */
  function Mongo(_ref) {
    var url = _ref.url,
        dbname = _ref.dbname,
        cacheSize = _ref.cacheSize,
        mockClient = _ref.mockClient;

    _classCallCheck(this, Mongo);

    if (cacheSize === undefined) cacheSize = 1000;
    if (dbname === undefined) dbname = 'bgio';
    this.client = mockClient || require('mongodb').MongoClient;
    this.url = url;
    this.dbname = dbname;
    this.cache = new LRU({
      max: cacheSize
    });
  }
  /**
   * Connect to the instance.
   */


  _createClass(Mongo, [{
    key: "connect",
    value: async function connect() {
      var c = await this.client.connect(this.url, {
        useNewUrlParser: true
      });
      this.db = c.db(this.dbname);
      return;
    }
    /**
     * Write the game state.
     * @param {string} id - The game id.
     * @param {object} store - A game state to persist.
     */

  }, {
    key: "set",
    value: async function set(id, state) {
      // Don't set a value if the cache has a more recent version.
      // This can occur due a race condition.
      //
      // For example:
      //
      // A --sync--> server | DB => 0 --+
      //                                |
      // A <--sync-- server | DB => 0 --+
      //
      // B --sync--> server | DB => 0 ----+
      //                                  |
      // A --move--> server | DB <= 1 --+ |
      //                                | |
      // A <--sync-- server | DB => 1 --+ |
      //                                  |
      // B <--sync-- server | DB => 0 ----+
      //
      var cacheValue = this.cache.get(id);

      if (cacheValue && cacheValue._stateID >= state._stateID) {
        return;
      }

      this.cache.set(id, state);
      var col = this.db.collection(id);
      delete state._id;
      await col.insertOne(state);
      return;
    }
    /**
     * Read the game state.
     * @param {string} id - The game id.
     * @returns {object} - A game state, or undefined
     *                     if no game is found with this id.
     */

  }, {
    key: "get",
    value: async function get(id) {
      var cacheValue = this.cache.get(id);

      if (cacheValue !== undefined) {
        return cacheValue;
      }

      var col = this.db.collection(id);
      var docs = await col.find().sort({
        _id: -1
      }).limit(1).toArray();
      var oldStateID = 0;
      cacheValue = this.cache.get(id);
      /* istanbul ignore next line */

      if (cacheValue !== undefined) {
        /* istanbul ignore next line */
        oldStateID = cacheValue._stateID;
      }

      var newStateID = -1;

      if (docs.length > 0) {
        newStateID = docs[0]._stateID;
      } // Update the cache, but only if the read
      // value is newer than the value already in it.
      // A race condition might overwrite the
      // cache with an older value, so we need this.


      if (newStateID >= oldStateID) {
        this.cache.set(id, docs[0]);
      }

      return docs[0];
    }
    /**
     * Check if a particular game exists.
     * @param {string} id - The game id.
     * @returns {boolean} - True if a game with this id exists.
     */

  }, {
    key: "has",
    value: async function has(id) {
      var cacheValue = this.cache.get(id);

      if (cacheValue !== undefined) {
        return true;
      }

      var col = this.db.collection(id);
      var docs = await col.find().limit(1).toArray();
      return docs.length > 0;
    }
    /**
     * Remove the game state from the DB.
     * @param {string} id - The game id.
     */

  }, {
    key: "remove",
    value: async function remove(id) {
      if (!(await this.has(id))) return;

      function _dropCollection(db, id) {
        return new Promise(function (ok) {
          db.dropCollection(id, ok);
        });
      }

      await _dropCollection(this.db, id); // Update the cache

      this.cache.del(id);
    }
    /**
     * Return all keys.
     * @returns {array} - Array of keys (strings)
     */

  }, {
    key: "list",
    value: async function list() {
      var keys = await this.db.listCollections().toArray();
      return keys.map(function (r) {
        return r.name;
      });
    }
  }]);

  return Mongo;
}();

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
var LRU$1 = require('lru-cache');

var ENGINE_FIRESTORE = 'Firestore';
var ENGINE_RTDB = 'RTDB';
/**
 * Firebase RTDB/Firestore connector.
 */

var Firebase =
/*#__PURE__*/
function () {
  /**
   * Creates a new Firebase connector object.
   * The default engine is Firestore.
   * @constructor
   */
  function Firebase(_ref) {
    var config = _ref.config,
        dbname = _ref.dbname,
        engine = _ref.engine,
        cacheSize = _ref.cacheSize,
        adminClient = _ref.adminClient;

    _classCallCheck(this, Firebase);

    if (cacheSize === undefined) {
      cacheSize = 1000;
    }

    if (dbname === undefined) {
      dbname = 'bgio';
    } // // TODO: better handling for possible errors


    if (config === undefined) {
      config = {};
    }

    if (adminClient) {
      this.client = require('firebase-admin');
    } else {
      this.client = require('firebase');
    }

    this.engine = engine === ENGINE_RTDB ? engine : ENGINE_FIRESTORE;
    this.config = config;
    this.dbname = dbname;
    this.cache = new LRU$1({
      max: cacheSize
    });
  }
  /**
   * Connect to the instance.
   */


  _createClass(Firebase, [{
    key: "connect",
    value: async function connect() {
      this.client.initializeApp(this.config);
      this.db = this.engine === ENGINE_FIRESTORE ? this.client.firestore() : this.client.database().ref();
      return;
    }
    /**
     * Write the game state.
     * @param {string} id - The game id.
     * @param {object} store - A game state to persist.
     */

  }, {
    key: "set",
    value: async function set(id, state) {
      var cacheValue = this.cache.get(id);

      if (cacheValue && cacheValue._stateID >= state._stateID) {
        return;
      }

      this.cache.set(id, state);
      var col = this.engine === ENGINE_RTDB ? this.db.child(id) : this.db.collection(this.dbname).doc(id);
      delete state._id;
      await col.set(state);
      return;
    }
    /**
     * Read the game state.
     * @param {string} id - The game id.
     * @returns {object} - A game state, or undefined
     *                     if no game is found with this id.
     */

  }, {
    key: "get",
    value: async function get(id) {
      var cacheValue = this.cache.get(id);

      if (cacheValue !== undefined) {
        return cacheValue;
      }

      var col, doc, data;

      if (this.engine === ENGINE_RTDB) {
        col = this.db.child(id);
        data = await col.once('value');
        doc = data.val() ? Object.assign({}, data.val(), {
          _id: id
        }) : data.val();
      } else {
        col = this.db.collection(this.dbname).doc(id);
        data = await col.get();
        doc = data.data() ? Object.assign({}, data.data(), {
          _id: id
        }) : data.data();
      }

      var oldStateID = 0;
      cacheValue = this.cache.get(id);
      /* istanbul ignore next line */

      if (cacheValue !== undefined) {
        /* istanbul ignore next line */
        oldStateID = cacheValue._stateID;
      }

      var newStateID = -1;

      if (doc) {
        newStateID = doc._stateID;
      } // Update the cache, but only if the read
      // value is newer than the value already in it.
      // A race condition might overwrite the
      // cache with an older value, so we need this.


      if (newStateID >= oldStateID) {
        this.cache.set(id, doc);
      }

      if (doc === null) {
        return undefined;
      }

      return doc;
    }
    /**
     * Check if a particular game exists.
     * @param {string} id - The game id.
     * @returns {boolean} - True if a game with this id exists.
     */

  }, {
    key: "has",
    value: async function has(id) {
      var cacheValue = this.cache.get(id);

      if (cacheValue !== undefined) {
        return true;
      }

      var col, data, exists;

      if (this.engine === ENGINE_RTDB) {
        col = this.db.child(id);
        data = await col.once('value');
        exists = data.exists();
      } else {
        col = this.db.collection(this.dbname).doc(id);
        data = await col.get();
        exists = data.exists;
      }

      return exists;
    }
    /**
     * Remove the game state from the DB.
     * @param {string} id - The game id.
     */

  }, {
    key: "remove",
    value: async function remove(id) {
      if (!(await this.has(id))) return;
      var col;

      if (this.engine === ENGINE_RTDB) {
        col = this.db.child(id);
        await col.remove();
      } else {
        col = this.db.collection(this.dbname).doc(id);
        await col["delete"]();
      } // Update the cache


      this.cache.del(id);
    }
    /**
     * Return all keys.
     * @returns {array} - Array of keys (strings)
     */

  }, {
    key: "list",
    value: async function list() {
      if (this.engine === ENGINE_RTDB) {
        // firebase RTDB
        var cols = await this.db.once('value');
        return cols.ref.sortedDataKeys;
      } else {
        // firestore
        var docs = await this.db.collection(this.dbname).get();
        var ids = [];
        docs.forEach(function (doc) {
          return ids.push(doc.id);
        });
        return ids;
      }
    }
  }]);

  return Firebase;
}();

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * FlatFile data storage.
 */
var FlatFile =
/*#__PURE__*/
function () {
  /**
   * Creates a new FlatFile storage.
   */
  function FlatFile(_ref) {
    var dir = _ref.dir,
        logging = _ref.logging,
        ttl = _ref.ttl;

    _classCallCheck(this, FlatFile);

    this.games = require('node-persist');
    this.dir = dir;
    this.logging = logging || false;
    this.ttl = ttl || false;
  }
  /**
   * Connect.
   */


  _createClass(FlatFile, [{
    key: "connect",
    value: async function connect() {
      await this.games.init({
        dir: this.dir,
        logging: this.logging,
        ttl: this.ttl
      });
      return;
    }
  }, {
    key: "clear",
    value: async function clear() {
      return this.games.clear();
    }
    /**
     * Write the game state.
     * @param {string} id - The game id.
     * @param {object} store - A game state to persist.
     */

  }, {
    key: "set",
    value: async function set(id, state) {
      return await this.games.setItem(id, state);
    }
    /**
     * Read the game state.
     * @param {string} id - The game id.
     * @returns {object} - A game state, or undefined
     *                     if no game is found with this id.
     */

  }, {
    key: "get",
    value: async function get(id) {
      return await this.games.getItem(id);
    }
    /**
     * Check if a particular game id exists.
     * @param {string} id - The game id.
     * @returns {boolean} - True if a game with this id exists.
     */

  }, {
    key: "has",
    value: async function has(id) {
      var keys = await this.games.keys();
      return keys.indexOf(id) > -1;
    }
    /**
     * Remove the game state.
     * @param {string} id - The game id.
     */

  }, {
    key: "remove",
    value: async function remove(id) {
      var keys = await this.games.keys();
      if (!(keys.indexOf(id) > -1)) return;
      this.games.removeItem(id);
    }
    /**
     * Return all keys.
     * @returns {array} - Array of keys (strings)
     */

  }, {
    key: "list",
    value: async function list() {
      return _toConsumableArray((await this.games.keys()));
    }
  }]);

  return FlatFile;
}();

var DBFromEnv = function DBFromEnv() {
  if (process.env.MONGO_URI && process.env.MONGO_DATABASE) {
    return new Mongo({
      url: process.env.MONGO_URI,
      dbname: process.env.MONGO_DATABASE
    });
  } else if (process.env.FIREBASE_APIKEY && process.env.FIREBASE_AUTHDOMAIN && process.env.FIREBASE_DATABASEURL && process.env.FIREBASE_PROJECTID) {
    var config = {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID
    };
    return new Firebase({
      config: config,
      engine: process.env.FIREBASE_ENGINE
    });
  } else {
    return new InMemory();
  }
};

/**
 * Returns true if a move can be undone.
 */

var CanUndoMove = function CanUndoMove(G, ctx, move) {
  if (move.undoable === false) {
    return false;
  }

  if (move.undoable instanceof Function) {
    return move.undoable(G, ctx);
  }

  return true;
};
/**
 * Moves can return this when they want to indicate
 * that the combination of arguments is illegal and
 * the move ought to be discarded.
 */


var INVALID_MOVE = 'INVALID_MOVE';
/**
 * CreateGameReducer
 *
 * Creates the main game state reducer.
 * @param {...object} game - Return value of Game().
 * @param {...object} numPlayers - The number of players.
 * @param {...object} multiplayer - Set to true if we are in a multiplayer client.
 */

function CreateGameReducer(_ref) {
  var game = _ref.game,
      multiplayer = _ref.multiplayer;
  game = Game(game);
  /**
   * GameReducer
   *
   * Redux reducer that maintains the overall game state.
   * @param {object} state - The state before the action.
   * @param {object} action - A Redux action.
   */

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case GAME_EVENT:
        {
          state = _objectSpread2({}, state, {
            deltalog: []
          }); // Process game events only on the server.
          // These events like `endTurn` typically
          // contain code that may rely on secret state
          // and cannot be computed on the client.

          if (multiplayer) {
            return state;
          } // Disallow events once the game is over.


          if (state.ctx.gameover !== undefined) {
            error("cannot call event after game end");
            return state;
          } // Ignore the event if the player isn't active.


          if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
            error("disallowed event: ".concat(action.payload.type));
            return state;
          }

          var apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);
          state.ctx = apiCtx.attachToContext(state.ctx);
          var newState = game.flow.processEvent(state, action);
          newState = apiCtx.updateAndDetach(newState, true);
          return _objectSpread2({}, newState, {
            _stateID: state._stateID + 1
          });
        }

      case MAKE_MOVE:
        {
          state = _objectSpread2({}, state, {
            deltalog: []
          }); // Check whether the move is allowed at this time.

          var move = game.flow.getMove(state.ctx, action.payload.type, action.payload.playerID || state.ctx.currentPlayer);

          if (move === null) {
            error("disallowed move: ".concat(action.payload.type));
            return state;
          } // Don't run move on client if optimistic = false.


          if (multiplayer && move.optimistic === false) {
            return state;
          } // Disallow moves once the game is over.


          if (state.ctx.gameover !== undefined) {
            error("cannot make move after game end");
            return state;
          } // Ignore the move if the player isn't active.


          if (action.payload.playerID !== null && action.payload.playerID !== undefined && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
            error("disallowed move: ".concat(action.payload.type));
            return state;
          }

          var _apiCtx = new ContextEnhancer(state.ctx, game, action.payload.playerID);

          var ctxWithAPI = _apiCtx.attachToContext(state.ctx); // Process the move.


          var G = game.processMove(state.G, action.payload, ctxWithAPI); // The game declared the move as invalid.

          if (G === INVALID_MOVE) {
            return state;
          } // Create a log entry for this move.


          var logEntry = {
            action: action,
            _stateID: state._stateID,
            turn: state.ctx.turn,
            phase: state.ctx.phase
          };

          if (move.redact === true) {
            logEntry.redact = true;
          } // Don't call into events here.


          var _newState = _apiCtx.updateAndDetach(_objectSpread2({}, state, {
            deltalog: [logEntry]
          }), false);

          var ctx = _newState.ctx; // Random API code was executed. If we are on the
          // client, wait for the master response instead.

          if (multiplayer && ctx._random !== undefined && ctx._random.prngstate !== undefined) {
            return state;
          }

          state = _objectSpread2({}, _newState, {
            G: G,
            ctx: ctx,
            _stateID: state._stateID + 1
          }); // If we're on the client, just process the move
          // and no triggers in multiplayer mode.
          // These will be processed on the server, which
          // will send back a state update.

          if (multiplayer) {
            return state;
          } // Allow the flow reducer to process any triggers that happen after moves.


          ctxWithAPI = _apiCtx.attachToContext(state.ctx);
          state = game.flow.processMove(_objectSpread2({}, state, {
            ctx: ctxWithAPI
          }), action.payload);
          state = _apiCtx.updateAndDetach(state, true);
          return state;
        }

      case RESET:
      case UPDATE:
      case SYNC:
        {
          return action.state;
        }

      case UNDO:
        {
          var _state = state,
              _undo = _state._undo,
              _redo = _state._redo;

          if (_undo.length < 2) {
            return state;
          }

          var last = _undo[_undo.length - 1];
          var restore = _undo[_undo.length - 2]; // Only allow undoable moves to be undone.

          var lastMove = game.flow.getMove(state.ctx, last.moveType, state.ctx.currentPlayer);

          if (!CanUndoMove(state.G, state.ctx, lastMove)) {
            return state;
          }

          return _objectSpread2({}, state, {
            G: restore.G,
            ctx: restore.ctx,
            _undo: _undo.slice(0, _undo.length - 1),
            _redo: [last].concat(_toConsumableArray(_redo))
          });
        }

      case REDO:
        {
          var _state2 = state,
              _undo2 = _state2._undo,
              _redo2 = _state2._redo;

          if (_redo2.length == 0) {
            return state;
          }

          var first = _redo2[0];
          return _objectSpread2({}, state, {
            G: first.G,
            ctx: first.ctx,
            _undo: [].concat(_toConsumableArray(_undo2), [first]),
            _redo: _redo2.slice(1)
          });
        }

      default:
        {
          return state;
        }
    }
  };
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

var GameMetadataKey$1 = function GameMetadataKey(gameID) {
  return "".concat(gameID, ":metadata");
};
/**
 * Redact the log.
 *
 * @param {Array} log - The game log (or deltalog).
 * @param {String} playerID - The playerID that this log is
 *                            to be sent to.
 */


function redactLog(log, playerID) {
  if (log === undefined) {
    return log;
  }

  return log.map(function (logEvent) {
    // filter for all other players and spectators.
    if (playerID !== null && +playerID === +logEvent.action.payload.playerID) {
      return logEvent;
    }

    if (logEvent.redact !== true) {
      return logEvent;
    }

    var payload = _objectSpread2({}, logEvent.action.payload, {
      args: null
    });

    var filteredEvent = _objectSpread2({}, logEvent, {
      action: _objectSpread2({}, logEvent.action, {
        payload: payload
      })
    });
    /* eslint-disable-next-line no-unused-vars */


    var redact = filteredEvent.redact,
        remaining = _objectWithoutProperties(filteredEvent, ["redact"]);

    return remaining;
  });
}
/**
 * Verifies that the move came from a player with the
 * appropriate credentials.
 */

var isActionFromAuthenticPlayer = function isActionFromAuthenticPlayer(_ref) {
  var action = _ref.action,
      gameMetadata = _ref.gameMetadata,
      playerID = _ref.playerID;

  if (!gameMetadata) {
    return true;
  }

  var hasCredentials = Object.keys(gameMetadata.players).some(function (key) {
    return !!(gameMetadata.players[key] && gameMetadata.players[key].credentials);
  });

  if (!hasCredentials) {
    return true;
  }

  if (!action.payload) {
    return false;
  }

  if (!action.payload.credentials) {
    return false;
  }

  if (action.payload.credentials !== gameMetadata.players[playerID].credentials) {
    return false;
  }

  return true;
};
/**
 * Master
 *
 * Class that runs the game and maintains the authoritative state.
 * It uses the transportAPI to communicate with clients and the
 * storageAPI to communicate with the database.
 */

var Master =
/*#__PURE__*/
function () {
  function Master(game, storageAPI, transportAPI, auth) {
    _classCallCheck(this, Master);

    this.game = Game(game);
    this.storageAPI = storageAPI;
    this.transportAPI = transportAPI;

    this.auth = function () {
      return true;
    };

    if (auth === true) {
      this.auth = isActionFromAuthenticPlayer;
    } else if (typeof auth === 'function') {
      this.auth = auth;
    }
  }
  /**
   * Called on each move / event made by the client.
   * Computes the new value of the game state and returns it
   * along with a deltalog.
   */


  _createClass(Master, [{
    key: "onUpdate",
    value: async function onUpdate(action, stateID, gameID, playerID) {
      var _this = this;

      var isActionAuthentic;

      if (this.executeSynchronously) {
        var gameMetadata = this.storageAPI.get(GameMetadataKey$1(gameID));
        isActionAuthentic = this.auth({
          action: action,
          gameMetadata: gameMetadata,
          gameID: gameID,
          playerID: playerID
        });
      } else {
        var _gameMetadata = await this.storageAPI.get(GameMetadataKey$1(gameID));

        isActionAuthentic = this.auth({
          action: action,
          gameMetadata: _gameMetadata,
          gameID: gameID,
          playerID: playerID
        });
      }

      if (!isActionAuthentic) {
        return {
          error: 'unauthorized action'
        };
      }

      var key = gameID;
      var state;

      if (this.executeSynchronously) {
        state = this.storageAPI.get(key);
      } else {
        state = await this.storageAPI.get(key);
      }

      if (state === undefined) {
        error("game not found, gameID=[".concat(key, "]"));
        return {
          error: 'game not found'
        };
      }

      if (state.ctx.gameover !== undefined) {
        error("game over - gameID=[".concat(key, "]"));
        return;
      }

      var reducer = CreateGameReducer({
        game: this.game,
        numPlayers: state.ctx.numPlayers
      });
      var store = createStore(reducer, state); // Only allow UNDO / REDO if there is exactly one player
      // that can make moves right now and the person doing the
      // action is that player.

      if (action.type == UNDO || action.type == REDO) {
        if (state.ctx.currentPlayer !== playerID || state.ctx.activePlayers !== null) {
          error("playerID=[".concat(playerID, "] cannot undo / redo right now"));
          return;
        }
      } // Check whether the player is active.


      if (!this.game.flow.isPlayerActive(state.G, state.ctx, playerID)) {
        error("player not active - playerID=[".concat(playerID, "]"));
        return;
      } // Check whether the player is allowed to make the move.


      if (action.type == MAKE_MOVE && !this.game.flow.getMove(state.ctx, action.payload.type, playerID)) {
        error("move not processed - canPlayerMakeMove=false, playerID=[".concat(playerID, "]"));
        return;
      }

      if (state._stateID !== stateID) {
        error("invalid stateID, was=[".concat(stateID, "], expected=[").concat(state._stateID, "]"));
        return;
      }

      var log = store.getState().log || []; // Update server's version of the store.

      store.dispatch(action);
      state = store.getState();
      this.transportAPI.sendAll(function (playerID) {
        var filteredState = _objectSpread2({}, state, {
          G: _this.game.playerView(state.G, state.ctx, playerID),
          ctx: _objectSpread2({}, state.ctx, {
            _random: undefined
          }),
          log: undefined,
          deltalog: undefined,
          _undo: [],
          _redo: [],
          _initial: _objectSpread2({}, state._initial, {
            _undo: [],
            _redo: []
          })
        });

        var log = redactLog(state.deltalog, playerID);
        return {
          type: 'update',
          args: [gameID, filteredState, log]
        };
      }); // TODO: We currently attach the log back into the state
      // object before storing it, but this should probably
      // sit in a different part of the database eventually.

      log = [].concat(_toConsumableArray(log), _toConsumableArray(state.deltalog));

      var stateWithLog = _objectSpread2({}, state, {
        log: log
      });

      if (this.executeSynchronously) {
        this.storageAPI.set(key, stateWithLog);
      } else {
        await this.storageAPI.set(key, stateWithLog);
      }
    }
    /**
     * Called when the client connects / reconnects.
     * Returns the latest game state and the entire log.
     */

  }, {
    key: "onSync",
    value: async function onSync(gameID, playerID, numPlayers) {
      var key = gameID;
      var state, gameMetadata, filteredGameMetadata;

      if (this.executeSynchronously) {
        state = this.storageAPI.get(key);
        gameMetadata = this.storageAPI.get(GameMetadataKey$1(gameID));
      } else {
        state = await this.storageAPI.get(key);
        gameMetadata = await this.storageAPI.get(GameMetadataKey$1(gameID));
      }

      if (gameMetadata) {
        filteredGameMetadata = Object.values(gameMetadata.players).map(function (player) {
          return {
            id: player.id,
            name: player.name
          };
        });
      } // If the game doesn't exist, then create one on demand.
      // TODO: Move this out of the sync call.


      if (state === undefined) {
        state = InitializeGame({
          game: this.game,
          numPlayers: numPlayers
        });

        if (this.executeSynchronously) {
          this.storageAPI.set(key, state);
          state = this.storageAPI.get(key);
        } else {
          await this.storageAPI.set(key, state);
          state = await this.storageAPI.get(key);
        }
      }

      var filteredState = _objectSpread2({}, state, {
        G: this.game.playerView(state.G, state.ctx, playerID),
        ctx: _objectSpread2({}, state.ctx, {
          _random: undefined
        }),
        log: undefined,
        deltalog: undefined,
        _undo: [],
        _redo: [],
        _initial: _objectSpread2({}, state._initial, {
          _undo: [],
          _redo: []
        })
      });

      var log = redactLog(state.log, playerID);
      this.transportAPI.send({
        playerID: playerID,
        type: 'sync',
        args: [gameID, filteredState, log, filteredGameMetadata]
      });
      return;
    }
  }]);

  return Master;
}();

var IO = require('koa-socket-2');

var PING_TIMEOUT = 20 * 1e3;
var PING_INTERVAL = 10 * 1e3;
/**
 * API that's exposed by SocketIO for the Master to send
 * information to the clients.
 */

function TransportAPI(gameID, socket, clientInfo, roomInfo) {
  /**
   * Send a message to a specific client.
   */
  var send = function send(_ref) {
    var type = _ref.type,
        playerID = _ref.playerID,
        args = _ref.args;
    var clients = roomInfo.get(gameID).values();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = clients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var client = _step.value;
        var info = clientInfo.get(client);

        if (info.playerID == playerID) {
          if (socket.id == client) {
            socket.emit.apply(socket, [type].concat(_toConsumableArray(args)));
          } else {
            socket.to(info.socket.id).emit.apply(socket, [type].concat(_toConsumableArray(args)));
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
  /**
   * Send a message to all clients.
   */


  var sendAll = function sendAll(arg) {
    roomInfo.get(gameID).forEach(function (c) {
      var playerID = clientInfo.get(c).playerID;

      if (typeof arg === 'function') {
        var t = arg(playerID);
        t.playerID = playerID;
        send(t);
      } else {
        arg.playerID = playerID;
        send(arg);
      }
    });
  };

  return {
    send: send,
    sendAll: sendAll
  };
}
/**
 * Transport interface that uses socket.io
 */

function SocketIO(_clientInfo, _roomInfo) {
  var clientInfo = _clientInfo || new Map();
  var roomInfo = _roomInfo || new Map();
  return {
    init: function init(app, games) {
      var io = new IO({
        ioOptions: {
          pingTimeout: PING_TIMEOUT,
          pingInterval: PING_INTERVAL
        }
      });
      app.context.io = io;
      io.attach(app);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var game = _step2.value;

          var nsp = app._io.of(game.name);

          nsp.on('connection', function (socket) {
            socket.on('update', async function (action, stateID, gameID, playerID) {
              var master = new Master(game, app.context.db, TransportAPI(gameID, socket, clientInfo, roomInfo), true);
              await master.onUpdate(action, stateID, gameID, playerID);
            });
            socket.on('sync', async function (gameID, playerID, numPlayers) {
              socket.join(gameID); // Remove client from any previous game that it was a part of.

              if (clientInfo.has(socket.id)) {
                var _clientInfo$get = clientInfo.get(socket.id),
                    oldGameID = _clientInfo$get.gameID;

                roomInfo.get(oldGameID)["delete"](socket.id);
              }

              var roomClients = roomInfo.get(gameID);

              if (roomClients === undefined) {
                roomClients = new Set();
                roomInfo.set(gameID, roomClients);
              }

              roomClients.add(socket.id);
              clientInfo.set(socket.id, {
                gameID: gameID,
                playerID: playerID,
                socket: socket
              });
              var master = new Master(game, app.context.db, TransportAPI(gameID, socket, clientInfo, roomInfo), true);
              await master.onSync(gameID, playerID, numPlayers);
            });
            socket.on('disconnect', function () {
              if (clientInfo.has(socket.id)) {
                var _clientInfo$get2 = clientInfo.get(socket.id),
                    gameID = _clientInfo$get2.gameID;

                roomInfo.get(gameID)["delete"](socket.id);
                clientInfo["delete"](socket.id);
              }
            });
          });
        };

        for (var _iterator2 = games[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  };
}

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const Koa$1 = require('koa');
/**
 * Build config object from server run arguments.
 *
 * @param {number} portOrConfig - Either port or server config object. Optional.
 * @param {function} callback - Server run callback. Optional.
 */
const createServerRunConfig = (portOrConfig, callback) => {
    const config = {};
    if (portOrConfig && typeof portOrConfig === 'object') {
        config.port = portOrConfig.port;
        config.callback = portOrConfig.callback || callback;
        config.lobbyConfig = portOrConfig.lobbyConfig;
    }
    else {
        config.port = portOrConfig;
        config.callback = callback;
    }
    return config;
};
/**
 * Instantiate a game server.
 *
 * @param {Array} games - The games that this server will handle.
 * @param {object} db - The interface with the database.
 * @param {object} transport - The interface with the clients.
 */
function Server({ games, db, transport }) {
    const app = new Koa$1();
    games = games.map(Game);
    if (db === undefined) {
        db = DBFromEnv();
    }
    app.context.db = db;
    if (transport === undefined) {
        transport = SocketIO();
    }
    transport.init(app, games);
    return {
        app,
        db,
        run: async (portOrConfig, callback) => {
            const serverRunConfig = createServerRunConfig(portOrConfig, callback);
            // DB
            await db.connect();
            // Lobby API
            const lobbyConfig = serverRunConfig.lobbyConfig;
            let apiServer;
            if (!lobbyConfig || !lobbyConfig.apiPort) {
                addApiToServer({ app, db, games, lobbyConfig });
            }
            else {
                // Run API in a separate Koa app.
                const api = createApiServer({ db, games, lobbyConfig });
                apiServer = await api.listen(lobbyConfig.apiPort, lobbyConfig.apiCallback);
                info(`API serving on ${apiServer.address().port}...`);
            }
            // Run Game Server (+ API, if necessary).
            const appServer = await app.listen(serverRunConfig.port, serverRunConfig.callback);
            info(`App serving on ${appServer.address().port}...`);
            return { apiServer, appServer };
        },
        kill: ({ apiServer, appServer }) => {
            if (apiServer) {
                apiServer.close();
            }
            appServer.close();
        },
    };
}

exports.Firebase = Firebase;
exports.FlatFile = FlatFile;
exports.Mongo = Mongo;
exports.Server = Server;
