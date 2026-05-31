import { watch as ve, computed as K, unref as S, onMounted as wa, nextTick as Xe, ref as Z, readonly as ho, getCurrentInstance as vo, getCurrentScope as go, onScopeDispose as bo, shallowRef as wo, defineComponent as R, openBlock as b, createElementBlock as x, createElementVNode as m, createBlock as Q, resolveDynamicComponent as _a, normalizeClass as L, withCtx as F, renderSlot as Dt, resolveComponent as de, createVNode as A, createTextVNode as Ze, toDisplayString as O, createCommentVNode as H, inject as Ye, Fragment as te, renderList as re, withDirectives as Te, pushScopeId as De, popScopeId as Ce, reactive as xe, withKeys as Pr, withModifiers as Pt, vModelText as Sa, normalizeStyle as zn, Transition as rr, vShow as ka, onActivated as _o, provide as kt, KeepAlive as So } from "vue";
import { ClickOutside as ko, ElMessage as Se, ElMessageBox as Ao } from "element-plus";
var $o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Po(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var or = Error, ir = EvalError, lr = RangeError, sr = ReferenceError, fn = SyntaxError, et = TypeError, ur = URIError, Io = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var a = 42;
  e[n] = a;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, n);
    if (i.value !== a || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, Ir = typeof Symbol < "u" && Symbol, xo = Io, mn = function() {
  return typeof Ir != "function" || typeof Symbol != "function" || typeof Ir("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : xo();
}, xr = {
  foo: {}
}, Eo = Object, yn = function() {
  return { __proto__: xr }.foo === xr.foo && !({ __proto__: null } instanceof Eo);
}, Do = "Function.prototype.bind called on incompatible ", Co = Object.prototype.toString, Ro = Math.max, Oo = "[object Function]", Er = function(e, n) {
  for (var r = [], a = 0; a < e.length; a += 1)
    r[a] = e[a];
  for (var o = 0; o < n.length; o += 1)
    r[o + e.length] = n[o];
  return r;
}, Fo = function(e, n) {
  for (var r = [], a = n, o = 0; a < e.length; a += 1, o += 1)
    r[o] = e[a];
  return r;
}, Mo = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, To = function(e) {
  var n = this;
  if (typeof n != "function" || Co.apply(n) !== Oo)
    throw new TypeError(Do + n);
  for (var r = Fo(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        Er(r, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return n.apply(
      e,
      Er(r, arguments)
    );
  }, i = Ro(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (a = Function("binder", "return function (" + Mo(s, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Vo = To, Ft = Function.prototype.bind || Vo, Uo = Function.prototype.call, Bo = Object.prototype.hasOwnProperty, No = Ft, cr = No.call(Uo, Bo), N, jo = or, zo = ir, Lo = lr, Wo = sr, mt = fn, ct = et, Go = ur, Aa = Function, bn = function(t) {
  try {
    return Aa('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Ge = Object.getOwnPropertyDescriptor;
if (Ge)
  try {
    Ge({}, "");
  } catch {
    Ge = null;
  }
var wn = function() {
  throw new ct();
}, Ho = Ge ? function() {
  try {
    return arguments.callee, wn;
  } catch {
    try {
      return Ge(arguments, "callee").get;
    } catch {
      return wn;
    }
  }
}() : wn, nt = mn(), qo = yn(), se = Object.getPrototypeOf || (qo ? function(t) {
  return t.__proto__;
} : null), lt = {}, Jo = typeof Uint8Array > "u" || !se ? N : se(Uint8Array), He = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? N : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? N : ArrayBuffer,
  "%ArrayIteratorPrototype%": nt && se ? se([][Symbol.iterator]()) : N,
  "%AsyncFromSyncIteratorPrototype%": N,
  "%AsyncFunction%": lt,
  "%AsyncGenerator%": lt,
  "%AsyncGeneratorFunction%": lt,
  "%AsyncIteratorPrototype%": lt,
  "%Atomics%": typeof Atomics > "u" ? N : Atomics,
  "%BigInt%": typeof BigInt > "u" ? N : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? N : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? N : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? N : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": jo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": zo,
  "%Float32Array%": typeof Float32Array > "u" ? N : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? N : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? N : FinalizationRegistry,
  "%Function%": Aa,
  "%GeneratorFunction%": lt,
  "%Int8Array%": typeof Int8Array > "u" ? N : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? N : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? N : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": nt && se ? se(se([][Symbol.iterator]())) : N,
  "%JSON%": typeof JSON == "object" ? JSON : N,
  "%Map%": typeof Map > "u" ? N : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !nt || !se ? N : se((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? N : Promise,
  "%Proxy%": typeof Proxy > "u" ? N : Proxy,
  "%RangeError%": Lo,
  "%ReferenceError%": Wo,
  "%Reflect%": typeof Reflect > "u" ? N : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? N : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !nt || !se ? N : se((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? N : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": nt && se ? se(""[Symbol.iterator]()) : N,
  "%Symbol%": nt ? Symbol : N,
  "%SyntaxError%": mt,
  "%ThrowTypeError%": Ho,
  "%TypedArray%": Jo,
  "%TypeError%": ct,
  "%Uint8Array%": typeof Uint8Array > "u" ? N : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? N : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? N : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? N : Uint32Array,
  "%URIError%": Go,
  "%WeakMap%": typeof WeakMap > "u" ? N : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? N : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? N : WeakSet
};
if (se)
  try {
    null.error;
  } catch (t) {
    var Ko = se(se(t));
    He["%Error.prototype%"] = Ko;
  }
var Qo = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = bn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = bn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = bn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && se && (n = se(a.prototype));
  }
  return He[e] = n, n;
}, Dr = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Mt = Ft, tn = cr, Xo = Mt.call(Function.call, Array.prototype.concat), Zo = Mt.call(Function.apply, Array.prototype.splice), Cr = Mt.call(Function.call, String.prototype.replace), nn = Mt.call(Function.call, String.prototype.slice), Yo = Mt.call(Function.call, RegExp.prototype.exec), ei = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ti = /\\(\\)?/g, ni = function(e) {
  var n = nn(e, 0, 1), r = nn(e, -1);
  if (n === "%" && r !== "%")
    throw new mt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new mt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Cr(e, ei, function(o, i, s, l) {
    a[a.length] = s ? Cr(l, ti, "$1") : i || o;
  }), a;
}, ri = function(e, n) {
  var r = e, a;
  if (tn(Dr, r) && (a = Dr[r], r = "%" + a[0] + "%"), tn(He, r)) {
    var o = He[r];
    if (o === lt && (o = Qo(r)), typeof o > "u" && !n)
      throw new ct("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new mt("intrinsic " + e + " does not exist!");
}, pr = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ct("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ct('"allowMissing" argument must be a boolean');
  if (Yo(/^%?[^%]*%?$/, e) === null)
    throw new mt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = ni(e), a = r.length > 0 ? r[0] : "", o = ri("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], Zo(r, Xo([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = nn(c, 0, 1), h = nn(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new mt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", tn(He, i))
      s = He[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ct("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ge && p + 1 >= r.length) {
        var y = Ge(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = tn(s, c), s = s[c];
      d && !l && (He[i] = s);
    }
  }
  return s;
}, $a = { exports: {} }, j, ai = or, oi = ir, ii = lr, li = sr, yt = fn, pt = et, si = ur, Pa = Function, _n = function(t) {
  try {
    return Pa('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, qe = Object.getOwnPropertyDescriptor;
if (qe)
  try {
    qe({}, "");
  } catch {
    qe = null;
  }
var Sn = function() {
  throw new pt();
}, ui = qe ? function() {
  try {
    return arguments.callee, Sn;
  } catch {
    try {
      return qe(arguments, "callee").get;
    } catch {
      return Sn;
    }
  }
}() : Sn, rt = mn(), ci = yn(), ue = Object.getPrototypeOf || (ci ? function(t) {
  return t.__proto__;
} : null), st = {}, pi = typeof Uint8Array > "u" || !ue ? j : ue(Uint8Array), Je = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
  "%ArrayIteratorPrototype%": rt && ue ? ue([][Symbol.iterator]()) : j,
  "%AsyncFromSyncIteratorPrototype%": j,
  "%AsyncFunction%": st,
  "%AsyncGenerator%": st,
  "%AsyncGeneratorFunction%": st,
  "%AsyncIteratorPrototype%": st,
  "%Atomics%": typeof Atomics > "u" ? j : Atomics,
  "%BigInt%": typeof BigInt > "u" ? j : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? j : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? j : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? j : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ai,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": oi,
  "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
  "%Function%": Pa,
  "%GeneratorFunction%": st,
  "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": rt && ue ? ue(ue([][Symbol.iterator]())) : j,
  "%JSON%": typeof JSON == "object" ? JSON : j,
  "%Map%": typeof Map > "u" ? j : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !rt || !ue ? j : ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? j : Promise,
  "%Proxy%": typeof Proxy > "u" ? j : Proxy,
  "%RangeError%": ii,
  "%ReferenceError%": li,
  "%Reflect%": typeof Reflect > "u" ? j : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? j : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !rt || !ue ? j : ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": rt && ue ? ue(""[Symbol.iterator]()) : j,
  "%Symbol%": rt ? Symbol : j,
  "%SyntaxError%": yt,
  "%ThrowTypeError%": ui,
  "%TypedArray%": pi,
  "%TypeError%": pt,
  "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
  "%URIError%": si,
  "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
};
if (ue)
  try {
    null.error;
  } catch (t) {
    var di = ue(ue(t));
    Je["%Error.prototype%"] = di;
  }
var fi = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = _n("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = _n("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = _n("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && ue && (n = ue(a.prototype));
  }
  return Je[e] = n, n;
}, Rr = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Tt = Ft, rn = cr, mi = Tt.call(Function.call, Array.prototype.concat), yi = Tt.call(Function.apply, Array.prototype.splice), Or = Tt.call(Function.call, String.prototype.replace), an = Tt.call(Function.call, String.prototype.slice), hi = Tt.call(Function.call, RegExp.prototype.exec), vi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, gi = /\\(\\)?/g, bi = function(e) {
  var n = an(e, 0, 1), r = an(e, -1);
  if (n === "%" && r !== "%")
    throw new yt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new yt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Or(e, vi, function(o, i, s, l) {
    a[a.length] = s ? Or(l, gi, "$1") : i || o;
  }), a;
}, wi = function(e, n) {
  var r = e, a;
  if (rn(Rr, r) && (a = Rr[r], r = "%" + a[0] + "%"), rn(Je, r)) {
    var o = Je[r];
    if (o === st && (o = fi(r)), typeof o > "u" && !n)
      throw new pt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new yt("intrinsic " + e + " does not exist!");
}, _i = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new pt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new pt('"allowMissing" argument must be a boolean');
  if (hi(/^%?[^%]*%?$/, e) === null)
    throw new yt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = bi(e), a = r.length > 0 ? r[0] : "", o = wi("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], yi(r, mi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = an(c, 0, 1), h = an(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new yt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", rn(Je, i))
      s = Je[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new pt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (qe && p + 1 >= r.length) {
        var y = qe(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = rn(s, c), s = s[c];
      d && !l && (Je[i] = s);
    }
  }
  return s;
}, kn, Fr;
function Si() {
  if (Fr) return kn;
  Fr = 1;
  var t, e = or, n = ir, r = lr, a = sr, o = fn, i = et, s = ur, l = Function, u = function(X) {
    try {
      return l('"use strict"; return (' + X + ").constructor;")();
    } catch {
    }
  }, p = Object.getOwnPropertyDescriptor;
  if (p)
    try {
      p({}, "");
    } catch {
      p = null;
    }
  var d = function() {
    throw new i();
  }, c = p ? function() {
    try {
      return arguments.callee, d;
    } catch {
      try {
        return p(arguments, "callee").get;
      } catch {
        return d;
      }
    }
  }() : d, f = mn(), h = yn(), y = Object.getPrototypeOf || (h ? function(X) {
    return X.__proto__;
  } : null), g = {}, k = typeof Uint8Array > "u" || !y ? t : y(Uint8Array), $ = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": g,
    "%AsyncGenerator%": g,
    "%AsyncGeneratorFunction%": g,
    "%AsyncIteratorPrototype%": g,
    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? t : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": e,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
    "%Function%": l,
    "%GeneratorFunction%": g,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": f && y ? y(y([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !f || !y ? t : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": r,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !f || !y ? t : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": f && y ? y(""[Symbol.iterator]()) : t,
    "%Symbol%": f ? Symbol : t,
    "%SyntaxError%": o,
    "%ThrowTypeError%": c,
    "%TypedArray%": k,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
  };
  if (y)
    try {
      null.error;
    } catch (X) {
      var v = y(y(X));
      $["%Error.prototype%"] = v;
    }
  var _ = function X(M) {
    var J;
    if (M === "%AsyncFunction%")
      J = u("async function () {}");
    else if (M === "%GeneratorFunction%")
      J = u("function* () {}");
    else if (M === "%AsyncGeneratorFunction%")
      J = u("async function* () {}");
    else if (M === "%AsyncGenerator%") {
      var G = X("%AsyncGeneratorFunction%");
      G && (J = G.prototype);
    } else if (M === "%AsyncIteratorPrototype%") {
      var Y = X("%AsyncGenerator%");
      Y && y && (J = y(Y.prototype));
    }
    return $[M] = J, J;
  }, P = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, w = Ft, I = cr, E = w.call(Function.call, Array.prototype.concat), q = w.call(Function.apply, Array.prototype.splice), C = w.call(Function.call, String.prototype.replace), T = w.call(Function.call, String.prototype.slice), U = w.call(Function.call, RegExp.prototype.exec), D = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, W = /\\(\\)?/g, B = function(M) {
    var J = T(M, 0, 1), G = T(M, -1);
    if (J === "%" && G !== "%")
      throw new o("invalid intrinsic syntax, expected closing `%`");
    if (G === "%" && J !== "%")
      throw new o("invalid intrinsic syntax, expected opening `%`");
    var Y = [];
    return C(M, D, function(fe, ge, oe, Re) {
      Y[Y.length] = oe ? C(Re, W, "$1") : ge || fe;
    }), Y;
  }, ee = function(M, J) {
    var G = M, Y;
    if (I(P, G) && (Y = P[G], G = "%" + Y[0] + "%"), I($, G)) {
      var fe = $[G];
      if (fe === g && (fe = _(G)), typeof fe > "u" && !J)
        throw new i("intrinsic " + M + " exists, but is not available. Please file an issue!");
      return {
        alias: Y,
        name: G,
        value: fe
      };
    }
    throw new o("intrinsic " + M + " does not exist!");
  };
  return kn = function(M, J) {
    if (typeof M != "string" || M.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof J != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (U(/^%?[^%]*%?$/, M) === null)
      throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var G = B(M), Y = G.length > 0 ? G[0] : "", fe = ee("%" + Y + "%", J), ge = fe.name, oe = fe.value, Re = !1, Be = fe.alias;
    Be && (Y = Be[0], q(G, E([0, 1], Be)));
    for (var we = 1, Oe = !0; we < G.length; we += 1) {
      var _e = G[we], Ne = T(_e, 0, 1), tt = T(_e, -1);
      if ((Ne === '"' || Ne === "'" || Ne === "`" || tt === '"' || tt === "'" || tt === "`") && Ne !== tt)
        throw new o("property names with quotes must have matching quotes");
      if ((_e === "constructor" || !Oe) && (Re = !0), Y += "." + _e, ge = "%" + Y + "%", I($, ge))
        oe = $[ge];
      else if (oe != null) {
        if (!(_e in oe)) {
          if (!J)
            throw new i("base intrinsic for " + M + " exists, but the property is not available.");
          return;
        }
        if (p && we + 1 >= G.length) {
          var Bt = p(oe, _e);
          Oe = !!Bt, Oe && "get" in Bt && !("originalValue" in Bt.get) ? oe = Bt.get : oe = oe[_e];
        } else
          Oe = I(oe, _e), oe = oe[_e];
        Oe && !Re && ($[ge] = oe);
      }
    }
    return oe;
  }, kn;
}
var An, Mr;
function dr() {
  if (Mr) return An;
  Mr = 1;
  var t = Si(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return An = e, An;
}
var ki = "Function.prototype.bind called on incompatible ", $n = Array.prototype.slice, Ai = Object.prototype.toString, $i = "[object Function]", Pi = function(e) {
  var n = this;
  if (typeof n != "function" || Ai.call(n) !== $i)
    throw new TypeError(ki + n);
  for (var r = $n.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat($n.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat($n.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Ii = Pi, xi = Function.prototype.bind || Ii, Ei = "Function.prototype.bind called on incompatible ", Pn = Array.prototype.slice, Di = Object.prototype.toString, Ci = "[object Function]", Ri = function(e) {
  var n = this;
  if (typeof n != "function" || Di.call(n) !== Ci)
    throw new TypeError(Ei + n);
  for (var r = Pn.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat(Pn.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(Pn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Oi = Ri, Fi = Function.prototype.bind || Oi, Mi = Fi, Ti = Mi.call(Function.call, Object.prototype.hasOwnProperty), z, ht = SyntaxError, Ia = Function, dt = TypeError, In = function(t) {
  try {
    return Ia('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Ke = Object.getOwnPropertyDescriptor;
if (Ke)
  try {
    Ke({}, "");
  } catch {
    Ke = null;
  }
var xn = function() {
  throw new dt();
}, Vi = Ke ? function() {
  try {
    return arguments.callee, xn;
  } catch {
    try {
      return Ke(arguments, "callee").get;
    } catch {
      return xn;
    }
  }
}() : xn, at = mn(), Ui = yn(), ce = Object.getPrototypeOf || (Ui ? function(t) {
  return t.__proto__;
} : null), ut = {}, Bi = typeof Uint8Array > "u" || !ce ? z : ce(Uint8Array), Qe = {
  "%AggregateError%": typeof AggregateError > "u" ? z : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? z : ArrayBuffer,
  "%ArrayIteratorPrototype%": at && ce ? ce([][Symbol.iterator]()) : z,
  "%AsyncFromSyncIteratorPrototype%": z,
  "%AsyncFunction%": ut,
  "%AsyncGenerator%": ut,
  "%AsyncGeneratorFunction%": ut,
  "%AsyncIteratorPrototype%": ut,
  "%Atomics%": typeof Atomics > "u" ? z : Atomics,
  "%BigInt%": typeof BigInt > "u" ? z : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? z : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? z : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? z : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? z : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? z : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? z : FinalizationRegistry,
  "%Function%": Ia,
  "%GeneratorFunction%": ut,
  "%Int8Array%": typeof Int8Array > "u" ? z : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? z : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? z : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": at && ce ? ce(ce([][Symbol.iterator]())) : z,
  "%JSON%": typeof JSON == "object" ? JSON : z,
  "%Map%": typeof Map > "u" ? z : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !at || !ce ? z : ce((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? z : Promise,
  "%Proxy%": typeof Proxy > "u" ? z : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? z : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? z : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !at || !ce ? z : ce((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? z : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": at && ce ? ce(""[Symbol.iterator]()) : z,
  "%Symbol%": at ? Symbol : z,
  "%SyntaxError%": ht,
  "%ThrowTypeError%": Vi,
  "%TypedArray%": Bi,
  "%TypeError%": dt,
  "%Uint8Array%": typeof Uint8Array > "u" ? z : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? z : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? z : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? z : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? z : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? z : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? z : WeakSet
};
if (ce)
  try {
    null.error;
  } catch (t) {
    var Ni = ce(ce(t));
    Qe["%Error.prototype%"] = Ni;
  }
var ji = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = In("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = In("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = In("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && ce && (n = ce(a.prototype));
  }
  return Qe[e] = n, n;
}, Tr = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Vt = xi, on = Ti, zi = Vt.call(Function.call, Array.prototype.concat), Li = Vt.call(Function.apply, Array.prototype.splice), Vr = Vt.call(Function.call, String.prototype.replace), ln = Vt.call(Function.call, String.prototype.slice), Wi = Vt.call(Function.call, RegExp.prototype.exec), Gi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Hi = /\\(\\)?/g, qi = function(e) {
  var n = ln(e, 0, 1), r = ln(e, -1);
  if (n === "%" && r !== "%")
    throw new ht("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new ht("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Vr(e, Gi, function(o, i, s, l) {
    a[a.length] = s ? Vr(l, Hi, "$1") : i || o;
  }), a;
}, Ji = function(e, n) {
  var r = e, a;
  if (on(Tr, r) && (a = Tr[r], r = "%" + a[0] + "%"), on(Qe, r)) {
    var o = Qe[r];
    if (o === ut && (o = ji(r)), typeof o > "u" && !n)
      throw new dt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new ht("intrinsic " + e + " does not exist!");
}, Ki = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new dt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new dt('"allowMissing" argument must be a boolean');
  if (Wi(/^%?[^%]*%?$/, e) === null)
    throw new ht("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = qi(e), a = r.length > 0 ? r[0] : "", o = Ji("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], Li(r, zi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = ln(c, 0, 1), h = ln(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new ht("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", on(Qe, i))
      s = Qe[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new dt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ke && p + 1 >= r.length) {
        var y = Ke(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = on(s, c), s = s[c];
      d && !l && (Qe[i] = s);
    }
  }
  return s;
}, Qi = Ki, Zt = Qi("%Object.getOwnPropertyDescriptor%", !0);
if (Zt)
  try {
    Zt([], "length");
  } catch {
    Zt = null;
  }
var xa = Zt, Ur = dr(), Xi = fn, ot = et, Br = xa, Zi = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new ot("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new ot("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ot("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ot("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ot("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ot("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Br && Br(e, n);
  if (Ur)
    Ur(e, n, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: r,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !a && !o && !i)
    e[n] = r;
  else
    throw new Xi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ln = dr(), Ea = function() {
  return !!Ln;
};
Ea.hasArrayLengthDefineBug = function() {
  if (!Ln)
    return null;
  try {
    return Ln([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Yi = Ea, el = _i, Nr = Zi, tl = Yi(), jr = xa, zr = et, nl = el("%Math.floor%"), rl = function(e, n) {
  if (typeof e != "function")
    throw new zr("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || nl(n) !== n)
    throw new zr("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && jr) {
    var i = jr(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !r) && (tl ? Nr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Nr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = Ft, n = pr, r = rl, a = et, o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(i, o), l = dr(), u = n("%Math.max%");
  t.exports = function(c) {
    if (typeof c != "function")
      throw new a("a function is required");
    var f = s(e, i, arguments);
    return r(
      f,
      1 + u(0, c.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return s(e, o, arguments);
  };
  l ? l(t.exports, "apply", { value: p }) : t.exports.apply = p;
})($a);
var al = $a.exports, Da = pr, Ca = al, ol = Ca(Da("String.prototype.indexOf")), il = function(e, n) {
  var r = Da(e, !!n);
  return typeof r == "function" && ol(e, ".prototype.") > -1 ? Ca(r) : r;
};
const ll = {}, sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ll
}, Symbol.toStringTag, { value: "Module" })), ul = /* @__PURE__ */ Po(sl);
var fr = typeof Map == "function" && Map.prototype, En = Object.getOwnPropertyDescriptor && fr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, sn = fr && En && typeof En.get == "function" ? En.get : null, Lr = fr && Map.prototype.forEach, mr = typeof Set == "function" && Set.prototype, Dn = Object.getOwnPropertyDescriptor && mr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, un = mr && Dn && typeof Dn.get == "function" ? Dn.get : null, Wr = mr && Set.prototype.forEach, cl = typeof WeakMap == "function" && WeakMap.prototype, It = cl ? WeakMap.prototype.has : null, pl = typeof WeakSet == "function" && WeakSet.prototype, xt = pl ? WeakSet.prototype.has : null, dl = typeof WeakRef == "function" && WeakRef.prototype, Gr = dl ? WeakRef.prototype.deref : null, fl = Boolean.prototype.valueOf, ml = Object.prototype.toString, yl = Function.prototype.toString, hl = String.prototype.match, yr = String.prototype.slice, Me = String.prototype.replace, vl = String.prototype.toUpperCase, Hr = String.prototype.toLowerCase, Ra = RegExp.prototype.test, qr = Array.prototype.concat, Ie = Array.prototype.join, gl = Array.prototype.slice, Jr = Math.floor, Wn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Cn = Object.getOwnPropertySymbols, Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, vt = typeof Symbol == "function" && typeof Symbol.iterator == "object", me = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === vt || !0) ? Symbol.toStringTag : null, Oa = Object.prototype.propertyIsEnumerable, Kr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Qr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ra.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Jr(-t) : Jr(t);
    if (r !== t) {
      var a = String(r), o = yr.call(e, a.length + 1);
      return Me.call(a, n, "$&_") + "." + Me.call(Me.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Me.call(e, n, "$&_");
}
var Hn = ul, Xr = Hn.custom, Zr = Ma(Xr) ? Xr : null, bl = function t(e, n, r, a) {
  var o = n || {};
  if (Fe(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Fe(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Fe(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Fe(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Fe(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Va(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? Qr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? Qr(e, u) : u;
  }
  var p = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return qn(e) ? "[Array]" : "[Object]";
  var d = Vl(o, r);
  if (typeof a > "u")
    a = [];
  else if (Ta(a, e) >= 0)
    return "[Circular]";
  function c(D, W, B) {
    if (W && (a = gl.call(a), a.push(W)), B) {
      var ee = {
        depth: o.depth
      };
      return Fe(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), t(D, ee, r + 1, a);
    }
    return t(D, o, r + 1, a);
  }
  if (typeof e == "function" && !Yr(e)) {
    var f = xl(e), h = Nt(e, c);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (h.length > 0 ? " { " + Ie.call(h, ", ") + " }" : "");
  }
  if (Ma(e)) {
    var y = vt ? Me.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Gn.call(e);
    return typeof e == "object" && !vt ? At(y) : y;
  }
  if (Fl(e)) {
    for (var g = "<" + Hr.call(String(e.nodeName)), k = e.attributes || [], $ = 0; $ < k.length; $++)
      g += " " + k[$].name + "=" + Fa(wl(k[$].value), "double", o);
    return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + Hr.call(String(e.nodeName)) + ">", g;
  }
  if (qn(e)) {
    if (e.length === 0)
      return "[]";
    var v = Nt(e, c);
    return d && !Tl(v) ? "[" + Jn(v, d) + "]" : "[ " + Ie.call(v, ", ") + " ]";
  }
  if (Sl(e)) {
    var _ = Nt(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Oa.call(e, "cause") ? "{ [" + String(e) + "] " + Ie.call(qr.call("[cause]: " + c(e.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ie.call(_, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (Zr && typeof e[Zr] == "function" && Hn)
      return Hn(e, { depth: p - r });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (El(e)) {
    var P = [];
    return Lr && Lr.call(e, function(D, W) {
      P.push(c(W, e, !0) + " => " + c(D, e));
    }), ea("Map", sn.call(e), P, d);
  }
  if (Rl(e)) {
    var w = [];
    return Wr && Wr.call(e, function(D) {
      w.push(c(D, e));
    }), ea("Set", un.call(e), w, d);
  }
  if (Dl(e))
    return Rn("WeakMap");
  if (Ol(e))
    return Rn("WeakSet");
  if (Cl(e))
    return Rn("WeakRef");
  if (Al(e))
    return At(c(Number(e)));
  if (Pl(e))
    return At(c(Wn.call(e)));
  if ($l(e))
    return At(fl.call(e));
  if (kl(e))
    return At(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === $o)
    return "{ [object globalThis] }";
  if (!_l(e) && !Yr(e)) {
    var I = Nt(e, c), E = Kr ? Kr(e) === Object.prototype : e instanceof Object || e.constructor === Object, q = e instanceof Object ? "" : "null prototype", C = !E && me && Object(e) === e && me in e ? yr.call(Ve(e), 8, -1) : q ? "Object" : "", T = E || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", U = T + (C || q ? "[" + Ie.call(qr.call([], C || [], q || []), ": ") + "] " : "");
    return I.length === 0 ? U + "{}" : d ? U + "{" + Jn(I, d) + "}" : U + "{ " + Ie.call(I, ", ") + " }";
  }
  return String(e);
};
function Fa(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function wl(t) {
  return Me.call(String(t), /"/g, "&quot;");
}
function qn(t) {
  return Ve(t) === "[object Array]" && (!me || !(typeof t == "object" && me in t));
}
function _l(t) {
  return Ve(t) === "[object Date]" && (!me || !(typeof t == "object" && me in t));
}
function Yr(t) {
  return Ve(t) === "[object RegExp]" && (!me || !(typeof t == "object" && me in t));
}
function Sl(t) {
  return Ve(t) === "[object Error]" && (!me || !(typeof t == "object" && me in t));
}
function kl(t) {
  return Ve(t) === "[object String]" && (!me || !(typeof t == "object" && me in t));
}
function Al(t) {
  return Ve(t) === "[object Number]" && (!me || !(typeof t == "object" && me in t));
}
function $l(t) {
  return Ve(t) === "[object Boolean]" && (!me || !(typeof t == "object" && me in t));
}
function Ma(t) {
  if (vt)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Gn)
    return !1;
  try {
    return Gn.call(t), !0;
  } catch {
  }
  return !1;
}
function Pl(t) {
  if (!t || typeof t != "object" || !Wn)
    return !1;
  try {
    return Wn.call(t), !0;
  } catch {
  }
  return !1;
}
var Il = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Fe(t, e) {
  return Il.call(t, e);
}
function Ve(t) {
  return ml.call(t);
}
function xl(t) {
  if (t.name)
    return t.name;
  var e = hl.call(yl.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Ta(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function El(t) {
  if (!sn || !t || typeof t != "object")
    return !1;
  try {
    sn.call(t);
    try {
      un.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Dl(t) {
  if (!It || !t || typeof t != "object")
    return !1;
  try {
    It.call(t, It);
    try {
      xt.call(t, xt);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Cl(t) {
  if (!Gr || !t || typeof t != "object")
    return !1;
  try {
    return Gr.call(t), !0;
  } catch {
  }
  return !1;
}
function Rl(t) {
  if (!un || !t || typeof t != "object")
    return !1;
  try {
    un.call(t);
    try {
      sn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Ol(t) {
  if (!xt || !t || typeof t != "object")
    return !1;
  try {
    xt.call(t, xt);
    try {
      It.call(t, It);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Fl(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Va(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Va(yr.call(t, 0, e.maxStringLength), e) + r;
  }
  var a = Me.call(Me.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ml);
  return Fa(a, "single", e);
}
function Ml(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + vl.call(e.toString(16));
}
function At(t) {
  return "Object(" + t + ")";
}
function Rn(t) {
  return t + " { ? }";
}
function ea(t, e, n, r) {
  var a = r ? Jn(n, r) : Ie.call(n, ", ");
  return t + " (" + e + ") {" + a + "}";
}
function Tl(t) {
  for (var e = 0; e < t.length; e++)
    if (Ta(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Vl(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = Ie.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ie.call(Array(e + 1), n)
  };
}
function Jn(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + Ie.call(t, "," + n) + `
` + e.prev;
}
function Nt(t, e) {
  var n = qn(t), r = [];
  if (n) {
    r.length = t.length;
    for (var a = 0; a < t.length; a++)
      r[a] = Fe(t, a) ? e(t[a], t) : "";
  }
  var o = typeof Cn == "function" ? Cn(t) : [], i;
  if (vt) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in t)
    Fe(t, l) && (n && String(Number(l)) === l && l < t.length || vt && i["$" + l] instanceof Symbol || (Ra.call(/[^\w$]/, l) ? r.push(e(l, t) + ": " + e(t[l], t)) : r.push(l + ": " + e(t[l], t))));
  if (typeof Cn == "function")
    for (var u = 0; u < o.length; u++)
      Oa.call(t, o[u]) && r.push("[" + e(o[u]) + "]: " + e(t[o[u]], t));
  return r;
}
var Ua = pr, wt = il, Ul = bl, Bl = et, jt = Ua("%WeakMap%", !0), zt = Ua("%Map%", !0), Nl = wt("WeakMap.prototype.get", !0), jl = wt("WeakMap.prototype.set", !0), zl = wt("WeakMap.prototype.has", !0), Ll = wt("Map.prototype.get", !0), Wl = wt("Map.prototype.set", !0), Gl = wt("Map.prototype.has", !0), hr = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, Hl = function(t, e) {
  var n = hr(t, e);
  return n && n.value;
}, ql = function(t, e, n) {
  var r = hr(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, Jl = function(t, e) {
  return !!hr(t, e);
}, Kl = function() {
  var e, n, r, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new Bl("Side channel does not contain " + Ul(o));
    },
    get: function(o) {
      if (jt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Nl(e, o);
      } else if (zt) {
        if (n)
          return Ll(n, o);
      } else if (r)
        return Hl(r, o);
    },
    has: function(o) {
      if (jt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return zl(e, o);
      } else if (zt) {
        if (n)
          return Gl(n, o);
      } else if (r)
        return Jl(r, o);
      return !1;
    },
    set: function(o, i) {
      jt && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new jt()), jl(e, o, i)) : zt ? (n || (n = new zt()), Wl(n, o, i)) : (r || (r = { key: {}, next: null }), ql(r, o, i));
    }
  };
  return a;
}, Ql = String.prototype.replace, Xl = /%20/g, On = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, vr = {
  default: On.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Ql.call(t, Xl, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: On.RFC1738,
  RFC3986: On.RFC3986
}, Zl = vr, Fn = Object.prototype.hasOwnProperty, Le = Array.isArray, $e = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Yl = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Le(r)) {
      for (var a = [], o = 0; o < r.length; ++o)
        typeof r[o] < "u" && a.push(r[o]);
      n.obj[n.prop] = a;
    }
  }
}, Ba = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (r[a] = e[a]);
  return r;
}, es = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Le(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Fn.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var a = e;
  return Le(e) && !Le(n) && (a = Ba(e, r)), Le(e) && Le(n) ? (n.forEach(function(o, i) {
    if (Fn.call(e, i)) {
      var s = e[i];
      s && typeof s == "object" && o && typeof o == "object" ? e[i] = t(s, o, r) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(n).reduce(function(o, i) {
    var s = n[i];
    return Fn.call(o, i) ? o[i] = t(o[i], s, r) : o[i] = s, o;
  }, a);
}, ts = function(e, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, e);
}, ns = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, rs = function(e, n, r, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), r === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < i.length; ++l) {
    var u = i.charCodeAt(l);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Zl.RFC1738 && (u === 40 || u === 41)) {
      s += i.charAt(l);
      continue;
    }
    if (u < 128) {
      s = s + $e[u];
      continue;
    }
    if (u < 2048) {
      s = s + ($e[192 | u >> 6] + $e[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + ($e[224 | u >> 12] + $e[128 | u >> 6 & 63] + $e[128 | u & 63]);
      continue;
    }
    l += 1, u = 65536 + ((u & 1023) << 10 | i.charCodeAt(l) & 1023), s += $e[240 | u >> 18] + $e[128 | u >> 12 & 63] + $e[128 | u >> 6 & 63] + $e[128 | u & 63];
  }
  return s;
}, as = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var o = n[a], i = o.obj[o.prop], s = Object.keys(i), l = 0; l < s.length; ++l) {
      var u = s[l], p = i[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: i, prop: u }), r.push(p));
    }
  return Yl(n), e;
}, os = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, is = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ls = function(e, n) {
  return [].concat(e, n);
}, ss = function(e, n) {
  if (Le(e)) {
    for (var r = [], a = 0; a < e.length; a += 1)
      r.push(n(e[a]));
    return r;
  }
  return n(e);
}, Na = {
  arrayToObject: Ba,
  assign: ts,
  combine: ls,
  compact: as,
  decode: ns,
  encode: rs,
  isBuffer: is,
  isRegExp: os,
  maybeMap: ss,
  merge: es
}, ja = Kl, Yt = Na, Et = vr, us = Object.prototype.hasOwnProperty, za = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, Pe = Array.isArray, cs = Array.prototype.push, La = function(t, e) {
  cs.apply(t, Pe(e) ? e : [e]);
}, ps = Date.prototype.toISOString, ta = Et.default, le = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Yt.encode,
  encodeValuesOnly: !1,
  format: ta,
  formatter: Et.formatters[ta],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ps.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ds = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Mn = {}, fs = function t(e, n, r, a, o, i, s, l, u, p, d, c, f, h, y, g, k, $) {
  for (var v = e, _ = $, P = 0, w = !1; (_ = _.get(Mn)) !== void 0 && !w; ) {
    var I = _.get(e);
    if (P += 1, typeof I < "u") {
      if (I === P)
        throw new RangeError("Cyclic object value");
      w = !0;
    }
    typeof _.get(Mn) > "u" && (P = 0);
  }
  if (typeof p == "function" ? v = p(n, v) : v instanceof Date ? v = f(v) : r === "comma" && Pe(v) && (v = Yt.maybeMap(v, function(G) {
    return G instanceof Date ? f(G) : G;
  })), v === null) {
    if (i)
      return u && !g ? u(n, le.encoder, k, "key", h) : n;
    v = "";
  }
  if (ds(v) || Yt.isBuffer(v)) {
    if (u) {
      var E = g ? n : u(n, le.encoder, k, "key", h);
      return [y(E) + "=" + y(u(v, le.encoder, k, "value", h))];
    }
    return [y(n) + "=" + y(String(v))];
  }
  var q = [];
  if (typeof v > "u")
    return q;
  var C;
  if (r === "comma" && Pe(v))
    g && u && (v = Yt.maybeMap(v, u)), C = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (Pe(p))
    C = p;
  else {
    var T = Object.keys(v);
    C = d ? T.sort(d) : T;
  }
  var U = l ? n.replace(/\./g, "%2E") : n, D = a && Pe(v) && v.length === 1 ? U + "[]" : U;
  if (o && Pe(v) && v.length === 0)
    return D + "[]";
  for (var W = 0; W < C.length; ++W) {
    var B = C[W], ee = typeof B == "object" && typeof B.value < "u" ? B.value : v[B];
    if (!(s && ee === null)) {
      var X = c && l ? B.replace(/\./g, "%2E") : B, M = Pe(v) ? typeof r == "function" ? r(D, X) : D : D + (c ? "." + X : "[" + X + "]");
      $.set(e, P);
      var J = ja();
      J.set(Mn, $), La(q, t(
        ee,
        M,
        r,
        a,
        o,
        i,
        s,
        l,
        r === "comma" && g && Pe(v) ? null : u,
        p,
        d,
        c,
        f,
        h,
        y,
        g,
        k,
        J
      ));
    }
  }
  return q;
}, ms = function(e) {
  if (!e)
    return le;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || le.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Et.default;
  if (typeof e.format < "u") {
    if (!us.call(Et.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var a = Et.formatters[r], o = le.filter;
  (typeof e.filter == "function" || Pe(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in za ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = le.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : le.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : le.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : le.allowEmptyArrays,
    arrayFormat: i,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : le.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? le.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : le.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : le.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : le.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : le.encodeValuesOnly,
    filter: o,
    format: r,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : le.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : le.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : le.strictNullHandling
  };
}, ys = function(t, e) {
  var n = t, r = ms(e), a, o;
  typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : Pe(r.filter) && (o = r.filter, a = o);
  var i = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = za[r.arrayFormat], l = s === "comma" && r.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var u = ja(), p = 0; p < a.length; ++p) {
    var d = a[p];
    r.skipNulls && n[d] === null || La(i, fs(
      n[d],
      d,
      s,
      l,
      r.allowEmptyArrays,
      r.strictNullHandling,
      r.skipNulls,
      r.encodeDotInKeys,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      u
    ));
  }
  var c = i.join(r.delimiter), f = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? f += "utf8=%26%2310003%3B&" : f += "utf8=%E2%9C%93&"), c.length > 0 ? f + c : "";
}, gt = Na, Kn = Object.prototype.hasOwnProperty, hs = Array.isArray, ne = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: gt.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, vs = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Wa = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, gs = "utf8=%26%2310003%3B", bs = "utf8=%E2%9C%93", ws = function(e, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, i = a.split(n.delimiter, o), s = -1, l, u = n.charset;
  if (n.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === bs ? u = "utf-8" : i[l] === gs && (u = "iso-8859-1"), s = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== s) {
      var p = i[l], d = p.indexOf("]="), c = d === -1 ? p.indexOf("=") : d + 1, f, h;
      c === -1 ? (f = n.decoder(p, ne.decoder, u, "key"), h = n.strictNullHandling ? null : "") : (f = n.decoder(p.slice(0, c), ne.decoder, u, "key"), h = gt.maybeMap(
        Wa(p.slice(c + 1), n),
        function(g) {
          return n.decoder(g, ne.decoder, u, "value");
        }
      )), h && n.interpretNumericEntities && u === "iso-8859-1" && (h = vs(h)), p.indexOf("[]=") > -1 && (h = hs(h) ? [h] : h);
      var y = Kn.call(r, f);
      y && n.duplicates === "combine" ? r[f] = gt.combine(r[f], h) : (!y || n.duplicates === "last") && (r[f] = h);
    }
  return r;
}, _s = function(t, e, n, r) {
  for (var a = r ? e : Wa(e, n), o = t.length - 1; o >= 0; --o) {
    var i, s = t[o];
    if (s === "[]" && n.parseArrays)
      i = n.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = n.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, p = parseInt(u, 10);
      !n.parseArrays && u === "" ? i = { 0: a } : !isNaN(p) && s !== u && String(p) === u && p >= 0 && n.parseArrays && p <= n.arrayLimit ? (i = [], i[p] = a) : u !== "__proto__" && (i[u] = a);
    }
    a = i;
  }
  return a;
}, Ss = function(e, n, r, a) {
  if (e) {
    var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = r.depth > 0 && i.exec(o), u = l ? o.slice(0, l.index) : o, p = [];
    if (u) {
      if (!r.plainObjects && Kn.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      p.push(u);
    }
    for (var d = 0; r.depth > 0 && (l = s.exec(o)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && Kn.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      p.push(l[1]);
    }
    return l && p.push("[" + o.slice(l.index) + "]"), _s(p, n, r, a);
  }
}, ks = function(e) {
  if (!e)
    return ne;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? ne.charset : e.charset, r = typeof e.duplicates > "u" ? ne.duplicates : e.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : ne.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : ne.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ne.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ne.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ne.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ne.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : ne.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : ne.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : ne.decoder,
    delimiter: typeof e.delimiter == "string" || gt.isRegExp(e.delimiter) ? e.delimiter : ne.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ne.depth,
    duplicates: r,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ne.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ne.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ne.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ne.strictNullHandling
  };
}, As = function(t, e) {
  var n = ks(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? ws(t, n) : t, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(r), i = 0; i < o.length; ++i) {
    var s = o[i], l = Ss(s, r[s], n, typeof t == "string");
    a = gt.merge(a, l, n);
  }
  return n.allowSparse === !0 ? a : gt.compact(a);
}, $s = ys, Ps = As, Is = vr, xs = {
  formats: Is,
  parse: Ps,
  stringify: $s
};
const Es = /* @__PURE__ */ ar(xs), gr = [
  {
    name: "徒手格斗",
    skill: "格斗(斗殴)",
    dam: "1D3+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弓箭",
    skill: "射击(弓弩)",
    dam: "1D6+半DB",
    tho: 0,
    range: "30",
    round: "1",
    num: "1",
    price: "7/75",
    err: "97",
    time: "1920s，现代"
  },
  {
    name: "黄铜指虎",
    skill: "格斗(斗殴)",
    dam: "1D3+1+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "长鞭",
    skill: "格斗(鞭)",
    dam: "1D3+半DB",
    tho: 0,
    range: "3",
    round: "1",
    num: "",
    price: "5/50",
    err: "97",
    time: "1920s"
  },
  {
    name: "燃烧的火把",
    skill: "格斗(斗殴)",
    dam: "1D6+燃烧",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "0.05/0.5",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "链锯",
    skill: "格斗(链锯)",
    dam: "2D8",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "-/300",
    err: "95",
    time: "现代"
  },
  {
    name: "包革金属棒(大头棍、护身棒)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大棒(棒球棒、拨火棍)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型棍棒(警棍)",
    skill: "格斗(斗殴)",
    dam: "1D6+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弩",
    skill: "射击(弓弩)",
    dam: "1D8+2",
    tho: 1,
    range: "50",
    round: "1/2",
    num: "1",
    price: "10/100",
    err: "96",
    time: "1920s，现代"
  },
  {
    name: "绞索",
    skill: "格斗(绞索)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "0.5/3",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手斧/手镰",
    skill: "格斗(斧)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "3/9",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大型刀(甘蔗刀等)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "4/50",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型刀(切肉餐刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型刀(弹簧折叠刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/6",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "220V通电导线",
    skill: "格斗(斗殴)",
    dam: "2D8+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "95",
    time: "现代"
  },
  {
    name: "催泪喷雾",
    skill: "格斗(斗殴)",
    dam: "晕",
    tho: 0,
    range: "2",
    round: "1",
    num: "25",
    price: "-/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "双节棍",
    skill: "格斗(链枷)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投石",
    skill: "投掷",
    dam: "1D4+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手里剑",
    skill: "投掷",
    dam: "1D3+DB",
    tho: 1,
    range: "STR/5m",
    round: "1/2",
    num: "1",
    price: "750",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "矛、骑士长枪",
    skill: "格斗(矛)",
    dam: "1D8+1",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/150",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投矛",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 1,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "42760",
    err: "",
    time: "稀有"
  },
  {
    name: "大型剑(马刀)",
    skill: "格斗(刀剑)",
    dam: "1D8+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "30/75",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型剑(佩剑、重剑)",
    skill: "格斗(刀剑)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "15/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "轻型剑(花剑、剑杖)",
    skill: "格斗(刀剑)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "电棍",
    skill: "格斗(斗殴)",
    dam: "1D3+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "-/200",
    err: "97",
    time: "现代"
  },
  {
    name: "电击枪",
    skill: "射击(手枪)",
    dam: "1D3+晕",
    tho: 0,
    range: "5",
    round: "1",
    num: "3",
    price: "-/400",
    err: "95",
    time: "现代"
  },
  {
    name: "战斗回力镖",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "2/4",
    err: "",
    time: "稀有"
  },
  {
    name: "伐木斧",
    skill: "格斗(斧)",
    dam: "1D8+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "5/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "燧发手枪",
    skill: "射击(手枪)",
    dam: "1D6+1",
    tho: 1,
    range: "10",
    round: "1/4",
    num: "1",
    price: "30/300",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22(5.6mm)小型自动手枪",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "10",
    round: "1(3)",
    num: "6",
    price: "25/190",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".25(6.35mm)短口手枪(单管)",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "3",
    round: "1",
    num: "1",
    price: "12/55",
    err: "100",
    time: "1920s"
  },
  {
    name: ".32(7.65mm)左轮",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "15/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".32(7.65mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "20/350",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".357马格南左轮",
    skill: "射击(手枪)",
    dam: "1D8+1D4",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "425",
    err: "100",
    time: "现代"
  },
  {
    name: ".38(9mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "25/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".38(9mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/375",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "贝瑞塔M9",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "15",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm格洛克17",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "17",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm鲁格P08",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "75/600",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".41(10.4mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/-",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: ".44(11.2mm)马格南左轮",
    skill: "射击(手枪)",
    dam: "1D10+1D4+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "-/475",
    err: "100",
    time: "现代"
  },
  {
    name: ".45(11.43mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "30/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".45(11.43mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "40/375",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "IMI 沙漠之鹰",
    skill: "射击(手枪)",
    dam: "1D10+1D6+3",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "-/650",
    err: "94",
    time: "现代"
  },
  {
    name: ".58 (14.7mm)1855年式春田步枪",
    skill: "射击(步/霰)",
    dam: "1D10+4",
    tho: 1,
    range: "60",
    round: "1/4",
    num: "1",
    price: "25/350",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22 (5.6mm)栓式枪机步枪",
    skill: "射击(步/霰)",
    dam: "1D6+1",
    tho: 1,
    range: "30",
    round: "1",
    num: "6",
    price: "13/70",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".30 (7.62mm)杠杆式枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "50",
    round: "1",
    num: "6",
    price: "19/150",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: ".45 (11.43mm)马蒂尼-亨利步枪",
    skill: "射击(步/霰)",
    dam: "1D8+1D6+3",
    tho: 1,
    range: "80",
    round: "1/3",
    num: "1",
    price: "20/200",
    err: "100",
    time: "1920s"
  },
  {
    name: "莫兰上校的气动步枪③",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "200/-",
    err: "88",
    time: "1920s"
  },
  {
    name: "加兰德M1、M2步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "8",
    price: "-/400",
    err: "100",
    time: "二战及以后"
  },
  {
    name: "SKS半自动步枪(56半)",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "90",
    round: "1(2)",
    num: "10",
    price: "-/500",
    err: "97",
    time: "现代"
  },
  {
    name: ".303(7.7mm)李-恩菲尔德",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "50/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)手动枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "75/175",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)半自动步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/275",
    err: "100",
    time: "现代"
  },
  {
    name: ".444(11.28mm)马林步枪",
    skill: "射击(步/霰)",
    dam: "2D8+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/400",
    err: "98",
    time: "现代"
  },
  {
    name: "猎象枪(双管)",
    skill: "射击(步/霰)",
    dam: "3D6+4",
    tho: 1,
    range: "100",
    round: "1或2",
    num: "2",
    price: "400/1000",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "AK-47或AKM",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "100",
    round: "1(2)或全自动",
    num: "30",
    price: "200",
    err: "100",
    time: "现代"
  },
  {
    name: "AK-74",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1000",
    err: "97",
    time: "现代"
  },
  {
    name: "M1918式勃朗宁自动步枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "90",
    round: "1(2)或全自动",
    num: "20",
    price: "800/1500",
    err: "100",
    time: "1920s"
  },
  {
    name: "FN FAL 突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "20",
    price: "1500",
    err: "97",
    time: "现代"
  },
  {
    name: "加利尔突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "20",
    price: "2000",
    err: "98",
    time: "现代"
  },
  {
    name: "M16A2",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "M4",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "90",
    round: "1或3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "斯泰尔AUG",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1100",
    err: "99",
    time: "现代"
  },
  {
    name: "贝雷塔AR70/90",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30",
    price: "2800",
    err: "99",
    time: "现代"
  },
  {
    name: "20号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6/1D6/1D3",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "35/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "16号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6+2/1D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "12号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "12号霰弹枪(手压式)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(半自动)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(双管,锯短)",
    skill: "射击(步/霰)",
    dam: "4D6/1D6",
    tho: 0,
    range: "5/10",
    round: "1或2",
    num: "2",
    price: "",
    err: "100",
    time: "1920s"
  },
  {
    name: "10号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6+2/2D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "稀",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: "12号贝里尼M3(折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "7",
    price: "-/895",
    err: "100",
    time: "现代"
  },
  {
    name: "12号SPAS (折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "8",
    price: "-/600",
    err: "98",
    time: "现代"
  },
  {
    name: "MP18I/M现代28II",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "20/30/32",
    price: "1000/20000",
    err: "96",
    time: "1920s"
  },
  {
    name: "MP5",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "15/30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "MAC-11",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "32",
    price: "-/750",
    err: "96",
    time: "现代"
  },
  {
    name: "蝎式",
    skill: "射击(冲锋枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "20",
    price: "",
    err: "96",
    time: "现代"
  },
  {
    name: "汤普森",
    skill: "射击(冲锋枪)",
    dam: "1D10+2",
    tho: 1,
    range: "20",
    round: "1或全自动",
    num: "20/30/50",
    price: "200+/1600",
    err: "96",
    time: "1920s"
  },
  {
    name: "乌兹",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "32",
    price: "-/1000",
    err: "98",
    time: "现代"
  },
  {
    name: "巴雷特M82",
    skill: "射击(步/霰)",
    dam: "2D10+1D8+6",
    tho: 1,
    range: "250",
    round: "1",
    num: "11",
    price: "3000",
    err: "96",
    time: "现代"
  },
  {
    name: "PTRD-41反坦克步枪",
    skill: "射击(步/霰)",
    dam: "2D10+1D10+8",
    tho: 1,
    range: "230",
    round: "1",
    num: "5",
    price: "1500",
    err: "94",
    time: "现代"
  },
  {
    name: "1882年式加特林",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "100",
    round: "全自动",
    num: "200",
    price: "2000/14000",
    err: "96",
    time: "1920s稀有"
  },
  {
    name: "勃朗宁M1917A1(7.62mm)",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "150",
    round: "全自动",
    num: "250",
    price: "3000/3万",
    err: "96",
    time: "1920s"
  },
  {
    name: "布伦轻机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30/100",
    price: "3000/5万",
    err: "96",
    time: "1920s"
  },
  {
    name: "路易斯Ⅰ型机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "27/97",
    price: "3000/2万",
    err: "96",
    time: "1920s"
  },
  {
    name: "GE M134式7.62mm速射机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "200",
    round: "全自动",
    num: "4000",
    price: "",
    err: "98",
    time: "现代"
  },
  {
    name: "FN 米尼米，弹夹/弹带",
    skill: "射击(机枪)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "30/200",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "维克斯.303机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "250",
    price: "",
    err: "99",
    time: "1920s"
  },
  {
    name: "莫洛托夫鸡尾酒",
    skill: "投掷",
    dam: "2D6 烧",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "信号枪(信号弹枪)",
    skill: "射击(手枪)",
    dam: "1D10+1D3 烧",
    tho: 1,
    range: "10",
    round: "1/2",
    num: "1",
    price: "15/75",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "M79式40mm榴弹发射器",
    skill: "射击(重武器)",
    dam: "3D10/2码",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "炸药棒",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "2/5",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "雷管",
    skill: "电气维修",
    dam: "2D10/1码",
    tho: 1,
    range: "",
    round: "",
    num: "一次性",
    price: "20/整盒",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "爆破筒",
    skill: "爆破",
    dam: "1D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "　",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "塑胶炸弹(C-4)，4盎司",
    skill: "爆破",
    dam: "6D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "手榴弹",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "81mm迫击炮",
    skill: "炮术",
    dam: "6D10/6码",
    tho: 1,
    range: "500",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "75mm野战火炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "500",
    round: "1/4",
    num: "独立装弹",
    price: "1500/-",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "120mm坦克主炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "2000",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "5英寸(127mm)舰炮",
    skill: "炮术",
    dam: "15D10/4码",
    tho: 1,
    range: "3000",
    round: "1",
    num: "自动上弹",
    price: "",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: "反步兵地雷",
    skill: "爆破",
    dam: "4D10/5码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "阔剑地雷",
    skill: "爆破",
    dam: "6D6/20码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "火焰喷射器",
    skill: "射击(喷射器)",
    dam: "2D6+烧",
    tho: 1,
    range: "25",
    round: "1",
    num: "至少10",
    price: "",
    err: "93",
    time: "1920s，现代"
  },
  {
    name: "M72式单发轻型反坦克炮",
    skill: "射击(重武器)",
    dam: "8D10/1码",
    tho: 1,
    range: "150",
    round: "1",
    num: "1",
    price: "",
    err: "98",
    time: "现代"
  },
  {
    name: "ZP5左轮",
    skill: "射击(手枪)",
    dam: "1D8+1D4",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "12",
    err: "100",
    time: "现代"
  },
  {
    name: "DK-05 P320",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "10",
    err: "100",
    time: "现代"
  },
  {
    name: "STS 鲁格 Mark 4",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "10",
    round: "1",
    num: "6",
    price: "5",
    err: "100",
    time: "现代"
  },
  {
    name: "幻影科技芒种",
    skill: "射击(步/霰)",
    dam: "1D10/1D6+DB",
    tho: 1,
    range: "20",
    round: "1",
    num: "5",
    price: "15",
    err: "95",
    time: "现代"
  },
  {
    name: "双管猎枪",
    skill: "射击(步/霰)",
    dam: "2D6/1D6",
    tho: 0,
    range: "20",
    round: "1",
    num: "2",
    price: "10",
    err: "95",
    time: "现代"
  },
  // 日本合法
  {
    name: "武士刀",
    skill: "格斗(刀剑)",
    dam: "1D10+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "40000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "竹刀",
    skill: "格斗(刀剑)",
    dam: "击晕+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "太刀",
    skill: "格斗(刀剑)",
    dam: "2D8+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "80000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "胁差",
    skill: "格斗(刀剑)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "18000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弓道之弓",
    skill: "射击(弓弩)",
    dam: "1D6+DB",
    tho: 1,
    range: "90",
    round: "1/2",
    num: "",
    price: "70000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "薙刀",
    skill: "格斗(刀剑)",
    dam: "1D8+DB",
    tho: 1,
    range: "10",
    round: "1",
    num: "",
    price: "50000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "撬棍",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1500",
    err: "",
    time: "1920s，现代"
  }
], Ga = {
  // 常规
  cg: [
    "徒手格斗",
    "弓箭",
    "黄铜指虎",
    "长鞭",
    "燃烧的火把",
    "链锯",
    "包革金属棒(大头棍、护身棒)",
    "大棒(棒球棒、拨火棍)",
    "小型棍棒(警棍)",
    "弩",
    "绞索",
    "手斧/手镰",
    "大型刀(甘蔗刀等)",
    "中型刀(切肉餐刀等)",
    "小型刀(弹簧折叠刀等)",
    "220V通电导线",
    "催泪喷雾",
    "双节棍",
    "投石",
    "手里剑",
    "矛、骑士长枪",
    "投矛",
    "大型剑(马刀)",
    "中型剑(佩剑、重剑)",
    "轻型剑(花剑、剑杖)",
    "电棍",
    "电击枪",
    "战斗回力镖",
    "伐木斧"
  ],
  // 手枪
  sq: [
    "燧发手枪",
    ".22(5.6mm)小型自动手枪",
    ".25(6.35mm)短口手枪(单管)",
    ".32(7.65mm)左轮",
    ".32(7.65mm)自动手枪",
    ".357马格南左轮",
    ".38(9mm)左轮",
    ".38(9mm)自动手枪",
    "贝瑞塔M9",
    "9mm格洛克17",
    "9mm鲁格P08",
    ".41(10.4mm)左轮",
    ".44(11.2mm)马格南左轮",
    ".45(11.43mm)左轮",
    ".45(11.43mm)自动手枪",
    "IMI 沙漠之鹰",
    "ZP5左轮",
    "DK-05 P320",
    "STS 鲁格 Mark 4"
  ],
  // 半自动步枪
  bbq: [
    ".58 (14.7mm)1855年式春田步枪",
    ".22 (5.6mm)栓式枪机步枪",
    ".30 (7.62mm)杠杆式枪机步枪",
    ".45 (11.43mm)马蒂尼-亨利步枪",
    "莫兰上校的气动步枪③",
    "加兰德M1、M2步枪",
    "SKS半自动步枪(56半)",
    ".303(7.7mm)李-恩菲尔德",
    ".30-06(7.62mm)手动枪机步枪",
    ".30-06(7.62mm)半自动步枪",
    ".444(11.28mm)马林步枪",
    "猎象枪(双管)"
  ],
  // 全自动步枪
  tsq: [
    "AK-47或AKM",
    "AK-74",
    "FN FAL 突击步枪",
    "加利尔突击步枪",
    "M16A2",
    "M4",
    "斯泰尔AUG",
    "贝雷塔AR70/90"
  ],
  // 霰弹枪
  xdq: [
    "20号霰弹枪(双管)",
    "16号霰弹枪(双管)",
    "12号霰弹枪(双管)",
    "12号霰弹枪(手压式)",
    "12号霰弹枪(半自动)",
    "12号霰弹枪(双管,锯短)",
    "10号霰弹枪(双管)",
    "12号贝里尼M3(折叠式枪托)",
    "12号SPAS (折叠式枪托)",
    "幻影科技芒种",
    "双管猎枪"
  ],
  // 冲锋枪
  cfq: ["MP18I/M现代28II", "MP5", "MAC-11", "蝎式", "汤普森", "乌兹"],
  // 狙击步枪
  jjbq: ["巴雷特M82", "PTRD-41反坦克步枪"],
  // 机枪
  jq: [
    "1882年式加特林",
    "M1918式勃朗宁自动步枪",
    "勃朗宁M1917A1(7.62mm)",
    "布伦轻机枪",
    "路易斯Ⅰ型机枪",
    "GE M134式7.62mm速射机枪",
    "FN 米尼米，弹夹/弹带",
    "维克斯.303机枪"
  ],
  // 其它
  qt: [
    "莫洛托夫鸡尾酒",
    "信号枪(信号弹枪)",
    "M79式40mm榴弹发射器",
    "炸药棒",
    "雷管",
    "爆破筒",
    "塑胶炸弹(C-4)，4盎司",
    "手榴弹",
    "81mm迫击炮",
    "75mm野战火炮",
    "120mm坦克主炮",
    "5英寸(127mm)舰炮",
    "反步兵地雷",
    "阔剑地雷",
    "火焰喷射器",
    "M72式单发轻型反坦克炮"
  ],
  // 日本合法
  rbhf: [
    "武士刀",
    "竹刀",
    "太刀",
    "胁差",
    "弓道之弓",
    "薙刀",
    "手里剑",
    "撬棍"
  ]
}, Ha = [
  ["cg", "常规"],
  ["sq", "手枪"],
  ["bbq", "半自动步枪"],
  ["tsq", "全自动步枪"],
  ["xdq", "霰弹枪"],
  ["cfq", "冲锋枪"],
  ["jjbq", "狙击步枪"],
  ["jq", "机枪"],
  ["rbhf", "日本合法"],
  ["qt", "其它"]
];
function Qn(t) {
  return {
    name: "",
    skill: "",
    dam: "",
    tho: 0,
    range: "",
    round: "",
    num: "",
    err: "",
    ...t
  };
}
function Ds(t) {
  var e, n, r;
  return {
    mental: {
      hardened: ((e = t == null ? void 0 : t.mental) == null ? void 0 : e.hardened) ?? !1,
      permanentMadness: ((n = t == null ? void 0 : t.mental) == null ? void 0 : n.permanentMadness) ?? !1,
      indefiniteMadness: ((r = t == null ? void 0 : t.mental) == null ? void 0 : r.indefiniteMadness) ?? !1
    }
  };
}
function Cs(t) {
  return {
    currency: (t == null ? void 0 : t.currency) ?? (t == null ? void 0 : t.cash) ?? "",
    assets: (t == null ? void 0 : t.assets) ?? "",
    items: (t == null ? void 0 : t.items) ?? "",
    magicItems: (t == null ? void 0 : t.magicItems) ?? "",
    magics: (t == null ? void 0 : t.magics) ?? "",
    touches: (t == null ? void 0 : t.touches) ?? ""
  };
}
function We(t) {
  const e = Ds(t == null ? void 0 : t.status), n = Cs(t == null ? void 0 : t.assets);
  return {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    attributes: {},
    battleAttributes: {},
    weapons: [Qn(gr[0])],
    stories: {
      app: "",
      belief: "",
      IPerson: "",
      IPlace: "",
      IItem: "",
      trait: "",
      scar: "",
      mad: "",
      desc: ""
    },
    experiencedModules: "",
    experiencedModules2: "",
    friends: "",
    // override 在先，安全默认值在后，防止老存档 undefined 冲掉默认值
    ...t,
    hometown: (t == null ? void 0 : t.hometown) ?? "",
    pointValues: (t == null ? void 0 : t.pointValues) ?? {},
    proSkills: (t == null ? void 0 : t.proSkills) ?? [],
    skillPoints: (t == null ? void 0 : t.skillPoints) ?? [],
    assets: n,
    status: e
  };
}
const hn = [
  {
    name: "信用评级",
    displayName: "信誉",
    init: 0
  },
  {
    name: "克苏鲁神话",
    init: 0
  },
  {
    name: "侦查",
    init: 25
  },
  {
    name: "聆听",
    init: 20
  },
  {
    name: "取悦",
    init: 15
  },
  {
    name: "话术",
    init: 5
  },
  {
    name: "恐吓",
    init: 15
  },
  {
    name: "说服",
    init: 10
  },
  {
    name: "心理学",
    init: 10
  },
  {
    name: "母语",
    init: 0,
    initPlaceholder: "0",
    group: {
      show: [""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "外语",
    init: 1,
    group: {
      show: [""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "估价",
    init: 5
  },
  {
    name: "乔装",
    init: 5
  },
  {
    name: "潜行",
    init: 20
  },
  {
    name: "追踪",
    init: 10
  },
  {
    name: "读唇",
    init: 1
  },
  {
    name: "人类学",
    init: 1
  },
  {
    name: "图书馆使用",
    displayName: "图书馆",
    init: 20
  },
  {
    name: "生存",
    init: 5,
    group: {
      show: [""],
      skills: [
        {
          name: "沙漠",
          init: 5
        },
        {
          name: "森林",
          init: 5
        },
        {
          name: "荒岛",
          init: 5
        },
        {
          name: "高山",
          init: 5
        },
        {
          name: "海上",
          init: 5
        }
      ]
    }
  },
  {
    name: "攀爬",
    init: 20
  },
  {
    name: "跳跃",
    init: 20
  },
  {
    name: "游泳",
    init: 20
  },
  {
    name: "潜水",
    init: 1
  },
  {
    name: "技艺",
    init: 5,
    group: {
      show: ["", ""],
      skills: [
        {
          name: "表演",
          init: 5
        },
        {
          name: "音乐",
          init: 5
        },
        {
          name: "绘画",
          init: 5
        },
        {
          name: "艺术",
          init: 5
        },
        {
          name: "摄影",
          init: 5
        },
        {
          name: "写作",
          init: 5
        },
        {
          name: "书法",
          init: 5
        },
        {
          name: "打字",
          init: 5
        },
        {
          name: "速记",
          init: 5
        },
        {
          name: "伪造",
          init: 5
        },
        {
          name: "烹饪",
          init: 5
        },
        {
          name: "裁缝",
          init: 5
        },
        {
          name: "理发",
          init: 5
        },
        {
          name: "技术制图",
          init: 5
        },
        {
          name: "耕作",
          init: 5
        },
        {
          name: "木工",
          init: 5
        },
        {
          name: "铁匠",
          init: 5
        },
        {
          name: "焊接",
          init: 5
        },
        {
          name: "管道工",
          init: 5
        },
        {
          name: "茶道",
          init: 5
        },
        {
          name: "生花",
          init: 5
        },
        {
          name: "盆栽",
          init: 5
        },
        {
          name: "石庭",
          init: 5
        },
        {
          name: "筝",
          init: 5
        },
        {
          name: "三味线",
          init: 5
        },
        {
          name: "尺八",
          init: 5
        },
        {
          name: "太鼓",
          init: 5
        },
        {
          name: "能乐",
          init: 5
        },
        {
          name: "歌舞伎",
          init: 5
        },
        {
          name: "文乐",
          init: 5
        },
        {
          name: "踊",
          init: 5
        },
        {
          name: "芸者",
          init: 5
        },
        {
          name: "俳句",
          init: 5
        },
        {
          name: "墨绘",
          init: 5
        },
        {
          name: "浮世绘",
          init: 5
        },
        {
          name: "漆器",
          init: 5
        },
        {
          name: "日本刀",
          init: 5
        },
        {
          name: "窑业",
          init: 5
        },
        {
          name: "人形",
          init: 5
        },
        {
          name: "着物",
          init: 5
        },
        {
          name: "织物",
          init: 5
        },
        {
          name: "和纸",
          init: 5
        },
        {
          name: "歌唱",
          init: 5
        },
        {
          name: "舞蹈",
          init: 5
        }
      ]
    }
  },
  {
    name: "妙手",
    init: 10
  },
  {
    name: "锁匠",
    init: 1
  },
  {
    name: "电气维修",
    init: 10
  },
  {
    name: "机械维修",
    init: 10
  },
  {
    name: "导航",
    init: 10
  },
  {
    name: "骑术",
    init: 5
  },
  {
    name: "操作重型机械",
    init: 1
  },
  {
    name: "汽车驾驶",
    init: 20
  },
  {
    name: "驾驶",
    init: 1,
    group: {
      show: [""],
      skills: [
        {
          name: "船",
          init: 1
        },
        {
          name: "马车",
          init: 1
        },
        {
          name: "飞行器",
          init: 1
        }
      ]
    }
  },
  {
    name: "驯兽",
    init: 5
  },
  {
    name: "计算机使用Ω",
    displayName: "计算机",
    init: 5
  },
  {
    name: "格斗",
    init: 0,
    group: {
      show: ["斗殴", ""],
      skills: [
        {
          name: "斗殴",
          init: 25
        },
        {
          name: "刀剑",
          init: 20
        },
        {
          name: "矛",
          init: 20
        },
        {
          name: "斧",
          init: 15
        },
        {
          name: "绞索",
          init: 15
        },
        {
          name: "链锯",
          init: 10
        },
        {
          name: "链枷",
          init: 10
        },
        {
          name: "鞭",
          init: 5
        }
      ]
    }
  },
  {
    init: 0,
    name: "射击",
    group: {
      show: ["手枪", ""],
      skills: [
        {
          name: "手枪",
          init: 20
        },
        {
          name: "步/霰",
          init: 25
        },
        {
          name: "冲锋枪",
          init: 15
        },
        {
          name: "弓弩",
          init: 15
        },
        {
          name: "机枪",
          init: 10
        },
        {
          name: "重武器",
          init: 10
        }
      ]
    }
  },
  {
    name: "闪避",
    init: 0,
    initPlaceholder: "0"
  },
  {
    name: "投掷",
    init: 20
  },
  {
    name: "武术",
    init: 15,
    group: {
      show: ["", ""],
      skills: [
        { name: "合气道", init: 15 },
        { name: "居合", init: 15 },
        { name: "柔术", init: 15 },
        { name: "空手道", init: 15 },
        { name: "剑道", init: 15 },
        { name: "弓道", init: 15 },
        { name: "薙刀", init: 15 },
        { name: "忍术", init: 15 },
        { name: "太极", init: 15 }
      ]
    }
  },
  {
    name: "爆破",
    init: 1
  },
  {
    name: "炮术",
    init: 1
  },
  {
    name: "急救",
    init: 30
  },
  {
    name: "医学",
    init: 1
  },
  {
    name: "精神分析",
    init: 1
  },
  {
    name: "催眠",
    init: 1
  },
  {
    name: "东方医学",
    displayName: "中医",
    init: 25,
    group: {
      show: ["", ""],
      skills: [
        { name: "针术", init: 25 },
        { name: "指压", init: 25 },
        { name: "灸术", init: 25 },
        { name: "药术", init: 25 }
      ]
    }
  },
  {
    name: "会计",
    init: 5
  },
  {
    name: "法律",
    init: 5
  },
  {
    name: "历史",
    init: 5
  },
  {
    name: "考古学",
    init: 1
  },
  {
    name: "博物学",
    init: 10
  },
  {
    name: "武士道",
    init: 10
  },
  //   {
  //     name: '通灵',
  //     init: 5,
  //     intro: '与灵体、精怪、鬼神等超自然存在进行沟通与交涉的能力，可能涉及降灵术、灵视、灵媒等技术。',
  //   },
  {
    name: "风水",
    init: 15
  },
  {
    name: "稽古",
    init: 5,
    group: {
      show: [""],
      skills: [
        { name: "茶道", init: 5 },
        { name: "书道", init: 5 },
        { name: "花道", init: 5 },
        { name: "琴道", init: 5 },
        { name: "三味线", init: 5 }
      ]
    }
  },
  {
    name: "神秘学",
    init: 5
  },
  {
    name: "电子学Ω",
    displayName: "电子学",
    init: 1
  },
  {
    name: "科学",
    init: 1,
    group: {
      show: ["", ""],
      skills: [
        {
          name: "数学",
          init: 10
        },
        {
          name: "物理",
          init: 1
        },
        {
          name: "化学",
          init: 1
        },
        {
          name: "药学",
          init: 1
        },
        {
          name: "地质学",
          init: 1
        },
        {
          name: "生物学",
          init: 1
        },
        {
          name: "动物学",
          init: 1
        },
        {
          name: "植物学",
          init: 1
        },
        {
          name: "天文学",
          init: 1
        },
        {
          name: "密码学",
          init: 1
        },
        {
          name: "气象学",
          init: 1
        },
        {
          name: "工程学",
          init: 1
        },
        {
          name: "鉴证",
          init: 1
        },
        {
          name: "制药",
          init: 1
        }
      ]
    }
  },
  {
    init: 0,
    name: "",
    group: {
      show: ["", "", "", "", "", ""],
      skills: []
    }
  }
], Xn = {
  信用评级: ["信用", "信誉"],
  克苏鲁神话: ["克苏鲁"],
  取悦: ["魅惑"],
  汽车驾驶: ["汽车", "驾驶"],
  图书馆使用: ["图书馆"],
  计算机使用Ω: ["计算机", "电脑"],
  "步/霰": ["步枪", "霰弹枪"],
  锁匠: ["开锁", "撬锁"],
  博物学: ["自然学"],
  导航: ["领航"],
  操作重型机械: ["重型机械", "重型操作", "重型"]
}, Rs = {
  特殊: ["信用评级", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆使用",
    "计算机使用Ω",
    "潜行",
    "追踪",
    "导航"
  ],
  社交: ["取悦", "话术", "恐吓", "说服", "心理学", "母语", "外语", "读唇"],
  战斗: [
    "闪避",
    "武术",
    "格斗",
    "射击",
    "投掷"
    // '爆破',
    // '炮术',
  ],
  医疗: [
    "急救",
    "医学",
    "东方医学",
    "精神分析",
    "催眠"
  ],
  运动: [
    "攀爬",
    "跳跃",
    "游泳"
    // '潜水',
  ],
  知识: [
    "博物学",
    "武士道",
    // '通灵',
    "风水",
    "稽古",
    "神秘学",
    "考古学",
    "人类学",
    "估价",
    "会计",
    "法律",
    "历史",
    "电子学Ω",
    "科学"
  ],
  技术: [
    "乔装",
    "妙手",
    "锁匠",
    "机械维修",
    "电气维修",
    "驯兽",
    "技艺",
    "生存"
  ],
  操纵: ["汽车驾驶", "骑术", "驾驶", "操作重型机械"],
  其它: [""]
}, Os = [
  "特殊",
  "探索",
  "社交",
  "战斗",
  "医疗",
  "运动",
  "知识",
  "技术",
  "操纵",
  "其它"
];
function Fs({
  skills: t,
  groups: e,
  groupOrder: n
}) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((o) => {
    r.set(o.name, o);
  }), n.map((o) => {
    const s = e[o].map((l) => r.get(l));
    return {
      groupName: o,
      groupSkills: s
    };
  });
}
const Zn = Fs({
  skills: hn,
  groups: Rs,
  groupOrder: Os
}), bt = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2)
}, en = /* @__PURE__ */ new Map();
hn.forEach((t) => {
  var n;
  t.init && en.set(t.name, t.init);
  const e = Xn[t.name];
  e && e.forEach((r) => {
    t.init && en.set(r, t.init);
  }), (n = t.group) != null && n.skills && t.group.skills.forEach((r) => {
    r.init && en.set(r.name, r.init);
  });
});
function Ms(t, e) {
  return t ? e && t in bt ? bt[t](e) : en.get(t) ?? 0 : 0;
}
function qa(t) {
  const e = {};
  return hn.forEach((n) => {
    n.group && (e[n.name] = [...n.group.show]);
  }), t && (t.showingChildSkills = e), e;
}
function Ts(t, e) {
  const { attributes: n, deriveAttributes: r, skillPoints: a } = t, {
    str: o = 0,
    con: i = 0,
    siz: s = 0,
    dex: l = 0,
    app: u = 0,
    int: p = 0,
    pow: d = 0,
    edu: c = 0,
    luc: f = 0
  } = n, {
    hp: h = { start: 0 },
    mp: y = { start: 0 },
    sanity: g = { now: 0, start: 0 }
  } = r || {}, k = g.now == null || g.now === "" ? g.start : g.now, $ = `${t.name}-力量${o}str${o}敏捷${l}dex${l}体质${i}con${i}外貌${u}app${u}智力${p}灵感${p}int${p}意志${d}pow${d}体型${s}siz${s}教育${c}edu${c}幸运${f}运气${f}luck${f}`, v = `hp${h.start}体力${h.start}mp${y.start}魔法${y.start}san${k}理智${k}理智值${k}san值${k}`;
  let _ = "";
  const P = {};
  return a.forEach(([w, I]) => {
    var U;
    let E, q, C;
    Array.isArray(w) ? ([E, , C] = w, q = (U = e.showingChildSkills[E]) == null ? void 0 : U[C]) : E = w;
    const T = q ? `${E}-${q}` : E;
    P[T] = I;
  }), hn.forEach((w) => {
    var D;
    const { name: I, displayName: E, init: q, group: C } = w;
    let T = bt[I] ? bt[I](t) : q;
    const U = E ?? I;
    if (C) {
      let W = 0;
      if ((D = e.showingChildSkills[I]) == null || D.forEach((B) => {
        var J, G;
        if (!B) return;
        const ee = `${I}-${B}`, X = P[ee];
        if (I && (T = ((G = (J = w.group) == null ? void 0 : J.skills.find((Y) => Y.name === B)) == null ? void 0 : G.init) || T), X) {
          const { b: Y = I ? T : 0, p: fe = 0, i: ge = 0, g: oe = 0 } = X;
          W = Y + fe + ge + oe;
        } else C.show.includes(B) && (W = T);
        B != "步/霰" && (_ += `${B}${W}`);
        const M = Xn[B];
        M && (_ += M.map((Y) => `${Y}${W}`).join("")), delete P[ee];
      }), I === "母语")
        if (W)
          _ += `母语${W}`;
        else {
          const B = P[I];
          if (B) {
            const { b: ee = I ? T : 0, p: X = 0, i: M = 0, g: J = 0 } = B;
            _ += `母语${ee + X + M + J}`;
          } else
            _ += `母语${T}`;
        }
    } else {
      const W = P[I];
      let B = 0;
      if (W) {
        const { b: X = I ? T : 0, p: M = 0, i: J = 0, g: G = 0 } = W;
        B = X + M + J + G;
      } else
        B = T;
      _ += `${U}${B}`;
      const ee = Xn[I];
      ee && (_ += ee.map((X) => `${X}${B}`).join("")), delete P[I];
    }
  }), `${$}${v}${_}`;
}
const Vs = {
  limitp: 80,
  limiti: 70
};
function Ja(t) {
  const e = { ...Vs, ...t };
  return {
    showingChildSkills: qa(),
    // 显式 undefined，确保 Object.assign 时清除残留的 jobSkills
    jobSkills: void 0,
    skillLimits: {
      pro: e.limitp,
      interest: e.limiti
    }
  };
}
function $t(t) {
  return Ja(t);
}
function Us(t) {
  Object.assign(t, Ja());
}
function Bs(t) {
  ve(
    () => t.value.attributes,
    () => {
      var u, p, d, c, f, h;
      let e = "", n = "";
      const { con: r, siz: a, pow: o } = t.value.attributes || {};
      r && a && (e = `${Math.floor((r + a) / 10)}`), o && (n = `${Math.floor(o / 5)}`);
      const i = (p = (u = t.value.deriveAttributes) == null ? void 0 : u.sanity) == null ? void 0 : p.now, s = (c = (d = t.value.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : c.now, l = (h = (f = t.value.deriveAttributes) == null ? void 0 : f.mp) == null ? void 0 : h.now;
      t.value.deriveAttributes = {
        sanity: {
          start: `${o || ""}`,
          now: i
        },
        hp: {
          start: e,
          now: s ?? e
        },
        mp: {
          start: n,
          now: l ?? n
        }
      };
    },
    { deep: !0 }
  );
}
const Ns = [
  {
    name: "",
    point: [],
    wealth: [1, 0],
    skills: []
  },
  {
    name: "会计师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: ["会计", "法律", "图书馆使用", "聆听", "说服", "侦查"]
  },
  {
    name: "杂技演员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 20],
    skills: ["攀爬", "闪避", "投掷", "跳跃", "侦查", "游泳"]
  },
  {
    name: "戏剧演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      { 技艺: "" },
      "乔装",
      { 格斗: "" },
      "历史",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "电影演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 90],
    skills: [
      { 技艺: "" },
      "乔装",
      "汽车驾驶",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中介调查员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 45],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "图书馆使用",
      "心理学",
      "潜行",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病医生(古典)",
    point: [[["edu", 4]]],
    wealth: [10, 60],
    skills: [
      "法律",
      "聆听",
      "医学",
      { 外语: "" },
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "动物训练师",
    point: [
      [["edu", 2]],
      [
        ["app", 2],
        ["pow", 2]
      ]
    ],
    wealth: [10, 40],
    skills: [
      "跳跃",
      "聆听",
      "博物学",
      "驯兽",
      { 科学: "动物学" },
      "潜行",
      "追踪"
    ]
  },
  {
    name: "文物学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "估价",
      { 技艺: "" },
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "古董商",
    point: [[["edu", 4]]],
    wealth: [30, 50],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      "导航",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "考古学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "估价",
      "考古学",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "侦查",
      "机械维修",
      ["导航", { 科学: "" }]
    ]
  },
  {
    name: "建筑师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "会计",
      { 技艺: "" },
      "法律",
      { 母语: "" },
      "说服",
      "心理学",
      { 科学: "数学" },
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "艺术家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 50],
    skills: [
      { 技艺: "" },
      { 外语: "" },
      "心理学",
      "侦查",
      ["历史", "博物学"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病院护工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [8, 20],
    skills: [
      "闪避",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "运动员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 70],
    skills: [
      "攀爬",
      "跳跃",
      { 格斗: "斗殴" },
      "骑术",
      "游泳",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "作家(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "文学" },
      "历史",
      { 外语: "" },
      { 母语: "" },
      "心理学",
      "图书馆使用",
      ["博物学", "神秘学"]
    ]
  },
  {
    name: "酒保",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [8, 25],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "博物学",
      "导航",
      { 科学: "动物学" },
      "潜行",
      "追踪",
      ["聆听", "侦查"],
      [{ 外语: "" }, { 生存: "" }]
    ]
  },
  {
    name: "书商",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      { 母语: "" },
      { 外语: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赏金猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "汽车驾驶",
      "法律",
      "心理学",
      "追踪",
      "潜行",
      ["电气维修", "电子学Ω"],
      [{ 格斗: "" }, { 射击: "" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "拳击手、摔跤手",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [9, 60],
    skills: ["闪避", { 格斗: "斗殴" }, "恐吓", "跳跃", "心理学", "侦查"]
  },
  {
    name: "管家、佣人",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(生活类，如烹饪、裁缝、理发)": "" },
      "急救",
      "聆听",
      { 外语: "" },
      "心理学",
      "侦查",
      ["会计", "估价"]
    ]
  },
  {
    name: "神职人员",
    point: [[["edu", 4]]],
    wealth: [9, 60],
    skills: [
      "会计",
      "历史",
      "图书馆使用",
      "聆听",
      { 外语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "程序员",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      { 科学: "" },
      "侦查"
    ]
  },
  {
    name: "黑客",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "牛仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "闪避",
      "跳跃",
      "骑术",
      { 生存: "" },
      "投掷",
      "追踪",
      [{ 格斗: "" }, { 射击: "" }],
      ["急救", "博物学"]
    ]
  },
  {
    name: "工匠",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: ["会计", { 技艺: "" }, { 技艺: "" }, "机械维修", "博物学", "侦查"]
  },
  {
    name: "刺客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "乔装",
      "电气维修",
      { 格斗: "" },
      { 射击: "" },
      "锁匠",
      "机械维修",
      "潜行",
      "心理学"
    ]
  },
  {
    name: "银行劫匪",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 75],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "恐吓",
      "锁匠",
      "操作重型机械",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "打手、暴徒",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [5, 30],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "窃贼",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [5, 40],
    skills: [
      "估价",
      "攀爬",
      "聆听",
      "锁匠",
      "妙手",
      "潜行",
      "侦查",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "欺诈师",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 65],
    skills: [
      "估价",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["法律", { 外语: "" }]
    ]
  },
  {
    name: "独行罪犯",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [5, 65],
    skills: [
      "估价",
      "潜行",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      [{ 格斗: "" }, { 射击: "" }],
      ["锁匠", "机械维修"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "女飞贼(古典)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 80],
    skills: [
      { 技艺: "" },
      "汽车驾驶",
      "聆听",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "赃物贩子",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赝造者",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      "妙手"
    ]
  },
  {
    name: "走私者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      "导航",
      "心理学",
      "妙手",
      "侦查",
      ["汽车驾驶", { 驾驶: "飞行器" }, { 驾驶: "船" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "混混",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [3, 10],
    skills: [
      "攀爬",
      { 格斗: "" },
      { 射击: "" },
      "跳跃",
      "妙手",
      "潜行",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "教团首领",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "神秘学",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "除魅师(现代)",
    point: [[["edu", 4]]],
    wealth: [20, 50],
    skills: [
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "设计师",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      { 技艺: "摄影" },
      { 技艺: "" },
      "机械维修",
      "心理学",
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "业余艺术爱好者(原作向)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 99],
    skills: [
      { 技艺: "" },
      { 射击: "" },
      { 外语: "" },
      "骑术",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "潜水员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "潜水",
      "急救",
      "机械维修",
      { 驾驶: "船" },
      { 科学: "生物学" },
      "侦查",
      "游泳"
    ]
  },
  {
    name: "医生(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "急救",
      "医学",
      { 外语: "拉丁语" },
      "心理学",
      { 科学: "生物学" },
      { 科学: "制药" }
    ]
  },
  {
    name: "流浪者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私人司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: [
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司机",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "出租车司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "会计",
      "汽车驾驶",
      "电气维修",
      "话术",
      "机械维修",
      "导航",
      "侦查"
    ]
  },
  {
    name: "编辑",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "历史",
      { 母语: "" },
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "政府官员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 90],
    skills: [
      "取悦",
      "历史",
      "恐吓",
      "话术",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "工程师",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      { 技艺: "技术制图" },
      "电气维修",
      "图书馆使用",
      "机械维修",
      "操作重型机械",
      { 科学: "工程学" },
      { 科学: "物理" }
    ]
  },
  {
    name: "艺人",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { "技艺(表演类，如表演、演唱、喜剧等)": "" },
      "乔装",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "探险家(古典)",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [55, 80],
    skills: [
      { 射击: "" },
      "历史",
      "跳跃",
      "博物学",
      "导航",
      { 外语: "" },
      { 生存: "" },
      ["攀爬", "游泳"]
    ]
  },
  {
    name: "农民",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "耕作" },
      ["汽车驾驶", { 驾驶: "马车" }],
      "机械维修",
      "博物学",
      "操作重型机械",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司法人员",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "汽车驾驶",
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "说服",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "消防员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      "汽车驾驶",
      "急救",
      "跳跃",
      "机械维修",
      "操作重型机械",
      "投掷"
    ]
  },
  {
    name: "驻外记者",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "历史",
      { 外语: "" },
      { 母语: "" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法医",
    point: [[["edu", 4]]],
    wealth: [40, 60],
    skills: [
      { 外语: "" },
      "图书馆使用",
      "医学",
      "说服",
      { 科学: "生物学" },
      { 科学: "鉴证" },
      { 科学: "制药" },
      "侦查"
    ]
  },
  {
    name: "赌徒",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [8, 50],
    skills: [
      "会计",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮老大",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [60, 95],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮马仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "绅士/淑女",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [40, 90],
    skills: [
      { 技艺: "" },
      { 射击: "步/霰" },
      "历史",
      { 外语: "" },
      "导航",
      "骑术",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "游民",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      { 技艺: "" },
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["锁匠", "妙手"]
    ]
  },
  {
    name: "勤杂护工",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [6, 15],
    skills: [
      "电气维修",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "机械维修",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "调查记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      [{ 技艺: "艺术" }, { 技艺: "摄影" }],
      "历史",
      "图书馆使用",
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "通讯记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "表演" },
      "历史",
      "聆听",
      { 母语: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法官",
    point: [[["edu", 4]]],
    wealth: [50, 80],
    skills: [
      "历史",
      "恐吓",
      "法律",
      "图书馆使用",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "实验室助理",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "电气维修",
      { 外语: "" },
      { 科学: "化学" },
      { 科学: "" },
      { 科学: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "伐木工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "链锯" },
      "急救",
      "跳跃",
      "机械维修",
      "投掷",
      ["博物学", { 科学: "生物学" }, { 科学: "植物学" }]
    ]
  },
  {
    name: "矿工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      { 科学: "地质学" },
      "跳跃",
      "机械维修",
      "操作重型机械",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "律师",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "会计",
      "法律",
      "图书馆使用",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "图书馆管理员(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 35],
    skills: ["会计", "图书馆使用", { 外语: "" }, { 母语: "" }]
  },
  {
    name: "技工",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(木工、焊接、管道工等)": "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      "操作重型机械"
    ]
  },
  {
    name: "军官",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 70],
    skills: [
      "会计",
      { 射击: "" },
      "导航",
      "急救",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "传教士",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [0, 30],
    skills: [
      { 技艺: "" },
      "急救",
      "机械维修",
      "医学",
      "博物学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "登山家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "攀爬",
      "急救",
      "跳跃",
      "聆听",
      "导航",
      { 外语: "" },
      { 生存: "高山/冰山" },
      "追踪"
    ]
  },
  {
    name: "博物馆管理员",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "估价",
      "考古学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      "侦查"
    ]
  },
  {
    name: "音乐家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "音乐" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "护士",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "急救",
      "聆听",
      "医学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "神秘学家",
    point: [[["edu", 4]]],
    wealth: [9, 65],
    skills: [
      "人类学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      { 科学: "天文学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "旅行家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 20],
    skills: [
      { 射击: "" },
      "急救",
      "聆听",
      "博物学",
      "导航",
      "侦查",
      { 生存: "" },
      "追踪"
    ]
  },
  {
    name: "药剂师",
    point: [[["edu", 4]]],
    wealth: [35, 75],
    skills: [
      "会计",
      "急救",
      { 外语: "拉丁语" },
      "图书馆使用",
      "心理学",
      { 科学: "化学" },
      { 科学: "制药" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影师",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "心理学",
      { 科学: "化学" },
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影记者",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      { 技艺: "摄影" },
      "攀爬",
      { 外语: "" },
      "心理学",
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "飞行员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [20, 70],
    skills: [
      "电气维修",
      "机械维修",
      "导航",
      "操作重型机械",
      { 驾驶: "飞行器" },
      { 科学: "天文学" }
    ]
  },
  {
    name: "特技飞行员(古典)",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "导航",
      { 驾驶: "飞行器" },
      "侦查"
    ]
  },
  {
    name: "警探(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "巡警(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "急救",
      "法律",
      "心理学",
      "侦查",
      ["汽车驾驶", "骑术"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私家侦探",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "乔装",
      "法律",
      "图书馆使用",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "" }, { 射击: "" }, "锁匠", "计算机使用Ω"]
    ]
  },
  {
    name: "教授(原作向)",
    point: [[["edu", 4]]],
    wealth: [20, 70],
    skills: ["图书馆使用", { 外语: "" }, { 母语: "" }, "心理学"]
  },
  {
    name: "淘金客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 10],
    skills: [
      "攀爬",
      "急救",
      "历史",
      "机械维修",
      "导航",
      { 科学: "地质学" },
      "侦查"
    ]
  },
  {
    name: "性工作者",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [5, 50],
    skills: [
      { 技艺: "" },
      "闪避",
      "心理学",
      "妙手",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病学家",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      { 外语: "" },
      "聆听",
      "医学",
      "说服",
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "心理学家",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: ["会计", "图书馆使用", "聆听", "说服", "精神分析", "心理学"]
  },
  {
    name: "研究员",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "海军",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "急救",
      "导航",
      { 驾驶: "船" },
      { 生存: "海上" },
      "游泳",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "渔民",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "急救",
      "机械维修",
      "博物学",
      "导航",
      { 驾驶: "船" },
      "侦查",
      "游泳",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "推销员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["潜行", "妙手"]
    ]
  },
  {
    name: "科学家",
    point: [[["edu", 4]]],
    wealth: [9, 50],
    skills: [
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      { 外语: "" },
      { 母语: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "秘书",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "会计",
      [{ 技艺: "打字" }, { 技艺: "速记" }],
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "店老板",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 40],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "士兵",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "闪避",
      { 格斗: "" },
      { 射击: "" },
      "潜行",
      { 生存: "" },
      "急救",
      ["攀爬", "游泳"],
      ["机械维修", { 外语: "" }]
    ]
  },
  {
    name: "间谍",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      { 外语: "" },
      "心理学",
      "妙手",
      "潜行",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "学生/实习生",
    point: [[["edu", 4]]],
    wealth: [5, 10],
    skills: ["图书馆使用", "聆听", [{ 母语: "" }, { 外语: "" }]]
  },
  {
    name: "替身演员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [10, 50],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "" },
      "急救",
      "跳跃",
      "游泳",
      ["电气维修", "机械维修"],
      ["潜水", "汽车驾驶", { 驾驶: "" }, "骑术"]
    ]
  },
  {
    name: "部落成员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 15],
    skills: [
      "攀爬",
      "聆听",
      "博物学",
      "神秘学",
      "侦查",
      "游泳",
      { 生存: "" },
      [{ 格斗: "" }, "投掷"]
    ]
  },
  {
    name: "殡葬师",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "工会活动家",
    point: [[["edu", 4]]],
    wealth: [5, 50],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "法律",
      "聆听",
      "操作重型机械",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "服务生",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      { 技艺: "" },
      "闪避",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "职员/主管",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      "会计",
      "法律",
      "聆听",
      [{ 母语: "" }, { 外语: "" }],
      ["图书馆使用", "计算机使用Ω"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中高层管理人员",
    point: [[["edu", 4]]],
    wealth: [20, 80],
    skills: [
      "会计",
      { 外语: "" },
      "法律",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "狂热者",
    point: [
      [["edu", 2]],
      [
        ["pow", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 30],
    skills: [
      "历史",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "饲养员",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      "驯兽",
      "会计",
      "闪避",
      "急救",
      "博物学",
      "医学",
      { 科学: "制药" },
      { 科学: "动物学" }
    ]
  },
  {
    name: "暴走族",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [5, 10],
    skills: [
      { 格斗: "斗殴" },
      "汽车驾驶",
      "机械维修",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "导航"
    ]
  },
  {
    name: "风水师",
    point: [[["edu", 4]]],
    wealth: [20, 50],
    skills: [
      { 技艺: "书法" },
      { 科学: "天文学" },
      { 科学: "地质学" },
      "图书馆使用",
      ["取悦", "话术", "恐吓", "说服"],
      "神秘学"
    ]
  },
  {
    name: "家传降妖人",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [9, 20],
    skills: [
      "武士道",
      { 格斗: "" },
      "博物学",
      "神秘学",
      "心理学",
      "潜行",
      { 武术: "" },
      "导航"
    ]
  },
  {
    name: "日本教授",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "信用评级",
      "图书馆使用",
      { 稽古: "" },
      { 外语: "" },
      "心理学"
    ]
  },
  {
    name: "言灵师",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      { 技艺: "书法" },
      { 技艺: "" },
      "历史",
      { 科学: "天文学" },
      "神秘学",
      "图书馆使用",
      "母语"
    ]
  },
  {
    name: "宫司",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      { 技艺: "书法" },
      { 技艺: "" },
      "图书馆使用",
      ["取悦", "话术", "恐吓", "说服"],
      "神秘学",
      "心理学"
    ]
  },
  {
    name: "炼丹师",
    point: [[["edu", 4]]],
    wealth: [30, 50],
    skills: [
      { 科学: "化学" },
      { 东方医学: "" },
      { 东方医学: "" },
      "图书馆使用",
      { 武术: "太极" },
      "神秘学",
      "博物学",
      { 外语: "汉语" }
    ]
  },
  {
    name: "黑帮",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [20, 60],
    skills: [
      "武士道",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "闪避",
      "心理学",
      "导航",
      [{ 格斗: "" }, { 射击: "" }]
    ]
  },
  {
    name: "武术导师",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [20, 60],
    skills: [
      "会计",
      ["取悦", "话术", "恐吓", "说服"],
      "心理学",
      "急救",
      "闪避",
      { 格斗: "" },
      { 武术: "" },
      { 武术: "" }
    ]
  },
  {
    name: "忍者",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: [
      "潜行",
      "乔装",
      "锁匠",
      "侦查",
      "计算机使用Ω",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      { 武术: "忍术" }
    ]
  },
  {
    name: "舞者",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "表演" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "冒险家教授",
    point: [[["edu", 2]], [["app", 2], ["dex", 2], ["str", 2]]],
    wealth: [55, 80],
    skills: [
      ["攀爬", "游泳"],
      { 射击: "" },
      "历史",
      "跳跃",
      "博物学",
      "导航",
      { 外语: "" },
      "生存"
    ]
  },
  {
    name: "偶像",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "歌手",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "网络明星",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学",
      "计算机使用Ω",
      "电气维修"
    ]
  },
  {
    name: "经纪人",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "汽车驾驶",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "潜行",
      "聆听",
      "法律"
    ]
  },
  {
    name: "机械师",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { 技艺: "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      "操作重型机械"
    ]
  },
  {
    name: "厨师",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "烹饪" },
      { 科学: "生物学" },
      { 科学: "化学" },
      { 格斗: "斗殴" },
      "博物学",
      "侦查",
      { 外语: "" }
    ]
  }
], js = [
  [
    ["文艺工作", "wenyigongzuo"],
    [
      ["作家(原作向)", "zuojia"],
      ["编辑", "bianji"],
      ["设计师", "shejishi"],
      ["音乐家", "yinyuejia"],
      ["电影演员", "dianyingyanyuan"],
      ["戏剧演员", "xijuyanyuan"],
      ["替身演员", "tishenyanyuan"],
      ["杂技演员", "zajiyanyuan"],
      ["摄影师", "sheyingshi"],
      ["摄影记者", "sheyingjizhe"],
      ["艺人", "yiren"],
      ["业余艺术爱好者(原作向)", "yeyuyishuaihaozhe"]
    ]
  ],
  [
    ["工农商", "gongnongshang"],
    [
      ["工程师", "gongchengshi"],
      ["建筑师", "jianzhushi"],
      ["伐木工", "famugong"],
      ["工匠", "gongjiang"],
      ["技工", "jigong"],
      ["矿工", "kuanggong"],
      ["农民", "nongmin"],
      ["渔民", "yumin"],
      ["猎人", "lieren"],
      ["牛仔", "niuzai"],
      ["书商", "shushang"],
      ["古董商", "gudongshang"],
      ["店老板", "dianlaoban"]
    ]
  ],
  [
    ["职工", "zhigong"],
    [
      ["会计师", "kuaijishi"],
      ["中介调查员", "zhongjiediaochayuan"],
      ["职员/主管", "zhiyuanzhuguan"],
      ["中高层管理人员", "zhonggaocengguanlirenyuan"],
      ["秘书", "mishu"],
      ["推销员", "tuixiaoyuan"],
      ["图书馆管理员(原作向)", "tushuguanguanliyuanyuanzuoxiang"],
      ["博物馆管理员", "bowuguanguanliyuan"],
      ["律师", "lvshi"],
      ["程序员", "chengxuyuan"],
      ["司机", "siji"],
      ["私人司机", "sirensiji"],
      ["出租车司机", "chuzuchesiji"]
    ]
  ],
  [
    ["学者", "xuezhe"],
    [
      ["文物学家(原作向)", "wenwuxuejiayuanzuoxiang"],
      ["考古学家(原作向)", "kaoguxuejiayuanzuoxiang"],
      ["教授(原作向)", "jiaoshouyuanzuoxiang"],
      ["科学家", "kexuejia"],
      ["研究员", "yanjiuyuan"],
      ["实验室助理", "shiyanshizhuli"],
      ["学生/实习生", "xueshengshixisheng"],
      ["艺术家", "yishujia"]
    ]
  ],
  [
    ["医疗系统", "yiliaoxitong"],
    [
      ["医生(原作向)", "yishengyuanzuoxiang"],
      ["护士", "hushi"],
      ["法医", "fayi"],
      ["心理学家", "xinlixuejia"],
      ["精神病学家", "jingshenbingxuejia"],
      ["精神病医生(古典)", "jingshenbingyishenggudian"],
      ["精神病院护工", "jingshenbingyuanhugong"],
      ["药剂师", "yaojishi"]
    ]
  ],
  [
    ["运动/探险", "yundongtanxian"],
    [
      ["运动员", "yundongyuan"],
      ["拳击手、摔跤手", "shuaijiaoshouquanjishou"],
      ["潜水员", "qianshuiyuan"],
      ["调查记者(原作向)", "diaochajizheyuanzuoxiang"],
      ["通讯记者(原作向)", "tongxunjizheyuanzuoxiang"],
      ["驻外记者", "zhuwaijizhe"],
      ["登山家", "dengshanjia"],
      ["旅行家", "lvxingjia"],
      ["探险家(古典)", "tanxianjiagudian"],
      ["飞行员", "feixingyuan"],
      ["特技飞行员(古典)", "tejifeixingyuangudian"]
    ]
  ],
  [
    ["服务业", "fuwuye"],
    [
      ["酒保", "jiubao"],
      ["服务生", "fuwusheng"],
      ["管家、佣人", "guanjiayongren"],
      ["勤杂护工", "qinzahugong"],
      ["殡葬师", "binzangshi"],
      ["饲养员", "siyangyuan"],
      ["动物训练师", "dongwuxunlianshi"]
    ]
  ],
  [
    ["宗教相关", "zongjiaoxiangguan"],
    [
      ["神秘学家", "shenmixuejia"],
      ["神职人员", "shenzhirenyuan"],
      ["教团首领", "jiaotuanshouling"],
      ["传教士", "chuanjiaoshi"],
      ["除魅师(现代)", "chumeishixiandai"],
      ["狂热者", "kuangrezhe"],
      ["部落成员", "buluochengyuan"]
    ]
  ],
  [
    ["灰色/无职", "huisewuzhi"],
    [
      ["私家侦探", "sijiazhentan"],
      ["黑客", "heike"],
      ["黑帮老大", "heibanglaoda"],
      ["黑帮马仔", "heibangmazai"],
      ["性工作者", "xinggongzuozhe"],
      ["赏金猎人", "shangjinlieren"],
      ["赌徒", "dutu"],
      ["游民", "youmin"],
      ["流浪者", "liulangzhe"],
      ["淘金客", "taojinke"],
      ["绅士/淑女", "shenshishunv"]
    ]
  ],
  [
    ["罪犯", "zuifan"],
    [
      ["刺客", "cike"],
      ["银行劫匪", "yinhangjiefei"],
      ["打手、暴徒", "dashoubaotu"],
      ["窃贼", "qiezei"],
      ["欺诈师", "qizhashi"],
      ["独行罪犯", "duxingzuifan"],
      ["女飞贼(古典)", "nvfeizeigudian"],
      ["赃物贩子", "zangwufanzi"],
      ["赝造者", "yanzaozhe"],
      ["走私者", "zousizhe"],
      ["混混", "hunhun"]
    ]
  ],
  [
    ["军警政", "junjingzheng"],
    [
      ["军官", "junguan"],
      ["海军", "haijun"],
      ["间谍", "jiandie"],
      ["士兵", "shibing"],
      ["警探(原作向)", "jingtanyuanzuoxiang"],
      ["巡警(原作向)", "xunjingyuanzuoxiang"],
      ["消防员", "xiaofangyuan"],
      ["法官", "faguan"],
      ["司法人员", "sifarenyuan"],
      ["政府官员", "zhengfuguanyuan"],
      ["工会活动家", "gonghuihuodongjia"]
    ]
  ],
  [
    ["日本秘史", "ribenmishi"],
    [
      ["暴走族", "baozouzu"],
      ["风水师", "fengshuishi"],
      ["家传降妖人", "jiachuanjiangyaoren"],
      ["言灵师", "yanlingshi"],
      ["宫司", "gongsi"],
      ["炼丹师", "liandanshi"],
      ["黑帮", "heibang"],
      ["武术导师", "wushudaoshi"],
      ["忍者", "renzhe"]
    ]
  ],
  [
    ["日本现代", "ribenxiandai"],
    [
      ["舞者", "wuzhe"],
      ["冒险家教授", "maoxianjiajiaoshou"],
      ["偶像", "ouxiang"],
      ["歌手", "geshou"],
      ["网络明星", "wangluomingxing"],
      ["经纪人", "jingjiren"],
      ["机械师", "jixieshi"],
      ["厨师", "chushi"]
    ]
  ]
], Yn = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九"
}, zs = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
};
function Ls(t, e) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((a) => {
    n.set(a.name, a);
  });
  const r = e.map((a) => {
    const [o, i] = a[0], s = a[1].map(([l, u]) => ({
      name: l,
      pinyin: u
    }));
    return {
      name: o,
      pinyin: i,
      jobs: s
    };
  });
  return {
    jobs: n,
    jobGroups: r
  };
}
const Ut = Ls(Ns, js);
function Ka(t, e) {
  const n = {
    text: "",
    point: 0
  }, r = Ut.jobs.get(t || "");
  if (!r) return n;
  const a = [];
  return r.point.forEach((o) => {
    const i = [], s = [];
    o.forEach(([u, p]) => {
      i.push(`${zs[u]}×${p}`), e && s.push((e[u] || 0) * p);
    });
    let l = i.join(" 或 ");
    i.length > 1 && (l = `(${l})`), a.push(l), n.point += Math.max(...s);
  }), n.text = a.join(" + "), n;
}
function Ws(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function Qa(t) {
  const { jobs: e } = Ut, n = Ws(), r = e.get(t), a = /* @__PURE__ */ new Map();
  if (!r) return n;
  n.wealth = [...r.wealth], r.skills.forEach((i) => {
    if (typeof i == "string")
      a.set(i, 0);
    else if (Array.isArray(i))
      n.multiSkills.push(
        i.map((s) => {
          if (typeof s == "string") return s;
          const [l, u] = Object.entries(s)[0];
          return { name: l, childName: u };
        })
      );
    else {
      const [s, l] = Object.entries(i)[0];
      let u = s;
      const p = s.includes("(");
      p && (u = u.split("(")[0]);
      let d = u;
      l && (d = `${u}(${l})`), p && (d = s), a.set(
        d,
        p || l ? 0 : (a.get(d) || 0) + 1
      );
    }
  });
  const o = 8 - r.skills.length;
  return n.text = [
    ...a.entries(),
    ...o ? [["其他个人或时代特长", o]] : []
  ].map(
    ([i, s]) => `${i}${s ? `(任${Yn[`${s}`]})` : ""}`
  ).join("、"), n.multiSkillTexts = Gs(n), n;
}
function Gs(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const a = e.findIndex(([o]) => o.every((s, l) => {
      const u = r[l];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    a === -1 ? e.push([r, 1, Yn[`${r.length}`]]) : e[a][1] += 1;
  }), e.map((r) => {
    const o = r[0].map((i) => {
      let s = i;
      return typeof i != "string" && (s = `${i.name}:${i.childName || "任一"}`, i.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${Yn[`${r[1]}`]}(${o})`;
  });
}
function Hs(t, e) {
  const { jobs: n } = Ut, { viewData: r, pageData: a } = e, o = K(() => Qa(t.value.job));
  return ve(
    () => t.value.job,
    () => {
      const i = n.get(t.value.job);
      if (!i || a.importing) return;
      r.jobSkills = [...i.skills], qa(r), t.value.proSkills = [];
      const s = {};
      i.skills.forEach((l) => {
        if (typeof l == "string")
          t.value.proSkills.push(l);
        else if (!Array.isArray(l)) {
          const [u, p] = Object.entries(l)[0];
          let d = u;
          u.includes("(") && (d = d.split("(")[0]);
          const f = r.showingChildSkills[d];
          if (!f) return;
          let h = -1;
          if (p)
            h = f.findIndex((y) => y === p), h === -1 && (h = f.findIndex((y) => !y), f[h] = p);
          else {
            const y = s[d] || 0;
            let g = y;
            h = f.findIndex((k) => k ? !1 : g-- === 0), s[d] = y + 1;
          }
          if (h === -1) return;
          t.value.proSkills.push([d, p, h]);
        }
      }), delete r.jobSkills;
    }
  ), o;
}
function qs(t) {
  return go() ? (bo(t), !0) : !1;
}
function Ct(t) {
  return typeof t == "function" ? t() : S(t);
}
const Js = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ks = Object.prototype.toString, Qs = (t) => Ks.call(t) === "[object Object]", er = () => {
};
function Xa(t, e) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
const Za = (t) => t();
function Xs(t, e = {}) {
  let n, r, a = er;
  const o = (s) => {
    clearTimeout(s), a(), a = er;
  };
  return (s) => {
    const l = Ct(t), u = Ct(e.maxWait);
    return n && o(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (o(r), r = null), Promise.resolve(s())) : new Promise((p, d) => {
      a = e.rejectOnCancel ? d : p, u && !r && (r = setTimeout(() => {
        n && o(n), r = null, p(s());
      }, u)), n = setTimeout(() => {
        r && o(r), r = null, p(s());
      }, l);
    });
  };
}
function Zs(t = Za) {
  const e = Z(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: ho(e), pause: n, resume: r, eventFilter: a };
}
function Ys(t) {
  return vo();
}
function eu(t, e = 200, n = {}) {
  return Xa(
    Xs(e, n),
    t
  );
}
function tu(t, e, n = {}) {
  const {
    eventFilter: r = Za,
    ...a
  } = n;
  return ve(
    t,
    Xa(
      r,
      e
    ),
    a
  );
}
function nu(t, e, n = {}) {
  const {
    eventFilter: r,
    ...a
  } = n, { eventFilter: o, pause: i, resume: s, isActive: l } = Zs(r);
  return { stop: tu(
    t,
    e,
    {
      ...a,
      eventFilter: o
    }
  ), pause: i, resume: s, isActive: l };
}
function ru(t, e = !0, n) {
  Ys() ? wa(t, n) : e ? t() : Xe(t);
}
function au(t) {
  var e;
  const n = Ct(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const tr = Js ? window : void 0;
function na(...t) {
  let e, n, r, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, a] = t, e = tr) : [e, n, r, a] = t, !e)
    return er;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((p) => p()), o.length = 0;
  }, s = (p, d, c, f) => (p.addEventListener(d, c, f), () => p.removeEventListener(d, c, f)), l = ve(
    () => [au(e), Ct(a)],
    ([p, d]) => {
      if (i(), !p)
        return;
      const c = Qs(d) ? { ...d } : d;
      o.push(
        ...n.flatMap((f) => r.map((h) => s(p, f, h, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), i();
  };
  return qs(u), u;
}
const Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wt = "__vueuse_ssr_handlers__", ou = /* @__PURE__ */ iu();
function iu() {
  return Wt in Lt || (Lt[Wt] = Lt[Wt] || {}), Lt[Wt];
}
function lu(t, e) {
  return ou[t] || e;
}
function su(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const uu = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, ra = "vueuse-storage";
function aa(t, e, n, r = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: p,
    window: d = tr,
    eventFilter: c,
    onError: f = (C) => {
      console.error(C);
    },
    initOnMounted: h
  } = r, y = (p ? wo : Z)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = lu("getDefaultStorage", () => {
        var C;
        return (C = tr) == null ? void 0 : C.localStorage;
      })();
    } catch (C) {
      f(C);
    }
  if (!n)
    return y;
  const g = Ct(e), k = su(g), $ = (a = r.serializer) != null ? a : uu[k], { pause: v, resume: _ } = nu(
    y,
    () => w(y.value),
    { flush: o, deep: i, eventFilter: c }
  );
  d && s && ru(() => {
    na(d, "storage", E), na(d, ra, q), h && E();
  }), h || E();
  function P(C, T) {
    d && d.dispatchEvent(new CustomEvent(ra, {
      detail: {
        key: t,
        oldValue: C,
        newValue: T,
        storageArea: n
      }
    }));
  }
  function w(C) {
    try {
      const T = n.getItem(t);
      if (C == null)
        P(T, null), n.removeItem(t);
      else {
        const U = $.write(C);
        T !== U && (n.setItem(t, U), P(T, U));
      }
    } catch (T) {
      f(T);
    }
  }
  function I(C) {
    const T = C ? C.newValue : n.getItem(t);
    if (T == null)
      return l && g != null && n.setItem(t, $.write(g)), g;
    if (!C && u) {
      const U = $.read(T);
      return typeof u == "function" ? u(U, g) : k === "object" && !Array.isArray(U) ? { ...g, ...U } : U;
    } else return typeof T != "string" ? T : $.read(T);
  }
  function E(C) {
    if (!(C && C.storageArea !== n)) {
      if (C && C.key == null) {
        y.value = g;
        return;
      }
      if (!(C && C.key !== t)) {
        v();
        try {
          (C == null ? void 0 : C.newValue) !== $.write(y.value) && (y.value = I(C));
        } catch (T) {
          f(T);
        } finally {
          C ? Xe(_) : _();
        }
      }
    }
  }
  function q(C) {
    E(C.detail);
  }
  return y;
}
var Ya = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(Ya || {}), eo = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(eo || {});
function cu(t) {
  const {
    namespace: e = Ya.SoxFE,
    app: n,
    versionChecker: r = ($, v) => (v.value = null, -1),
    defaults: a = {}
  } = t, o = window.localStorage, i = `${e}#${n}`, s = `${e}##versionChecker`, l = aa(i, a, o, {
    mergeDefaults: !0
  }), u = aa(s, {}, o), p = u.value[i], d = r(p, l);
  u.value[n] = d;
  function c() {
    return l.value;
  }
  function f() {
    return Object.keys(c()).length;
  }
  function h($) {
    return l.value[$];
  }
  function y($, v) {
    l.value[$] = v;
  }
  function g($) {
    delete l.value[$];
  }
  function k() {
    l.value = null;
  }
  return {
    store: l,
    get namespace() {
      return e;
    },
    get appName() {
      return n;
    },
    get version() {
      return d;
    },
    listItems: c,
    countItems: f,
    getItem: h,
    setItem: y,
    removeItem: g,
    clear: k
  };
}
const pu = cu({
  app: eo.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function br() {
  return pu;
}
const Rt = "$sox-trpg#$coc-card:card:";
function Gt(t, e, n) {
  try {
    const r = {
      pc: JSON.parse(JSON.stringify(e)),
      viewData: JSON.parse(JSON.stringify(n)),
      lastModified: Date.now()
    };
    localStorage.setItem(Rt + t, JSON.stringify(r));
  } catch (r) {
    console.error(`[CardStorage] Save failed for ${t}:`, r);
  }
}
function Ht(t) {
  try {
    const e = localStorage.getItem(Rt + t);
    return e ? JSON.parse(e) : null;
  } catch (e) {
    return console.error(`[CardStorage] Load failed for ${t}:`, e), null;
  }
}
function du(t) {
  try {
    localStorage.removeItem(Rt + t);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${t}:`, e);
  }
}
function fu(t) {
  let e = 0;
  const n = [];
  for (let r = 0; r < localStorage.length; r++) {
    const a = localStorage.key(r);
    if (a && a.startsWith(Rt)) {
      const o = a.substring(Rt.length);
      t.has(o) || n.push(a);
    }
  }
  return n.forEach((r) => {
    localStorage.removeItem(r), e++;
  }), e > 0 && console.log(`[CardStorage] Cleaned ${e} orphaned cards`), e;
}
const ie = br();
function Tn() {
  try {
    return crypto.randomUUID();
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}
function mu(t, e, n) {
  const r = K(() => [...ie.getItem("cardMetaList") ?? []].sort((_, P) => _.createdAt - P.createdAt)), a = K(
    () => ie.getItem("activeCardId") ?? ""
  ), o = K(
    () => r.value.find((v) => v.id === a.value)
  );
  function i() {
    const v = a.value;
    if (!v || n.importing) return;
    Gt(v, t.value, e);
    const _ = [...r.value], P = _.findIndex((w) => w.id === v);
    P !== -1 && (_[P] = {
      ..._[P],
      name: t.value.name || "未命名角色卡",
      lastModified: Date.now()
    }, ie.setItem("cardMetaList", _));
  }
  const s = eu(() => {
    n.importing || i();
  }, 300);
  function l(v) {
    i();
    const _ = Tn(), P = {
      id: _,
      name: "未命名角色卡",
      saveName: v || `存档 ${r.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, w = [...r.value, P];
    ie.setItem("cardMetaList", w), ie.setItem("activeCardId", _);
    const I = We(), E = $t();
    return Gt(_, I, E), t.value = I, Object.assign(e, E), _;
  }
  function u(v) {
    const _ = Ht(v);
    return _ ? (n.importing = !0, t.value = We(_.pc), Object.assign(e, $t(), _.viewData), setTimeout(() => {
      n.importing = !1;
    }, 50), !0) : !1;
  }
  function p(v) {
    v !== a.value && (i(), Ht(v) && (ie.setItem("activeCardId", v), u(v)));
  }
  function d(v) {
    const _ = r.value.filter((P) => P.id !== v);
    ie.setItem("cardMetaList", _), du(v), v === a.value && (_.length > 0 ? p(_[0].id) : l());
  }
  function c(v) {
    const _ = Ht(v);
    if (!_) return null;
    i();
    const P = Tn(), w = r.value.find((q) => q.id === v), I = {
      id: P,
      name: _.pc.name || "未命名角色卡",
      saveName: `${(w == null ? void 0 : w.saveName) || "存档"} (副本)`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, E = [...r.value, I];
    return ie.setItem("cardMetaList", E), Gt(P, _.pc, _.viewData), ie.setItem("activeCardId", P), n.importing = !0, t.value = We(_.pc), Object.keys(_.viewData).forEach((q) => {
      const C = q;
      e[C] = _.viewData[C];
    }), setTimeout(() => {
      n.importing = !1;
    }, 50), P;
  }
  function f(v, _) {
    const P = [...r.value], w = P.findIndex((I) => I.id === v);
    w !== -1 && (P[w] = { ...P[w], saveName: _ }, ie.setItem("cardMetaList", P));
  }
  function h() {
    n.importing = !0, t.value = We(), Object.assign(e, $t()), ie.removeItem("autoSaved"), setTimeout(() => {
      n.importing = !1, i();
    }, 50);
  }
  function y() {
    const v = ie.getItem("cardMetaList");
    if (v && v.length > 0) {
      const P = [...v].sort((E, q) => E.createdAt - q.createdAt);
      ie.setItem("cardMetaList", P);
      const w = new Set(P.map((E) => E.id));
      fu(w);
      const I = a.value || P[0].id;
      if (ie.setItem("activeCardId", I), !u(I)) {
        const E = P.find((q) => Ht(q.id) != null);
        E ? (ie.setItem("activeCardId", E.id), u(E.id)) : l();
      }
      return;
    }
    const _ = ie.getItem("autoSaved");
    if (_ != null && _.pc) {
      const P = Tn(), w = {
        id: P,
        name: _.pc.name || "未命名角色卡",
        saveName: "迁移的存档",
        lastModified: _.lastModified || Date.now(),
        createdAt: Date.now()
      };
      ie.setItem("cardMetaList", [w]), ie.setItem("activeCardId", P), Gt(P, _.pc, _.viewData || $t()), ie.removeItem("autoSaved"), u(P);
      return;
    }
    l();
  }
  let g = null;
  function k() {
    g = ve(
      () => [t.value, e],
      () => {
        n.importing || s();
      },
      { deep: !0 }
    );
  }
  function $() {
    g == null || g();
  }
  return typeof window < "u" && window.addEventListener("beforeunload", i), {
    metaList: r,
    activeCardId: a,
    currentMeta: o,
    createCard: l,
    switchCard: p,
    deleteCard: d,
    duplicateCard: c,
    renameCard: f,
    resetCurrentCard: h,
    flushSave: i,
    init: y,
    startAutoSave: k,
    stopAutoSave: $
  };
}
var wr = { exports: {} };
wr.exports;
(function(t) {
  var e = function() {
    var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function i(l, u) {
      if (!o[l]) {
        o[l] = {};
        for (var p = 0; p < l.length; p++)
          o[l][l.charAt(p)] = p;
      }
      return o[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null) return "";
        var u = s._compress(l, 6, function(p) {
          return r.charAt(p);
        });
        switch (u.length % 4) {
          default:
          case 0:
            return u;
          case 1:
            return u + "===";
          case 2:
            return u + "==";
          case 3:
            return u + "=";
        }
      },
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
          return i(r, l.charAt(u));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : s._compress(l, 15, function(u) {
          return n(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
          return l.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var u = s.compress(l), p = new Uint8Array(u.length * 2), d = 0, c = u.length; d < c; d++) {
          var f = u.charCodeAt(d);
          p[d * 2] = f >>> 8, p[d * 2 + 1] = f % 256;
        }
        return p;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), p = 0, d = u.length; p < d; p++)
          u[p] = l[p * 2] * 256 + l[p * 2 + 1];
        var c = [];
        return u.forEach(function(f) {
          c.push(n(f));
        }), s.decompress(c.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return a.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(a, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return n(u);
        });
      },
      _compress: function(l, u, p) {
        if (l == null) return "";
        var d, c, f = {}, h = {}, y = "", g = "", k = "", $ = 2, v = 3, _ = 2, P = [], w = 0, I = 0, E;
        for (E = 0; E < l.length; E += 1)
          if (y = l.charAt(E), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = v++, h[y] = !0), g = k + y, Object.prototype.hasOwnProperty.call(f, g))
            k = g;
          else {
            if (Object.prototype.hasOwnProperty.call(h, k)) {
              if (k.charCodeAt(0) < 256) {
                for (d = 0; d < _; d++)
                  w = w << 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++;
                for (c = k.charCodeAt(0), d = 0; d < 8; d++)
                  w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
              } else {
                for (c = 1, d = 0; d < _; d++)
                  w = w << 1 | c, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = 0;
                for (c = k.charCodeAt(0), d = 0; d < 16; d++)
                  w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
              }
              $--, $ == 0 && ($ = Math.pow(2, _), _++), delete h[k];
            } else
              for (c = f[k], d = 0; d < _; d++)
                w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
            $--, $ == 0 && ($ = Math.pow(2, _), _++), f[g] = v++, k = String(y);
          }
        if (k !== "") {
          if (Object.prototype.hasOwnProperty.call(h, k)) {
            if (k.charCodeAt(0) < 256) {
              for (d = 0; d < _; d++)
                w = w << 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++;
              for (c = k.charCodeAt(0), d = 0; d < 8; d++)
                w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
            } else {
              for (c = 1, d = 0; d < _; d++)
                w = w << 1 | c, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = 0;
              for (c = k.charCodeAt(0), d = 0; d < 16; d++)
                w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
            }
            $--, $ == 0 && ($ = Math.pow(2, _), _++), delete h[k];
          } else
            for (c = f[k], d = 0; d < _; d++)
              w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
          $--, $ == 0 && ($ = Math.pow(2, _), _++);
        }
        for (c = 2, d = 0; d < _; d++)
          w = w << 1 | c & 1, I == u - 1 ? (I = 0, P.push(p(w)), w = 0) : I++, c = c >> 1;
        for (; ; )
          if (w = w << 1, I == u - 1) {
            P.push(p(w));
            break;
          } else I++;
        return P.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, p) {
        var d = [], c = 4, f = 4, h = 3, y = "", g = [], k, $, v, _, P, w, I, E = { val: p(0), position: u, index: 1 };
        for (k = 0; k < 3; k += 1)
          d[k] = k;
        for (v = 0, P = Math.pow(2, 2), w = 1; w != P; )
          _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
        switch (v) {
          case 0:
            for (v = 0, P = Math.pow(2, 8), w = 1; w != P; )
              _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
            I = n(v);
            break;
          case 1:
            for (v = 0, P = Math.pow(2, 16), w = 1; w != P; )
              _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
            I = n(v);
            break;
          case 2:
            return "";
        }
        for (d[3] = I, $ = I, g.push(I); ; ) {
          if (E.index > l)
            return "";
          for (v = 0, P = Math.pow(2, h), w = 1; w != P; )
            _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
          switch (I = v) {
            case 0:
              for (v = 0, P = Math.pow(2, 8), w = 1; w != P; )
                _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
              d[f++] = n(v), I = f - 1, c--;
              break;
            case 1:
              for (v = 0, P = Math.pow(2, 16), w = 1; w != P; )
                _ = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = p(E.index++)), v |= (_ > 0 ? 1 : 0) * w, w <<= 1;
              d[f++] = n(v), I = f - 1, c--;
              break;
            case 2:
              return g.join("");
          }
          if (c == 0 && (c = Math.pow(2, h), h++), d[I])
            y = d[I];
          else if (I === f)
            y = $ + $.charAt(0);
          else
            return null;
          g.push(y), d[f++] = $ + y.charAt(0), c--, $ = y, c == 0 && (c = Math.pow(2, h), h++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})(wr);
var yu = wr.exports;
const oa = /* @__PURE__ */ ar(yu);
var hu = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
    n.push(t.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(a) {
      t.addRange(a);
    }), e && e.focus();
  };
}, vu = hu, ia = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, gu = "Copy to clipboard: #{key}, Enter";
function bu(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function wu(t, e) {
  var n, r, a, o, i, s, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    a = vu(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(p) {
      if (p.stopPropagation(), e.format)
        if (p.preventDefault(), typeof p.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = ia[e.format] || ia.default;
          window.clipboardData.setData(d, t);
        } else
          p.clipboardData.clearData(), p.clipboardData.setData(e.format, t);
      e.onCopy && (p.preventDefault(), e.onCopy(p.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), i.addRange(o);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (p) {
    n && console.error("unable to copy using execCommand: ", p), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = bu("message" in e ? e.message : gu), window.prompt(r, t);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var _u = wu;
const to = /* @__PURE__ */ ar(_u);
/*! Element Plus Icons Vue v2.3.1 */
var Su = /* @__PURE__ */ R({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), ku = Su, Au = /* @__PURE__ */ R({
  name: "CopyDocument",
  __name: "copy-document",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"
      })
    ]));
  }
}), $u = Au, Pu = /* @__PURE__ */ R({
  name: "Delete",
  __name: "delete",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), Iu = Pu, xu = /* @__PURE__ */ R({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Eu = xu, Du = /* @__PURE__ */ R({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), no = Du, Cu = /* @__PURE__ */ R({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Ru = Cu, Ou = /* @__PURE__ */ R({
  name: "FolderOpened",
  __name: "folder-opened",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
      })
    ]));
  }
}), Fu = Ou, Mu = /* @__PURE__ */ R({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Tu = Mu, Vu = /* @__PURE__ */ R({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Uu = Vu, Bu = /* @__PURE__ */ R({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 192h64v704h-64z"
      })
    ]));
  }
}), Nu = Bu, ju = /* @__PURE__ */ R({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), zu = ju, Lu = /* @__PURE__ */ R({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Wu = Lu, Gu = /* @__PURE__ */ R({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (b(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), ro = Gu;
const Hu = /* @__PURE__ */ R({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (b(), Q(_a(e.tag), {
      class: L(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: F(() => [
        Dt(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), V = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, a] of e)
    n[r] = a;
  return n;
}, qu = /* @__PURE__ */ V(Hu, [["__scopeId", "data-v-b309c855"]]), Ju = /* @__PURE__ */ R({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = de("el-icon");
      return b(), Q(qu, {
        class: "control-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("click", a))
      }, {
        default: F(() => [
          A(r, { size: "0.9em" }, {
            default: F(() => [
              (b(), Q(_a(e.icon)))
            ]),
            _: 1
          }),
          Ze(" " + O(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), je = /* @__PURE__ */ V(Ju, [["__scopeId", "data-v-7ceba4b3"]]), ft = /* @__PURE__ */ R({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = de("el-dialog");
      return b(), Q(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        title: e.$props.title,
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => e.$emit("update:modelValue", a))
      }, {
        default: F(() => [
          Dt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["title", "modelValue"]);
    };
  }
});
function Ku(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function Qu(t, e = "image") {
  Ku(t, e);
}
const Xu = { class: "downloader-item" }, Zu = { class: "downloader-item-preview" }, Yu = ["src"], ec = {
  key: 1,
  class: "downloader-item-file"
}, tc = { key: 2 }, nc = { class: "downloader-item-info" }, rc = { class: "downloader-item-title" }, ac = { class: "preview-full-image-container" }, oc = ["src"], ic = /* @__PURE__ */ R({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = Z(!1), o = K(() => {
      if (!n.download) return "";
      const { name: l, type: u } = n.download;
      return `${l}${n.title}.${u}`;
    });
    function i() {
      if (!n.download) return;
      const { url: l } = n.download;
      Qu(l, o.value), r("downloaded");
    }
    function s() {
      a.value = !0;
    }
    return (l, u) => {
      var p;
      return b(), x("div", Xu, [
        m("div", Zu, [
          l.previewImage ? (b(), x("img", {
            key: 0,
            class: "downloader-item-image",
            src: l.previewImage,
            onClick: s
          }, null, 8, Yu)) : ((p = l.download) == null ? void 0 : p.type) === "txt" ? (b(), x("div", ec, O(o.value), 1)) : (b(), x("div", tc, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        m("div", nc, [
          m("div", rc, O(l.title), 1),
          m("div", {
            class: "downloader-item-button",
            onClick: i
          }, " 下载 "),
          l.refreshable ? (b(), x("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (d) => l.$emit("refresh"))
          }, " 重新生成 ")) : H("", !0)
        ]),
        A(ft, {
          modelValue: a.value,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d),
          title: "预览大图"
        }, {
          default: F(() => [
            m("div", ac, [
              l.previewImage ? (b(), x("img", {
                key: 0,
                class: "preview-full-image",
                src: l.previewImage
              }, null, 8, oc)) : H("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Vn = /* @__PURE__ */ V(ic, [["__scopeId", "data-v-712d81a0"]]);
function ae() {
  return Ye("pc");
}
function Ae() {
  return Ye("pageData");
}
function vn() {
  return Ye("viewData");
}
function ao() {
  return Ye("suggestion");
}
const lc = { class: "jobs-container" }, sc = { class: "job-card-header" }, uc = ["onClick"], cc = { class: "job-card-row" }, pc = { key: 0 }, dc = { class: "job-card-row" }, fc = /* @__PURE__ */ R({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const { jobGroups: e, jobs: n } = Ut, r = ae(), a = Z([]), o = K(() => e.map((s) => ({
      name: s.name,
      items: s.jobs.map((l) => {
        const u = n.get(l.name), p = Qa(u.name), d = p.multiSkillTexts.map((h) => `${h}、`).join("") + p.text, { point: c, text: f } = Ka(
          u.name,
          r == null ? void 0 : r.value.attributes
        );
        return {
          name: u.name,
          wealth: u.wealth,
          skillText: d,
          pointText: f,
          pointValue: c
        };
      })
    })));
    function i(s) {
      r && (r.value.job = s);
    }
    return (s, l) => {
      const u = de("el-icon"), p = de("el-collapse-item"), d = de("el-collapse");
      return b(), x("div", null, [
        A(d, {
          class: "job-list",
          modelValue: a.value,
          "onUpdate:modelValue": l[0] || (l[0] = (c) => a.value = c)
        }, {
          default: F(() => [
            (b(!0), x(te, null, re(o.value, (c) => (b(), Q(p, {
              key: c.name,
              title: c.name,
              name: c.name
            }, {
              default: F(() => [
                m("div", lc, [
                  (b(!0), x(te, null, re(c.items, (f) => (b(), x("div", {
                    key: f.name,
                    class: "job-card"
                  }, [
                    m("div", sc, [
                      m("span", null, O(f.name), 1),
                      m("span", null, "信用评级：" + O(f.wealth[0]) + "~" + O(f.wealth[1]), 1),
                      m("a", {
                        class: "job-card-action-use",
                        onClick: () => i(f.name)
                      }, [
                        A(u, { size: "0.9em" }, {
                          default: F(() => [
                            A(S(ro))
                          ]),
                          _: 1
                        }),
                        Ze(" 使用 ")
                      ], 8, uc)
                    ]),
                    m("div", cc, [
                      m("span", null, "职业点数：" + O(f.pointText), 1),
                      f.pointValue ? (b(), x("span", pc, " (当前结果: " + O(f.pointValue) + ") ", 1)) : H("", !0)
                    ]),
                    m("div", dc, "本职技能：" + O(f.skillText), 1)
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), mc = /* @__PURE__ */ V(fc, [["__scopeId", "data-v-b7a2614c"]]), yc = { class: "weapons-container" }, hc = { class: "weapon-card-header" }, vc = { class: "weapon-card-row" }, gc = { class: "weapon-card-row" }, bc = { class: "weapon-card-row weapon-card-row-4" }, wc = ["onClick"], _c = /* @__PURE__ */ R({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = ko, n = ae(), r = Z([]), a = K(() => {
      const c = new Map(
        gr.map((f) => [
          f.name,
          {
            ...f,
            range: `${Number(f.range)}` === f.range ? `${f.range}m` : f.range
          }
        ])
      );
      return Ha.map(([f, h]) => ({
        name: h,
        groupKey: f,
        items: Ga[f].map((y) => c.get(y))
      }));
    });
    function o(c) {
      return `${Number(c)}` === c ? `${c}m` : c || "N/A";
    }
    const i = Z([]), s = Z(-1), l = Z(!1);
    function u(c) {
      const f = c.target, h = i.value.findIndex((y) => y.el === f);
      h !== -1 && (s.value = h, l.value = !0);
    }
    function p() {
      l.value = !1;
    }
    function d(c, f) {
      !n || !f || (n.value.weapons[c] = f);
    }
    return (c, f) => {
      var $;
      const h = de("el-icon"), y = de("el-collapse-item"), g = de("el-collapse"), k = de("el-popover");
      return b(), x("div", null, [
        A(g, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => r.value = v)
        }, {
          default: F(() => [
            (b(!0), x(te, null, re(a.value, (v) => (b(), Q(y, {
              key: v.groupKey,
              title: v.name,
              name: v.groupKey
            }, {
              default: F(() => [
                m("div", yc, [
                  (b(!0), x(te, null, re(v.items, (_) => (b(), x("div", {
                    key: _.name,
                    class: "weapon-card"
                  }, [
                    m("div", hc, [
                      m("span", null, "【" + O(_.name) + "】" + O(_.skill), 1),
                      Te((b(), x("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: (P) => {
                          i.value.push({
                            el: P,
                            weapon: _
                          });
                        },
                        onClick: u
                      }, [
                        A(h, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: F(() => [
                            A(S(ro))
                          ]),
                          _: 1
                        }),
                        Ze(" 使用 ")
                      ])), [
                        [S(e), p]
                      ])
                    ]),
                    m("div", vc, [
                      m("span", null, "伤害：" + O(_.dam), 1),
                      m("span", null, "次数：" + O(_.round || "N/A"), 1),
                      m("span", null, O(_.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    m("div", gc, [
                      m("span", null, "射程：" + O(o(_.range)), 1),
                      m("span", null, "装弹量：" + O(_.num || "N/A"), 1),
                      m("span", null, "故障率：" + O(_.err || "N/A"), 1)
                    ]),
                    m("div", bc, [
                      m("span", null, "年代：" + O(_.time), 1),
                      m("span", null, "价格：" + O(_.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        A(k, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: l.value,
          width: 200,
          "virtual-ref": ($ = i.value[s.value]) == null ? void 0 : $.el
        }, {
          default: F(() => [
            (b(), x(te, null, re(5, (v) => m("a", {
              key: v,
              class: "job-card-action",
              onClick: (_) => {
                var P;
                return d(v - 1, (P = i.value[s.value]) == null ? void 0 : P.weapon);
              }
            }, O(v), 9, wc)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), Sc = /* @__PURE__ */ V(_c, [["__scopeId", "data-v-d9cdfa7f"]]), kc = (t) => (De("data-v-c3fb6b3e"), t = t(), Ce(), t), Ac = { class: "modal-body" }, $c = { class: "group" }, Pc = /* @__PURE__ */ kc(() => /* @__PURE__ */ m("div", null, "录卡指令", -1)), Ic = /* @__PURE__ */ R({
  __name: "DiceMaid",
  setup(t) {
    const e = ae(), n = vn(), r = K(
      () => ".st " + (e && n ? Ts(e.value, n) : "")
    ), a = Z(!1);
    function o() {
      a.value = !0;
    }
    function i(l) {
      var u;
      (u = l.target) == null || u.select();
    }
    function s() {
      to(r.value), Se.success("已复制录卡指令");
    }
    return (l, u) => {
      const p = de("el-input");
      return b(), x(te, null, [
        A(je, {
          label: "骰娘",
          icon: S(Eu),
          onClick: o
        }, null, 8, ["icon"]),
        A(ft, {
          title: "骰娘相关",
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => a.value = d)
        }, {
          default: F(() => [
            m("div", Ac, [
              m("div", $c, [
                m("div", { class: "label" }, [
                  Pc,
                  m("div", null, [
                    m("a", {
                      class: "link",
                      onClick: s
                    }, " 复制 ")
                  ])
                ]),
                A(p, {
                  type: "textarea",
                  rows: 5,
                  value: r.value,
                  readonly: "",
                  onFocus: i
                }, null, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), xc = /* @__PURE__ */ V(Ic, [["__scopeId", "data-v-c3fb6b3e"]]);
function Ec(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), e && (r.href = e), a.href = t, a.href;
}
const Dc = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function Ee(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function cn(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Cc(t) {
  const e = cn(t, "border-left-width"), n = cn(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Rc(t) {
  const e = cn(t, "border-top-width"), n = cn(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function oo(t, e = {}) {
  const n = e.width || Cc(t), r = e.height || Rc(t);
  return { width: n, height: r };
}
function Oc() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const be = 16384;
function Fc(t) {
  (t.width > be || t.height > be) && (t.width > be && t.height > be ? t.width > t.height ? (t.height *= be / t.width, t.width = be) : (t.width *= be / t.height, t.height = be) : t.width > be ? (t.height *= be / t.width, t.width = be) : (t.width *= be / t.height, t.height = be));
}
function pn(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Mc(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Tc(t, e, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${e}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(t), Mc(a);
}
const he = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || he(n, e);
};
function Vc(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Uc(t) {
  return Ee(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Bc(t, e, n) {
  const r = `.${t}:${e}`, a = n.cssText ? Vc(n) : Uc(n);
  return document.createTextNode(`${r}{${a}}`);
}
function la(t, e, n) {
  const r = window.getComputedStyle(t, n), a = r.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const o = Dc();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Bc(o, n, r)), e.appendChild(i);
}
function Nc(t, e) {
  la(t, e, ":before"), la(t, e, ":after");
}
const sa = "application/font-woff", ua = "image/jpeg", jc = {
  woff: sa,
  woff2: sa,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: ua,
  jpeg: ua,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function zc(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function _r(t) {
  const e = zc(t).toLowerCase();
  return jc[e] || "";
}
function Lc(t) {
  return t.split(/,/)[1];
}
function nr(t) {
  return t.search(/^(data:)/) !== -1;
}
function Wc(t, e) {
  return `data:${e};base64,${t}`;
}
async function io(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const a = await r.blob();
  return new Promise((o, i) => {
    const s = new FileReader();
    s.onerror = i, s.onloadend = () => {
      try {
        o(n({ res: r, result: s.result }));
      } catch (l) {
        i(l);
      }
    }, s.readAsDataURL(a);
  });
}
const Un = {};
function Gc(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function Sr(t, e, n) {
  const r = Gc(t, e, n.includeQueryParams);
  if (Un[r] != null)
    return Un[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await io(t, n.fetchRequestInit, ({ res: i, result: s }) => (e || (e = i.headers.get("Content-Type") || ""), Lc(s)));
    a = Wc(o, e);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let i = `Failed to fetch resource: ${t}`;
    o && (i = typeof o == "string" ? o : o.message), i && console.warn(i);
  }
  return Un[r] = a, a;
}
async function Hc(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : pn(e);
}
async function qc(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), i = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, i == null || i.drawImage(t, 0, 0, o.width, o.height);
    const s = o.toDataURL();
    return pn(s);
  }
  const n = t.poster, r = _r(n), a = await Sr(n, r, e);
  return pn(a);
}
async function Jc(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await gn(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Kc(t, e) {
  return he(t, HTMLCanvasElement) ? Hc(t) : he(t, HTMLVideoElement) ? qc(t, e) : he(t, HTMLIFrameElement) ? Jc(t) : t.cloneNode(!1);
}
const Qc = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Xc(t, e, n) {
  var r, a;
  let o = [];
  return Qc(t) && t.assignedNodes ? o = Ee(t.assignedNodes()) : he(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? o = Ee(t.contentDocument.body.childNodes) : o = Ee(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes), o.length === 0 || he(t, HTMLVideoElement) || await o.reduce((i, s) => i.then(() => gn(s, n)).then((l) => {
    l && e.appendChild(l);
  }), Promise.resolve()), e;
}
function Zc(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Ee(r).forEach((a) => {
    let o = r.getPropertyValue(a);
    a === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), he(t, HTMLIFrameElement) && a === "display" && o === "inline" && (o = "block"), a === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), n.setProperty(a, o, r.getPropertyPriority(a));
  });
}
function Yc(t, e) {
  he(t, HTMLTextAreaElement) && (e.innerHTML = t.value), he(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ep(t, e) {
  if (he(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((a) => t.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function tp(t, e) {
  return he(e, Element) && (Zc(t, e), Nc(t, e), Yc(t, e), ep(t, e)), e;
}
async function np(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const s = n[o].getAttribute("xlink:href");
    if (s) {
      const l = t.querySelector(s), u = document.querySelector(s);
      !l && u && !r[s] && (r[s] = await gn(u, e, !0));
    }
  }
  const a = Object.values(r);
  if (a.length) {
    const o = "http://www.w3.org/1999/xhtml", i = document.createElementNS(o, "svg");
    i.setAttribute("xmlns", o), i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.overflow = "hidden", i.style.display = "none";
    const s = document.createElementNS(o, "defs");
    i.appendChild(s);
    for (let l = 0; l < a.length; l++)
      s.appendChild(a[l]);
    t.appendChild(i);
  }
  return t;
}
async function gn(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Kc(r, e)).then((r) => Xc(t, r, e)).then((r) => tp(t, r)).then((r) => np(r, e));
}
const lo = /url\((['"]?)([^'"]+?)\1\)/g, rp = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ap = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function op(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function ip(t) {
  const e = [];
  return t.replace(lo, (n, r, a) => (e.push(a), n)), e.filter((n) => !nr(n));
}
async function lp(t, e, n, r, a) {
  try {
    const o = n ? Ec(e, n) : e, i = _r(e);
    let s;
    return a || (s = await Sr(o, i, r)), t.replace(op(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function sp(t, { preferredFontFormat: e }) {
  return e ? t.replace(ap, (n) => {
    for (; ; ) {
      const [r, , a] = rp.exec(n) || [];
      if (!a)
        return "";
      if (a === e)
        return `src: ${r};`;
    }
  }) : t;
}
function so(t) {
  return t.search(lo) !== -1;
}
async function uo(t, e, n) {
  if (!so(t))
    return t;
  const r = sp(t, n);
  return ip(r).reduce((o, i) => o.then((s) => lp(s, i, e, n)), Promise.resolve(r));
}
async function qt(t, e, n) {
  var r;
  const a = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (a) {
    const o = await uo(a, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function up(t, e) {
  await qt("background", t, e) || await qt("background-image", t, e), await qt("mask", t, e) || await qt("mask-image", t, e);
}
async function cp(t, e) {
  const n = he(t, HTMLImageElement);
  if (!(n && !nr(t.src)) && !(he(t, SVGImageElement) && !nr(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, a = await Sr(r, _r(r), e);
  await new Promise((o, i) => {
    t.onload = o, t.onerror = i;
    const s = t;
    s.decode && (s.decode = o), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = a) : t.href.baseVal = a;
  });
}
async function pp(t, e) {
  const r = Ee(t.childNodes).map((a) => co(a, e));
  await Promise.all(r).then(() => t);
}
async function co(t, e) {
  he(t, Element) && (await up(t, e), await cp(t, e), await pp(t, e));
}
function dp(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), t;
}
const ca = {};
async function pa(t) {
  let e = ca[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, ca[t] = e, e;
}
async function da(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let s = i.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), io(s, e.fetchRequestInit, ({ result: l }) => (n = n.replace(i, `url(${l})`), [i, l]));
  });
  return Promise.all(o).then(() => n);
}
function fa(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = a.exec(r);
    if (l === null)
      break;
    e.push(l[0]);
  }
  r = r.replace(a, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(i, "gi");
  for (; ; ) {
    let l = o.exec(r);
    if (l === null) {
      if (l = s.exec(r), l === null)
        break;
      o.lastIndex = s.lastIndex;
    } else
      s.lastIndex = o.lastIndex;
    e.push(l[0]);
  }
  return e;
}
async function fp(t, e) {
  const n = [], r = [];
  return t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ee(a.cssRules || []).forEach((o, i) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let s = i + 1;
            const l = o.href, u = pa(l).then((p) => da(p, e)).then((p) => fa(p).forEach((d) => {
              try {
                a.insertRule(d, d.startsWith("@import") ? s += 1 : a.cssRules.length);
              } catch (c) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: c
                });
              }
            })).catch((p) => {
              console.error("Error loading remote css", p.toString());
            });
            r.push(u);
          }
        });
      } catch (o) {
        const i = t.find((s) => s.href == null) || document.styleSheets[0];
        a.href != null && r.push(pa(a.href).then((s) => da(s, e)).then((s) => fa(s).forEach((l) => {
          i.insertRule(l, a.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ee(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function mp(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => so(e.style.getPropertyValue("src")));
}
async function yp(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Ee(t.ownerDocument.styleSheets), r = await fp(n, e);
  return mp(r);
}
async function hp(t, e) {
  const n = await yp(t, e);
  return (await Promise.all(n.map((a) => {
    const o = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return uo(a.cssText, o, e);
  }))).join(`
`);
}
async function vp(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await hp(t, e);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function gp(t, e = {}) {
  const { width: n, height: r } = oo(t, e), a = await gn(t, e, !0);
  return await vp(a, e), await co(a, e), dp(a, e), await Tc(a, n, r);
}
async function bp(t, e = {}) {
  const { width: n, height: r } = oo(t, e), a = await gp(t, e), o = await pn(a), i = document.createElement("canvas"), s = i.getContext("2d"), l = e.pixelRatio || Oc(), u = e.canvasWidth || n, p = e.canvasHeight || r;
  return i.width = u * l, i.height = p * l, e.skipAutoScale || Fc(i), i.style.width = `${u}`, i.style.height = `${p}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, i.width, i.height)), s.drawImage(o, 0, 0, i.width, i.height), i;
}
async function wp(t, e = {}) {
  return (await bp(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
const Jt = 210 * 8, Kt = 297 * 8;
async function ma(t) {
  if (!t) return "";
  const e = await wp(t, {
    pixelRatio: 2,
    quality: 1,
    skipFonts: !0
  }), n = await _p(e), r = Math.min(Jt / n.naturalWidth, Kt / n.naturalHeight), a = Math.round(n.naturalWidth * r), o = Math.round(n.naturalHeight * r), i = Math.round((Jt - a) / 2), s = Math.round((Kt - o) / 2), l = document.createElement("canvas");
  l.width = Jt, l.height = Kt;
  const u = l.getContext("2d");
  return u.fillStyle = "#fff", u.fillRect(0, 0, Jt, Kt), u.drawImage(n, i, s, a, o), l.toDataURL("image/jpeg", 0.5);
}
function _p(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = n, r.src = t;
  });
}
async function Sp({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    Xe(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await ma(t.front)), (e === void 0 || e === "back") && (r.back = await ma(t.back)), n(r);
    });
  });
}
function kp(t) {
  const e = xe({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return Sp({
      paperEls: t,
      paperKey: r
    }).then((a) => (Object.assign(e, a), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
const Ap = (t) => (De("data-v-86631343"), t = t(), Ce(), t), $p = { class: "card-tabs" }, Pp = /* @__PURE__ */ Ap(() => /* @__PURE__ */ m("span", { class: "card-tab-new-text" }, "新建", -1)), Ip = ["onClick", "onDblclick"], xp = {
  key: 1,
  class: "card-tab-name"
}, Ep = ["onClick"], Dp = ["onClick"], Cp = /* @__PURE__ */ R({
  __name: "CardManager",
  props: {
    metaList: {},
    activeCardId: {}
  },
  emits: ["create-card", "switch-card", "delete-card", "duplicate-card", "rename-card"],
  setup(t, { emit: e }) {
    const n = e, r = Ae(), a = Z(null), o = Z("");
    async function i(d) {
      try {
        await Ao.confirm("确定要删除该角色卡吗？此操作不可撤销。", "警告", {
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          type: "warning"
        }), n("delete-card", d);
      } catch {
      }
    }
    function s(d) {
      a.value = d.id, o.value = d.saveName;
    }
    function l() {
      a.value && o.value.trim() && n("rename-card", a.value, o.value.trim()), a.value = null;
    }
    function u(d) {
      return d.name && d.name !== "未命名角色卡" ? d.name : d.saveName;
    }
    function p() {
      a.value = null;
    }
    return (d, c) => {
      var h;
      const f = de("el-icon");
      return b(), x("div", {
        class: L(["card-manager", { "printing-image": (h = S(r)) == null ? void 0 : h.printing }])
      }, [
        m("div", $p, [
          m("div", {
            class: "card-tab card-tab-new",
            onClick: c[0] || (c[0] = (y) => n("create-card"))
          }, [
            A(f, { size: 14 }, {
              default: F(() => [
                A(S(Uu))
              ]),
              _: 1
            }),
            Pp
          ]),
          (b(!0), x(te, null, re(d.metaList, (y) => (b(), x("div", {
            key: y.id,
            class: L(["card-tab", { "card-tab-active": y.id === d.activeCardId }]),
            onClick: (g) => n("switch-card", y.id),
            onDblclick: (g) => s(y)
          }, [
            a.value === y.id ? Te((b(), x("input", {
              key: 0,
              class: "card-tab-input",
              "onUpdate:modelValue": c[1] || (c[1] = (g) => o.value = g),
              onBlur: l,
              onKeyup: [
                Pr(l, ["enter"]),
                Pr(p, ["escape"])
              ],
              onClick: c[2] || (c[2] = Pt(() => {
              }, ["stop"]))
            }, null, 544)), [
              [Sa, o.value]
            ]) : (b(), x("span", xp, O(u(y)), 1)),
            m("span", {
              class: "card-tab-btn",
              onClick: Pt((g) => n("duplicate-card", y.id), ["stop"]),
              title: "复制"
            }, [
              A(f, { size: 10 }, {
                default: F(() => [
                  A(S($u))
                ]),
                _: 1
              })
            ], 8, Ep),
            m("span", {
              class: L(["card-tab-btn card-tab-delete", { "card-tab-delete-mobile": y.id !== d.activeCardId }]),
              onClick: Pt((g) => i(y.id), ["stop"]),
              title: "删除"
            }, [
              A(f, { size: 12 }, {
                default: F(() => [
                  A(S(Iu))
                ]),
                _: 1
              })
            ], 10, Dp)
          ], 42, Ip))), 128))
        ])
      ], 2);
    };
  }
}), Rp = /* @__PURE__ */ V(Cp, [["__scopeId", "data-v-86631343"]]), Op = { class: "control-section" }, Fp = { class: "main-controls" }, Mp = { class: "more-controls" }, Tp = { class: "downloader-body" }, Vp = { class: "downloader-items" }, Up = { class: "in-out-modal-body" }, Bp = { class: "in-out-modal-panel" }, Np = { class: "in-out-modal-panel" }, jp = /* @__PURE__ */ R({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, a = n, o = br(), i = ae(), s = vn(), l = Ae(), u = Ye("cardManager"), p = Z(""), d = K(() => {
      const U = JSON.stringify({
        pc: i == null ? void 0 : i.value,
        viewData: {
          ...s
          // showingChildSkills,
        }
      });
      return oa.compressToEncodedURIComponent(U);
    }), c = K(() => {
      const U = new Blob([d.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(U);
    }), f = Z(!1), h = Z(!1), y = Z(!1), g = Z("features"), k = Z(!1);
    function $() {
      a("switch-paper");
    }
    const { paperImages: v, printPaper: _ } = kp(r.paperEls), P = K(() => {
      const { name: U, playerName: D } = (i == null ? void 0 : i.value) || {}, W = "", B = [U, D].filter((ee) => ee).join("-");
      return `${W}${B}${B ? "-" : ""}`;
    });
    function w(U) {
      if (l) {
        if (l.printing) {
          Se.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        l.printing = !0, Se.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            _(U).then(() => {
              h.value = !0, l.printing = !1;
            });
          }
        });
      }
    }
    function I() {
      y.value = !y.value;
    }
    function E() {
      if (!i || !s) return;
      const U = Ye("cardManager", null);
      U ? U.resetCurrentCard() : (i.value = xe(We()), Us(s), Xe(() => {
        o.removeItem("autoSaved");
      })), Se.info("已重置人物卡"), y.value = !1;
    }
    function q() {
      f.value = !0;
    }
    function C() {
      to(d.value), Se.success("已复制到剪贴板");
    }
    function T() {
      const U = oa.decompressFromEncodedURIComponent(p.value), D = JSON.parse(U);
      if (l && (l.importing = !0), D && D.viewData && D.pc && s && i)
        try {
          i.value = We(D.pc), Object.keys(D.viewData).forEach((W) => {
            const B = W;
            s[B] = D.viewData[B];
          }), Se.success("已成功导入"), f.value = !1, y.value = !1;
        } catch {
          Se.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        Se.error("数据有误，无法导入");
      l && (l.importing = !1);
    }
    return e({ inData: p, applyInData: T }), (U, D) => {
      const W = de("el-tab-pane"), B = de("el-tabs"), ee = de("el-input"), X = de("el-button");
      return b(), x("div", Op, [
        m("div", Fp, [
          A(je, {
            label: "数据",
            icon: S(no),
            onClick: q
          }, null, 8, ["icon"]),
          A(xc),
          A(je, {
            label: "更多",
            icon: S(Tu),
            onClick: I
          }, null, 8, ["icon"]),
          A(je, {
            label: "翻面",
            icon: S(Nu),
            onClick: $
          }, null, 8, ["icon"])
        ]),
        y.value ? (b(), Q(B, {
          key: 0,
          class: "more-container",
          modelValue: g.value,
          "onUpdate:modelValue": D[2] || (D[2] = (M) => g.value = M)
        }, {
          default: F(() => [
            A(W, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: F(() => [
                m("div", Mp, [
                  A(je, {
                    label: "重置人物卡",
                    icon: S(zu),
                    onClick: E
                  }, null, 8, ["icon"]),
                  A(je, {
                    label: "保存",
                    icon: S(Ru),
                    onClick: D[0] || (D[0] = () => w())
                  }, null, 8, ["icon"]),
                  A(je, {
                    label: "存档管理",
                    icon: S(Fu),
                    onClick: D[1] || (D[1] = (M) => k.value = !0)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            A(W, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: F(() => [
                A(mc)
              ]),
              _: 1
            }),
            A(W, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: F(() => [
                A(Sc)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : H("", !0),
        A(ft, {
          modelValue: h.value,
          "onUpdate:modelValue": D[5] || (D[5] = (M) => h.value = M),
          title: "下载图片/数据"
        }, {
          default: F(() => [
            m("div", Tp, [
              m("div", Vp, [
                A(Vn, {
                  title: "正面",
                  refreshable: "",
                  previewImage: S(v).front,
                  download: {
                    url: S(v).front,
                    name: P.value,
                    type: "jpg"
                  },
                  onRefresh: D[3] || (D[3] = () => w("front"))
                }, null, 8, ["previewImage", "download"]),
                A(Vn, {
                  title: "背面",
                  refreshable: "",
                  previewImage: S(v).back,
                  download: {
                    url: S(v).back,
                    name: P.value,
                    type: "jpg"
                  },
                  onRefresh: D[4] || (D[4] = () => w("back"))
                }, null, 8, ["previewImage", "download"]),
                A(Vn, {
                  title: "车卡数据",
                  download: {
                    url: c.value,
                    name: "COC",
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        A(ft, {
          modelValue: f.value,
          "onUpdate:modelValue": D[7] || (D[7] = (M) => f.value = M),
          title: "数据",
          onClosed: D[8] || (D[8] = (M) => p.value = "")
        }, {
          default: F(() => [
            m("div", Up, [
              m("div", Bp, [
                A(ee, {
                  type: "textarea",
                  value: d.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                A(X, {
                  type: "primary",
                  onClick: C
                }, {
                  default: F(() => [
                    Ze(" 复制以上内容 ")
                  ]),
                  _: 1
                })
              ]),
              m("div", Np, [
                A(ee, {
                  type: "textarea",
                  modelValue: p.value,
                  "onUpdate:modelValue": D[6] || (D[6] = (M) => p.value = M),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                A(X, {
                  type: "primary",
                  onClick: T
                }, {
                  default: F(() => [
                    Ze(" 导入以上内容 ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        A(ft, {
          modelValue: k.value,
          "onUpdate:modelValue": D[10] || (D[10] = (M) => k.value = M),
          title: "存档管理"
        }, {
          default: F(() => [
            A(Rp, {
              metaList: S(u).metaList.value,
              activeCardId: S(u).activeCardId.value,
              onCreateCard: S(u).createCard,
              onSwitchCard: S(u).switchCard,
              onDeleteCard: S(u).deleteCard,
              onDuplicateCard: S(u).duplicateCard,
              onRenameCard: D[9] || (D[9] = (M, J) => S(u).renameCard(M, J))
            }, null, 8, ["metaList", "activeCardId", "onCreateCard", "onSwitchCard", "onDeleteCard", "onDuplicateCard"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), ya = /* @__PURE__ */ V(jp, [["__scopeId", "data-v-7c85691f"]]), zp = /* @__PURE__ */ R({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = Ae();
    return (n, r) => {
      var a;
      return b(), x("div", {
        class: L(["paper theme-light", {
          "printing-image": (a = S(e)) == null ? void 0 : a.printing
        }])
      }, [
        m("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          Dt(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), po = /* @__PURE__ */ V(zp, [["__scopeId", "data-v-73873656"]]), Lp = { class: "paper-section" }, Wp = { class: "heading" }, Gp = { class: "title" }, Hp = { class: "subtitle" }, qp = { class: "body" }, Jp = /* @__PURE__ */ R({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (b(), x("div", Lp, [
      m("div", {
        class: L(["header", {
          "header-centered": e.centered
        }])
      }, [
        Dt(e.$slots, "header", {}, () => [
          m("h1", Wp, [
            m("span", Gp, O(e.title), 1),
            m("span", Hp, O(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      m("div", qp, [
        Dt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ye = /* @__PURE__ */ V(Jp, [["__scopeId", "data-v-a68d9331"]]), Kp = { class: "label" }, Qp = { class: "label-title" }, Xp = {
  key: 0,
  class: "label-hint"
}, Zp = ["placeholder", "readonly", "value"], Yp = /* @__PURE__ */ R({
  __name: "WritableRow",
  props: {
    label: {},
    hint: {},
    placeholder: {},
    char: { default: 5 },
    modelValue: { default: "" },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(t) {
    const e = t, n = Ae(), r = xe({
      width: `${e.char}em`
    });
    return (a, o) => {
      var i, s;
      return b(), x("div", {
        class: L(["writable-row", {
          "writable-row-with-hint": !!a.hint,
          "printing-image": (i = S(n)) == null ? void 0 : i.printing
        }])
      }, [
        m("div", Kp, [
          m("div", Qp, O(a.label), 1),
          a.hint ? (b(), x("div", Xp, O(a.hint), 1)) : H("", !0)
        ]),
        m("input", {
          type: "text",
          class: "input",
          style: zn(r),
          placeholder: (s = S(n)) != null && s.printing ? "" : a.placeholder,
          readonly: a.readonly,
          value: a.modelValue,
          onInput: o[0] || (o[0] = (l) => a.$emit("update:modelValue", l.target.value)),
          onFocus: o[1] || (o[1] = (l) => a.$emit("focus")),
          onBlur: o[2] || (o[2] = (l) => a.$emit("blur"))
        }, null, 44, Zp)
      ], 2);
    };
  }
}), pe = /* @__PURE__ */ V(Yp, [["__scopeId", "data-v-1b667523"]]), ed = { class: "flatten-tree" }, td = { class: "group-label" }, nd = { class: "options" }, rd = ["onClick"], ad = /* @__PURE__ */ R({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (b(), x("div", ed, [
      (b(!0), x(te, null, re(e.tree, (r) => (b(), x("div", {
        class: "group",
        key: r.key
      }, [
        m("div", td, O(r.label), 1),
        m("div", nd, [
          (b(!0), x(te, null, re(r.children, (a) => (b(), x("a", {
            class: "option",
            key: a.key,
            onClick: (o) => e.$emit("select", a, r)
          }, O(a.label), 9, rd))), 128))
        ])
      ]))), 128))
    ]));
  }
}), fo = /* @__PURE__ */ V(ad, [["__scopeId", "data-v-3998604b"]]), kr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent);
  }
};
function dn() {
  var t;
  return typeof screen < "u" && ((t = screen == null ? void 0 : screen.orientation) != null && t.type) ? screen.orientation.type.startsWith("portrait") ? "mobile" : "desktop" : window.innerWidth > window.innerHeight ? "desktop" : "mobile";
}
const Ot = Z(dn());
window.addEventListener("resize", () => {
  Ot.value = dn();
});
typeof screen < "u" && (screen != null && screen.orientation) ? screen.orientation.addEventListener("change", () => {
  Ot.value = dn();
}) : window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    Ot.value = dn();
  }, 100);
});
function od() {
  return Ot.value === "desktop";
}
function _t() {
  const t = Ae();
  return K(() => !(t != null && t.printing) && Ot.value === "mobile");
}
const id = { class: "info-row" }, ld = { class: "rel full-width" }, sd = {
  key: 0,
  class: "job-selector"
}, ud = { class: "job-selector-header" }, cd = { class: "info-row" }, pd = { class: "info-col" }, dd = { class: "info-col" }, fd = /* @__PURE__ */ R({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ae(), n = Ae(), { jobGroups: r } = Ut, a = Z(!1), o = Z("");
    function i() {
      a.value = !0;
    }
    function s() {
      a.value = !1;
    }
    ve(
      () => a.value,
      () => {
        o.value = "";
      }
    );
    const l = _t(), u = K(() => {
      const d = o.value;
      return r.reduce((f, h) => {
        const { name: y, pinyin: g, jobs: k } = h, $ = l.value ? y.replace(/\//g, " ") : y, v = k.reduce(
          (_, P) => ((!d || y.includes(d) || g.includes(d) || P.name.includes(d) || P.pinyin.includes(d)) && _.push({ label: P.name, key: P.name }), _),
          []
        );
        return v.length && f.push({
          label: $,
          key: y,
          children: v
        }), f;
      }, []);
    });
    function p(d) {
      e && (e.value.job = d, s());
    }
    return (d, c) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "调查员"
    }, {
      default: F(() => {
        var f;
        return [
          m("div", {
            class: L(["info-section", {
              "printing-image": (f = S(n)) == null ? void 0 : f.printing
            }])
          }, [
            m("div", id, [
              A(pe, {
                label: "姓名",
                char: 5.5,
                modelValue: S(e).name,
                "onUpdate:modelValue": c[0] || (c[0] = (h) => S(e).name = h)
              }, null, 8, ["modelValue"]),
              A(pe, {
                label: "玩家",
                char: 5.5,
                modelValue: S(e).playerName,
                "onUpdate:modelValue": c[1] || (c[1] = (h) => S(e).playerName = h)
              }, null, 8, ["modelValue"])
            ]),
            A(pe, {
              class: "full-width",
              label: "时代",
              modelValue: S(e).time,
              "onUpdate:modelValue": c[2] || (c[2] = (h) => S(e).time = h)
            }, null, 8, ["modelValue"]),
            Te((b(), x("div", ld, [
              A(pe, {
                label: "职业",
                modelValue: S(e).job,
                "onUpdate:modelValue": c[3] || (c[3] = (h) => S(e).job = h),
                onFocus: i
              }, null, 8, ["modelValue"]),
              A(rr, { name: "slide-up" }, {
                default: F(() => [
                  a.value ? (b(), x("div", sd, [
                    m("div", ud, [
                      Te(m("input", {
                        class: "job-search-input",
                        type: "text",
                        placeholder: "输入职业名称或拼音可以进行搜索",
                        "onUpdate:modelValue": c[4] || (c[4] = (h) => o.value = h)
                      }, null, 512), [
                        [Sa, o.value]
                      ])
                    ]),
                    A(fo, {
                      tree: u.value,
                      onSelect: c[5] || (c[5] = (h) => p(h.label))
                    }, null, 8, ["tree"])
                  ])) : H("", !0)
                ]),
                _: 1
              })
            ])), [
              [S(kr), s]
            ]),
            m("div", cd, [
              m("div", pd, [
                A(pe, {
                  label: "年龄",
                  char: 4,
                  modelValue: S(e).age,
                  "onUpdate:modelValue": c[6] || (c[6] = (h) => S(e).age = h)
                }, null, 8, ["modelValue"]),
                A(pe, {
                  label: "性别",
                  char: 4,
                  modelValue: S(e).gender,
                  "onUpdate:modelValue": c[7] || (c[7] = (h) => S(e).gender = h)
                }, null, 8, ["modelValue"])
              ]),
              m("div", dd, [
                A(pe, {
                  label: "住地",
                  char: 5,
                  modelValue: S(e).location,
                  "onUpdate:modelValue": c[8] || (c[8] = (h) => S(e).location = h)
                }, null, 8, ["modelValue"]),
                A(pe, {
                  label: "故乡",
                  char: 5,
                  modelValue: S(e).hometown,
                  "onUpdate:modelValue": c[9] || (c[9] = (h) => S(e).hometown = h)
                }, null, 8, ["modelValue"])
              ])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : H("", !0);
  }
}), md = /* @__PURE__ */ V(fd, [["__scopeId", "data-v-513ee8e8"]]), yd = (t) => (De("data-v-121ecf52"), t = t(), Ce(), t), hd = { class: "info-section" }, vd = {
  key: 0,
  class: "attributes-mobile-wrap"
}, gd = { class: "attributes-grid" }, bd = {
  key: 0,
  class: "ponits-sum ponits-sum--mobile"
}, wd = { class: "attributes-group" }, _d = /* @__PURE__ */ yd(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), Sd = { class: "attributes-group" }, kd = { class: "attributes-actions" }, Ad = {
  key: 0,
  class: "ponits-sum"
}, $d = /* @__PURE__ */ R({
  __name: "AttributesSection",
  setup(t) {
    const e = ae(), n = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], r = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" },
      { key: "luc", label: "幸运", hint: "LUK" }
    ], a = K(() => {
      if (!e) return 0;
      const { str: l, con: u, dex: p, app: d, pow: c, siz: f, edu: h, int: y } = e.value.attributes, g = [l, u, p, d, c, f, h, y];
      return g.every(($) => $) ? g.reduce(($, v) => $ + (v || 0), 0) : 0;
    });
    function o(l, u) {
      e && (e.value.attributes[l] = u ? +u : void 0);
    }
    const i = _t(), s = [...n, ...r];
    return (l, u) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "属性"
    }, {
      default: F(() => [
        m("div", hd, [
          S(i) ? (b(), x("div", vd, [
            m("div", gd, [
              (b(), x(te, null, re(s, (p) => {
                var d;
                return A(pe, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((d = S(e)) == null ? void 0 : d.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (c) => o(p.key, c)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64))
            ]),
            a.value ? (b(), x("div", bd, "总点数 " + O(a.value), 1)) : H("", !0)
          ])) : (b(), x(te, { key: 1 }, [
            m("div", wd, [
              (b(), x(te, null, re(n, (p) => {
                var d;
                return A(pe, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((d = S(e)) == null ? void 0 : d.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (c) => o(p.key, c)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64))
            ]),
            _d,
            m("div", Sd, [
              (b(), x(te, null, re(r, (p) => {
                var d;
                return A(pe, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((d = S(e)) == null ? void 0 : d.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (c) => o(p.key, c)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64)),
              m("div", kd, [
                a.value ? (b(), x("div", Ad, "总点数 " + O(a.value), 1)) : H("", !0)
              ])
            ])
          ], 64))
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Pd = /* @__PURE__ */ V($d, [["__scopeId", "data-v-121ecf52"]]), Id = /* @__PURE__ */ R({
  __name: "AvatarSection",
  setup(t) {
    const e = Z(!1);
    return (n, r) => {
      const a = de("AvatarModalContent");
      return b(), Q(ft, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (o) => e.value = o)
      }, {
        default: F(() => [
          A(a, {
            onFinished: r[0] || (r[0] = (o) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), xd = /* @__PURE__ */ V(Id, [["__scopeId", "data-v-67a8d568"]]), Ed = { class: "status-checkbox" }, Dd = ["checked"], Cd = { class: "label" }, Rd = /* @__PURE__ */ R({
  __name: "StatusCheckbox",
  props: {
    label: {},
    checked: { type: Boolean, default: !1 }
  },
  emits: ["check"],
  setup(t, { emit: e }) {
    const n = e;
    function r(a) {
      const o = a.target;
      n("check", o.checked);
    }
    return (a, o) => (b(), x("label", Ed, [
      m("input", {
        type: "checkbox",
        class: "checkbox",
        checked: a.checked,
        onChange: r
      }, null, 40, Dd),
      m("div", Cd, O(a.label), 1)
    ]));
  }
}), Qt = /* @__PURE__ */ V(Rd, [["__scopeId", "data-v-a1461803"]]), Od = { class: "san-status-section" }, Fd = /* @__PURE__ */ R({
  __name: "DeriveSections",
  setup(t) {
    const e = ae();
    return (n, r) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "精神状态"
    }, {
      default: F(() => {
        var a, o;
        return [
          m("div", Od, [
            A(Qt, {
              label: "精神固化",
              checked: !!((o = (a = S(e).status) == null ? void 0 : a.mental) != null && o.hardened),
              onCheck: r[0] || (r[0] = (i) => {
                S(e) && (S(e).status.mental.hardened = i);
              })
            }, null, 8, ["checked"]),
            A(Qt, { label: "临时疯狂" }),
            A(Qt, { label: "永久疯狂" }),
            A(Qt, { label: "不定性疯狂" })
          ])
        ];
      }),
      _: 1
    })) : H("", !0);
  }
}), Md = /* @__PURE__ */ V(Fd, [["__scopeId", "data-v-64ff3fdc"]]), mo = (t) => (De("data-v-1c2f875c"), t = t(), Ce(), t), Td = {
  key: 0,
  class: "suggestion-content"
}, Vd = /* @__PURE__ */ mo(() => /* @__PURE__ */ m("span", null, "默认本职技能：", -1)), Ud = { class: "multi-skill-text" }, Bd = /* @__PURE__ */ mo(() => /* @__PURE__ */ m("span", null, "、", -1)), Nd = /* @__PURE__ */ R({
  __name: "HintSection",
  setup(t) {
    const e = ao(), n = Ae();
    return (r, a) => {
      var o, i;
      return b(), x("div", {
        class: L(["hint-section", {
          "printing-image": (o = S(n)) == null ? void 0 : o.printing
        }])
      }, [
        (i = S(e)) != null && i.text ? (b(), x("div", Td, [
          Vd,
          (b(!0), x(te, null, re(S(e).multiSkillTexts, (s) => (b(), x(te, { key: s }, [
            m("span", Ud, O(s), 1),
            Bd
          ], 64))), 128)),
          m("span", null, O(S(e).text), 1)
        ])) : H("", !0)
      ], 2);
    };
  }
}), jd = /* @__PURE__ */ V(Nd, [["__scopeId", "data-v-1c2f875c"]]), zd = ["checked"], Ld = /* @__PURE__ */ R({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = Z(n.checked);
    ve(
      () => n.checked,
      () => {
        a.value = n.checked;
      }
    );
    function o(i) {
      if (n.disabled) return;
      const s = i.target.checked;
      a.value = s, r("check", s, i), r("change", i);
    }
    return (i, s) => {
      const l = de("el-icon");
      return b(), x("label", {
        class: L(["sox-checkbox", { disabled: n.disabled }])
      }, [
        A(l, { size: "0.9em" }, {
          default: F(() => [
            a.value ? (b(), Q(S(Wu), { key: 0 })) : H("", !0),
            !a.value && i.xOnFalse ? (b(), Q(S(ku), { key: 1 })) : H("", !0)
          ]),
          _: 1
        }),
        m("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: a.value,
          onChange: o
        }, null, 40, zd)
      ], 2);
    };
  }
}), Ar = /* @__PURE__ */ V(Ld, [["__scopeId", "data-v-2b1a3a86"]]), Wd = { class: "skill-td-label" }, Gd = { class: "skill-td-checkbox-label" }, Hd = {
  key: 0,
  class: "child-skill-display"
}, qd = { key: 0 }, Jd = ["value"], Kd = {
  key: 1,
  class: "child-skill-options"
}, Qd = ["onClick"], Xd = {
  key: 1,
  class: "skill-td-label-comments"
}, Zd = /* @__PURE__ */ R({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    displaySkillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ae(), a = Ye("viewData"), o = e, i = Z(!1), s = Z(null), l = Z(null), u = K(() => a == null ? void 0 : a.showingChildSkills[n.skillName]), p = K(() => {
      var $, v;
      return !!((v = ($ = n.childSkillData) == null ? void 0 : $.list) != null && v.length);
    }), d = K(() => {
      var $, v;
      return ((v = u.value) == null ? void 0 : v[(($ = n.childSkillData) == null ? void 0 : $.place) ?? -1]) ?? "";
    }), c = K(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(a == null ? void 0 : a.showingChildSkills.母语) || [],
      ...(a == null ? void 0 : a.showingChildSkills.外语) || []
    ] : u.value), f = K(() => !r || !a ? !1 : r.value.proSkills.some(($) => {
      var w;
      if (typeof $ == "string")
        return $ === n.skillName;
      const [v, _, P] = $;
      return v === n.skillName && P === ((w = n.childSkillData) == null ? void 0 : w.place);
    }));
    function h($) {
      if (!(!n.childSkillData || !u.value)) {
        if (f.value && r) {
          const v = r.value.proSkills.find(([_, P, w]) => {
            var I;
            return _ === n.skillName && w === ((I = n.childSkillData) == null ? void 0 : I.place);
          });
          v && typeof v != "string" && (v[1] = $);
        }
        u.value[n.childSkillData.place] = $;
      }
    }
    function y($) {
      h($.name), o("selectChildSkill", $), i.value = !1;
    }
    function g() {
      const $ = s.value, v = l.value;
      !$ || !v || ($.style.width = `${Math.max(v.offsetWidth + 2, 24)}px`);
    }
    ve(d, () => Xe(g)), wa(() => Xe(g));
    function k($) {
      if (r)
        if ($) {
          let v = n.skillName;
          n.childSkillData && (v = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(v);
        } else
          r.value.proSkills = r.value.proSkills.filter((v) => {
            if (!n.childSkillData) return v !== n.skillName;
            const [_, P, w] = v;
            return _ !== n.skillName || w !== n.childSkillData.place;
          });
    }
    return ($, v) => {
      var _, P, w;
      return b(), x("div", Wd, [
        m("label", Gd, [
          A(Ar, {
            checked: f.value,
            onCheck: k
          }, null, 8, ["checked"])
        ]),
        m("div", null, O($.displaySkillName), 1),
        $.childSkillData ? (b(), x("div", Hd, [
          $.skillName ? (b(), x("div", qd, ":")) : H("", !0),
          Te((b(), x("div", {
            class: L(["child-skill-input-container", { "child-skill-input-container--auto": p.value }])
          }, [
            m("input", {
              ref_key: "childInputRef",
              ref: s,
              type: "text",
              class: L(["child-skill-input", { "child-skill-input--auto": p.value }]),
              value: (_ = u.value) == null ? void 0 : _[$.childSkillData.place],
              onInput: v[0] || (v[0] = (I) => h(I.target.value)),
              onFocus: v[1] || (v[1] = (I) => i.value = !0)
            }, null, 42, Jd),
            p.value ? (b(), x("span", {
              key: 0,
              ref_key: "mirrorRef",
              ref: l,
              class: "child-skill-mirror"
            }, O((P = u.value) == null ? void 0 : P[$.childSkillData.place]), 513)) : H("", !0),
            (w = $.childSkillData.list) != null && w.length ? Te((b(), x("div", Kd, [
              (b(!0), x(te, null, re($.childSkillData.list, (I) => {
                var E;
                return b(), x("div", {
                  key: I.name,
                  class: L(["child-skill-option", {
                    "child-skill-option-existed": (E = c.value) == null ? void 0 : E.includes(I.name)
                  }]),
                  onClick: (q) => y(I)
                }, O(I.name), 11, Qd);
              }), 128))
            ], 512)), [
              [ka, i.value]
            ]) : H("", !0)
          ], 2)), [
            [S(kr), () => i.value = !1]
          ])
        ])) : H("", !0),
        $.comments ? (b(), x("div", Xd, O($.comments), 1)) : H("", !0)
      ]);
    };
  }
}), Yd = /* @__PURE__ */ V(Zd, [["__scopeId", "data-v-4d33820b"]]), ef = ["value", "readonly", "tabindex"], tf = /* @__PURE__ */ R({
  __name: "BaseTdInput",
  props: {
    value: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t, { emit: e }) {
    const n = e;
    function r(a) {
      a.target.select(), n("focus", a);
    }
    return (a, o) => (b(), x("input", {
      type: "text",
      class: "base-td-input",
      value: a.value,
      readonly: a.readonly,
      tabindex: a.readonly ? "-1" : void 0,
      onInput: o[0] || (o[0] = (i) => a.$emit("input", i.target.value)),
      onFocus: o[1] || (o[1] = (i) => a.readonly ? void 0 : r)
    }, null, 40, ef));
  }
}), ze = /* @__PURE__ */ V(tf, [["__scopeId", "data-v-542bd3ff"]]), nf = { class: "skill-td-input" }, rf = /* @__PURE__ */ R({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (b(), x("div", nf, [
      e.checkable ? (b(), Q(Ar, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : H("", !0),
      A(ze, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), Xt = /* @__PURE__ */ V(rf, [["__scopeId", "data-v-349e4cf4"]]), St = (t) => (De("data-v-6946e11c"), t = t(), Ce(), t), af = { class: "skill-table" }, of = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, null, -1)), lf = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep th-skill" }, [
  /* @__PURE__ */ m("div", { class: "th-skill-label" }, [
    /* @__PURE__ */ m("div", { class: "th-skill-label-pro" }, [
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 40%" }
      }, " 本 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 40%" }
      }, " 职 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 10%" }
      }, " 技 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 10%" }
      }, " 能 ")
    ]),
    /* @__PURE__ */ Ze(" 技能 ")
  ])
], -1)), sf = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, "职业", -1)), uf = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "兴趣", -1)), cf = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, [
  /* @__PURE__ */ m("div", { class: "th-grow" }, "成长")
], -1)), pf = /* @__PURE__ */ St(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "基准", -1)), df = ["rowspan"], ff = {
  key: 0,
  class: "init-placeholder"
}, mf = { class: "init-placeholder-content" }, yf = { key: 1 }, hf = {
  key: 0,
  class: "mobile-init-hint"
}, vf = {
  key: 1,
  class: "total-separation"
}, gf = {
  key: 2,
  class: "total-value"
}, bf = /* @__PURE__ */ R({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ae(), r = vn(), a = Ae();
    function o(p, d) {
      return p.reduce((f, h) => {
        const y = h.groupSkills.reduce(
          (g, k, $) => {
            const v = h.groupName === "特殊";
            let _ = k.init;
            n && k.name in bt && (_ = bt[k.name](n.value));
            const P = v || $ === 0, w = k.name, I = s(w), E = (I == null ? void 0 : I[1]) || {}, [q, C] = (d == null ? void 0 : d.wealth) ?? [-1, -1], T = !!(n && n.value.job), U = w === "信用评级" && T && q >= 0 && C >= 0 ? `(${q}~${C})` : "", D = u(E, _);
            let W = {
              key: k.name,
              skillName: k.name,
              displaySkillName: k.displayName ?? k.name,
              skillKey: k.name,
              comments: U,
              init: _,
              initPlaceholder: k.initPlaceholder,
              points: E,
              total: D,
              totalSeparation: [D, ~~(D / 2), ~~(D / 5)],
              showTotal: D > 0 && (D !== _ || D === E.b),
              ...P ? {
                isGroupStart: P,
                groupName: h.groupName,
                groupSize: h.groupSkills.length
              } : {},
              ...v ? { isSpecialGroup: v, groupSize: 1 } : {}
            }, B = [...g], ee = [W];
            if (k.group) {
              const X = k.group.show.length, M = B.find((J) => J.isGroupStart) || W;
              M.groupSize += X - 1, ee = k.group.show.map((J, G) => {
                var Oe, _e, Ne;
                const Y = ((Oe = r == null ? void 0 : r.showingChildSkills[k.name]) == null ? void 0 : Oe[G]) ?? J, fe = (_e = k.group) == null ? void 0 : _e.skills.find(({ name: tt }) => tt === Y);
                let ge = (fe == null ? void 0 : fe.init) ?? W.init;
                const oe = [k.name, Y, G], Re = s(oe), Be = (Re == null ? void 0 : Re[1]) || {};
                n && !k.name && (ge = Ms(Y, n.value));
                const we = u(Be, ge);
                return {
                  ...W,
                  // group info
                  isGroupStart: G ? !1 : W.isGroupStart,
                  // skill info
                  key: `${k.name}:_:${G}`,
                  skillKey: oe,
                  init: ge,
                  points: Be,
                  total: we,
                  totalSeparation: [we, ~~(we / 2), ~~(we / 5)],
                  showTotal: we > 0 && (we !== ge || we === Be.b),
                  // child skill info
                  childSkillData: {
                    name: Y,
                    place: G,
                    list: (Ne = k.group) == null ? void 0 : Ne.skills
                  }
                };
              });
            }
            return [...B, ...ee];
          },
          []
        );
        return [...f, ...y];
      }, []);
    }
    const i = K(() => o(e.data, e.suggestion));
    function s(p) {
      if (n)
        return n.value.skillPoints.find((d) => {
          const [c] = d;
          if (typeof p == "string")
            return p === c;
          const [f, h, y] = c, [g, k, $] = p;
          return f === g && y === $;
        });
    }
    function l(p, d, c) {
      if (!n) return;
      let f = s(p);
      f || (f = [typeof p == "string" ? p : [...p], {}], n.value.skillPoints.push(f));
      const h = f[1];
      if (typeof c == "boolean")
        h.c = c;
      else {
        const y = d;
        c ? h[y] = Number(c) : delete h[y];
      }
    }
    function u(p, d) {
      const { b: c, p: f = 0, i: h = 0, g: y = 0 } = p;
      return (c ?? d) + Number(f) + Number(h) + Number(y);
    }
    return (p, d) => {
      var c;
      return b(), x("table", af, [
        m("thead", null, [
          m("tr", null, [
            of,
            lf,
            m("th", {
              class: L(["skill-th th-light", { "col-base": !((c = S(a)) != null && c.printing) }])
            }, "基础", 2),
            sf,
            uf,
            cf,
            pf
          ])
        ]),
        m("tbody", null, [
          (b(!0), x(te, null, re(i.value, (f, h) => {
            var y, g, k;
            return b(), x("tr", {
              key: f.skillName
            }, [
              f.isGroupStart ? (b(), x("td", {
                key: 0,
                rowspan: f.groupSize,
                class: L(["skill-td td-group-name", {
                  "td-group-name-visible": !f.isSpecialGroup,
                  "td-color-1": f.isSpecialGroup && h % 2,
                  "td-color-2": f.isSpecialGroup && (h + 1) % 2
                }])
              }, O(f.isSpecialGroup ? "" : f.groupName), 11, df)) : H("", !0),
              m("td", {
                class: L(["skill-td td-skill-name", {
                  "td-skill-name-special": f.isSpecialGroup,
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                A(Yd, {
                  skillName: f.skillName,
                  displaySkillName: f.displaySkillName,
                  comments: f.comments,
                  childSkillData: f.childSkillData
                }, null, 8, ["skillName", "displaySkillName", "comments", "childSkillData"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "col-base": !((y = S(a)) != null && y.printing),
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.init && f.initPlaceholder ? (b(), x("div", ff, [
                  m("span", mf, O(f.initPlaceholder), 1)
                ])) : f.groupName !== "其它" ? (b(), x("span", yf, O(f.init), 1)) : (b(), Q(Xt, {
                  key: 2,
                  value: `${f.points.b ?? ""}`,
                  onInput: ($) => l(f.skillKey, "b", $)
                }, null, 8, ["value", "onInput"]))
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                A(Xt, {
                  value: `${f.points.p ?? ""}`,
                  onInput: ($) => l(f.skillKey, "p", $)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                A(Xt, {
                  value: `${f.points.i ?? ""}`,
                  onInput: ($) => l(f.skillKey, "i", $)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                A(Xt, {
                  checkable: !0,
                  checked: f.points.c,
                  value: `${f.points.g ?? ""}`,
                  onInput: ($) => l(f.skillKey, "g", $),
                  onCheck: ($) => l(f.skillKey, "c", $)
                }, null, 8, ["checked", "value", "onInput", "onCheck"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.showTotal && !((g = S(a)) != null && g.printing) ? (b(), x("span", hf, O(f.points.b ?? f.init ?? f.initPlaceholder), 1)) : H("", !0),
                (k = S(a)) != null && k.showTotalSeparation ? (b(), x("span", vf, [
                  (b(!0), x(te, null, re(f.totalSeparation, ($, v) => (b(), x("span", {
                    key: v,
                    class: "total-sep"
                  }, O($), 1))), 128))
                ])) : f.showTotal ? (b(), x("span", gf, O(f.total), 1)) : H("", !0)
              ], 2)
            ]);
          }), 128))
        ])
      ]);
    };
  }
}), ha = /* @__PURE__ */ V(bf, [["__scopeId", "data-v-6946e11c"]]), $r = (t) => (De("data-v-8d100236"), t = t(), Ce(), t), wf = { class: "header skill-section-header" }, _f = { class: "header-left points-container" }, Sf = { class: "point-container" }, kf = {
  key: 0,
  class: "point-rest"
}, Af = { class: "point-container" }, $f = {
  key: 0,
  class: "point-rest"
}, Pf = /* @__PURE__ */ $r(() => /* @__PURE__ */ m("h1", { class: "heading" }, [
  /* @__PURE__ */ m("span", { class: "title" }, "技能表")
], -1)), If = { class: "header-right points-container" }, xf = /* @__PURE__ */ $r(() => /* @__PURE__ */ m("div", null, "初始技能上限", -1)), Ef = { class: "point-container" }, Df = { class: "point-container" }, Cf = { class: "skill-section-body" }, Rf = /* @__PURE__ */ $r(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), va = 6, Of = /* @__PURE__ */ R({
  __name: "SkillSection",
  setup(t) {
    const e = ae(), n = ao(), r = Ae(), a = vn();
    function o() {
      const { pro: d, interest: c } = (e == null ? void 0 : e.value.pointValues) || {};
      return {
        pro: {
          point: Number(d || 0),
          str: d || ""
        },
        interest: {
          point: Number(c || 0),
          str: c || ""
        }
      };
    }
    const i = xe(o()), s = K(() => {
      let d = 0, c = 0;
      return e == null || e.value.skillPoints.forEach(([f, h]) => {
        d += h.p || 0, c += h.i || 0;
      }), {
        proPoint: i.pro.point - d,
        interestPoint: i.interest.point - c
      };
    });
    function l(d, c = "") {
      const f = i[d];
      if (f.str = c, f.str) {
        const h = Number(f.str);
        f.point = Number.isNaN(h) ? 0 : h;
      } else
        f.point = 0;
    }
    function u(d, c) {
      e && e.value.pointValues[d] !== c && (e.value.pointValues[d] = c);
    }
    function p(d, c) {
      const f = Number(c);
      a && a.skillLimits[d] !== f && (a.skillLimits[d] = f);
    }
    return ve(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: d, attributes: c }) => {
        const { point: f } = Ka(d, c), h = e == null ? void 0 : e.value.pointValues.pro;
        f && l("pro", h ?? `${f > 0 ? f : ""}`);
        const y = c == null ? void 0 : c.int, g = y ? `${y * 2}` : "", k = e == null ? void 0 : e.value.pointValues.interest;
        g && l("interest", k ?? g);
      },
      { deep: !0 }
    ), ve(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: d, pro: c, interest: f }, { pointValues: h, pro: y, interest: g }) => {
        if (d !== h) {
          l("pro", c ?? ""), l("interest", f ?? "");
          return;
        }
        c !== y && l("pro", c), f !== g && l("interest", f);
      },
      { deep: !0 }
    ), (d, c) => {
      var f;
      return b(), Q(ye, {
        class: L(["skill-section", {
          "printing-image": (f = S(r)) == null ? void 0 : f.printing
        }])
      }, {
        header: F(() => {
          var h, y, g;
          return [
            m("div", wf, [
              m("div", _f, [
                m("div", Sf, [
                  A(pe, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (h = S(e)) != null && h.job ? "问KP" : "",
                    char: 3,
                    modelValue: i.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (k) => u("pro", k))
                  }, null, 8, ["placeholder", "modelValue"]),
                  i.pro.point > 0 ? (b(), x("div", kf, " 剩余: " + O(s.value.proPoint), 1)) : H("", !0)
                ]),
                m("div", Af, [
                  A(pe, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: i.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (k) => u("interest", k))
                  }, null, 8, ["modelValue"]),
                  i.interest.point > 0 ? (b(), x("div", $f, " 剩余: " + O(s.value.interestPoint), 1)) : H("", !0)
                ])
              ]),
              Pf,
              m("div", If, [
                xf,
                m("div", Ef, [
                  A(pe, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((y = S(a)) == null ? void 0 : y.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": c[2] || (c[2] = (k) => p("pro", k))
                  }, null, 8, ["modelValue"])
                ]),
                m("div", Df, [
                  A(pe, {
                    class: "point-writer",
                    label: "兴趣",
                    char: 2,
                    modelValue: `${((g = S(a)) == null ? void 0 : g.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": c[3] || (c[3] = (k) => p("interest", k))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: F(() => [
          m("div", Cf, [
            A(ha, {
              data: S(Zn).slice(0, va),
              suggestion: S(n)
            }, null, 8, ["data", "suggestion"]),
            Rf,
            A(ha, {
              data: S(Zn).slice(va)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), Ff = /* @__PURE__ */ V(Of, [["__scopeId", "data-v-8d100236"]]), Mf = ["value", "disabled"], Tf = ["value"], Vf = /* @__PURE__ */ R({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (b(), x("select", {
      class: "base-td-select",
      value: e.value,
      disabled: e.disabled,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      (b(!0), x(te, null, re(e.options, (r) => (b(), x("option", {
        key: r.value,
        value: r.value
      }, O(r.label), 9, Tf))), 128))
    ], 40, Mf));
  }
}), Uf = /* @__PURE__ */ V(Vf, [["__scopeId", "data-v-2c9c2276"]]);
function Bf(t = !1) {
  const e = Z(t);
  return {
    value: e,
    setTrue() {
      e.value = !0;
    },
    setFalse() {
      e.value = !1;
    },
    setToggle() {
      e.value = !e.value;
    }
  };
}
const Nf = { class: "weapon-section-row" }, jf = { class: "show-in-print" }, zf = {
  key: 0,
  class: "wp-point-placeholder"
}, Lf = /* @__PURE__ */ R({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ae();
    function r(y, g) {
      const k = y % 2 ? 0 : 1, $ = g % 2 ? 0 : 1;
      return `td-color-${k + $}`;
    }
    function a(y) {
      var _;
      const [g, k] = y.split(")")[0].split("("), $ = ((_ = s.value.find((P) => P.name === y)) == null ? void 0 : _.init) || 0;
      let v = 0;
      return n == null || n.value.skillPoints.some((P) => {
        const w = (
          // 投掷
          !k && g === P[0] || // 格斗 or 射击
          k && typeof P[0] != "string" && g === P[0][0] && k === P[0][1]
        );
        if (w) {
          const { p: I = 0, i: E = 0, g: q = 0 } = P[1];
          v = I + E + q;
        }
        return w;
      }), {
        initPoint: $,
        result: v ? `${$ + v}` : ""
      };
    }
    const o = K(() => e.weapon || Qn()), i = K(() => a(o.value.skill)), s = K(() => Zn.find(({ groupName: g }) => g === "战斗").groupSkills.filter(({ name: g }) => g !== "闪避" && g !== "武术").reduce((g, k) => {
      const { name: $, init: v, group: _ } = k, P = _ ? _.skills.filter(({ name: w }) => w !== "武术").map((w) => ({
        name: `${$}(${w.name})`,
        init: w.init || v
      })) : [{ name: $, init: v }];
      return [...g, ...P];
    }, [])), l = K(() => [
      { value: "", label: "" },
      ...s.value.map(({ name: y }) => ({
        value: y,
        label: y
      }))
    ]), {
      value: u,
      setTrue: p,
      setFalse: d
    } = Bf(), c = K(() => Ha.map(([y, g]) => ({
      key: y,
      label: g,
      children: Ga[y].map((k) => ({
        key: k,
        label: k
      }))
    })));
    function f(y) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = Qn());
      const g = n.value.weapons[e.index];
      y.hasOwnProperty("skill") && y.skill === "" && (y = {
        ...y,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(g, y);
    }
    function h(y) {
      const g = gr.find((_) => _.name === y);
      if (!g) return;
      const { price: k, time: $, ...v } = g;
      f({
        ...v
      }), d();
    }
    return (y, g) => (b(), x("div", Nf, [
      m("div", {
        class: L(["wp-td", {
          [r(y.index, 0)]: !0
        }])
      }, [
        Te((b(), x("div", {
          class: "weapon-td-name",
          onClick: g[4] || (g[4] = () => !e.readonly && S(p)())
        }, [
          A(ze, {
            value: o.value.name,
            readonly: e.readonly,
            onInput: g[0] || (g[0] = (k) => f({ name: k })),
            onFocus: g[1] || (g[1] = () => !e.readonly && S(p)())
          }, null, 8, ["value", "readonly"]),
          A(rr, { name: "slide-down" }, {
            default: F(() => [
              Te(m("div", {
                class: "weapon-selector",
                onClick: g[3] || (g[3] = Pt(() => {
                }, ["stop"]))
              }, [
                A(fo, {
                  tree: c.value,
                  onSelect: g[2] || (g[2] = (k) => h(k.label))
                }, null, 8, ["tree"])
              ], 512), [
                [ka, S(u)]
              ])
            ]),
            _: 1
          })
        ])), [
          [S(kr), S(d)]
        ])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "has-skill": !!o.value.skill,
          [r(y.index, 1)]: !0
        }])
      }, [
        m("span", jf, O(o.value.skill), 1),
        A(Uf, {
          class: "hide-in-print",
          value: o.value.skill,
          options: l.value,
          disabled: e.readonly,
          onChange: g[5] || (g[5] = (k) => f({ skill: k }))
        }, null, 8, ["value", "options", "disabled"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 2)]: !0
        }])
      }, [
        Ze(O(i.value.result) + " ", 1),
        !i.value.result && i.value.initPoint ? (b(), x("span", zf, O(i.value.initPoint), 1)) : H("", !0)
      ], 2),
      m("div", {
        class: L(["wp-td", {
          [r(y.index, 3)]: !0
        }])
      }, [
        A(ze, {
          value: o.value.dam,
          readonly: e.readonly,
          onInput: g[6] || (g[6] = (k) => f({ dam: k }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 4)]: !0
        }])
      }, [
        A(ze, {
          value: o.value.range,
          readonly: e.readonly,
          onInput: g[7] || (g[7] = (k) => f({ range: k }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 5)]: !0
        }])
      }, [
        A(Ar, {
          xOnFalse: !!o.value.name,
          checked: !!o.value.tho,
          disabled: e.readonly,
          onCheck: g[8] || (g[8] = (k) => f({ tho: +k }))
        }, null, 8, ["xOnFalse", "checked", "disabled"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 6)]: !0
        }])
      }, [
        A(ze, {
          value: o.value.round,
          readonly: e.readonly,
          onInput: g[9] || (g[9] = (k) => f({ round: k }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 7)]: !0
        }])
      }, [
        A(ze, {
          value: o.value.num,
          readonly: e.readonly,
          onInput: g[10] || (g[10] = (k) => f({ num: k }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 8)]: !0
        }])
      }, [
        A(ze, {
          value: o.value.err,
          readonly: e.readonly,
          onInput: g[11] || (g[11] = (k) => f({ err: k }))
        }, null, 8, ["value", "readonly"])
      ], 2)
    ]));
  }
}), Wf = /* @__PURE__ */ V(Lf, [["__scopeId", "data-v-e366836e"]]), Ue = (t) => (De("data-v-52ff68fb"), t = t(), Ce(), t), Gf = { class: "weapon-section-body" }, Hf = { class: "weapon-section-row" }, qf = { class: "wp-th th-deep" }, Jf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "技能", -1)), Kf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "%", -1)), Qf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "伤害", -1)), Xf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "射程", -1)), Zf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "贯穿", -1)), Yf = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "次数", -1)), em = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "装弹量", -1)), tm = /* @__PURE__ */ Ue(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "故障", -1)), nm = /* @__PURE__ */ R({
  __name: "WeaponSection",
  setup(t) {
    const e = ae(), n = _t(), r = K(() => Array.from({ length: 4 }).map((a, o) => (e == null ? void 0 : e.value.weapons[o]) || void 0));
    return (a, o) => (b(), Q(ye, { title: "武器" }, {
      default: F(() => [
        m("div", Gf, [
          m("div", Hf, [
            m("div", qf, O(S(n) ? "名称" : "武器名称"), 1),
            Jf,
            Kf,
            Qf,
            Xf,
            Zf,
            Yf,
            em,
            tm
          ]),
          (b(!0), x(te, null, re(r.value, (i, s) => (b(), Q(Wf, {
            class: "weapon-section-row",
            key: s,
            index: s,
            weapon: i,
            readonly: s === 0
          }, null, 8, ["index", "weapon", "readonly"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), rm = /* @__PURE__ */ V(nm, [["__scopeId", "data-v-52ff68fb"]]), am = {
  key: 0,
  class: "battle-section-body"
}, om = /* @__PURE__ */ R({
  __name: "BattleSection",
  setup(t) {
    const e = ae();
    return ve(
      () => e == null ? void 0 : e.value.attributes,
      () => {
        if (!e) return;
        const { str: n, siz: r, dex: a } = e.value.attributes, o = Number(e.value.age);
        if (n && r) {
          const i = n + r;
          if (i < 65)
            e.value.battleAttributes.db = "-2", e.value.battleAttributes.size = "-2";
          else if (i < 85)
            e.value.battleAttributes.db = "-1", e.value.battleAttributes.size = "-1";
          else if (i < 125)
            e.value.battleAttributes.db = "0", e.value.battleAttributes.size = "0";
          else if (i < 165)
            e.value.battleAttributes.db = "1D4", e.value.battleAttributes.size = "1";
          else if (i < 205)
            e.value.battleAttributes.db = "1D6", e.value.battleAttributes.size = "2";
          else {
            const s = Math.floor((i - 205) / 80) + 2;
            e.value.battleAttributes.db = `${s}D6`, e.value.battleAttributes.size = `${s + 1}`;
          }
        }
        if (n && r && a) {
          let i = 8;
          if (n < r && a < r ? i = 7 : n > r && a > r ? i = 9 : i = 8, o >= 40) {
            const s = Math.floor((o - 40) / 10) + 1;
            i -= s;
          }
          e.value.battleAttributes.mov = `${i}`;
        }
      },
      { deep: !0 }
    ), (n, r) => (b(), Q(ye, { title: "战斗" }, {
      default: F(() => [
        S(e) ? (b(), x("div", am, [
          A(pe, {
            label: "DB",
            modelValue: S(e).battleAttributes.db,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => S(e).battleAttributes.db = a),
            char: 4
          }, null, 8, ["modelValue"]),
          A(pe, {
            label: "体格",
            modelValue: S(e).battleAttributes.size,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => S(e).battleAttributes.size = a),
            char: 4
          }, null, 8, ["modelValue"]),
          A(pe, {
            label: "移动力",
            modelValue: S(e).battleAttributes.mov,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => S(e).battleAttributes.mov = a),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : H("", !0)
      ]),
      _: 1
    }));
  }
}), im = /* @__PURE__ */ V(om, [["__scopeId", "data-v-67319d57"]]), lm = { class: "writable-unit" }, sm = { class: "label" }, um = ["value", "readonly"], cm = /* @__PURE__ */ R({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (b(), x("div", lm, [
      m("div", sm, O(e.label), 1),
      m("input", {
        type: "text",
        class: "input",
        value: e.modelValue,
        readonly: e.readonly,
        onInput: n[0] || (n[0] = (r) => e.$emit("update:modelValue", r.target.value))
      }, null, 40, um)
    ]));
  }
}), it = /* @__PURE__ */ V(cm, [["__scopeId", "data-v-75e07f49"]]), pm = {}, dm = (t) => (De("data-v-be8afd85"), t = t(), Ce(), t), fm = { class: "writable-divider" }, mm = /* @__PURE__ */ dm(() => /* @__PURE__ */ m("div", { class: "writable-divider-line" }, null, -1)), ym = [
  mm
];
function hm(t, e) {
  return b(), x("div", fm, ym);
}
const Bn = /* @__PURE__ */ V(pm, [["render", hm], ["__scopeId", "data-v-be8afd85"]]), vm = { class: "section-row" }, gm = { class: "derive-column sanity-column" }, bm = { class: "units-section" }, wm = { class: "derive-column hp-mp-column" }, _m = { class: "units-section" }, Sm = { class: "units-section" }, km = { class: "section-row" }, Am = /* @__PURE__ */ R({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = ae(), n = _t();
    function r(o, i, s) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[o][i] = s || void 0);
    }
    const a = K(() => {
      var p;
      if (!e || !e.value.attributes.pow) return "";
      const o = (p = e.value.skillPoints.find(([d]) => d === "克苏鲁神话")) == null ? void 0 : p[1], { p: i = 0, i: s = 0, g: l = 0 } = o || {};
      return `${99 - (o ? i + s + l : 0)}`;
    });
    return (o, i) => (b(), Q(po, { setRef: o.setRef }, {
      default: F(() => [
        m("div", vm, [
          A(md, { class: "investigator-section" }),
          A(Pd, { class: "attributes-section" }),
          m("div", gm, [
            A(ye, { title: "理智值" }, {
              default: F(() => {
                var s, l, u;
                return [
                  m("div", bm, [
                    A(it, {
                      label: S(n) ? "当前" : "当前理智",
                      modelValue: `${((u = (l = (s = S(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : l.sanity) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": i[0] || (i[0] = (p) => r("sanity", "now", p))
                    }, null, 8, ["label", "modelValue"]),
                    A(Bn),
                    A(it, {
                      label: S(n) ? "最大" : "最大理智",
                      modelValue: a.value,
                      readonly: ""
                    }, null, 8, ["label", "modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            A(Md)
          ]),
          m("div", wm, [
            A(ye, { title: "生命值" }, {
              default: F(() => {
                var s, l, u, p, d, c;
                return [
                  m("div", _m, [
                    A(it, {
                      label: "当前生命",
                      modelValue: `${((u = (l = (s = S(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : l.hp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": i[1] || (i[1] = (f) => r("hp", "now", f))
                    }, null, 8, ["modelValue"]),
                    A(Bn),
                    A(it, {
                      label: "最大生命",
                      modelValue: `${((c = (d = (p = S(e)) == null ? void 0 : p.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : c.start) ?? ""}`,
                      "onUpdate:modelValue": i[2] || (i[2] = (f) => r("hp", "start", f))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            A(ye, { title: "魔法值" }, {
              default: F(() => {
                var s, l, u, p, d, c;
                return [
                  m("div", Sm, [
                    A(it, {
                      label: "当前魔法",
                      modelValue: `${((u = (l = (s = S(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : l.mp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": i[3] || (i[3] = (f) => r("mp", "now", f))
                    }, null, 8, ["modelValue"]),
                    A(Bn),
                    A(it, {
                      label: "最大魔法",
                      modelValue: `${((c = (d = (p = S(e)) == null ? void 0 : p.deriveAttributes) == null ? void 0 : d.mp) == null ? void 0 : c.start) ?? ""}`,
                      "onUpdate:modelValue": i[4] || (i[4] = (f) => r("mp", "start", f))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            })
          ]),
          A(xd)
        ]),
        A(jd),
        A(Ff),
        m("div", km, [
          A(rm, { class: "col-0" }),
          A(im)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ga = /* @__PURE__ */ V(Am, [["__scopeId", "data-v-8d96e3a8"]]), yo = (t) => (De("data-v-c5341c4d"), t = t(), Ce(), t), $m = { class: "label" }, Pm = ["rows", "placeholder", "value", "maxlength", "readonly"], Im = /* @__PURE__ */ yo(() => /* @__PURE__ */ m("div", { class: "line-row" }, null, -1)), xm = /* @__PURE__ */ yo(() => /* @__PURE__ */ m("div", { class: "line" }, null, -1)), Em = /* @__PURE__ */ R({
  __name: "WritableArea",
  props: {
    label: {},
    modelValue: { default: "" },
    size: { default: "base" },
    rows: { default: 3 },
    placeholder: {},
    maxlength: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "oversize"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = Ae(), o = K(() => {
      const l = n.label.length, u = n.size === "small" ? l / 0.8 : l;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), i = Z(null);
    function s(l = !1) {
      const u = i.value;
      u && Xe(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), l || s(!0));
      });
    }
    return ve(
      () => [n.modelValue, a == null ? void 0 : a.printing],
      () => s()
    ), _o(() => {
      s();
    }), (l, u) => {
      var p, d;
      return b(), x("div", {
        class: L(["writable-area", {
          "printing-image": (p = S(a)) == null ? void 0 : p.printing
        }])
      }, [
        m("div", $m, O(l.label), 1),
        m("textarea", {
          class: L(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: i,
          style: zn(o.value),
          rows: l.rows,
          placeholder: (d = S(a)) != null && d.printing ? "" : l.placeholder,
          value: l.modelValue,
          maxlength: l.maxlength,
          readonly: l.readonly,
          onInput: u[0] || (u[0] = (c) => l.$emit("update:modelValue", c.target.value))
        }, null, 46, Pm),
        m("div", {
          class: L(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          Im,
          (b(!0), x(te, null, re(l.rows, (c) => (b(), x("div", {
            class: "line-row",
            key: c
          }, [
            c === 1 && l.label ? (b(), x("div", {
              key: 0,
              class: "line-row-label",
              style: zn({
                width: `${l.label.length}em`
              })
            }, null, 4)) : H("", !0),
            xm
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), ke = /* @__PURE__ */ V(Em, [["__scopeId", "data-v-c5341c4d"]]), Dm = { class: "story-section-body" }, Cm = { class: "story-section-column col-2" }, Rm = { class: "story-section-column col-3" }, Nn = 3, jn = 4, Om = /* @__PURE__ */ R({
  __name: "StorySection",
  setup(t) {
    const e = ae(), n = Ae(), r = xe([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" },
      { label: "特质", fieldName: "trait" }
    ]), a = xe([]), o = _t(), i = xe({ fieldName: "desc", size: "base" }), s = K(() => {
      const p = r.length - a.length, d = p * ~~(i.size === "base" ? Nn : jn), c = i.size === "base" ? 0 : ~~(p / 6), f = d + c;
      return o.value ? Math.ceil(f / 2) : f;
    }), l = Z();
    function u(p) {
      var d;
      (d = l.value) == null || d.close(), n != null && n.printing || (p.size === "small" ? l.value = Se.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : l.value = Se.warning("检测到内容较多，已为您调整文字为小尺寸")), p.size = "small";
    }
    return ve(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...r, ...a, i].forEach((p) => {
          p.fieldName && !(e != null && e.value.stories[p.fieldName]) && (p.size = "base");
        });
      },
      {
        deep: !0
      }
    ), (p, d) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "背景故事"
    }, {
      default: F(() => [
        m("div", Dm, [
          m("div", Cm, [
            (b(!0), x(te, null, re(r, (c) => (b(), Q(ke, {
              key: c.fieldName,
              label: c.label,
              modelValue: S(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => S(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? jn : Nn,
              size: c.size,
              onOversize: () => u(c)
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))), 128))
          ]),
          m("div", Rm, [
            (b(!0), x(te, null, re(a, (c) => (b(), Q(ke, {
              key: c.fieldName,
              label: c.label,
              modelValue: S(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => S(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? jn : Nn,
              size: c.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            A(ke, {
              label: "个人介绍",
              modelValue: S(e).stories.desc,
              "onUpdate:modelValue": d[0] || (d[0] = (c) => S(e).stories.desc = c),
              rows: s.value,
              size: i.size,
              onOversize: d[1] || (d[1] = () => u(i))
            }, null, 8, ["modelValue", "rows", "size"])
          ])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Fm = /* @__PURE__ */ V(Om, [["__scopeId", "data-v-0b316270"]]), Mm = { class: "section-body" }, Tm = /* @__PURE__ */ R({
  __name: "AssetsSection",
  setup(t) {
    const e = ae();
    return (n, r) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "资产"
    }, {
      default: F(() => [
        m("div", Mm, [
          A(ke, {
            label: "货币",
            rows: 1,
            maxlength: 15,
            modelValue: S(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => S(e).assets.currency = a)
          }, null, 8, ["modelValue"]),
          A(ke, {
            label: "资产",
            rows: 6,
            maxlength: 17 * 6 - 2,
            modelValue: S(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => S(e).assets.assets = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Vm = /* @__PURE__ */ V(Tm, [["__scopeId", "data-v-883c9fa2"]]), Um = { class: "section-body" }, Bm = /* @__PURE__ */ R({
  __name: "ItemSection",
  setup(t) {
    const e = ae();
    return (n, r) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "背包"
    }, {
      default: F(() => [
        m("div", Um, [
          A(ke, {
            label: "",
            rows: 7,
            maxlength: 18 * 7,
            modelValue: S(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => S(e).assets.items = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Nm = /* @__PURE__ */ V(Bm, [["__scopeId", "data-v-e88640cd"]]), jm = { class: "section-body" }, zm = /* @__PURE__ */ R({
  __name: "MythosSection",
  setup(t) {
    const e = ae();
    return (n, r) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "克苏鲁神话"
    }, {
      default: F(() => [
        m("div", jm, [
          A(ke, {
            label: "魔法物品与典籍",
            rows: 2,
            maxlength: 18 * 2 - 8,
            modelValue: S(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => S(e).assets.magicItems = a)
          }, null, 8, ["modelValue"]),
          A(ke, {
            label: "法术",
            rows: 2,
            maxlength: 18 * 2 - 3,
            modelValue: S(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => S(e).assets.magics = a)
          }, null, 8, ["modelValue"]),
          A(ke, {
            label: "第三类接触",
            rows: 3,
            maxlength: 18 * 3 - 6,
            modelValue: S(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => S(e).assets.touches = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Lm = /* @__PURE__ */ V(zm, [["__scopeId", "data-v-4e6eefe2"]]), Wm = { class: "section-body" }, Gm = /* @__PURE__ */ R({
  __name: "FriendSection",
  setup(t) {
    const e = ae(), n = _t(), r = K(() => n.value ? 6 : 11);
    return (a, o) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "人物关系"
    }, {
      default: F(() => [
        m("div", Wm, [
          A(ke, {
            label: "",
            rows: r.value,
            modelValue: S(e).friends,
            "onUpdate:modelValue": o[0] || (o[0] = (i) => S(e).friends = i)
          }, null, 8, ["rows", "modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Hm = /* @__PURE__ */ V(Gm, [["__scopeId", "data-v-64107825"]]), qm = { class: "section-body" }, Jm = /* @__PURE__ */ R({
  __name: "ExperienceSection",
  setup(t) {
    const e = ae();
    return (n, r) => S(e) ? (b(), Q(ye, {
      key: 0,
      title: "经历过的模组"
    }, {
      default: F(() => [
        m("div", qm, [
          A(ke, {
            label: "",
            rows: 11,
            modelValue: S(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => S(e).experiencedModules = a)
          }, null, 8, ["modelValue"]),
          A(ke, {
            label: "",
            rows: 11,
            modelValue: S(e).experiencedModules2,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => S(e).experiencedModules2 = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : H("", !0);
  }
}), Km = /* @__PURE__ */ V(Jm, [["__scopeId", "data-v-9f6f9604"]]), Qm = { class: "section-row" }, Xm = { class: "section-row col-2" }, Zm = { class: "section-row" }, Ym = /* @__PURE__ */ R({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (b(), Q(po, { setRef: e.setRef }, {
      default: F(() => [
        A(Fm),
        m("div", Qm, [
          m("div", Xm, [
            A(Nm, { class: "col-0" }),
            A(Vm, { class: "col-0" })
          ]),
          A(Lm, { class: "col-1" })
        ]),
        m("div", Zm, [
          A(Km, { class: "col-2" }),
          A(Hm, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ba = /* @__PURE__ */ V(Ym, [["__scopeId", "data-v-f32b0249"]]), ey = { class: "page theme-dark" }, ty = { class: "papers-animation-container papers-editing web-only" }, ny = { class: "sticky-footer web-only" }, ry = /* @__PURE__ */ R({
  __name: "AppView",
  setup(t) {
    const e = Es.parse(location.search.slice(1)), n = Z(We()), r = br(), a = xe($t(e)), o = xe({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || r.getItem("showTotalSeparation") || !1
    }), i = Z(ya);
    ve(
      () => o.showTotalSeparation,
      (y) => {
        r.setItem("showTotalSeparation", y);
      }
    ), Bs(n);
    const s = Hs(n, {
      viewData: a,
      pageData: o
    }), l = mu(n, a, o);
    l.init(), l.startAutoSave(), kt("pc", n), kt("viewData", a), kt("pageData", o), kt("suggestion", s), kt("cardManager", l);
    const u = xe({}), p = (y) => {
      y.preventDefault();
    }, d = (y) => {
      if (y.preventDefault(), !y.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const g = y.dataTransfer.files;
      if (g.length > 0) {
        const k = g[0];
        if (k.type === "text/plain") {
          const $ = new FileReader();
          $.onload = (v) => {
            const _ = v.target.result;
            c(_);
          }, $.readAsText(k);
        } else
          console.error("不支持的文件类型");
      }
    }, c = (y) => {
      Se.success("导入卡数据中"), i.value && (i.value.inData = y, i.value.applyInData(), i.value.inData = "");
    }, f = K(() => od());
    async function h() {
      try {
        const y = await navigator.clipboard.readText();
        c(y);
      } catch {
        Se.error("无法读取剪贴板");
      }
    }
    return (y, g) => {
      const k = de("el-icon");
      return b(), x("main", ey, [
        m("div", {
          class: L(["paper-container theme-light", { "is-mobile": !o.printing }]),
          onDrop: d,
          onDragover: Pt(p, ["prevent"])
        }, [
          m("div", ty, [
            A(rr, { name: "swipe-paper" }, {
              default: F(() => [
                (b(), Q(So, null, [
                  o.paperInFront ? (b(), Q(ga, { key: 0 })) : (b(), Q(ba, { key: 1 }))
                ], 1024))
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: L(["papers-animation-container papers-printing", {
              "papers-printing-active": o.printing
            }])
          }, [
            A(ga, {
              setRef: ($) => {
                u.front = $;
              }
            }, null, 8, ["setRef"]),
            A(ba, {
              setRef: ($) => {
                u.back = $;
              }
            }, null, 8, ["setRef"])
          ], 2)
        ], 34),
        m("div", ny, [
          A(ya, {
            ref_key: "controlSectionRef",
            ref: i,
            paperEls: u,
            isFull: f.value,
            onSwitchPaper: g[0] || (g[0] = () => o.paperInFront = !o.paperInFront)
          }, null, 8, ["paperEls", "isFull"])
        ]),
        f.value ? (b(), x("button", {
          key: 0,
          class: "fab-clipboard web-only",
          title: "读取剪贴板",
          onClick: h
        }, [
          A(k, { size: 20 }, {
            default: F(() => [
              A(S(no))
            ]),
            _: 1
          })
        ])) : H("", !0)
      ]);
    };
  }
}), iy = /* @__PURE__ */ V(ry, [["__scopeId", "data-v-b4c1efa2"]]);
export {
  iy as default
};
