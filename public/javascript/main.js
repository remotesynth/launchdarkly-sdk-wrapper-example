(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/launchdarkly-js-client-sdk/dist/ldclient.cjs.js
  var require_ldclient_cjs = __commonJS({
    "node_modules/launchdarkly-js-client-sdk/dist/ldclient.cjs.js"(exports) {
      "use strict";
      function e(n2) {
        return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        })(n2);
      }
      function n(e2, n2, t2) {
        return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
      }
      function t(n2, e2) {
        var t2 = Object.keys(n2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(n2);
          e2 && (r2 = r2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(n2, e3).enumerable;
          })), t2.push.apply(t2, r2);
        }
        return t2;
      }
      function r(r2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var o2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? t(o2, true).forEach(function(e3) {
            n(r2, e3, o2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(o2)) : t(o2).forEach(function(e3) {
            Object.defineProperty(r2, e3, Object.getOwnPropertyDescriptor(o2, e3));
          });
        }
        return r2;
      }
      function i(e2) {
        return function(e3) {
          if (Array.isArray(e3)) {
            for (var n2 = 0, t2 = new Array(e3.length); n2 < e3.length; n2++)
              t2[n2] = e3[n2];
            return t2;
          }
        }(e2) || function(e3) {
          if (Symbol.iterator in Object(e3) || Object.prototype.toString.call(e3) === "[object Arguments]")
            return Array.from(e3);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function o(e2) {
        function n2(e3, n3) {
          Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.message = e3, this.code = n3;
        }
        return (n2.prototype = new Error()).name = e2, n2.prototype.constructor = n2;
      }
      Object.defineProperty(exports, "__esModule", { value: true });
      var a = o("LaunchDarklyUnexpectedResponseError");
      var u = o("LaunchDarklyInvalidEnvironmentIdError");
      var s = o("LaunchDarklyInvalidUserError");
      var c = o("LaunchDarklyInvalidEventKeyError");
      var l = o("LaunchDarklyInvalidArgumentError");
      var f = o("LaunchDarklyFlagFetchError");
      var v = o("LaunchDarklyInvalidDataError");
      function d(e2) {
        return !(400 <= e2 && e2 < 500) || e2 === 400 || e2 === 408 || e2 === 429;
      }
      for (g = Object.freeze({ __proto__: null, LDUnexpectedResponseError: a, LDInvalidEnvironmentIdError: u, LDInvalidUserError: s, LDInvalidEventKeyError: c, LDInvalidArgumentError: l, LDFlagFetchError: f, LDInvalidDataError: v, isHttpErrorRecoverable: d }), p = function(e2) {
        for (var n2, t2 = e2.length, r2 = t2 % 3, o2 = [], i2 = 0, a2 = t2 - r2; i2 < a2; i2 += 16383)
          o2.push(E(e2, i2, a2 < i2 + 16383 ? a2 : i2 + 16383));
        return r2 == 1 ? (n2 = e2[t2 - 1], o2.push(m[n2 >> 2] + m[n2 << 4 & 63] + "==")) : r2 == 2 && (n2 = (e2[t2 - 2] << 8) + e2[t2 - 1], o2.push(m[n2 >> 10] + m[n2 >> 4 & 63] + m[n2 << 2 & 63] + "=")), o2.join("");
      }, m = [], y = [], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = 0, k = h.length; b < k; ++b)
        m[b] = h[b], y[h.charCodeAt(b)] = b;
      var g;
      var p;
      var m;
      var y;
      var h;
      var b;
      var k;
      function E(e2, n2, t2) {
        for (var r2, o2, i2 = [], a2 = n2; a2 < t2; a2 += 3)
          r2 = (e2[a2] << 16 & 16711680) + (e2[a2 + 1] << 8 & 65280) + (255 & e2[a2 + 2]), i2.push(m[(o2 = r2) >> 18 & 63] + m[o2 >> 12 & 63] + m[o2 >> 6 & 63] + m[63 & o2]);
        return i2.join("");
      }
      y["-".charCodeAt(0)] = 62, y["_".charCodeAt(0)] = 63;
      var w = Array.isArray;
      var D = Object.keys;
      var O = Object.prototype.hasOwnProperty;
      var P = ["key", "secondary", "ip", "country", "email", "firstName", "lastName", "avatar", "name"];
      function S(e2) {
        var n2 = unescape(encodeURIComponent(e2));
        return p(function(e3) {
          for (var n3 = [], t2 = 0; t2 < e3.length; t2++)
            n3.push(e3.charCodeAt(t2));
          return n3;
        }(n2));
      }
      function U(e2) {
        return S(e2).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function I(e2) {
        return JSON.parse(JSON.stringify(e2));
      }
      function j(e2, n2) {
        return function e3(n3, t2) {
          if (n3 === t2)
            return true;
          if (n3 && t2 && typeof n3 == "object" && typeof t2 == "object") {
            var r2, o2, i2, a2 = w(n3), u2 = w(t2);
            if (a2 && u2) {
              if ((o2 = n3.length) != t2.length)
                return false;
              for (r2 = o2; r2-- != 0; )
                if (!e3(n3[r2], t2[r2]))
                  return false;
              return true;
            }
            if (a2 != u2)
              return false;
            var s2 = n3 instanceof Date, c2 = t2 instanceof Date;
            if (s2 != c2)
              return false;
            if (s2 && c2)
              return n3.getTime() == t2.getTime();
            var l2 = n3 instanceof RegExp, f2 = t2 instanceof RegExp;
            if (l2 != f2)
              return false;
            if (l2 && f2)
              return n3.toString() == t2.toString();
            var d2 = D(n3);
            if ((o2 = d2.length) !== D(t2).length)
              return false;
            for (r2 = o2; r2-- != 0; )
              if (!O.call(t2, d2[r2]))
                return false;
            for (r2 = o2; r2-- != 0; )
              if (!e3(n3[i2 = d2[r2]], t2[i2]))
                return false;
            return true;
          }
          return n3 != n3 && t2 != t2;
        }(e2, n2);
      }
      function R(e2) {
        setTimeout(e2, 0);
      }
      function T(e2, n2) {
        var t2 = e2.then(function(e3) {
          return n2 && setTimeout(function() {
            n2(null, e3);
          }, 0), e3;
        }, function(e3) {
          if (!n2)
            return Promise.reject(e3);
          setTimeout(function() {
            n2(e3, null);
          }, 0);
        });
        return n2 ? void 0 : t2;
      }
      function L(e2) {
        var n2 = {};
        for (var t2 in e2)
          V(e2, t2) && (n2[t2] = { value: e2[t2], version: 0 });
        return n2;
      }
      function F(e2) {
        var n2 = {};
        for (var t2 in e2)
          V(e2, t2) && (n2[t2] = e2[t2].value);
        return n2;
      }
      function N(e2, n2) {
        for (var t2, r2 = n2.slice(0), o2 = [], i2 = e2; 0 < r2.length; ) {
          for (t2 = []; 0 < i2; ) {
            var a2 = r2.shift();
            if (!a2)
              break;
            (i2 -= U(JSON.stringify(a2)).length) < 0 && 0 < t2.length ? r2.unshift(a2) : t2.push(a2);
          }
          i2 = e2, o2.push(t2);
        }
        return o2;
      }
      function A(e2) {
        var n2 = e2.version || "3.5.1";
        return e2.userAgent + "/" + n2;
      }
      function C(e2, n2) {
        if (n2 && !n2.sendLDHeaders)
          return {};
        var t2 = { "X-LaunchDarkly-User-Agent": A(e2) };
        return n2 && n2.wrapperName && (t2["X-LaunchDarkly-Wrapper"] = n2.wrapperVersion ? n2.wrapperName + "/" + n2.wrapperVersion : n2.wrapperName), t2;
      }
      function x(e2, n2) {
        return n2 && n2.requestHeaderTransform ? n2.requestHeaderTransform(r({}, e2)) : e2;
      }
      function q() {
        for (var e2 = arguments.length, n2 = new Array(e2), t2 = 0; t2 < e2; t2++)
          n2[t2] = arguments[t2];
        return n2.reduce(function(e3, n3) {
          return r({}, e3, {}, n3);
        }, {});
      }
      function V(e2, n2) {
        return Object.prototype.hasOwnProperty.call(e2, n2);
      }
      function _(e2) {
        if (!e2)
          return e2;
        var n2;
        for (var t2 in P) {
          var o2 = P[t2], i2 = e2[o2];
          i2 !== void 0 && typeof i2 != "string" && ((n2 = n2 || r({}, e2))[o2] = String(i2));
        }
        return n2 || e2;
      }
      for (z = Object.freeze({ __proto__: null, btoa: S, base64URLEncode: U, clone: I, deepEquals: j, onNextTick: R, wrapPromiseCallback: T, transformValuesToVersionedValues: L, transformVersionedValuesToValues: F, chunkUserEventsForUrl: N, getLDUserAgentString: A, getLDHeaders: C, transformHeaders: x, extend: q, objectHasOwnProperty: V, sanitizeUser: _ }), J = function(e2, n2) {
        return function(e3) {
          var n3 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
          if (n3) {
            var t2 = new Uint8Array(16);
            e3.exports = function() {
              return n3(t2), t2;
            };
          } else {
            var r2 = new Array(16);
            e3.exports = function() {
              for (var e4, n4 = 0; n4 < 16; n4++)
                (3 & n4) == 0 && (e4 = 4294967296 * Math.random()), r2[n4] = e4 >>> ((3 & n4) << 3) & 255;
              return r2;
            };
          }
        }(n2 = { exports: {} }), n2.exports;
      }(), M = [], K = 0; K < 256; ++K)
        M[K] = (K + 256).toString(16).substr(1);
      var z;
      var J;
      var M;
      var K;
      var H;
      var B;
      var $ = function(e2, n2) {
        var t2 = n2 || 0, r2 = M;
        return [r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]], "-", r2[e2[t2++]], r2[e2[t2++]], "-", r2[e2[t2++]], r2[e2[t2++]], "-", r2[e2[t2++]], r2[e2[t2++]], "-", r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]], r2[e2[t2++]]].join("");
      };
      var G = 0;
      var X = 0;
      var W = function(e2, n2, t2) {
        var r2 = n2 && t2 || 0, o2 = n2 || [], i2 = (e2 = e2 || {}).node || H, a2 = e2.clockseq !== void 0 ? e2.clockseq : B;
        if (i2 == null || a2 == null) {
          var u2 = J();
          i2 == null && (i2 = H = [1 | u2[0], u2[1], u2[2], u2[3], u2[4], u2[5]]), a2 == null && (a2 = B = 16383 & (u2[6] << 8 | u2[7]));
        }
        var s2 = e2.msecs !== void 0 ? e2.msecs : new Date().getTime(), c2 = e2.nsecs !== void 0 ? e2.nsecs : X + 1, l2 = s2 - G + (c2 - X) / 1e4;
        if (l2 < 0 && e2.clockseq === void 0 && (a2 = a2 + 1 & 16383), (l2 < 0 || G < s2) && e2.nsecs === void 0 && (c2 = 0), 1e4 <= c2)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        G = s2, B = a2;
        var f2 = (1e4 * (268435455 & (s2 += 122192928e5)) + (X = c2)) % 4294967296;
        o2[r2++] = f2 >>> 24 & 255, o2[r2++] = f2 >>> 16 & 255, o2[r2++] = f2 >>> 8 & 255, o2[r2++] = 255 & f2;
        var d2 = s2 / 4294967296 * 1e4 & 268435455;
        o2[r2++] = d2 >>> 8 & 255, o2[r2++] = 255 & d2, o2[r2++] = d2 >>> 24 & 15 | 16, o2[r2++] = d2 >>> 16 & 255, o2[r2++] = a2 >>> 8 | 128, o2[r2++] = 255 & a2;
        for (var v2 = 0; v2 < 6; ++v2)
          o2[r2 + v2] = i2[v2];
        return n2 || $(o2);
      };
      function Q(u2, e2, s2) {
        var t2 = "/a/" + e2 + ".gif", c2 = q({ "Content-Type": "application/json" }, C(u2, s2)), l2 = u2.httpFallbackPing, f2 = { sendChunk: function(e3, r2, o2, n2) {
          var i2 = JSON.stringify(e3), a2 = o2 ? null : W();
          return n2 ? function n3(t3) {
            var e4 = o2 ? c2 : q({}, c2, { "X-LaunchDarkly-Event-Schema": "3", "X-LaunchDarkly-Payload-ID": a2 });
            return u2.httpRequest("POST", r2, x(e4, s2), i2).promise.then(function(e5) {
              if (e5)
                return 400 <= e5.status && d(e5.status) && t3 ? n3(false) : function(e6) {
                  var n4 = { status: e6.status }, t4 = e6.header("date");
                  if (t4) {
                    var r3 = Date.parse(t4);
                    r3 && (n4.serverTime = r3);
                  }
                  return n4;
                }(e5);
            }).catch(function() {
              return t3 ? n3(false) : Promise.reject();
            });
          }(true).catch(function() {
          }) : (l2 && l2(r2 + t2 + "?d=" + U(i2)), Promise.resolve());
        }, sendEvents: function(e3, n2, t3) {
          if (!u2.httpRequest)
            return Promise.resolve();
          var r2, o2 = u2.httpAllowsPost();
          r2 = o2 ? [e3] : N(2e3 - n2.length, e3);
          for (var i2 = [], a2 = 0; a2 < r2.length; a2++)
            i2.push(f2.sendChunk(r2[a2], n2, t3, o2));
          return Promise.all(i2);
        } };
        return f2;
      }
      function Y() {
        var e2 = {}, a2 = 0, u2 = 0, s2 = {};
        return e2.summarizeEvent = function(e3) {
          if (e3.kind === "feature") {
            var n2 = e3.key + ":" + (e3.variation !== null && e3.variation !== void 0 ? e3.variation : "") + ":" + (e3.version !== null && e3.version !== void 0 ? e3.version : ""), t2 = s2[n2];
            t2 ? t2.count = t2.count + 1 : s2[n2] = { count: 1, key: e3.key, variation: e3.variation, version: e3.version, value: e3.value, default: e3.default }, (a2 === 0 || e3.creationDate < a2) && (a2 = e3.creationDate), e3.creationDate > u2 && (u2 = e3.creationDate);
          }
        }, e2.getSummary = function() {
          var e3 = {}, n2 = true;
          for (var t2 in s2) {
            var r2 = s2[t2], o2 = e3[r2.key];
            o2 || (o2 = { default: r2.default, counters: [] }, e3[r2.key] = o2);
            var i2 = { value: r2.value, count: r2.count };
            r2.variation !== void 0 && r2.variation !== null && (i2.variation = r2.variation), r2.version ? i2.version = r2.version : i2.unknown = true, o2.counters.push(i2), n2 = false;
          }
          return n2 ? null : { startDate: a2, endDate: u2, features: e3 };
        }, e2.clearSummary = function() {
          u2 = a2 = 0, s2 = {};
        }, e2;
      }
      function Z(e2) {
        var n2 = {}, s2 = e2.allAttributesPrivate, c2 = e2.privateAttributeNames || [], l2 = { key: true, custom: true, anonymous: true }, f2 = { key: true, secondary: true, ip: true, country: true, email: true, firstName: true, lastName: true, avatar: true, name: true, anonymous: true, custom: true };
        return n2.filterUser = function(e3) {
          if (!e3)
            return null;
          function n3(o3, i3) {
            return Object.keys(o3).reduce(function(e4, n4) {
              var t3, r3 = e4;
              return i3(n4) && (l2[t3 = n4] || !s2 && a2.indexOf(t3) === -1 && c2.indexOf(t3) === -1 ? r3[0][n4] = o3[n4] : r3[1][n4] = true), r3;
            }, [{}, {}]);
          }
          var a2 = e3.privateAttributeNames || [], t2 = n3(e3, function(e4) {
            return f2[e4];
          }), r2 = t2[0], o2 = t2[1];
          if (e3.custom) {
            var i2 = n3(e3.custom, function() {
              return true;
            });
            r2.custom = i2[0], o2 = q({}, o2, i2[1]);
          }
          var u2 = Object.keys(o2);
          return u2.length && (u2.sort(), r2.privateAttrs = u2), r2;
        }, n2;
      }
      function ee(e2) {
        return e2 && e2.message ? e2.message : typeof e2 == "string" || e2 instanceof String ? e2 : JSON.stringify(e2);
      }
      var ne = function() {
        return "LaunchDarkly client initialized";
      };
      var te = " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.";
      var re = function() {
        return "Exceeded event queue capacity. Increase capacity to avoid dropping events.";
      };
      var ie = function() {
        return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript";
      };
      var oe = function(e2) {
        return 'Expected application/json content type but got "' + e2 + '"';
      };
      var ae = function(e2) {
        return "local storage is unavailable: " + ee(e2);
      };
      var ue = function(e2) {
        return "network error" + (e2 ? " (" + e2 + ")" : "");
      };
      var se = function(e2) {
        return 'Custom event "' + e2 + '" does not exist';
      };
      var ce = function() {
        return "Environment not found. Double check that you specified a valid environment/client-side ID." + te;
      };
      var le = function() {
        return "No environment/client-side ID was specified." + te;
      };
      var fe = function(e2) {
        return "Error fetching flag settings: " + ee(e2);
      };
      var ve = function() {
        return "No user specified." + te;
      };
      var de = function() {
        return "Invalid user specified." + te;
      };
      var ge = function() {
        return "Invalid data received from LaunchDarkly; connection may have been interrupted";
      };
      var pe = function() {
        return "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." + te;
      };
      var me = function() {
        return "LaunchDarkly bootstrap data is not available because the back end could not read the flags.";
      };
      var ye = function(e2, n2) {
        return n2 ? '"' + e2 + '" is deprecated, please use "' + n2 + '"' : '"' + e2 + '" is deprecated';
      };
      var he = function(e2, n2, t2) {
        return "Received error " + e2 + (e2 === 401 ? " (invalid SDK key)" : "") + " for " + n2 + " - " + (d(e2) ? t2 : "giving up permanently");
      };
      var be = function() {
        return "Cannot make HTTP requests in this environment." + te;
      };
      var ke = function() {
        return "identify() has no effect here; it must be called on the main client instance";
      };
      var Ee = function() {
        return "Closing stream connection";
      };
      var we = function(e2) {
        return "Opening stream connection to " + e2;
      };
      var De = function(e2, n2) {
        return "Error on stream connection: " + ee(e2) + ", will continue retrying every " + n2 + " milliseconds.";
      };
      var Oe = function(e2) {
        return 'Ignoring unknown config option "' + e2 + '"';
      };
      var Pe = function(e2, n2, t2) {
        return 'Config option "' + e2 + '" should be of type ' + n2 + ", got " + t2 + ", using default value";
      };
      var Se = function(e2, n2) {
        return 'Config option "' + e2 + '" should be a boolean, got ' + n2 + ", converting to boolean";
      };
      var Ue = function(e2, n2, t2) {
        return 'Config option "' + e2 + '" was set to ' + n2 + ", changing to minimum value of " + t2;
      };
      var Ie = function(e2) {
        return "polling for feature flags at " + e2;
      };
      var je = function() {
        return "received ping message from stream";
      };
      var Re = function() {
        return "received streaming update for all flags";
      };
      var Te = function(e2) {
        return 'received streaming update for flag "' + e2 + '"';
      };
      var Le = function(e2) {
        return 'received streaming update for flag "' + e2 + '" but ignored due to version check';
      };
      var Fe = function(e2) {
        return 'received streaming deletion for flag "' + e2 + '"';
      };
      var Ne = function(e2) {
        return 'received streaming deletion for flag "' + e2 + '" but ignored due to version check';
      };
      var Ae = function(e2) {
        return 'enqueueing "' + e2 + '" event';
      };
      var Ce = function(e2) {
        return "sending " + e2 + " events";
      };
      var xe = Object.freeze({ __proto__: null, clientInitialized: ne, clientNotReady: function() {
        return "LaunchDarkly client is not ready";
      }, eventCapacityExceeded: re, eventWithoutUser: ie, invalidContentType: oe, invalidKey: function() {
        return "Event key must be a string";
      }, localStorageUnavailable: ae, networkError: ue, unknownCustomEventKey: se, environmentNotFound: ce, environmentNotSpecified: le, errorFetchingFlags: fe, userNotSpecified: ve, invalidUser: de, invalidData: ge, bootstrapOldFormat: pe, bootstrapInvalid: me, deprecated: ye, httpErrorMessage: he, httpUnavailable: be, identifyDisabled: ke, streamClosing: Ee, streamConnecting: we, streamError: De, unknownOption: Oe, wrongOptionType: Pe, wrongOptionTypeBoolean: Se, optionBelowMinimum: Ue, debugPolling: Ie, debugStreamPing: je, debugStreamPut: Re, debugStreamPatch: Te, debugStreamPatchIgnored: Le, debugStreamDelete: Fe, debugStreamDeleteIgnored: Ne, debugEnqueueingEvent: Ae, debugPostingEvents: Ce, debugPostingDiagnosticEvent: function(e2) {
        return "sending diagnostic event (" + e2.kind + ")";
      } });
      function qe(n2) {
        var e2 = {}, o2 = {};
        return e2.on = function(e3, n3, t2) {
          o2[e3] = o2[e3] || [], o2[e3] = o2[e3].concat({ handler: n3, context: t2 });
        }, e2.off = function(e3, n3, t2) {
          if (o2[e3])
            for (var r2 = 0; r2 < o2[e3].length; r2++)
              o2[e3][r2].handler === n3 && o2[e3][r2].context === t2 && (o2[e3] = o2[e3].slice(0, r2).concat(o2[e3].slice(r2 + 1)));
        }, e2.emit = function(e3) {
          if (o2[e3])
            for (var n3 = o2[e3].slice(0), t2 = 0; t2 < n3.length; t2++)
              n3[t2].handler.apply(n3[t2].context, Array.prototype.slice.call(arguments, 1));
        }, e2.getEvents = function() {
          return Object.keys(o2);
        }, e2.getEventListenerCount = function(e3) {
          return o2[e3] ? o2[e3].length : 0;
        }, e2.maybeReportError = function(e3) {
          e3 && (o2.error ? this.emit("error", e3) : (n2 || console).error(e3.message));
        }, e2;
      }
      var Ve = function(r2) {
        var n2 = false, t2 = false, o2 = null, e2 = null, i2 = new Promise(function(n3) {
          r2.on("ready", function e3() {
            r2.off("ready", e3), n3();
          });
        }).catch(function() {
        });
        return { getInitializationPromise: function() {
          return e2 || (n2 ? Promise.resolve() : t2 ? Promise.reject(o2) : e2 = new Promise(function(n3, t3) {
            r2.on("initialized", function e3() {
              r2.off("initialized", e3), n3();
            }), r2.on("failed", function e3(n4) {
              r2.off("failed", e3), t3(n4);
            });
          }));
        }, getReadyPromise: function() {
          return i2;
        }, signalSuccess: function() {
          n2 || t2 || (n2 = true, r2.emit("initialized"), r2.emit("ready"));
        }, signalFailure: function(e3) {
          n2 || t2 || (t2 = true, o2 = e3, r2.emit("failed", e3), r2.emit("ready")), r2.maybeReportError(e3);
        } };
      };
      function _e(t2, r2, o2, i2) {
        var a2 = {};
        function u2() {
          var e2 = "", n2 = i2.getUser();
          return n2 && (e2 = o2 || S(JSON.stringify(n2))), "ld:" + r2 + ":" + e2;
        }
        return a2.loadFlags = function() {
          return t2.get(u2()).then(function(e2) {
            if (e2 == null)
              return null;
            try {
              var n2 = JSON.parse(e2);
              if (n2) {
                var t3 = n2.$schema;
                t3 === void 0 || t3 < 1 ? n2 = L(n2) : delete n2.$schema;
              }
              return n2;
            } catch (e3) {
              return a2.clearFlags().then(function() {
                return null;
              });
            }
          });
        }, a2.saveFlags = function(e2) {
          var n2 = q({}, e2, { $schema: 1 });
          return t2.set(u2(), JSON.stringify(n2));
        }, a2.clearFlags = function() {
          return t2.clear(u2());
        }, a2;
      }
      function ze(o2, i2, a2, n2) {
        var u2, s2 = i2.streamUrl, c2 = i2.logger, e2 = {}, l2 = s2 + "/eval/" + a2, f2 = i2.useReport, d2 = i2.evaluationReasons, t2 = i2.streamReconnectDelay, v2 = C(o2, i2), g2 = false, p2 = null, m2 = null, h2 = null, y2 = null, w2 = null;
        function b2(e3) {
          g2 || (c2.warn(De(e3, t2)), g2 = true), S2(false), E2(), k2(t2);
        }
        function k2(e3) {
          m2 || (e3 ? m2 = setTimeout(r2, e3) : r2());
        }
        function r2() {
          var e3;
          m2 = null;
          var n3 = "", t3 = { headers: v2, readTimeoutMillis: 3e5 };
          if (o2.eventSourceFactory) {
            for (var r3 in y2 != null && (n3 = "h=" + y2), f2 ? o2.eventSourceAllowsReport ? (e3 = l2, t3.method = "REPORT", t3.headers["Content-Type"] = "application/json", t3.body = JSON.stringify(h2)) : (e3 = s2 + "/ping/" + a2, n3 = "") : e3 = l2 + "/" + U(JSON.stringify(h2)), t3.headers = x(t3.headers, i2), d2 && (n3 = n3 + (n3 ? "&" : "") + "withReasons=true"), e3 = e3 + (n3 ? "?" : "") + n3, E2(), c2.info(we(e3)), u2 = new Date().getTime(), p2 = o2.eventSourceFactory(e3, t3), w2)
              V(w2, r3) && p2.addEventListener(r3, w2[r3]);
            p2.onerror = b2;
          }
        }
        function E2() {
          p2 && (c2.info("Closing stream connection"), p2.close(), p2 = null);
        }
        function S2(e3) {
          u2 && n2 && n2.recordStreamInit(u2, !e3, new Date().getTime() - u2), u2 = null;
        }
        return e2.connect = function(e3, n3, t3) {
          h2 = e3, y2 = n3, w2 = {};
          function r3(n4) {
            w2[n4] = function(e4) {
              S2(!(g2 = false)), t3[n4] && t3[n4](e4);
            };
          }
          for (var o3 in t3 || {})
            r3(o3);
          k2();
        }, e2.disconnect = function() {
          clearTimeout(m2), m2 = null, E2();
        }, e2.isConnected = function() {
          return !!(p2 && o2.eventSourceIsActive && o2.eventSourceIsActive(p2));
        }, e2;
      }
      function Je(p2, m2, a2) {
        var s2 = m2.baseUrl, c2 = m2.useReport, l2 = m2.evaluationReasons, d2 = m2.logger, e2 = {}, h2 = {};
        function v2(e3, n2) {
          if (!p2.httpRequest)
            return new Promise(function(e4, n3) {
              n3(new f(be()));
            });
          var t2 = n2 ? "REPORT" : "GET", r2 = C(p2, m2);
          n2 && (r2["Content-Type"] = "application/json");
          var o2, i2, a3, s3, c3, l3, d3 = h2[e3];
          d3 || (o2 = function() {
            delete h2[e3];
          }, (l3 = { addPromise: function(n3, e4) {
            i2 = n3, a3 && a3(), a3 = e4, n3.then(function(e5) {
              i2 === n3 && (s3(e5), o2());
            }, function(e5) {
              i2 === n3 && (c3(e5), o2());
            });
          } }).resultPromise = new Promise(function(e4, n3) {
            s3 = e4, c3 = n3;
          }), d3 = l3, h2[e3] = d3);
          var v3 = p2.httpRequest(t2, e3, x(r2, m2), n2), g2 = v3.promise.then(function(e4) {
            if (e4.status !== 200)
              return Promise.reject((n3 = e4).status === 404 ? new u(ce()) : new f(fe(n3.statusText || String(n3.status))));
            if (e4.header("content-type") && e4.header("content-type").substring(0, "application/json".length) === "application/json")
              return JSON.parse(e4.body);
            var n3, t3 = oe(e4.header("content-type") || "");
            return Promise.reject(new f(t3));
          }, function(e4) {
            return Promise.reject(new f(ue(e4)));
          });
          return d3.addPromise(g2, function() {
            v3.cancel && v3.cancel();
          }), d3.resultPromise;
        }
        return e2.fetchJSON = function(e3) {
          return v2(s2 + e3, null);
        }, e2.fetchFlagSettings = function(e3, n2) {
          var t2, r2, o2, i2 = "";
          return c2 ? (r2 = [s2, "/sdk/evalx/", a2, "/user"].join(""), o2 = JSON.stringify(e3)) : (t2 = U(JSON.stringify(e3)), r2 = [s2, "/sdk/evalx/", a2, "/users/", t2].join("")), n2 && (i2 = "h=" + n2), l2 && (i2 = i2 + (i2 ? "&" : "") + "withReasons=true"), r2 = r2 + (i2 ? "?" : "") + i2, d2.debug(Ie(r2)), v2(r2, o2);
        }, e2;
      }
      function Me(o2) {
        var e2 = {};
        return e2.validateUser = function(e3) {
          if (!e3)
            return Promise.reject(new s(ve()));
          var r2 = I(e3);
          return r2.key !== null && r2.key !== void 0 ? (r2.key = r2.key.toString(), Promise.resolve(r2)) : r2.anonymous ? o2.get("ld:$anonUserId").then(function(e4) {
            if (e4)
              return r2.key = e4, r2;
            var n2, t2 = W();
            return r2.key = t2, (n2 = t2, o2.set("ld:$anonUserId", n2)).then(function() {
              return r2;
            });
          }) : Promise.reject(new s(de()));
        }, e2;
      }
      var Ke = ["debug", "info", "warn", "error", "none"];
      function He(e2, u2) {
        if (e2 && e2.destination && typeof e2.destination != "function")
          throw new Error("destination for basicLogger was set to a non-function");
        function n2(n3) {
          return function(e3) {
            console && console[n3] && console[n3].call(console, e3);
          };
        }
        var s2 = e2 && e2.destination ? [e2.destination, e2.destination, e2.destination, e2.destination] : [n2("log"), n2("info"), n2("warn"), n2("error")], c2 = !(!e2 || !e2.destination), l2 = e2 && e2.prefix !== void 0 && e2.prefix !== null ? e2.prefix : "[LaunchDarkly] ", r2 = 1;
        if (e2 && e2.level)
          for (var t2 = 0; t2 < Ke.length; t2++)
            Ke[t2] === e2.level && (r2 = t2);
        for (var o2 = {}, a2 = function(e3) {
          var n3 = Ke[e3];
          if (n3 !== "none")
            if (e3 < r2)
              o2[n3] = function() {
              };
            else {
              var t3 = e3;
              o2[n3] = function() {
                !function(e4, n4, t4) {
                  if (!(t4.length < 1)) {
                    var r3, o3 = c2 ? n4 + ": " + l2 : l2;
                    if (t4.length !== 1 && u2) {
                      var a3 = i(t4);
                      a3[0] = o3 + a3[0], r3 = u2.apply(void 0, i(a3));
                    } else
                      r3 = o3 + t4[0];
                    try {
                      s2[e4](r3);
                    } catch (e5) {
                      console && console.log && console.log("[LaunchDarkly] Configured logger's " + n4 + " method threw an exception: " + e5);
                    }
                  }
                }(t3, n3, arguments);
              };
            }
        }, f2 = 0; f2 < Ke.length; f2++)
          a2(f2);
        return o2;
      }
      function Be(e2, n2) {
        return He({ level: e2, prefix: n2 });
      }
      var $e = { baseUrl: { default: "https://app.launchdarkly.com" }, streamUrl: { default: "https://clientstream.launchdarkly.com" }, eventsUrl: { default: "https://events.launchdarkly.com" }, sendEvents: { default: true }, streaming: { type: "boolean" }, sendLDHeaders: { default: true }, requestHeaderTransform: { type: "function" }, inlineUsersInEvents: { default: false }, allowFrequentDuplicateEvents: { default: false }, sendEventsOnlyForVariation: { default: false }, useReport: { default: false }, evaluationReasons: { default: false }, eventCapacity: { default: 100, minimum: 1 }, flushInterval: { default: 2e3, minimum: 2e3 }, samplingInterval: { default: 0, minimum: 0 }, streamReconnectDelay: { default: 1e3, minimum: 0 }, allAttributesPrivate: { default: false }, privateAttributeNames: { default: [] }, bootstrap: { type: "string|object" }, diagnosticRecordingInterval: { default: 9e5, minimum: 2e3 }, diagnosticOptOut: { default: false }, wrapperName: { type: "string" }, wrapperVersion: { type: "string" }, stateProvider: { type: "object" }, autoAliasingOptOut: { default: false } };
      function Ge(n2, t2, r2, o2) {
        var a2 = q({ logger: { default: o2 } }, $e, r2), i2 = { all_attributes_private: "allAttributesPrivate", private_attribute_names: "privateAttributeNames", samplingInterval: null };
        function u2(e2) {
          R(function() {
            t2 && t2.maybeReportError(new l(e2));
          });
        }
        var s2, c2, f2, d2, v2, g2 = q({}, n2 || {});
        return v2 = g2, Object.keys(i2).forEach(function(e2) {
          if (v2[e2] !== void 0) {
            var n3 = i2[e2];
            o2 && o2.warn(ye(e2, n3)), n3 && (v2[n3] === void 0 && (v2[n3] = v2[e2]), delete v2[e2]);
          }
        }), s2 = (d2 = q({}, g2), Object.keys(a2).forEach(function(e2) {
          d2[e2] !== void 0 && d2[e2] !== null || (d2[e2] = a2[e2] && a2[e2].default);
        }), c2 = g2 = d2, f2 = q({}, c2), Object.keys(c2).forEach(function(e2) {
          var n3 = c2[e2];
          if (n3 != null) {
            var t3 = a2[e2];
            if (t3 === void 0)
              u2(Oe(e2));
            else {
              var r3 = t3.type || p2(t3.default);
              if (r3 !== "any") {
                var o3 = r3.split("|"), i3 = p2(n3);
                o3.indexOf(i3) < 0 ? r3 === "boolean" ? (f2[e2] = !!n3, u2(Se(e2, i3))) : (u2(Pe(e2, r3, i3)), f2[e2] = t3.default) : i3 === "number" && t3.minimum !== void 0 && n3 < t3.minimum && (u2(Ue(e2, n3, t3.minimum)), f2[e2] = t3.minimum);
              }
            }
          }
        }), g2 = f2).logger, Ke.forEach(function(e2) {
          if (e2 !== "none" && (!s2[e2] || typeof s2[e2] != "function"))
            throw new Error("Provided logger instance must support logger." + e2 + "(...) method");
        }), g2;
        function p2(n3) {
          if (n3 === null)
            return "any";
          if (n3 !== void 0) {
            if (Array.isArray(n3))
              return "array";
            var t3 = e(n3);
            return t3 === "boolean" || t3 === "string" || t3 === "number" || t3 === "function" ? t3 : "object";
          }
        }
      }
      var Xe = Object.freeze({ __proto__: null, baseOptionDefs: $e, validate: Ge }).baseOptionDefs;
      var We = function(e2) {
        var n2 = { diagnosticId: W() };
        return e2 && (n2.sdkKeySuffix = 6 < e2.length ? e2.substring(e2.length - 6) : e2), n2;
      };
      var Qe = function(e2) {
        var n2, t2, r2, o2;
        function i2(e3) {
          n2 = e3, r2 = t2 = 0, o2 = [];
        }
        return i2(e2), { getProps: function() {
          return { dataSinceDate: n2, droppedEvents: t2, eventsInLastBatch: r2, streamInits: o2 };
        }, setProps: function(e3) {
          n2 = e3.dataSinceDate, t2 = e3.droppedEvents || 0, r2 = e3.eventsInLastBatch || 0, o2 = e3.streamInits || [];
        }, incrementDroppedEvents: function() {
          t2++;
        }, setEventsInLastBatch: function(e3) {
          r2 = e3;
        }, recordStreamInit: function(e3, n3, t3) {
          var r3 = { timestamp: e3, failed: n3, durationMillis: t3 };
          o2.push(r3);
        }, reset: i2 };
      };
      var Ye = function(n2, o2, e2, t2, i2, a2, u2) {
        var s2, c2, l2 = !!n2.diagnosticUseCombinedEvent, f2 = "ld:" + i2 + ":$diagnostics", d2 = a2.eventsUrl + "/events/diagnostic/" + i2, v2 = a2.diagnosticRecordingInterval, g2 = e2, p2 = !!a2.streaming, m2 = {};
        function h2() {
          return { sdk: function() {
            var e4 = r({}, n2.diagnosticSdkData);
            return a2.wrapperName && (e4.wrapperName = a2.wrapperName), a2.wrapperVersion && (e4.wrapperVersion = a2.wrapperVersion), e4;
          }(), configuration: (e3 = { customBaseURI: a2.baseUrl !== Xe.baseUrl.default, customStreamURI: a2.streamUrl !== Xe.streamUrl.default, customEventsURI: a2.eventsUrl !== Xe.eventsUrl.default, eventsCapacity: a2.eventCapacity, eventsFlushIntervalMillis: a2.flushInterval, reconnectTimeMillis: a2.streamReconnectDelay, streamingDisabled: !p2, allAttributesPrivate: !!a2.allAttributesPrivate, inlineUsersInEvents: !!a2.inlineUsersInEvents, diagnosticRecordingIntervalMillis: a2.diagnosticRecordingInterval, usingSecureMode: !!a2.hash, bootstrapMode: !!a2.bootstrap, fetchGoalsDisabled: !a2.fetchGoals, allowFrequentDuplicateEvents: !!a2.allowFrequentDuplicateEvents, sendEventsOnlyForVariation: !!a2.sendEventsOnlyForVariation, autoAliasingOptOut: !!a2.autoAliasingOptOut }, e3), platform: n2.diagnosticPlatformData };
          var e3;
        }
        function y2(e3) {
          a2.logger && a2.logger.debug(xe.debugPostingDiagnosticEvent(e3)), t2.sendEvents(e3, d2, true).then(function() {
          }).catch(function() {
          });
        }
        function w2() {
          var e3, n3;
          y2((e3 = new Date().getTime(), n3 = r({ kind: l2 ? "diagnostic-combined" : "diagnostic", id: u2, creationDate: e3 }, g2.getProps()), l2 && (n3 = r({}, n3, {}, h2())), g2.reset(e3), n3)), c2 = setTimeout(w2, v2), s2 = new Date().getTime(), l2 && function() {
            if (o2.isEnabled()) {
              var e4 = r({}, g2.getProps());
              o2.set(f2, JSON.stringify(e4));
            }
          }();
        }
        return m2.start = function() {
          l2 ? function(t3) {
            if (!o2.isEnabled())
              return t3(false);
            o2.get(f2).then(function(e3) {
              if (e3)
                try {
                  var n3 = JSON.parse(e3);
                  g2.setProps(n3), s2 = n3.dataSinceDate;
                } catch (e4) {
                }
              t3(true);
            }).catch(function() {
              t3(false);
            });
          }(function(e3) {
            if (e3) {
              var n3 = (s2 || 0) + v2, t3 = new Date().getTime();
              n3 <= t3 ? w2() : c2 = setTimeout(w2, n3 - t3);
            } else
              Math.floor(4 * Math.random()) === 0 ? w2() : c2 = setTimeout(w2, v2);
          }) : (y2(r({ kind: "diagnostic-init", id: u2, creationDate: g2.getProps().dataSinceDate }, h2())), c2 = setTimeout(w2, v2));
        }, m2.stop = function() {
          c2 && clearTimeout(c2);
        }, m2.setStreaming = function(e3) {
          p2 = e3;
        }, m2;
      };
      function Ze(n2, t2, o2, i2, s2) {
        var l2, g2, p2, m2, h2, y2, w2, b2, k2, E2 = o2 && o2.logger ? o2.logger : s2 && s2.logger && s2.logger.default || Be("warn"), S2 = qe(E2), D2 = Ve(S2), O2 = Ge(o2, S2, s2, E2), P2 = O2.sendEvents, U2 = n2, x2 = O2.hash, L2 = (y2 = i2.localStorage, w2 = E2, k2 = !(b2 = {}), b2.isEnabled = function() {
          return !!y2;
        }, b2.get = function(e2) {
          return new Promise(function(n3) {
            y2 ? y2.get(e2).then(n3).catch(function(e3) {
              ie2(e3), n3(void 0);
            }) : n3(void 0);
          });
        }, b2.set = function(e2, t3) {
          return new Promise(function(n3) {
            y2 ? y2.set(e2, t3).then(function() {
              return n3(true);
            }).catch(function(e3) {
              ie2(e3), n3(false);
            }) : n3(false);
          });
        }, b2.clear = function(e2) {
          return new Promise(function(n3) {
            y2 ? y2.clear(e2).then(function() {
              return n3(true);
            }).catch(function(e3) {
              ie2(e3), n3(false);
            }) : n3(false);
          });
        }, b2), C2 = Q(i2, U2, O2), N2 = O2.sendEvents && !O2.diagnosticOptOut, A2 = N2 ? We(U2) : null, z2 = N2 ? Qe(new Date().getTime()) : null, K2 = N2 ? Ye(i2, L2, z2, C2, U2, O2, A2) : null, M2 = ze(i2, O2, U2, z2), J2 = O2.eventProcessor || function(e2, n3, t3, r2, o3, i3) {
          var u2, s3 = 3 < arguments.length && r2 !== void 0 ? r2 : null, c2 = 4 < arguments.length && o3 !== void 0 ? o3 : null, l3 = {}, f2 = (5 < arguments.length && i3 !== void 0 ? i3 : null) || Q(e2, t3, n3), v2 = n3.eventsUrl + "/events/bulk/" + t3, g3 = Y(), p3 = Z(n3), m3 = n3.inlineUsersInEvents, h3 = n3.samplingInterval, y3 = n3.eventCapacity, w3 = n3.flushInterval, b3 = n3.logger, k3 = [], E3 = 0, S3 = false, D3 = false;
          function O3() {
            return h3 === 0 || Math.floor(Math.random() * h3) === 0;
          }
          function P3(e3) {
            k3.length < y3 ? (k3.push(e3), D3 = false) : (D3 || (D3 = true, b3.warn("Exceeded event queue capacity. Increase capacity to avoid dropping events.")), s3 && s3.incrementDroppedEvents());
          }
          return l3.enqueue = function(e3) {
            if (!S3) {
              var n4 = false, t4 = false;
              if (g3.summarizeEvent(e3), e3.kind === "feature" ? O3() && (n4 = !!e3.trackEvents, t4 = function(e4) {
                return !!e4.debugEventsUntilDate && e4.debugEventsUntilDate > E3 && e4.debugEventsUntilDate > new Date().getTime();
              }(e3)) : n4 = O3(), n4 && P3(function(e4) {
                var n5 = q({}, e4);
                return e4.kind === "alias" || (m3 || e4.kind === "identify" ? n5.user = p3.filterUser(e4.user) : (n5.userKey = e4.user.key, delete n5.user), e4.kind === "feature" && (delete n5.trackEvents, delete n5.debugEventsUntilDate)), n5;
              }(e3)), t4) {
                var r3 = q({}, e3, { kind: "debug" });
                r3.user = p3.filterUser(r3.user), delete r3.trackEvents, delete r3.debugEventsUntilDate, P3(r3);
              }
            }
          }, l3.flush = function() {
            if (S3)
              return Promise.resolve();
            var e3 = k3, n4 = g3.getSummary();
            return g3.clearSummary(), n4 && (n4.kind = "summary", e3.push(n4)), s3 && s3.setEventsInLastBatch(e3.length), e3.length === 0 ? Promise.resolve() : (k3 = [], b3.debug(Ce(e3.length)), f2.sendEvents(e3, v2).then(function(e4) {
              e4 && (e4.serverTime && (E3 = e4.serverTime), d(e4.status) || (S3 = true), 400 <= e4.status && R(function() {
                c2.maybeReportError(new a(he(e4.status, "event posting", "some events were dropped")));
              }));
            }));
          }, l3.start = function() {
            u2 = setTimeout(function e3() {
              l3.flush(), u2 = setTimeout(e3, w3);
            }, w3);
          }, l3.stop = function() {
            clearTimeout(u2);
          }, l3;
        }(i2, O2, U2, z2, S2, C2), H2 = Je(i2, O2, U2), G2 = {}, $2 = {}, B2 = O2.streaming, X2 = false, W2 = false, ee2 = true, ne2 = O2.stateProvider, te2 = (m2 = function(e2, n3) {
          var t3;
          t3 = e2, ne2 || t3 && ue2({ kind: "identify", key: t3.key, user: t3, creationDate: new Date().getTime() }), !O2.autoAliasingOptOut && n3 && n3.anonymous && e2 && !e2.anonymous && me2(e2, n3);
        }, { setUser: function(e2) {
          var n3 = h2 && I(h2);
          (h2 = _(e2)) && m2 && m2(I(h2), n3);
        }, getUser: function() {
          return h2 ? I(h2) : null;
        } }), re2 = Me(L2), oe2 = L2.isEnabled() ? new _e(L2, U2, x2, te2, E2) : null;
        function ie2(e2) {
          k2 || (k2 = true, w2.warn(ae(e2)));
        }
        function ue2(e2) {
          if (U2 && !(ne2 && ne2.enqueueEvent && ne2.enqueueEvent(e2))) {
            if (e2.kind !== "alias") {
              if (!e2.user)
                return void (ee2 && (E2.warn("Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"), ee2 = false));
              ee2 = false;
            }
            !P2 || W2 || i2.isDoNotTrack() || (E2.debug(Ae(e2.kind)), J2.enqueue(e2));
          }
        }
        function ce2(e2, n3, t3, r2) {
          var o3 = te2.getUser(), i3 = new Date(), a2 = n3 ? n3.value : null;
          if (!O2.allowFrequentDuplicateEvents) {
            var u2 = JSON.stringify(a2) + (o3 && o3.key ? o3.key : "") + e2, s3 = G2[u2];
            if (s3 && i3 - s3 < 3e5)
              return;
            G2[u2] = i3;
          }
          var c2 = { kind: "feature", key: e2, user: o3, value: a2, variation: n3 ? n3.variationIndex : null, default: t3, creationDate: i3.getTime() };
          o3 && o3.anonymous && (c2.contextKind = ge2(o3));
          var l3 = $2[e2];
          l3 && (c2.version = l3.flagVersion ? l3.flagVersion : l3.version, c2.trackEvents = l3.trackEvents, c2.debugEventsUntilDate = l3.debugEventsUntilDate), (r2 || l3 && l3.trackReason) && n3 && (c2.reason = n3.reason), ue2(c2);
        }
        function de2(e2, n3, t3, r2) {
          var o3;
          if ($2 && V($2, e2) && $2[e2] && !$2[e2].deleted) {
            var i3 = $2[e2];
            o3 = ve2(i3), i3.value !== null && i3.value !== void 0 || (o3.value = n3);
          } else
            o3 = { value: n3, variationIndex: null, reason: { kind: "ERROR", errorKind: "FLAG_NOT_FOUND" } };
          return t3 && ce2(e2, o3, n3, r2), o3;
        }
        function ve2(e2) {
          return { value: e2.value, variationIndex: e2.variation === void 0 ? null : e2.variation, reason: e2.reason || null };
        }
        function ge2(e2) {
          return e2.anonymous ? "anonymousUser" : "user";
        }
        function me2(e2, n3) {
          ne2 || e2 && n3 && ue2({ kind: "alias", key: e2.key, contextKind: ge2(e2), previousKey: n3.key, previousContextKind: ge2(n3), creationDate: new Date().getTime() });
        }
        function ye2() {
          if (g2 = true, te2.getUser()) {
            var a2 = function(e2) {
              try {
                return JSON.parse(e2);
              } catch (e3) {
                return void S2.maybeReportError(new v("Invalid data received from LaunchDarkly; connection may have been interrupted"));
              }
            };
            M2.connect(te2.getUser(), x2, { ping: function() {
              E2.debug("received ping message from stream");
              var n3 = te2.getUser();
              H2.fetchFlagSettings(n3, x2).then(function(e2) {
                j(n3, te2.getUser()) && be2(e2 || {});
              }).catch(function(e2) {
                S2.maybeReportError(new f(fe(e2)));
              });
            }, put: function(e2) {
              var n3 = a2(e2.data);
              n3 && (E2.debug("received streaming update for all flags"), be2(n3));
            }, patch: function(e2) {
              var n3 = a2(e2.data);
              if (n3) {
                var t3 = $2[n3.key];
                if (!t3 || !t3.version || !n3.version || t3.version < n3.version) {
                  E2.debug(Te(n3.key));
                  var r2 = {}, o3 = q({}, n3);
                  delete o3.key;
                  var i3 = ve2($2[n3.key] = o3);
                  r2[n3.key] = t3 ? { previous: t3.value, current: i3 } : { current: i3 }, ke2(r2);
                } else
                  E2.debug(Le(n3.key));
              }
            }, delete: function(e2) {
              var n3 = a2(e2.data);
              if (n3)
                if (!$2[n3.key] || $2[n3.key].version < n3.version) {
                  E2.debug(Fe(n3.key));
                  var t3 = {};
                  $2[n3.key] && !$2[n3.key].deleted && (t3[n3.key] = { previous: $2[n3.key].value }), $2[n3.key] = { version: n3.version, deleted: true }, ke2(t3);
                } else
                  E2.debug(Ne(n3.key));
            } });
          }
        }
        function we2() {
          g2 && (M2.disconnect(), g2 = false);
        }
        function be2(e2) {
          var n3 = {};
          if (!e2)
            return Promise.resolve();
          for (var t3 in $2)
            V($2, t3) && $2[t3] && (e2[t3] && !j(e2[t3].value, $2[t3].value) ? n3[t3] = { previous: $2[t3].value, current: ve2(e2[t3]) } : e2[t3] && !e2[t3].deleted || (n3[t3] = { previous: $2[t3].value }));
          for (var o3 in e2)
            V(e2, o3) && e2[o3] && (!$2[o3] || $2[o3].deleted) && (n3[o3] = { current: ve2(e2[o3]) });
          return $2 = r({}, e2), ke2(n3).catch(function() {
          });
        }
        function ke2(o3) {
          var e2 = Object.keys(o3);
          if (0 < e2.length) {
            var i3 = {};
            e2.forEach(function(e3) {
              var n3 = o3[e3].current, t3 = n3 ? n3.value : void 0, r2 = o3[e3].previous;
              S2.emit("change:" + e3, t3, r2), i3[e3] = n3 ? { current: t3, previous: r2 } : { previous: r2 };
            }), S2.emit("change", i3), S2.emit("internal-change", $2), O2.sendEventsOnlyForVariation || ne2 || e2.forEach(function(e3) {
              ce2(e3, o3[e3].current);
            });
          }
          return l2 && oe2 ? oe2.saveFlags($2) : Promise.resolve();
        }
        function Ee2() {
          var e2 = B2 || p2 && B2 === void 0;
          e2 && !g2 ? ye2() : !e2 && g2 && we2(), K2 && K2.setStreaming(e2);
        }
        function Se2(e2) {
          return e2 === "change" || e2.substr(0, "change".length + 1) === "change:";
        }
        if (typeof O2.bootstrap == "string" && O2.bootstrap.toUpperCase() === "LOCALSTORAGE" && (oe2 ? l2 = true : E2.warn(ae())), e(O2.bootstrap) === "object" && ($2 = function(t3) {
          var e2 = Object.keys(t3), r2 = t3.$flagsState;
          !r2 && e2.length && E2.warn(pe()), t3.$valid === false && E2.warn("LaunchDarkly bootstrap data is not available because the back end could not read the flags.");
          var o3 = {};
          return e2.forEach(function(e3) {
            if (e3 !== "$flagsState" && e3 !== "$valid") {
              var n3 = { value: t3[e3] };
              r2 && r2[e3] ? n3 = q(n3, r2[e3]) : n3.version = 0, o3[e3] = n3;
            }
          }), o3;
        }(O2.bootstrap)), ne2) {
          var De2 = ne2.getInitialState();
          De2 ? Oe2(De2) : ne2.on("init", Oe2), ne2.on("update", function(e2) {
            e2.user && te2.setUser(e2.user), e2.flags && be2(e2.flags);
          });
        } else
          (n2 ? re2.validateUser(t2).then(function(n3) {
            return te2.setUser(n3), e(O2.bootstrap) === "object" ? Pe2() : l2 ? oe2.loadFlags().then(function(e2) {
              return e2 == null ? ($2 = {}, H2.fetchFlagSettings(te2.getUser(), x2).then(function(e3) {
                return be2(e3 || {});
              }).then(Pe2).catch(function(e3) {
                Re2(new f(fe(e3)));
              })) : ($2 = e2, R(Pe2), H2.fetchFlagSettings(te2.getUser(), x2).then(function(e3) {
                return be2(e3);
              }).catch(function(e3) {
                return S2.maybeReportError(e3);
              }));
            }) : H2.fetchFlagSettings(te2.getUser(), x2).then(function(e2) {
              $2 = e2 || {}, Pe2();
            }).catch(function(e2) {
              $2 = {}, Re2(e2);
            });
          }) : Promise.reject(new u(le()))).catch(Re2);
        function Oe2(e2) {
          U2 = e2.environment, te2.setUser(e2.user), $2 = r({}, e2.flags), R(Pe2);
        }
        function Pe2() {
          E2.info("LaunchDarkly client initialized"), X2 = true, Ee2(), D2.signalSuccess();
        }
        function Re2(e2) {
          D2.signalFailure(e2);
        }
        return { client: { waitForInitialization: function() {
          return D2.getInitializationPromise();
        }, waitUntilReady: function() {
          return D2.getReadyPromise();
        }, identify: function(e2, r2, n3) {
          return W2 ? T(Promise.resolve({}), n3) : ne2 ? (E2.warn("identify() has no effect here; it must be called on the main client instance"), T(Promise.resolve(F($2)), n3)) : T((l2 && oe2 ? oe2.clearFlags() : Promise.resolve()).then(function() {
            return re2.validateUser(e2);
          }).then(function(t3) {
            return H2.fetchFlagSettings(t3, r2).then(function(e3) {
              var n4 = F(e3);
              return te2.setUser(t3), x2 = r2, e3 ? be2(e3).then(function() {
                return n4;
              }) : n4;
            });
          }).then(function(e3) {
            return g2 && ye2(), e3;
          }).catch(function(e3) {
            return S2.maybeReportError(e3), Promise.reject(e3);
          }), n3);
        }, getUser: function() {
          return te2.getUser();
        }, variation: function(e2, n3) {
          return de2(e2, n3, true, false).value;
        }, variationDetail: function(e2, n3) {
          return de2(e2, n3, true, true);
        }, track: function(e2, n3, t3) {
          if (typeof e2 == "string") {
            i2.customEventFilter && !i2.customEventFilter(e2) && E2.warn(se(e2));
            var r2 = te2.getUser(), o3 = { kind: "custom", key: e2, user: r2, url: i2.getCurrentUrl(), creationDate: new Date().getTime() };
            r2 && r2.anonymous && (o3.contextKind = ge2(r2)), n3 != null && (o3.data = n3), t3 != null && (o3.metricValue = t3), ue2(o3);
          } else
            S2.maybeReportError(new c(se(e2)));
        }, alias: me2, on: function(e2, n3, t3) {
          Se2(e2) ? (p2 = true, X2 && Ee2(), S2.on(e2, n3, t3)) : S2.on.apply(S2, arguments);
        }, off: function(e2) {
          if (S2.off.apply(S2, arguments), Se2(e2)) {
            var n3 = false;
            S2.getEvents().forEach(function(e3) {
              Se2(e3) && 0 < S2.getEventListenerCount(e3) && (n3 = true);
            }), n3 || (p2 = false, g2 && B2 === void 0 && we2());
          }
        }, setStreaming: function(e2) {
          var n3 = e2 === null ? void 0 : e2;
          n3 !== B2 && (B2 = n3, Ee2());
        }, flush: function(e2) {
          return T(P2 ? J2.flush() : Promise.resolve(), e2);
        }, allFlags: function() {
          var e2 = {};
          if (!$2)
            return e2;
          for (var n3 in $2)
            V($2, n3) && (e2[n3] = de2(n3, null, !O2.sendEventsOnlyForVariation).value);
          return e2;
        }, close: function(e2) {
          if (W2)
            return T(Promise.resolve(), e2);
          function n3() {
            W2 = true, $2 = {};
          }
          return T(Promise.resolve().then(function() {
            if (we2(), K2 && K2.stop(), P2)
              return J2.stop(), J2.flush();
          }).then(n3).catch(n3), e2);
        } }, options: O2, emitter: S2, ident: te2, logger: E2, requestor: H2, start: function() {
          P2 && (K2 && K2.start(), J2.start());
        }, enqueueEvent: ue2, getFlagsInternal: function() {
          return $2;
        }, getEnvironmentId: function() {
          return U2;
        }, internalChangeEventName: "internal-change" };
      }
      function _defineProperty(e2, n2, t2) {
        return n2 in e2 ? Object.defineProperty(e2, n2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[n2] = t2, e2;
      }
      function ownKeys(n2, e2) {
        var t2 = Object.keys(n2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(n2);
          e2 && (r2 = r2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(n2, e3).enumerable;
          })), t2.push.apply(t2, r2);
        }
        return t2;
      }
      function _objectSpread2(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? ownKeys(Object(t2), true).forEach(function(e3) {
            _defineProperty(n2, e3, t2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(e3) {
            Object.defineProperty(n2, e3, Object.getOwnPropertyDescriptor(t2, e3));
          });
        }
        return n2;
      }
      function isSyncXhrSupported() {
        var e2 = window.navigator && window.navigator.userAgent;
        if (e2) {
          var n2 = e2.match(/Chrom(e|ium)\/([0-9]+)\./);
          if (n2)
            return parseInt(n2[2], 10) < 73;
        }
        return true;
      }
      var emptyResult = { promise: Promise.resolve({ status: 200, header: function() {
        return null;
      }, body: null }) };
      function newHttpRequest(e2, n2, t2, r2, o2) {
        if (o2 && !isSyncXhrSupported())
          return emptyResult;
        var i2 = new window.XMLHttpRequest();
        for (var a2 in i2.open(e2, n2, !o2), t2 || {})
          Object.prototype.hasOwnProperty.call(t2, a2) && i2.setRequestHeader(a2, t2[a2]);
        if (o2)
          return i2.send(r2), emptyResult;
        var u2;
        return { promise: new Promise(function(e3, n3) {
          i2.addEventListener("load", function() {
            u2 || e3({ status: i2.status, header: function(e4) {
              return i2.getResponseHeader(e4);
            }, body: i2.responseText });
          }), i2.addEventListener("error", function() {
            u2 || n3(new Error());
          }), i2.send(r2);
        }), cancel: function() {
          u2 = true, i2.abort();
        } };
      }
      function makeBrowserPlatform(e2) {
        var n2, i2 = { synchronousFlush: false };
        if (window.XMLHttpRequest) {
          var a2 = e2 && e2.disableSyncEventPost;
          i2.httpRequest = function(e3, n3, t3, r3) {
            var o3 = i2.synchronousFlush & !a2;
            return i2.synchronousFlush = false, newHttpRequest(e3, n3, t3, r3, o3);
          };
        }
        i2.httpAllowsPost = function() {
          return n2 === void 0 && (n2 = !!window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest()), n2;
        }, i2.httpFallbackPing = function(e3) {
          new window.Image().src = e3;
        };
        var r2, t2 = e2 && e2.eventUrlTransformer;
        i2.getCurrentUrl = function() {
          return t2 ? t2(window.location.href) : window.location.href;
        }, i2.isDoNotTrack = function() {
          var e3;
          return (e3 = window.navigator && window.navigator.doNotTrack !== void 0 ? window.navigator.doNotTrack : window.navigator && window.navigator.msDoNotTrack !== void 0 ? window.navigator.msDoNotTrack : window.doNotTrack) === 1 || e3 === true || e3 === "1" || e3 === "yes";
        };
        try {
          window.localStorage && (i2.localStorage = { get: function(n3) {
            return new Promise(function(e3) {
              e3(window.localStorage.getItem(n3));
            });
          }, set: function(n3, t3) {
            return new Promise(function(e3) {
              window.localStorage.setItem(n3, t3), e3();
            });
          }, clear: function(n3) {
            return new Promise(function(e3) {
              window.localStorage.removeItem(n3), e3();
            });
          } });
        } catch (e3) {
          i2.localStorage = null;
        }
        var o2 = e2 && e2.useReport;
        if (r2 = o2 && typeof window.EventSourcePolyfill == "function" && window.EventSourcePolyfill.supportedOptions && window.EventSourcePolyfill.supportedOptions.method ? (i2.eventSourceAllowsReport = true, window.EventSourcePolyfill) : (i2.eventSourceAllowsReport = false, window.EventSource), window.EventSource) {
          i2.eventSourceFactory = function(e3, n3) {
            var t3 = _objectSpread2(_objectSpread2({}, { heartbeatTimeout: 3e5, silentTimeout: 3e5, skipDefaultHeaders: true }), n3);
            return new r2(e3, t3);
          }, i2.eventSourceIsActive = function(e3) {
            return e3.readyState === window.EventSource.OPEN || e3.readyState === window.EventSource.CONNECTING;
          };
        }
        return i2.userAgent = "JSClient", i2.version = "2.20.2", i2.diagnosticSdkData = { name: "js-client-sdk", version: "2.20.2" }, i2.diagnosticPlatformData = { name: "JS" }, i2.diagnosticUseCombinedEvent = true, i2;
      }
      var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
      var escapeStringRegexp = function(e2) {
        if (typeof e2 != "string")
          throw new TypeError("Expected a string");
        return e2.replace(matchOperatorsRe, "\\$&");
      };
      function doesUrlMatch(e2, n2, t2, r2) {
        var o2, i2, a2 = ((e2.kind === "substring" || e2.kind === "regex") && r2.includes("/") ? n2 : n2.replace(r2, "")).replace(t2, "");
        switch (e2.kind) {
          case "exact":
            i2 = n2, o2 = new RegExp("^" + escapeStringRegexp(e2.url) + "/?$");
            break;
          case "canonical":
            i2 = a2, o2 = new RegExp("^" + escapeStringRegexp(e2.url) + "/?$");
            break;
          case "substring":
            i2 = a2, o2 = new RegExp(".*" + escapeStringRegexp(e2.substring) + ".*$");
            break;
          case "regex":
            i2 = a2, o2 = new RegExp(e2.pattern);
            break;
          default:
            return false;
        }
        return o2.test(i2);
      }
      function findGoalsForClick(e2, n2) {
        for (var t2 = [], r2 = 0; r2 < n2.length; r2++)
          for (var o2 = e2.target, i2 = n2[r2], a2 = i2.selector, u2 = document.querySelectorAll(a2); o2 && 0 < u2.length; ) {
            for (var s2 = 0; s2 < u2.length; s2++)
              o2 === u2[s2] && t2.push(i2);
            o2 = o2.parentNode;
          }
        return t2;
      }
      function GoalTracker(e2, r2) {
        for (var n2 = {}, t2 = null, o2 = [], i2 = 0; i2 < e2.length; i2++)
          for (var a2 = e2[i2], u2 = a2.urls || [], s2 = 0; s2 < u2.length; s2++)
            if (doesUrlMatch(u2[s2], window.location.href, window.location.search, window.location.hash)) {
              a2.kind === "pageview" ? r2("pageview", a2) : (o2.push(a2), r2("click_pageview", a2));
              break;
            }
        return 0 < o2.length && (t2 = function(e3) {
          for (var n3 = findGoalsForClick(e3, o2), t3 = 0; t3 < n3.length; t3++)
            r2("click", n3[t3]);
        }, document.addEventListener("click", t2)), n2.dispose = function() {
          document.removeEventListener("click", t2);
        }, n2;
      }
      var locationWatcherInterval = 300;
      function GoalManager(o2, n2) {
        var t2, r2;
        function i2() {
          r2 && r2.dispose(), t2 && t2.length && (r2 = GoalTracker(t2, a2));
        }
        function a2(e2, n3) {
          var t3 = o2.ident.getUser(), r3 = { kind: e2, key: n3.key, data: null, url: window.location.href, user: t3, creationDate: new Date().getTime() };
          return t3 && t3.anonymous && (r3.contextKind = "anonymousUser"), e2 === "click" && (r3.selector = n3.selector), o2.enqueueEvent(r3);
        }
        function u2(e2, n3) {
          var t3, r3 = window.location.href;
          function o3() {
            (t3 = window.location.href) !== r3 && (r3 = t3, n3());
          }
          !function e3(n4, t4) {
            n4(), setTimeout(function() {
              e3(n4, t4);
            }, t4);
          }(o3, e2), window.history && window.history.pushState ? window.addEventListener("popstate", o3) : window.addEventListener("hashchange", o3);
        }
        return o2.requestor.fetchJSON("/sdk/goals/" + o2.getEnvironmentId()).then(function(e2) {
          e2 && 0 < e2.length && (r2 = GoalTracker(t2 = e2, a2), u2(locationWatcherInterval, i2)), n2();
        }).catch(function(e2) {
          o2.emitter.maybeReportError(new g.LDUnexpectedResponseError((e2 && e2.message, e2.message))), n2();
        }), {};
      }
      var goalsEvent = "goalsReady";
      var extraOptionDefs = { fetchGoals: { default: true }, hash: { type: "string" }, eventProcessor: { type: "object" }, eventUrlTransformer: { type: "function" }, disableSyncEventPost: { default: false } };
      function initialize2(e2, n2) {
        var t2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, r2 = makeBrowserPlatform(t2), o2 = Ze(e2, n2, t2, r2, extraOptionDefs), i2 = o2.client, a2 = o2.options, u2 = o2.emitter, s2 = new Promise(function(e3) {
          var n3 = u2.on(goalsEvent, function() {
            u2.off(goalsEvent, n3), e3();
          });
        });
        i2.waitUntilGoalsReady = function() {
          return s2;
        }, a2.fetchGoals ? GoalManager(o2, function() {
          return u2.emit(goalsEvent);
        }) : u2.emit(goalsEvent), document.readyState !== "complete" ? window.addEventListener("load", o2.start) : o2.start();
        function c2() {
          r2.synchronousFlush = true, i2.flush().catch(function() {
          }), r2.synchronousFlush = false;
        }
        return window.addEventListener("beforeunload", c2), window.addEventListener("unload", c2), i2;
      }
      var createConsoleLogger = Be;
      var version = "2.20.2";
      function deprecatedInitialize(e2, n2) {
        var t2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
        return console && console.warn && console.warn(xe.deprecated("default export", "named LDClient export")), initialize2(e2, n2, t2);
      }
      var index = { initialize: deprecatedInitialize, version };
      exports.createConsoleLogger = createConsoleLogger, exports.default = index, exports.initialize = initialize2, exports.version = version;
    }
  });

  // env-ns:/Users/brinaldi/Documents/projects/nodesdk-example/.env
  var LAUNCHDARKLY_CLIENT_ID = "61409b046ca8d52601d179ef";

  // lib/ld-client.js
  var LaunchDarkly = require_ldclient_cjs();
  var launchDarklyClient;
  async function initialize(user) {
    if (!user) {
      user = {
        key: "anonymous"
      };
    }
    const client = LaunchDarkly.initialize(LAUNCHDARKLY_CLIENT_ID, user);
    await client.waitForInitialization();
    return client;
  }
  async function getClient() {
    if (launchDarklyClient)
      return launchDarklyClient;
    return launchDarklyClient = await initialize();
  }
  async function getFlagValue(key, fnChangeListener) {
    const client = await getClient();
    let flagValue;
    flagValue = await client.variation(key, false);
    if (fnChangeListener) {
      client.on("change:" + key, fnChangeListener);
    }
    return flagValue;
  }

  // scripts/main.js
  var showButton;
  var button = document.getElementById("theButton");
  getFlagValue("show-button", setShowButton).then(setShowButton);
  function setShowButton(val) {
    showButton = val;
    console.log(showButton);
    if (button && showButton) {
      button.style.display = "block";
    } else if (button) {
      button.style.display = "none";
    }
  }
})();
