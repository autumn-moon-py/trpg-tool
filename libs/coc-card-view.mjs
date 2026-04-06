import { watch as be, computed as te, unref as k, onMounted as _a, nextTick as ht, ref as z, readonly as wa, getCurrentInstance as ho, getCurrentScope as vo, onScopeDispose as go, isRef as bo, shallowRef as _o, defineComponent as C, openBlock as h, createElementBlock as w, createElementVNode as m, createBlock as Z, resolveDynamicComponent as ka, normalizeClass as ee, withCtx as V, renderSlot as vt, resolveComponent as oe, createVNode as b, createTextVNode as se, toDisplayString as F, createCommentVNode as W, inject as Ft, reactive as De, normalizeStyle as jn, Fragment as G, renderList as Y, pushScopeId as $e, popScopeId as Pe, withDirectives as Ye, h as Ar, Transition as tr, vModelText as wo, vShow as Sa, onActivated as ko, provide as Bt, withModifiers as So, KeepAlive as Ao } from "vue";
import { ElMessage as le, ClickOutside as $o, ElMessageBox as Po } from "element-plus";
var Eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function xo(t) {
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
var rr = Error, ar = EvalError, or = RangeError, ir = ReferenceError, dn = SyntaxError, et = TypeError, lr = URIError, Io = function() {
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
}, $r = typeof Symbol < "u" && Symbol, Do = Io, fn = function() {
  return typeof $r != "function" || typeof Symbol != "function" || typeof $r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Do();
}, Pr = {
  foo: {}
}, Ro = Object, mn = function() {
  return { __proto__: Pr }.foo === Pr.foo && !({ __proto__: null } instanceof Ro);
}, Fo = "Function.prototype.bind called on incompatible ", Co = Object.prototype.toString, Oo = Math.max, Mo = "[object Function]", Er = function(e, n) {
  for (var r = [], a = 0; a < e.length; a += 1)
    r[a] = e[a];
  for (var o = 0; o < n.length; o += 1)
    r[o + e.length] = n[o];
  return r;
}, To = function(e, n) {
  for (var r = [], a = n, o = 0; a < e.length; a += 1, o += 1)
    r[o] = e[a];
  return r;
}, Vo = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, No = function(e) {
  var n = this;
  if (typeof n != "function" || Co.apply(n) !== Mo)
    throw new TypeError(Fo + n);
  for (var r = To(arguments, 1), a, o = function() {
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
  }, i = Oo(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (a = Function("binder", "return function (" + Vo(s, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Uo = No, Ct = Function.prototype.bind || Uo, Bo = Function.prototype.call, jo = Object.prototype.hasOwnProperty, zo = Ct, sr = zo.call(Bo, jo), q, Lo = rr, Wo = ar, Go = or, Ho = ir, gt = dn, ft = et, Jo = lr, Aa = Function, vn = function(t) {
  try {
    return Aa('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, He = Object.getOwnPropertyDescriptor;
if (He)
  try {
    He({}, "");
  } catch {
    He = null;
  }
var gn = function() {
  throw new ft();
}, qo = He ? function() {
  try {
    return arguments.callee, gn;
  } catch {
    try {
      return He(arguments, "callee").get;
    } catch {
      return gn;
    }
  }
}() : gn, rt = fn(), Ko = mn(), pe = Object.getPrototypeOf || (Ko ? function(t) {
  return t.__proto__;
} : null), ct = {}, Qo = typeof Uint8Array > "u" || !pe ? q : pe(Uint8Array), Je = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? q : ArrayBuffer,
  "%ArrayIteratorPrototype%": rt && pe ? pe([][Symbol.iterator]()) : q,
  "%AsyncFromSyncIteratorPrototype%": q,
  "%AsyncFunction%": ct,
  "%AsyncGenerator%": ct,
  "%AsyncGeneratorFunction%": ct,
  "%AsyncIteratorPrototype%": ct,
  "%Atomics%": typeof Atomics > "u" ? q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Lo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Wo,
  "%Float32Array%": typeof Float32Array > "u" ? q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? q : FinalizationRegistry,
  "%Function%": Aa,
  "%GeneratorFunction%": ct,
  "%Int8Array%": typeof Int8Array > "u" ? q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": rt && pe ? pe(pe([][Symbol.iterator]())) : q,
  "%JSON%": typeof JSON == "object" ? JSON : q,
  "%Map%": typeof Map > "u" ? q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !rt || !pe ? q : pe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? q : Promise,
  "%Proxy%": typeof Proxy > "u" ? q : Proxy,
  "%RangeError%": Go,
  "%ReferenceError%": Ho,
  "%Reflect%": typeof Reflect > "u" ? q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !rt || !pe ? q : pe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": rt && pe ? pe(""[Symbol.iterator]()) : q,
  "%Symbol%": rt ? Symbol : q,
  "%SyntaxError%": gt,
  "%ThrowTypeError%": qo,
  "%TypedArray%": Qo,
  "%TypeError%": ft,
  "%Uint8Array%": typeof Uint8Array > "u" ? q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? q : Uint32Array,
  "%URIError%": Jo,
  "%WeakMap%": typeof WeakMap > "u" ? q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? q : WeakSet
};
if (pe)
  try {
    null.error;
  } catch (t) {
    var Zo = pe(pe(t));
    Je["%Error.prototype%"] = Zo;
  }
var Xo = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = vn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = vn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = vn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && pe && (n = pe(a.prototype));
  }
  return Je[e] = n, n;
}, xr = {
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
}, Ot = Ct, Xt = sr, Yo = Ot.call(Function.call, Array.prototype.concat), ei = Ot.call(Function.apply, Array.prototype.splice), Ir = Ot.call(Function.call, String.prototype.replace), Yt = Ot.call(Function.call, String.prototype.slice), ti = Ot.call(Function.call, RegExp.prototype.exec), ni = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ri = /\\(\\)?/g, ai = function(e) {
  var n = Yt(e, 0, 1), r = Yt(e, -1);
  if (n === "%" && r !== "%")
    throw new gt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new gt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Ir(e, ni, function(o, i, s, l) {
    a[a.length] = s ? Ir(l, ri, "$1") : i || o;
  }), a;
}, oi = function(e, n) {
  var r = e, a;
  if (Xt(xr, r) && (a = xr[r], r = "%" + a[0] + "%"), Xt(Je, r)) {
    var o = Je[r];
    if (o === ct && (o = Xo(r)), typeof o > "u" && !n)
      throw new ft("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new gt("intrinsic " + e + " does not exist!");
}, ur = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ft("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ft('"allowMissing" argument must be a boolean');
  if (ti(/^%?[^%]*%?$/, e) === null)
    throw new gt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = ai(e), a = r.length > 0 ? r[0] : "", o = oi("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], ei(r, Yo([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = Yt(c, 0, 1), v = Yt(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new gt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", Xt(Je, i))
      s = Je[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ft("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (He && p + 1 >= r.length) {
        var y = He(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = Xt(s, c), s = s[c];
      d && !l && (Je[i] = s);
    }
  }
  return s;
}, $a = { exports: {} }, K, ii = rr, li = ar, si = or, ui = ir, bt = dn, mt = et, ci = lr, Pa = Function, bn = function(t) {
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
var _n = function() {
  throw new mt();
}, pi = qe ? function() {
  try {
    return arguments.callee, _n;
  } catch {
    try {
      return qe(arguments, "callee").get;
    } catch {
      return _n;
    }
  }
}() : _n, at = fn(), di = mn(), de = Object.getPrototypeOf || (di ? function(t) {
  return t.__proto__;
} : null), pt = {}, fi = typeof Uint8Array > "u" || !de ? K : de(Uint8Array), Ke = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? K : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? K : ArrayBuffer,
  "%ArrayIteratorPrototype%": at && de ? de([][Symbol.iterator]()) : K,
  "%AsyncFromSyncIteratorPrototype%": K,
  "%AsyncFunction%": pt,
  "%AsyncGenerator%": pt,
  "%AsyncGeneratorFunction%": pt,
  "%AsyncIteratorPrototype%": pt,
  "%Atomics%": typeof Atomics > "u" ? K : Atomics,
  "%BigInt%": typeof BigInt > "u" ? K : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? K : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? K : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? K : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ii,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": li,
  "%Float32Array%": typeof Float32Array > "u" ? K : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? K : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? K : FinalizationRegistry,
  "%Function%": Pa,
  "%GeneratorFunction%": pt,
  "%Int8Array%": typeof Int8Array > "u" ? K : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? K : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? K : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": at && de ? de(de([][Symbol.iterator]())) : K,
  "%JSON%": typeof JSON == "object" ? JSON : K,
  "%Map%": typeof Map > "u" ? K : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !at || !de ? K : de((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? K : Promise,
  "%Proxy%": typeof Proxy > "u" ? K : Proxy,
  "%RangeError%": si,
  "%ReferenceError%": ui,
  "%Reflect%": typeof Reflect > "u" ? K : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? K : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !at || !de ? K : de((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? K : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": at && de ? de(""[Symbol.iterator]()) : K,
  "%Symbol%": at ? Symbol : K,
  "%SyntaxError%": bt,
  "%ThrowTypeError%": pi,
  "%TypedArray%": fi,
  "%TypeError%": mt,
  "%Uint8Array%": typeof Uint8Array > "u" ? K : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? K : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? K : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? K : Uint32Array,
  "%URIError%": ci,
  "%WeakMap%": typeof WeakMap > "u" ? K : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? K : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? K : WeakSet
};
if (de)
  try {
    null.error;
  } catch (t) {
    var mi = de(de(t));
    Ke["%Error.prototype%"] = mi;
  }
var yi = function t(e) {
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
    a && de && (n = de(a.prototype));
  }
  return Ke[e] = n, n;
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
}, Mt = Ct, en = sr, hi = Mt.call(Function.call, Array.prototype.concat), vi = Mt.call(Function.apply, Array.prototype.splice), Rr = Mt.call(Function.call, String.prototype.replace), tn = Mt.call(Function.call, String.prototype.slice), gi = Mt.call(Function.call, RegExp.prototype.exec), bi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _i = /\\(\\)?/g, wi = function(e) {
  var n = tn(e, 0, 1), r = tn(e, -1);
  if (n === "%" && r !== "%")
    throw new bt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new bt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Rr(e, bi, function(o, i, s, l) {
    a[a.length] = s ? Rr(l, _i, "$1") : i || o;
  }), a;
}, ki = function(e, n) {
  var r = e, a;
  if (en(Dr, r) && (a = Dr[r], r = "%" + a[0] + "%"), en(Ke, r)) {
    var o = Ke[r];
    if (o === pt && (o = yi(r)), typeof o > "u" && !n)
      throw new mt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new bt("intrinsic " + e + " does not exist!");
}, Si = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new mt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new mt('"allowMissing" argument must be a boolean');
  if (gi(/^%?[^%]*%?$/, e) === null)
    throw new bt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = wi(e), a = r.length > 0 ? r[0] : "", o = ki("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], vi(r, hi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = tn(c, 0, 1), v = tn(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new bt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", en(Ke, i))
      s = Ke[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new mt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (qe && p + 1 >= r.length) {
        var y = qe(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = en(s, c), s = s[c];
      d && !l && (Ke[i] = s);
    }
  }
  return s;
}, wn, Fr;
function Ai() {
  if (Fr) return wn;
  Fr = 1;
  var t, e = rr, n = ar, r = or, a = ir, o = dn, i = et, s = lr, l = Function, u = function(L) {
    try {
      return l('"use strict"; return (' + L + ").constructor;")();
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
  }() : d, f = fn(), v = mn(), y = Object.getPrototypeOf || (v ? function(L) {
    return L.__proto__;
  } : null), _ = {}, g = typeof Uint8Array > "u" || !y ? t : y(Uint8Array), P = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": _,
    "%AsyncGenerator%": _,
    "%AsyncGeneratorFunction%": _,
    "%AsyncIteratorPrototype%": _,
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
    "%GeneratorFunction%": _,
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
    "%TypedArray%": g,
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
    } catch (L) {
      var S = y(y(L));
      P["%Error.prototype%"] = S;
    }
  var $ = function L(x) {
    var M;
    if (x === "%AsyncFunction%")
      M = u("async function () {}");
    else if (x === "%GeneratorFunction%")
      M = u("function* () {}");
    else if (x === "%AsyncGeneratorFunction%")
      M = u("async function* () {}");
    else if (x === "%AsyncGenerator%") {
      var N = L("%AsyncGeneratorFunction%");
      N && (M = N.prototype);
    } else if (x === "%AsyncIteratorPrototype%") {
      var ne = L("%AsyncGenerator%");
      ne && y && (M = y(ne.prototype));
    }
    return P[x] = M, M;
  }, D = {
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
  }, A = Ct, E = sr, I = A.call(Function.call, Array.prototype.concat), X = A.call(Function.apply, Array.prototype.splice), R = A.call(Function.call, String.prototype.replace), H = A.call(Function.call, String.prototype.slice), j = A.call(Function.call, RegExp.prototype.exec), B = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, O = /\\(\\)?/g, T = function(x) {
    var M = H(x, 0, 1), N = H(x, -1);
    if (M === "%" && N !== "%")
      throw new o("invalid intrinsic syntax, expected closing `%`");
    if (N === "%" && M !== "%")
      throw new o("invalid intrinsic syntax, expected opening `%`");
    var ne = [];
    return R(x, B, function(me, we, ce, Fe) {
      ne[ne.length] = ce ? R(Fe, O, "$1") : we || me;
    }), ne;
  }, J = function(x, M) {
    var N = x, ne;
    if (E(D, N) && (ne = D[N], N = "%" + ne[0] + "%"), E(P, N)) {
      var me = P[N];
      if (me === _ && (me = $(N)), typeof me > "u" && !M)
        throw new i("intrinsic " + x + " exists, but is not available. Please file an issue!");
      return {
        alias: ne,
        name: N,
        value: me
      };
    }
    throw new o("intrinsic " + x + " does not exist!");
  };
  return wn = function(x, M) {
    if (typeof x != "string" || x.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof M != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (j(/^%?[^%]*%?$/, x) === null)
      throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var N = T(x), ne = N.length > 0 ? N[0] : "", me = J("%" + ne + "%", M), we = me.name, ce = me.value, Fe = !1, ke = me.alias;
    ke && (ne = ke[0], X(N, I([0, 1], ke)));
    for (var Ue = 1, Oe = !0; Ue < N.length; Ue += 1) {
      var _e = N[Ue], nt = H(_e, 0, 1), Nt = H(_e, -1);
      if ((nt === '"' || nt === "'" || nt === "`" || Nt === '"' || Nt === "'" || Nt === "`") && nt !== Nt)
        throw new o("property names with quotes must have matching quotes");
      if ((_e === "constructor" || !Oe) && (Fe = !0), ne += "." + _e, we = "%" + ne + "%", E(P, we))
        ce = P[we];
      else if (ce != null) {
        if (!(_e in ce)) {
          if (!M)
            throw new i("base intrinsic for " + x + " exists, but the property is not available.");
          return;
        }
        if (p && Ue + 1 >= N.length) {
          var Ut = p(ce, _e);
          Oe = !!Ut, Oe && "get" in Ut && !("originalValue" in Ut.get) ? ce = Ut.get : ce = ce[_e];
        } else
          Oe = E(ce, _e), ce = ce[_e];
        Oe && !Fe && (P[we] = ce);
      }
    }
    return ce;
  }, wn;
}
var kn, Cr;
function cr() {
  if (Cr) return kn;
  Cr = 1;
  var t = Ai(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return kn = e, kn;
}
var $i = "Function.prototype.bind called on incompatible ", Sn = Array.prototype.slice, Pi = Object.prototype.toString, Ei = "[object Function]", xi = function(e) {
  var n = this;
  if (typeof n != "function" || Pi.call(n) !== Ei)
    throw new TypeError($i + n);
  for (var r = Sn.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat(Sn.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(Sn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Ii = xi, Di = Function.prototype.bind || Ii, Ri = "Function.prototype.bind called on incompatible ", An = Array.prototype.slice, Fi = Object.prototype.toString, Ci = "[object Function]", Oi = function(e) {
  var n = this;
  if (typeof n != "function" || Fi.call(n) !== Ci)
    throw new TypeError(Ri + n);
  for (var r = An.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat(An.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(An.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Mi = Oi, Ti = Function.prototype.bind || Mi, Vi = Ti, Ni = Vi.call(Function.call, Object.prototype.hasOwnProperty), Q, _t = SyntaxError, Ea = Function, yt = TypeError, $n = function(t) {
  try {
    return Ea('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Qe = Object.getOwnPropertyDescriptor;
if (Qe)
  try {
    Qe({}, "");
  } catch {
    Qe = null;
  }
var Pn = function() {
  throw new yt();
}, Ui = Qe ? function() {
  try {
    return arguments.callee, Pn;
  } catch {
    try {
      return Qe(arguments, "callee").get;
    } catch {
      return Pn;
    }
  }
}() : Pn, ot = fn(), Bi = mn(), fe = Object.getPrototypeOf || (Bi ? function(t) {
  return t.__proto__;
} : null), dt = {}, ji = typeof Uint8Array > "u" || !fe ? Q : fe(Uint8Array), Ze = {
  "%AggregateError%": typeof AggregateError > "u" ? Q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Q : ArrayBuffer,
  "%ArrayIteratorPrototype%": ot && fe ? fe([][Symbol.iterator]()) : Q,
  "%AsyncFromSyncIteratorPrototype%": Q,
  "%AsyncFunction%": dt,
  "%AsyncGenerator%": dt,
  "%AsyncGeneratorFunction%": dt,
  "%AsyncIteratorPrototype%": dt,
  "%Atomics%": typeof Atomics > "u" ? Q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Q : FinalizationRegistry,
  "%Function%": Ea,
  "%GeneratorFunction%": dt,
  "%Int8Array%": typeof Int8Array > "u" ? Q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ot && fe ? fe(fe([][Symbol.iterator]())) : Q,
  "%JSON%": typeof JSON == "object" ? JSON : Q,
  "%Map%": typeof Map > "u" ? Q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ot || !fe ? Q : fe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Q : Promise,
  "%Proxy%": typeof Proxy > "u" ? Q : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ot || !fe ? Q : fe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ot && fe ? fe(""[Symbol.iterator]()) : Q,
  "%Symbol%": ot ? Symbol : Q,
  "%SyntaxError%": _t,
  "%ThrowTypeError%": Ui,
  "%TypedArray%": ji,
  "%TypeError%": yt,
  "%Uint8Array%": typeof Uint8Array > "u" ? Q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Q : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Q : WeakSet
};
if (fe)
  try {
    null.error;
  } catch (t) {
    var zi = fe(fe(t));
    Ze["%Error.prototype%"] = zi;
  }
var Li = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = $n("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = $n("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = $n("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && fe && (n = fe(a.prototype));
  }
  return Ze[e] = n, n;
}, Or = {
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
}, Tt = Di, nn = Ni, Wi = Tt.call(Function.call, Array.prototype.concat), Gi = Tt.call(Function.apply, Array.prototype.splice), Mr = Tt.call(Function.call, String.prototype.replace), rn = Tt.call(Function.call, String.prototype.slice), Hi = Tt.call(Function.call, RegExp.prototype.exec), Ji = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, qi = /\\(\\)?/g, Ki = function(e) {
  var n = rn(e, 0, 1), r = rn(e, -1);
  if (n === "%" && r !== "%")
    throw new _t("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new _t("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Mr(e, Ji, function(o, i, s, l) {
    a[a.length] = s ? Mr(l, qi, "$1") : i || o;
  }), a;
}, Qi = function(e, n) {
  var r = e, a;
  if (nn(Or, r) && (a = Or[r], r = "%" + a[0] + "%"), nn(Ze, r)) {
    var o = Ze[r];
    if (o === dt && (o = Li(r)), typeof o > "u" && !n)
      throw new yt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new _t("intrinsic " + e + " does not exist!");
}, Zi = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new yt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new yt('"allowMissing" argument must be a boolean');
  if (Hi(/^%?[^%]*%?$/, e) === null)
    throw new _t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Ki(e), a = r.length > 0 ? r[0] : "", o = Qi("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], Gi(r, Wi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = rn(c, 0, 1), v = rn(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new _t("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), a += "." + c, i = "%" + a + "%", nn(Ze, i))
      s = Ze[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new yt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Qe && p + 1 >= r.length) {
        var y = Qe(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = nn(s, c), s = s[c];
      d && !l && (Ze[i] = s);
    }
  }
  return s;
}, Xi = Zi, Kt = Xi("%Object.getOwnPropertyDescriptor%", !0);
if (Kt)
  try {
    Kt([], "length");
  } catch {
    Kt = null;
  }
var xa = Kt, Tr = cr(), Yi = dn, it = et, Vr = xa, el = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new it("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new it("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new it("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new it("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new it("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new it("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Vr && Vr(e, n);
  if (Tr)
    Tr(e, n, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: r,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !a && !o && !i)
    e[n] = r;
  else
    throw new Yi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, zn = cr(), Ia = function() {
  return !!zn;
};
Ia.hasArrayLengthDefineBug = function() {
  if (!zn)
    return null;
  try {
    return zn([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var tl = Ia, nl = Si, Nr = el, rl = tl(), Ur = xa, Br = et, al = nl("%Math.floor%"), ol = function(e, n) {
  if (typeof e != "function")
    throw new Br("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || al(n) !== n)
    throw new Br("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && Ur) {
    var i = Ur(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !r) && (rl ? Nr(
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
  var e = Ct, n = ur, r = ol, a = et, o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(i, o), l = cr(), u = n("%Math.max%");
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
var il = $a.exports, Da = ur, Ra = il, ll = Ra(Da("String.prototype.indexOf")), sl = function(e, n) {
  var r = Da(e, !!n);
  return typeof r == "function" && ll(e, ".prototype.") > -1 ? Ra(r) : r;
};
const ul = {}, cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ul
}, Symbol.toStringTag, { value: "Module" })), pl = /* @__PURE__ */ xo(cl);
var pr = typeof Map == "function" && Map.prototype, En = Object.getOwnPropertyDescriptor && pr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, an = pr && En && typeof En.get == "function" ? En.get : null, jr = pr && Map.prototype.forEach, dr = typeof Set == "function" && Set.prototype, xn = Object.getOwnPropertyDescriptor && dr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, on = dr && xn && typeof xn.get == "function" ? xn.get : null, zr = dr && Set.prototype.forEach, dl = typeof WeakMap == "function" && WeakMap.prototype, xt = dl ? WeakMap.prototype.has : null, fl = typeof WeakSet == "function" && WeakSet.prototype, It = fl ? WeakSet.prototype.has : null, ml = typeof WeakRef == "function" && WeakRef.prototype, Lr = ml ? WeakRef.prototype.deref : null, yl = Boolean.prototype.valueOf, hl = Object.prototype.toString, vl = Function.prototype.toString, gl = String.prototype.match, fr = String.prototype.slice, Ve = String.prototype.replace, bl = String.prototype.toUpperCase, Wr = String.prototype.toLowerCase, Fa = RegExp.prototype.test, Gr = Array.prototype.concat, Ie = Array.prototype.join, _l = Array.prototype.slice, Hr = Math.floor, Ln = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, In = Object.getOwnPropertySymbols, Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, wt = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === wt || !0) ? Symbol.toStringTag : null, Ca = Object.prototype.propertyIsEnumerable, Jr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function qr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Fa.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Hr(-t) : Hr(t);
    if (r !== t) {
      var a = String(r), o = fr.call(e, a.length + 1);
      return Ve.call(a, n, "$&_") + "." + Ve.call(Ve.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ve.call(e, n, "$&_");
}
var Gn = pl, Kr = Gn.custom, Qr = Ma(Kr) ? Kr : null, wl = function t(e, n, r, a) {
  var o = n || {};
  if (Te(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Te(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Te(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Te(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Te(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
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
    return s ? qr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? qr(e, u) : u;
  }
  var p = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return Hn(e) ? "[Array]" : "[Object]";
  var d = Ul(o, r);
  if (typeof a > "u")
    a = [];
  else if (Ta(a, e) >= 0)
    return "[Circular]";
  function c(B, O, T) {
    if (O && (a = _l.call(a), a.push(O)), T) {
      var J = {
        depth: o.depth
      };
      return Te(o, "quoteStyle") && (J.quoteStyle = o.quoteStyle), t(B, J, r + 1, a);
    }
    return t(B, o, r + 1, a);
  }
  if (typeof e == "function" && !Zr(e)) {
    var f = Dl(e), v = jt(e, c);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (v.length > 0 ? " { " + Ie.call(v, ", ") + " }" : "");
  }
  if (Ma(e)) {
    var y = wt ? Ve.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Wn.call(e);
    return typeof e == "object" && !wt ? Pt(y) : y;
  }
  if (Tl(e)) {
    for (var _ = "<" + Wr.call(String(e.nodeName)), g = e.attributes || [], P = 0; P < g.length; P++)
      _ += " " + g[P].name + "=" + Oa(kl(g[P].value), "double", o);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + Wr.call(String(e.nodeName)) + ">", _;
  }
  if (Hn(e)) {
    if (e.length === 0)
      return "[]";
    var S = jt(e, c);
    return d && !Nl(S) ? "[" + Jn(S, d) + "]" : "[ " + Ie.call(S, ", ") + " ]";
  }
  if (Al(e)) {
    var $ = jt(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Ca.call(e, "cause") ? "{ [" + String(e) + "] " + Ie.call(Gr.call("[cause]: " + c(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ie.call($, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (Qr && typeof e[Qr] == "function" && Gn)
      return Gn(e, { depth: p - r });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Rl(e)) {
    var D = [];
    return jr && jr.call(e, function(B, O) {
      D.push(c(O, e, !0) + " => " + c(B, e));
    }), Xr("Map", an.call(e), D, d);
  }
  if (Ol(e)) {
    var A = [];
    return zr && zr.call(e, function(B) {
      A.push(c(B, e));
    }), Xr("Set", on.call(e), A, d);
  }
  if (Fl(e))
    return Dn("WeakMap");
  if (Ml(e))
    return Dn("WeakSet");
  if (Cl(e))
    return Dn("WeakRef");
  if (Pl(e))
    return Pt(c(Number(e)));
  if (xl(e))
    return Pt(c(Ln.call(e)));
  if (El(e))
    return Pt(yl.call(e));
  if ($l(e))
    return Pt(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === Eo)
    return "{ [object globalThis] }";
  if (!Sl(e) && !Zr(e)) {
    var E = jt(e, c), I = Jr ? Jr(e) === Object.prototype : e instanceof Object || e.constructor === Object, X = e instanceof Object ? "" : "null prototype", R = !I && ye && Object(e) === e && ye in e ? fr.call(Ne(e), 8, -1) : X ? "Object" : "", H = I || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", j = H + (R || X ? "[" + Ie.call(Gr.call([], R || [], X || []), ": ") + "] " : "");
    return E.length === 0 ? j + "{}" : d ? j + "{" + Jn(E, d) + "}" : j + "{ " + Ie.call(E, ", ") + " }";
  }
  return String(e);
};
function Oa(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function kl(t) {
  return Ve.call(String(t), /"/g, "&quot;");
}
function Hn(t) {
  return Ne(t) === "[object Array]" && (!ye || !(typeof t == "object" && ye in t));
}
function Sl(t) {
  return Ne(t) === "[object Date]" && (!ye || !(typeof t == "object" && ye in t));
}
function Zr(t) {
  return Ne(t) === "[object RegExp]" && (!ye || !(typeof t == "object" && ye in t));
}
function Al(t) {
  return Ne(t) === "[object Error]" && (!ye || !(typeof t == "object" && ye in t));
}
function $l(t) {
  return Ne(t) === "[object String]" && (!ye || !(typeof t == "object" && ye in t));
}
function Pl(t) {
  return Ne(t) === "[object Number]" && (!ye || !(typeof t == "object" && ye in t));
}
function El(t) {
  return Ne(t) === "[object Boolean]" && (!ye || !(typeof t == "object" && ye in t));
}
function Ma(t) {
  if (wt)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Wn)
    return !1;
  try {
    return Wn.call(t), !0;
  } catch {
  }
  return !1;
}
function xl(t) {
  if (!t || typeof t != "object" || !Ln)
    return !1;
  try {
    return Ln.call(t), !0;
  } catch {
  }
  return !1;
}
var Il = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Te(t, e) {
  return Il.call(t, e);
}
function Ne(t) {
  return hl.call(t);
}
function Dl(t) {
  if (t.name)
    return t.name;
  var e = gl.call(vl.call(t), /^function\s*([\w$]+)/);
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
function Rl(t) {
  if (!an || !t || typeof t != "object")
    return !1;
  try {
    an.call(t);
    try {
      on.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Fl(t) {
  if (!xt || !t || typeof t != "object")
    return !1;
  try {
    xt.call(t, xt);
    try {
      It.call(t, It);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Cl(t) {
  if (!Lr || !t || typeof t != "object")
    return !1;
  try {
    return Lr.call(t), !0;
  } catch {
  }
  return !1;
}
function Ol(t) {
  if (!on || !t || typeof t != "object")
    return !1;
  try {
    on.call(t);
    try {
      an.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Ml(t) {
  if (!It || !t || typeof t != "object")
    return !1;
  try {
    It.call(t, It);
    try {
      xt.call(t, xt);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Tl(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Va(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Va(fr.call(t, 0, e.maxStringLength), e) + r;
  }
  var a = Ve.call(Ve.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Vl);
  return Oa(a, "single", e);
}
function Vl(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + bl.call(e.toString(16));
}
function Pt(t) {
  return "Object(" + t + ")";
}
function Dn(t) {
  return t + " { ? }";
}
function Xr(t, e, n, r) {
  var a = r ? Jn(n, r) : Ie.call(n, ", ");
  return t + " (" + e + ") {" + a + "}";
}
function Nl(t) {
  for (var e = 0; e < t.length; e++)
    if (Ta(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Ul(t, e) {
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
function jt(t, e) {
  var n = Hn(t), r = [];
  if (n) {
    r.length = t.length;
    for (var a = 0; a < t.length; a++)
      r[a] = Te(t, a) ? e(t[a], t) : "";
  }
  var o = typeof In == "function" ? In(t) : [], i;
  if (wt) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in t)
    Te(t, l) && (n && String(Number(l)) === l && l < t.length || wt && i["$" + l] instanceof Symbol || (Fa.call(/[^\w$]/, l) ? r.push(e(l, t) + ": " + e(t[l], t)) : r.push(l + ": " + e(t[l], t))));
  if (typeof In == "function")
    for (var u = 0; u < o.length; u++)
      Ca.call(t, o[u]) && r.push("[" + e(o[u]) + "]: " + e(t[o[u]], t));
  return r;
}
var Na = ur, $t = sl, Bl = wl, jl = et, zt = Na("%WeakMap%", !0), Lt = Na("%Map%", !0), zl = $t("WeakMap.prototype.get", !0), Ll = $t("WeakMap.prototype.set", !0), Wl = $t("WeakMap.prototype.has", !0), Gl = $t("Map.prototype.get", !0), Hl = $t("Map.prototype.set", !0), Jl = $t("Map.prototype.has", !0), mr = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, ql = function(t, e) {
  var n = mr(t, e);
  return n && n.value;
}, Kl = function(t, e, n) {
  var r = mr(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, Ql = function(t, e) {
  return !!mr(t, e);
}, Zl = function() {
  var e, n, r, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new jl("Side channel does not contain " + Bl(o));
    },
    get: function(o) {
      if (zt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return zl(e, o);
      } else if (Lt) {
        if (n)
          return Gl(n, o);
      } else if (r)
        return ql(r, o);
    },
    has: function(o) {
      if (zt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Wl(e, o);
      } else if (Lt) {
        if (n)
          return Jl(n, o);
      } else if (r)
        return Ql(r, o);
      return !1;
    },
    set: function(o, i) {
      zt && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new zt()), Ll(e, o, i)) : Lt ? (n || (n = new Lt()), Hl(n, o, i)) : (r || (r = { key: {}, next: null }), Kl(r, o, i));
    }
  };
  return a;
}, Xl = String.prototype.replace, Yl = /%20/g, Rn = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, yr = {
  default: Rn.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Xl.call(t, Yl, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Rn.RFC1738,
  RFC3986: Rn.RFC3986
}, es = yr, Fn = Object.prototype.hasOwnProperty, Ge = Array.isArray, Ee = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), ts = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Ge(r)) {
      for (var a = [], o = 0; o < r.length; ++o)
        typeof r[o] < "u" && a.push(r[o]);
      n.obj[n.prop] = a;
    }
  }
}, Ua = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (r[a] = e[a]);
  return r;
}, ns = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Ge(e))
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
  return Ge(e) && !Ge(n) && (a = Ua(e, r)), Ge(e) && Ge(n) ? (n.forEach(function(o, i) {
    if (Fn.call(e, i)) {
      var s = e[i];
      s && typeof s == "object" && o && typeof o == "object" ? e[i] = t(s, o, r) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(n).reduce(function(o, i) {
    var s = n[i];
    return Fn.call(o, i) ? o[i] = t(o[i], s, r) : o[i] = s, o;
  }, a);
}, rs = function(e, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, e);
}, as = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, os = function(e, n, r, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), r === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < i.length; ++l) {
    var u = i.charCodeAt(l);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === es.RFC1738 && (u === 40 || u === 41)) {
      s += i.charAt(l);
      continue;
    }
    if (u < 128) {
      s = s + Ee[u];
      continue;
    }
    if (u < 2048) {
      s = s + (Ee[192 | u >> 6] + Ee[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (Ee[224 | u >> 12] + Ee[128 | u >> 6 & 63] + Ee[128 | u & 63]);
      continue;
    }
    l += 1, u = 65536 + ((u & 1023) << 10 | i.charCodeAt(l) & 1023), s += Ee[240 | u >> 18] + Ee[128 | u >> 12 & 63] + Ee[128 | u >> 6 & 63] + Ee[128 | u & 63];
  }
  return s;
}, is = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var o = n[a], i = o.obj[o.prop], s = Object.keys(i), l = 0; l < s.length; ++l) {
      var u = s[l], p = i[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: i, prop: u }), r.push(p));
    }
  return ts(n), e;
}, ls = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ss = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, us = function(e, n) {
  return [].concat(e, n);
}, cs = function(e, n) {
  if (Ge(e)) {
    for (var r = [], a = 0; a < e.length; a += 1)
      r.push(n(e[a]));
    return r;
  }
  return n(e);
}, Ba = {
  arrayToObject: Ua,
  assign: rs,
  combine: us,
  compact: is,
  decode: as,
  encode: os,
  isBuffer: ss,
  isRegExp: ls,
  maybeMap: cs,
  merge: ns
}, ja = Zl, Qt = Ba, Dt = yr, ps = Object.prototype.hasOwnProperty, za = {
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
}, xe = Array.isArray, ds = Array.prototype.push, La = function(t, e) {
  ds.apply(t, xe(e) ? e : [e]);
}, fs = Date.prototype.toISOString, Yr = Dt.default, ue = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Qt.encode,
  encodeValuesOnly: !1,
  format: Yr,
  formatter: Dt.formatters[Yr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return fs.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ms = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Cn = {}, ys = function t(e, n, r, a, o, i, s, l, u, p, d, c, f, v, y, _, g, P) {
  for (var S = e, $ = P, D = 0, A = !1; ($ = $.get(Cn)) !== void 0 && !A; ) {
    var E = $.get(e);
    if (D += 1, typeof E < "u") {
      if (E === D)
        throw new RangeError("Cyclic object value");
      A = !0;
    }
    typeof $.get(Cn) > "u" && (D = 0);
  }
  if (typeof p == "function" ? S = p(n, S) : S instanceof Date ? S = f(S) : r === "comma" && xe(S) && (S = Qt.maybeMap(S, function(N) {
    return N instanceof Date ? f(N) : N;
  })), S === null) {
    if (i)
      return u && !_ ? u(n, ue.encoder, g, "key", v) : n;
    S = "";
  }
  if (ms(S) || Qt.isBuffer(S)) {
    if (u) {
      var I = _ ? n : u(n, ue.encoder, g, "key", v);
      return [y(I) + "=" + y(u(S, ue.encoder, g, "value", v))];
    }
    return [y(n) + "=" + y(String(S))];
  }
  var X = [];
  if (typeof S > "u")
    return X;
  var R;
  if (r === "comma" && xe(S))
    _ && u && (S = Qt.maybeMap(S, u)), R = [{ value: S.length > 0 ? S.join(",") || null : void 0 }];
  else if (xe(p))
    R = p;
  else {
    var H = Object.keys(S);
    R = d ? H.sort(d) : H;
  }
  var j = l ? n.replace(/\./g, "%2E") : n, B = a && xe(S) && S.length === 1 ? j + "[]" : j;
  if (o && xe(S) && S.length === 0)
    return B + "[]";
  for (var O = 0; O < R.length; ++O) {
    var T = R[O], J = typeof T == "object" && typeof T.value < "u" ? T.value : S[T];
    if (!(s && J === null)) {
      var L = c && l ? T.replace(/\./g, "%2E") : T, x = xe(S) ? typeof r == "function" ? r(B, L) : B : B + (c ? "." + L : "[" + L + "]");
      P.set(e, D);
      var M = ja();
      M.set(Cn, P), La(X, t(
        J,
        x,
        r,
        a,
        o,
        i,
        s,
        l,
        r === "comma" && _ && xe(S) ? null : u,
        p,
        d,
        c,
        f,
        v,
        y,
        _,
        g,
        M
      ));
    }
  }
  return X;
}, hs = function(e) {
  if (!e)
    return ue;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || ue.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Dt.default;
  if (typeof e.format < "u") {
    if (!ps.call(Dt.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var a = Dt.formatters[r], o = ue.filter;
  (typeof e.filter == "function" || xe(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in za ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = ue.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : ue.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : ue.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : ue.allowEmptyArrays,
    arrayFormat: i,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ue.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? ue.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : ue.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : ue.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : ue.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : ue.encodeValuesOnly,
    filter: o,
    format: r,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : ue.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : ue.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ue.strictNullHandling
  };
}, vs = function(t, e) {
  var n = t, r = hs(e), a, o;
  typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : xe(r.filter) && (o = r.filter, a = o);
  var i = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = za[r.arrayFormat], l = s === "comma" && r.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var u = ja(), p = 0; p < a.length; ++p) {
    var d = a[p];
    r.skipNulls && n[d] === null || La(i, ys(
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
}, kt = Ba, qn = Object.prototype.hasOwnProperty, gs = Array.isArray, re = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: kt.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, bs = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Wa = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, _s = "utf8=%26%2310003%3B", ws = "utf8=%E2%9C%93", ks = function(e, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, i = a.split(n.delimiter, o), s = -1, l, u = n.charset;
  if (n.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === ws ? u = "utf-8" : i[l] === _s && (u = "iso-8859-1"), s = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== s) {
      var p = i[l], d = p.indexOf("]="), c = d === -1 ? p.indexOf("=") : d + 1, f, v;
      c === -1 ? (f = n.decoder(p, re.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (f = n.decoder(p.slice(0, c), re.decoder, u, "key"), v = kt.maybeMap(
        Wa(p.slice(c + 1), n),
        function(_) {
          return n.decoder(_, re.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = bs(v)), p.indexOf("[]=") > -1 && (v = gs(v) ? [v] : v);
      var y = qn.call(r, f);
      y && n.duplicates === "combine" ? r[f] = kt.combine(r[f], v) : (!y || n.duplicates === "last") && (r[f] = v);
    }
  return r;
}, Ss = function(t, e, n, r) {
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
}, As = function(e, n, r, a) {
  if (e) {
    var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = r.depth > 0 && i.exec(o), u = l ? o.slice(0, l.index) : o, p = [];
    if (u) {
      if (!r.plainObjects && qn.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      p.push(u);
    }
    for (var d = 0; r.depth > 0 && (l = s.exec(o)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && qn.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      p.push(l[1]);
    }
    return l && p.push("[" + o.slice(l.index) + "]"), Ss(p, n, r, a);
  }
}, $s = function(e) {
  if (!e)
    return re;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? re.charset : e.charset, r = typeof e.duplicates > "u" ? re.duplicates : e.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : re.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : re.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : re.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : re.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : re.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : re.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : re.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : re.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : re.decoder,
    delimiter: typeof e.delimiter == "string" || kt.isRegExp(e.delimiter) ? e.delimiter : re.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : re.depth,
    duplicates: r,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : re.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : re.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : re.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : re.strictNullHandling
  };
}, Ps = function(t, e) {
  var n = $s(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? ks(t, n) : t, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(r), i = 0; i < o.length; ++i) {
    var s = o[i], l = As(s, r[s], n, typeof t == "string");
    a = kt.merge(a, l, n);
  }
  return n.allowSparse === !0 ? a : kt.compact(a);
}, Es = vs, xs = Ps, Is = yr, Ds = {
  formats: Is,
  parse: xs,
  stringify: Es
};
const Rs = /* @__PURE__ */ nr(Ds), hr = [
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
    dam: "1D3+半DB",
    tho: 1,
    range: "STR/5m",
    round: "2",
    num: "1",
    price: "0.5/3",
    err: "100",
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
  ["qt", "其它"]
];
function Kn(t) {
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
function Fs(t) {
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
function Zt(t) {
  const e = Fs(t == null ? void 0 : t.status), n = Cs(t == null ? void 0 : t.assets);
  return {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    hometown: "",
    attributes: {},
    battleAttributes: {},
    pointValues: {},
    proSkills: [],
    skillPoints: [],
    weapons: [Kn(hr[0])],
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
    friends: "",
    ...t,
    assets: n,
    status: e
  };
}
const vr = [
  {
    name: "信用评级",
    init: 0,
    intro: "衡量了调查员表现出来的富裕程度以及经济上的自信度。如果调查员尝试用他的经济地位来达成某个目标，那么也许使用信用评级技能会比较合适。信用评级可以被用来取代外貌APP来评估第一印象。（请将技能提升至调查员职业信用范围之内）"
  },
  {
    name: "克苏鲁神话",
    init: 0,
    intro: "“我认为，人的思维缺乏将已知事物联系起来的能力，这是世上最仁慈的事了。人类居住在幽暗的海洋中一个名为无知的小岛上，这海洋浩淼无垠、蕴藏无穷秘密，但我们并不应该航行过远，探究太深。”——H·P·爱手艺"
  },
  {
    name: "侦查",
    init: 25,
    intro: "这技能允许使用者发现密门或者秘密隔间，注意到隐藏的闯入者，发现并不明显的线索，发现重新涂过漆的汽车，意识到埋伏，注意到鼓出的口袋，或者任何类似的事情。对于调查员来说，这是一个很重要的技能。"
  },
  {
    name: "聆听",
    init: 20,
    intro: "衡量一名调查员理解声音的能力，包括偶然听到的对话，一扇关着的门后的轻声嘀咕，以及咖啡厅里的私语。KP可以用这来决定一场即将发生的遭遇的形式。甚至此外，一个较高的聆听技能可以指一名角色有着高度的泛察觉能力"
  },
  {
    name: "取悦",
    init: 15,
    intro: "取悦允许通过许多形式来使用，包括肉体魅力、诱惑、奉承或是单纯的人格魅力。取悦可能可以被用于迫使某人进行特定的行动。取悦或是心理学技能可以用于对抗取悦技能。取悦技能可以被用于讨价还价。"
  },
  {
    name: "话术",
    init: 5,
    intro: "话术特别限定于言语上的哄骗，欺骗以及误导。这技能的对立技能为心理学或者话术。经过一段时间的相信期后，对方会意识到自己被欺骗了，话术的效果总是暂时性的。也可用于砍价。"
  },
  {
    name: "恐吓",
    init: 15,
    intro: "恐吓可以以许多形式使用，包括武力威慑，心理操控，以及威胁。这通常被用来使某人害怕，并迫使其进行某种特定的行为。恐吓的对抗技能为恐吓或者心理学。同样也能拿来砍价。"
  },
  {
    name: "说服",
    init: 10,
    intro: "使用说服来通过一场论述、争辩以及讨论让目标相信一个确切的想法，概念，或者信仰。说服并不一定需要涉及真实的内容。成功的说服技能的运用将花费不少的时间：至少半小时。另外说服还可以被用于讨价还价。"
  },
  {
    name: "心理学",
    init: 10,
    intro: "对所有人来说都很通用的察觉方面的技能，允许使用者研究个人并且形成对于其他某人动机和人格的了解。在玩家的支持下，KP可能会选择进行一个心理学技能检定的暗骰，仅仅对使用这个技能的玩家声明获得的信息，真或假。"
  },
  {
    name: "母语",
    init: 0,
    initPlaceholder: "教育",
    intro: "当选择这项技能时，必须明确一门具体的语言并且写在技能的后面。在婴儿期或者童年早期，大多数人使用一门语言。",
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
    intro: "当选择这项技能时，必须明确一个具体的语言并且写在技能后面。一个人可以了解任何数量的语言。这技能代表使用者可以了解，说，读以及写一门不是他母语的语言的可能性。",
    group: {
      show: ["", ""],
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
    init: 5,
    intro: "用来估计某种物品的价值，包括质量，使用的材料以及工艺。相关的，调查员可以准确地辨认出物品的年龄，评估它的历史关联性以及发现赝品。"
  },
  {
    name: "乔装",
    init: 5,
    intro: "使用在当调查员想要演出自己外的其它人时。使用者改变了态度，习惯，以及/或声音来进行一个乔装，以另一个人或者另一类人的形象出现。戏剧化妆品可能会有所帮助，还有伪造的身份证件。"
  },
  {
    name: "潜行",
    init: 20,
    intro: "安静地移动或躲藏的技巧，不惊扰那些可能在听或看的人们。与这项技能相关的能力意味着角色能够安静地移动或在伪装技巧上有所长。潜行也同样意味着角色可以长时间维持一定程度的谨慎冷静来使自己保持静止和隐秘。"
  },
  {
    name: "追踪",
    init: 10,
    intro: "使调查员可以凭借追踪技能来通过土壤上的脚印，或是物体通过植被时留下的印记来追踪别人，或者是交通工具以及地球上的动物。时间的经过，雨，以及土地的种类都可能会影响追踪的难度等级。"
  },
  {
    name: "读唇",
    init: 1,
    intro: "非常规技能，这个技能允许好奇的探索者不需要听到说话者的声音，就能知道他们的对话内容。必须保持视线，如果只看到一个说话者的嘴唇，对话的另外一半就听不到。读唇也可以用于与另一个人进行安静沟通（如果两人都有此技能），允许相对复杂的语意传达。"
  },
  {
    name: "人类学",
    init: 1,
    intro: "使调查员能够通过观察来辨认和理解一个人的生活方式。如过持续观察一个其他的文化一段时间，那么他可以对文化方式以及道德习惯进行简单的预测。结合心理学可以预测目标行为和信仰。"
  },
  {
    name: "图书馆使用",
    init: 20,
    intro: "图书馆使用使一名调查员能在图书馆找到一些信息，例如特定的一本书，新闻，文件或资料库，但是需要数小时的连续调查。这个技能可以定位寻找一件隐藏案例或一本稀有书籍，但是首先需要获得阅读的许可。"
  },
  {
    name: "生存",
    init: 5,
    intro: "提供专业的如何在极端环境下生存的知识和技巧。内容包括狩猎的知识，搭建住所，可能遇到的危险的知识（例如如何避开有毒性的植物）等等，取决于所处的环境。你可以花费技能点来获得任何的专业化技能。",
    group: {
      show: ["", "", ""],
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
    init: 20,
    intro: "这技能允许一名角色借助或者不借助绳索或者登山工具进行爬树、墙以及其他垂直表面。这技能也同样包括用绳索下降。许多因素将会影响难度等级。"
  },
  {
    name: "跳跃",
    init: 20,
    intro: "如果成功，调查员可以在垂直方向上跳起或跳下，或者从一个站立点或起步点水平向外跳。当从高处跌落时，一次成功的跳跃鉴定可以将跌落伤害减半。"
  },
  {
    name: "游泳",
    init: 20,
    intro: "有能力在水或者其他液体中漂浮以及移动。只有在遭遇危险时需要进行游泳技能检定，或当KP认为合适的时候。当游泳的孤注一骰失败时，可能会导致生命值损失。也可能导致人物顺着水流向下冲走，被水半淹或完全淹没。"
  },
  {
    name: "潜水",
    init: 1,
    intro: "非常规技能，使用者接受过在深海游泳的使用以及维持潜水设备的训练，水下导航，合适的下潜配重，以及应对紧急情况的方法。"
  },
  {
    name: "技艺",
    init: 5,
    intro: "该技能可能能使你制作/修理一样东西，或者制造一个复制品/赝品。对一个物品进行一次成功的鉴定可能可以提供关于该物品的相关信息",
    group: {
      show: ["", "", ""],
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
        }
      ]
    }
  },
  {
    name: "妙手",
    init: 10,
    intro: "允许对物体进行视觉上的遮住，藏匿，或者掩盖，也许通过残害，衣服或者其他的干涉或促成错觉的材料。任何种类的巨大物件应当增加藏匿的难度。妙手包括偷窃，卡牌魔术，以及秘密使用手机。"
  },
  {
    name: "锁匠",
    init: 1,
    intro: "锁匠技能可以打开车门，热线自动装置，用铁撬撬开窗子，解决中国机关箱，以及穿过常规的商用警报系统。使用者可能会修锁，制作钥匙，或者在其他工具的帮助下打开锁。特别困难的锁可能会需要一个更高的难度等级。"
  },
  {
    name: "电气维修",
    init: 10,
    intro: "使调查员能够修理或者改装电气设备。在现代，这技能对现代电子器件几乎做不到什么。为了维修电气设备，可能需要特殊的部件或者工具。也可用于现代的爆破作业。"
  },
  {
    name: "机械维修",
    init: 10,
    intro: "这技能允许调查员修理破损的机器或制造一个新的。基础的木工手艺，管道项目，制作物品也同样可以。这技能可以用来打开普通的锁，但更加专业的就不能。机械维修通常与电气维修相伴，修理一个复杂的设备往往两者皆需。"
  },
  {
    name: "导航",
    init: 10,
    intro: "允许使用者认清自己的路。有着更高技能的人将熟悉各种定位装置。一名角色可以用这技能来测量并对某区域进行绘图（制图学），使用工具可以降低甚至取消难度等级。若角色对某区域十分熟悉，那么在检定上可以得到奖励。"
  },
  {
    name: "骑术",
    init: 5,
    intro: "这技能被用于驾驭马，驴子或者骡子，以及获得对这些骑乘动物的基础照料知识，如何在疾驰中或困难地形上操纵坐骑。当坐骑意外地抬起身子或失足时，骑手保持自己在坐骑上不摔落的几率等同于他的骑术技能。"
  },
  {
    name: "操作重型机械",
    init: 1,
    intro: "当驾驶以及操纵一辆坦克，挖土机或者其他巨型建造机械时需要这个技能。对于种类非常不同的机械，KP可以决定难度等级。"
  },
  {
    name: "汽车驾驶",
    init: 20,
    intro: "任何有着这技能的人都可以驾驶一辆汽车或者轻型卡车，进行常规的移动，并且处理机动车的一般毛病。如果调查员想要甩掉一名追踪者或者追踪某人，则需要一个汽车驾驶检定。"
  },
  {
    name: "驾驶",
    init: 1,
    intro: "这是操控飞行器或船只或其他的技能，汽车驾驶在上面。驾驶（飞行器）：了解并能够日益掌握一类飞行器。着陆时，就算在最佳的状况，也必须进行驾驶掷骰。失败的结果视情况而定。驾驶（船）：了解小型马达船和帆船在风中、暴风雨中、海潮中的各种行为，并可以从波浪与风的表现中读出暗礁及迫近的暴风雨。在风中，新水手连停艘小船都是困难的。",
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
    init: 5,
    intro: "非常规技能，用于命令、训练驯服动物进行简单任务的技能。这技能最常用在狗身上，但也不排除鸟、猫、猴子，或是其他（由KP判定）。"
  },
  {
    name: "计算机使用Ω",
    init: 5,
    intro: "这技能允许调查员用各种不同的电脑语言进行编程；恢复或者分析隐藏的数据；解除被加了保护的系统；探索一个复杂的网络；或者发现别人的骇入、后门程序、病毒。对电脑系统的特殊操作可能会需要这个检定。仅在现代可用。"
  },
  {
    name: "格斗",
    init: 0,
    intro: "格斗技能指的是一名角色在近距离战斗上的技能。你可以花费一定的点数来获得任何的专业化技能。",
    group: {
      show: ["斗殴", "", ""],
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
    intro: "包括了各种形式的火器，也包括了弓箭和弩。",
    name: "射击",
    group: {
      show: ["手枪", "步/霰", ""],
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
    initPlaceholder: "1/2敏捷",
    intro: "允许调查员本能地闪避攻击，投掷过来的投射物以及诸如此类的。闪避可以通过经验来提升，就像其他的技能一样。如果一次攻击可以被看见，调查员可以尝试闪避开它。无法躲避子弹。"
  },
  {
    name: "投掷",
    init: 20,
    intro: "当需要用物体击中目标或者用物件的正确部分击中目标（例如小刀或者短柄小斧的刃）时，使用投掷技能。一件有着合理平衡构架的可以藏于手中大小的物品可以被投掷至多等同于STR码的距离。"
  },
  {
    name: "爆破",
    init: 1,
    intro: "非常规技能，调查员可以使用此技能安全的设置/拆除爆破装置。给予足够的时间和资源，调查员可以装设炸药来摧毁一幢建筑，清除一个被堵住的隧道，以及赋予炸药不同用处。"
  },
  {
    name: "炮术",
    init: 1,
    intro: "非常规技能，这技能呈现出对一些形式的军事训练和经历。使用者具有在战争中操作战地武器的经验。这些武器通常过于巨大以至于无法单人进行操作，并且个人无法再没有工作队支援的情况下使用这武器，或者应当提高难度等级。"
  },
  {
    name: "急救",
    init: 30,
    intro: "使用者有能力可以提供紧急的医疗处理，唤醒昏迷者。急救不能用于治疗疾病，但是只有急救技能可以拯救一名濒死角色的生命。急救可以由多人共同实施，只需一人成功即可。"
  },
  {
    name: "医学",
    init: 1,
    intro: "使用者可以诊断并治疗事故创伤，疾病，毒药。提供相关药品的信息。用本技能进行治疗最少要花费1小时，可在造成了伤害后的任何时间进行，但若未在当天进行难度将会上升。成功的医学技能可唤醒一名昏迷的角色。"
  },
  {
    name: "精神分析",
    init: 1,
    intro: "这技能指广泛的情感上的治疗。精神分析可以恢复一名调查员的理智。单独的精神分析并不能加速不定时疯狂的恢复，但允许一名角色处理他人短期内的恐惧症状。心理治疗专家的治疗可以在不定式疯狂期间内回复理智。"
  },
  {
    name: "催眠",
    init: 1,
    intro: "非常规技能，调查员可以在一名自愿并经历过高度暗示、放松的目标身上引出出神似的状态，并且可能回忆起忘却的记忆。对那些遭受了精神创伤的人，这技能可以当做催眠疗法来使用，减轻一名病人的恐惧或者躁狂。"
  },
  {
    name: "会计",
    init: 5,
    intro: "使调查员理解会计工作的流程。通过检查账簿，调查员可以了解过去的资金的得与失，以及这些资金流通渠道。也能发现做假账的员工，对资金的偷偷挪用，对行贿或者敲诈的款项支付，以及经济状况是否比表面陈述的更好或者更差。"
  },
  {
    name: "法律",
    init: 5,
    intro: "代表你对法律、早期事件、法庭辩术或法院程序的了解。一个法律专家可能会获得奖励以及事务所，但这可能需要几年的申请和一个较高的信用评级。在国外时，技能的难度等级相应上升，除非该角色花费时间学习该国的法律。"
  },
  {
    name: "历史",
    init: 5,
    intro: "让一名调查员能够记住一个国家，城市，区域或者个人及其相关的重要情报。一个成功的检定可以用来帮助辨认先祖所熟悉的工具，科技，或者想法，但是对当下的所知甚少。"
  },
  {
    name: "考古学",
    init: 1,
    intro: "允许辨别以及鉴定一件古董，以及用来发现赝品。使调查员获得建立以及开掘一个挖掘遗址的专业知识。推断留下遗址的生物的目的和生活方式。人类学可能对此会有所帮助。考古学还有助于辨认已消失的人类语言的书面形式。"
  },
  {
    name: "博物学",
    init: 10,
    intro: "指对于自然环境中的植物和动物生命的研究。它可以对物种，栖息地进行辨认，并能辨认踪迹、足迹和叫声，也允许对什么事物可能对某种特定物种来说很重要进行猜测。自然学可能准确也可能不准确。"
  },
  {
    name: "神秘学",
    init: 5,
    intro: "使用者可以识别神秘学道具，用语和概念，以及民间传统，并且可以辨认魔法书以及神秘学记号。理解特定的书籍可能可以增加神秘学技能的百分比。这技能不能运用于与克苏鲁神话相关的咒术，书本，以及魔法。"
  },
  {
    name: "电子学Ω",
    init: 1,
    intro: "用来发现并对电子设备的故障进行维修。允许制作简单的电子设备。这是个现代技能—在1920年代则是使用物理学以及电气维修来应对电子设备。仅在现代可用。"
  },
  {
    name: "科学",
    init: 1,
    intro: "科学专业上的理论和实践的能力，拥有这个技能的人接受过一定程度的正式的教育或者训练。对于知识的理解和认识受到时代的限制。你可以花费点数来获得任何你想要的专业技能，每个专业化技能包括了一门专门的学科。",
    group: {
      show: ["", "", ""],
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
    intro: "自定义技能",
    name: "",
    group: {
      show: ["", "", ""],
      skills: []
    }
  }
], ea = {
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
}, Os = {
  特殊: ["信用评级", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆使用",
    "计算机使用Ω",
    "潜行",
    "追踪",
    "导航"
    // '读唇',
  ],
  社交: ["话术", "说服", "取悦", "恐吓", "心理学", "母语", "外语"],
  战斗: [
    "闪避",
    "格斗",
    "射击",
    "投掷"
    // '爆破',
    // '炮术',
  ],
  医疗: [
    "急救",
    "医学",
    "精神分析"
    // '催眠',
  ],
  运动: [
    "攀爬",
    "跳跃",
    "游泳"
    // '潜水',
  ],
  知识: [
    "博物学",
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
}, Ms = [
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
function Ts({
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
const Qn = Ts({
  skills: vr,
  groups: Os,
  groupOrder: Ms
}), ln = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2)
};
function Ja(t) {
  const e = {};
  return vr.forEach((n) => {
    n.group && (e[n.name] = [...n.group.show]);
  }), t && (t.showingChildSkills = e), e;
}
function Vs(t, e) {
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
    hp: v = { start: 0 },
    mp: y = { start: 0 },
    sanity: _ = { now: 0, start: 0 }
  } = r || {}, g = _.now == null || _.now === "" ? _.start : _.now, P = `${t.name}-力量${o}str${o}敏捷${l}dex${l}体质${i}con${i}外貌${u}app${u}智力${p}灵感${p}int${p}意志${d}pow${d}体型${s}siz${s}教育${c}edu${c}幸运${f}运气${f}luck${f}`, S = `hp${v.start}体力${v.start}mp${y.start}魔法${y.start}san${g}理智${g}理智值${g}san值${g}`;
  let $ = "";
  const D = {};
  return a.forEach(([A, E]) => {
    var j;
    let I, X, R;
    Array.isArray(A) ? ([I, , R] = A, X = (j = e.showingChildSkills[I]) == null ? void 0 : j[R]) : I = A;
    const H = X ? `${I}-${X}` : I;
    D[H] = E;
  }), vr.forEach((A) => {
    var j;
    const { name: E, init: I, group: X } = A;
    let R = ln[E] ? ln[E](t) : I;
    const H = E.includes("Ω") ? E.slice(0, -1) : E;
    if (X) {
      let B = 0;
      if ((j = e.showingChildSkills[E]) == null || j.forEach((O) => {
        var x, M;
        if (!O) return;
        const T = `${E}-${O}`, J = D[T];
        if (E && (R = ((M = (x = A.group) == null ? void 0 : x.skills.find((N) => N.name === O)) == null ? void 0 : M.init) || R), J) {
          const { b: N = E ? R : 0, p: ne = 0, i: me = 0, g: we = 0 } = J;
          B = N + ne + me + we;
        } else X.show.includes(O) && (B = R);
        O != "步/霰" && ($ += `${O}${B}`);
        const L = ea[O];
        L && ($ += L.map((N) => `${N}${B}`).join("")), delete D[T];
      }), E === "母语")
        if (B)
          $ += `母语${B}`;
        else {
          const O = D[E];
          if (O) {
            const { b: T = E ? R : 0, p: J = 0, i: L = 0, g: x = 0 } = O;
            $ += `母语${T + J + L + x}`;
          } else
            $ += `母语${R}`;
        }
    } else {
      const B = D[E];
      let O = 0;
      if (B) {
        const { b: J = E ? R : 0, p: L = 0, i: x = 0, g: M = 0 } = B;
        O = J + L + x + M;
      } else
        O = R;
      $ += `${H}${O}`;
      const T = ea[E];
      T && ($ += T.map((J) => `${J}${O}`).join("")), delete D[E];
    }
  }), `${P}${S}${$}`;
}
const je = {
  limitp: 80,
  limiti: 70
};
function qa() {
  return {
    showingChildSkills: Ja(),
    skillLimits: {
      // TODO 技能上限
      pro: (je == null ? void 0 : je.limitp) || 80,
      interest: (je == null ? void 0 : je.limiti) || 70
    }
  };
}
function Ns(t) {
  return Object.assign(je, t), qa();
}
function Us(t) {
  Object.assign(t, qa());
}
function Bs(t) {
  be(
    () => t.value.attributes,
    () => {
      var s, l;
      let e = "", n = "";
      const { con: r, siz: a, pow: o } = t.value.attributes || {};
      r && a && (e = `${Math.floor((r + a) / 10)}`), o && (n = `${Math.floor(o / 5)}`);
      const i = (l = (s = t.value.deriveAttributes) == null ? void 0 : s.sanity) == null ? void 0 : l.now;
      t.value.deriveAttributes = {
        sanity: {
          start: `${o || ""}`,
          now: i
        },
        hp: {
          start: e
        },
        mp: {
          start: n
        }
      };
    },
    { deep: !0 }
  );
}
const js = [
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
  }
], zs = [
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
  ]
], Zn = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六"
}, Ls = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
};
function Ws(t, e) {
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
const Vt = Ws(js, zs);
function Ka(t, e) {
  const n = {
    text: "",
    point: 0
  }, r = Vt.jobs.get(t || "");
  if (!r) return n;
  const a = [];
  return r.point.forEach((o) => {
    const i = [], s = [];
    o.forEach(([u, p]) => {
      i.push(`${Ls[u]}×${p}`), e && s.push((e[u] || 0) * p);
    });
    let l = i.join(" 或 ");
    i.length > 1 && (l = `(${l})`), a.push(l), n.point += Math.max(...s);
  }), n.text = a.join(" + "), n;
}
function Gs(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function Qa(t) {
  const { jobs: e } = Vt, n = Gs(), r = e.get(t), a = /* @__PURE__ */ new Map();
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
    ([i, s]) => `${i}${s ? `(任${Zn[`${s}`]})` : ""}`
  ).join("、"), n.multiSkillTexts = Hs(n), n;
}
function Hs(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const a = e.findIndex(([o]) => o.every((s, l) => {
      const u = r[l];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    a === -1 ? e.push([r, 1, Zn[`${r.length}`]]) : e[a][1] += 1;
  }), e.map((r) => {
    const o = r[0].map((i) => {
      let s = i;
      return typeof i != "string" && (s = `${i.name}:${i.childName || "任一"}`, i.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${Zn[`${r[1]}`]}(${o})`;
  });
}
function Js(t, e) {
  const { jobs: n } = Vt, { viewData: r, pageData: a } = e, o = te(() => Qa(t.value.job));
  return be(
    () => t.value.job,
    () => {
      const i = n.get(t.value.job);
      if (!i || a.importing) return;
      r.jobSkills = [...i.skills], Ja(r), t.value.proSkills = [];
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
          let v = -1;
          if (p)
            v = f.findIndex((y) => y === p), v === -1 && (v = f.findIndex((y) => !y), f[v] = p);
          else {
            const y = s[d] || 0;
            let _ = y;
            v = f.findIndex((g) => g ? !1 : _-- === 0), s[d] = y + 1;
          }
          if (v === -1) return;
          t.value.proSkills.push([d, p, v]);
        }
      }), delete r.jobSkills;
    }
  ), o;
}
function sn(t) {
  return vo() ? (go(t), !0) : !1;
}
function St(t) {
  return typeof t == "function" ? t() : k(t);
}
const Xn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qs = Object.prototype.toString, Ks = (t) => qs.call(t) === "[object Object]", Qs = () => {
};
function Zs(t, e) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
const Za = (t) => t();
function Xs(t = Za) {
  const e = z(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: wa(e), pause: n, resume: r, eventFilter: a };
}
function Ys(t) {
  return ho();
}
function eu(t, e, n = {}) {
  const {
    eventFilter: r = Za,
    ...a
  } = n;
  return be(
    t,
    Zs(
      r,
      e
    ),
    a
  );
}
function tu(t, e, n = {}) {
  const {
    eventFilter: r,
    ...a
  } = n, { eventFilter: o, pause: i, resume: s, isActive: l } = Xs(r);
  return { stop: eu(
    t,
    e,
    {
      ...a,
      eventFilter: o
    }
  ), pause: i, resume: s, isActive: l };
}
function nu(t, e = !0, n) {
  Ys() ? _a(t, n) : e ? t() : ht(t);
}
function ru(t, e = 1e3, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: a = !1
  } = n;
  let o = null;
  const i = z(!1);
  function s() {
    o && (clearInterval(o), o = null);
  }
  function l() {
    i.value = !1, s();
  }
  function u() {
    const p = St(e);
    p <= 0 || (i.value = !0, a && t(), s(), o = setInterval(t, p));
  }
  if (r && Xn && u(), bo(e) || typeof e == "function") {
    const p = be(e, () => {
      i.value && Xn && u();
    });
    sn(p);
  }
  return sn(l), {
    isActive: i,
    pause: l,
    resume: u
  };
}
function au(t) {
  var e;
  const n = St(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const un = Xn ? window : void 0;
function ta(...t) {
  let e, n, r, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, a] = t, e = un) : [e, n, r, a] = t, !e)
    return Qs;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((p) => p()), o.length = 0;
  }, s = (p, d, c, f) => (p.addEventListener(d, c, f), () => p.removeEventListener(d, c, f)), l = be(
    () => [au(e), St(a)],
    ([p, d]) => {
      if (i(), !p)
        return;
      const c = Ks(d) ? { ...d } : d;
      o.push(
        ...n.flatMap((f) => r.map((v) => s(p, f, v, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), i();
  };
  return sn(u), u;
}
function ou(t, e = {}) {
  const {
    immediate: n = !0,
    fpsLimit: r = void 0,
    window: a = un
  } = e, o = z(!1), i = r ? 1e3 / r : null;
  let s = 0, l = null;
  function u(c) {
    if (!o.value || !a)
      return;
    s || (s = c);
    const f = c - s;
    if (i && f < i) {
      l = a.requestAnimationFrame(u);
      return;
    }
    s = c, t({ delta: f, timestamp: c }), l = a.requestAnimationFrame(u);
  }
  function p() {
    !o.value && a && (o.value = !0, s = 0, l = a.requestAnimationFrame(u));
  }
  function d() {
    o.value = !1, l != null && a && (a.cancelAnimationFrame(l), l = null);
  }
  return n && p(), sn(d), {
    isActive: wa(o),
    pause: d,
    resume: p
  };
}
const Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = "__vueuse_ssr_handlers__", iu = /* @__PURE__ */ lu();
function lu() {
  return Gt in Wt || (Wt[Gt] = Wt[Gt] || {}), Wt[Gt];
}
function su(t, e) {
  return iu[t] || e;
}
function uu(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const cu = {
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
}, na = "vueuse-storage";
function ra(t, e, n, r = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: p,
    window: d = un,
    eventFilter: c,
    onError: f = (R) => {
      console.error(R);
    },
    initOnMounted: v
  } = r, y = (p ? _o : z)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = su("getDefaultStorage", () => {
        var R;
        return (R = un) == null ? void 0 : R.localStorage;
      })();
    } catch (R) {
      f(R);
    }
  if (!n)
    return y;
  const _ = St(e), g = uu(_), P = (a = r.serializer) != null ? a : cu[g], { pause: S, resume: $ } = tu(
    y,
    () => A(y.value),
    { flush: o, deep: i, eventFilter: c }
  );
  d && s && nu(() => {
    ta(d, "storage", I), ta(d, na, X), v && I();
  }), v || I();
  function D(R, H) {
    d && d.dispatchEvent(new CustomEvent(na, {
      detail: {
        key: t,
        oldValue: R,
        newValue: H,
        storageArea: n
      }
    }));
  }
  function A(R) {
    try {
      const H = n.getItem(t);
      if (R == null)
        D(H, null), n.removeItem(t);
      else {
        const j = P.write(R);
        H !== j && (n.setItem(t, j), D(H, j));
      }
    } catch (H) {
      f(H);
    }
  }
  function E(R) {
    const H = R ? R.newValue : n.getItem(t);
    if (H == null)
      return l && _ != null && n.setItem(t, P.write(_)), _;
    if (!R && u) {
      const j = P.read(H);
      return typeof u == "function" ? u(j, _) : g === "object" && !Array.isArray(j) ? { ..._, ...j } : j;
    } else return typeof H != "string" ? H : P.read(H);
  }
  function I(R) {
    if (!(R && R.storageArea !== n)) {
      if (R && R.key == null) {
        y.value = _;
        return;
      }
      if (!(R && R.key !== t)) {
        S();
        try {
          (R == null ? void 0 : R.newValue) !== P.write(y.value) && (y.value = E(R));
        } catch (H) {
          f(H);
        } finally {
          R ? ht($) : $();
        }
      }
    }
  }
  function X(R) {
    I(R.detail);
  }
  return y;
}
function pu(t = {}) {
  const {
    controls: e = !1,
    interval: n = "requestAnimationFrame"
  } = t, r = z(/* @__PURE__ */ new Date()), a = () => r.value = /* @__PURE__ */ new Date(), o = n === "requestAnimationFrame" ? ou(a, { immediate: !0 }) : ru(a, n, { immediate: !0 });
  return e ? {
    now: r,
    ...o
  } : r;
}
const du = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
], fu = {
  justNow: "just now",
  past: (t) => t.match(/\d/) ? `${t} ago` : t,
  future: (t) => t.match(/\d/) ? `in ${t}` : t,
  month: (t, e) => t === 1 ? e ? "last month" : "next month" : `${t} month${t > 1 ? "s" : ""}`,
  year: (t, e) => t === 1 ? e ? "last year" : "next year" : `${t} year${t > 1 ? "s" : ""}`,
  day: (t, e) => t === 1 ? e ? "yesterday" : "tomorrow" : `${t} day${t > 1 ? "s" : ""}`,
  week: (t, e) => t === 1 ? e ? "last week" : "next week" : `${t} week${t > 1 ? "s" : ""}`,
  hour: (t) => `${t} hour${t > 1 ? "s" : ""}`,
  minute: (t) => `${t} minute${t > 1 ? "s" : ""}`,
  second: (t) => `${t} second${t > 1 ? "s" : ""}`,
  invalid: ""
};
function mu(t) {
  return t.toISOString().slice(0, 10);
}
function yu(t, e = {}) {
  const {
    controls: n = !1,
    updateInterval: r = 3e4
  } = e, { now: a, ...o } = pu({ interval: r, controls: !0 }), i = te(() => hu(new Date(St(t)), e, St(a)));
  return n ? {
    timeAgo: i,
    ...o
  } : i;
}
function hu(t, e = {}, n = Date.now()) {
  var r;
  const {
    max: a,
    messages: o = fu,
    fullDateFormatter: i = mu,
    units: s = du,
    showSecond: l = !1,
    rounding: u = "round"
  } = e, p = typeof u == "number" ? (_) => +_.toFixed(u) : Math[u], d = +n - +t, c = Math.abs(d);
  function f(_, g) {
    return p(Math.abs(_) / g.value);
  }
  function v(_, g) {
    const P = f(_, g), S = _ > 0, $ = y(g.name, P, S);
    return y(S ? "past" : "future", $, S);
  }
  function y(_, g, P) {
    const S = o[_];
    return typeof S == "function" ? S(g, P) : S.replace("{0}", g.toString());
  }
  if (c < 6e4 && !l)
    return o.justNow;
  if (typeof a == "number" && c > a)
    return i(new Date(t));
  if (typeof a == "string") {
    const _ = (r = s.find((g) => g.name === a)) == null ? void 0 : r.max;
    if (_ && c > _)
      return i(new Date(t));
  }
  for (const [_, g] of s.entries()) {
    if (f(d, g) <= 0 && s[_ - 1])
      return v(d, s[_ - 1]);
    if (c < g.max)
      return v(d, g);
  }
  return o.invalid;
}
var Xa = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(Xa || {}), Ya = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(Ya || {});
function vu(t) {
  const {
    namespace: e = Xa.SoxFE,
    app: n,
    versionChecker: r = (P, S) => (S.value = null, -1),
    defaults: a = {}
  } = t, o = window.localStorage, i = `${e}#${n}`, s = `${e}##versionChecker`, l = ra(i, a, o, {
    mergeDefaults: !0
  }), u = ra(s, {}, o), p = u.value[i], d = r(p, l);
  u.value[n] = d;
  function c() {
    return l.value;
  }
  function f() {
    return Object.keys(c()).length;
  }
  function v(P) {
    return l.value[P];
  }
  function y(P, S) {
    l.value[P] = S;
  }
  function _(P) {
    delete l.value[P];
  }
  function g() {
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
    getItem: v,
    setItem: y,
    removeItem: _,
    clear: g
  };
}
const gu = vu({
  app: Ya.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function eo() {
  return gu;
}
var gr = { exports: {} };
gr.exports;
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
        var d, c, f = {}, v = {}, y = "", _ = "", g = "", P = 2, S = 3, $ = 2, D = [], A = 0, E = 0, I;
        for (I = 0; I < l.length; I += 1)
          if (y = l.charAt(I), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = S++, v[y] = !0), _ = g + y, Object.prototype.hasOwnProperty.call(f, _))
            g = _;
          else {
            if (Object.prototype.hasOwnProperty.call(v, g)) {
              if (g.charCodeAt(0) < 256) {
                for (d = 0; d < $; d++)
                  A = A << 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++;
                for (c = g.charCodeAt(0), d = 0; d < 8; d++)
                  A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
              } else {
                for (c = 1, d = 0; d < $; d++)
                  A = A << 1 | c, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = 0;
                for (c = g.charCodeAt(0), d = 0; d < 16; d++)
                  A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
              }
              P--, P == 0 && (P = Math.pow(2, $), $++), delete v[g];
            } else
              for (c = f[g], d = 0; d < $; d++)
                A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
            P--, P == 0 && (P = Math.pow(2, $), $++), f[_] = S++, g = String(y);
          }
        if (g !== "") {
          if (Object.prototype.hasOwnProperty.call(v, g)) {
            if (g.charCodeAt(0) < 256) {
              for (d = 0; d < $; d++)
                A = A << 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++;
              for (c = g.charCodeAt(0), d = 0; d < 8; d++)
                A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
            } else {
              for (c = 1, d = 0; d < $; d++)
                A = A << 1 | c, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = 0;
              for (c = g.charCodeAt(0), d = 0; d < 16; d++)
                A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
            }
            P--, P == 0 && (P = Math.pow(2, $), $++), delete v[g];
          } else
            for (c = f[g], d = 0; d < $; d++)
              A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
          P--, P == 0 && (P = Math.pow(2, $), $++);
        }
        for (c = 2, d = 0; d < $; d++)
          A = A << 1 | c & 1, E == u - 1 ? (E = 0, D.push(p(A)), A = 0) : E++, c = c >> 1;
        for (; ; )
          if (A = A << 1, E == u - 1) {
            D.push(p(A));
            break;
          } else E++;
        return D.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, p) {
        var d = [], c = 4, f = 4, v = 3, y = "", _ = [], g, P, S, $, D, A, E, I = { val: p(0), position: u, index: 1 };
        for (g = 0; g < 3; g += 1)
          d[g] = g;
        for (S = 0, D = Math.pow(2, 2), A = 1; A != D; )
          $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
        switch (S) {
          case 0:
            for (S = 0, D = Math.pow(2, 8), A = 1; A != D; )
              $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
            E = n(S);
            break;
          case 1:
            for (S = 0, D = Math.pow(2, 16), A = 1; A != D; )
              $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
            E = n(S);
            break;
          case 2:
            return "";
        }
        for (d[3] = E, P = E, _.push(E); ; ) {
          if (I.index > l)
            return "";
          for (S = 0, D = Math.pow(2, v), A = 1; A != D; )
            $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
          switch (E = S) {
            case 0:
              for (S = 0, D = Math.pow(2, 8), A = 1; A != D; )
                $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
              d[f++] = n(S), E = f - 1, c--;
              break;
            case 1:
              for (S = 0, D = Math.pow(2, 16), A = 1; A != D; )
                $ = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), S |= ($ > 0 ? 1 : 0) * A, A <<= 1;
              d[f++] = n(S), E = f - 1, c--;
              break;
            case 2:
              return _.join("");
          }
          if (c == 0 && (c = Math.pow(2, v), v++), d[E])
            y = d[E];
          else if (E === f)
            y = P + P.charAt(0);
          else
            return null;
          _.push(y), d[f++] = P + y.charAt(0), c--, P = y, c == 0 && (c = Math.pow(2, v), v++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})(gr);
var bu = gr.exports;
const aa = /* @__PURE__ */ nr(bu);
var _u = function() {
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
}, wu = _u, oa = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, ku = "Copy to clipboard: #{key}, Enter";
function Su(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function Au(t, e) {
  var n, r, a, o, i, s, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    a = wu(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(p) {
      if (p.stopPropagation(), e.format)
        if (p.preventDefault(), typeof p.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = oa[e.format] || oa.default;
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
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = Su("message" in e ? e.message : ku), window.prompt(r, t);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var $u = Au;
const to = /* @__PURE__ */ nr($u);
/*! Element Plus Icons Vue v2.3.1 */
var Pu = /* @__PURE__ */ C({
  name: "Bicycle",
  __name: "bicycle",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      m("path", {
        fill: "currentColor",
        d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32"
      }),
      m("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z"
      }),
      m("path", {
        fill: "currentColor",
        d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
      })
    ]));
  }
}), Eu = Pu, xu = /* @__PURE__ */ C({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Iu = xu, Du = /* @__PURE__ */ C({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Ru = Du, Fu = /* @__PURE__ */ C({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), On = Fu, Cu = /* @__PURE__ */ C({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Ou = Cu, Mu = /* @__PURE__ */ C({
  name: "Lollipop",
  __name: "lollipop",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696m105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
      })
    ]));
  }
}), Tu = Mu, Vu = /* @__PURE__ */ C({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Nu = Vu, Uu = /* @__PURE__ */ C({
  name: "Mug",
  __name: "mug",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64m64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z"
      })
    ]));
  }
}), Bu = Uu, ju = /* @__PURE__ */ C({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (h(), w("svg", {
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
}), zu = ju, Lu = /* @__PURE__ */ C({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Wu = Lu, Gu = /* @__PURE__ */ C({
  name: "Scissor",
  __name: "scissor",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248"
      })
    ]));
  }
}), Hu = Gu, Ju = /* @__PURE__ */ C({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), qu = Ju, Ku = /* @__PURE__ */ C({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (h(), w("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), no = Ku;
const Qu = /* @__PURE__ */ C({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (h(), Z(ka(e.tag), {
      class: ee(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: V(() => [
        vt(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), U = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, a] of e)
    n[r] = a;
  return n;
}, Zu = /* @__PURE__ */ U(Qu, [["__scopeId", "data-v-b309c855"]]), Xu = /* @__PURE__ */ C({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = oe("el-icon");
      return h(), Z(Zu, {
        class: "control-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("click", a))
      }, {
        default: V(() => [
          b(r, { size: "0.9em" }, {
            default: V(() => [
              (h(), Z(ka(e.icon)))
            ]),
            _: 1
          }),
          se(" " + F(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), Se = /* @__PURE__ */ U(Xu, [["__scopeId", "data-v-7ceba4b3"]]), At = /* @__PURE__ */ C({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = oe("el-dialog");
      return h(), Z(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        title: e.$props.title,
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => e.$emit("update:modelValue", a))
      }, {
        default: V(() => [
          vt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["title", "modelValue"]);
    };
  }
});
function Yu(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function ec(t, e = "image") {
  Yu(t, e);
}
const tc = { class: "downloader-item" }, nc = { class: "downloader-item-preview" }, rc = ["src"], ac = {
  key: 1,
  class: "downloader-item-file"
}, oc = { key: 2 }, ic = { class: "downloader-item-info" }, lc = { class: "downloader-item-title" }, sc = { class: "preview-full-image-container" }, uc = ["src"], cc = /* @__PURE__ */ C({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = z(!1), o = te(() => {
      if (!n.download) return "";
      const { name: l, type: u } = n.download;
      return `${l}${n.title}.${u}`;
    });
    function i() {
      if (!n.download) return;
      const { url: l } = n.download;
      ec(l, o.value), r("downloaded");
    }
    function s() {
      a.value = !0;
    }
    return (l, u) => {
      var p;
      return h(), w("div", tc, [
        m("div", nc, [
          l.previewImage ? (h(), w("img", {
            key: 0,
            class: "downloader-item-image",
            src: l.previewImage,
            onClick: s
          }, null, 8, rc)) : ((p = l.download) == null ? void 0 : p.type) === "txt" ? (h(), w("div", ac, F(o.value), 1)) : (h(), w("div", oc, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        m("div", ic, [
          m("div", lc, F(l.title), 1),
          m("div", {
            class: "downloader-item-button",
            onClick: i
          }, " 下载 "),
          l.refreshable ? (h(), w("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (d) => l.$emit("refresh"))
          }, " 重新生成 ")) : W("", !0)
        ]),
        b(At, {
          modelValue: a.value,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d),
          title: "预览大图"
        }, {
          default: V(() => [
            m("div", sc, [
              l.previewImage ? (h(), w("img", {
                key: 0,
                class: "preview-full-image",
                src: l.previewImage
              }, null, 8, uc)) : W("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Mn = /* @__PURE__ */ U(cc, [["__scopeId", "data-v-712d81a0"]]);
function ie() {
  return Ft("pc");
}
function Re() {
  return Ft("pageData");
}
function yn() {
  return Ft("viewData");
}
function ro() {
  return Ft("suggestion");
}
const pc = { class: "label" }, dc = { class: "label-title" }, fc = {
  key: 0,
  class: "label-hint"
}, mc = ["placeholder", "readonly", "value"], yc = /* @__PURE__ */ C({
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
    const e = t, n = Re(), r = De({
      width: `${e.char}em`
    });
    return (a, o) => {
      var i, s;
      return h(), w("div", {
        class: ee(["writable-row", {
          "writable-row-with-hint": !!a.hint,
          "printing-image": (i = k(n)) == null ? void 0 : i.printing
        }])
      }, [
        m("div", pc, [
          m("div", dc, F(a.label), 1),
          a.hint ? (h(), w("div", fc, F(a.hint), 1)) : W("", !0)
        ]),
        m("input", {
          type: "text",
          class: "input",
          style: jn(r),
          placeholder: (s = k(n)) != null && s.printing ? "" : a.placeholder,
          readonly: a.readonly,
          value: a.modelValue,
          onInput: o[0] || (o[0] = (l) => a.$emit("update:modelValue", l.target.value)),
          onFocus: o[1] || (o[1] = (l) => a.$emit("focus")),
          onBlur: o[2] || (o[2] = (l) => a.$emit("blur"))
        }, null, 44, mc)
      ], 2);
    };
  }
}), ae = /* @__PURE__ */ U(yc, [["__scopeId", "data-v-1b667523"]]);
function Xe(t, e = 1, n = 0) {
  return Array.from({ length: e }).reduce((r) => {
    const a = Math.floor(Math.random() * t) + 1;
    return r + a;
  }, n);
}
function ze(t, e = 1) {
  if (e < 1) return t;
  let n = t;
  return Xe(100) > t && (n += Xe(10)), ze(n, e - 1);
}
function ao(t) {
  const e = Math.random(), n = Object.values(t).reduce((a, o) => a + o, 0);
  let r = 0;
  for (const a in t)
    if (r += t[a] / n, e < r)
      return a;
  return Object.keys(t)[0];
}
function Me(t) {
  return t[Math.floor(Math.random() * t.length)];
}
const hc = ["str", "dex", "con", "app", "pow"], vc = ["siz", "edu", "int"], gc = ["luc"];
function Yn() {
  const t = {};
  return hc.forEach((e) => {
    t[e] = Xe(6, 3) * 5;
  }), vc.forEach((e) => {
    t[e] = Xe(6, 2, 6) * 5;
  }), gc.forEach((e) => {
    t[e] = Xe(6, 3) * 5;
  }), t;
}
function bc(t, e) {
  let n = Et(t);
  return e < 15 || (e < 20 ? (n = Le(n, ["str", "siz"], 5), n.luc = Math.max(n.luc, Xe(6, 3) * 5)) : e < 40 ? n.edu = ze(n.edu) : e < 50 ? (n = Le(n, ["str", "con", "dex"], 5), n.app = n.app - 5, n.edu = ze(n.edu, 2)) : e < 60 ? (n = Le(n, ["str", "con", "dex"], 10), n.app = n.app - 10, n.edu = ze(n.edu, 3)) : e < 70 ? (n = Le(n, ["str", "con", "dex"], 20), n.app = n.app - 15, n.edu = ze(n.edu, 4)) : e < 80 ? (n = Le(n, ["str", "con", "dex"], 40), n.app = n.app - 20, n.edu = ze(n.edu, 4)) : e < 90 && (n = Le(n, ["str", "con", "dex"], 80), n.app = n.app - 25, n.edu = ze(n.edu, 4))), n.app = Math.max(n.app, 5), n.edu = Math.min(n.edu, 99), n;
}
function Rt(t) {
  const { str: e, con: n, dex: r, app: a, pow: o, siz: i, edu: s, int: l } = t;
  return [e, n, r, a, o, i, s, l].reduce((p, d) => p + d, 0);
}
function Tn(t) {
  const { luc: e } = t;
  return Rt(t) + e;
}
function Et(t) {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    siz: 0,
    edu: 0,
    int: 0,
    luc: 0,
    ...t
  };
}
function Le(t, e, n) {
  const r = { ...t };
  if (e.reduce((i, s) => i + r[s], 0) < n + e.length * 5)
    return e.forEach((i) => r[i] = 5), r;
  let o = n;
  return e.forEach((i, s) => {
    if (s === e.length - 1) {
      if (r[i] - o < 5)
        return Le(r, e, o);
      r[i] = r[i] - o;
    } else {
      let l = Xe(o + 1) - 1;
      r[i] - l < 5 && (l = r[i] - 5), o = o - l, r[i] = r[i] - l;
    }
  }), r;
}
const tt = (t) => ($e("data-v-5ee6e6e6"), t = t(), Pe(), t), _c = { class: "modal-body" }, wc = { class: "method-section" }, kc = { class: "method-section-header" }, Sc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "枫笛式", -1)), Ac = { class: "header-action" }, $c = { class: "method-section-content" }, Pc = { class: "kaede-desc-row" }, Ec = { class: "kaede-desc-col" }, xc = {
  key: 0,
  class: "kaede-value-column"
}, Ic = { class: "kaede-desc-col" }, Dc = {
  key: 0,
  class: "kaede-value-column"
}, Rc = {
  key: 0,
  class: "column-section-content"
}, Fc = { class: "column-section-content-column" }, Cc = { class: "kaede-choice-row-label" }, Oc = { class: "column-section-content-column" }, Mc = { class: "kaede-choice-row-label" }, Tc = { class: "column-section-content-column-actions" }, Vc = { class: "method-section" }, Nc = { class: "method-section-header" }, Uc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "天命式", -1)), Bc = { class: "header-action" }, jc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", { class: "header-action-label" }, "组数", -1)), zc = { class: "method-section-content" }, Lc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", null, "点击“生成”后，点击数据组卡片使用", -1)), Wc = ["onClick"], Gc = { class: "action-roll-result-item action-roll-result-item-sum" }, Hc = { class: "method-section" }, Jc = { class: "method-section-header" }, qc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "购点式", -1)), Kc = { class: "header-action" }, Qc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", { class: "header-action-label" }, "总点数", -1)), Zc = { class: "method-section-content" }, Xc = /* @__PURE__ */ tt(() => /* @__PURE__ */ m("div", null, "点击“购点”，填写，点击“应用”", -1)), Yc = {
  key: 0,
  class: "column-section-content"
}, ep = { class: "column-section-content-column" }, tp = { class: "column-section-content-column" }, np = { class: "column-section-content-column-actions" }, rp = /* @__PURE__ */ C({
  __name: "BuyPointsModal",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, r = ie();
    function a(j) {
      r != null && r.value && (Object.entries(j).forEach(([B, O]) => {
        r.value.attributes[B] = O || void 0;
      }), o());
    }
    function o() {
      n("close"), I();
    }
    const i = z(Et({})), s = z(!1), l = z(0), u = z({});
    function p() {
      I(), i.value = Yn(), u.value.luc = "luc", s.value = !0, l.value++;
    }
    function d() {
      if (Object.values(u.value).filter(
        (O) => O
      ).length < 9) {
        le.error("请完成所有选择");
        return;
      }
      const B = Et({});
      Object.entries(u.value).forEach(([O, T]) => {
        T && (B[O] = i.value[T]);
      }), a(B);
    }
    function c(j) {
      return Object.values(u.value).some(
        (B) => B === j
      );
    }
    const f = z(5), v = z(0), y = z([]);
    function _() {
      I(), y.value = Array.from(
        { length: f.value },
        () => Yn()
      ), v.value++;
    }
    function g(j) {
      a(j);
    }
    const P = z(460), S = z(!1), $ = z(Et({})), D = te(() => P.value - Tn($.value));
    function A() {
      I(), S.value = !0, $.value = Et({});
    }
    function E() {
      a($.value);
    }
    function I() {
      s.value = !1, y.value = [], S.value = !1;
    }
    const X = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], R = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" }
    ], H = [{ key: "luc", label: "幸运", hint: "Luck" }];
    return (j, B) => {
      const O = oe("el-button"), T = oe("el-option"), J = oe("el-select"), L = oe("el-input");
      return h(), Z(At, {
        title: "花式加点",
        modelValue: j.isOpen,
        "onUpdate:modelValue": o
      }, {
        default: V(() => [
          m("div", _c, [
            m("div", wc, [
              m("div", kc, [
                Sc,
                m("div", Ac, [
                  b(O, {
                    size: "small",
                    type: "default",
                    onClick: p
                  }, {
                    default: V(() => [
                      se(" 生成 "),
                      l.value ? (h(), w(G, { key: 0 }, [
                        se(" (已生成 " + F(l.value) + " 次) ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", $c, [
                m("div", Pc, [
                  m("div", Ec, [
                    se(" 分配 5组 3D6×5 到左侧 "),
                    s.value ? (h(), w("span", xc, [
                      se(" · "),
                      (h(), w(G, null, Y(X, (x) => m("span", {
                        key: x.key
                      }, F(i.value[x.key]), 1)), 64))
                    ])) : W("", !0)
                  ]),
                  m("div", Ic, [
                    se(" 分配 3组 (2D6+6)×5 到右侧 "),
                    s.value ? (h(), w("span", Dc, [
                      se(" · "),
                      (h(), w(G, null, Y(R, (x) => m("span", {
                        key: x.key
                      }, F(i.value[x.key]), 1)), 64))
                    ])) : W("", !0)
                  ])
                ]),
                s.value ? (h(), w("div", Rc, [
                  m("div", Fc, [
                    (h(), w(G, null, Y(X, (x) => m("div", {
                      key: x.key,
                      class: "kaede-choice-row"
                    }, [
                      m("div", Cc, F(x.label), 1),
                      b(J, {
                        modelValue: u.value[x.key],
                        "onUpdate:modelValue": (M) => u.value[x.key] = M,
                        placeholder: "请选择",
                        size: "small",
                        clearable: ""
                      }, {
                        default: V(() => [
                          (h(), w(G, null, Y(X, (M) => b(T, {
                            key: M.key,
                            label: i.value[M.key],
                            value: M.key,
                            disabled: c(M.key)
                          }, null, 8, ["label", "value", "disabled"])), 64))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                    ])), 64))
                  ]),
                  m("div", Oc, [
                    (h(), w(G, null, Y(R, (x) => m("div", {
                      key: x.key,
                      class: "kaede-choice-row"
                    }, [
                      m("div", Mc, F(x.label), 1),
                      b(J, {
                        modelValue: u.value[x.key],
                        "onUpdate:modelValue": (M) => u.value[x.key] = M,
                        placeholder: "请选择",
                        size: "small",
                        clearable: ""
                      }, {
                        default: V(() => [
                          (h(), w(G, null, Y(R, (M) => b(T, {
                            key: M.key,
                            label: i.value[M.key],
                            value: M.key,
                            disabled: c(M.key)
                          }, null, 8, ["label", "value", "disabled"])), 64))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                    ])), 64)),
                    m("div", null, [
                      m("span", null, "总点数 " + F(k(Rt)(i.value)), 1),
                      m("span", null, "(" + F(k(Tn)(i.value)) + ")", 1)
                    ]),
                    m("div", Tc, [
                      b(O, {
                        size: "small",
                        type: "default",
                        onClick: d
                      }, {
                        default: V(() => [
                          se(" 应用 (幸运 " + F(i.value.luc) + ") ", 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])) : W("", !0)
              ])
            ]),
            m("div", Vc, [
              m("div", Nc, [
                Uc,
                m("div", Bc, [
                  jc,
                  b(L, {
                    size: "small",
                    type: "number",
                    min: 1,
                    max: 10,
                    modelValue: f.value,
                    "onUpdate:modelValue": B[0] || (B[0] = (x) => f.value = x)
                  }, null, 8, ["modelValue"]),
                  b(O, {
                    size: "small",
                    type: "default",
                    onClick: _
                  }, {
                    default: V(() => [
                      se(" 生成 "),
                      v.value ? (h(), w(G, { key: 0 }, [
                        se(" (已生成 " + F(v.value) + " 次) ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", zc, [
                Lc,
                (h(!0), w(G, null, Y(y.value, (x, M) => (h(), w("div", {
                  key: M,
                  class: "action-roll-result",
                  onClick: (N) => g(x)
                }, [
                  (h(!0), w(G, null, Y([...X, ...R, ...H], (N) => (h(), w("div", {
                    key: N.key,
                    class: "action-roll-result-item"
                  }, F(N.label) + " " + F(x[N.key]), 1))), 128)),
                  m("div", Gc, " 总点数 " + F(k(Rt)(x)) + " / 含运 " + F(k(Tn)(x)), 1)
                ], 8, Wc))), 128))
              ])
            ]),
            m("div", Hc, [
              m("div", Jc, [
                qc,
                m("div", Kc, [
                  Qc,
                  b(L, {
                    size: "small",
                    type: "number",
                    min: 0,
                    max: 720,
                    modelValue: P.value,
                    "onUpdate:modelValue": B[1] || (B[1] = (x) => P.value = x)
                  }, null, 8, ["modelValue"]),
                  b(O, {
                    size: "small",
                    type: "default",
                    onClick: A
                  }, {
                    default: V(() => [
                      se(" 购点 "),
                      S.value ? (h(), w(G, { key: 0 }, [
                        se(" (剩余 " + F(D.value) + ") ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", Zc, [
                Xc,
                S.value ? (h(), w("div", Yc, [
                  m("div", ep, [
                    (h(), w(G, null, Y(X, (x) => b(ae, {
                      key: x.key,
                      label: x.label,
                      hint: x.hint,
                      modelValue: `${$.value[x.key] ?? ""}`,
                      "onUpdate:modelValue": (M) => $.value[x.key] = Number(M)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64))
                  ]),
                  m("div", tp, [
                    (h(), w(G, null, Y(R, (x) => b(ae, {
                      key: x.key,
                      label: x.label,
                      hint: x.hint,
                      modelValue: `${$.value[x.key] ?? ""}`,
                      "onUpdate:modelValue": (M) => $.value[x.key] = Number(M)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                    (h(), w(G, null, Y(H, (x) => b(ae, {
                      key: x.key,
                      label: x.label,
                      hint: x.hint,
                      modelValue: `${$.value[x.key] || ""}`,
                      placeholder: "不含运请忽略",
                      "onUpdate:modelValue": (M) => $.value[x.key] = Number(M)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                    m("div", np, [
                      b(O, {
                        size: "small",
                        type: "default",
                        onClick: E
                      }, {
                        default: V(() => [
                          se(" 应用 ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])) : W("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ap = /* @__PURE__ */ U(rp, [["__scopeId", "data-v-5ee6e6e6"]]), op = /* @__PURE__ */ C({
  __name: "BuyPointsButton",
  setup(t) {
    const e = z(!1);
    function n() {
      e.value = !0;
    }
    return (r, a) => (h(), w(G, null, [
      b(Se, {
        label: "属性点",
        icon: k(Eu),
        onClick: n
      }, null, 8, ["icon"]),
      b(ap, {
        isOpen: e.value,
        onClose: a[0] || (a[0] = (o) => e.value = !1)
      }, null, 8, ["isOpen"])
    ], 64));
  }
}), ip = { class: "jobs-container" }, lp = { class: "job-card-header" }, sp = ["onClick"], up = { class: "job-card-row" }, cp = { key: 0 }, pp = { class: "job-card-row" }, dp = /* @__PURE__ */ C({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const { jobGroups: e, jobs: n } = Vt, r = ie(), a = z([]), o = te(() => e.map((s) => ({
      name: s.name,
      items: s.jobs.map((l) => {
        const u = n.get(l.name), p = Qa(u.name), d = p.multiSkillTexts.map((v) => `${v}、`).join("") + p.text, { point: c, text: f } = Ka(
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
      const u = oe("el-icon"), p = oe("el-collapse-item"), d = oe("el-collapse");
      return h(), w("div", null, [
        b(d, {
          class: "job-list",
          modelValue: a.value,
          "onUpdate:modelValue": l[0] || (l[0] = (c) => a.value = c)
        }, {
          default: V(() => [
            (h(!0), w(G, null, Y(o.value, (c) => (h(), Z(p, {
              key: c.name,
              title: c.name,
              name: c.name
            }, {
              default: V(() => [
                m("div", ip, [
                  (h(!0), w(G, null, Y(c.items, (f) => (h(), w("div", {
                    key: f.name,
                    class: "job-card"
                  }, [
                    m("div", lp, [
                      m("span", null, F(f.name), 1),
                      m("span", null, "信用评级：" + F(f.wealth[0]) + "~" + F(f.wealth[1]), 1),
                      m("a", {
                        class: "job-card-action-use",
                        onClick: () => i(f.name)
                      }, [
                        b(u, { size: "0.9em" }, {
                          default: V(() => [
                            b(k(no))
                          ]),
                          _: 1
                        }),
                        se(" 使用 ")
                      ], 8, sp)
                    ]),
                    m("div", up, [
                      m("span", null, "职业点数：" + F(f.pointText), 1),
                      f.pointValue ? (h(), w("span", cp, " (当前结果: " + F(f.pointValue) + ") ", 1)) : W("", !0)
                    ]),
                    m("div", pp, "本职技能：" + F(f.skillText), 1)
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
}), fp = /* @__PURE__ */ U(dp, [["__scopeId", "data-v-a6021bb3"]]), mp = { class: "weapons-container" }, yp = { class: "weapon-card-header" }, hp = { class: "weapon-card-row" }, vp = { class: "weapon-card-row" }, gp = { class: "weapon-card-row weapon-card-row-4" }, bp = ["onClick"], _p = /* @__PURE__ */ C({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = $o, n = ie(), r = z([]), a = te(() => {
      const c = new Map(
        hr.map((f) => [
          f.name,
          {
            ...f,
            range: `${Number(f.range)}` === f.range ? `${f.range}m` : f.range
          }
        ])
      );
      return Ha.map(([f, v]) => ({
        name: v,
        groupKey: f,
        items: Ga[f].map((y) => c.get(y))
      }));
    });
    function o(c) {
      return `${Number(c)}` === c ? `${c}m` : c || "N/A";
    }
    const i = z([]), s = z(-1), l = z(!1);
    function u(c) {
      const f = c.target, v = i.value.findIndex((y) => y.el === f);
      v !== -1 && (s.value = v, l.value = !0);
    }
    function p() {
      l.value = !1;
    }
    function d(c, f) {
      !n || !f || (n.value.weapons[c] = f);
    }
    return (c, f) => {
      var P;
      const v = oe("el-icon"), y = oe("el-collapse-item"), _ = oe("el-collapse"), g = oe("el-popover");
      return h(), w("div", null, [
        b(_, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (S) => r.value = S)
        }, {
          default: V(() => [
            (h(!0), w(G, null, Y(a.value, (S) => (h(), Z(y, {
              key: S.groupKey,
              title: S.name,
              name: S.groupKey
            }, {
              default: V(() => [
                m("div", mp, [
                  (h(!0), w(G, null, Y(S.items, ($) => (h(), w("div", {
                    key: $.name,
                    class: "weapon-card"
                  }, [
                    m("div", yp, [
                      m("span", null, "【" + F($.name) + "】" + F($.skill), 1),
                      Ye((h(), w("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: (D) => {
                          i.value.push({
                            el: D,
                            weapon: $
                          });
                        },
                        onClick: u
                      }, [
                        b(v, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: V(() => [
                            b(k(no))
                          ]),
                          _: 1
                        }),
                        se(" 使用 ")
                      ])), [
                        [k(e), p]
                      ])
                    ]),
                    m("div", hp, [
                      m("span", null, "伤害：" + F($.dam), 1),
                      m("span", null, "次数：" + F($.round || "N/A"), 1),
                      m("span", null, F($.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    m("div", vp, [
                      m("span", null, "射程：" + F(o($.range)), 1),
                      m("span", null, "装弹量：" + F($.num || "N/A"), 1),
                      m("span", null, "故障率：" + F($.err || "N/A"), 1)
                    ]),
                    m("div", gp, [
                      m("span", null, "年代：" + F($.time), 1),
                      m("span", null, "价格：" + F($.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        b(g, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: l.value,
          width: 200,
          "virtual-ref": (P = i.value[s.value]) == null ? void 0 : P.el
        }, {
          default: V(() => [
            (h(), w(G, null, Y(5, (S) => m("a", {
              key: S,
              class: "job-card-action",
              onClick: ($) => {
                var D;
                return d(S - 1, (D = i.value[s.value]) == null ? void 0 : D.weapon);
              }
            }, F(S), 9, bp)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), wp = /* @__PURE__ */ U(_p, [["__scopeId", "data-v-c2affb32"]]), kp = (t) => ($e("data-v-7841cf7e"), t = t(), Pe(), t), Sp = { class: "modal-body" }, Ap = { class: "group" }, $p = /* @__PURE__ */ kp(() => /* @__PURE__ */ m("div", null, "录卡指令", -1)), Pp = /* @__PURE__ */ C({
  __name: "DiceMaid",
  setup(t) {
    const e = ie(), n = yn(), r = te(
      () => ".st " + (e && n ? Vs(e.value, n) : "")
    ), a = z(!1);
    function o() {
      a.value = !0;
    }
    function i(l) {
      var u;
      (u = l.target) == null || u.select();
    }
    function s() {
      to(r.value), le.success("已复制录卡指令");
    }
    return (l, u) => {
      const p = oe("el-input");
      return h(), w(G, null, [
        b(Se, {
          label: "骰娘相关",
          icon: k(Ru),
          onClick: o
        }, null, 8, ["icon"]),
        b(At, {
          title: "骰娘相关",
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => a.value = d)
        }, {
          default: V(() => [
            m("div", Sp, [
              m("div", Ap, [
                m("div", { class: "label" }, [
                  $p,
                  m("div", null, [
                    m("a", {
                      class: "link",
                      onClick: s
                    }, " 复制 ")
                  ])
                ]),
                b(p, {
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
}), Ep = /* @__PURE__ */ U(Pp, [["__scopeId", "data-v-7841cf7e"]]);
function xp(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), e && (r.href = e), a.href = t, a.href;
}
const Ip = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function Ce(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function cn(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Dp(t) {
  const e = cn(t, "border-left-width"), n = cn(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Rp(t) {
  const e = cn(t, "border-top-width"), n = cn(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function oo(t, e = {}) {
  const n = e.width || Dp(t), r = e.height || Rp(t);
  return { width: n, height: r };
}
function Fp() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const ge = 16384;
function Cp(t) {
  (t.width > ge || t.height > ge) && (t.width > ge && t.height > ge ? t.width > t.height ? (t.height *= ge / t.width, t.width = ge) : (t.width *= ge / t.height, t.height = ge) : t.width > ge ? (t.height *= ge / t.width, t.width = ge) : (t.width *= ge / t.height, t.height = ge));
}
function pn(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Op(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Mp(t, e, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${e}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(t), Op(a);
}
const ve = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || ve(n, e);
};
function Tp(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Vp(t) {
  return Ce(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Np(t, e, n) {
  const r = `.${t}:${e}`, a = n.cssText ? Tp(n) : Vp(n);
  return document.createTextNode(`${r}{${a}}`);
}
function ia(t, e, n) {
  const r = window.getComputedStyle(t, n), a = r.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const o = Ip();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Np(o, n, r)), e.appendChild(i);
}
function Up(t, e) {
  ia(t, e, ":before"), ia(t, e, ":after");
}
const la = "application/font-woff", sa = "image/jpeg", Bp = {
  woff: la,
  woff2: la,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: sa,
  jpeg: sa,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function jp(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function br(t) {
  const e = jp(t).toLowerCase();
  return Bp[e] || "";
}
function zp(t) {
  return t.split(/,/)[1];
}
function er(t) {
  return t.search(/^(data:)/) !== -1;
}
function Lp(t, e) {
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
const Vn = {};
function Wp(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function _r(t, e, n) {
  const r = Wp(t, e, n.includeQueryParams);
  if (Vn[r] != null)
    return Vn[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await io(t, n.fetchRequestInit, ({ res: i, result: s }) => (e || (e = i.headers.get("Content-Type") || ""), zp(s)));
    a = Lp(o, e);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let i = `Failed to fetch resource: ${t}`;
    o && (i = typeof o == "string" ? o : o.message), i && console.warn(i);
  }
  return Vn[r] = a, a;
}
async function Gp(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : pn(e);
}
async function Hp(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), i = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, i == null || i.drawImage(t, 0, 0, o.width, o.height);
    const s = o.toDataURL();
    return pn(s);
  }
  const n = t.poster, r = br(n), a = await _r(n, r, e);
  return pn(a);
}
async function Jp(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await hn(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function qp(t, e) {
  return ve(t, HTMLCanvasElement) ? Gp(t) : ve(t, HTMLVideoElement) ? Hp(t, e) : ve(t, HTMLIFrameElement) ? Jp(t) : t.cloneNode(!1);
}
const Kp = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Qp(t, e, n) {
  var r, a;
  let o = [];
  return Kp(t) && t.assignedNodes ? o = Ce(t.assignedNodes()) : ve(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? o = Ce(t.contentDocument.body.childNodes) : o = Ce(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes), o.length === 0 || ve(t, HTMLVideoElement) || await o.reduce((i, s) => i.then(() => hn(s, n)).then((l) => {
    l && e.appendChild(l);
  }), Promise.resolve()), e;
}
function Zp(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Ce(r).forEach((a) => {
    let o = r.getPropertyValue(a);
    a === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), ve(t, HTMLIFrameElement) && a === "display" && o === "inline" && (o = "block"), a === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), n.setProperty(a, o, r.getPropertyPriority(a));
  });
}
function Xp(t, e) {
  ve(t, HTMLTextAreaElement) && (e.innerHTML = t.value), ve(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function Yp(t, e) {
  if (ve(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((a) => t.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function ed(t, e) {
  return ve(e, Element) && (Zp(t, e), Up(t, e), Xp(t, e), Yp(t, e)), e;
}
async function td(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const s = n[o].getAttribute("xlink:href");
    if (s) {
      const l = t.querySelector(s), u = document.querySelector(s);
      !l && u && !r[s] && (r[s] = await hn(u, e, !0));
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
async function hn(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => qp(r, e)).then((r) => Qp(t, r, e)).then((r) => ed(t, r)).then((r) => td(r, e));
}
const lo = /url\((['"]?)([^'"]+?)\1\)/g, nd = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, rd = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ad(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function od(t) {
  const e = [];
  return t.replace(lo, (n, r, a) => (e.push(a), n)), e.filter((n) => !er(n));
}
async function id(t, e, n, r, a) {
  try {
    const o = n ? xp(e, n) : e, i = br(e);
    let s;
    return a || (s = await _r(o, i, r)), t.replace(ad(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function ld(t, { preferredFontFormat: e }) {
  return e ? t.replace(rd, (n) => {
    for (; ; ) {
      const [r, , a] = nd.exec(n) || [];
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
  const r = ld(t, n);
  return od(r).reduce((o, i) => o.then((s) => id(s, i, e, n)), Promise.resolve(r));
}
async function Ht(t, e, n) {
  var r;
  const a = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (a) {
    const o = await uo(a, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function sd(t, e) {
  await Ht("background", t, e) || await Ht("background-image", t, e), await Ht("mask", t, e) || await Ht("mask-image", t, e);
}
async function ud(t, e) {
  const n = ve(t, HTMLImageElement);
  if (!(n && !er(t.src)) && !(ve(t, SVGImageElement) && !er(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, a = await _r(r, br(r), e);
  await new Promise((o, i) => {
    t.onload = o, t.onerror = i;
    const s = t;
    s.decode && (s.decode = o), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = a) : t.href.baseVal = a;
  });
}
async function cd(t, e) {
  const r = Ce(t.childNodes).map((a) => co(a, e));
  await Promise.all(r).then(() => t);
}
async function co(t, e) {
  ve(t, Element) && (await sd(t, e), await ud(t, e), await cd(t, e));
}
function pd(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), t;
}
const ua = {};
async function ca(t) {
  let e = ua[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, ua[t] = e, e;
}
async function pa(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let s = i.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), io(s, e.fetchRequestInit, ({ result: l }) => (n = n.replace(i, `url(${l})`), [i, l]));
  });
  return Promise.all(o).then(() => n);
}
function da(t) {
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
async function dd(t, e) {
  const n = [], r = [];
  return t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ce(a.cssRules || []).forEach((o, i) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let s = i + 1;
            const l = o.href, u = ca(l).then((p) => pa(p, e)).then((p) => da(p).forEach((d) => {
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
        a.href != null && r.push(ca(a.href).then((s) => pa(s, e)).then((s) => da(s).forEach((l) => {
          i.insertRule(l, a.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ce(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function fd(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => so(e.style.getPropertyValue("src")));
}
async function md(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Ce(t.ownerDocument.styleSheets), r = await dd(n, e);
  return fd(r);
}
async function yd(t, e) {
  const n = await md(t, e);
  return (await Promise.all(n.map((a) => {
    const o = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return uo(a.cssText, o, e);
  }))).join(`
`);
}
async function hd(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await yd(t, e);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function vd(t, e = {}) {
  const { width: n, height: r } = oo(t, e), a = await hn(t, e, !0);
  return await hd(a, e), await co(a, e), pd(a, e), await Mp(a, n, r);
}
async function gd(t, e = {}) {
  const { width: n, height: r } = oo(t, e), a = await vd(t, e), o = await pn(a), i = document.createElement("canvas"), s = i.getContext("2d"), l = e.pixelRatio || Fp(), u = e.canvasWidth || n, p = e.canvasHeight || r;
  return i.width = u * l, i.height = p * l, e.skipAutoScale || Cp(i), i.style.width = `${u}`, i.style.height = `${p}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, i.width, i.height)), s.drawImage(o, 0, 0, i.width, i.height), i;
}
async function bd(t, e = {}) {
  return (await gd(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function fa(t) {
  return t ? await bd(t, {
    canvasWidth: 210 * 8,
    canvasHeight: 297 * 8,
    pixelRatio: 1,
    quality: 0.5,
    skipFonts: !0
  }) : "";
}
async function _d({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    ht(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await fa(t.front)), (e === void 0 || e === "back") && (r.back = await fa(t.back)), n(r);
    });
  });
}
function wd(t) {
  const e = De({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return _d({
      paperEls: t,
      paperKey: r
    }).then((a) => (Object.assign(e, a), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
function kd(t, e) {
  return yu(
    t,
    Object.assign(
      {
        controls: !0,
        messages: {
          justNow: "就在刚刚",
          past: "{0}之前",
          future: "{0}之后",
          invalid: "",
          second: "{0}秒",
          minute: "{0}分钟",
          hour: "{0}小时",
          day: "{0}天",
          week: "{0}周",
          month: "{0}个月",
          year: "{0}年"
        }
      },
      e
    )
  );
}
const Sd = (t) => ($e("data-v-aaa4d0a6"), t = t(), Pe(), t), Ad = { class: "control-section" }, $d = { class: "main-controls" }, Pd = { class: "more-controls" }, Ed = { class: "downloader-body" }, xd = { class: "downloader-items" }, Id = /* @__PURE__ */ Sd(() => /* @__PURE__ */ m("div", { class: "downloader-hints" }, [
  /* @__PURE__ */ m("div", null, "建议 PC 端使用，移动端兼容性较差："),
  /* @__PURE__ */ m("div", null, "· 如果头像未加载，重新生成几次即可")
], -1)), Dd = { class: "in-out-modal-body" }, Rd = { class: "in-out-modal-panel" }, Fd = { class: "in-out-modal-panel" }, Cd = /* @__PURE__ */ C({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, a = n, o = eo(), i = ie(), s = yn(), l = Re(), u = z(""), p = te(() => {
      const O = JSON.stringify({
        pc: i == null ? void 0 : i.value,
        viewData: {
          ...s
          // showingChildSkills,
        }
      });
      return aa.compressToEncodedURIComponent(O);
    }), d = te(() => {
      const O = new Blob([p.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(O);
    }), c = z(!1), f = z(!1), v = z(!1), y = z("features");
    function _() {
      a("switch-paper");
    }
    const { paperImages: g, printPaper: P } = wd(r.paperEls), S = te(() => {
      const { name: O, playerName: T } = (i == null ? void 0 : i.value) || {}, J = "【TRPG赛高】", L = [O, T].filter((x) => x).join("-");
      return `${J}${L}${L ? "-" : ""}`;
    });
    function $(O) {
      if (l) {
        if (l.printing) {
          le.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        l.printing = !0, le.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            P(O).then(() => {
              f.value = !0, l.printing = !1;
            });
          }
        });
      }
    }
    function D() {
      v.value = !v.value;
    }
    function A() {
      if (i != null && i.value) {
        if (!i.value.age || i.value.age === "0") {
          le.error("请先在人物卡中填写年龄");
          return;
        }
        i.value.attributes = bc(i.value.attributes, Number(i.value.age || 0)), le.success("已为您进行年龄修正！");
      }
    }
    function E() {
      !i || !s || (i.value = De(Zt()), Us(s), ht(() => {
        o.removeItem("autoSaved");
      }), le.info("已重置人物卡"), v.value = !1);
    }
    function I() {
      c.value = !0;
    }
    function X() {
      to(p.value), le.success("已复制到剪贴板");
    }
    function R() {
      const O = aa.decompressFromEncodedURIComponent(u.value), T = JSON.parse(O);
      if (l && (l.importing = !0), T && T.viewData && T.pc && s && i)
        try {
          i.value = Zt(T.pc), Object.keys(T.viewData).forEach((J) => {
            const L = J;
            s[L] = T.viewData[L];
          }), le.success("已成功导入"), c.value = !1, v.value = !1;
        } catch {
          le.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        le.error("数据有误，无法导入");
      l && (l.importing = !1);
    }
    function H() {
      l && (l.showTotalSeparation = !l.showTotalSeparation, le.info(
        `已切换成功率显示方式为：${l.showTotalSeparation ? "全面（普通 | 困难 | 极难）" : "极简"}`
      ), v.value = !1);
    }
    async function j() {
      try {
        const O = await navigator.clipboard.readText();
        u.value = O, R();
      } catch {
        le.error("无法读取剪贴板");
      }
    }
    function B() {
      const O = o.getItem("autoSaved");
      if (!O) {
        le.info("没有找到历史记录");
        return;
      }
      const { lastModified: T, pc: J, viewData: L } = O, { timeAgo: x } = kd(T || Date.now());
      let M;
      try {
        M = Ar(G, null, [
          "是否加载您",
          Ar("b", { style: { fontWeight: "bold" } }, x.value),
          "编辑的人物卡",
          J != null && J.name ? `：${J.name}` : ""
        ]);
      } catch {
        le.error("加载历史记录失败");
        return;
      }
      Po.confirm(M, "检测到编辑过的人物卡").then(() => {
        !l || !i || !s || (l.importing = !0, i.value = Zt(J), L && Object.keys(L).forEach((N) => {
          const ne = N;
          s[ne] = L[ne];
        }), ht(() => {
          l && (l.importing = !1), le.success("已加载历史记录");
        }));
      }).catch(() => {
      });
    }
    return e({ inData: u, applyInData: R }), (O, T) => {
      const J = oe("el-tab-pane"), L = oe("el-tabs"), x = oe("el-input"), M = oe("el-button");
      return h(), w("div", Ad, [
        m("div", $d, [
          b(op),
          b(Se, {
            label: "翻面",
            icon: k(zu),
            onClick: _
          }, null, 8, ["icon"]),
          b(Se, {
            label: "保存",
            icon: k(Ou),
            onClick: T[0] || (T[0] = () => $())
          }, null, 8, ["icon"]),
          b(Se, {
            label: "读取剪贴板",
            icon: k(On),
            onClick: j
          }, null, 8, ["icon"]),
          b(Se, {
            label: "更多",
            icon: k(Nu),
            onClick: D
          }, null, 8, ["icon"])
        ]),
        v.value ? (h(), Z(L, {
          key: 0,
          class: "more-container",
          modelValue: y.value,
          "onUpdate:modelValue": T[1] || (T[1] = (N) => y.value = N)
        }, {
          default: V(() => [
            b(J, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: V(() => [
                m("div", Pd, [
                  b(Se, {
                    label: "快速年龄修正",
                    icon: k(Hu),
                    onClick: A
                  }, null, 8, ["icon"]),
                  b(Se, {
                    label: "重置人物卡",
                    icon: k(Wu),
                    onClick: E
                  }, null, 8, ["icon"]),
                  b(Se, {
                    label: "导入/导出数据",
                    icon: k(On),
                    onClick: I
                  }, null, 8, ["icon"]),
                  b(Se, {
                    label: "读取历史",
                    icon: k(On),
                    onClick: B
                  }, null, 8, ["icon"]),
                  b(Ep),
                  b(Se, {
                    label: "切换成功率模式",
                    icon: k(Bu),
                    onClick: H
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            b(J, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: V(() => [
                b(fp)
              ]),
              _: 1
            }),
            b(J, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: V(() => [
                b(wp)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : W("", !0),
        b(At, {
          modelValue: f.value,
          "onUpdate:modelValue": T[4] || (T[4] = (N) => f.value = N),
          title: "下载图片/数据"
        }, {
          default: V(() => [
            m("div", Ed, [
              m("div", xd, [
                b(Mn, {
                  title: "正面",
                  refreshable: "",
                  previewImage: k(g).front,
                  download: {
                    url: k(g).front,
                    name: S.value,
                    type: "jpg"
                  },
                  onRefresh: T[2] || (T[2] = () => $("front"))
                }, null, 8, ["previewImage", "download"]),
                b(Mn, {
                  title: "背面",
                  refreshable: "",
                  previewImage: k(g).back,
                  download: {
                    url: k(g).back,
                    name: S.value,
                    type: "jpg"
                  },
                  onRefresh: T[3] || (T[3] = () => $("back"))
                }, null, 8, ["previewImage", "download"]),
                b(Mn, {
                  title: "车卡数据",
                  download: {
                    url: d.value,
                    name: S.value,
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ]),
              Id
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        b(At, {
          modelValue: c.value,
          "onUpdate:modelValue": T[6] || (T[6] = (N) => c.value = N),
          title: "导入/导出数据",
          onClosed: T[7] || (T[7] = (N) => u.value = "")
        }, {
          default: V(() => [
            m("div", Dd, [
              m("div", Rd, [
                b(x, {
                  type: "textarea",
                  value: p.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                b(M, {
                  type: "primary",
                  onClick: X
                }, {
                  default: V(() => [
                    se(" 复制以上内容 ")
                  ]),
                  _: 1
                })
              ]),
              m("div", Fd, [
                b(x, {
                  type: "textarea",
                  modelValue: u.value,
                  "onUpdate:modelValue": T[5] || (T[5] = (N) => u.value = N),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                b(M, {
                  type: "primary",
                  onClick: R
                }, {
                  default: V(() => [
                    se(" 导入以上内容 ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), ma = /* @__PURE__ */ U(Cd, [["__scopeId", "data-v-aaa4d0a6"]]), Od = /* @__PURE__ */ C({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = Re();
    return (n, r) => {
      var a;
      return h(), w("div", {
        class: ee(["paper theme-light", {
          "printing-image": (a = k(e)) == null ? void 0 : a.printing
        }])
      }, [
        m("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          vt(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), po = /* @__PURE__ */ U(Od, [["__scopeId", "data-v-6818b3b6"]]), Md = { class: "paper-section" }, Td = { class: "heading" }, Vd = { class: "title" }, Nd = { class: "subtitle" }, Ud = { class: "body" }, Bd = /* @__PURE__ */ C({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (h(), w("div", Md, [
      m("div", {
        class: ee(["header", {
          "header-centered": e.centered
        }])
      }, [
        vt(e.$slots, "header", {}, () => [
          m("h1", Td, [
            m("span", Vd, F(e.title), 1),
            m("span", Nd, F(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      m("div", Ud, [
        vt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), he = /* @__PURE__ */ U(Bd, [["__scopeId", "data-v-757cabe7"]]), jd = { class: "flatten-tree" }, zd = { class: "group-label" }, Ld = { class: "options" }, Wd = ["onClick"], Gd = /* @__PURE__ */ C({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (h(), w("div", jd, [
      (h(!0), w(G, null, Y(e.tree, (r) => (h(), w("div", {
        class: "group",
        key: r.key
      }, [
        m("div", zd, F(r.label), 1),
        m("div", Ld, [
          (h(!0), w(G, null, Y(r.children, (a) => (h(), w("a", {
            class: "option",
            key: a.key,
            onClick: (o) => e.$emit("select", a, r)
          }, F(a.label), 9, Wd))), 128))
        ])
      ]))), 128))
    ]));
  }
}), fo = /* @__PURE__ */ U(Gd, [["__scopeId", "data-v-3998604b"]]), Hd = /* @__PURE__ */ C({
  __name: "RandNameButton",
  props: {
    scope: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = oe("el-icon");
      return h(), w("button", {
        class: "rand-name-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("click", a))
      }, [
        b(r, { size: "1.3em" }, {
          default: V(() => [
            b(k(Tu))
          ]),
          _: 1
        })
      ]);
    };
  }
}), Jd = /* @__PURE__ */ U(Hd, [["__scopeId", "data-v-9bd5a43e"]]), qd = /* @__PURE__ */ C({
  __name: "RandNameOption",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (h(), w("button", {
      class: "rand-name-option",
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r))
    }, F(e.label), 1));
  }
}), Kd = /* @__PURE__ */ U(qd, [["__scopeId", "data-v-ba34af64"]]), Qd = {
  lastNames: [
    ["史密斯", "Smith"],
    ["约翰逊", "Johnson"],
    ["威廉姆斯", "Williams"],
    ["布朗", "Brown"],
    ["琼斯", "Jones"],
    ["米勒", "Miller"],
    ["戴维斯", "Davis"],
    ["加西亚", "Garcia"],
    ["罗德里格斯", "Rodriguez"],
    ["威尔逊", "Wilson"],
    ["安德森", "Anderson"],
    ["赫南德斯", "Hernandez"],
    ["摩尔", "Moore"],
    ["马丁内斯", "Martinez"],
    ["泰勒", "Taylor"],
    ["马丁", "Martin"],
    ["李", "Lee"],
    ["佩雷斯", "Perez"],
    ["汤普森", "Thompson"],
    ["白", "White"],
    ["洛佩兹", "Lopez"],
    ["罗宾逊", "Robinson"],
    ["克拉克", "Clark"],
    ["刘易斯", "Lewis"],
    ["沃克", "Walker"],
    ["霍尔", "Hall"],
    ["杨", "Young"],
    ["桑切斯", "Sanchez"],
    ["王", "Wang"],
    ["斯科特", "Scott"],
    ["格林", "Green"],
    ["亚当斯", "Adams"],
    ["贝利", "Bailey"],
    ["贝尔", "Bell"],
    ["考克斯", "Cox"],
    ["沃德", "Ward"],
    ["卡特", "Carter"],
    ["巴恩斯", "Barnes"],
    ["罗杰斯", "Rogers"],
    ["里德", "Reed"],
    ["库克", "Cook"],
    ["摩根", "Morgan"],
    ["彼得森", "Peterson"],
    ["科林斯", "Collins"],
    ["爱德华兹", "Edwards"],
    ["弗洛雷斯", "Flores"],
    ["莫里斯", "Morris"],
    ["冈萨雷斯", "Gonzalez"],
    ["纳尔逊", "Nelson"],
    ["穆雷", "Murray"],
    ["佩里", "Perry"],
    ["鲍威尔", "Powell"],
    ["罗素", "Russell"],
    ["沃森", "Watson"],
    ["索托", "Soto"],
    ["亨德森", "Henderson"],
    ["斯宾塞", "Spencer"],
    ["奥尔蒂斯", "Ortiz"],
    ["卡斯特罗", "Castro"],
    ["帕特森", "Patterson"],
    ["哈里斯", "Harris"],
    ["桑德斯", "Sanders"],
    ["哈里森", "Harrison"],
    ["格雷厄姆", "Graham"],
    ["弗格森", "Ferguson"],
    ["拉米雷斯", "Ramirez"],
    ["韦伯", "Webb"],
    ["奥尔森", "Olson"],
    ["斯图尔特", "Stewart"],
    ["华盛顿", "Washington"],
    ["威尔斯", "Wells"],
    ["巴特勒", "Butler"],
    ["辛普森", "Simpson"],
    ["雷诺兹", "Reynolds"],
    ["费雪", "Fisher"],
    ["亚历山大", "Alexander"],
    ["布莱克", "Black"],
    ["霍夫曼", "Hoffman"],
    ["阿尔瓦雷斯", "Alvarez"],
    ["格雷", "Gray"],
    ["詹金斯", "Jenkins"],
    ["菲利普斯", "Phillips"],
    ["埃文斯", "Evans"],
    ["科尔曼", "Coleman"],
    ["钱德勒", "Chandler"],
    ["康纳", "Connor"]
  ],
  maleNames: [
    ["詹姆斯", "James"],
    ["约翰", "John"],
    ["罗伯特", "Robert"],
    ["约瑟夫", "Joseph"],
    ["乔治", "George"],
    ["查尔斯", "Charles"],
    ["弗兰克", "Frank"],
    ["爱德华", "Edward"],
    ["亨利", "Henry"],
    ["托马斯", "Thomas"],
    ["威廉", "William"],
    ["弗雷德", "Fred"],
    ["哈罗德", "Harold"],
    ["艾尔伯特", "Albert"],
    ["路易斯", "Louis"],
    ["杰克", "Jack"],
    ["克拉伦斯", "Clarence"],
    ["阿瑟", "Arthur"],
    ["雷蒙德", "Raymond"],
    ["卡尔", "Carl"],
    ["乔", "Joe"],
    ["理查德", "Richard"],
    ["赫伯特", "Herbert"],
    ["塞缪尔", "Samuel"],
    ["罗伊", "Roy"],
    ["哈里", "Harry"],
    ["韦恩", "Wayne"],
    ["埃迪", "Eddie"],
    ["唐纳德", "Donald"],
    ["沃尔特", "Walter"],
    ["维克多", "Victor"],
    ["威廉姆", "Willie"],
    ["伯纳德", "Bernard"],
    ["朱利叶斯", "Julius"],
    ["诺曼", "Norman"],
    ["欧文", "Owen"],
    ["马文", "Marvin"],
    ["梅尔文", "Melvin"],
    ["迈克尔", "Michael"],
    ["阿尔弗雷德", "Alfred"],
    ["卢瑟", "Luther"],
    ["霍华德", "Howard"],
    ["莱昂纳德", "Leonard"],
    ["菲利普", "Philip"],
    ["拉尔夫", "Ralph"],
    ["马库斯", "Marcus"],
    ["莱斯特", "Lester"],
    ["艾伦", "Allen"],
    ["弗洛伊德", "Floyd"],
    ["莱昂", "Leon"],
    ["哈维", "Harvey"],
    ["米尔顿", "Milton"],
    ["克莱德", "Clyde"],
    ["厄尔", "Earl"],
    ["格伦", "Glenn"],
    ["维恩", "Vern"],
    ["阿伦", "Alvin"],
    ["珀西", "Percy"],
    ["弗农", "Vernon"],
    ["罗斯", "Ross"],
    ["埃米尔", "Emil"],
    ["奥托", "Otto"],
    ["杰西", "Jessie"],
    ["马修", "Matthew"],
    ["吉恩", "Gene"],
    ["埃德温", "Edwin"],
    ["莫里斯", "Maurice"],
    ["威尔伯", "Wilbur"],
    ["比尔", "Bill"],
    ["奥维尔", "Orville"],
    ["阿诺德", "Arnold"],
    ["莱斯利", "Leslie"],
    ["厄尔文", "Irving"],
    ["威尔弗雷德", "Wilfred"],
    ["纳撒尼尔", "Nathaniel"],
    ["斯特林", "Sterling"],
    ["罗兰", "Roland"],
    ["埃尔默", "Elmer"],
    ["汤姆", "Tom"],
    ["欧内斯特", "Ernest"],
    ["卢卡斯", "Lucas"],
    ["鲍勃", "Bob"],
    ["诺亚", "Noah"],
    ["阿贝尔", "Abel"],
    ["卡梅伦", "Cameron"],
    ["布鲁斯", "Bruce"],
    ["卡洛斯", "Carlos"],
    ["克里斯", "Chris"],
    ["科林", "Colin"],
    ["达里尔", "Daryl"],
    ["德怀特", "Dwight"],
    ["埃利奥特", "Elliott"],
    ["埃里克", "Eric"],
    ["弗朗西斯", "Francis"],
    ["加里", "Gary"],
    ["格雷格", "Greg"],
    ["伊桑", "Ethan"],
    ["杰里米", "Jeremy"]
  ],
  femaleNames: [
    ["玛丽", "Mary"],
    ["伊丽莎白", "Elizabeth"],
    ["露丝", "Ruth"],
    ["玛格丽特", "Margaret"],
    ["多萝西", "Dorothy"],
    ["艾琳", "Eileen"],
    ["汉娜", "Hannah"],
    ["艾玛", "Emma"],
    ["弗洛伦斯", "Florence"],
    ["格蕾丝", "Grace"],
    ["埃塞尔", "Ethel"],
    ["露易丝", "Louise"],
    ["贝蒂", "Betty"],
    ["爱丽丝", "Alice"],
    ["艾达", "Ada"],
    ["梅布尔", "Mabel"],
    ["艾米莉", "Emily"],
    ["露西", "Lucy"],
    ["埃德娜", "Edna"],
    ["罗丝", "Rose"],
    ["珍妮", "Jenny"],
    ["朱莉娅", "Julia"],
    ["卡罗琳", "Caroline"],
    ["艾米", "Amy"],
    ["艾琳", "Irene"],
    ["约瑟芬", "Josephine"],
    ["玛莎", "Martha"],
    ["苏珊", "Susan"],
    ["贝拉", "Bella"],
    ["伊莎贝尔", "Isabel"],
    ["玛格丽塔", "Margarita"],
    ["米尔德里德", "Mildred"],
    ["露西尔", "Lucille"],
    ["埃斯特尔", "Esther"],
    ["凯瑟琳", "Catherine"],
    ["维奥拉", "Viola"],
    ["伊娃", "Eva"],
    ["诺拉", "Nora"],
    ["莉莉安", "Lillian"],
    ["玛丽安", "Marian"],
    ["詹妮特", "Janet"],
    ["玛吉", "Maggie"],
    ["康斯坦丝", "Constance"],
    ["珍", "Jean"],
    ["埃莉诺", "Elinor"],
    ["梅", "Mae"],
    ["埃塞尔琳", "Ethelyn"],
    ["埃尔西", "Elsie"],
    ["埃塔", "Etta"],
    ["欧金妮亚", "Eugenia"],
    ["伊芙琳", "Evelyn"],
    ["伊芙", "Eve"],
    ["伊冯娜", "Evonne"],
    ["费丝", "Faith"],
    ["芬妮", "Fanny"],
    ["费伊", "Fay"],
    ["费叶", "Faye"],
    ["费利西亚", "Felicia"],
    ["费恩", "Fern"],
    ["弗洛拉", "Flora"],
    ["弗朗希思", "Frances"],
    ["弗雷达", "Freda"],
    ["弗里达", "Frieda"],
    ["加布里埃尔", "Gabrielle"],
    ["盖尔", "Gail"],
    ["格特鲁德", "Gertrude"],
    ["格拉迪斯", "Gladys"],
    ["格温多琳", "Gwendolyn"],
    ["海泽尔", "Hazel"],
    ["海伦娜", "Helena"],
    ["希尔达", "Hilda"],
    ["胡尔达", "Hulda"],
    ["艾达", "Ida"],
    ["伊拉", "Ila"],
    ["伊琳", "Ilene"],
    ["伊莫金", "Imogene"],
    ["伊内兹", "Inez"],
    ["伊尔玛", "Irma"],
    ["艾娃", "Iva"],
    ["艾薇", "Ivy"],
    ["贾尼斯", "Janice"],
    ["珍妮特", "Jeanette"],
    ["洁茜", "Jessie"],
    ["琼", "Joan"],
    ["朱恩", "June"],
    ["凯特", "Kate"],
    ["莱拉", "Lela"],
    ["莉娜", "Lena"],
    ["米妮", "Minnie"]
  ]
}, lt = {
  // 6 行常见姓 + 2 行比较好听的姓
  lastNames: st(
    `
    张 王 李 赵 刘 孙 朱 秦 何 吕 许 周 吴 郑 钱 冯 陈 孔 金 魏 陶 姜 沈 韩 苏
    尹 丁 江 宋 孟 章 潘 马 苗 方 俞 任 袁 唐 费 薛 贺 余 顾 史 韦 熊 纪 舒 董
    梁 穆 萧 毛 夏 田 樊 胡 杜 阮 季 贾 林 罗 毕 郝 常 傅 曹 严 谢 杨 葛 范 黄
    姚 祁 庞 戴 梅 徐 邱 高 蔡 霍 虞 卢 莫 房 解 邓 包 石 崔 龚 程 邢 裴 陆 荣
    景 宁 伊 胥 卓 莘 闻 翟 谭 牛 燕 温 庄 晏 柴 瞿 阎 慕 习 古 易 廖 庾 步 施
    耿 满 师 巩 辛 红 游 曾 沙 车 兆 苟 仁 钟 世 肖 斐 丘 佟 言 迟 覃 楚 蒋 詹
    米 贝 尤 花 蓝 路 娄 童 时 奚 万 柯 单 左 符 白 怀 艾 鱼 容 向 简 冷 苍 双
    阳 龙 壬 友 九 寻 书 本 寒 千 诗 阿 星 南 天 风 英 兰 门 希 琴 光 文 叶 卫
    战 褚 华 戚 邹 喻 柏 水 窦 云 彭 郎 鲁 昌 凤 柳 酆 鲍 廉 岑 雷 倪 汤 谈 茅
    滕 殷 邬 安 乐 于 皮 卞 齐 康 伍 元 卜 平 和 邵 湛 汪 禹 狄 明 臧 计 伏 成
    屈 项 祝 闵 席 麻 强 危 颜 郭 盛 刁 锺 骆 凌 支 昝 管 仇 栾 暴 甘 钭 历 戎
    经 裘 缪 干 应 宗 宣 贲 郁 杭 洪 诸 吉 钮 祖 武 束 幸 司 韶 郜 黎 蓟 溥 印
    嵇 滑 翁 荀 羊 於 惠 甄 麴 家 封 芮 羿 储 靳 汲 邴 糜 松 党 贡 劳 逄 姬 从
    井 段 富 巫 乌 焦 巴 弓 牧 隗 山 谷 侯 宓 蓬 全 郗 班 仰 秋 仲 宫 毋 乜 养
    宿 蒲 邰 鄂 索 咸 籍 赖 蔺 屠 蒙 池 乔 郁 能 鞠 须 丰 巢 关 蒯 相 查 后 荆
    申 扶 堵 冉 宰 郦 雍 却 璩 桑 桂 濮 寿 通 竺 权 逮 盍 益 桓 公 寸 贰 皇 侨
    边 扈 冀 僪 浦 尚 农 别 充 连 茹 宦 彤 竭 端 赫 实 甫 集 象 翠 狂 辟 中 夕
    慎 戈 终 暨 居 衡 都 弘 匡 国 寇 广 禄 阙 东 典 良 函 芒 苦 其 京 丛 岳 召
    欧 殳 沃 利 蔚 越 夔 隆 厍 聂 晁 勾 敖 融 訾 阚 那 饶 空 有 舜 之 冠 宾 香
    果 蹇 称 诺 来 多 繁 戊 朴 回 毓 税 荤 靖 绪 愈 硕 牢 买 但 巧 枚 撒 泰 秘
    亥 绍 以 森 斋 释 奕 姒 朋 求 羽 用 占 真 穰 翦 闾 漆 贵 代 贯 旁 崇 栋 告
    万俟 司马 上官 欧阳 夏侯 诸葛 闻人 东方 赫连 皇甫 尉迟 公羊 宇文 长孙 慕容
    澹台 公冶 宗政 濮阳 淳于 单于 太叔 申屠 公孙 仲孙 轩辕 令狐 司徒 司空 太史
    钟离 乌雅 范姜 碧鲁 张廖 张简 图门 公叔 乌孙 完颜 马佳 佟佳 富察 费莫 章佳
    南宫 百里 西门 东门 乐正 漆雕 公西 巫马 端木 第五 呼延 南门
    那拉 依尔根觉罗 依尔觉罗 萨嘛喇 赫舍里 额尔德特 叶赫那拉 纳喇 索绰络
    萨克达 钮祜禄 他塔喇 喜塔腊 讷殷富察 叶赫那兰 库雅喇 瓜尔佳 舒穆禄 爱新觉罗
    休 褒 谏 锐 皋 闳 在 歧 禾 示 是 委 钊 频 嬴 呼 大 威 昂 律 开 操 瑞 眭 泥
    冒 保 系 抄 定 化 莱 校 么 抗 祢 綦 悟 宏 功 庚 务 敏 捷 拱 丑 丙 畅 运 摩
    随 类 卯 俟 答 乙 允 甲 留 尾 佼 玄 乘 裔 延 植 环 矫 赛 昔 侍 度 伟 铁 迮
    旷 遇 偶 前 由 咎 塞 敛 受 泷 袭 衅 叔 圣 御 夫 仆 镇 藩 邸 府 掌 首 员 督
    焉 戏 可 智 尔 凭 悉 进 笃 厚 业 肇 资 合 仍 衷 哀 刑 俎 仵 圭 夷 钦 鄢 汝
    徭 蛮 汗 孛 乾 帖 罕 洛 淦 洋 邶 郸 郯 邗 邛 剑 虢 隋 蒿 茆 菅 苌 树 桐 仉
    锁 机 盘 铎 斛 玉 线 针 箕 庹 绳 磨 蒉 瓮 弭 刀 疏 牵 浑 恽 势 仝 法 闫 晋
    同 蚁 止 戢 睢 冼 种 涂 己 泣 潜 卷 脱 谬 蹉 赧 浮 顿 说 次 错 念 夙 海 归
    斯 完 丹 表 聊 源 姓 吾 展 出 不 户 闭 才 无 学 愚 性 雪 霜 烟 盖 逯 库 福
    少 字 桥 板 独 嘉 扬 善 揭 祈 析 赤 紫 青 柔 刚 奇 拜 佛 陀 郏 逢 阴 薄 厉
    弥 素 长 僧 隐 仙 隽 宇 祭 酒 淡 塔 琦 闪 始 接 波 碧 速 禚 后 况 亢 缑 帅
    腾 潮 镜 似 澄 潭 謇 纵 渠 奈 春 濯 沐 茂 檀 藤 枝 检 生 折 登 赏 伯 佴 佘
    驹 骑 貊 虎 肥 鹿 雀 野 禽 飞 节 宜 鲜 粟 栗 豆 帛 官 布 衣 藏 宝 钞 银 稽
    盈 庆 喜 及 普 建 营 巨 望 道 载 声 漫 犁 力 贸 勤 革 改 兴 亓 睦 曲 竹 百
    修 信 闽 北 守 坚 勇 汉 练 尉 士 旅 五 令 将 旗 军 行 奉 敬 恭 仪 母 堂 年
    义 礼 慈 孝 理 伦 卿 问 永 辉 位 让 尧 依 犹 介 承 市 所 苑 杞 剧 第 牟 商
    零 谌 招 续 达 忻 六 鄞 候 宛 励 粘 萨 邝 辜 初 楼 城 区 局 台 纳 泉 老 清
    原 考 妫 德 卑 过 麦 爱 笪 谯 哈 墨 左丘 梁丘 微生 羊舌 东郭 谷梁 宰父 夹谷
    拓跋 壤驷 颛孙 子车 司寇 亓官 鲜于 闾丘 公良 段干
  `
  ).sort((t, e) => t.length - e.length),
  maleNames1: st(`
    东 丰 乐 亮 仁 仔 仰 仲 伟 佳 俊 信 光 刚 勇 华 博 友 坚 奇
    威 学 宇 宏 岩 峰 帅 强 彪 德 志 敏 斌 昂 昊 昌 明 晋 智 朋
    杰 松 林 柏 栋 森 正 永 波 泽 洋 浩 涛 瀚 琪 瑜 瑞 睿 石 磊
    祥 程 立 翔 联 聪 育 航 荣 虎 诚 豪 轩 辉 辰 远 雄 雷 飞 骏
    鸿 鹏 龙 三 四 五 六 八 百 万 京 令 文 尧 建 哲 阳 逸 柯 卓
  `),
  maleNames2: st(`
    晓峰 俊豪 志伟 明轩 天宇 建国 永强 昊天 凯文 子健 晨曦 文博 英杰 伟峰 俊杰
    家豪 浩然 祥瑞 旭东 宇航 明杰 杰森 彬彬 杰华 俊宇 光辉 子豪 伟杰 世杰 嘉豪
    博文 明辉 君豪 宇峰 志辉 俊峰 俊熙 伟豪 君杰 宇杰 文杰 昊宇 志宇 浩杰 旭杰
    浩轩 俊辉 志豪 明宇 伟强 博豪 俊文 俊泽 凯杰 明哲 文轩 君伟 明浩 宇豪 杰宇
    俊霖 宇浩 嘉伟 子杰 子轩 嘉轩 俊轩 浩宇 俊浩 明豪 勇军 伟民 振华 国华 志刚
    建明 军伟 强生 伟东 杰雄 勇辉 光明 煜洋 雨泽 越泽 之玉 锦程 修杰 烨伟 志泽
    立辉 致远 天思 源智 烨华 振家 越彬 伟宸 晋鹏 觅松 海亦 苑博 南松 凝海 俊驰
    乐驹 风华 睿渊 博超 天磊 夜白 初晴 瑾瑜 鹏飞 弘文 伟泽 迎松 白易 远航 晓啸
    智宸 晓博 靖琪 十八 君浩 绍辉 天德 半山 一江 皓轩 子默 青寒 问筠 旭尧 冷之
    正豪 子骞 灵竹 三德 连虎 十三 天川 一德 严青 擎苍 思远 嘉懿 鸿煊 晟睿 鸿涛
    孤风 青文 若风 广山 若之 浩阑 南风 博涛 烨霖 天佑 半雪 鹏煊 沛山 道天 千筹
    远望 乘风 道之 乘云 天抒 士萧 文龙 一鸣 雨辰 远锋 元正 断秋 远山 飞扬 一笑
    天问 浩天 沧海 安康 安平 安然 安晏 安宜 安志 波鸿 博明 博雅 博易 博远 才哲
    才俊 成和 承安 承平 承宣 承允 承泽 承志 飞虎 飞龙 飞羽 涵煦 昊苍 昊空 昊然
    宏达 宏恺 景辉 景明 景山 乐池 天逸 伟志 文宣 文彦 向晨 向阳 星阑 阳波 逸仙
    逸明 正奇 子瑜 玮涛 庭霖 弘智 品川 钰宸 子尘 润楚 元云 杰弘 杰棠 智语 绍若
    贤权 禹哲 纪德 轩军 楠佑 鸿华 峻莱 裕韬 寒淮 烨若 畅孝 雨泰 庆韬 浩慕 恩晨
    佑晨 翰俊 聪铭 瑜睿 应泰 为城 炫杰 竟锋 亦韵 若杰 航苏 俊建 玮锋 晔苏 桦君
    信煊 益正 惠坪 炳城 川健 煊博 瀚强 亦健 卓逸 仲智 旭柳 易扬 浩淼 若星 书润
    圣霖 濡温 生朋 永润 温泰 言佑 乐凡 均语 卓锦 炜泽 奕辰 韵熙 汇润 润庭 伟俊
    立圣 东子 轩宏 哲聪 庭苍 亮涛 松清 绍校 立诚 熠彤 哲瀚 煜城 鹤轩 思聪 展鹏
    笑愚 志强 炫明 雪松 思源 智渊 思淼 鹭洋 昊焱 立果 金鑫 语堂 炎彬 昊强 鑫磊
    郜坤 哲羽 意致 瑾靖 易琦 光济 玄奕 骞尧 清嘉 冷睿 永丰 夭锦 辰哲 承颜 习凛
    堇文 鹏云 华茂 永以 澎湃 康伯 玉韬 云霆 雨伯 友健 维峰 沺誉 安陵 君皓 志勇
    茂材 运杰 佳炎 鸿月 加答 涛卓 康顺 凯定 城可 世砚 博良 睿书 泓佳 书鸣 辉鑫
    语智 艺智 思涵 呈岚 天骐 翰睿 哲涛 凯霆 言陌 浩志 勇笠 玮翔 雄浚 祖弘 宏颢
  `),
  femaleNames1: st(`
    丽 书 云 亚 亦 仙 仪 佳 依 倩 兰 冬 冰 包 卓 园 妍 娜 娟 婧
    婷 媛 安 宜 帆 新 彤 心 思 怡 慧 斌 春 晓 晨 晶 柏 格 梅 梓
    梦 楚 楠 欣 洁 涵 燕 爽 玲 珂 珊 琦 琪 琳 瑶 璐 离 秀 红 绮
    美 羽 翠 艳 艾 芳 苏 若 英 茜 莉 莲 莹 菲 萍 蓓 蕊 蕾 薇 诗
    贝 雪 雯 霜 霞 青 静 舒 乐 乔 以 伊 一 七 九 千 真 芙 秋 夏
  `),
  femaleNames2: st(`
    万奕 万姝 丽华 丽娟 丽颖 之云 之寒 之桃 乐巧 乐晗 乐薇 乔仪 书瑶 予希 云毓
    亦攸 亦橙 今安 以兮 以寒 以葵 以蓝 伊依 伊桃 伊湉 伊诺 优游 余芸 佩瑶 佩蓉
    佳念 佳怡 佳琪 佳琳 佳知 佳觅 依婷 依莹 依龄 倚真 倩知 倾清 冉娇 冉清 冰夏
    冰晴 冰蓉 凌波 凝初 凝安 凝雁 初恩 初瑶 初语 北茉 千柔 千羽 半槐 半烟 南嫣
    南星 南柚 南芊 又菡 双芸 可夏 可星 司纯 向妙 向梦 向真 君雨 含卿 含烟 含蓓
    听薇 和佩 唯兮 善蕊 声笙 夏婷 夏蓉 天亦 奕北 奕芊 妍依 妍欣 妙之 妙馨 妤华
    姗梵 姝美 娟丽 娥菲 婉吟 婉婷 婉宁 婉柠 婧媛 婧恬 婧琳 婧芷 婷玉 婷秀 婷颜
    媚鸿 媱雅 子沛 子茗 宁希 宁敏 安冉 安禾 安诺 宛桔 寄影 寄琴 寄翠 寻双 小芳
    小萱 尔毓 山菡 岁穗 希柠 希雅 待晚 待臻 心怡 心歆 忆雪 念一 念慈 念汐 念薇
    怜南 思妤 思怡 思涵 思琪 思璐 思羽 思莞 思菱 思雅 思颖 怡君 怡岚 怡然 恬娣
    恬栖 恬雨 惜灵 惜珞 惜雪 想蓉 意暄 意羡 慕倾 慕唯 慕晴 慧妍 慧娟 慧琳 文婷
    文静 易真 昕怡 昕甜 昕言 星楚 映凝 映嘉 映安 映菡 映萱 春玲 春花 晏乔 晓倩
    晓夏 晓汐 晓燕 晓瑶 晓蓓 晓霜 晚柠 晚棠 晞悦 晴岚 曦薇 曼冬 曼溪 木冉 柳如
    栀萌 桑宁 梅芳 梓欣 梓紫 梦婷 梦淑 梦琳 梦瑶 梦绾 梨珂 楚奈 楚瑶 橙美 欣妍
    欣怡 欣蓉 欣静 歆一 歆瑜 水妍 水瑶 水静 汐梓 沁蓉 沐心 沐颜 泱祺 洛一 洛颜
    涵易 涵菡 涵菱 淑云 淑娟 淑婷 清墨 清媛 清筱 清颜 溪颜 灵凡 灵淼 灵珊 熙柔
    熙瑾 熙萱 燕君 玉兰 玉梅 玉珍 玖鸢 玥冰 玥婷 玥芙 珑琪 琳姿 琳娜 瑜伽 璇知
    璞诗 甜亦 甜晴 皙宁 皙恬 知宛 知潼 知薇 知韦 碧希 碧琴 禾凝 禾婉 禾茉 禾霓
    秋菊 稚京 笑珞 笑龄 筱茵 简心 素琳 紫丝 紫嫣 紫安 紫知 紫茉 紫莎 紫菱 紫萱
    紫蓝 紫霜 绮晴 绮梅 缘珞 美华 美玲 羽莹 翠桃 聪怡 舒淳 舒然 舒言 艳丽 艳红
    艳蕊 艺涵 艺珂 艺馨 芊凛 芊昔 芊澄 芒可 芝恬 芮柒 芮瑶 芳凝 芳华 芳琴 芳睿
    芳菲 芷卉 芷容 芷巧 芷晴 芷若 芷蝶 芸萱 芸霞 苏郁 苏酥 苡沫 若嫣 若琳 若琼
    若菱 茉涵 茜涵 莉娜 莹云 菀柠 菲悦 萌知 落柔 蓉柳 蓉珊 蕉礼 蕊琪 虞兰 西棠
    觅甜 诗云 诗婷 诗施 诗桃 诗淇 诗琪 诗睿 诗钰 语兰 语嫣 语彤 语淑 语琴 语芙
    语蓉 语蕊 语蝶 语雪 谷梓 辰柚 逸恬 郡一 锦惜 锦芊 雅丽 雅彤 雅惠 雅楠 雅琪
    雅静 雨兰 雨桐 雨梅 雨甯 雨莲 雨萱 雪丽 雪卉 雪晴 雪梅 雪瑶 雯婷 雯雅 霞芬
    青曼 青玥 靖柳 静怡 静文 静昀 静笛 静芙 静若 静雅 颖恩 颖菲 香岚 香菱 香萱
    馨雅 鹿绫 黎念 黎思 黛绿 黛颖 龄蓉
  `),
  rareGroups: st(`
    顾清风浦 段紫云瑶 穆听涛岚 罗晓星雪 季冬雪松 赵露石霜 宋春汐风 雷梦醒霜
    霍春柳晓 龚晓阳翔 冷秋浦燕 骆海瑾琴 韩寒梅云 邹晓露月 倪绿墨云 刘池阳燕
    张秋荷风 杨雪晴露 马云山雁 郭海瑞石 吴春燕柳 沙云飞谷 齐雁南石 柴碧霞月
    王月薇花 金晓岚柳 白云翔石 韩寒梅霜
  `)
};
function st(t) {
  return t.trim().split(/\s+/);
}
function Zd(t = "all", e = "all") {
  switch (t === "all" ? Xd() : t) {
    case "zh":
      return tf(e);
    case "en":
      return ya(1, e);
    case "en-zh":
      return ya(0, e);
    default:
      return "";
  }
}
function Xd() {
  return ao({
    zh: 4,
    "en-zh": 5,
    en: 1
  });
}
function ya(t, e) {
  const { lastNames: n, femaleNames: r, maleNames: a } = Qd, o = {
    all: [...r, ...a],
    male: a,
    female: r
  }[e], i = n[Math.floor(Math.random() * n.length)];
  return `${o[Math.floor(Math.random() * o.length)][t]}·${i[t]}`;
}
function ut(t) {
  const n = Math.random() < 0.75 ? Math.floor(Math.random() * 200) : Math.floor(Math.random() * t.length);
  return t[n];
}
const Yd = {
  rare() {
    return Me(lt.rareGroups);
  },
  // 张 三
  ln1(t) {
    const { lastNames: e, maleNames1: n, femaleNames1: r } = lt, a = {
      all: [...r, ...n],
      male: n,
      female: r
    }[t], o = ut(e), i = Me(a);
    return `${o}${i}`;
  },
  // 张 文婷
  ln2(t) {
    const { lastNames: e, femaleNames2: n, maleNames2: r } = lt, a = {
      all: [...n, ...r],
      male: r,
      female: n
    }[t], o = ut(e), i = Me(a);
    return `${o}${i}`;
  },
  // 刘 娜 娜
  lnn(t) {
    const { lastNames: e, maleNames1: n, femaleNames1: r } = lt, a = {
      all: [...n, ...r],
      male: n,
      female: r
    }[t], o = ut(e), i = Me(a);
    return `${o}${i}${i}`;
  },
  // 赵 欣 兰
  lmn(t) {
    const { lastNames: e, maleNames1: n, femaleNames1: r } = lt, a = {
      all: [...n, ...r],
      male: n,
      female: r
    }[t], o = ut(e), i = Me(a), s = Me(a);
    return `${o}${i}${s}`;
  },
  // 张 王 欣 兰
  abmn(t) {
    const { lastNames: e, maleNames1: n, femaleNames1: r } = lt, a = {
      all: [...n, ...r],
      male: n,
      female: r
    }[t], o = e.filter((p) => p.length === 1), i = ut(o), s = ut(o), l = Me(a), u = Me(a);
    return `${i}${s}${l}${u}`;
  }
};
function ef() {
  return ao({
    ln2: 320,
    ln1: 250,
    lmn: 240,
    lnn: 180,
    abmn: 8,
    rare: 2
  });
}
function tf(t) {
  const e = ef();
  return Yd[e](t);
}
const nf = /* @__PURE__ */ C({
  __name: "RandNameRow",
  setup(t) {
    const e = [
      { label: "随", scope: "all" },
      { label: "中", scope: "zh" },
      { label: "英", scope: "en-zh" },
      { label: "En", scope: "en" }
    ], n = ie(), r = Re(), a = z(0), o = te(() => e[a.value]);
    function i() {
      a.value = (a.value + 1) % e.length;
    }
    function s() {
      if (!(n != null && n.value)) return;
      const l = n.value.gender[0], u = l === "男" ? "male" : l === "女" ? "female" : "all";
      n.value.name = Zd(o.value.scope, u);
    }
    return (l, u) => {
      var p;
      return h(), w("div", {
        class: ee(["rand-name-row", {
          "printing-image": (p = k(r)) == null ? void 0 : p.printing
        }])
      }, [
        b(Kd, {
          label: o.value.label,
          onClick: i
        }, null, 8, ["label"]),
        b(Jd, {
          scope: o.value.scope,
          onClick: s
        }, null, 8, ["scope"])
      ], 2);
    };
  }
}), rf = /* @__PURE__ */ U(nf, [["__scopeId", "data-v-9f50d4c5"]]), wr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent), document.addEventListener("focus", t._clickOutsideEvent, !0);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent), document.removeEventListener("focus", e._clickOutsideEvent, !0);
  }
}, af = { class: "name-row" }, of = { class: "col-0" }, lf = { class: "rel only-wide" }, sf = {
  key: 0,
  class: "job-selector"
}, uf = { class: "job-selector-header" }, cf = { class: "only-compact" }, pf = { class: "info-row" }, df = { class: "info-row" }, ff = /* @__PURE__ */ C({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ie(), n = Re(), { jobGroups: r } = Vt, a = z(!1), o = z("");
    function i() {
      a.value = !0;
    }
    function s() {
      a.value = !1;
    }
    be(
      () => a.value,
      () => {
        o.value = "";
      }
    );
    const l = te(() => {
      const p = o.value;
      return r.reduce((c, f) => {
        const { name: v, pinyin: y, jobs: _ } = f, g = _.reduce(
          (P, S) => ((!p || v.includes(p) || y.includes(p) || S.name.includes(p) || S.pinyin.includes(p)) && P.push({ label: S.name, key: S.name }), P),
          []
        );
        return g.length && c.push({
          label: v,
          key: v,
          children: g
        }), c;
      }, []);
    });
    function u(p) {
      e && (e.value.job = p, s());
    }
    return (p, d) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "调查员",
      subTitle: "Investigator"
    }, {
      default: V(() => {
        var c;
        return [
          m("div", {
            class: ee(["info-section", {
              "printing-image": (c = k(n)) == null ? void 0 : c.printing
            }])
          }, [
            m("div", af, [
              m("div", of, [
                b(ae, {
                  label: "姓名",
                  placeholder: "角色姓名",
                  modelValue: k(e).name,
                  "onUpdate:modelValue": d[0] || (d[0] = (f) => k(e).name = f)
                }, null, 8, ["modelValue"])
              ]),
              b(rf)
            ]),
            b(ae, {
              label: "玩家",
              placeholder: "玩家昵称",
              modelValue: k(e).playerName,
              "onUpdate:modelValue": d[1] || (d[1] = (f) => k(e).playerName = f)
            }, null, 8, ["modelValue"]),
            b(ae, {
              label: "时代",
              modelValue: k(e).time,
              "onUpdate:modelValue": d[2] || (d[2] = (f) => k(e).time = f)
            }, null, 8, ["modelValue"]),
            Ye((h(), w("div", lf, [
              b(ae, {
                label: "职业",
                modelValue: k(e).job,
                "onUpdate:modelValue": d[3] || (d[3] = (f) => k(e).job = f),
                placeholder: "自定义职业或选择预设职业",
                onFocus: i
              }, null, 8, ["modelValue"]),
              b(tr, { name: "slide-up" }, {
                default: V(() => [
                  a.value ? (h(), w("div", sf, [
                    m("div", uf, [
                      Ye(m("input", {
                        class: "job-search-input",
                        type: "text",
                        placeholder: "输入职业名称或拼音可以进行搜索",
                        "onUpdate:modelValue": d[4] || (d[4] = (f) => o.value = f)
                      }, null, 512), [
                        [wo, o.value]
                      ])
                    ]),
                    b(fo, {
                      tree: l.value,
                      onSelect: d[5] || (d[5] = (f) => u(f.label))
                    }, null, 8, ["tree"])
                  ])) : W("", !0)
                ]),
                _: 1
              })
            ])), [
              [k(wr), s]
            ]),
            m("div", cf, [
              b(ae, {
                label: "职业",
                modelValue: k(e).job,
                "onUpdate:modelValue": d[6] || (d[6] = (f) => k(e).job = f),
                placeholder: "自定义或从“更多”→“职业列表”中选择"
              }, null, 8, ["modelValue"])
            ]),
            m("div", pf, [
              b(ae, {
                label: "年龄",
                char: 6,
                modelValue: k(e).age,
                "onUpdate:modelValue": d[7] || (d[7] = (f) => k(e).age = f)
              }, null, 8, ["modelValue"]),
              b(ae, {
                label: "性别",
                char: 6,
                modelValue: k(e).gender,
                "onUpdate:modelValue": d[8] || (d[8] = (f) => k(e).gender = f)
              }, null, 8, ["modelValue"])
            ]),
            m("div", df, [
              b(ae, {
                label: "住地",
                char: 6,
                modelValue: k(e).location,
                "onUpdate:modelValue": d[9] || (d[9] = (f) => k(e).location = f)
              }, null, 8, ["modelValue"]),
              b(ae, {
                label: "故乡",
                char: 6,
                modelValue: k(e).hometown,
                "onUpdate:modelValue": d[10] || (d[10] = (f) => k(e).hometown = f)
              }, null, 8, ["modelValue"])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : W("", !0);
  }
}), mf = /* @__PURE__ */ U(ff, [["__scopeId", "data-v-7dffb524"]]), yf = { class: "attr-section-button-text" }, hf = /* @__PURE__ */ C({
  __name: "AttrSectionButton",
  emits: ["click"],
  setup(t) {
    return (e, n) => (h(), w("button", {
      class: "attr-section-button",
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r))
    }, [
      m("div", yf, [
        vt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), vf = /* @__PURE__ */ U(hf, [["__scopeId", "data-v-0f1aa376"]]), gf = (t) => ($e("data-v-c2265671"), t = t(), Pe(), t), bf = { class: "info-section" }, _f = { class: "attributes-group" }, wf = /* @__PURE__ */ gf(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), kf = { class: "attributes-group" }, Sf = { class: "attributes-actions" }, Af = {
  key: 0,
  class: "ponits-sum"
}, $f = { class: "web-only" }, Pf = /* @__PURE__ */ C({
  __name: "AttributesSection",
  setup(t) {
    const e = ie(), n = [
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
    ], a = te(() => {
      if (!e) return 0;
      const { str: l, con: u, dex: p, app: d, pow: c, siz: f, edu: v, int: y } = e.value.attributes, _ = [l, u, p, d, c, f, v, y];
      return _.every((P) => P) ? _.reduce((P, S) => P + (S || 0), 0) : 0;
    });
    function o(l, u) {
      e && (e.value.attributes[l] = u ? +u : void 0);
    }
    const i = z(0);
    function s() {
      if (!e) return;
      const l = Array.from({
        length: i.value % 3 + 1
      }).map(() => Yn()).sort((u, p) => Rt(p) - Rt(u))[0];
      e.value.attributes = l, le.success("已为您生成一组数据，看看符不符合心意吧！"), i.value++;
    }
    return (l, u) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "属性",
      subTitle: "Characteristics"
    }, {
      default: V(() => [
        m("div", bf, [
          m("div", _f, [
            (h(), w(G, null, Y(n, (p) => {
              var d;
              return b(ae, {
                key: p.key,
                label: p.label,
                modelValue: `${((d = k(e)) == null ? void 0 : d.attributes[p.key]) ?? ""}`,
                "onUpdate:modelValue": (c) => o(p.key, c)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          wf,
          m("div", kf, [
            (h(), w(G, null, Y(r, (p) => {
              var d;
              return b(ae, {
                key: p.key,
                label: p.label,
                modelValue: `${((d = k(e)) == null ? void 0 : d.attributes[p.key]) ?? ""}`,
                "onUpdate:modelValue": (c) => o(p.key, c)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64)),
            m("div", Sf, [
              a.value ? (h(), w("div", Af, "总点数 " + F(a.value), 1)) : W("", !0),
              m("div", $f, [
                b(vf, { onClick: s }, {
                  default: V(() => [
                    se("一发入魂")
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Ef = /* @__PURE__ */ U(Pf, [["__scopeId", "data-v-c2265671"]]), xf = /* @__PURE__ */ C({
  __name: "AvatarSection",
  setup(t) {
    const e = z(!1);
    return (n, r) => {
      const a = oe("AvatarModalContent");
      return h(), Z(At, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (o) => e.value = o)
      }, {
        default: V(() => [
          b(a, {
            onFinished: r[0] || (r[0] = (o) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), If = /* @__PURE__ */ U(xf, [["__scopeId", "data-v-67a8d568"]]), Df = { class: "writable-unit" }, Rf = { class: "label" }, Ff = ["value", "readonly"], Cf = /* @__PURE__ */ C({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (h(), w("div", Df, [
      m("div", Rf, F(e.label), 1),
      m("input", {
        type: "text",
        class: "input",
        value: e.modelValue,
        readonly: e.readonly,
        onInput: n[0] || (n[0] = (r) => e.$emit("update:modelValue", r.target.value))
      }, null, 40, Ff)
    ]));
  }
}), Be = /* @__PURE__ */ U(Cf, [["__scopeId", "data-v-2bab827c"]]), Of = {}, Mf = (t) => ($e("data-v-be8afd85"), t = t(), Pe(), t), Tf = { class: "writable-divider" }, Vf = /* @__PURE__ */ Mf(() => /* @__PURE__ */ m("div", { class: "writable-divider-line" }, null, -1)), Nf = [
  Vf
];
function Uf(t, e) {
  return h(), w("div", Tf, Nf);
}
const Jt = /* @__PURE__ */ U(Of, [["render", Uf], ["__scopeId", "data-v-be8afd85"]]), Bf = { class: "status-checkbox" }, jf = ["checked"], zf = { class: "label" }, Lf = /* @__PURE__ */ C({
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
    return (a, o) => (h(), w("label", Bf, [
      m("input", {
        type: "checkbox",
        class: "checkbox",
        checked: a.checked,
        onChange: r
      }, null, 40, jf),
      m("div", zf, F(a.label), 1)
    ]));
  }
}), Nn = /* @__PURE__ */ U(Lf, [["__scopeId", "data-v-a1461803"]]), Wf = {
  key: 0,
  class: "computed-sections"
}, Gf = { class: "units-section" }, Hf = { class: "units-section" }, Jf = { class: "units-section" }, qf = { class: "san-status-section" }, Kf = /* @__PURE__ */ C({
  __name: "DeriveSections",
  setup(t) {
    const e = ie();
    function n(i, s, l) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[i][s] = l || void 0);
    }
    function r(i) {
      var s, l;
      return e ? !!((l = (s = e.value.status) == null ? void 0 : s.mental) != null && l[i]) : !1;
    }
    function a(i, s) {
      e && (e.value.status.mental[i] = s);
    }
    const o = te(() => {
      var d;
      if (!e || !e.value.attributes.pow) return "";
      const i = (d = e.value.skillPoints.find(([c]) => c === "克苏鲁神话")) == null ? void 0 : d[1], { p: s = 0, i: l = 0, g: u = 0 } = i || {};
      return `${99 - (i ? s + l + u : 0)}`;
    });
    return (i, s) => k(e) ? (h(), w("div", Wf, [
      b(he, {
        title: "理智值",
        subTitle: "Sanity"
      }, {
        default: V(() => {
          var l, u, p, d;
          return [
            m("div", Gf, [
              b(Be, {
                label: "当前理智",
                modelValue: `${((u = (l = k(e).deriveAttributes) == null ? void 0 : l.sanity) == null ? void 0 : u.now) ?? ""}`,
                "onUpdate:modelValue": s[0] || (s[0] = (c) => n("sanity", "now", c))
              }, null, 8, ["modelValue"]),
              b(Jt),
              b(Be, {
                label: "起始理智",
                modelValue: `${((d = (p = k(e).deriveAttributes) == null ? void 0 : p.sanity) == null ? void 0 : d.start) ?? ""}`,
                "onUpdate:modelValue": s[1] || (s[1] = (c) => n("sanity", "start", c))
              }, null, 8, ["modelValue"]),
              b(Jt),
              b(Be, {
                label: "最大理智",
                modelValue: o.value,
                readonly: ""
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      b(he, {
        title: "生命值",
        subTitle: "HP"
      }, {
        default: V(() => {
          var l, u, p, d;
          return [
            m("div", Hf, [
              b(Be, {
                label: "当前生命",
                modelValue: `${((u = (l = k(e).deriveAttributes) == null ? void 0 : l.hp) == null ? void 0 : u.now) ?? ""}`,
                "onUpdate:modelValue": s[2] || (s[2] = (c) => n("hp", "now", c))
              }, null, 8, ["modelValue"]),
              b(Jt),
              b(Be, {
                label: "最大生命",
                modelValue: `${((d = (p = k(e).deriveAttributes) == null ? void 0 : p.hp) == null ? void 0 : d.start) ?? ""}`,
                "onUpdate:modelValue": s[3] || (s[3] = (c) => n("hp", "start", c))
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      b(he, {
        title: "魔法值",
        subTitle: "MP"
      }, {
        default: V(() => {
          var l, u, p, d;
          return [
            m("div", Jf, [
              b(Be, {
                label: "当前魔法",
                modelValue: `${((u = (l = k(e).deriveAttributes) == null ? void 0 : l.mp) == null ? void 0 : u.now) ?? ""}`,
                "onUpdate:modelValue": s[4] || (s[4] = (c) => n("mp", "now", c))
              }, null, 8, ["modelValue"]),
              b(Jt),
              b(Be, {
                label: "最大魔法",
                modelValue: `${((d = (p = k(e).deriveAttributes) == null ? void 0 : p.mp) == null ? void 0 : d.start) ?? ""}`,
                "onUpdate:modelValue": s[5] || (s[5] = (c) => n("mp", "start", c))
              }, null, 8, ["modelValue"])
            ])
          ];
        }),
        _: 1
      }),
      b(he, {
        title: "精神状态",
        class: "col-0"
      }, {
        default: V(() => [
          m("div", qf, [
            b(Nn, {
              label: "精神固化",
              checked: r("hardened"),
              onCheck: s[6] || (s[6] = (l) => a("hardened", l))
            }, null, 8, ["checked"]),
            b(Nn, {
              label: "永久疯狂",
              checked: r("permanentMadness"),
              onCheck: s[7] || (s[7] = (l) => a("permanentMadness", l))
            }, null, 8, ["checked"]),
            b(Nn, {
              label: "不定期疯狂",
              checked: r("indefiniteMadness"),
              onCheck: s[8] || (s[8] = (l) => a("indefiniteMadness", l))
            }, null, 8, ["checked"])
          ])
        ]),
        _: 1
      })
    ])) : W("", !0);
  }
}), Qf = /* @__PURE__ */ U(Kf, [["__scopeId", "data-v-7aba0d77"]]), mo = (t) => ($e("data-v-ed03bc13"), t = t(), Pe(), t), Zf = {
  key: 0,
  class: "suggestion-content"
}, Xf = /* @__PURE__ */ mo(() => /* @__PURE__ */ m("span", null, "默认本职技能：", -1)), Yf = { class: "multi-skill-text" }, em = /* @__PURE__ */ mo(() => /* @__PURE__ */ m("span", null, "、", -1)), tm = /* @__PURE__ */ C({
  __name: "HintSection",
  setup(t) {
    const e = ro(), n = Re();
    return (r, a) => {
      var o, i;
      return h(), w("div", {
        class: ee(["hint-section", {
          "printing-image": (o = k(n)) == null ? void 0 : o.printing
        }])
      }, [
        (i = k(e)) != null && i.text ? (h(), w("div", Zf, [
          Xf,
          (h(!0), w(G, null, Y(k(e).multiSkillTexts, (s) => (h(), w(G, { key: s }, [
            m("span", Yf, F(s), 1),
            em
          ], 64))), 128)),
          m("span", null, F(k(e).text), 1)
        ])) : W("", !0)
      ], 2);
    };
  }
}), nm = /* @__PURE__ */ U(tm, [["__scopeId", "data-v-ed03bc13"]]), rm = { class: "sox-checkbox" }, am = ["checked"], om = /* @__PURE__ */ C({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = z(n.checked);
    be(
      () => n.checked,
      () => {
        a.value = n.checked;
      }
    );
    function o(i) {
      const s = i.target.checked;
      a.value = s, r("check", s, i), r("change", i);
    }
    return (i, s) => {
      const l = oe("el-icon");
      return h(), w("label", rm, [
        b(l, { size: "0.9em" }, {
          default: V(() => [
            a.value ? (h(), Z(k(qu), { key: 0 })) : W("", !0),
            !a.value && i.xOnFalse ? (h(), Z(k(Iu), { key: 1 })) : W("", !0)
          ]),
          _: 1
        }),
        m("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: a.value,
          onChange: o
        }, null, 40, am)
      ]);
    };
  }
}), kr = /* @__PURE__ */ U(om, [["__scopeId", "data-v-47166167"]]), im = { class: "skill-td-label" }, lm = { class: "skill-td-checkbox-label" }, sm = {
  key: 0,
  class: "child-skill-display"
}, um = { key: 0 }, cm = { class: "child-skill-input-container" }, pm = ["value"], dm = {
  key: 0,
  class: "child-skill-options"
}, fm = ["onClick"], mm = {
  key: 1,
  class: "skill-td-label-comments"
}, ym = /* @__PURE__ */ C({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ie(), a = Ft("viewData"), o = e, i = z(!1), s = te(() => a == null ? void 0 : a.showingChildSkills[n.skillName]), l = te(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(a == null ? void 0 : a.showingChildSkills.母语) || [],
      ...(a == null ? void 0 : a.showingChildSkills.外语) || []
    ] : s.value), u = te(() => !r || !a ? !1 : r.value.proSkills.some((f) => {
      var g;
      if (typeof f == "string")
        return f === n.skillName;
      const [v, y, _] = f;
      return v === n.skillName && _ === ((g = n.childSkillData) == null ? void 0 : g.place);
    }));
    function p(f) {
      if (!(!n.childSkillData || !s.value)) {
        if (u.value && r) {
          const v = r.value.proSkills.find(([y, _, g]) => {
            var P;
            return y === n.skillName && g === ((P = n.childSkillData) == null ? void 0 : P.place);
          });
          v && typeof v != "string" && (v[1] = f);
        }
        s.value[n.childSkillData.place] = f;
      }
    }
    function d(f) {
      p(f.name), o("selectChildSkill", f), i.value = !1;
    }
    function c(f) {
      if (r)
        if (f) {
          let v = n.skillName;
          n.childSkillData && (v = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(v);
        } else
          r.value.proSkills = r.value.proSkills.filter((v) => {
            if (!n.childSkillData) return v !== n.skillName;
            const [y, _, g] = v;
            return y !== n.skillName || g !== n.childSkillData.place;
          });
    }
    return (f, v) => {
      var y, _;
      return h(), w("div", im, [
        m("label", lm, [
          b(kr, {
            checked: u.value,
            onCheck: c
          }, null, 8, ["checked"])
        ]),
        m("div", null, F(f.skillName), 1),
        f.childSkillData ? (h(), w("div", sm, [
          f.skillName ? (h(), w("div", um, ":")) : W("", !0),
          Ye((h(), w("div", cm, [
            m("input", {
              type: "text",
              class: "child-skill-input",
              value: (y = s.value) == null ? void 0 : y[f.childSkillData.place],
              onInput: v[0] || (v[0] = (g) => p(g.target.value)),
              onFocus: v[1] || (v[1] = (g) => i.value = !0)
            }, null, 40, pm),
            (_ = f.childSkillData.list) != null && _.length ? Ye((h(), w("div", dm, [
              (h(!0), w(G, null, Y(f.childSkillData.list, (g) => {
                var P;
                return h(), w("div", {
                  key: g.name,
                  class: ee(["child-skill-option", {
                    "child-skill-option-existed": (P = l.value) == null ? void 0 : P.includes(g.name)
                  }]),
                  onClick: (S) => d(g)
                }, F(g.name), 11, fm);
              }), 128))
            ], 512)), [
              [Sa, i.value]
            ]) : W("", !0)
          ])), [
            [k(wr), () => i.value = !1]
          ])
        ])) : W("", !0),
        f.comments ? (h(), w("div", mm, F(f.comments), 1)) : W("", !0)
      ]);
    };
  }
}), hm = /* @__PURE__ */ U(ym, [["__scopeId", "data-v-aae04eeb"]]), vm = ["value"], gm = /* @__PURE__ */ C({
  __name: "BaseTdInput",
  props: {
    value: { default: "" }
  },
  emits: ["input", "focus"],
  setup(t, { emit: e }) {
    const n = e;
    function r(a) {
      a.target.select(), n("focus", a);
    }
    return (a, o) => (h(), w("input", {
      type: "text",
      class: "base-td-input",
      value: a.value,
      onInput: o[0] || (o[0] = (i) => a.$emit("input", i.target.value)),
      onFocus: r
    }, null, 40, vm));
  }
}), We = /* @__PURE__ */ U(gm, [["__scopeId", "data-v-7ab1d781"]]), bm = { class: "skill-td-input" }, _m = /* @__PURE__ */ C({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (h(), w("div", bm, [
      e.checkable ? (h(), Z(kr, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : W("", !0),
      b(We, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), qt = /* @__PURE__ */ U(_m, [["__scopeId", "data-v-349e4cf4"]]), wm = (t) => ($e("data-v-42c61a56"), t = t(), Pe(), t), km = { class: "skill-table" }, Sm = /* @__PURE__ */ wm(() => /* @__PURE__ */ m("thead", null, [
  /* @__PURE__ */ m("tr", null, [
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep th-skill" }, [
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
        /* @__PURE__ */ se(" 技能 ")
      ])
    ]),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "基础%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, "职业%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "兴趣%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, [
      /* @__PURE__ */ m("div", { class: "th-grow" }, "成长%")
    ]),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "成功率%")
  ])
], -1)), Am = ["rowspan"], $m = {
  key: 0,
  class: "init-placeholder"
}, Pm = { class: "init-placeholder-content" }, Em = { key: 1 }, xm = {
  key: 0,
  class: "total-separation"
}, Im = { key: 1 }, Dm = /* @__PURE__ */ C({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ie(), r = yn(), a = Re();
    function o(p, d) {
      return p.reduce((f, v) => {
        const y = v.groupSkills.reduce(
          (_, g, P) => {
            const S = v.groupName === "特殊";
            let $ = g.init;
            n && g.name in ln && ($ = ln[g.name](n.value));
            const D = S || P === 0, A = g.name, E = s(A), I = (E == null ? void 0 : E[1]) || {}, [X, R] = (d == null ? void 0 : d.wealth) ?? [-1, -1], H = A === "信用评级" && X >= 0 && R >= 0 ? `(${X}~${R})` : "", j = u(I, $);
            let B = {
              key: g.name,
              skillName: g.name,
              skillKey: g.name,
              comments: H,
              init: $,
              initPlaceholder: g.initPlaceholder,
              points: I,
              total: j,
              totalSeparation: [j, ~~(j / 2), ~~(j / 5)],
              showTotal: j > 0 && (j !== $ || j === I.b),
              ...D ? {
                isGroupStart: D,
                groupName: v.groupName,
                groupSize: v.groupSkills.length
              } : {},
              ...S ? { isSpecialGroup: S, groupSize: 1 } : {}
            }, O = [..._], T = [B];
            if (g.group) {
              const J = g.group.show.length, L = O.find((x) => x.isGroupStart) || B;
              L.groupSize += J - 1, T = g.group.show.map((x, M) => {
                var Ue, Oe, _e;
                const N = ((Ue = r == null ? void 0 : r.showingChildSkills[g.name]) == null ? void 0 : Ue[M]) ?? x, ne = (Oe = g.group) == null ? void 0 : Oe.skills.find(({ name: nt }) => nt === N);
                let me = (ne == null ? void 0 : ne.init) ?? B.init;
                const we = [g.name, N, M], ce = s(we), Fe = (ce == null ? void 0 : ce[1]) || {}, ke = u(Fe, me);
                return n && !g.name && (me = Fe.b || 0), {
                  ...B,
                  // group info
                  isGroupStart: M ? !1 : B.isGroupStart,
                  // skill info
                  key: `${g.name}:_:${M}`,
                  skillKey: we,
                  init: me,
                  points: Fe,
                  total: ke,
                  totalSeparation: [ke, ~~(ke / 2), ~~(ke / 5)],
                  showTotal: ke > 0 && (ke !== me || ke === Fe.b),
                  // child skill info
                  childSkillData: {
                    name: N,
                    place: M,
                    list: (_e = g.group) == null ? void 0 : _e.skills
                  }
                };
              });
            }
            return [...O, ...T];
          },
          []
        );
        return [...f, ...y];
      }, []);
    }
    const i = te(() => o(e.data, e.suggestion));
    function s(p) {
      if (n)
        return n.value.skillPoints.find((d) => {
          const [c] = d;
          if (typeof p == "string")
            return p === c;
          const [f, v, y] = c, [_, g, P] = p;
          return f === _ && y === P;
        });
    }
    function l(p, d, c) {
      if (!n) return;
      let f = s(p);
      f || (f = [typeof p == "string" ? p : [...p], {}], n.value.skillPoints.push(f));
      const v = f[1];
      if (typeof c == "boolean")
        v.c = c;
      else {
        const y = d;
        c ? v[y] = Number(c) : delete v[y];
      }
    }
    function u(p, d) {
      const { b: c, p: f = 0, i: v = 0, g: y = 0 } = p;
      return (c ?? d) + Number(f) + Number(v) + Number(y);
    }
    return (p, d) => (h(), w("table", km, [
      Sm,
      m("tbody", null, [
        (h(!0), w(G, null, Y(i.value, (c, f) => {
          var v;
          return h(), w("tr", {
            key: c.skillName
          }, [
            c.isGroupStart ? (h(), w("td", {
              key: 0,
              rowspan: c.groupSize,
              class: ee(["skill-td td-group-name", {
                "td-group-name-visible": !c.isSpecialGroup,
                "td-color-1": c.isSpecialGroup && f % 2,
                "td-color-2": c.isSpecialGroup && (f + 1) % 2
              }])
            }, F(c.isSpecialGroup ? "" : c.groupName), 11, Am)) : W("", !0),
            m("td", {
              class: ee(["skill-td td-skill-name", {
                "td-skill-name-special": c.isSpecialGroup,
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              b(hm, {
                skillName: c.skillName,
                comments: c.comments,
                childSkillData: c.childSkillData
              }, null, 8, ["skillName", "comments", "childSkillData"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              !c.init && c.initPlaceholder ? (h(), w("div", $m, [
                m("span", Pm, F(c.initPlaceholder), 1)
              ])) : c.groupName !== "其它" ? (h(), w("span", Em, F(c.init), 1)) : (h(), Z(qt, {
                key: 2,
                value: `${c.points.b ?? ""}`,
                onInput: (y) => l(c.skillKey, "b", y)
              }, null, 8, ["value", "onInput"]))
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              b(qt, {
                value: `${c.points.p ?? ""}`,
                onInput: (y) => l(c.skillKey, "p", y)
              }, null, 8, ["value", "onInput"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              b(qt, {
                value: `${c.points.i ?? ""}`,
                onInput: (y) => l(c.skillKey, "i", y)
              }, null, 8, ["value", "onInput"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              b(qt, {
                checkable: !0,
                checked: c.points.c,
                value: `${c.points.g ?? ""}`,
                onInput: (y) => l(c.skillKey, "g", y),
                onCheck: (y) => l(c.skillKey, "c", y)
              }, null, 8, ["checked", "value", "onInput", "onCheck"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              (v = k(a)) != null && v.showTotalSeparation ? (h(), w("span", xm, [
                (h(!0), w(G, null, Y(c.totalSeparation, (y, _) => (h(), w("span", {
                  key: _,
                  class: "total-sep"
                }, F(y), 1))), 128))
              ])) : c.showTotal ? (h(), w("span", Im, F(c.total), 1)) : W("", !0)
            ], 2)
          ]);
        }), 128))
      ])
    ]));
  }
}), ha = /* @__PURE__ */ U(Dm, [["__scopeId", "data-v-42c61a56"]]), Sr = (t) => ($e("data-v-7b675b2e"), t = t(), Pe(), t), Rm = { class: "header" }, Fm = { class: "header-left points-container" }, Cm = { class: "point-container" }, Om = {
  key: 0,
  class: "point-rest"
}, Mm = { class: "point-container" }, Tm = {
  key: 0,
  class: "point-rest"
}, Vm = /* @__PURE__ */ Sr(() => /* @__PURE__ */ m("h1", { class: "heading" }, [
  /* @__PURE__ */ m("span", { class: "title" }, "技能表"),
  /* @__PURE__ */ m("span", { class: "subtitle" }, "Skill")
], -1)), Nm = { class: "header-right points-container" }, Um = /* @__PURE__ */ Sr(() => /* @__PURE__ */ m("div", null, "技能成功率上限", -1)), Bm = { class: "point-container" }, jm = { class: "point-container" }, zm = { class: "skill-section-body" }, Lm = /* @__PURE__ */ Sr(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), va = 6, Wm = /* @__PURE__ */ C({
  __name: "SkillSection",
  setup(t) {
    const e = ie(), n = ro(), r = Re(), a = yn();
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
    const i = De(o()), s = te(() => {
      let d = 0, c = 0;
      return e == null || e.value.skillPoints.forEach(([f, v]) => {
        d += v.p || 0, c += v.i || 0;
      }), {
        proPoint: i.pro.point - d,
        interestPoint: i.interest.point - c
      };
    });
    function l(d, c = "") {
      const f = i[d];
      if (f.str = c, f.str) {
        const v = Number(f.str);
        f.point = Number.isNaN(v) ? 0 : v;
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
    return be(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: d, attributes: c }) => {
        const { point: f } = Ka(d, c), v = e == null ? void 0 : e.value.pointValues.pro;
        f && l("pro", v ?? `${f > 0 ? f : ""}`);
        const y = c == null ? void 0 : c.int, _ = y ? `${y * 2}` : "", g = e == null ? void 0 : e.value.pointValues.interest;
        _ && l("interest", g ?? _);
      },
      { deep: !0 }
    ), be(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: d, pro: c, interest: f }, { pointValues: v, pro: y, interest: _ }) => {
        if (d !== v) {
          typeof c < "u" && l("pro", c), typeof f < "u" && l("interest", f);
          return;
        }
        c !== y && l("pro", c), f !== _ && l("interest", f);
      },
      { deep: !0 }
    ), (d, c) => {
      var f;
      return h(), Z(he, {
        class: ee(["skill-section", {
          "printing-image": (f = k(r)) == null ? void 0 : f.printing
        }])
      }, {
        header: V(() => {
          var v, y, _;
          return [
            m("div", Rm, [
              m("div", Fm, [
                m("div", Cm, [
                  b(ae, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (v = k(e)) != null && v.job ? "问KP" : "",
                    char: 3,
                    modelValue: i.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (g) => u("pro", g))
                  }, null, 8, ["placeholder", "modelValue"]),
                  i.pro.point > 0 ? (h(), w("div", Om, " 剩余: " + F(s.value.proPoint), 1)) : W("", !0)
                ]),
                m("div", Mm, [
                  b(ae, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: i.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (g) => u("interest", g))
                  }, null, 8, ["modelValue"]),
                  i.interest.point > 0 ? (h(), w("div", Tm, " 剩余: " + F(s.value.interestPoint), 1)) : W("", !0)
                ])
              ]),
              Vm,
              m("div", Nm, [
                Um,
                m("div", Bm, [
                  b(ae, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((y = k(a)) == null ? void 0 : y.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": c[2] || (c[2] = (g) => p("pro", g))
                  }, null, 8, ["modelValue"])
                ]),
                m("div", jm, [
                  b(ae, {
                    class: "point-writer",
                    label: "其它",
                    char: 2,
                    modelValue: `${((_ = k(a)) == null ? void 0 : _.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": c[3] || (c[3] = (g) => p("interest", g))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: V(() => [
          m("div", zm, [
            b(ha, {
              data: k(Qn).slice(0, va),
              suggestion: k(n)
            }, null, 8, ["data", "suggestion"]),
            Lm,
            b(ha, {
              data: k(Qn).slice(va)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), Gm = /* @__PURE__ */ U(Wm, [["__scopeId", "data-v-7b675b2e"]]), Hm = (t) => ($e("data-v-a1be0140"), t = t(), Pe(), t), Jm = ["value"], qm = /* @__PURE__ */ Hm(() => /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, null, -1)), Km = ["value"], Qm = /* @__PURE__ */ C({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {}
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (h(), w("select", {
      class: "base-td-select",
      value: e.value,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      qm,
      (h(!0), w(G, null, Y(e.options, (r) => (h(), w("option", {
        key: r.value,
        value: r.value
      }, F(r.label), 9, Km))), 128))
    ], 40, Jm));
  }
}), Zm = /* @__PURE__ */ U(Qm, [["__scopeId", "data-v-a1be0140"]]);
function Xm(t = !1) {
  const e = z(t);
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
const Ym = { class: "weapon-section-row" }, ey = { class: "weapon-td-name" }, ty = { class: "weapon-selector" }, ny = { class: "show-in-print" }, ry = {
  key: 0,
  class: "wp-point-placeholder"
}, ay = /* @__PURE__ */ C({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {}
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ie();
    function r(y, _) {
      const g = y % 2 ? 0 : 1, P = _ % 2 ? 0 : 1;
      return `td-color-${g + P}`;
    }
    function a(y) {
      var $;
      const [_, g] = y.split(")")[0].split("("), P = (($ = s.value.find((D) => D.name === y)) == null ? void 0 : $.init) || 0;
      let S = 0;
      return n == null || n.value.skillPoints.some((D) => {
        const A = (
          // 投掷
          !g && _ === D[0] || // 格斗 or 射击
          g && typeof D[0] != "string" && _ === D[0][0] && g === D[0][1]
        );
        if (A) {
          const { p: E = 0, i: I = 0, g: X = 0 } = D[1];
          S = E + I + X;
        }
        return A;
      }), {
        initPoint: P,
        result: S ? `${P + S}` : ""
      };
    }
    const o = te(() => e.weapon || Kn()), i = te(() => a(o.value.skill)), s = te(() => Qn.find(({ groupName: _ }) => _ === "战斗").groupSkills.filter(({ name: _ }) => _ !== "闪避").reduce((_, g) => {
      const { name: P, init: S, group: $ } = g, D = $ ? $.skills.map((A) => ({
        name: `${P}(${A.name})`,
        init: A.init || S
      })) : [{ name: P, init: S }];
      return [..._, ...D];
    }, [])), l = te(() => [
      { value: "", label: "" },
      // 添加空选项
      ...s.value.map(({ name: y }) => ({
        value: y,
        label: y
      }))
    ]), {
      value: u,
      setTrue: p,
      setFalse: d
    } = Xm(), c = te(() => Ha.map(([y, _]) => ({
      key: y,
      label: _,
      children: Ga[y].map((g) => ({
        key: g,
        label: g
      }))
    })));
    function f(y) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = Kn());
      const _ = n.value.weapons[e.index];
      y.hasOwnProperty("skill") && y.skill === "" && (y = {
        ...y,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(_, y);
    }
    function v(y) {
      const _ = hr.find(($) => $.name === y);
      if (!_) return;
      const { price: g, time: P, ...S } = _;
      f({
        ...S
      }), d();
    }
    return (y, _) => (h(), w("div", Ym, [
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 0)]: !0
        }])
      }, [
        Ye((h(), w("div", ey, [
          b(We, {
            value: o.value.name,
            onInput: _[0] || (_[0] = (g) => f({ name: g })),
            onFocus: _[1] || (_[1] = () => k(p)())
          }, null, 8, ["value"]),
          b(tr, { name: "slide-down" }, {
            default: V(() => [
              Ye(m("div", ty, [
                b(fo, {
                  tree: c.value,
                  onSelect: _[2] || (_[2] = (g) => v(g.label))
                }, null, 8, ["tree"])
              ], 512), [
                [Sa, k(u)]
              ])
            ]),
            _: 1
          })
        ])), [
          [k(wr), k(d)]
        ])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 1)]: !0
        }])
      }, [
        m("span", ny, F(o.value.skill), 1),
        b(Zm, {
          class: "hide-in-print",
          value: o.value.skill,
          options: l.value,
          onChange: _[3] || (_[3] = (g) => f({ skill: g }))
        }, null, 8, ["value", "options"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 2)]: !0
        }])
      }, [
        se(F(i.value.result) + " ", 1),
        !i.value.result && i.value.initPoint ? (h(), w("span", ry, F(i.value.initPoint), 1)) : W("", !0)
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 3)]: !0
        }])
      }, [
        b(We, {
          value: o.value.dam,
          onInput: _[4] || (_[4] = (g) => f({ dam: g }))
        }, null, 8, ["value"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 4)]: !0
        }])
      }, [
        b(We, {
          value: o.value.range,
          onInput: _[5] || (_[5] = (g) => f({ range: g }))
        }, null, 8, ["value"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 5)]: !0
        }])
      }, [
        b(kr, {
          xOnFalse: !!o.value.name,
          checked: !!o.value.tho,
          onCheck: _[6] || (_[6] = (g) => f({ tho: +g }))
        }, null, 8, ["xOnFalse", "checked"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 6)]: !0
        }])
      }, [
        b(We, {
          value: o.value.round,
          onInput: _[7] || (_[7] = (g) => f({ round: g }))
        }, null, 8, ["value"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 7)]: !0
        }])
      }, [
        b(We, {
          value: o.value.num,
          onInput: _[8] || (_[8] = (g) => f({ num: g }))
        }, null, 8, ["value"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 8)]: !0
        }])
      }, [
        b(We, {
          value: o.value.err,
          onInput: _[9] || (_[9] = (g) => f({ err: g }))
        }, null, 8, ["value"])
      ], 2)
    ]));
  }
}), oy = /* @__PURE__ */ U(ay, [["__scopeId", "data-v-173b51cd"]]), iy = (t) => ($e("data-v-cb27f44e"), t = t(), Pe(), t), ly = { class: "weapon-section-body" }, sy = /* @__PURE__ */ iy(() => /* @__PURE__ */ m("div", { class: "weapon-section-row" }, [
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "武器名称"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "使用技能"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "%"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "伤害"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "射程"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "贯穿"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "次数"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "装弹量"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "故障")
], -1)), uy = /* @__PURE__ */ C({
  __name: "WeaponSection",
  setup(t) {
    const e = ie(), n = te(() => Array.from({ length: 5 }).map((r, a) => (e == null ? void 0 : e.value.weapons[a]) || void 0));
    return (r, a) => (h(), Z(he, {
      title: "武器",
      subTitle: "Weapons"
    }, {
      default: V(() => [
        m("div", ly, [
          sy,
          (h(!0), w(G, null, Y(n.value, (o, i) => (h(), Z(oy, {
            class: "weapon-section-row",
            key: i,
            index: i,
            weapon: o
          }, null, 8, ["index", "weapon"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), cy = /* @__PURE__ */ U(uy, [["__scopeId", "data-v-cb27f44e"]]), py = {
  key: 0,
  class: "battle-section-body"
}, dy = /* @__PURE__ */ C({
  __name: "BattleSection",
  setup(t) {
    const e = ie();
    return be(
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
    ), (n, r) => (h(), Z(he, {
      title: "战斗",
      subTitle: "Combat"
    }, {
      default: V(() => [
        k(e) ? (h(), w("div", py, [
          b(ae, {
            label: "伤害加值",
            hint: "DB",
            modelValue: k(e).battleAttributes.db,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).battleAttributes.db = a),
            char: 4
          }, null, 8, ["modelValue"]),
          b(ae, {
            label: "体格",
            modelValue: k(e).battleAttributes.size,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => k(e).battleAttributes.size = a),
            char: 4
          }, null, 8, ["modelValue"]),
          b(ae, {
            label: "移动力",
            modelValue: k(e).battleAttributes.mov,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => k(e).battleAttributes.mov = a),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : W("", !0)
      ]),
      _: 1
    }));
  }
}), fy = /* @__PURE__ */ U(dy, [["__scopeId", "data-v-d4bc8367"]]), my = { class: "section-row" }, yy = { class: "section-row" }, hy = /* @__PURE__ */ C({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (h(), Z(po, { setRef: e.setRef }, {
      default: V(() => [
        m("div", my, [
          b(mf),
          b(Ef),
          b(If)
        ]),
        b(Qf),
        b(nm),
        b(Gm),
        m("div", yy, [
          b(cy, { class: "col-0" }),
          b(fy)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ga = /* @__PURE__ */ U(hy, [["__scopeId", "data-v-2a617cf3"]]), yo = (t) => ($e("data-v-c5341c4d"), t = t(), Pe(), t), vy = { class: "label" }, gy = ["rows", "placeholder", "value", "maxlength", "readonly"], by = /* @__PURE__ */ yo(() => /* @__PURE__ */ m("div", { class: "line-row" }, null, -1)), _y = /* @__PURE__ */ yo(() => /* @__PURE__ */ m("div", { class: "line" }, null, -1)), wy = /* @__PURE__ */ C({
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
    const n = t, r = e, a = Re(), o = te(() => {
      const l = n.label.length, u = n.size === "small" ? l / 0.8 : l;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), i = z(null);
    function s(l = !1) {
      const u = i.value;
      u && ht(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), l || s(!0));
      });
    }
    return be(
      () => [n.modelValue, a == null ? void 0 : a.printing],
      () => s()
    ), ko(() => {
      s();
    }), (l, u) => {
      var p, d;
      return h(), w("div", {
        class: ee(["writable-area", {
          "printing-image": (p = k(a)) == null ? void 0 : p.printing
        }])
      }, [
        m("div", vy, F(l.label), 1),
        m("textarea", {
          class: ee(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: i,
          style: jn(o.value),
          rows: l.rows,
          placeholder: (d = k(a)) != null && d.printing ? "" : l.placeholder,
          value: l.modelValue,
          maxlength: l.maxlength,
          readonly: l.readonly,
          onInput: u[0] || (u[0] = (c) => l.$emit("update:modelValue", c.target.value))
        }, null, 46, gy),
        m("div", {
          class: ee(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          by,
          (h(!0), w(G, null, Y(l.rows, (c) => (h(), w("div", {
            class: "line-row",
            key: c
          }, [
            c === 1 && l.label ? (h(), w("div", {
              key: 0,
              class: "line-row-label",
              style: jn({
                width: `${l.label.length}em`
              })
            }, null, 4)) : W("", !0),
            _y
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), Ae = /* @__PURE__ */ U(wy, [["__scopeId", "data-v-c5341c4d"]]), ky = { class: "story-section-body" }, Sy = { class: "story-section-column col-2" }, Ay = { class: "story-section-column col-3" }, Un = 3, Bn = 4, $y = /* @__PURE__ */ C({
  __name: "StorySection",
  setup(t) {
    const e = ie(), n = Re(), r = De([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "特质", fieldName: "trait" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" }
    ]), a = De([]), o = De({ fieldName: "desc", size: "base" }), i = te(() => {
      const u = r.length - a.length, p = u * ~~(o.size === "base" ? Un : Bn), d = o.size === "base" ? 0 : ~~(u / 6);
      return p + d;
    }), s = z();
    function l(u) {
      var p;
      (p = s.value) == null || p.close(), n != null && n.printing || (u.size === "small" ? s.value = le.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : s.value = le.warning("检测到内容较多，已为您调整文字为小尺寸")), u.size = "small";
    }
    return be(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...r, ...a, o].forEach((u) => {
          u.fieldName && !(e != null && e.value.stories[u.fieldName]) && (u.size = "base");
        });
      },
      {
        deep: !0
      }
    ), (u, p) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "背景故事",
      subTitle: "Story"
    }, {
      default: V(() => [
        m("div", ky, [
          m("div", Sy, [
            (h(!0), w(G, null, Y(r, (d) => (h(), Z(Ae, {
              key: d.fieldName,
              label: d.label,
              modelValue: k(e).stories[d.fieldName],
              "onUpdate:modelValue": (c) => k(e).stories[d.fieldName] = c,
              rows: d.size === "small" ? Bn : Un,
              size: d.size,
              onOversize: () => l(d)
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))), 128))
          ]),
          m("div", Ay, [
            (h(!0), w(G, null, Y(a, (d) => (h(), Z(Ae, {
              key: d.fieldName,
              label: d.label,
              modelValue: k(e).stories[d.fieldName],
              "onUpdate:modelValue": (c) => k(e).stories[d.fieldName] = c,
              rows: d.size === "small" ? Bn : Un,
              size: d.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            b(Ae, {
              label: "个人介绍",
              modelValue: k(e).stories.desc,
              "onUpdate:modelValue": p[0] || (p[0] = (d) => k(e).stories.desc = d),
              rows: i.value,
              size: o.size,
              onOversize: p[1] || (p[1] = () => l(o))
            }, null, 8, ["modelValue", "rows", "size"])
          ])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Py = /* @__PURE__ */ U($y, [["__scopeId", "data-v-8aa0af46"]]), Ey = { class: "section-body" }, xy = /* @__PURE__ */ C({
  __name: "AssetsSection",
  setup(t) {
    const e = ie();
    return (n, r) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "资产",
      subTitle: "Cash & Assets"
    }, {
      default: V(() => [
        m("div", Ey, [
          b(Ae, {
            label: "货币",
            rows: 1,
            maxlength: 15,
            modelValue: k(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).assets.currency = a)
          }, null, 8, ["modelValue"]),
          b(Ae, {
            label: "资产",
            rows: 9,
            maxlength: 17 * 9 - 2,
            modelValue: k(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => k(e).assets.assets = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Iy = /* @__PURE__ */ U(xy, [["__scopeId", "data-v-764491e3"]]), Dy = { class: "section-body" }, Ry = /* @__PURE__ */ C({
  __name: "ItemSection",
  setup(t) {
    const e = ie();
    return (n, r) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "物品与装备",
      subTitle: "Possessions"
    }, {
      default: V(() => [
        m("div", Dy, [
          b(Ae, {
            label: "",
            rows: 12,
            maxlength: 18 * 12,
            modelValue: k(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).assets.items = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Fy = /* @__PURE__ */ U(Ry, [["__scopeId", "data-v-98403096"]]), Cy = { class: "section-body" }, Oy = /* @__PURE__ */ C({
  __name: "MythosSection",
  setup(t) {
    const e = ie();
    return (n, r) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "克苏鲁神话",
      subTitle: "Cthulu Mythos"
    }, {
      default: V(() => [
        m("div", Cy, [
          b(Ae, {
            label: "魔法物品与典籍",
            rows: 4,
            maxlength: 18 * 4 - 8,
            modelValue: k(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).assets.magicItems = a)
          }, null, 8, ["modelValue"]),
          b(Ae, {
            label: "法术",
            rows: 4,
            maxlength: 18 * 4 - 3,
            modelValue: k(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => k(e).assets.magics = a)
          }, null, 8, ["modelValue"]),
          b(Ae, {
            label: "第三类接触",
            rows: 4,
            maxlength: 18 * 4 - 6,
            modelValue: k(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => k(e).assets.touches = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), My = /* @__PURE__ */ U(Oy, [["__scopeId", "data-v-039311e6"]]), Ty = { class: "section-body" }, Vy = /* @__PURE__ */ C({
  __name: "FriendSection",
  setup(t) {
    const e = ie();
    return (n, r) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "人物关系",
      subTitle: "Relationships"
    }, {
      default: V(() => [
        m("div", Ty, [
          b(Ae, {
            label: "",
            rows: 11,
            modelValue: k(e).friends,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).friends = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Ny = /* @__PURE__ */ U(Vy, [["__scopeId", "data-v-5104331e"]]), Uy = { class: "section-body" }, By = /* @__PURE__ */ C({
  __name: "ExperienceSection",
  setup(t) {
    const e = ie();
    return (n, r) => k(e) ? (h(), Z(he, {
      key: 0,
      title: "经历过的模组",
      subTitle: "Experienced Scenarios"
    }, {
      default: V(() => [
        m("div", Uy, [
          b(Ae, {
            label: "",
            rows: 11,
            modelValue: k(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => k(e).experiencedModules = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), jy = /* @__PURE__ */ U(By, [["__scopeId", "data-v-0ebb0cdc"]]), zy = { class: "section-row" }, Ly = { class: "section-row col-2" }, Wy = { class: "section-row" }, Gy = /* @__PURE__ */ C({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (h(), Z(po, { setRef: e.setRef }, {
      default: V(() => [
        b(Py),
        m("div", zy, [
          m("div", Ly, [
            b(Fy, { class: "col-0" }),
            b(Iy, { class: "col-0" })
          ]),
          b(My, { class: "col-1" })
        ]),
        m("div", Wy, [
          b(Ny, { class: "col-2" }),
          b(jy, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ba = /* @__PURE__ */ U(Gy, [["__scopeId", "data-v-6e6d2d4a"]]), Hy = C({
  name: "FileList",
  props: {
    processText: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = z([]), n = z(null), r = () => {
      var i;
      (i = n.value) == null || i.click(), console.log("fileInput.value", n.value);
    }, a = (i) => {
      const s = i.target;
      if (s && s.files) {
        const l = Array.from(s.files);
        e.value = l.filter((u) => u.name.endsWith(".txt"));
      }
    }, o = (i) => {
      const s = new FileReader();
      s.onload = (l) => {
        var p;
        const u = (p = l.target) == null ? void 0 : p.result;
        console.log("文件内容读取完成，正在处理..."), t.processText(u);
      }, s.readAsText(i);
    };
    return _a(() => {
      r();
    }), {
      txtFiles: e,
      handleFileSelect: a,
      readFile: o,
      triggerFileSelect: r
    };
  }
}), Jy = { class: "file-selector-container" }, qy = ["onClick"];
function Ky(t, e, n, r, a, o) {
  return h(), w("div", Jy, [
    m("input", {
      type: "file",
      webkitdirectory: "",
      directory: "",
      multiple: "",
      onChange: e[0] || (e[0] = (...i) => t.handleFileSelect && t.handleFileSelect(...i))
    }, null, 32),
    m("ul", null, [
      (h(!0), w(G, null, Y(t.txtFiles, (i) => (h(), w("li", {
        key: i.name,
        onClick: (s) => t.readFile(i)
      }, [
        m("div", null, F(i.name.split(".")[0]), 1)
      ], 8, qy))), 128))
    ])
  ]);
}
const Qy = /* @__PURE__ */ U(Hy, [["render", Ky], ["__scopeId", "data-v-0dd05264"]]), Zy = { class: "page theme-dark" }, Xy = { class: "papers-animation-container papers-editing web-only" }, Yy = { class: "sticky-footer web-only" }, eh = /* @__PURE__ */ C({
  __name: "AppView",
  setup(t) {
    const e = Rs.parse(location.search.slice(1)), n = z(Zt()), r = eo(), a = De(Ns(e)), o = De({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || r.getItem("showTotalSeparation") || !1
    }), i = z(ma);
    be(
      () => o.showTotalSeparation,
      (f) => {
        r.setItem("showTotalSeparation", f);
      }
    ), Bs(n);
    const s = Js(n, {
      viewData: a,
      pageData: o
    });
    Bt("pc", n), Bt("viewData", a), Bt("pageData", o), Bt("suggestion", s);
    const l = De({}), u = (f) => {
      f.preventDefault();
    }, p = (f) => {
      if (f.preventDefault(), !f.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const v = f.dataTransfer.files;
      if (v.length > 0) {
        const y = v[0];
        if (y.type === "text/plain") {
          const _ = new FileReader();
          _.onload = (g) => {
            const P = g.target.result;
            d(P);
          }, _.readAsText(y);
        } else
          console.error("不支持的文件类型");
      }
    }, d = (f) => {
      le.success("导入卡数据中"), i.value && (i.value.inData = f, i.value.applyInData(), i.value.inData = "");
    }, c = window.innerWidth > window.innerHeight;
    return (f, v) => (h(), w(G, null, [
      m("div", null, [
        c ? (h(), Z(Qy, {
          key: 0,
          processText: d
        })) : W("", !0)
      ]),
      m("main", Zy, [
        m("div", {
          class: "paper-container theme-light",
          onDrop: p,
          onDragover: So(u, ["prevent"])
        }, [
          m("div", Xy, [
            b(tr, { name: "swipe-paper" }, {
              default: V(() => [
                (h(), Z(Ao, null, [
                  o.paperInFront ? (h(), Z(ga, { key: 0 })) : (h(), Z(ba, { key: 1 }))
                ], 1024))
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: ee(["papers-animation-container papers-printing", {
              "papers-printing-active": o.printing
            }])
          }, [
            b(ga, {
              setRef: (y) => {
                l.front = y;
              }
            }, null, 8, ["setRef"]),
            b(ba, {
              setRef: (y) => {
                l.back = y;
              }
            }, null, 8, ["setRef"])
          ], 2)
        ], 32),
        m("div", Yy, [
          b(ma, {
            ref_key: "controlSectionRef",
            ref: i,
            paperEls: l,
            onSwitchPaper: v[0] || (v[0] = () => o.paperInFront = !o.paperInFront)
          }, null, 8, ["paperEls"])
        ])
      ])
    ], 64));
  }
}), rh = /* @__PURE__ */ U(eh, [["__scopeId", "data-v-fd2e3751"]]);
export {
  rh as default
};
