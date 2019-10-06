(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('immer')) :
  typeof define === 'function' && define.amd ? define(['exports', 'immer'], factory) :
  (global = global || self, factory(global.AI = {}, global.immer));
}(this, function (exports, produce) { 'use strict';

  produce = produce && produce.hasOwnProperty('default') ? produce['default'] : produce;

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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
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
  var errorfn = DEV ? console.error : function () {};
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
  /**
   * Generate a move to be dispatched to the game move reducer.
   *
   * @param {string} type - The move type.
   * @param {Array}  args - Additional arguments.
   * @param {string}  playerID - The ID of the player making this action.
   * @param {string}  credentials - (optional) The credentials for the player making this action.
   */

  var makeMove = function makeMove(type, args, playerID, credentials) {
    return {
      type: MAKE_MOVE,
      payload: {
        type: type,
        args: args,
        playerID: playerID,
        credentials: credentials
      }
    };
  };
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

  var Bot =
  /*#__PURE__*/
  function () {
    function Bot(_ref2) {
      var _this = this;

      var enumerate = _ref2.enumerate,
          seed = _ref2.seed;

      _classCallCheck(this, Bot);

      _defineProperty(this, "enumerate", function (G, ctx, playerID) {
        var actions = _this.enumerateFn(G, ctx, playerID);

        return actions.map(function (a) {
          if (a.payload !== undefined) {
            return a;
          }

          if (a.move !== undefined) {
            return makeMove(a.move, a.args, playerID);
          }

          if (a.event !== undefined) {
            return gameEvent(a.event, a.args, playerID);
          }
        });
      });

      this.enumerateFn = enumerate;
      this.seed = seed;
    }

    _createClass(Bot, [{
      key: "random",
      value: function random(arg) {
        var number;

        if (this.seed !== undefined) {
          var r = null;

          if (this.prngstate) {
            r = new alea('', {
              state: this.prngstate
            });
          } else {
            r = new alea(this.seed, {
              state: true
            });
          }

          number = r();
          this.prngstate = r.state();
        } else {
          number = Math.random();
        }

        if (arg) {
          // eslint-disable-next-line unicorn/explicit-length-check
          if (arg.length) {
            var id = Math.floor(number * arg.length);
            return arg[id];
          } else {
            return Math.floor(number * arg);
          }
        }

        return number;
      }
    }]);

    return Bot;
  }();
  var RandomBot =
  /*#__PURE__*/
  function (_Bot) {
    _inherits(RandomBot, _Bot);

    function RandomBot() {
      _classCallCheck(this, RandomBot);

      return _possibleConstructorReturn(this, _getPrototypeOf(RandomBot).apply(this, arguments));
    }

    _createClass(RandomBot, [{
      key: "play",
      value: function play(_ref3, playerID) {
        var G = _ref3.G,
            ctx = _ref3.ctx;
        var moves = this.enumerate(G, ctx, playerID);
        return {
          action: this.random(moves)
        };
      }
    }]);

    return RandomBot;
  }(Bot);
  var MCTSBot =
  /*#__PURE__*/
  function (_Bot2) {
    _inherits(MCTSBot, _Bot2);

    function MCTSBot(_ref4) {
      var _this2;

      var enumerate = _ref4.enumerate,
          seed = _ref4.seed,
          objectives = _ref4.objectives,
          game = _ref4.game,
          iterations = _ref4.iterations,
          playoutDepth = _ref4.playoutDepth;

      _classCallCheck(this, MCTSBot);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MCTSBot).call(this, {
        enumerate: enumerate,
        seed: seed
      }));

      if (objectives === undefined) {
        objectives = function objectives() {
          return {};
        };
      }

      _this2.objectives = objectives;
      _this2.reducer = CreateGameReducer({
        game: game
      });
      _this2.iterations = iterations || 1000;
      _this2.playoutDepth = playoutDepth || 50;
      return _this2;
    }

    _createClass(MCTSBot, [{
      key: "createNode",
      value: function createNode(_ref5) {
        var state = _ref5.state,
            parentAction = _ref5.parentAction,
            parent = _ref5.parent,
            playerID = _ref5.playerID;
        var G = state.G,
            ctx = state.ctx;
        var actions = [];
        var objectives = [];

        if (playerID !== undefined) {
          actions = this.enumerate(G, ctx, playerID);
          objectives = this.objectives(G, ctx, playerID);
        } else if (ctx.activePlayers) {
          for (var _playerID in ctx.activePlayers) {
            actions = actions.concat(this.enumerate(G, ctx, _playerID));
            objectives = objectives.concat(this.objectives(G, ctx, _playerID));
          }
        } else {
          actions = actions.concat(this.enumerate(G, ctx, ctx.currentPlayer));
          objectives = objectives.concat(this.objectives(G, ctx, ctx.currentPlayer));
        }

        return {
          // Game state at this node.
          state: state,
          // Parent of the node.
          parent: parent,
          // Move used to get to this node.
          parentAction: parentAction,
          // Unexplored actions.
          actions: actions,
          // Current objectives.
          objectives: objectives,
          // Children of the node.
          children: [],
          // Number of simulations that pass through this node.
          visits: 0,
          // Number of wins for this node.
          value: 0
        };
      }
    }, {
      key: "select",
      value: function select(node) {
        // This node has unvisited children.
        if (node.actions.length > 0) {
          return node;
        } // This is a terminal node.


        if (node.children.length == 0) {
          return node;
        }

        var selectedChild = null;
        var best = 0.0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;
            var childVisits = child.visits + Number.EPSILON;
            var uct = child.value / childVisits + Math.sqrt(2 * Math.log(node.visits) / childVisits);

            if (selectedChild == null || uct > best) {
              best = uct;
              selectedChild = child;
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

        return this.select(selectedChild);
      }
    }, {
      key: "expand",
      value: function expand(node) {
        var actions = node.actions;

        if (actions.length == 0 || node.state.ctx.gameover !== undefined) {
          return node;
        }

        var id = this.random(actions.length);
        var action = actions[id];
        node.actions.splice(id, 1);
        var childState = this.reducer(node.state, action);
        var childNode = this.createNode({
          state: childState,
          parentAction: action,
          parent: node
        });
        node.children.push(childNode);
        return childNode;
      }
    }, {
      key: "playout",
      value: function playout(node) {
        var _this3 = this;

        var state = node.state;

        var _loop = function _loop(i) {
          var _state = state,
              G = _state.G,
              ctx = _state.ctx;
          var playerID = ctx.currentPlayer;

          if (ctx.activePlayers) {
            playerID = Object.keys(ctx.activePlayers)[0];
          }

          var moves = _this3.enumerate(G, ctx, playerID); // Check if any objectives are met.


          var objectives = _this3.objectives(G, ctx);

          var score = Object.keys(objectives).reduce(function (score, key) {
            var objective = objectives[key];

            if (objective.checker(G, ctx)) {
              return score + objective.weight;
            }

            return score;
          }, 0.0); // If so, stop and return the score.

          if (score > 0) {
            return {
              v: {
                score: score
              }
            };
          }

          if (!moves || moves.length == 0) {
            return {
              v: undefined
            };
          }

          var id = _this3.random(moves.length);

          var childState = _this3.reducer(state, moves[id]);

          state = childState;
        };

        for (var i = 0; i < this.playoutDepth && state.ctx.gameover === undefined; i++) {
          var _ret = _loop();

          if (_typeof(_ret) === "object") return _ret.v;
        }

        return state.ctx.gameover;
      }
    }, {
      key: "backpropagate",
      value: function backpropagate(node) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        node.visits++;

        if (result.score !== undefined) {
          node.value += result.score;
        }

        if (result.draw === true) {
          node.value += 0.5;
        }

        if (node.parentAction && result.winner === node.parentAction.payload.playerID) {
          node.value++;
        }

        if (node.parent) {
          this.backpropagate(node.parent, result);
        }
      }
    }, {
      key: "play",
      value: function play(state, playerID) {
        var root = this.createNode({
          state: state,
          playerID: playerID
        });

        for (var i = 0; i < this.iterations; i++) {
          var leaf = this.select(root);
          var child = this.expand(leaf);
          var result = this.playout(child);
          this.backpropagate(child, result);
        }

        var selectedChild = null;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = root.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _child = _step2.value;

            if (selectedChild == null || _child.visits > selectedChild.visits) {
              selectedChild = _child;
            }
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

        var action = selectedChild && selectedChild.parentAction;
        var metadata = root;
        return {
          action: action,
          metadata: metadata
        };
      }
    }]);

    return MCTSBot;
  }(Bot);

  /*
   * Copyright 2018 The boardgame.io Authors
   *
   * Use of this source code is governed by a MIT-style
   * license that can be found in the LICENSE file or at
   * https://opensource.org/licenses/MIT.
   */
  function AI(_ref) {
    var bot = _ref.bot,
        enumerate = _ref.enumerate,
        visualize = _ref.visualize;

    if (!bot) {
      bot = MCTSBot;
    }

    return {
      bot: bot,
      enumerate: enumerate,
      visualize: visualize
    };
  }

  exports.AI = AI;
  exports.MCTSBot = MCTSBot;
  exports.RandomBot = RandomBot;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
