!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.moment=e()}(this,function(){"use strict";var t;function m(){return t.apply(null,arguments)}function o(t){return"[object Array]"===Object.prototype.toString.call(t)}function u(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t,e){for(var n in e)_(e,n)&&(t[n]=e[n]);return _(e,"toString")&&(t.toString=e.toString),_(e,"valueOf")&&(t.valueOf=e.valueOf),t}function a(t,e,n,i){return Ht(t,e,n,i,!0).utc()}function y(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}),t._pf}function l(t){if(null==t._isValid){var e=y(t);t._isValid=!(isNaN(t._d.getTime())||!(e.overflow<0)||e.empty||e.invalidMonth||e.invalidWeekday||e.nullInput||e.invalidFormat||e.userInvalidated),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function c(t){var e=a(NaN);return null!=t?d(y(e),t):y(e).userInvalidated=!0,e}var s=m.momentProperties=[];function h(t,e){var n,i,r;if(void 0!==e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),void 0!==e._i&&(t._i=e._i),void 0!==e._f&&(t._f=e._f),void 0!==e._l&&(t._l=e._l),void 0!==e._strict&&(t._strict=e._strict),void 0!==e._tzm&&(t._tzm=e._tzm),void 0!==e._isUTC&&(t._isUTC=e._isUTC),void 0!==e._offset&&(t._offset=e._offset),void 0!==e._pf&&(t._pf=y(e)),void 0!==e._locale&&(t._locale=e._locale),0<s.length)for(n in s)void 0!==(r=e[i=s[n]])&&(t[i]=r);return t}var e=!1;function f(t){h(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),!1===e&&(e=!0,m.updateOffset(this),e=!1)}function v(t){return t instanceof f||null!=t&&null!=t._isAMomentObject}function p(t){return t<0?Math.ceil(t):Math.floor(t)}function g(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=p(e)),n}function D(t,e,n){var i,r=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),a=0;for(i=0;i<r;i++)(n&&t[i]!==e[i]||!n&&g(t[i])!==g(e[i]))&&a++;return a+s}function n(){}var i,r={};function M(t){return t?t.toLowerCase().replace("_","-"):t}function Y(t){var e=null;if(!r[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=i._abbr,require("./locale/"+t),w(e)}catch(t){}return r[t]}function w(t,e){var n;return t&&(n=void 0===e?k(t):S(t,e))&&(i=n),i._abbr}function S(t,e){return null!==e?(e.abbr=t,r[t]=r[t]||new n,r[t].set(e),w(t),r[t]):(delete r[t],null)}function k(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return i;if(!o(t)){if(e=Y(t))return e;t=[t]}return function(t){for(var e,n,i,r,s=0;s<t.length;){for(e=(r=M(t[s]).split("-")).length,n=(n=M(t[s+1]))?n.split("-"):null;0<e;){if(i=Y(r.slice(0,e).join("-")))return i;if(n&&n.length>=e&&D(r,n,!0)>=e-1)break;e--}s++}return null}(t)}var T={};function b(t,e){var n=t.toLowerCase();T[n]=T[n+"s"]=T[e]=t}function O(t){return"string"==typeof t?T[t]||T[t.toLowerCase()]:void 0}function U(t){var e,n,i={};for(n in t)_(t,n)&&(e=O(n))&&(i[e]=t[n]);return i}function W(e,n){return function(t){return null!=t?(G(this,e,t),m.updateOffset(this,n),this):C(this,e)}}function C(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function G(t,e,n){return t._d["set"+(t._isUTC?"UTC":"")+e](n)}function F(t,e){var n;if("object"==typeof t)for(n in t)this.set(n,t[n]);else if("function"==typeof this[t=O(t)])return this[t](e);return this}function P(t,e,n){var i=""+Math.abs(t),r=e-i.length;return(0<=t?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var x=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,H=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,L={},I={};function A(t,e,n,i){var r=i;"string"==typeof i&&(r=function(){return this[i]()}),t&&(I[t]=r),e&&(I[e[0]]=function(){return P(r.apply(this,arguments),e[1],e[2])}),n&&(I[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function z(t,e){return t.isValid()?(e=N(e,t.localeData()),L[e]=L[e]||function(n){var i,r,t,s=n.match(x);for(i=0,r=s.length;i<r;i++)I[s[i]]?s[i]=I[s[i]]:s[i]=(t=s[i]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(t){var e="";for(i=0;i<r;i++)e+=s[i]instanceof Function?s[i].call(t,n):s[i];return e}}(e),L[e](t)):t.localeData().invalidDate()}function N(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}for(H.lastIndex=0;0<=n&&H.test(t);)t=t.replace(H,i),H.lastIndex=0,n-=1;return t}var Z=/\d/,j=/\d\d/,E=/\d{3}/,V=/\d{4}/,q=/[+-]?\d{6}/,J=/\d\d?/,$=/\d{1,3}/,R=/\d{1,4}/,B=/[+-]?\d{1,6}/,Q=/\d+/,X=/[+-]?\d+/,K=/Z|[+-]\d\d:?\d\d/gi,tt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,et={};function nt(t,e,n){var i;et[t]="function"==typeof(i=e)&&"[object Function]"===Object.prototype.toString.call(i)?e:function(t){return t&&n?n:e}}var it={};function rt(t,n){var e,i=n;for("string"==typeof t&&(t=[t]),"number"==typeof n&&(i=function(t,e){e[n]=g(t)}),e=0;e<t.length;e++)it[t[e]]=i}function st(t,r){rt(t,function(t,e,n,i){n._w=n._w||{},r(t,n._w,n,i)})}var at=0,ot=1,ut=2,dt=3,lt=4,ct=5,ht=6;function ft(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}A("M",["MM",2],"Mo",function(){return this.month()+1}),A("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),A("MMMM",0,0,function(t){return this.localeData().months(this,t)}),b("month","M"),nt("M",J),nt("MM",J,j),nt("MMM",tt),nt("MMMM",tt),rt(["M","MM"],function(t,e){e[ot]=g(t)-1}),rt(["MMM","MMMM"],function(t,e,n,i){var r=n._locale.monthsParse(t,i,n._strict);null!=r?e[ot]=r:y(n).invalidMonth=t});var mt="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var _t="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function yt(t,e){var n;return"string"==typeof e&&"number"!=typeof(e=t.localeData().monthsParse(e))||(n=Math.min(t.date(),ft(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n)),t}function vt(t){return null!=t?(yt(this,t),m.updateOffset(this,!0),this):C(this,"Month")}function pt(t){var e,n=t._a;return n&&-2===y(t).overflow&&(e=n[ot]<0||11<n[ot]?ot:n[ut]<1||n[ut]>ft(n[at],n[ot])?ut:n[dt]<0||24<n[dt]||24===n[dt]&&(0!==n[lt]||0!==n[ct]||0!==n[ht])?dt:n[lt]<0||59<n[lt]?lt:n[ct]<0||59<n[ct]?ct:n[ht]<0||999<n[ht]?ht:-1,y(t)._overflowDayOfYear&&(e<at||ut<e)&&(e=ut),y(t).overflow=e),t}function gt(t){!1===m.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function Dt(t,e){var n=!0;return d(function(){return n&&(gt(t+"\n"+(new Error).stack),n=!1),e.apply(this,arguments)},e)}var Mt={};m.suppressDeprecationWarnings=!1;var Yt=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],St=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],kt=/^\/?Date\((\-?\d+)/i;function Tt(t){var e,n,i=t._i,r=Yt.exec(i);if(r){for(y(t).iso=!0,e=0,n=wt.length;e<n;e++)if(wt[e][1].exec(i)){t._f=wt[e][0];break}for(e=0,n=St.length;e<n;e++)if(St[e][1].exec(i)){t._f+=(r[6]||" ")+St[e][0];break}i.match(K)&&(t._f+="Z"),Pt(t)}else t._isValid=!1}function bt(t){var e=new Date(Date.UTC.apply(null,arguments));return t<1970&&e.setUTCFullYear(t),e}function Ot(t){return Ut(t)?366:365}function Ut(t){return t%4==0&&t%100!=0||t%400==0}m.createFromInputFallback=Dt("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),A(0,["YY",2],0,function(){return this.year()%100}),A(0,["YYYY",4],0,"year"),A(0,["YYYYY",5],0,"year"),A(0,["YYYYYY",6,!0],0,"year"),b("year","y"),nt("Y",X),nt("YY",J,j),nt("YYYY",R,V),nt("YYYYY",B,q),nt("YYYYYY",B,q),rt(["YYYYY","YYYYYY"],at),rt("YYYY",function(t,e){e[at]=2===t.length?m.parseTwoDigitYear(t):g(t)}),rt("YY",function(t,e){e[at]=m.parseTwoDigitYear(t)});var Wt=W("FullYear",!(m.parseTwoDigitYear=function(t){return g(t)+(68<g(t)?1900:2e3)}));function Ct(t,e,n){var i,r=n-e,s=n-t.day();return r<s&&(s-=7),s<r-7&&(s+=7),i=Lt(t).add(s,"d"),{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}A("w",["ww",2],"wo","week"),A("W",["WW",2],"Wo","isoWeek"),b("week","w"),b("isoWeek","W"),nt("w",J),nt("ww",J,j),nt("W",J),nt("WW",J,j),st(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=g(t)});function Gt(t,e,n){return null!=t?t:null!=e?e:n}function Ft(t){var e,n,i,r,s=[];if(!t._d){var a,o;for(a=t,o=new Date,i=a._useUTC?[o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()]:[o.getFullYear(),o.getMonth(),o.getDate()],t._w&&null==t._a[ut]&&null==t._a[ot]&&function(t){var e,n,i,r,s,a,o;null!=(e=t._w).GG||null!=e.W||null!=e.E?(s=1,a=4,n=Gt(e.GG,t._a[at],Ct(Lt(),1,4).year),i=Gt(e.W,1),r=Gt(e.E,1)):(s=t._locale._week.dow,a=t._locale._week.doy,n=Gt(e.gg,t._a[at],Ct(Lt(),s,a).year),i=Gt(e.w,1),null!=e.d?(r=e.d)<s&&++i:r=null!=e.e?e.e+s:s);u=n,d=i,l=r,c=a,h=s,m=6+h-c,_=bt(u,0,1+m).getUTCDay(),_<h&&(_+=7),o={year:0<(f=1+m+7*(d-1)-_+(l=null!=l?1*l:h))?u:u-1,dayOfYear:0<f?f:Ot(u-1)+f},t._a[at]=o.year,t._dayOfYear=o.dayOfYear;var u,d,l,c,h,f,m,_}(t),t._dayOfYear&&(r=Gt(t._a[at],i[at]),t._dayOfYear>Ot(r)&&(y(t)._overflowDayOfYear=!0),n=bt(r,0,t._dayOfYear),t._a[ot]=n.getUTCMonth(),t._a[ut]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=s[e]=i[e];for(;e<7;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[dt]&&0===t._a[lt]&&0===t._a[ct]&&0===t._a[ht]&&(t._nextDay=!0,t._a[dt]=0),t._d=(t._useUTC?bt:function(t,e,n,i,r,s,a){var o=new Date(t,e,n,i,r,s,a);return t<1970&&o.setFullYear(t),o}).apply(null,s),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[dt]=24)}}function Pt(t){if(t._f!==m.ISO_8601){t._a=[],y(t).empty=!0;var e,n,i,r,s,a,o,u,d,l,c=""+t._i,h=c.length,f=0;for(i=N(t._f,t._locale).match(x)||[],e=0;e<i.length;e++)r=i[e],(n=(c.match((d=r,l=t,_(et,d)?et[d](l._strict,l._locale):new RegExp(d.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,r){return e||n||i||r}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))))||[])[0])&&(0<(s=c.substr(0,c.indexOf(n))).length&&y(t).unusedInput.push(s),c=c.slice(c.indexOf(n)+n.length),f+=n.length),I[r]?(n?y(t).empty=!1:y(t).unusedTokens.push(r),a=r,u=t,null!=(o=n)&&_(it,a)&&it[a](o,u._a,u,a)):t._strict&&!n&&y(t).unusedTokens.push(r);y(t).charsLeftOver=h-f,0<c.length&&y(t).unusedInput.push(c),!0===y(t).bigHour&&t._a[dt]<=12&&0<t._a[dt]&&(y(t).bigHour=void 0),t._a[dt]=function(t,e,n){var i;if(null==n)return e;return null!=t.meridiemHour?t.meridiemHour(e,n):(null!=t.isPM&&((i=t.isPM(n))&&e<12&&(e+=12),i||12!==e||(e=0)),e)}(t._locale,t._a[dt],t._meridiem),Ft(t),pt(t)}else Tt(t)}function xt(t){var e,n,i,r,s=t._i,a=t._f;return t._locale=t._locale||k(t._l),null===s||void 0===a&&""===s?c({nullInput:!0}):("string"==typeof s&&(t._i=s=t._locale.preparse(s)),v(s)?new f(pt(s)):(o(a)?function(t){var e,n,i,r,s;if(0===t._f.length)return y(t).invalidFormat=!0,t._d=new Date(NaN);for(r=0;r<t._f.length;r++)s=0,e=h({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[r],Pt(e),l(e)&&(s+=y(e).charsLeftOver,s+=10*y(e).unusedTokens.length,y(e).score=s,(null==i||s<i)&&(i=s,n=e));d(t,n||e)}(t):a?Pt(t):u(s)?t._d=s:void 0===(n=(e=t)._i)?e._d=new Date:u(n)?e._d=new Date(+n):"string"==typeof n?(i=e,null===(r=kt.exec(i._i))?(Tt(i),!1===i._isValid&&(delete i._isValid,m.createFromInputFallback(i))):i._d=new Date(+r[1])):o(n)?(e._a=function(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}(n.slice(0),function(t){return parseInt(t,10)}),Ft(e)):"object"==typeof n?function(t){if(!t._d){var e=U(t._i);t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],Ft(t)}}(e):"number"==typeof n?e._d=new Date(n):m.createFromInputFallback(e),t))}function Ht(t,e,n,i,r){var s,a={};return"boolean"==typeof n&&(i=n,n=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=r,a._l=n,a._i=t,a._f=e,a._strict=i,(s=new f(pt(xt(a))))._nextDay&&(s.add(1,"d"),s._nextDay=void 0),s}function Lt(t,e,n,i){return Ht(t,e,n,i,!1)}A("DDD",["DDDD",3],"DDDo","dayOfYear"),b("dayOfYear","DDD"),nt("DDD",$),nt("DDDD",E),rt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=g(t)}),m.ISO_8601=function(){};var It=Dt("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Lt.apply(null,arguments);return t<this?this:t}),At=Dt("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Lt.apply(null,arguments);return this<t?this:t});function zt(t,e){var n,i;if(1===e.length&&o(e[0])&&(e=e[0]),!e.length)return Lt();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}function Nt(t){var e=U(t),n=e.year||0,i=e.quarter||0,r=e.month||0,s=e.week||0,a=e.day||0,o=e.hour||0,u=e.minute||0,d=e.second||0,l=e.millisecond||0;this._milliseconds=+l+1e3*d+6e4*u+36e5*o,this._days=+a+7*s,this._months=+r+3*i+12*n,this._data={},this._locale=k(),this._bubble()}function Zt(t){return t instanceof Nt}function jt(t,n){A(t,0,0,function(){var t=this.utcOffset(),e="+";return t<0&&(t=-t,e="-"),e+P(~~(t/60),2)+n+P(~~t%60,2)})}jt("Z",":"),jt("ZZ",""),nt("Z",K),nt("ZZ",K),rt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Vt(t)});var Et=/([\+\-]|\d\d)/gi;function Vt(t){var e=(t||"").match(K)||[],n=((e[e.length-1]||[])+"").match(Et)||["-",0,0],i=60*n[1]+g(n[2]);return"+"===n[0]?i:-i}function qt(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(v(t)||u(t)?+t:+Lt(t))-+n,n._d.setTime(+n._d+i),m.updateOffset(n,!1),n):Lt(t).local()}function Jt(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function $t(){return this._isUTC&&0===this._offset}m.updateOffset=function(){};var Rt=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Bt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function Qt(t,e){var n,i,r,s=t,a=null;return Zt(t)?s={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(s={},e?s[e]=t:s.milliseconds=t):(a=Rt.exec(t))?(n="-"===a[1]?-1:1,s={y:0,d:g(a[ut])*n,h:g(a[dt])*n,m:g(a[lt])*n,s:g(a[ct])*n,ms:g(a[ht])*n}):(a=Bt.exec(t))?(n="-"===a[1]?-1:1,s={y:Xt(a[2],n),M:Xt(a[3],n),d:Xt(a[4],n),h:Xt(a[5],n),m:Xt(a[6],n),s:Xt(a[7],n),w:Xt(a[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(r=function(t,e){var n;e=qt(e,t),t.isBefore(e)?n=Kt(t,e):((n=Kt(e,t)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Lt(s.from),Lt(s.to)),(s={}).ms=r.milliseconds,s.M=r.months),i=new Nt(s),Zt(t)&&_(t,"_locale")&&(i._locale=t._locale),i}function Xt(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Kt(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function te(s,a){return function(t,e){var n,i,r;return null===e||isNaN(+e)||(r="moment()."+(i=a)+"(period, number) is deprecated. Please use moment()."+a+"(number, period).",Mt[i]||(gt(r),Mt[i]=!0),n=t,t=e,e=n),ee(this,Qt(t="string"==typeof t?+t:t,e),s),this}}function ee(t,e,n,i){var r=e._milliseconds,s=e._days,a=e._months;i=null==i||i,r&&t._d.setTime(+t._d+r*n),s&&G(t,"Date",C(t,"Date")+s*n),a&&yt(t,C(t,"Month")+a*n),i&&m.updateOffset(t,s||a)}Qt.fn=Nt.prototype;var ne=te(1,"add"),ie=te(-1,"subtract");function re(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function se(t){var e;return void 0===t?this._locale._abbr:(null!=(e=k(t))&&(this._locale=e),this)}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var ae=Dt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});function oe(){return this._locale}function ue(t,e){A(0,[t,t.length],0,e)}function de(t,e,n){return Ct(Lt([t,11,31+e-n]),e,n).week}A(0,["gg",2],0,function(){return this.weekYear()%100}),A(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ue("gggg","weekYear"),ue("ggggg","weekYear"),ue("GGGG","isoWeekYear"),ue("GGGGG","isoWeekYear"),b("weekYear","gg"),b("isoWeekYear","GG"),nt("G",X),nt("g",X),nt("GG",J,j),nt("gg",J,j),nt("GGGG",R,V),nt("gggg",R,V),nt("GGGGG",B,q),nt("ggggg",B,q),st(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=g(t)}),st(["gg","GG"],function(t,e,n,i){e[i]=m.parseTwoDigitYear(t)}),A("Q",0,0,"quarter"),b("quarter","Q"),nt("Q",Z),rt("Q",function(t,e){e[ot]=3*(g(t)-1)}),A("D",["DD",2],"Do","date"),b("date","D"),nt("D",J),nt("DD",J,j),nt("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),rt(["D","DD"],ut),rt("Do",function(t,e){e[ut]=g(t.match(J)[0])});var le=W("Date",!0);A("d",0,"do","day"),A("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),A("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),A("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),A("e",0,0,"weekday"),A("E",0,0,"isoWeekday"),b("day","d"),b("weekday","e"),b("isoWeekday","E"),nt("d",J),nt("e",J),nt("E",J),nt("dd",tt),nt("ddd",tt),nt("dddd",tt),st(["dd","ddd","dddd"],function(t,e,n){var i=n._locale.weekdaysParse(t);null!=i?e.d=i:y(n).invalidWeekday=t}),st(["d","e","E"],function(t,e,n,i){e[i]=g(t)});var ce="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var he="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var fe="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function me(t,e){A(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function _e(t,e){return e._meridiemParse}A("H",["HH",2],0,"hour"),A("h",["hh",2],0,function(){return this.hours()%12||12}),me("a",!0),me("A",!1),b("hour","h"),nt("a",_e),nt("A",_e),nt("H",J),nt("h",J),nt("HH",J,j),nt("hh",J,j),rt(["H","HH"],dt),rt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),rt(["h","hh"],function(t,e,n){e[dt]=g(t),y(n).bigHour=!0});var ye=W("Hours",!0);A("m",["mm",2],0,"minute"),b("minute","m"),nt("m",J),nt("mm",J,j),rt(["m","mm"],lt);var ve=W("Minutes",!1);A("s",["ss",2],0,"second"),b("second","s"),nt("s",J),nt("ss",J,j),rt(["s","ss"],ct);var pe,ge=W("Seconds",!1);for(A("S",0,0,function(){return~~(this.millisecond()/100)}),A(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),A(0,["SSS",3],0,"millisecond"),A(0,["SSSS",4],0,function(){return 10*this.millisecond()}),A(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),A(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),A(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),A(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),A(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),b("millisecond","ms"),nt("S",$,Z),nt("SS",$,j),nt("SSS",$,E),pe="SSSS";pe.length<=9;pe+="S")nt(pe,Q);function De(t,e){e[ht]=g(1e3*("0."+t))}for(pe="S";pe.length<=9;pe+="S")rt(pe,De);var Me=W("Milliseconds",!1);A("z",0,0,"zoneAbbr"),A("zz",0,0,"zoneName");var Ye=f.prototype;Ye.add=ne,Ye.calendar=function(t,e){var n=t||Lt(),i=qt(n,this).startOf("day"),r=this.diff(i,"days",!0),s=r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse";return this.format(e&&e[s]||this.localeData().calendar(s,this,Lt(n)))},Ye.clone=function(){return new f(this)},Ye.diff=function(t,e,n){var i,r,s=qt(t,this),a=6e4*(s.utcOffset()-this.utcOffset());return"year"===(e=O(e))||"month"===e||"quarter"===e?(o=this,u=s,c=12*(u.year()-o.year())+(u.month()-o.month()),h=o.clone().add(c,"months"),l=u-h<0?(d=o.clone().add(c-1,"months"),(u-h)/(h-d)):(d=o.clone().add(c+1,"months"),(u-h)/(d-h)),r=-(c+l),"quarter"===e?r/=3:"year"===e&&(r/=12)):(i=this-s,r="second"===e?i/1e3:"minute"===e?i/6e4:"hour"===e?i/36e5:"day"===e?(i-a)/864e5:"week"===e?(i-a)/6048e5:i),n?r:p(r);var o,u,d,l,c,h},Ye.endOf=function(t){return void 0===(t=O(t))||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms")},Ye.format=function(t){var e=z(this,t||m.defaultFormat);return this.localeData().postformat(e)},Ye.from=function(t,e){return this.isValid()?Qt({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},Ye.fromNow=function(t){return this.from(Lt(),t)},Ye.to=function(t,e){return this.isValid()?Qt({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},Ye.toNow=function(t){return this.to(Lt(),t)},Ye.get=F,Ye.invalidAt=function(){return y(this).overflow},Ye.isAfter=function(t,e){return"millisecond"===(e=O(void 0!==e?e:"millisecond"))?+(t=v(t)?t:Lt(t))<+this:(v(t)?+t:+Lt(t))<+this.clone().startOf(e)},Ye.isBefore=function(t,e){var n;return"millisecond"===(e=O(void 0!==e?e:"millisecond"))?+this<+(t=v(t)?t:Lt(t)):(n=v(t)?+t:+Lt(t),+this.clone().endOf(e)<n)},Ye.isBetween=function(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)},Ye.isSame=function(t,e){var n;return"millisecond"===(e=O(e||"millisecond"))?+this==+(t=v(t)?t:Lt(t)):(n=+Lt(t),+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e))},Ye.isValid=function(){return l(this)},Ye.lang=ae,Ye.locale=se,Ye.localeData=oe,Ye.max=At,Ye.min=It,Ye.parsingFlags=function(){return d({},y(this))},Ye.set=F,Ye.startOf=function(t){switch(t=O(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},Ye.subtract=ie,Ye.toArray=function(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},Ye.toObject=function(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},Ye.toDate=function(){return this._offset?new Date(+this):this._d},Ye.toISOString=re,Ye.toJSON=re,Ye.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Ye.unix=function(){return Math.floor(+this/1e3)},Ye.valueOf=function(){return+this._d-6e4*(this._offset||0)},Ye.year=Wt,Ye.isLeapYear=function(){return Ut(this.year())},Ye.weekYear=function(t){var e=Ct(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==t?e:this.add(t-e,"y")},Ye.isoWeekYear=function(t){var e=Ct(this,1,4).year;return null==t?e:this.add(t-e,"y")},Ye.quarter=Ye.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},Ye.month=vt,Ye.daysInMonth=function(){return ft(this.year(),this.month())},Ye.week=Ye.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},Ye.isoWeek=Ye.isoWeeks=function(t){var e=Ct(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},Ye.weeksInYear=function(){var t=this.localeData()._week;return de(this.year(),t.dow,t.doy)},Ye.isoWeeksInYear=function(){return de(this.year(),1,4)},Ye.date=le,Ye.day=Ye.days=function(t){var e,n,i=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(e=t,n=this.localeData(),t="string"!=typeof e?e:isNaN(e)?"number"==typeof(e=n.weekdaysParse(e))?e:null:parseInt(e,10),this.add(t-i,"d")):i},Ye.weekday=function(t){var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},Ye.isoWeekday=function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},Ye.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},Ye.hour=Ye.hours=ye,Ye.minute=Ye.minutes=ve,Ye.second=Ye.seconds=ge,Ye.millisecond=Ye.milliseconds=Me,Ye.utcOffset=function(t,e){var n,i=this._offset||0;return null!=t?("string"==typeof t&&(t=Vt(t)),Math.abs(t)<16&&(t*=60),!this._isUTC&&e&&(n=Jt(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),i!==t&&(!e||this._changeInProgress?ee(this,Qt(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?i:Jt(this)},Ye.utc=function(t){return this.utcOffset(0,t)},Ye.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Jt(this),"m")),this},Ye.parseZone=function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Vt(this._i)),this},Ye.hasAlignedHourOffset=function(t){return t=t?Lt(t).utcOffset():0,(this.utcOffset()-t)%60==0},Ye.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Ye.isDSTShifted=function(){if(void 0!==this._isDSTShifted)return this._isDSTShifted;var t={};if(h(t,this),(t=xt(t))._a){var e=t._isUTC?a(t._a):Lt(t._a);this._isDSTShifted=this.isValid()&&0<D(t._a,e.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted},Ye.isLocal=function(){return!this._isUTC},Ye.isUtcOffset=function(){return this._isUTC},Ye.isUtc=$t,Ye.isUTC=$t,Ye.zoneAbbr=function(){return this._isUTC?"UTC":""},Ye.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Ye.dates=Dt("dates accessor is deprecated. Use date instead.",le),Ye.months=Dt("months accessor is deprecated. Use month instead",vt),Ye.years=Dt("years accessor is deprecated. Use year instead",Wt),Ye.zone=Dt("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()});var we=Ye;function Se(t){return t}var ke=n.prototype;function Te(t,e,n,i){var r=k(),s=a().set(i,e);return r[n](s,t)}function be(t,e,n,i,r){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return Te(t,e,n,r);var s,a=[];for(s=0;s<i;s++)a[s]=Te(t,s,n,r);return a}ke._calendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ke.calendar=function(t,e,n){var i=this._calendar[t];return"function"==typeof i?i.call(e,n):i},ke._longDateFormat={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ke.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])},ke._invalidDate="Invalid date",ke.invalidDate=function(){return this._invalidDate},ke._ordinal="%d",ke.ordinal=function(t){return this._ordinal.replace("%d",t)},ke._ordinalParse=/\d{1,2}/,ke.preparse=Se,ke.postformat=Se,ke._relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ke.relativeTime=function(t,e,n,i){var r=this._relativeTime[n];return"function"==typeof r?r(t,e,n,i):r.replace(/%d/i,t)},ke.pastFuture=function(t,e){var n=this._relativeTime[0<t?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ke.set=function(t){var e,n;for(n in t)"function"==typeof(e=t[n])?this[n]=e:this["_"+n]=e;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},ke.months=function(t){return this._months[t.month()]},ke._months=mt,ke.monthsShort=function(t){return this._monthsShort[t.month()]},ke._monthsShort=_t,ke.monthsParse=function(t,e,n){var i,r,s;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=a([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(s="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(s.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}},ke.week=function(t){return Ct(t,this._week.dow,this._week.doy).week},ke._week={dow:0,doy:6},ke.firstDayOfYear=function(){return this._week.doy},ke.firstDayOfWeek=function(){return this._week.dow},ke.weekdays=function(t){return this._weekdays[t.day()]},ke._weekdays=ce,ke.weekdaysMin=function(t){return this._weekdaysMin[t.day()]},ke._weekdaysMin=fe,ke.weekdaysShort=function(t){return this._weekdaysShort[t.day()]},ke._weekdaysShort=he,ke.weekdaysParse=function(t){var e,n,i;for(this._weekdaysParse=this._weekdaysParse||[],e=0;e<7;e++)if(this._weekdaysParse[e]||(n=Lt([2e3,1]).day(e),i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(i.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},ke.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},ke._meridiemParse=/[ap]\.?m?\.?/i,ke.meridiem=function(t,e,n){return 11<t?n?"pm":"PM":n?"am":"AM"},w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===g(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),m.lang=Dt("moment.lang is deprecated. Use moment.locale instead.",w),m.langData=Dt("moment.langData is deprecated. Use moment.localeData instead.",k);var Oe=Math.abs;function Ue(t,e,n,i){var r=Qt(e,n);return t._milliseconds+=i*r._milliseconds,t._days+=i*r._days,t._months+=i*r._months,t._bubble()}function We(t){return t<0?Math.floor(t):Math.ceil(t)}function Ce(t){return 4800*t/146097}function Ge(t){return 146097*t/4800}function Fe(t){return function(){return this.as(t)}}var Pe=Fe("ms"),xe=Fe("s"),He=Fe("m"),Le=Fe("h"),Ie=Fe("d"),Ae=Fe("w"),ze=Fe("M"),Ne=Fe("y");function Ze(t){return function(){return this._data[t]}}var je=Ze("milliseconds"),Ee=Ze("seconds"),Ve=Ze("minutes"),qe=Ze("hours"),Je=Ze("days"),$e=Ze("months"),Re=Ze("years");var Be=Math.round,Qe={s:45,m:45,h:22,d:26,M:11};var Xe=Math.abs;function Ke(){var t,e,n=Xe(this._milliseconds)/1e3,i=Xe(this._days),r=Xe(this._months);e=p((t=p(n/60))/60),n%=60,t%=60;var s=p(r/12),a=r%=12,o=i,u=e,d=t,l=n,c=this.asSeconds();return c?(c<0?"-":"")+"P"+(s?s+"Y":"")+(a?a+"M":"")+(o?o+"D":"")+(u||d||l?"T":"")+(u?u+"H":"")+(d?d+"M":"")+(l?l+"S":""):"P0D"}var tn=Nt.prototype;return tn.abs=function(){var t=this._data;return this._milliseconds=Oe(this._milliseconds),this._days=Oe(this._days),this._months=Oe(this._months),t.milliseconds=Oe(t.milliseconds),t.seconds=Oe(t.seconds),t.minutes=Oe(t.minutes),t.hours=Oe(t.hours),t.months=Oe(t.months),t.years=Oe(t.years),this},tn.add=function(t,e){return Ue(this,t,e,1)},tn.subtract=function(t,e){return Ue(this,t,e,-1)},tn.as=function(t){var e,n,i=this._milliseconds;if("month"===(t=O(t))||"year"===t)return e=this._days+i/864e5,n=this._months+Ce(e),"month"===t?n:n/12;switch(e=this._days+Math.round(Ge(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}},tn.asMilliseconds=Pe,tn.asSeconds=xe,tn.asMinutes=He,tn.asHours=Le,tn.asDays=Ie,tn.asWeeks=Ae,tn.asMonths=ze,tn.asYears=Ne,tn.valueOf=function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12)},tn._bubble=function(){var t,e,n,i,r,s=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=s&&0<=a&&0<=o||s<=0&&a<=0&&o<=0||(s+=864e5*We(Ge(o)+a),o=a=0),u.milliseconds=s%1e3,t=p(s/1e3),u.seconds=t%60,e=p(t/60),u.minutes=e%60,n=p(e/60),u.hours=n%24,o+=r=p(Ce(a+=p(n/24))),a-=We(Ge(r)),i=p(o/12),o%=12,u.days=a,u.months=o,u.years=i,this},tn.get=function(t){return this[(t=O(t))+"s"]()},tn.milliseconds=je,tn.seconds=Ee,tn.minutes=Ve,tn.hours=qe,tn.days=Je,tn.weeks=function(){return p(this.days()/7)},tn.months=$e,tn.years=Re,tn.humanize=function(t){var e,n,i,r,s,a,o,u,d,l,c,h=this.localeData(),f=(n=!t,i=h,r=Qt(e=this).abs(),s=Be(r.as("s")),a=Be(r.as("m")),o=Be(r.as("h")),u=Be(r.as("d")),d=Be(r.as("M")),l=Be(r.as("y")),(c=s<Qe.s&&["s",s]||1===a&&["m"]||a<Qe.m&&["mm",a]||1===o&&["h"]||o<Qe.h&&["hh",o]||1===u&&["d"]||u<Qe.d&&["dd",u]||1===d&&["M"]||d<Qe.M&&["MM",d]||1===l&&["y"]||["yy",l])[2]=n,c[3]=0<+e,c[4]=i,function(t,e,n,i,r){return r.relativeTime(e||1,!!n,t,i)}.apply(null,c));return t&&(f=h.pastFuture(+this,f)),h.postformat(f)},tn.toISOString=Ke,tn.toString=Ke,tn.toJSON=Ke,tn.locale=se,tn.localeData=oe,tn.toIsoString=Dt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ke),tn.lang=ae,A("X",0,0,"unix"),A("x",0,0,"valueOf"),nt("x",X),nt("X",/[+-]?\d+(\.\d{1,3})?/),rt("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),rt("x",function(t,e,n){n._d=new Date(g(t))}),m.version="2.10.6",t=Lt,m.fn=we,m.min=function(){return zt("isBefore",[].slice.call(arguments,0))},m.max=function(){return zt("isAfter",[].slice.call(arguments,0))},m.utc=a,m.unix=function(t){return Lt(1e3*t)},m.months=function(t,e){return be(t,e,"months",12,"month")},m.isDate=u,m.locale=w,m.invalid=c,m.duration=Qt,m.isMoment=v,m.weekdays=function(t,e){return be(t,e,"weekdays",7,"day")},m.parseZone=function(){return Lt.apply(null,arguments).parseZone()},m.localeData=k,m.isDuration=Zt,m.monthsShort=function(t,e){return be(t,e,"monthsShort",12,"month")},m.weekdaysMin=function(t,e){return be(t,e,"weekdaysMin",7,"day")},m.defineLocale=S,m.weekdaysShort=function(t,e){return be(t,e,"weekdaysShort",7,"day")},m.normalizeUnits=O,m.relativeTimeThreshold=function(t,e){return void 0!==Qe[t]&&(void 0===e?Qe[t]:(Qe[t]=e,!0))},m});changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             return other < this ? this : other;
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return !this._isUTC;
    }

    function isUtcOffset () {
        return this._isUTC;
    }

    function isUtc () {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff (input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear (input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear (input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add          = add_subtract__add;
    momentPrototype__proto.calendar     = moment_calendar__calendar;
    momentPrototype__proto.clone        = clone;
    momentPrototype__proto.diff         = diff;
    momentPrototype__proto.endOf        = endOf;
    momentPrototype__proto.format       = format;
    momentPrototype__proto.from         = from;
    momentPrototype__proto.fromNow      = fromNow;
    momentPrototype__proto.to           = to;
    momentPrototype__proto.toNow        = toNow;
    momentPrototype__proto.get          = getSet;
    momentPrototype__proto.invalidAt    = invalidAt;
    momentPrototype__proto.isAfter      = isAfter;
    momentPrototype__proto.isBefore     = isBefore;
    momentPrototype__proto.isBetween    = isBetween;
    momentPrototype__proto.isSame       = isSame;
    momentPrototype__proto.isValid      = moment_valid__isValid;
    momentPrototype__proto.lang         = lang;
    momentPrototype__proto.locale       = locale;
    momentPrototype__proto.localeData   = localeData;
    momentPrototype__proto.max          = prototypeMax;
    momentPrototype__proto.min          = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set          = getSet;
    momentPrototype__proto.startOf      = startOf;
    momentPrototype__proto.subtract     = add_subtract__subtract;
    momentPrototype__proto.toArray      = toArray;
    momentPrototype__proto.toObject     = toObject;
    momentPrototype__proto.toDate       = toDate;
    momentPrototype__proto.toISOString  = moment_format__toISOString;
    momentPrototype__proto.toJSON       = moment_format__toISOString;
    momentPrototype__proto.toString     = toString;
    momentPrototype__proto.unix         = unix;
    momentPrototype__proto.valueOf      = to_type__valueOf;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months       =        localeMonths;
    prototype__proto._months      = defaultLocaleMonths;
    prototype__proto.monthsShort  =        localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse  =        localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes === 1          && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   === 1          && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    === 1          && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  === 1          && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   === 1          && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
