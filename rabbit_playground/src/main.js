class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FP311moonbitlang4core7builtin12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
Result$Err$0$.prototype.$name = "Err";
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
Result$Ok$0$.prototype.$name = "Ok";
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 3;
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$name = "moonbitlang/core/strconv.StrConvError.StrConvError";
function Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$tag = 2;
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$name = "moonbitlang/core/builtin.Failure.Failure";
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds = { $tag: 1, $name: "moonbitlang/core/builtin.CreatingViewError.IndexOutOfBounds" };
const Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex = { $tag: 0, $name: "moonbitlang/core/builtin.CreatingViewError.InvalidIndex" };
const _M0FP311moonbitlang4core7builtin19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
Result$Err$1$.prototype.$name = "Err";
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
Result$Ok$1$.prototype.$name = "Ok";
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
Result$Err$2$.prototype.$name = "Err";
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
Result$Ok$2$.prototype.$name = "Ok";
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
Result$Err$3$.prototype.$name = "Err";
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
Result$Ok$3$.prototype.$name = "Ok";
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
Result$Err$4$.prototype.$name = "Err";
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
Result$Ok$4$.prototype.$name = "Ok";
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
Result$Err$5$.prototype.$name = "Err";
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
Result$Ok$5$.prototype.$name = "Ok";
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
Result$Err$6$.prototype.$name = "Err";
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
Result$Ok$6$.prototype.$name = "Ok";
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MP311moonbitlang4core7builtin7JSArray4push = (arr, val) => { arr.push(val); };
const _M0FP311moonbitlang4core7builtin23try__init__wasm__helper = function() {
  try {
    return new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {
    return undefined;
  }
};
const _M0MP311moonbitlang4core7builtin7MyInt6411div__bigint = (a, b) => {
  const aVal = (BigInt(a.hi) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MP311moonbitlang4core7builtin7MyInt647compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
Result$Err$7$.prototype.$name = "Err";
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
Result$Ok$7$.prototype.$name = "Ok";
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
Result$Err$8$.prototype.$name = "Err";
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
Result$Ok$8$.prototype.$name = "Ok";
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
Result$Err$9$.prototype.$name = "Err";
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
Result$Ok$9$.prototype.$name = "Ok";
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
Result$Err$10$.prototype.$name = "Err";
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
Result$Ok$10$.prototype.$name = "Ok";
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http = { $tag: 0, $name: "Http" };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https = { $tag: 1, $name: "Https" };
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$name = "Other";
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
Result$Err$11$.prototype.$name = "Err";
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
Result$Ok$11$.prototype.$name = "Ok";
const _M0MP36rami3l8js_2dffi2js5Value8is__null = (n) => Object.is(n, null);
const Option$None$12$ = { $tag: 0, $name: "None" };
function Option$Some$12$(param0) {
  this._0 = param0;
}
Option$Some$12$.prototype.$tag = 1;
Option$Some$12$.prototype.$name = "Some";
const Option$None$13$ = { $tag: 0, $name: "None" };
function Option$Some$13$(param0) {
  this._0 = param0;
}
Option$Some$13$.prototype.$tag = 1;
Option$Some$13$.prototype.$name = "Some";
const Option$None$14$ = { $tag: 0, $name: "None" };
function Option$Some$14$(param0) {
  this._0 = param0;
}
Option$Some$14$.prototype.$tag = 1;
Option$Some$14$.prototype.$name = "Some";
const Option$None$15$ = { $tag: 0, $name: "None" };
function Option$Some$15$(param0) {
  this._0 = param0;
}
Option$Some$15$.prototype.$tag = 1;
Option$Some$15$.prototype.$name = "Some";
const Option$None$16$ = { $tag: 0, $name: "None" };
function Option$Some$16$(param0) {
  this._0 = param0;
}
Option$Some$16$.prototype.$tag = 1;
Option$Some$16$.prototype.$name = "Some";
const Option$None$17$ = { $tag: 0, $name: "None" };
function Option$Some$17$(param0) {
  this._0 = param0;
}
Option$Some$17$.prototype.$tag = 1;
Option$Some$17$.prototype.$name = "Some";
const _M0MP37Yoorkin12rabbit_2dtea3dom6Window12current__url = (self) => { return self.location.href; };
const _M0FP37Yoorkin12rabbit_2dtea3dom6window = () => window;
const _M0MP37Yoorkin12rabbit_2dtea3dom6Window17to__event__target = (x) => x;
const _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__to__ui__event = (x) => x instanceof UIEvent ? x : null;
const _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP37Yoorkin12rabbit_2dtea3dom19ffi__replace__child = (p,n,o) => p.replaceChild(n,o);
const _M0FP37Yoorkin12rabbit_2dtea3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP37Yoorkin12rabbit_2dtea3dom15ffi__nth__child = (x,i) => { 
   const r = x.childNodes[i]; 
   if (r === undefined) throw new Error(`nth_child: index ${i} out of bounds, length=${x.childNodes.length}`);
   return r;
 };
const _M0FP37Yoorkin12rabbit_2dtea3dom17ffi__count__child = (x) => x.childNodes.length;
const _M0FP37Yoorkin12rabbit_2dtea3dom21ffi__to__mouse__event = (e) => e instanceof MouseEvent ? e : null;
const _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0MP37Yoorkin12rabbit_2dtea3dom17HTMLSelectElement5value = (self) => self.value;
const _M0FP37Yoorkin12rabbit_2dtea3dom29ffi__to__html__input__element = (x) => x instanceof HTMLInputElement ? x : null;
const _M0MP37Yoorkin12rabbit_2dtea3dom16HTMLInputElement5value = (self) => self.value;
const _M0FP37Yoorkin12rabbit_2dtea3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP37Yoorkin12rabbit_2dtea3dom12console__log = (x) => console.log(x);
const _M0FP37Yoorkin12rabbit_2dtea3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__remove__event__listener = (target, type, listener) => target.removeEventListener(type, listener);
const _M0FP37Yoorkin12rabbit_2dtea3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__to__html__select__element = (x) => x instanceof HTMLSelectElement ? x : null;
const _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__event__target = (self) => self.target;
const _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP37Yoorkin12rabbit_2dtea3dom29ffi__event__stop__propagation = (self) => self.stopPropagation();
const _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP37Yoorkin12rabbit_2dtea3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP37Yoorkin12rabbit_2dtea3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP37Yoorkin12rabbit_2dtea3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__element__remove__property = (self,prop) => delete self[prop];
const _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP37Yoorkin12rabbit_2dtea3dom8document = () => document;
const _M0MP37Yoorkin12rabbit_2dtea3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP37Yoorkin12rabbit_2dtea3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP37Yoorkin12rabbit_2dtea3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP37Yoorkin12rabbit_2dtea3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$18$(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$18$.prototype.$name = "Node";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$18$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$18$.prototype.$name = "ExternalNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$18$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$18$.prototype.$name = "Text";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$18$.prototype.$name = "AttrEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$18$.prototype.$name = "AttrStyle";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$18$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$18$.prototype.$name = "AttrString";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$18$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$18$.prototype.$name = "AttrProperty";
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal.prototype.$name = "Internal";
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External.prototype.$name = "External";
const Option$None$19$ = { $tag: 0, $name: "None" };
function Option$Some$19$(param0) {
  this._0 = param0;
}
Option$Some$19$.prototype.$tag = 1;
Option$Some$19$.prototype.$name = "Some";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$18$.prototype.$name = "AttrRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$18$.prototype.$name = "AttrAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$18$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$18$.prototype.$name = "StyleAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$18$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$18$.prototype.$name = "StyleRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$18$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$18$.prototype.$name = "PropertyAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$18$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$18$.prototype.$name = "PropertyRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$18$.prototype.$tag = 6;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$18$.prototype.$name = "EventRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$18$.prototype.$tag = 7;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$18$.prototype.$name = "EventAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$18$.prototype.$name = "Drop";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$18$.prototype.$name = "Remove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$.prototype.$name = "Replace";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$18$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$18$.prototype.$name = "InsertBefore";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$18$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$18$.prototype.$name = "Append";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$.prototype.$name = "Update";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$18$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$18$.prototype.$name = "UpdateNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$18$.prototype.$name = "UpdateText";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$18$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$18$.prototype.$name = "Normal";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$.prototype.$name = "HandleEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$18$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$18$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$18$.prototype.$name = "Custom";
function $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean.prototype.$name = "Boolean";
function $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Integer(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Integer.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Integer.prototype.$name = "Integer";
function $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Floating(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Floating.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Floating.prototype.$name = "Floating";
function $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$String(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$String.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$String.prototype.$name = "String";
const _M0FP310typinglabs18rabbit__playground4main20install__focus__blur = (id, onFocus, onBlur) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('focus', onFocus);
  el.addEventListener('blur', onBlur);
};
const Msg$Init = { $tag: 0, $name: "Init" };
function Msg$InputChanged(param0) {
  this._0 = param0;
}
Msg$InputChanged.prototype.$tag = 1;
Msg$InputChanged.prototype.$name = "InputChanged";
const Msg$Focused = { $tag: 2, $name: "Focused" };
const Msg$Blurred = { $tag: 3, $name: "Blurred" };
const Option$None$20$ = { $tag: 0, $name: "None" };
function Option$Some$20$(param0) {
  this._0 = param0;
}
Option$Some$20$.prototype.$tag = 1;
Option$Some$20$.prototype.$name = "Some";
const Option$None$21$ = { $tag: 0, $name: "None" };
function Option$Some$21$(param0) {
  this._0 = param0;
}
Option$Some$21$.prototype.$tag = 1;
Option$Some$21$.prototype.$name = "Some";
const _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string, method_1: _M0IP016_24default__implP311moonbitlang4core7builtin6Logger16write__substringGRP311moonbitlang4core7builtin13StringBuilderE, method_2: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view, method_3: _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char };
const _M0FP311moonbitlang4core7builtin19wasm__helper__cache = { tried: false, exports: undefined };
const _M0FP311moonbitlang4core7strconv14base__err__str = "invalid base";
const _M0FP311moonbitlang4core7strconv15range__err__str = "value out of range";
const _M0FP311moonbitlang4core7strconv16syntax__err__str = "invalid syntax";
const _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603 = "";
const _M0FP311moonbitlang4core7builtin4seed = _M0FP311moonbitlang4core7builtin12random__seed();
const _M0FP311moonbitlang4core7builtin33brute__force__find_2econstr_2f340 = 0;
const _M0FP311moonbitlang4core7builtin43boyer__moore__horspool__find_2econstr_2f326 = 0;
function _M0FP311moonbitlang4core5abort5abortGuE(msg) {
  $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin5ArrayGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEEE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin9ArrayViewGRP311moonbitlang4core6string10StringViewEE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core6string10StringViewE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGOiE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core5abort5abortGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(msg) {
  return $panic();
}
function _M0FP311moonbitlang4core7builtin4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0MP311moonbitlang4core7builtin6Hasher8consume4(self, input) {
  self.acc = Math.imul(_M0FP311moonbitlang4core7builtin4rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MP311moonbitlang4core7builtin6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MP311moonbitlang4core7builtin6Hasher8consume4(self, value);
}
function _M0FP311moonbitlang4core7builtin5abortGuE(string, loc) {
  _M0FP311moonbitlang4core5abort5abortGuE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin5ArrayGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEEE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin5ArrayGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEEE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin9ArrayViewGRP311moonbitlang4core6string10StringViewEE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core7builtin9ArrayViewGRP311moonbitlang4core6string10StringViewEE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core6string10StringViewE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP311moonbitlang4core6string10StringViewE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGOiE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGOiE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0FP311moonbitlang4core7builtin5abortGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(string, loc) {
  return _M0FP311moonbitlang4core5abort5abortGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(`${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(string)}\n  at ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)}\n`);
}
function _M0MP311moonbitlang4core5array10FixedArray12unsafe__blitGRP311moonbitlang4core7builtin17UnsafeMaybeUninitGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP311moonbitlang4core7builtin18UninitializedArray12unsafe__blitGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(dst, dst_offset, src, src_offset, len) {
  _M0MP311moonbitlang4core5array10FixedArray12unsafe__blitGRP311moonbitlang4core7builtin17UnsafeMaybeUninitGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEEE(dst, dst_offset, src, src_offset, len);
}
function _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3url3UrlE(t) {}
function _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3url10UrlRequestE(t) {}
function _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3cmd6EventsGRP310typinglabs18rabbit__playground4main3MsgEE(t) {}
function _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(size_hint) {
  return { val: "" };
}
function _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__char(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function _M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(self, 56319);
}
function _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(self, 57343);
}
function _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MP311moonbitlang4core6string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0MP311moonbitlang4core7builtin13SourceLocRepr5parse(repr) {
  const _bind = { str: repr, start: 0, end: repr.length };
  const _data = _M0MP311moonbitlang4core6string10StringView4data(_bind);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(_bind);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(_bind) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let match_tag_saver_1 = -1;
  let match_tag_saver_2 = -1;
  let match_tag_saver_3 = -1;
  let match_tag_saver_4 = -1;
  let tag_0 = -1;
  let tag_1 = -1;
  let tag_1_1 = -1;
  let tag_1_2 = -1;
  let tag_3 = -1;
  let tag_2 = -1;
  let tag_2_1 = -1;
  let tag_4 = -1;
  _L: {
    if (_cursor < _end) {
      const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
      _cursor = _cursor + 1 | 0;
      if (next_char === 64) {
        _L$2: while (true) {
          tag_0 = _cursor;
          if (_cursor < _end) {
            const next_char$2 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char$2 === 58) {
              if (_cursor < _end) {
                _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                let _tmp = 0;
                _L$3: while (true) {
                  const dispatch_15 = _tmp;
                  _L$4: {
                    _L$5: {
                      switch (dispatch_15) {
                        case 3: {
                          tag_1_2 = tag_1_1;
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  tag_1 = _cursor;
                                  tag_2_1 = tag_2;
                                  tag_2 = _cursor;
                                  tag_3 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$4 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$4 < 48) {
                                        if (next_char$4 === 45) {
                                          break _L$4;
                                        } else {
                                          break _L$7;
                                        }
                                      } else {
                                        if (next_char$4 > 57) {
                                          if (next_char$4 < 59) {
                                            _tmp = 3;
                                            continue _L$3;
                                          } else {
                                            break _L$7;
                                          }
                                        } else {
                                          _tmp = 6;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 2: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 0: {
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$3 === 58) {
                              _tmp = 1;
                              continue _L$3;
                            } else {
                              _tmp = 0;
                              continue _L$3;
                            }
                          } else {
                            break _L;
                          }
                        }
                        case 4: {
                          tag_1 = _cursor;
                          tag_4 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 4;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  tag_1_2 = tag_1_1;
                                  tag_1_1 = tag_1;
                                  tag_1 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$4 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$4 < 58) {
                                        if (next_char$4 < 48) {
                                          break _L$7;
                                        } else {
                                          tag_1 = _cursor;
                                          tag_2_1 = tag_2;
                                          tag_2 = _cursor;
                                          if (_cursor < _end) {
                                            _L$8: {
                                              const next_char$5 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                                              _cursor = _cursor + 1 | 0;
                                              if (next_char$5 < 58) {
                                                if (next_char$5 < 48) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 5;
                                                  continue _L$3;
                                                }
                                              } else {
                                                if (next_char$5 > 58) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 3;
                                                  continue _L$3;
                                                }
                                              }
                                            }
                                            _tmp = 0;
                                            continue _L$3;
                                          } else {
                                            break _L$5;
                                          }
                                        }
                                      } else {
                                        if (next_char$4 > 58) {
                                          break _L$7;
                                        } else {
                                          _tmp = 1;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 5: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 5;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L$5;
                          }
                        }
                        case 6: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          tag_3 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 48) {
                                if (next_char$3 === 45) {
                                  break _L$4;
                                } else {
                                  break _L$6;
                                }
                              } else {
                                if (next_char$3 > 57) {
                                  if (next_char$3 < 59) {
                                    _tmp = 3;
                                    continue _L$3;
                                  } else {
                                    break _L$6;
                                  }
                                } else {
                                  _tmp = 6;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 1: {
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$3 < 58) {
                                if (next_char$3 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$3 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        default: {
                          break _L;
                        }
                      }
                    }
                    tag_1 = tag_1_2;
                    tag_2 = tag_2_1;
                    match_tag_saver_0 = tag_0;
                    match_tag_saver_1 = tag_1;
                    match_tag_saver_2 = tag_2;
                    match_tag_saver_3 = tag_3;
                    match_tag_saver_4 = tag_4;
                    accept_state = 0;
                    match_end = _cursor;
                    break _L;
                  }
                  tag_1_1 = tag_1_2;
                  tag_1 = _cursor;
                  tag_2 = tag_2_1;
                  if (_cursor < _end) {
                    _L$5: {
                      const next_char$3 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char$3 < 58) {
                        if (next_char$3 < 48) {
                          break _L$5;
                        } else {
                          _tmp = 4;
                          continue;
                        }
                      } else {
                        if (next_char$3 > 58) {
                          break _L$5;
                        } else {
                          _tmp = 1;
                          continue;
                        }
                      }
                    }
                    _tmp = 0;
                    continue;
                  } else {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              continue;
            }
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    let start_line;
    let _try_err;
    _L$2: {
      _L$3: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_1 + 1 | 0, match_tag_saver_2);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          start_line = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err = _err._0;
          break _L$3;
        }
        break _L$2;
      }
      start_line = $panic();
    }
    let start_column;
    let _try_err$2;
    _L$3: {
      _L$4: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_2 + 1 | 0, match_tag_saver_3);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          start_column = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$2 = _err._0;
          break _L$4;
        }
        break _L$3;
      }
      start_column = $panic();
    }
    let pkg;
    let _try_err$3;
    _L$4: {
      _L$5: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, _start + 1 | 0, match_tag_saver_0);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          pkg = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$3 = _err._0;
          break _L$5;
        }
        break _L$4;
      }
      pkg = $panic();
    }
    let filename;
    let _try_err$4;
    _L$5: {
      _L$6: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_0 + 1 | 0, match_tag_saver_1);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          filename = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$4 = _err._0;
          break _L$6;
        }
        break _L$5;
      }
      filename = $panic();
    }
    let end_line;
    let _try_err$5;
    _L$6: {
      _L$7: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_3 + 1 | 0, match_tag_saver_4);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          end_line = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$5 = _err._0;
          break _L$7;
        }
        break _L$6;
      }
      end_line = $panic();
    }
    let end_column;
    let _try_err$6;
    _L$7: {
      _L$8: {
        const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_4 + 1 | 0, match_end);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          end_column = _ok._0;
        } else {
          const _err = _bind$2;
          _try_err$6 = _err._0;
          break _L$8;
        }
        break _L$7;
      }
      end_column = $panic();
    }
    return { pkg: pkg, filename: filename, start_line: start_line, start_column: start_column, end_line: end_line, end_column: end_column };
  } else {
    return $panic();
  }
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function _M0MP311moonbitlang4core7builtin7MyInt647to__int(self) {
  return self.lo;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq5equal(self, that) {
  return self === that;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MP311moonbitlang4core7builtin7MyInt649from__int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function _M0MP311moonbitlang4core3int3Int9to__int64(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt649from__int(self);
}
function _M0MP311moonbitlang4core7builtin6Hasher7combineGsE(self, value) {
  _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP37Yoorkin12rabbit_2dtea7variant7VariantE(x, y) {
  return !_M0IP37Yoorkin12rabbit_2dtea7variant7VariantP311moonbitlang4core7builtin2Eq5equal(x, y);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP311moonbitlang4core6string10StringViewE(x, y) {
  return !_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin2Eq5equal(x, y);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGkE(x, y) {
  return _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(x, y) {
  return _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGkE(x, y) {
  return _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin7Compare7compare(x, y) >= 0;
}
function _M0MP311moonbitlang4core7builtin6Hasher9avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function _M0MP311moonbitlang4core7builtin6Hasher8finalize(self) {
  return _M0MP311moonbitlang4core7builtin6Hasher9avalanche(self);
}
function _M0MP311moonbitlang4core7builtin6Hasher11new_2einner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function _M0MP311moonbitlang4core7builtin6Hasher3new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FP311moonbitlang4core7builtin4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MP311moonbitlang4core7builtin6Hasher11new_2einner(seed);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(self) {
  const h = _M0MP311moonbitlang4core7builtin6Hasher3new(undefined);
  _M0MP311moonbitlang4core7builtin6Hasher7combineGsE(h, self);
  return _M0MP311moonbitlang4core7builtin6Hasher8finalize(h);
}
function _M0MP311moonbitlang4core6string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    if (end$2 < len && _M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$InvalidIndex);
    }
    return new Result$Ok$0$({ str: self, start: start$2, end: end$2 });
  } else {
    return new Result$Err$0$(Error$moonbitlang$47$core$47$builtin$46$CreatingViewError$46$IndexOutOfBounds);
  }
}
function _M0MP311moonbitlang4core6string6String3sub(self, start$46$opt, end) {
  let start;
  if (start$46$opt === undefined) {
    start = 0;
  } else {
    const _Some = start$46$opt;
    start = _Some;
  }
  return _M0MP311moonbitlang4core6string6String11sub_2einner(self, start, end);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin6Logger16write__substringGRP311moonbitlang4core7builtin13StringBuilderE(self, value, start, len) {
  let _tmp;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0MP311moonbitlang4core6string6String11sub_2einner(value, start, start + len | 0);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    _tmp = $panic();
  }
  _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(self, _tmp);
}
function _M0MP311moonbitlang4core6string10StringView4data(self) {
  return self.str;
}
function _M0MP311moonbitlang4core6string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core6string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGbE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core4bool4BoolP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core7builtin9SourceLocP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self) {
  const logger = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Show6output(self, { self: logger, method_table: _M0FP095_40moonbitlang_2fcore_2fbuiltin_2eStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(logger);
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core6string10StringViewE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGsE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core7builtin4Iter4nextGcE(self) {
  const _func = self;
  return _func();
}
function _M0MP311moonbitlang4core3int3Int18to__string_2einner(self, radix) {
  return _M0FP311moonbitlang4core7builtin19int__to__string__js(self, radix);
}
function _M0FP311moonbitlang4core7builtin4failGUOsORP311moonbitlang4core6string10StringViewEE(msg, loc) {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0FP311moonbitlang4core7builtin4failGUsOiEE(msg, loc) {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewsEE(msg, loc) {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewORP311moonbitlang4core6string10StringViewEE(msg, loc) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewRP311moonbitlang4core6string10StringViewEE(msg, loc) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0FP311moonbitlang4core7builtin4failGURP37Yoorkin12rabbit_2dtea3url8ProtocolRP311moonbitlang4core6string10StringViewEE(msg, loc) {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGRP311moonbitlang4core7builtin9SourceLocE(loc)} FAILED: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(msg)}`));
}
function _M0MP311moonbitlang4core6string10StringView11unsafe__get(self, index) {
  return self.str.charCodeAt(self.start + index | 0);
}
function _M0MP311moonbitlang4core7builtin4Iter3newGRP311moonbitlang4core6string10StringViewE(f) {
  return f;
}
function _M0MP311moonbitlang4core7builtin4Iter3newGcE(f) {
  return f;
}
function _M0MP311moonbitlang4core7builtin4Iter3newGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(f) {
  return f;
}
function _M0MP311moonbitlang4core7builtin4Iter3newGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(f) {
  return f;
}
function _M0MP311moonbitlang4core6string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = _M0MP311moonbitlang4core6string10StringView6length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MP311moonbitlang4core6string10StringView6length(self)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core6string10StringViewE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:113:5-113:36");
}
function _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MP311moonbitlang4core6string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = { val: start };
  return _M0MP311moonbitlang4core7builtin4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FP311moonbitlang4core7builtin32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MP311moonbitlang4core6uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin2Eq5equal(self, other) {
  const len = _M0MP311moonbitlang4core6string10StringView6length(self);
  if (len === _M0MP311moonbitlang4core6string10StringView6length(other)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function _M0MP311moonbitlang4core6string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core6string10StringViewE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:399:5-399:36");
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGRP311moonbitlang4core6string10StringViewE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core5array9ArrayView6lengthGsE(self) {
  return self.end - self.start | 0;
}
function _M0MP311moonbitlang4core6string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FP311moonbitlang4core7builtin5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:424:9-424:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0MP311moonbitlang4core6string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FP311moonbitlang4core7builtin5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:452:9-452:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MP311moonbitlang4core6string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MP311moonbitlang4core6uint166UInt1623is__trailing__surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function _M0MP311moonbitlang4core6string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MP311moonbitlang4core6uint166UInt1622is__leading__surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGOiE("Invalid start index", "@moonbitlang/core/builtin:string.mbt:327:5-327:33");
  }
}
function _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MP311moonbitlang4core6string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MP311moonbitlang4core6string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(str)}`;
}
function _M0FP311moonbitlang4core7builtin28boyer__moore__horspool__find(haystack, needle) {
  const haystack_len = _M0MP311moonbitlang4core6string10StringView6length(haystack);
  const needle_len = _M0MP311moonbitlang4core6string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end4308 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end4308) {
          const _tmp$2 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, i) & 255;
          $bound_check(skip_table, _tmp$2);
          skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end4314 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end4314) {
              if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i + j | 0), _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = _M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, (i + needle_len | 0) - 1 | 0) & 255;
          $bound_check(skip_table, _tmp$4);
          _tmp$2 = i + skip_table[_tmp$4] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FP311moonbitlang4core7builtin43boyer__moore__horspool__find_2econstr_2f326;
  }
}
function _M0FP311moonbitlang4core7builtin18brute__force__find(haystack, needle) {
  const haystack_len = _M0MP311moonbitlang4core6string10StringView6length(haystack);
  const needle_len = _M0MP311moonbitlang4core6string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            if (i <= forward_len && _M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i), needle_first)) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp = 1;
            while (true) {
              const j = _tmp;
              if (j < needle_len) {
                if (_M0IP311moonbitlang4core6uint166UInt16P311moonbitlang4core7builtin2Eq10not__equal(_M0MP311moonbitlang4core6string10StringView11unsafe__get(haystack, i + j | 0), _M0MP311moonbitlang4core6string10StringView11unsafe__get(needle, j))) {
                  break;
                }
                _tmp = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FP311moonbitlang4core7builtin33brute__force__find_2econstr_2f340;
  }
}
function _M0MP311moonbitlang4core6string10StringView4find(self, str) {
  return _M0MP311moonbitlang4core6string10StringView6length(str) <= 4 ? _M0FP311moonbitlang4core7builtin18brute__force__find(self, str) : _M0FP311moonbitlang4core7builtin28boyer__moore__horspool__find(self, str);
}
function _M0MP311moonbitlang4core5array5Array4pushGUsWRP37Yoorkin12rabbit_2dtea3dom5EventEuEE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core6string10StringViewE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(self, value) {
  _M0MP311moonbitlang4core7builtin7JSArray4push(self, value);
}
function _M0MP311moonbitlang4core6string10StringView9is__empty(self) {
  return _M0MP311moonbitlang4core6string10StringView6length(self) === 0;
}
function _M0MP311moonbitlang4core7builtin4Iter3mapGRP311moonbitlang4core6string10StringViewsE(self, f) {
  return () => {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core6string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  };
}
function _M0MP311moonbitlang4core7builtin4Iter3mapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(self, f) {
  return () => {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  };
}
function _M0MP311moonbitlang4core7builtin4Iter3mapGcRP311moonbitlang4core6string10StringViewE(self, f) {
  return () => {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  };
}
function _M0IP311moonbitlang4core4char4CharP311moonbitlang4core7builtin4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MP311moonbitlang4core6string10StringView5split(self, sep) {
  const sep_len = _M0MP311moonbitlang4core6string10StringView6length(sep);
  if (sep_len === 0) {
    return _M0MP311moonbitlang4core7builtin4Iter3mapGcRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView4iter(self), (c) => _M0MP311moonbitlang4core6string6String12view_2einner(_M0IP311moonbitlang4core4char4CharP311moonbitlang4core7builtin4Show10to__string(c), 0, undefined));
  }
  const remaining = { val: self };
  return _M0MP311moonbitlang4core7builtin4Iter3newGRP311moonbitlang4core6string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MP311moonbitlang4core6string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MP311moonbitlang4core6string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MP311moonbitlang4core6string10StringView12view_2einner(_view, 0, _end);
      }
    }
  });
}
function _M0MP311moonbitlang4core6string6String5split(self, sep) {
  return _M0MP311moonbitlang4core6string10StringView5split({ str: self, start: 0, end: self.length }, sep);
}
function _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(self) {
  const result = [];
  while (true) {
    const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGRP311moonbitlang4core6string10StringViewE(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MP311moonbitlang4core5array5Array4pushGRP311moonbitlang4core6string10StringViewE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin12ToStringView16to__string__view(self) {
  return { str: self, start: 0, end: self.length };
}
function _M0IP311moonbitlang4core4bool4BoolP311moonbitlang4core7builtin4Show6output(self, logger) {
  if (self) {
    logger.method_table.method_0(logger.self, "true");
    return;
  } else {
    logger.method_table.method_0(logger.self, "false");
    return;
  }
}
function _M0IP311moonbitlang4core3int3IntP311moonbitlang4core7builtin4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MP311moonbitlang4core3int3Int18to__string_2einner(self, 10));
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(self) {
  return self;
}
function _M0MP311moonbitlang4core5array9ArrayView4iterGRP311moonbitlang4core6string10StringViewE(self) {
  const i = { val: 0 };
  return _M0MP311moonbitlang4core7builtin4Iter3newGRP311moonbitlang4core6string10StringViewE(() => {
    if (i.val < _M0MP311moonbitlang4core5array9ArrayView6lengthGRP311moonbitlang4core6string10StringViewE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MP311moonbitlang4core5array9ArrayView4iterGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  const i = { val: 0 };
  return _M0MP311moonbitlang4core7builtin4Iter3newGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(() => {
    if (i.val < _M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MP311moonbitlang4core5array5Array4iterGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return _M0MP311moonbitlang4core5array9ArrayView4iterGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE({ buf: self, start: 0, end: self.length });
}
function _M0MP311moonbitlang4core5array9ArrayView2atGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:arrayview.mbt:124:5-126:6");
  }
}
function _M0IP311moonbitlang4core6option6OptionP311moonbitlang4core7builtin2Eq5equalGiE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3cmd6EventsGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom16HTMLInputElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MP311moonbitlang4core3int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MP311moonbitlang4core7builtin3Map11new_2einnerGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(capacity) {
  const capacity$2 = _M0MP311moonbitlang4core3int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MP311moonbitlang4core6option6Option6unwrapGRP311moonbitlang4core7builtin5EntryGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MP311moonbitlang4core7builtin3Map10push__awayGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MP311moonbitlang4core7builtin3Map10set__entryGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MP311moonbitlang4core7builtin3Map4growGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
      _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MP311moonbitlang4core7builtin3Map4growGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MP311moonbitlang4core7builtin3Map10push__awayGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = { prev: _bind$2, next: _bind$3, psl: psl, hash: hash, key: key, value: value };
        _M0MP311moonbitlang4core7builtin3Map20add__entry__to__tailGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map4growGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FP311moonbitlang4core7builtin21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map3setGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, key, value) {
  _M0MP311moonbitlang4core7builtin3Map15set__with__hashGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, key, value, _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(key));
}
function _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(arr) {
  const length = _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(arr);
  let capacity = _M0MP311moonbitlang4core3int3Int20next__power__of__two(length);
  if (length > _M0FP311moonbitlang4core7builtin21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MP311moonbitlang4core7builtin3Map11new_2einnerGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(capacity);
  const _len = _M0MP311moonbitlang4core5array9ArrayView6lengthGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(arr);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const e = arr.buf[arr.start + _i | 0];
      _M0MP311moonbitlang4core7builtin3Map3setGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(m, e._0, e._1);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MP311moonbitlang4core7builtin3Map3getGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, key) {
  const hash = _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self, key) {
  const hash = _M0IP016_24default__implP311moonbitlang4core7builtin4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MP311moonbitlang4core7builtin3Map4iterGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  const curr_entry = { val: self.head };
  return _M0MP311moonbitlang4core7builtin4Iter3newGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MP311moonbitlang4core7builtin3Map5iter2GsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return _M0MP311moonbitlang4core7builtin3Map4iterGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self);
}
function _M0MP311moonbitlang4core7builtin3Map10from__iterGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(iter) {
  const _bind = [];
  const m = _M0MP311moonbitlang4core7builtin3Map11from__arrayGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE({ buf: _bind, start: 0, end: 0 });
  while (true) {
    const _bind$2 = _M0MP311moonbitlang4core7builtin4Iter4nextGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(iter);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MP311moonbitlang4core7builtin3Map3setGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(m, _k, _v);
      continue;
    }
  }
  return m;
}
function _M0MP311moonbitlang4core5array5Array3mapGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MP311moonbitlang4core5array5Array3mapGRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MP311moonbitlang4core7builtin4Iter4join(self, sep) {
  const result = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(0);
  const _bind = _M0MP311moonbitlang4core7builtin4Iter4nextGsE(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(result, _x);
    while (true) {
      const _bind$2 = _M0MP311moonbitlang4core7builtin4Iter4nextGsE(self);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$2;
        const _x$2 = _Some$2;
        _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(result, sep);
        _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger13write__string(result, _x$2);
        continue;
      }
    }
  }
  return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(result);
}
function _M0MP311moonbitlang4core7builtin5Iter24nextGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return _M0MP311moonbitlang4core7builtin4Iter4nextGUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(self);
}
function _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(self, idx) {
  return self.charCodeAt(idx);
}
function _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Add3add(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, other.hi, other.lo);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Sub3sub(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : _M0MP311moonbitlang4core7builtin7MyInt6411add__hi__lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Mul3mul(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function _M0FP311moonbitlang4core7builtin29try__get__int64__wasm__helper() {
  if (_M0FP311moonbitlang4core7builtin19wasm__helper__cache.tried) {
    const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
    return !(_bind === undefined);
  }
  _M0FP311moonbitlang4core7builtin19wasm__helper__cache.tried = true;
  _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports = _M0FP311moonbitlang4core7builtin23try__init__wasm__helper();
  const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
  return !(_bind === undefined);
}
function _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Div3div(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FP311moonbitlang4core7builtin29try__get__int64__wasm__helper()) {
      return _M0MP311moonbitlang4core7builtin7MyInt6411div__bigint(self, other);
    }
    const _bind = _M0FP311moonbitlang4core7builtin19wasm__helper__cache.exports;
    if (_bind === undefined) {
      return $panic();
    } else {
      const _Some = _bind;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_s;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return { hi: hi, lo: lo };
    }
  } else {
    return $panic();
  }
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Add3add(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Sub3sub(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Mul3mul(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div(self, other) {
  return _M0IP311moonbitlang4core7builtin7MyInt64P311moonbitlang4core7builtin3Div3div(self, other);
}
function _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin7Compare7compare(self, other) {
  return _M0MP311moonbitlang4core7builtin7MyInt647compare(self, other);
}
function _M0MP311moonbitlang4core5int645Int647to__int(self) {
  return _M0MP311moonbitlang4core7builtin7MyInt647to__int(self);
}
function _M0MP311moonbitlang4core7builtin6Hasher15combine__string(self, value) {
  const _end2501 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end2501) {
      _M0MP311moonbitlang4core7builtin6Hasher13combine__uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Hash13hash__combine(self, hasher) {
  _M0MP311moonbitlang4core7builtin6Hasher15combine__string(hasher, self);
}
function _M0IP311moonbitlang4core7builtin13SourceLocReprP311moonbitlang4core7builtin4Show6output(self, logger) {
  const pkg = self.pkg;
  const _data = _M0MP311moonbitlang4core6string10StringView4data(pkg);
  const _start = _M0MP311moonbitlang4core6string10StringView13start__offset(pkg);
  const _end = _start + _M0MP311moonbitlang4core6string10StringView6length(pkg) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let tag_0 = -1;
  let _bind;
  _L: {
    _L$2: {
      _L$3: while (true) {
        if (_cursor < _end) {
          const next_char = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char === 47) {
            _L$4: while (true) {
              tag_0 = _cursor;
              if (_cursor < _end) {
                const next_char$2 = _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char$2 === 47) {
                  while (true) {
                    if (_cursor < _end) {
                      _M0MP311moonbitlang4core6string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      continue;
                    } else {
                      match_tag_saver_0 = tag_0;
                      accept_state = 0;
                      match_end = _cursor;
                      break _L$2;
                    }
                  }
                } else {
                  continue;
                }
              } else {
                break _L$2;
              }
            }
          } else {
            continue;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    if (accept_state === 0) {
      let package_name;
      let _try_err;
      _L$3: {
        _L$4: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, match_tag_saver_0 + 1 | 0, match_end);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            package_name = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err = _err._0;
            break _L$4;
          }
          break _L$3;
        }
        package_name = $panic();
      }
      let module_name;
      let _try_err$2;
      _L$4: {
        _L$5: {
          const _bind$2 = _M0MP311moonbitlang4core6string6String3sub(_data, _start, match_tag_saver_0);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            module_name = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err$2 = _err._0;
            break _L$5;
          }
          break _L$4;
        }
        module_name = $panic();
      }
      _bind = { _0: module_name, _1: package_name };
    } else {
      _bind = { _0: pkg, _1: undefined };
    }
  }
  const _module_name = _bind._0;
  const _package_name = _bind._1;
  if (_package_name === undefined) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_table.method_2(logger.self, _pkg_name);
    logger.method_table.method_3(logger.self, 47);
  }
  logger.method_table.method_2(logger.self, self.filename);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_column);
  logger.method_table.method_3(logger.self, 45);
  logger.method_table.method_2(logger.self, self.end_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.end_column);
  logger.method_table.method_3(logger.self, 64);
  logger.method_table.method_2(logger.self, _module_name);
}
function _M0IP311moonbitlang4core7builtin9SourceLocP311moonbitlang4core7builtin4Show6output(self, logger) {
  _M0IP311moonbitlang4core7builtin13SourceLocReprP311moonbitlang4core7builtin4Show6output(_M0MP311moonbitlang4core7builtin13SourceLocRepr5parse(self), logger);
}
function _M0MP311moonbitlang4core5array5Array12view_2einnerGRP311moonbitlang4core6string10StringViewE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start$2 | 0;
    return { buf: _bind, start: start$2, end: start$2 + _bind$2 | 0 };
  } else {
    return _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin9ArrayViewGRP311moonbitlang4core6string10StringViewEE("View index out of bounds", "@moonbitlang/core/builtin:arrayview.mbt:252:5-252:38");
  }
}
function _M0MP311moonbitlang4core5array5Array5makeiGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(length, f) {
  if (length <= 0) {
    return [];
  } else {
    const array = new Array(length);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < length) {
        array[i] = f(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MP311moonbitlang4core5array9ArrayView3mapGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self, f) {
  if (_M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self) === 0) {
    return [];
  }
  return _M0MP311moonbitlang4core5array5Array5makeiGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self), (i) => f(_M0MP311moonbitlang4core5array9ArrayView2atGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(self, i)));
}
function _M0MP311moonbitlang4core5array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _bind = self.buf;
    const _bind$2 = 1 + self.start | 0;
    const _bind$3 = self.end;
    const _x = { buf: _bind, start: _bind$2, end: _bind$3 };
    const hd = _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin12ToStringView16to__string__view(_hd);
    let size_hint = _M0MP311moonbitlang4core6string10StringView6length(hd);
    const _len = _M0MP311moonbitlang4core5array9ArrayView6lengthGsE(_x);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _bind[_bind$2 + _i | 0];
        size_hint = size_hint + (_M0MP311moonbitlang4core6string10StringView6length(_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin12ToStringView16to__string__view(s)) + _M0MP311moonbitlang4core6string10StringView6length(separator) | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = _M0MP311moonbitlang4core7builtin13StringBuilder11new_2einner(size_hint);
    _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(buf, hd);
    if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(separator.str, 0, separator.start, separator.end)) {
      const _len$2 = _M0MP311moonbitlang4core5array9ArrayView6lengthGsE(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          const s$2 = _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin12ToStringView16to__string__view(s);
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(buf, s$2);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _len$2 = _M0MP311moonbitlang4core5array9ArrayView6lengthGsE(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          const s$2 = _M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin12ToStringView16to__string__view(s);
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(buf, separator);
          _M0IP311moonbitlang4core7builtin13StringBuilderP311moonbitlang4core7builtin6Logger11write__view(buf, s$2);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MP311moonbitlang4core7builtin13StringBuilder10to__string(buf);
  }
}
function _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin3Add3addGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self, other) {
  const result = new Array(self.length + other.length | 0);
  _M0MP311moonbitlang4core7builtin18UninitializedArray12unsafe__blitGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(result, 0, self, 0, self.length);
  _M0MP311moonbitlang4core7builtin18UninitializedArray12unsafe__blitGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(result, self.length, other, 0, other.length);
  return result;
}
function _M0MP311moonbitlang4core5array5Array4eachGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP311moonbitlang4core5array5Array4joinGsE(self, separator) {
  return _M0MP311moonbitlang4core5array9ArrayView4joinGsE({ buf: self, start: 0, end: self.length }, separator);
}
function _M0FP311moonbitlang4core7strconv9base__errGUiRP311moonbitlang4core6string10StringViewbEE() {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv14base__err__str));
}
function _M0FP311moonbitlang4core7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = { str: _tmp, start: _tmp$2, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = { str: _tmp$3, start: _tmp$4, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = { str: _tmp$5, start: _tmp$6, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = { str: _tmp$7, start: _tmp$8, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = { str: _tmp$9, start: _tmp$10, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = { str: _tmp$11, start: _tmp$12, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$7$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$7$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$7$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$7$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(view.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = { str: _tmp, start: _tmp$2, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = { str: _tmp$3, start: _tmp$4, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = { str: _tmp$5, start: _tmp$6, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = { str: _tmp$7, start: _tmp$8, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = { str: _tmp$9, start: _tmp$10, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = { str: _tmp$11, start: _tmp$12, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$7$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$7$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$7$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$7$({ _0: base, _1: view, _2: false }) : _M0FP311moonbitlang4core7strconv9base__errGUiRP311moonbitlang4core6string10StringViewbEE();
  }
}
function _M0FP311moonbitlang4core7strconv10range__errGuE() {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv15range__err__str));
}
function _M0FP311moonbitlang4core7strconv10range__errGlE() {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv15range__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGiE() {
  return new Result$Err$10$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv11syntax__errGlE() {
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(_M0FP311moonbitlang4core7strconv16syntax__err__str));
}
function _M0FP311moonbitlang4core7strconv19overflow__threshold(base, neg) {
  return !neg ? (base === 10 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, $10L), $1L) : base === 16 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, $16L), $1L) : _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($9223372036854775807L, _M0MP311moonbitlang4core3int3Int9to__int64(base)), $1L)) : base === 10 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, $10L) : base === 16 ? _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, $16L) : _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Div3div($_9223372036854775808L, _M0MP311moonbitlang4core3int3Int9to__int64(base));
}
function _M0FP311moonbitlang4core7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP311moonbitlang4core6string10StringViewE(str, { str: _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603, start: 0, end: _M0FP311moonbitlang4core7strconv36parse__int64_2einner_2e_2abind_7c603.length })) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = _M0MP311moonbitlang4core6string10StringView12view_2einner(str, 0, undefined);
        if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_bind$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _x$2 = { str: _tmp, start: _tmp$2, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$3 = _bind$2.str;
              const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$4;
              if (_bind$4 === undefined) {
                _tmp$4 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$4 = _Some;
              }
              const _x$3 = { str: _tmp$3, start: _tmp$4, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = _M0FP311moonbitlang4core7strconv25check__and__consume__base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = _M0FP311moonbitlang4core7strconv19overflow__threshold(_num_base, _neg);
    let has_digit;
    if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_rest$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_rest$2.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (_M0MP311moonbitlang4core6string6String24char__length__ge_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_param_0.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _x$2 = { str: _tmp$5, start: _tmp$6, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGiE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(acc, overflow_threshold)) {
              const next_acc = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Sub3sub(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(acc, _M0MP311moonbitlang4core3int3Int9to__int64(_num_base)), _M0MP311moonbitlang4core3int3Int9to__int64(d));
              if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__leGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(acc, overflow_threshold)) {
              const next_acc = _M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Add3add(_M0IP311moonbitlang4core5int645Int64P311moonbitlang4core7builtin3Mul3mul(acc, _M0MP311moonbitlang4core3int3Int9to__int64(_num_base)), _M0MP311moonbitlang4core3int3Int9to__int64(d));
              if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__geGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FP311moonbitlang4core7strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = _M0FP311moonbitlang4core7strconv11syntax__errGlE();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$9$(_tmp);
    } else {
      return _M0FP311moonbitlang4core7strconv11syntax__errGlE();
    }
  } else {
    return _M0FP311moonbitlang4core7strconv11syntax__errGlE();
  }
}
function _M0FP311moonbitlang4core7strconv18parse__int_2einner(str, base) {
  const _bind = _M0FP311moonbitlang4core7strconv20parse__int64_2einner(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (_M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__ltGlE(n, _M0MP311moonbitlang4core3int3Int9to__int64(-2147483648)) || _M0IP016_24default__implP311moonbitlang4core7builtin7Compare6op__gtGlE(n, _M0MP311moonbitlang4core3int3Int9to__int64(2147483647))) {
    const _bind$2 = _M0FP311moonbitlang4core7strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$10$(_M0MP311moonbitlang4core5int645Int647to__int(n));
}
function _M0IP37Yoorkin12rabbit_2dtea3url8ProtocolP311moonbitlang4core7builtin2Eq5equal(_x_111, _x_112) {
  let _x0_113;
  let _y0_114;
  _L: {
    switch (_x_111.$tag) {
      case 0: {
        if (_x_112.$tag === 0) {
          return true;
        } else {
          return false;
        }
      }
      case 1: {
        if (_x_112.$tag === 1) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        const _Other = _x_111;
        const _$42$x0_113 = _Other._0;
        if (_x_112.$tag === 2) {
          const _Other$2 = _x_112;
          const _$42$y0_114 = _Other$2._0;
          _x0_113 = _$42$x0_113;
          _y0_114 = _$42$y0_114;
          break _L;
        } else {
          return false;
        }
      }
    }
  }
  return _x0_113 === _y0_114;
}
function _M0FP37Yoorkin12rabbit_2dtea3url5parse(url) {
  let protocol;
  let remain;
  _L: {
    let _bind;
    let remain$2;
    _L$2: {
      _L$3: {
        let x;
        let remain$3;
        _L$4: {
          _L$5: {
            let remain$4;
            _L$6: {
              _L$7: {
                let remain$5;
                _L$8: {
                  _L$9: {
                    const _bind$2 = "://";
                    const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string6String5split(url, { str: _bind$2, start: 0, end: _bind$2.length }));
                    if (_bind$3.length === 2) {
                      const _x = _bind$3[0];
                      if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_x.str, 4, _x.start, _x.end)) {
                        const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 0, _x.start, _x.end));
                        if (_x$2 === 104) {
                          const _x$3 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 1, _x.start, _x.end));
                          if (_x$3 === 116) {
                            const _x$4 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 2, _x.start, _x.end));
                            if (_x$4 === 116) {
                              const _x$5 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 3, _x.start, _x.end));
                              if (_x$5 === 112) {
                                const _remain = _bind$3[1];
                                remain$5 = _remain;
                                break _L$9;
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      } else {
                        if (_M0MP311moonbitlang4core6string6String24char__length__eq_2einner(_x.str, 5, _x.start, _x.end)) {
                          const _x$2 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 0, _x.start, _x.end));
                          if (_x$2 === 104) {
                            const _x$3 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 1, _x.start, _x.end));
                            if (_x$3 === 116) {
                              const _x$4 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 2, _x.start, _x.end));
                              if (_x$4 === 116) {
                                const _x$5 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 3, _x.start, _x.end));
                                if (_x$5 === 112) {
                                  const _x$6 = _M0MP311moonbitlang4core6string6String16unsafe__char__at(_x.str, _M0MP311moonbitlang4core6string6String29offset__of__nth__char_2einner(_x.str, 4, _x.start, _x.end));
                                  if (_x$6 === 115) {
                                    const _remain = _bind$3[1];
                                    remain$4 = _remain;
                                    break _L$7;
                                  } else {
                                    const _remain = _bind$3[1];
                                    x = _x;
                                    remain$3 = _remain;
                                    break _L$5;
                                  }
                                } else {
                                  const _remain = _bind$3[1];
                                  x = _x;
                                  remain$3 = _remain;
                                  break _L$5;
                                }
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      }
                    } else {
                      if (_bind$3.length === 1) {
                        const _remain = _bind$3[0];
                        remain$2 = _remain;
                        break _L$3;
                      } else {
                        const _bind$4 = _M0FP311moonbitlang4core7builtin4failGURP37Yoorkin12rabbit_2dtea3url8ProtocolRP311moonbitlang4core6string10StringViewEE("Invalid protocol", "@Yoorkin/rabbit-tea/url:url.mbt:66:10-66:34");
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind = _ok._0;
                        } else {
                          return _bind$4;
                        }
                      }
                    }
                    break _L$8;
                  }
                  _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http, _1: remain$5 };
                }
                break _L$6;
              }
              _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https, _1: remain$4 };
            }
            break _L$4;
          }
          _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(x)), _1: remain$3 };
        }
        break _L$2;
      }
      _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(""), _1: remain$2 };
    }
    const _protocol = _bind._0;
    const _remain = _bind._1;
    protocol = _protocol;
    remain = _remain;
    break _L;
  }
  let mid;
  let query_and_fragment;
  _L$2: {
    let _bind;
    let mid$2;
    _L$3: {
      _L$4: {
        let mid$3;
        let remain$2;
        _L$5: {
          _L$6: {
            const _bind$2 = "?";
            const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView5split(remain, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _remain = _bind$3[1];
              mid$3 = _mid;
              remain$2 = _remain;
              break _L$6;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$4;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewRP311moonbitlang4core6string10StringViewEE("Invalid host", "@Yoorkin/rabbit-tea/url:url.mbt:71:10-71:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$5;
          }
          _bind = { _0: mid$3, _1: remain$2 };
        }
        break _L$3;
      }
      const _bind$2 = "";
      _bind = { _0: mid$2, _1: { str: _bind$2, start: 0, end: _bind$2.length } };
    }
    const _mid = _bind._0;
    const _query_and_fragment = _bind._1;
    mid = _mid;
    query_and_fragment = _query_and_fragment;
    break _L$2;
  }
  let mid_part;
  let fragment1;
  _L$3: {
    let _bind;
    let mid$2;
    _L$4: {
      _L$5: {
        let mid$3;
        let fragment;
        _L$6: {
          _L$7: {
            const _bind$2 = "#";
            const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView5split(mid, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _fragment = _bind$3[1];
              mid$3 = _mid;
              fragment = _fragment;
              break _L$7;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$5;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewORP311moonbitlang4core6string10StringViewEE("Invalid fragment", "@Yoorkin/rabbit-tea/url:url.mbt:76:10-76:34");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$6;
          }
          _bind = { _0: mid$3, _1: fragment };
        }
        break _L$4;
      }
      _bind = { _0: mid$2, _1: undefined };
    }
    const _mid_part = _bind._0;
    const _fragment1 = _bind._1;
    mid_part = _mid_part;
    fragment1 = _fragment1;
    break _L$3;
  }
  let mid$2;
  let path;
  _L$4: {
    let _bind;
    let paths;
    let mid$3;
    _L$5: {
      _L$6: {
        let mid$4;
        _L$7: {
          _L$8: {
            const _bind$2 = "/";
            const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView5split(mid_part, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 1) {
              const _mid = _bind$3[0];
              mid$4 = _mid;
              break _L$8;
            } else {
              if (_bind$3.length >= 1) {
                const _mid = _bind$3[0];
                const _x = _M0MP311moonbitlang4core5array5Array12view_2einnerGRP311moonbitlang4core6string10StringViewE(_bind$3, 1, _bind$3.length);
                paths = _x;
                mid$3 = _mid;
                break _L$6;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7builtin4failGURP311moonbitlang4core6string10StringViewsEE("Invalid host", "@Yoorkin/rabbit-tea/url:url.mbt:82:10-82:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$7;
          }
          _bind = { _0: mid$4, _1: "" };
        }
        break _L$5;
      }
      _bind = { _0: mid$3, _1: _M0MP311moonbitlang4core7builtin4Iter4join(_M0MP311moonbitlang4core7builtin4Iter3mapGRP311moonbitlang4core6string10StringViewsE(_M0MP311moonbitlang4core5array9ArrayView4iterGRP311moonbitlang4core6string10StringViewE(paths), _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string), "/") };
    }
    const _mid = _bind._0;
    const _path = _bind._1;
    mid$2 = _mid;
    path = _path;
    break _L$4;
  }
  let host;
  let port;
  _L$5: {
    let _bind;
    let host$2;
    _L$6: {
      _L$7: {
        let host$3;
        let port$2;
        _L$8: {
          _L$9: {
            const _bind$2 = ":";
            const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView5split(mid$2, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _host = _bind$3[0];
              const _port = _bind$3[1];
              host$3 = _host;
              port$2 = _port;
              break _L$9;
            } else {
              if (_bind$3.length === 1) {
                const _host = _bind$3[0];
                host$2 = _host;
                break _L$7;
              } else {
                const _bind$4 = _M0FP311moonbitlang4core7builtin4failGUsOiEE("Invalid host", "@Yoorkin/rabbit-tea/url:url.mbt:94:10-94:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$8;
          }
          let port$3;
          let _try_err;
          _L$10: {
            _L$11: {
              const _bind$2 = _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(port$2);
              const _bind$3 = _M0FP311moonbitlang4core7strconv18parse__int_2einner({ str: _bind$2, start: 0, end: _bind$2.length }, 0);
              let _bind$4;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _bind$4 = _ok._0;
              } else {
                const _err = _bind$3;
                _try_err = _err._0;
                break _L$11;
              }
              const number = _bind$4;
              port$3 = number;
              break _L$10;
            }
            port$3 = undefined;
          }
          _bind = { _0: _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(host$3), _1: port$3 };
        }
        break _L$6;
      }
      _bind = { _0: _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(host$2), _1: undefined };
    }
    const _host = _bind._0;
    const _port = _bind._1;
    host = _host;
    port = _port;
    break _L$5;
  }
  let query;
  let fragment2;
  _L$6: {
    let _bind;
    let query$2;
    _L$7: {
      _L$8: {
        let query$3;
        let fragment;
        _L$9: {
          _L$10: {
            const _bind$2 = "#";
            const _bind$3 = _M0MP311moonbitlang4core7builtin4Iter9to__arrayGRP311moonbitlang4core6string10StringViewE(_M0MP311moonbitlang4core6string10StringView5split(query_and_fragment, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _query = _bind$3[0];
              const _fragment = _bind$3[1];
              query$3 = _query;
              fragment = _fragment;
              break _L$10;
            } else {
              if (_bind$3.length === 1) {
                const _query = _bind$3[0];
                query$2 = _query;
                break _L$8;
              } else {
                if (_bind$3.length === 0) {
                  _bind = { _0: undefined, _1: undefined };
                } else {
                  const _bind$4 = _M0FP311moonbitlang4core7builtin4failGUOsORP311moonbitlang4core6string10StringViewEE("Invalid query", "@Yoorkin/rabbit-tea/url:url.mbt:105:10-105:31");
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _bind = _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              }
            }
            break _L$9;
          }
          _bind = { _0: _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(query$3), _1: fragment };
        }
        break _L$7;
      }
      _bind = _M0MP311moonbitlang4core6string10StringView9is__empty(query$2) ? { _0: undefined, _1: undefined } : { _0: _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(query$2), _1: undefined };
    }
    const _query = _bind._0;
    const _fragment2 = _bind._1;
    query = _query;
    fragment2 = _fragment2;
    break _L$6;
  }
  let fragment;
  let f;
  _L$7: {
    _L$8: {
      let f$2;
      _L$9: {
        _L$10: {
          let f1;
          let f2;
          _L$11: {
            _L$12: {
              if (fragment1 === undefined) {
                if (fragment2 === undefined) {
                  fragment = undefined;
                } else {
                  const _Some = fragment2;
                  const _f = _Some;
                  f = _f;
                  break _L$8;
                }
              } else {
                const _Some = fragment1;
                const _f1 = _Some;
                if (fragment2 === undefined) {
                  f$2 = _f1;
                  break _L$10;
                } else {
                  const _Some$2 = fragment2;
                  const _f2 = _Some$2;
                  f1 = _f1;
                  f2 = _f2;
                  break _L$12;
                }
              }
              break _L$11;
            }
            fragment = `${_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(f1)}#${_M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(f2)}`;
          }
          break _L$9;
        }
        fragment = _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(f$2);
      }
      break _L$7;
    }
    fragment = _M0IP311moonbitlang4core6string10StringViewP311moonbitlang4core7builtin4Show10to__string(f);
  }
  return new Result$Ok$11$({ protocol: protocol, host: host, port: port, path: path, query: query, fragment: fragment });
}
function _M0MP36rami3l8js_2dffi2js8Nullable8is__nullGRP37Yoorkin12rabbit_2dtea3dom7ElementE(self) {
  return _M0MP36rami3l8js_2dffi2js5Value8is__null(self);
}
function _M0MP36rami3l8js_2dffi2js8Nullable6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(self) {
  if (_M0MP36rami3l8js_2dffi2js8Nullable8is__nullGRP37Yoorkin12rabbit_2dtea3dom7ElementE(self)) {
    _M0FP311moonbitlang4core7builtin5abortGuE("Cannot unwrap a null value", "@rami3l/js-ffi/js:null.mbt:17:5-17:40");
  }
  return self;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom7ElementE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$12$(self) : Option$None$12$;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$13$(self) : Option$None$13$;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$14$(self) : Option$None$14$;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$15$(self) : Option$None$15$;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom16HTMLInputElementE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$16$(self) : Option$None$16$;
}
function _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom17HTMLSelectElementE(self) {
  return !_M0MP36rami3l8js_2dffi2js5Value8is__null(self) ? new Option$Some$17$(self) : Option$None$17$;
}
function _M0MP37Yoorkin12rabbit_2dtea3cmd6Events3newGRP310typinglabs18rabbit__playground4main3MsgE(on_url_changed, on_url_request, on_update) {
  return { on_url_changed: on_url_changed, on_url_request: on_url_request, on_update: on_update };
}
function _M0MP37Yoorkin12rabbit_2dtea3cmd6Events15trigger__updateGRP310typinglabs18rabbit__playground4main3MsgE(self, msg) {
  const _func = self.on_update;
  _func(msg);
}
function _M0FP37Yoorkin12rabbit_2dtea3cmd4noneGRP310typinglabs18rabbit__playground4main3MsgE() {
  return _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3cmd6EventsGRP310typinglabs18rabbit__playground4main3MsgEE;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP37Yoorkin12rabbit_2dtea3dom4NodeE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11EventTargetRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP37Yoorkin12rabbit_2dtea3dom5EventE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7UIEventRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom10MouseEventRP36rami3l8js_2dffi2js5ValueE(a) {
  return a;
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP37Yoorkin12rabbit_2dtea3dom4NodeE(s);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s, child) {
  _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__append__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s), child);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, child) {
  _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__append__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), child);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13remove__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s, child) {
  _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__remove__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s), child);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode14replace__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s, new_, old) {
  _M0FP37Yoorkin12rabbit_2dtea3dom19ffi__replace__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s), new_, old);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode14insert__beforeGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s, value, before) {
  _M0FP37Yoorkin12rabbit_2dtea3dom14insert__before(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s), value, before);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s, index) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom15ffi__nth__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s), index);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode17get__child__countGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom17ffi__count__child(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom12IsMouseEvent14get__ctrl__keyGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__mouse__event__ctrl__key(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom10MouseEventRP36rami3l8js_2dffi2js5ValueE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom12IsMouseEvent14get__meta__keyGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__mouse__event__meta__key(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom10MouseEventRP36rami3l8js_2dffi2js5ValueE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement17as__html__elementGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(s);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement10get__styleGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__html__element__get__style(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement17as__html__elementGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(s));
}
function _M0FP37Yoorkin12rabbit_2dtea3dom27default__exception__handlerGRP37Yoorkin12rabbit_2dtea3dom12DOMExceptionRP37Yoorkin12rabbit_2dtea3dom7ElementE(exception) {
  _M0FP37Yoorkin12rabbit_2dtea3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, type_, callback) {
  _M0FP37Yoorkin12rabbit_2dtea3dom25ffi__add__event__listener(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), type_, callback);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(s, type_, callback) {
  _M0FP37Yoorkin12rabbit_2dtea3dom25ffi__add__event__listener(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11EventTargetRP36rami3l8js_2dffi2js5ValueE(s), type_, callback);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget23remove__event__listenerGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(s, type_, callback) {
  _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__remove__event__listener(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11EventTargetRP36rami3l8js_2dffi2js5ValueE(s), type_, callback);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17as__event__targetGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(s);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget11to__elementGRP37Yoorkin12rabbit_2dtea3dom4NodeE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0FP37Yoorkin12rabbit_2dtea3dom16ffi__to__element(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom4NodeRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17to__html__elementGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0FP37Yoorkin12rabbit_2dtea3dom22ffi__to__html__element(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget24to__html__input__elementGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom16HTMLInputElementE(_M0FP37Yoorkin12rabbit_2dtea3dom29ffi__to__html__input__element(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11EventTargetRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget25to__html__select__elementGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom17HTMLSelectElementE(_M0FP37Yoorkin12rabbit_2dtea3dom30ffi__to__html__select__element(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom11EventTargetRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent6targetGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom18ffi__event__target(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP36rami3l8js_2dffi2js5ValueE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16prevent__defaultGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__event__prevent__default(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent9as__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent17stop__propagationGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  _M0FP37Yoorkin12rabbit_2dtea3dom29ffi__event__stop__propagation(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent9as__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(s));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent9as__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP37Yoorkin12rabbit_2dtea3dom5EventE(s);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent13to__ui__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(_M0FP37Yoorkin12rabbit_2dtea3dom18ffi__to__ui__event(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16to__mouse__eventGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(_M0FP37Yoorkin12rabbit_2dtea3dom21ffi__to__mouse__event(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7UIEventRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16to__mouse__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(s) {
  return _M0MP36rami3l8js_2dffi2js8Nullable10to__optionGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(_M0FP37Yoorkin12rabbit_2dtea3dom21ffi__to__mouse__event(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom5EventRP36rami3l8js_2dffi2js5ValueE(s)));
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement14set__attributeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, attr, value) {
  _M0FP37Yoorkin12rabbit_2dtea3dom28ffi__element__set__attribute(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), attr, value);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement17remove__attributeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, attr) {
  _M0FP37Yoorkin12rabbit_2dtea3dom31ffi__element__remove__attribute(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), attr);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement13set__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, prop, value) {
  _M0FP37Yoorkin12rabbit_2dtea3dom27ffi__element__set__property(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), prop, value);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement13get__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, prop) {
  return _M0FP37Yoorkin12rabbit_2dtea3dom27ffi__element__get__property(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), prop);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement16remove__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, prop) {
  _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__element__remove__property(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), prop);
}
function _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement16set__inner__htmlGRP37Yoorkin12rabbit_2dtea3dom7ElementE(s, html) {
  _M0FP37Yoorkin12rabbit_2dtea3dom30ffi__element__set__inner__html(_M0FP37Yoorkin12rabbit_2dtea3dom12js__identityGRP37Yoorkin12rabbit_2dtea3dom7ElementRP36rami3l8js_2dffi2js5ValueE(s), html);
}
function _M0MP37Yoorkin12rabbit_2dtea3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP37Yoorkin12rabbit_2dtea3dom27default__exception__handlerGRP37Yoorkin12rabbit_2dtea3dom12DOMExceptionRP37Yoorkin12rabbit_2dtea3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP37Yoorkin12rabbit_2dtea3dom27default__exception__handlerGRP37Yoorkin12rabbit_2dtea3dom12DOMExceptionRP37Yoorkin12rabbit_2dtea3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP37Yoorkin12rabbit_2dtea3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox21get__on__url__requestGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  return self.on_url_request;
}
function _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6launchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self, cmd) {
  const f = cmd;
  f(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3cmd6EventsGRP310typinglabs18rabbit__playground4main3MsgEE(self.predefined));
}
function _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self, message) {
  let cmd;
  let model;
  _L: {
    const _func = self.update;
    const _bind = _func(message, self.model);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L;
  }
  self.model = model;
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
  _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6launchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self, cmd);
}
function _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox7refreshGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self) {
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
}
function _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox3newGRP310typinglabs18rabbit__playground4main5ModelRP310typinglabs18rabbit__playground4main3MsgRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(model, update, view, after_update, url_changed, url_request) {
  const sandbox = { model: model, update: update, view: view, after_update: after_update, on_url_changed: url_changed, on_url_request: url_request, predefined: undefined };
  let on_url_changed;
  let f;
  _L: {
    _L$2: {
      if (url_changed === undefined) {
        on_url_changed = _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3url3UrlE;
      } else {
        const _Some = url_changed;
        const _f = _Some;
        f = _f;
        break _L$2;
      }
      break _L;
    }
    on_url_changed = (url) => {
      _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, f(url));
    };
  }
  let on_url_request;
  let f$2;
  _L$2: {
    _L$3: {
      if (url_request === undefined) {
        on_url_request = _M0FP311moonbitlang4core7builtin6ignoreGRP37Yoorkin12rabbit_2dtea3url10UrlRequestE;
      } else {
        const _Some = url_request;
        const _f = _Some;
        f$2 = _f;
        break _L$3;
      }
      break _L$2;
    }
    on_url_request = (url) => {
      _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, f$2(url));
    };
  }
  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(_M0MP37Yoorkin12rabbit_2dtea3dom6Window17to__event__target(_M0FP37Yoorkin12rabbit_2dtea3dom6window()), "popstate", (_discard_) => {
    let url;
    _L$3: {
      let _bind;
      let _try_err;
      _L$4: {
        _L$5: {
          const _bind$2 = _M0FP37Yoorkin12rabbit_2dtea3url5parse(_M0MP37Yoorkin12rabbit_2dtea3dom6Window12current__url(_M0FP37Yoorkin12rabbit_2dtea3dom6window()));
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            const _err = _bind$2;
            _try_err = _err._0;
            break _L$5;
          }
          _bind = new Result$Ok$11$(_tmp);
          break _L$4;
        }
        _bind = new Result$Err$11$(_try_err);
      }
      if (_bind.$tag === 1) {
        const _Ok = _bind;
        const _url = _Ok._0;
        url = _url;
        break _L$3;
      } else {
        $panic();
        return;
      }
    }
    on_url_changed(url);
  });
  sandbox.predefined = _M0MP37Yoorkin12rabbit_2dtea3cmd6Events3newGRP310typinglabs18rabbit__playground4main3MsgE(on_url_changed, on_url_request, (_hole18) => {
    _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, _hole18);
  });
  return sandbox;
}
function _M0IP37Yoorkin12rabbit_2dtea7variant7VariantP311moonbitlang4core7builtin2Eq5equal(_x_33, _x_34) {
  let _x0_41;
  let _y0_42;
  _L: {
    let _x0_39;
    let _y0_40;
    _L$2: {
      let _x0_37;
      let _y0_38;
      _L$3: {
        let _x0_35;
        let _y0_36;
        _L$4: {
          switch (_x_33.$tag) {
            case 0: {
              const _Boolean = _x_33;
              const _$42$x0_35 = _Boolean._0;
              if (_x_34.$tag === 0) {
                const _Boolean$2 = _x_34;
                const _$42$y0_36 = _Boolean$2._0;
                _x0_35 = _$42$x0_35;
                _y0_36 = _$42$y0_36;
                break _L$4;
              } else {
                return false;
              }
            }
            case 1: {
              const _Integer = _x_33;
              const _$42$x0_37 = _Integer._0;
              if (_x_34.$tag === 1) {
                const _Integer$2 = _x_34;
                const _$42$y0_38 = _Integer$2._0;
                _x0_37 = _$42$x0_37;
                _y0_38 = _$42$y0_38;
                break _L$3;
              } else {
                return false;
              }
            }
            case 2: {
              const _Floating = _x_33;
              const _$42$x0_39 = _Floating._0;
              if (_x_34.$tag === 2) {
                const _Floating$2 = _x_34;
                const _$42$y0_40 = _Floating$2._0;
                _x0_39 = _$42$x0_39;
                _y0_40 = _$42$y0_40;
                break _L$2;
              } else {
                return false;
              }
            }
            default: {
              const _String = _x_33;
              const _$42$x0_41 = _String._0;
              if (_x_34.$tag === 3) {
                const _String$2 = _x_34;
                const _$42$y0_42 = _String$2._0;
                _x0_41 = _$42$x0_41;
                _y0_42 = _$42$y0_42;
                break _L;
              } else {
                return false;
              }
            }
          }
        }
        return _x0_35 === _y0_36;
      }
      return _x0_37 === _y0_38;
    }
    return _x0_39 === _y0_40;
  }
  return _x0_41 === _y0_42;
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4nodeGRP310typinglabs18rabbit__playground4main3MsgE(tag, attrs, children) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$18$(tag, undefined, attrs, children, []);
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4textGRP310typinglabs18rabbit__playground4main3MsgE(value) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$18$(value);
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom14is__same__typeGRP310typinglabs18rabbit__playground4main3MsgE(x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (y.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (y.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP47Yoorkin12rabbit_2dtea8internal4vdom9Attribute5innerGRP310typinglabs18rabbit__playground4main3MsgE(self) {
  return { _0: self._0, _1: self._1 };
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom2onGRP310typinglabs18rabbit__playground4main3MsgE(event, handler) {
  return { _0: event, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$18$(handler) };
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom9attributeGRP310typinglabs18rabbit__playground4main3MsgE(key, value) {
  return { _0: key, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$18$(value) };
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom8propertyGRP310typinglabs18rabbit__playground4main3MsgE(key, value) {
  return { _0: key, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$18$(value) };
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom22variant__to__js__value(value) {
  let value$2;
  _L: {
    let value$3;
    _L$2: {
      let value$4;
      _L$3: {
        let value$5;
        _L$4: {
          switch (value.$tag) {
            case 3: {
              const _String = value;
              const _value = _String._0;
              value$5 = _value;
              break _L$4;
            }
            case 2: {
              const _Floating = value;
              const _value$2 = _Floating._0;
              value$4 = _value$2;
              break _L$3;
            }
            case 1: {
              const _Integer = value;
              const _value$3 = _Integer._0;
              value$3 = _value$3;
              break _L$2;
            }
            default: {
              const _Boolean = value;
              const _value$4 = _Boolean._0;
              value$2 = _value$4;
              break _L;
            }
          }
        }
        return value$5;
      }
      return value$4;
    }
    return value$3;
  }
  return value$2;
}
function _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self, sandbox) {
  const attach_attrs = (attrs, element, generated_listeners) => {
    _M0MP311moonbitlang4core5array5Array4eachGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, (x) => {
      let key;
      let value;
      _L: {
        let key$2;
        let value$2;
        _L$2: {
          let key$3;
          let value$3;
          _L$3: {
            let event;
            let handler;
            _L$4: {
              const _event = x._0;
              const _x = x._1;
              switch (_x.$tag) {
                case 0: {
                  const _AttrEvent = _x;
                  const _handler = _AttrEvent._0;
                  event = _event;
                  handler = _handler;
                  break _L$4;
                }
                case 2: {
                  const _AttrString = _x;
                  const _value = _AttrString._0;
                  key$3 = _event;
                  value$3 = _value;
                  break _L$3;
                }
                case 1: {
                  const _AttrStyle = _x;
                  const _value$2 = _AttrStyle._0;
                  key$2 = _event;
                  value$2 = _value$2;
                  break _L$2;
                }
                default: {
                  const _AttrProperty = _x;
                  const _value$3 = _AttrProperty._0;
                  key = _event;
                  value = _value$3;
                  break _L;
                }
              }
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$5: {
              _L$6: {
                let f;
                _L$7: {
                  _L$8: {
                    let msg$2;
                    _L$9: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$9;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$8;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$6;
                        }
                      }
                    }
                    listener = (_discard_) => {
                      _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, msg$2);
                    };
                    break _L$7;
                  }
                  listener = (event$2) => {
                    _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, f(event$2));
                  };
                }
                break _L$5;
              }
              listener = (event$2) => {
                if (stop_propagation) {
                  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent17stop__propagationGRP37Yoorkin12rabbit_2dtea3dom5EventE(event$2);
                }
                if (prevent_default) {
                  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16prevent__defaultGRP37Yoorkin12rabbit_2dtea3dom5EventE(event$2);
                }
                _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, msg);
              };
            }
            _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, event, listener);
            _M0MP311moonbitlang4core5array5Array4pushGUsWRP37Yoorkin12rabbit_2dtea3dom5EventEuEE(generated_listeners, { _0: event, _1: listener });
            return;
          }
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement14set__attributeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key$3, value$3);
          return;
        }
        _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration13set__property(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement10get__styleGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17to__html__elementGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element))), key$2, value$2);
        return;
      }
      _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement13set__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key, _M0FP47Yoorkin12rabbit_2dtea8internal4vdom22variant__to__js__value(value));
    });
  };
  let value;
  _L: {
    let width;
    let node;
    let attrs;
    let height;
    _L$2: {
      let listeners;
      let attrs$2;
      let tag;
      let children;
      let namespace_uri;
      _L$3: {
        switch (self.$tag) {
          case 0: {
            const _Node = self;
            const _tag = _Node._0;
            const _attrs = _Node._2;
            const _children = _Node._3;
            const _listeners = _Node._4;
            const _namespace_uri = _Node._1;
            listeners = _listeners;
            attrs$2 = _attrs;
            tag = _tag;
            children = _children;
            namespace_uri = _namespace_uri;
            break _L$3;
          }
          case 1: {
            const _ExternalNode = self;
            const _node = _ExternalNode._0;
            const _attrs$2 = _ExternalNode._1;
            const _width = _ExternalNode._2;
            const _height = _ExternalNode._3;
            width = _width;
            node = _node;
            attrs = _attrs$2;
            height = _height;
            break _L$2;
          }
          case 2: {
            const _Text = self;
            const _value = _Text._0;
            value = _value;
            break _L;
          }
          default: {
            return _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP37Yoorkin12rabbit_2dtea3dom8Document18create__text__node(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), ""));
          }
        }
      }
      let element;
      _L$4: {
        _L$5: {
          _L$6: {
            _L$7: {
              let url_request;
              _L$8: {
                _L$9: {
                  let ns;
                  _L$10: {
                    const _bind = _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox21get__on__url__requestGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox);
                    if (namespace_uri === undefined) {
                      if (_bind === undefined) {
                        if (tag === "RABBIT-TEA-ESCAPED-LINK") {
                          break _L$7;
                        } else {
                          break _L$5;
                        }
                      } else {
                        const _Some = _bind;
                        const _url_request = _Some;
                        switch (tag) {
                          case "a": {
                            url_request = _url_request;
                            break _L$9;
                          }
                          case "RABBIT-TEA-ESCAPED-LINK": {
                            break _L$7;
                          }
                          default: {
                            break _L$5;
                          }
                        }
                      }
                    } else {
                      const _Some = namespace_uri;
                      const _ns = _Some;
                      ns = _ns;
                      break _L$10;
                    }
                  }
                  const element$2 = _M0MP37Yoorkin12rabbit_2dtea3dom8Document19create__element__ns(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), ns, tag, undefined, undefined);
                  attach_attrs(attrs$2, element$2, listeners);
                  element = element$2;
                  break _L$8;
                }
                const element$2 = _M0MP37Yoorkin12rabbit_2dtea3dom8Document15create__element(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), tag);
                attach_attrs(attrs$2, element$2, listeners);
                _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element$2, "click", (event) => {
                  const mouse_event = _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16to__mouse__eventGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom7UIEventE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent13to__ui__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(event))));
                  if (!(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom12IsMouseEvent14get__meta__keyGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(mouse_event) || _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom12IsMouseEvent14get__ctrl__keyGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(mouse_event))) {
                    _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16prevent__defaultGRP37Yoorkin12rabbit_2dtea3dom5EventE(event);
                    const href = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement13get__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element$2, "href");
                    let curr;
                    _L$10: {
                      let _bind;
                      let _try_err;
                      _L$11: {
                        _L$12: {
                          const _bind$2 = _M0FP37Yoorkin12rabbit_2dtea3url5parse(_M0MP37Yoorkin12rabbit_2dtea3dom6Window12current__url(_M0FP37Yoorkin12rabbit_2dtea3dom6window()));
                          let _tmp;
                          if (_bind$2.$tag === 1) {
                            const _ok = _bind$2;
                            _tmp = _ok._0;
                          } else {
                            const _err = _bind$2;
                            _try_err = _err._0;
                            break _L$12;
                          }
                          _bind = new Result$Ok$11$(_tmp);
                          break _L$11;
                        }
                        _bind = new Result$Err$11$(_try_err);
                      }
                      if (_bind.$tag === 1) {
                        const _Ok = _bind;
                        const _curr = _Ok._0;
                        curr = _curr;
                        break _L$10;
                      } else {
                        $panic();
                        return;
                      }
                    }
                    let next;
                    _L$11: {
                      let _bind;
                      let _try_err;
                      _L$12: {
                        _L$13: {
                          const _bind$2 = _M0FP37Yoorkin12rabbit_2dtea3url5parse(href);
                          let _tmp;
                          if (_bind$2.$tag === 1) {
                            const _ok = _bind$2;
                            _tmp = _ok._0;
                          } else {
                            const _err = _bind$2;
                            _try_err = _err._0;
                            break _L$13;
                          }
                          _bind = new Result$Ok$11$(_tmp);
                          break _L$12;
                        }
                        _bind = new Result$Err$11$(_try_err);
                      }
                      if (_bind.$tag === 1) {
                        const _Ok = _bind;
                        const _next = _Ok._0;
                        next = _next;
                        break _L$11;
                      } else {
                        $panic();
                        return;
                      }
                    }
                    const request = _M0IP37Yoorkin12rabbit_2dtea3url8ProtocolP311moonbitlang4core7builtin2Eq5equal(curr.protocol, next.protocol) && (curr.host === next.host && _M0IP311moonbitlang4core6option6OptionP311moonbitlang4core7builtin2Eq5equalGiE(curr.port, next.port)) ? new $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal(next) : new $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External(href);
                    _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, url_request(request));
                    return;
                  } else {
                    return;
                  }
                });
                element = element$2;
              }
              break _L$6;
            }
            const element$2 = _M0MP37Yoorkin12rabbit_2dtea3dom8Document15create__element(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), "a");
            attach_attrs(attrs$2, element$2, listeners);
            element = element$2;
          }
          break _L$4;
        }
        const element$2 = _M0MP37Yoorkin12rabbit_2dtea3dom8Document15create__element(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), tag);
        attach_attrs(attrs$2, element$2, listeners);
        element = element$2;
      }
      const _arr = children;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _arr[_i];
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(child, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element);
    }
    let xs;
    _L$3: {
      _L$4: {
        const _bind = attrs.val;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _xs = _Some._0;
          xs = _xs;
          break _L$4;
        }
        break _L$3;
      }
      attach_attrs(xs, _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget11to__elementGRP37Yoorkin12rabbit_2dtea3dom4NodeE(node)), []);
      attrs.val = Option$None$19$;
    }
    const element = _M0MP37Yoorkin12rabbit_2dtea3dom8Document15create__element(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), "div");
    const _self = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement10get__styleGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17to__html__elementGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element)));
    _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration13set__property(_self, "width", _M0MP311moonbitlang4core3int3Int18to__string_2einner(width, 10));
    _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration13set__property(_self, "height", _M0MP311moonbitlang4core3int3Int18to__string_2einner(height, 10));
    _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, node);
    return _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element);
  }
  return _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP37Yoorkin12rabbit_2dtea3dom8Document18create__text__node(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), value));
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom11attrs__diffGRP310typinglabs18rabbit__playground4main3MsgE(old, new_, listeners) {
  const old_map = _M0MP311moonbitlang4core7builtin3Map10from__iterGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core7builtin4Iter3mapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(_M0MP311moonbitlang4core5array5Array4iterGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(old), (x) => _M0MP47Yoorkin12rabbit_2dtea8internal4vdom9Attribute5innerGRP310typinglabs18rabbit__playground4main3MsgE(x)));
  const new_map = _M0MP311moonbitlang4core7builtin3Map10from__iterGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core7builtin4Iter3mapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEUsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEEE(_M0MP311moonbitlang4core5array5Array4iterGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(new_), (x) => _M0MP47Yoorkin12rabbit_2dtea8internal4vdom9Attribute5innerGRP310typinglabs18rabbit__playground4main3MsgE(x)));
  const result = [];
  const _arr = listeners;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = _arr[_i];
      _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$18$(x._0, x._1));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _it = _M0MP311moonbitlang4core7builtin3Map5iter2GsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(old_map);
  while (true) {
    let key;
    let value;
    _L: {
      const _bind = _M0MP311moonbitlang4core7builtin5Iter24nextGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L;
      }
    }
    let value$2;
    _L$2: {
      _L$3: {
        let value$3;
        _L$4: {
          _L$5: {
            let value$4;
            _L$6: {
              _L$7: {
                switch (value.$tag) {
                  case 0: {
                    break;
                  }
                  case 1: {
                    const _AttrStyle = value;
                    const _value = _AttrStyle._0;
                    value$4 = _value;
                    break _L$7;
                  }
                  case 2: {
                    const _AttrString = value;
                    const _value$2 = _AttrString._0;
                    value$3 = _value$2;
                    break _L$5;
                  }
                  default: {
                    const _AttrProperty = value;
                    const _value$3 = _AttrProperty._0;
                    value$2 = _value$3;
                    break _L$3;
                  }
                }
                break _L$6;
              }
              if (_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key)) {
                let value_new;
                _L$8: {
                  _L$9: {
                    const _bind = _M0MP311moonbitlang4core6option6Option6unwrapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core7builtin3Map3getGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key));
                    if (_bind.$tag === 1) {
                      const _AttrStyle = _bind;
                      const _value_new = _AttrStyle._0;
                      value_new = _value_new;
                      break _L$9;
                    } else {
                      $panic();
                    }
                    break _L$8;
                  }
                  if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGsE(value$4, value_new)) {
                    _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$18$(key, value_new));
                  }
                }
              } else {
                _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$18$(key));
              }
            }
            break _L$4;
          }
          if (_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key)) {
            let value_new;
            _L$6: {
              _L$7: {
                const _bind = _M0MP311moonbitlang4core6option6Option6unwrapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core7builtin3Map3getGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key));
                if (_bind.$tag === 2) {
                  const _AttrString = _bind;
                  const _value_new = _AttrString._0;
                  value_new = _value_new;
                  break _L$7;
                } else {
                  $panic();
                }
                break _L$6;
              }
              if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGsE(value$3, value_new)) {
                _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$18$(key, value_new));
              }
            }
          } else {
            _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$18$(key));
          }
        }
        break _L$2;
      }
      if (_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key)) {
        let value_new;
        _L$4: {
          _L$5: {
            const _bind = _M0MP311moonbitlang4core6option6Option6unwrapGRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_M0MP311moonbitlang4core7builtin3Map3getGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map, key));
            if (_bind.$tag === 3) {
              const _AttrProperty = _bind;
              const _value_new = _AttrProperty._0;
              value_new = _value_new;
              break _L$5;
            } else {
              $panic();
            }
            break _L$4;
          }
          if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGRP37Yoorkin12rabbit_2dtea7variant7VariantE(value$2, value_new)) {
            _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$18$(key, value_new));
          }
        }
      } else {
        _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$18$(key));
      }
    }
    continue;
  }
  const _it$2 = _M0MP311moonbitlang4core7builtin3Map5iter2GsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(new_map);
  while (true) {
    let key;
    let value;
    _L: {
      const _bind = _M0MP311moonbitlang4core7builtin5Iter24nextGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(_it$2);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _key = _x._0;
        const _value = _x._1;
        key = _key;
        value = _value;
        break _L;
      }
    }
    let value$2;
    _L$2: {
      _L$3: {
        let value$3;
        _L$4: {
          _L$5: {
            let value$4;
            _L$6: {
              _L$7: {
                let handler;
                _L$8: {
                  switch (value.$tag) {
                    case 0: {
                      const _AttrEvent = value;
                      const _handler = _AttrEvent._0;
                      handler = _handler;
                      break _L$8;
                    }
                    case 1: {
                      const _AttrStyle = value;
                      const _value = _AttrStyle._0;
                      value$4 = _value;
                      break _L$7;
                    }
                    case 2: {
                      const _AttrString = value;
                      const _value$2 = _AttrString._0;
                      value$3 = _value$2;
                      break _L$5;
                    }
                    default: {
                      const _AttrProperty = value;
                      const _value$3 = _AttrProperty._0;
                      value$2 = _value$3;
                      break _L$3;
                    }
                  }
                }
                _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$18$(key, handler));
                break _L$6;
              }
              if (!_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(old_map, key)) {
                _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$18$(key, value$4));
              }
            }
            break _L$4;
          }
          if (!_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(old_map, key)) {
            _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$18$(key, value$3));
          }
        }
        break _L$2;
      }
      if (!_M0MP311moonbitlang4core7builtin3Map8containsGsRP47Yoorkin12rabbit_2dtea8internal4vdom9AttrValueGRP310typinglabs18rabbit__playground4main3MsgEE(old_map, key)) {
        _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom11AttrsUpdateGRP310typinglabs18rabbit__playground4main3MsgEE(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$18$(key, value$2));
      }
    }
    continue;
  }
  return result;
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom8do__diffGRP310typinglabs18rabbit__playground4main3MsgE(old, new_) {
  let children_old;
  if (old.$tag === 0) {
    const _Node = old;
    const _children = _Node._3;
    children_old = _children;
  } else {
    children_old = _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin5ArrayGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEEE("old is not a node or fragment", "@Yoorkin/rabbit-tea/internal/vdom:dom.mbt:492:10-492:48");
  }
  let children_new;
  if (new_.$tag === 0) {
    const _Node = new_;
    const _children = _Node._3;
    children_new = _children;
  } else {
    children_new = _M0FP311moonbitlang4core7builtin5abortGRP311moonbitlang4core7builtin5ArrayGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEEE("new is not a node or fragment", "@Yoorkin/rabbit-tea/internal/vdom:dom.mbt:496:10-496:48");
  }
  return children_old.length === 0 && children_new.length === 0 ? [] : _M0FP47Yoorkin12rabbit_2dtea8internal4vdom18diff__without__keyGRP310typinglabs18rabbit__playground4main3MsgE(children_old, children_new);
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom18diff__without__keyGRP310typinglabs18rabbit__playground4main3MsgE(old, new_) {
  const aux = (xs, ys, patches, index) => {
    let _tmp = xs;
    let _tmp$2 = ys;
    let _tmp$3 = patches;
    let _tmp$4 = index;
    while (true) {
      const xs$2 = _tmp;
      const ys$2 = _tmp$2;
      const patches$2 = _tmp$3;
      const index$2 = _tmp$4;
      let x;
      let tl1;
      let tl2;
      let y;
      _L: {
        let l;
        _L$2: {
          let tl;
          _L$3: {
            if ((xs$2.end - xs$2.start | 0) === 0) {
              if ((ys$2.end - ys$2.start | 0) === 0) {
                return;
              } else {
                tl = ys$2;
                break _L$3;
              }
            } else {
              if ((ys$2.end - ys$2.start | 0) === 0) {
                l = xs$2;
                break _L$2;
              } else {
                const _x = xs$2.buf[xs$2.start];
                const _x$2 = { buf: xs$2.buf, start: 1 + xs$2.start | 0, end: xs$2.end };
                const _y = ys$2.buf[ys$2.start];
                const _x$3 = { buf: ys$2.buf, start: 1 + ys$2.start | 0, end: ys$2.end };
                x = _x;
                tl1 = _x$2;
                tl2 = _x$3;
                y = _y;
                break _L;
              }
            }
          }
          _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$18$(_M0MP311moonbitlang4core5array9ArrayView3mapGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(tl, (x$2) => x$2)));
          return;
        }
        _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$18$(index$2, _M0MP311moonbitlang4core5array9ArrayView6lengthGRP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(l)));
        return;
      }
      if (_M0FP47Yoorkin12rabbit_2dtea8internal4vdom14is__same__typeGRP310typinglabs18rabbit__playground4main3MsgE(x, y)) {
        let value_a;
        let value_b;
        _L$2: {
          _L$3: {
            let listeners;
            let taga;
            let xattrs;
            let yattrs;
            let tagb;
            let new_listeners;
            _L$4: {
              _L$5: {
                switch (x.$tag) {
                  case 0: {
                    const _Node = x;
                    const _taga = _Node._0;
                    const _xattrs = _Node._2;
                    const _listeners = _Node._4;
                    if (y.$tag === 0) {
                      const _Node$2 = y;
                      const _tagb = _Node$2._0;
                      const _yattrs = _Node$2._2;
                      const _new_listeners = _Node$2._4;
                      listeners = _listeners;
                      taga = _taga;
                      xattrs = _xattrs;
                      yattrs = _yattrs;
                      tagb = _tagb;
                      new_listeners = _new_listeners;
                      break _L$5;
                    }
                    break;
                  }
                  case 1: {
                    if (y.$tag === 1) {
                      _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$(index$2, y));
                    }
                    break;
                  }
                  case 2: {
                    const _Text = x;
                    const _value_a = _Text._0;
                    if (y.$tag === 2) {
                      const _Text$2 = y;
                      const _value_b = _Text$2._0;
                      value_a = _value_a;
                      value_b = _value_b;
                      break _L$3;
                    }
                    break;
                  }
                }
                break _L$4;
              }
              if (taga === tagb) {
                const attrs_patches = _M0FP47Yoorkin12rabbit_2dtea8internal4vdom11attrs__diffGRP310typinglabs18rabbit__playground4main3MsgE(xattrs, yattrs, listeners);
                const childs_patches = _M0FP47Yoorkin12rabbit_2dtea8internal4vdom8do__diffGRP310typinglabs18rabbit__playground4main3MsgE(x, y);
                if (attrs_patches.length > 0 || childs_patches.length > 0) {
                  _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$18$(index$2, attrs_patches, childs_patches, new_listeners)));
                }
              } else {
                _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$(index$2, y));
              }
            }
            break _L$2;
          }
          if (_M0IP016_24default__implP311moonbitlang4core7builtin2Eq10not__equalGsE(value_a, value_b)) {
            _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$18$(index$2, value_b)));
          }
        }
      } else {
        _M0MP311moonbitlang4core5array5Array4pushGRP47Yoorkin12rabbit_2dtea8internal4vdom5PatchGRP310typinglabs18rabbit__playground4main3MsgEE(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$18$(index$2, y));
      }
      _tmp = tl1;
      _tmp$2 = tl2;
      _tmp$4 = index$2 + 1 | 0;
      continue;
    }
  };
  const patches = [];
  aux({ buf: old, start: 0, end: old.length }, { buf: new_, start: 0, end: new_.length }, patches, 0);
  return patches;
}
function _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4diffGRP310typinglabs18rabbit__playground4main3MsgE(root_old, root_new) {
  let attrs_old;
  let listeners;
  _L: {
    if (root_old.$tag === 0) {
      const _Node = root_old;
      const _attrs_old = _Node._2;
      const _listeners = _Node._4;
      attrs_old = _attrs_old;
      listeners = _listeners;
      break _L;
    } else {
      return $panic();
    }
  }
  let attrs_new;
  _L$2: {
    if (root_new.$tag === 0) {
      const _Node = root_new;
      const _attrs_new = _Node._2;
      attrs_new = _attrs_new;
      break _L$2;
    } else {
      return $panic();
    }
  }
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$18$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$18$(0, _M0FP47Yoorkin12rabbit_2dtea8internal4vdom11attrs__diffGRP310typinglabs18rabbit__playground4main3MsgE(attrs_old, attrs_new, listeners), _M0FP47Yoorkin12rabbit_2dtea8internal4vdom8do__diffGRP310typinglabs18rabbit__playground4main3MsgE(root_old, root_new), []));
}
function _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node5patchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self, old, sandbox, mount) {
  const patches = _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4diffGRP310typinglabs18rabbit__playground4main3MsgE(old, self);
  const aux = (patches$2, current) => {
    let update;
    _L: {
      let nodes;
      _L$2: {
        let index;
        let node;
        _L$3: {
          let index$2;
          let node$2;
          _L$4: {
            let index$3;
            _L$5: {
              let index$4;
              let length;
              _L$6: {
                switch (patches$2.$tag) {
                  case 0: {
                    const _Drop = patches$2;
                    const _index = _Drop._0;
                    const _length = _Drop._1;
                    index$4 = _index;
                    length = _length;
                    break _L$6;
                  }
                  case 1: {
                    const _Remove = patches$2;
                    const _index$2 = _Remove._0;
                    index$3 = _index$2;
                    break _L$5;
                  }
                  case 2: {
                    const _Replace = patches$2;
                    const _index$3 = _Replace._0;
                    const _node = _Replace._1;
                    index$2 = _index$3;
                    node$2 = _node;
                    break _L$4;
                  }
                  case 3: {
                    const _InsertBefore = patches$2;
                    const _index$4 = _InsertBefore._0;
                    const _node$2 = _InsertBefore._1;
                    index = _index$4;
                    node = _node$2;
                    break _L$3;
                  }
                  case 4: {
                    const _Append = patches$2;
                    const _nodes = _Append._0;
                    nodes = _nodes;
                    break _L$2;
                  }
                  default: {
                    const _Update = patches$2;
                    const _update = _Update._0;
                    update = _update;
                    break _L;
                  }
                }
              }
              const _start79 = 0;
              const _end80 = length;
              let _tmp = _start79;
              while (true) {
                const i = _tmp;
                if (i < _end80) {
                  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13remove__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index$4));
                  _tmp = i + 1 | 0;
                  continue;
                } else {
                  return;
                }
              }
            }
            _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13remove__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index$3));
            return;
          }
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode14replace__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(node$2, sandbox), _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index$2));
          return;
        }
        if (_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode17get__child__countGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current) === 0) {
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(node, sandbox));
          return;
        } else {
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode14insert__beforeGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(node, sandbox), _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index));
          return;
        }
      }
      const _arr = nodes;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const node = _arr[_i];
          _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode13append__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node8to__nodeGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(node, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    let index;
    let value;
    _L$2: {
      let childs_patches;
      let index$2;
      let attrs_patches;
      let new_listeners;
      _L$3: {
        if (update.$tag === 0) {
          const _UpdateNode = update;
          const _index = _UpdateNode._0;
          const _attrs_patches = _UpdateNode._1;
          const _childs_patches = _UpdateNode._2;
          const _new_listeners = _UpdateNode._3;
          childs_patches = _childs_patches;
          index$2 = _index;
          attrs_patches = _attrs_patches;
          new_listeners = _new_listeners;
          break _L$3;
        } else {
          const _UpdateText = update;
          const _index = _UpdateText._0;
          const _value = _UpdateText._1;
          index = _index;
          value = _value;
          break _L$2;
        }
      }
      const node = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index$2);
      const element = _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget11to__elementGRP37Yoorkin12rabbit_2dtea3dom4NodeE(node));
      const _arr = attrs_patches;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const patch = _arr[_i];
          let key;
          let handler;
          _L$4: {
            _L$5: {
              let key$2;
              let listener;
              _L$6: {
                _L$7: {
                  let key$3;
                  _L$8: {
                    _L$9: {
                      let key$4;
                      let value$2;
                      _L$10: {
                        _L$11: {
                          let key$5;
                          _L$12: {
                            _L$13: {
                              let key$6;
                              let value$3;
                              _L$14: {
                                _L$15: {
                                  let key$7;
                                  let value$4;
                                  _L$16: {
                                    _L$17: {
                                      let key$8;
                                      _L$18: {
                                        switch (patch.$tag) {
                                          case 0: {
                                            const _AttrRemove = patch;
                                            const _key = _AttrRemove._0;
                                            key$8 = _key;
                                            break _L$18;
                                          }
                                          case 1: {
                                            const _AttrAdd = patch;
                                            const _key$2 = _AttrAdd._0;
                                            const _value = _AttrAdd._1;
                                            key$7 = _key$2;
                                            value$4 = _value;
                                            break _L$17;
                                          }
                                          case 2: {
                                            const _StyleAdd = patch;
                                            const _key$3 = _StyleAdd._0;
                                            const _value$2 = _StyleAdd._1;
                                            key$6 = _key$3;
                                            value$3 = _value$2;
                                            break _L$15;
                                          }
                                          case 3: {
                                            const _StyleRemove = patch;
                                            const _key$4 = _StyleRemove._0;
                                            key$5 = _key$4;
                                            break _L$13;
                                          }
                                          case 4: {
                                            const _PropertyAdd = patch;
                                            const _key$5 = _PropertyAdd._0;
                                            const _value$3 = _PropertyAdd._1;
                                            key$4 = _key$5;
                                            value$2 = _value$3;
                                            break _L$11;
                                          }
                                          case 5: {
                                            const _PropertyRemove = patch;
                                            const _key$6 = _PropertyRemove._0;
                                            key$3 = _key$6;
                                            break _L$9;
                                          }
                                          case 6: {
                                            const _EventRemove = patch;
                                            const _key$7 = _EventRemove._0;
                                            const _listener = _EventRemove._1;
                                            key$2 = _key$7;
                                            listener = _listener;
                                            break _L$7;
                                          }
                                          default: {
                                            const _EventAdd = patch;
                                            const _key$8 = _EventAdd._0;
                                            const _handler = _EventAdd._1;
                                            key = _key$8;
                                            handler = _handler;
                                            break _L$5;
                                          }
                                        }
                                      }
                                      _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement17remove__attributeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key$8);
                                      break _L$16;
                                    }
                                    _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement14set__attributeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key$7, value$4);
                                  }
                                  break _L$14;
                                }
                                const element$2 = _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17to__html__elementGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element));
                                _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration13set__property(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement10get__styleGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(element$2), key$6, value$3);
                              }
                              break _L$12;
                            }
                            const element$2 = _M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17to__html__elementGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element));
                            _M0MP37Yoorkin12rabbit_2dtea3dom19CSSStyleDeclaration16remove__property(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsHtmlElement10get__styleGRP37Yoorkin12rabbit_2dtea3dom11HTMLElementE(element$2), key$5);
                          }
                          break _L$10;
                        }
                        _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement13set__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key$4, _M0FP47Yoorkin12rabbit_2dtea8internal4vdom22variant__to__js__value(value$2));
                      }
                      break _L$8;
                    }
                    _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement16remove__propertyGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key$3);
                  }
                  break _L$6;
                }
                _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget23remove__event__listenerGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget17as__event__targetGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element), key$2, listener);
              }
              break _L$4;
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$6: {
              _L$7: {
                let f;
                _L$8: {
                  _L$9: {
                    let msg$2;
                    _L$10: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$10;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$9;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$7;
                        }
                      }
                    }
                    listener = (_discard_) => {
                      _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, msg$2);
                    };
                    break _L$8;
                  }
                  listener = (event) => {
                    _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, f(event));
                  };
                }
                break _L$6;
              }
              listener = (event) => {
                if (stop_propagation) {
                  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent17stop__propagationGRP37Yoorkin12rabbit_2dtea3dom5EventE(event);
                }
                if (prevent_default) {
                  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16prevent__defaultGRP37Yoorkin12rabbit_2dtea3dom5EventE(event);
                }
                _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sandbox, msg);
              };
            }
            _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget20add__event__listenerGRP37Yoorkin12rabbit_2dtea3dom7ElementE(element, key, listener);
            _M0MP311moonbitlang4core5array5Array4pushGUsWRP37Yoorkin12rabbit_2dtea3dom5EventEuEE(new_listeners, { _0: key, _1: listener });
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$2 = childs_patches;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const patch = _arr$2[_i];
          aux(patch, node);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    const text_node = _M0MP37Yoorkin12rabbit_2dtea3dom8Document18create__text__node(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), value);
    _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode14replace__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(text_node), _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode10get__childGRP37Yoorkin12rabbit_2dtea3dom4NodeE(current, index));
  };
  const root = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom6IsNode8as__nodeGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP36rami3l8js_2dffi2js8Nullable6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP37Yoorkin12rabbit_2dtea3dom8Document20get__element__by__id(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), mount)));
  aux(patches, root);
}
function _M0FP37Yoorkin12rabbit_2dtea4html4nodeGRP310typinglabs18rabbit__playground4main3MsgE(tag, attributes, children) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4nodeGRP310typinglabs18rabbit__playground4main3MsgE(tag, _M0MP311moonbitlang4core5array5Array3mapGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attributes, (x) => x), _M0MP311moonbitlang4core5array5Array3mapGRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgERP47Yoorkin12rabbit_2dtea8internal4vdom4NodeGRP310typinglabs18rabbit__playground4main3MsgEE(children, (x) => x));
}
function _M0MP37Yoorkin12rabbit_2dtea4html4Html16to__virtual__domGRP310typinglabs18rabbit__playground4main3MsgE(self) {
  return _M0FP37Yoorkin12rabbit_2dtea4html4nodeGRP310typinglabs18rabbit__playground4main3MsgE("root", [], [self]);
}
function _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE(key, value) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom9attributeGRP310typinglabs18rabbit__playground4main3MsgE(key, value);
}
function _M0FP37Yoorkin12rabbit_2dtea4html20common__node_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, tag, attributes, children) {
  const attrs = [];
  if (style.length > 0) {
    const _bind = ";";
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("style", _M0MP311moonbitlang4core5array5Array4joinGsE(style, { str: _bind, start: 0, end: _bind.length })));
  }
  let class$2;
  _L: {
    _L$2: {
      if (class_ === undefined) {
      } else {
        const _Some = class_;
        const _class = _Some;
        class$2 = _class;
        break _L$2;
      }
      break _L;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("class", class$2));
  }
  let id$2;
  _L$2: {
    _L$3: {
      if (id === undefined) {
      } else {
        const _Some = id;
        const _id = _Some;
        id$2 = _id;
        break _L$3;
      }
      break _L$2;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("id", id$2));
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html4nodeGRP310typinglabs18rabbit__playground4main3MsgE(tag, _M0IP311moonbitlang4core5array5ArrayP311moonbitlang4core7builtin3Add3addGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attributes, attrs), children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html9on__mouseGRP310typinglabs18rabbit__playground4main3MsgE(event, msg) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom2onGRP310typinglabs18rabbit__playground4main3MsgE(event, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$((event$2) => msg(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom10MouseEventE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent16to__mouse__eventGRP37Yoorkin12rabbit_2dtea3dom5EventE(event$2)))));
}
function _M0FP37Yoorkin12rabbit_2dtea4html9on__clickGRP310typinglabs18rabbit__playground4main3MsgE(msg) {
  return _M0FP37Yoorkin12rabbit_2dtea4html9on__mouseGRP310typinglabs18rabbit__playground4main3MsgE("click", msg);
}
function _M0FP37Yoorkin12rabbit_2dtea4html10h1_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, children) {
  return _M0FP37Yoorkin12rabbit_2dtea4html20common__node_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, "h1", [], children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html2h1GRP310typinglabs18rabbit__playground4main3MsgE(style$46$opt, id, class_, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html10h1_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html11div_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, click, children) {
  const attrs = [];
  let click$2;
  _L: {
    _L$2: {
      if (click === undefined) {
      } else {
        const _Some = click;
        const _click = _Some;
        click$2 = _click;
        break _L$2;
      }
      break _L;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9on__clickGRP310typinglabs18rabbit__playground4main3MsgE((_discard_) => click$2));
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html20common__node_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, "div", attrs, children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html3divGRP310typinglabs18rabbit__playground4main3MsgE(style$46$opt, id, class_, click, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html11div_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, click, children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html9p_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, children) {
  return _M0FP37Yoorkin12rabbit_2dtea4html20common__node_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, "p", [], children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html1pGRP310typinglabs18rabbit__playground4main3MsgE(style$46$opt, id, class_, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html9p_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html4textGRP310typinglabs18rabbit__playground4main3MsgE(str) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4textGRP310typinglabs18rabbit__playground4main3MsgE(str);
}
function _M0FP37Yoorkin12rabbit_2dtea4html10on__changeGRP310typinglabs18rabbit__playground4main3MsgE(msg) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom2onGRP310typinglabs18rabbit__playground4main3MsgE("change", new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$((event) => {
    const target = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent6targetGRP37Yoorkin12rabbit_2dtea3dom5EventE(event);
    let value;
    let x;
    _L: {
      _L$2: {
        const _bind = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget24to__html__input__elementGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(target);
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _x = _Some._0;
          x = _x;
          break _L$2;
        } else {
          let x$2;
          _L$3: {
            _L$4: {
              const _bind$2 = _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget25to__html__select__elementGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(target);
              if (_bind$2.$tag === 1) {
                const _Some = _bind$2;
                const _x = _Some._0;
                x$2 = _x;
                break _L$4;
              } else {
                value = $panic();
              }
              break _L$3;
            }
            value = _M0MP37Yoorkin12rabbit_2dtea3dom17HTMLSelectElement5value(x$2);
          }
        }
        break _L;
      }
      value = _M0MP37Yoorkin12rabbit_2dtea3dom16HTMLInputElement5value(x);
    }
    return msg(value);
  }));
}
function _M0FP37Yoorkin12rabbit_2dtea4html9on__inputGRP310typinglabs18rabbit__playground4main3MsgE(msg) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom2onGRP310typinglabs18rabbit__playground4main3MsgE("input", new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$18$((event) => {
    const value = _M0MP37Yoorkin12rabbit_2dtea3dom16HTMLInputElement5value(_M0MP311moonbitlang4core6option6Option6unwrapGRP37Yoorkin12rabbit_2dtea3dom16HTMLInputElementE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom13IsEventTarget24to__html__input__elementGRP37Yoorkin12rabbit_2dtea3dom11EventTargetE(_M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom7IsEvent6targetGRP37Yoorkin12rabbit_2dtea3dom5EventE(event))));
    return msg(value);
  }));
}
function _M0FP37Yoorkin12rabbit_2dtea4html8propertyGRP310typinglabs18rabbit__playground4main3MsgE(key, value) {
  return _M0FP47Yoorkin12rabbit_2dtea8internal4vdom8propertyGRP310typinglabs18rabbit__playground4main3MsgE(key, value);
}
function _M0FP37Yoorkin12rabbit_2dtea4html13input_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(input_type, name, value, checked, read_only, multiple, accept, placeholder, auto_complete, style, max, min, step, maxlength, minlength, pattern, size, width, height, id, class_, children, change, input) {
  let input_type$2;
  switch (input_type) {
    case 0: {
      input_type$2 = "button";
      break;
    }
    case 1: {
      input_type$2 = "checkbox";
      break;
    }
    case 2: {
      input_type$2 = "color";
      break;
    }
    case 3: {
      input_type$2 = "date";
      break;
    }
    case 4: {
      input_type$2 = "datetime-local";
      break;
    }
    case 5: {
      input_type$2 = "email";
      break;
    }
    case 6: {
      input_type$2 = "file";
      break;
    }
    case 7: {
      input_type$2 = "hidden";
      break;
    }
    case 8: {
      input_type$2 = "image";
      break;
    }
    case 9: {
      input_type$2 = "month";
      break;
    }
    case 10: {
      input_type$2 = "number";
      break;
    }
    case 11: {
      input_type$2 = "password";
      break;
    }
    case 12: {
      input_type$2 = "radio";
      break;
    }
    case 13: {
      input_type$2 = "range";
      break;
    }
    case 14: {
      input_type$2 = "reset";
      break;
    }
    case 15: {
      input_type$2 = "search";
      break;
    }
    case 16: {
      input_type$2 = "submit";
      break;
    }
    case 17: {
      input_type$2 = "tel";
      break;
    }
    case 18: {
      input_type$2 = "text";
      break;
    }
    case 19: {
      input_type$2 = "time";
      break;
    }
    case 20: {
      input_type$2 = "url";
      break;
    }
    default: {
      input_type$2 = "week";
    }
  }
  let auto_complete$2;
  if (auto_complete === undefined) {
    auto_complete$2 = "off";
  } else {
    const _Some = auto_complete;
    const _x = _Some;
    if (_x === 0) {
      auto_complete$2 = "on";
    } else {
      auto_complete$2 = "off";
    }
  }
  const attrs = [];
  _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("type", input_type$2));
  _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("autocomplete", auto_complete$2));
  let name$2;
  _L: {
    _L$2: {
      if (name === undefined) {
      } else {
        const _Some = name;
        const _name = _Some;
        name$2 = _name;
        break _L$2;
      }
      break _L;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("name", name$2));
  }
  let value$2;
  _L$2: {
    _L$3: {
      if (value === undefined) {
      } else {
        const _Some = value;
        const _value = _Some;
        value$2 = _value;
        break _L$3;
      }
      break _L$2;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html8propertyGRP310typinglabs18rabbit__playground4main3MsgE("value", new $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$String(value$2)));
  }
  let checked$2;
  _L$3: {
    _L$4: {
      if (checked === -1) {
      } else {
        const _Some = checked;
        const _checked = _Some;
        checked$2 = _checked;
        break _L$4;
      }
      break _L$3;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html8propertyGRP310typinglabs18rabbit__playground4main3MsgE("checked", new $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean(checked$2)));
  }
  let read_only$2;
  _L$4: {
    _L$5: {
      if (read_only === -1) {
      } else {
        const _Some = read_only;
        const _read_only = _Some;
        read_only$2 = _read_only;
        break _L$5;
      }
      break _L$4;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html8propertyGRP310typinglabs18rabbit__playground4main3MsgE("readonly", new $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean(read_only$2)));
  }
  let multiple$2;
  _L$5: {
    _L$6: {
      if (multiple === -1) {
      } else {
        const _Some = multiple;
        const _multiple = _Some;
        multiple$2 = _multiple;
        break _L$6;
      }
      break _L$5;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html8propertyGRP310typinglabs18rabbit__playground4main3MsgE("multiple", new $64$Yoorkin$47$rabbit$45$tea$47$variant$46$Variant$Boolean(multiple$2)));
  }
  let accept$2;
  _L$6: {
    _L$7: {
      if (accept === undefined) {
      } else {
        const _Some = accept;
        const _accept = _Some;
        accept$2 = _accept;
        break _L$7;
      }
      break _L$6;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("accept", accept$2));
  }
  let max$2;
  _L$7: {
    _L$8: {
      if (max === undefined) {
      } else {
        const _Some = max;
        const _max = _Some;
        max$2 = _max;
        break _L$8;
      }
      break _L$7;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("max", _M0MP311moonbitlang4core3int3Int18to__string_2einner(max$2, 10)));
  }
  let min$2;
  _L$8: {
    _L$9: {
      if (min === undefined) {
      } else {
        const _Some = min;
        const _min = _Some;
        min$2 = _min;
        break _L$9;
      }
      break _L$8;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("min", _M0MP311moonbitlang4core3int3Int18to__string_2einner(min$2, 10)));
  }
  let step$2;
  _L$9: {
    _L$10: {
      if (step === undefined) {
      } else {
        const _Some = step;
        const _step = _Some;
        step$2 = _step;
        break _L$10;
      }
      break _L$9;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("step", _M0MP311moonbitlang4core3int3Int18to__string_2einner(step$2, 10)));
  }
  let maxlength$2;
  _L$10: {
    _L$11: {
      if (maxlength === undefined) {
      } else {
        const _Some = maxlength;
        const _maxlength = _Some;
        maxlength$2 = _maxlength;
        break _L$11;
      }
      break _L$10;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("maxlength", _M0MP311moonbitlang4core3int3Int18to__string_2einner(maxlength$2, 10)));
  }
  let minlength$2;
  _L$11: {
    _L$12: {
      if (minlength === undefined) {
      } else {
        const _Some = minlength;
        const _minlength = _Some;
        minlength$2 = _minlength;
        break _L$12;
      }
      break _L$11;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("minlength", _M0MP311moonbitlang4core3int3Int18to__string_2einner(minlength$2, 10)));
  }
  let pattern$2;
  _L$12: {
    _L$13: {
      if (pattern === undefined) {
      } else {
        const _Some = pattern;
        const _pattern = _Some;
        pattern$2 = _pattern;
        break _L$13;
      }
      break _L$12;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("pattern", pattern$2));
  }
  let size$2;
  _L$13: {
    _L$14: {
      if (size === undefined) {
      } else {
        const _Some = size;
        const _size = _Some;
        size$2 = _size;
        break _L$14;
      }
      break _L$13;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("size", _M0MP311moonbitlang4core3int3Int18to__string_2einner(size$2, 10)));
  }
  let width$2;
  _L$14: {
    _L$15: {
      if (width === undefined) {
      } else {
        const _Some = width;
        const _width = _Some;
        width$2 = _width;
        break _L$15;
      }
      break _L$14;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("width", _M0MP311moonbitlang4core3int3Int18to__string_2einner(width$2, 10)));
  }
  let height$2;
  _L$15: {
    _L$16: {
      if (height === undefined) {
      } else {
        const _Some = height;
        const _height = _Some;
        height$2 = _height;
        break _L$16;
      }
      break _L$15;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("height", _M0MP311moonbitlang4core3int3Int18to__string_2einner(height$2, 10)));
  }
  let placeholder$2;
  _L$16: {
    _L$17: {
      if (placeholder === undefined) {
      } else {
        const _Some = placeholder;
        const _placeholder = _Some;
        placeholder$2 = _placeholder;
        break _L$17;
      }
      break _L$16;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9attributeGRP310typinglabs18rabbit__playground4main3MsgE("placeholder", placeholder$2));
  }
  let to_msg;
  _L$17: {
    _L$18: {
      if (change === undefined) {
      } else {
        const _Some = change;
        const _to_msg = _Some;
        to_msg = _to_msg;
        break _L$18;
      }
      break _L$17;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html10on__changeGRP310typinglabs18rabbit__playground4main3MsgE(to_msg));
  }
  let to_msg$2;
  _L$18: {
    _L$19: {
      if (input === undefined) {
      } else {
        const _Some = input;
        const _to_msg = _Some;
        to_msg$2 = _to_msg;
        break _L$19;
      }
      break _L$18;
    }
    _M0MP311moonbitlang4core5array5Array4pushGRP37Yoorkin12rabbit_2dtea4html9AttributeGRP310typinglabs18rabbit__playground4main3MsgEE(attrs, _M0FP37Yoorkin12rabbit_2dtea4html9on__inputGRP310typinglabs18rabbit__playground4main3MsgE(to_msg$2));
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html20common__node_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(style, id, class_, "input", attrs, children);
}
function _M0FP37Yoorkin12rabbit_2dtea4html5inputGRP310typinglabs18rabbit__playground4main3MsgE(input_type$46$opt, name, value, checked, read_only, multiple, accept, placeholder, auto_complete, style$46$opt, max, min, step, maxlength, minlength, pattern, size, width, height, id, class_, children$46$opt, change, input) {
  let input_type;
  if (input_type$46$opt === undefined) {
    input_type = 18;
  } else {
    const _Some = input_type$46$opt;
    input_type = _Some;
  }
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  let children;
  if (children$46$opt.$tag === 1) {
    const _Some = children$46$opt;
    children = _Some._0;
  } else {
    children = [];
  }
  return _M0FP37Yoorkin12rabbit_2dtea4html13input_2einnerGRP310typinglabs18rabbit__playground4main3MsgE(input_type, name, value, checked, read_only, multiple, accept, placeholder, auto_complete, style, max, min, step, maxlength, minlength, pattern, size, width, height, id, class_, children, change, input);
}
function _M0FP27Yoorkin12rabbit_2dtea11new_2einnerGRP310typinglabs18rabbit__playground4main5ModelRP310typinglabs18rabbit__playground4main3MsgE(model, update, view, mount) {
  _M0IP016_24default__implP37Yoorkin12rabbit_2dtea3dom9IsElement16set__inner__htmlGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP36rami3l8js_2dffi2js8Nullable6unwrapGRP37Yoorkin12rabbit_2dtea3dom7ElementE(_M0MP37Yoorkin12rabbit_2dtea3dom8Document20get__element__by__id(_M0FP37Yoorkin12rabbit_2dtea3dom8document(), mount)), "<div></div>");
  const sandbox = { val: undefined };
  const curr_dom = { val: _M0FP47Yoorkin12rabbit_2dtea8internal4vdom4nodeGRP310typinglabs18rabbit__playground4main3MsgE("div", [], []) };
  const after_update = (html) => {
    let sandbox$2;
    _L: {
      const _bind = sandbox.val;
      if (_bind === undefined) {
        $panic();
        return;
      } else {
        const _Some = _bind;
        const _sandbox = _Some;
        sandbox$2 = _sandbox;
        break _L;
      }
    }
    const new_dom = _M0MP37Yoorkin12rabbit_2dtea4html4Html16to__virtual__domGRP310typinglabs18rabbit__playground4main3MsgE(html);
    _M0MP47Yoorkin12rabbit_2dtea8internal4vdom4Node5patchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(new_dom, curr_dom.val, sandbox$2, mount);
    curr_dom.val = new_dom;
  };
  const sb = _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox3newGRP310typinglabs18rabbit__playground4main5ModelRP310typinglabs18rabbit__playground4main3MsgRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(model, update, view, after_update, undefined, undefined);
  sandbox.val = sb;
  _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox7refreshGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(sb);
  return { sandbox: sb };
}
function _M0MP27Yoorkin12rabbit_2dtea3App8dispatchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelE(self, msg) {
  _M0MP47Yoorkin12rabbit_2dtea8internal7browser7Sandbox6updateGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelRP37Yoorkin12rabbit_2dtea4html4HtmlGRP310typinglabs18rabbit__playground4main3MsgEE(self.sandbox, msg);
}
function _M0FP310typinglabs18rabbit__playground4main27bind__focus__blur__listenerGRP310typinglabs18rabbit__playground4main3MsgE(id, focused_msg, blurred_msg) {
  return (events) => {
    _M0FP310typinglabs18rabbit__playground4main20install__focus__blur(id, () => {
      _M0MP37Yoorkin12rabbit_2dtea3cmd6Events15trigger__updateGRP310typinglabs18rabbit__playground4main3MsgE(events, focused_msg);
    }, () => {
      _M0MP37Yoorkin12rabbit_2dtea3cmd6Events15trigger__updateGRP310typinglabs18rabbit__playground4main3MsgE(events, blurred_msg);
    });
  };
}
function _M0FP310typinglabs18rabbit__playground4main6update(msg, model) {
  let value;
  _L: {
    switch (msg.$tag) {
      case 0: {
        return { _0: _M0FP310typinglabs18rabbit__playground4main27bind__focus__blur__listenerGRP310typinglabs18rabbit__playground4main3MsgE("tracked-input", Msg$Focused, Msg$Blurred), _1: model };
      }
      case 1: {
        const _InputChanged = msg;
        const _value = _InputChanged._0;
        value = _value;
        break _L;
      }
      case 2: {
        return { _0: _M0FP37Yoorkin12rabbit_2dtea3cmd4noneGRP310typinglabs18rabbit__playground4main3MsgE(), _1: { value: model.value, is_focused: true, last_event: "focus" } };
      }
      default: {
        return { _0: _M0FP37Yoorkin12rabbit_2dtea3cmd4noneGRP310typinglabs18rabbit__playground4main3MsgE(), _1: { value: model.value, is_focused: false, last_event: "blur" } };
      }
    }
  }
  return { _0: _M0FP37Yoorkin12rabbit_2dtea3cmd4noneGRP310typinglabs18rabbit__playground4main3MsgE(), _1: { value: value, is_focused: model.is_focused, last_event: "input" } };
}
function _M0FP310typinglabs18rabbit__playground4main4view(model) {
  return _M0FP37Yoorkin12rabbit_2dtea4html3divGRP310typinglabs18rabbit__playground4main3MsgE(Option$None$20$, undefined, "mx-auto mt-16 max-w-xl space-y-4 rounded-lg border border-slate-300 bg-white p-6", undefined, [_M0FP37Yoorkin12rabbit_2dtea4html2h1GRP310typinglabs18rabbit__playground4main3MsgE(Option$None$20$, undefined, "text-2xl font-bold text-slate-900", [_M0FP37Yoorkin12rabbit_2dtea4html4textGRP310typinglabs18rabbit__playground4main3MsgE("Rabbit-TEA focus/blur sample")]), _M0FP37Yoorkin12rabbit_2dtea4html1pGRP310typinglabs18rabbit__playground4main3MsgE(Option$None$20$, undefined, "text-slate-600", [_M0FP37Yoorkin12rabbit_2dtea4html4textGRP310typinglabs18rabbit__playground4main3MsgE("Type in the input and switch focus to see events.")]), _M0FP37Yoorkin12rabbit_2dtea4html5inputGRP310typinglabs18rabbit__playground4main3MsgE(undefined, undefined, model.value, -1, -1, -1, undefined, "Focus and blur this input", undefined, Option$None$20$, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tracked-input", "w-full rounded border border-slate-300 px-3 py-2", Option$None$21$, undefined, (v) => new Msg$InputChanged(v)), _M0FP37Yoorkin12rabbit_2dtea4html1pGRP310typinglabs18rabbit__playground4main3MsgE(Option$None$20$, undefined, "text-slate-800", [_M0FP37Yoorkin12rabbit_2dtea4html4textGRP310typinglabs18rabbit__playground4main3MsgE(`focused: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(_M0IP016_24default__implP311moonbitlang4core7builtin4Show10to__stringGbE(model.is_focused))}, last_event: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(model.last_event)}, value: ${_M0IP311moonbitlang4core6string6StringP311moonbitlang4core7builtin4Show10to__string(model.value)}`)])]);
}
(() => {
  const model = { value: "", is_focused: false, last_event: "none" };
  const app = _M0FP27Yoorkin12rabbit_2dtea11new_2einnerGRP310typinglabs18rabbit__playground4main5ModelRP310typinglabs18rabbit__playground4main3MsgE(model, _M0FP310typinglabs18rabbit__playground4main6update, _M0FP310typinglabs18rabbit__playground4main4view, "app");
  _M0MP27Yoorkin12rabbit_2dtea3App8dispatchGRP310typinglabs18rabbit__playground4main3MsgRP310typinglabs18rabbit__playground4main5ModelE(app, Msg$Init);
})();
//# sourceMappingURL=main.js.map
