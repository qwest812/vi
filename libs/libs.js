/**
 * Created by lykhachov on 6/26/17.
 */

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function pe(a){if(G(a))t(a.objectMaxDepth)&&(Lc.objectMaxDepth=Tb(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Lc}function Tb(a){return W(a)&&0<a}function K(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.5/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function oa(a){if(null==a||Za(a))return!1;if(I(a)||C(a)||z&&a instanceof z)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function p(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(Mc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)wa.call(a,c)&&b.call(d,a[c],c,a);return a}function Nc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Ub(a){return function(b,d){a(d,b)}}function qe(){return++sb}function Vb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(G(g)||E(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],n=g[m];d&&G(n)?ia(n)?a[m]=new Date(n.valueOf()):$a(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Wb(n)?a[m]=n.clone():(G(a[m])||(a[m]=I(n)?[]:{}),Vb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function O(a){return Vb(a,xa.call(arguments,1),!1)}function re(a){return Vb(a,xa.call(arguments,1),!0)}function Q(a){return parseInt(a,10)}function Xb(a,b){return O(Object.create(a),b)}function B(){}
function ab(a){return a}function aa(a){return function(){return a}}function Yb(a){return E(a.toString)&&a.toString!==la}function v(a){return"undefined"===typeof a}function t(a){return"undefined"!==typeof a}function G(a){return null!==a&&"object"===typeof a}function Mc(a){return null!==a&&"object"===typeof a&&!Oc(a)}function C(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ia(a){return"[object Date]"===la.call(a)}function Zb(a){switch(la.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function E(a){return"function"===typeof a}function $a(a){return"[object RegExp]"===la.call(a)}function Za(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function La(a){return"boolean"===typeof a}function se(a){return a&&W(a.length)&&te.test(la.call(a))}function Wb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ue(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function ya(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Mc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)wa.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!G(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if(Za(a)||bb(a))throw za("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Oc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Tb(d)?d:NaN;if(b){if(se(b)||"[object ArrayBuffer]"===la.call(b))throw za("cpta");if(a===b)throw za("cpi");I(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function $b(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?$b(a.getTime(),b.getTime()):!1;if($a(a))return $a(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||Za(a)||Za(b)||I(b)||ia(b)||$a(b))return!1;d=R();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&t(b[c])&&!E(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(xa.call(b,d))}function Qa(a,b){var d=2<arguments.length?xa.call(arguments,2):[];return!E(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Pc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Za(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!v(a))return W(b)||(b=b?2:null),JSON.stringify(a,Pc,b)}function Qc(a){return C(a)?JSON.parse(a):a}function Rc(a,b){a=a.replace(ve,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return ba(d)?b:d}function ac(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Rc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function Aa(a){a=z(a).clone().empty();var b=z("<div>").append(a).html();try{return a[0].nodeType===Ma?N(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(b)}}function Sc(a){try{return decodeURIComponent(a)}catch(b){}}function Tc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=
a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Sc(e),t(e)&&(f=t(f)?Sc(f):!0,wa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function bc(a){var b=[];p(a,function(a,c){I(a)?p(a,function(a){b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))}):b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))});return b.length?b.join("&"):""}function fb(a){return ma(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function we(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,C(d=a.getAttribute(d)))return d;return null}function xe(a,b){var d,c,e={};p(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ye?(e.strictDi=null!==we(d,"strict-di"),
b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){G(d)||(d={});d=O({strictDi:!1},d);var c=function(){a=z(a);if(a.injector()){var c=a[0]===x.document?"document":Aa(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=gb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");fa.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};E(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function ze(){x.name=
"NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function Ae(a){a=fa.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Be,function(a,c){return(c?b:"")+a.toLowerCase()})}function Ce(){var a;if(!Wc){var b=tb();(ta=v(b)?x.jQuery:b?x[b]:void 0)&&ta.fn.on?(z=ta,O(ta.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),a=ta.cleanData,ta.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=ta._data(f,"events"))&&c.$destroy&&ta(f).triggerHandler("$destroy");a(b)}):z=S;fa.element=z;Wc=!0}}function hb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function ub(a,b,d){d&&I(a)&&(a=a[a.length-1]);hb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Oa(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?Qa(e,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=z(xa.call(a,0,e))),c.push(b);return c||a}function R(){return Object.create(null)}function cc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Yb(a)||I(a)||ia(a)?eb(a):a.toString()}return a}function De(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=K("$injector"),c=K("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||K;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return p}}function b(a,c,d){d||(d=e);return function(b,e){e&&E(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return p}}if(!g)throw d("nomod",f);var e=[],q=[],F=[],M=a("$injector","invoke","push",q),p={_invokeQueue:e,_configBlocks:q,
_runBlocks:F,info:function(a){if(t(a)){if(!G(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",q),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider",
"component"),config:M,run:function(a){F.push(a);return this}};k&&M(k);return p})}})}function ra(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(G(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ee(a,b){var d=[];Tb(b)&&(a=fa.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Pc(a,b);if(G(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Fe(a){O(a,{errorHandlingConfig:pe,bootstrap:Uc,copy:Ia,extend:O,merge:re,equals:sa,
element:z,forEach:p,injector:gb,noop:B,bind:Qa,toJson:eb,fromJson:Qc,identity:ab,isUndefined:v,isDefined:t,isString:C,isFunction:E,isObject:G,isNumber:W,isElement:Wb,isArray:I,version:Ge,isDate:ia,lowercase:N,uppercase:wb,callbacks:{$$counter:0},getTestability:Ae,reloadWithDebugInfo:ze,$$minErr:K,$$csp:Ja,$$encodeUriSegment:fb,$$encodeUriQuery:ma,$$stringify:cc});dc=De(x);dc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:He});a.provider("$compile",Yc).directive({a:Ie,input:Zc,
textarea:Zc,form:Je,script:Ke,select:Le,option:Me,ngBind:Ne,ngBindHtml:Oe,ngBindTemplate:Pe,ngClass:Qe,ngClassEven:Re,ngClassOdd:Se,ngCloak:Te,ngController:Ue,ngForm:Ve,ngHide:We,ngIf:Xe,ngInclude:Ye,ngInit:Ze,ngNonBindable:$e,ngPluralize:af,ngRepeat:bf,ngShow:cf,ngStyle:df,ngSwitch:ef,ngSwitchWhen:ff,ngSwitchDefault:gf,ngOptions:hf,ngTransclude:jf,ngModel:kf,ngList:lf,ngChange:mf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,maxlength:cd,ngMaxlength:cd,ngValue:nf,
ngModelOptions:of}).directive({ngInclude:pf}).directive(xb).directive(dd);a.provider({$anchorScroll:qf,$animate:rf,$animateCss:sf,$$animateJs:tf,$$animateQueue:uf,$$AnimateRunner:vf,$$animateAsyncRun:wf,$browser:xf,$cacheFactory:yf,$controller:zf,$document:Af,$$isDocumentHidden:Bf,$exceptionHandler:Cf,$filter:ed,$$forceReflow:Df,$interpolate:Ef,$interval:Ff,$http:Gf,$httpParamSerializer:Hf,$httpParamSerializerJQLike:If,$httpBackend:Jf,$xhrFactory:Kf,$jsonpCallbacks:Lf,$location:Mf,$log:Nf,$parse:Of,
$rootScope:Pf,$q:Qf,$$q:Rf,$sce:Sf,$sceDelegate:Tf,$sniffer:Uf,$templateCache:Vf,$templateRequest:Wf,$$testability:Xf,$timeout:Yf,$window:Zf,$$rAF:$f,$$jqLite:ag,$$Map:bg,$$cookieReader:cg})}]).info({angularVersion:"1.6.5"})}function ib(a,b){return b.toUpperCase()}function yb(a){return a.replace(dg,ib)}function ec(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(fc.test(a)){d=e.appendChild(b.createElement("div"));c=(eg.exec(a)||["",""])[1].toLowerCase();
c=pa[c]||pa._default;d.innerHTML=c[1]+a.replace(fg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function S(a){if(a instanceof S)return a;var b;C(a)&&(a=P(a),b=!0);if(!(this instanceof S)){if(b&&"<"!==a.charAt(0))throw gc("nosel");return new S(a)}if(b){b=x.document;var d;a=(d=gg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:
[];hc(this,a)}else E(a)?gd(a):hc(this,a)}function ic(a){return a.cloneNode(!0)}function zb(a,b){!b&&ec(a)&&z.cleanData([a]);a.querySelectorAll&&z.cleanData(a.querySelectorAll("*"))}function hd(a,b,d,c){if(t(c))throw gc("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];t(d)&&cb(c||[],d);t(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};p(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}
function jc(a,b){var d=a.ng339,c=d&&jb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),hd(a)),delete jb[d],a.ng339=void 0))}function Ab(a,b){var d=a.ng339,d=d&&jb[d];b&&!d&&(a.ng339=d=++hg,d=jb[d]={events:{},data:{},handle:void 0});return d}function kc(a,b,d){if(ec(a)){var c,e=t(d),f=!e&&b&&!G(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",P((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(b)+" "," ")))})}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=P(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",P(d))}}function hc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=
b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(t(d=z.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function ig(a,
b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else z(b).on("load",a)}function gd(a){function b(){x.document.removeEventListener("DOMContentLoaded",b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function kd(a,b){var d=Hb[b.toLowerCase()];return d&&ld[ya(a)]&&d}function jg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
b[d||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||kg;1<g&&(f=ra(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function kg(a,b,d){d.call(a,b)}function lg(a,b,d){var c=
b.relatedTarget;c&&(c===a||mg.call(a,c))||d.call(a,b)}function ag(){this.$get=function(){return O(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function Sa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||qe)():d+":"+a}function md(){this._keys=[];this._values=
[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(ng,"");return a.match(og)||a.match(pg)}function qg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function gb(a,b){function d(a){return function(b,c){if(G(b))p(b,Ub(a));else return a(b,c)}}function c(a,b){Oa(a,"service");if(E(b)||I(b))b=q.instantiate(b);if(!b.$get)throw Ka("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=w.invoke(b,this);if(v(c))throw Ka("undef",
a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){hb(v(a)||I(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=q.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{C(a)?(c=dc(a),w.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(q.invoke(a)):I(a)?b.push(q.invoke(a)):ub(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&
e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ka("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ka("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(g){throw a[b]===h&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=gb.$$annotate(a,b,g);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ka("itkn",l);f.push(c&&c.hasOwnProperty(l)?
c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ba||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;La(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,
annotate:gb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Ib,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,aa(b),!1)}),constant:d(function(a,b){Oa(a,"constant");n[a]=b;F[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=w.invoke(d,c);return w.invoke(b,null,{$delegate:a})}}}},
q=n.$injector=k(n,function(a,b){fa.isString(b)&&l.push(b);throw Ka("unpr",l.join(" <- "));}),F={},M=k(F,function(a,b){var c=q.get(a+"Provider",b);return w.invoke(c.$get,c,void 0,a)}),w=M;n.$injectorProvider={$get:aa(M)};w.modules=q.modules=R();var u=g(a),w=M.get("$injector");w.strictDi=b;p(u,function(a){a&&w.invoke(a)});return w}function qf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ya(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Wb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=C(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},
function(a,b){a===b&&""===a||ig(function(){c.$evalAsync(g)})});return g}]}function kb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function rg(a){C(a)&&(a=a.split(" "));var b=R();p(a,function(a){a.length&&(b[a]=!0)});return b}function Ca(a){return G(a)?a:{}}function sg(a,b,d,c){function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(M--,0===M)for(;w.length;)try{w.pop()()}catch(b){d.error(b)}}}function f(){y=null;k()}function g(){u=
D();u=v(u)?null:u;sa(u,L)&&(u=L);A=L=u}function k(){var a=A;g();if(na!==h.url()||a!==u)na=h.url(),A=u,p(H,function(a){a(h.url(),u)})}var h=this,l=a.location,m=a.history,n=a.setTimeout,q=a.clearTimeout,F={};h.isMock=!1;var M=0,w=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){M++};h.notifyWhenNoOutstandingRequests=function(a){0===M?a():w.push(a)};var u,A,na=l.href,s=b.find("base"),y=null,D=c.history?function(){try{return m.state}catch(a){}}:B;g();h.url=function(b,d,e){v(e)&&
(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=A===e;if(na===b&&(!c.history||f))return h;var k=na&&ja(na)===ja(b);na=b;A=e;!c.history||k&&f?(k||(y=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g());y&&(y=b);return h}return y||l.href.replace(/%27/g,"'")};h.state=function(){return u};var H=[],Z=!1,L=null;h.onUrlChange=function(b){if(!Z){if(c.history)z(a).on("popstate",
f);z(a).on("hashchange",f);Z=!0}H.push(b);return b};h.$$applicationDestroyed=function(){z(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=s.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;M++;c=n(function(){delete F[c];e(a)},b||0);F[c]=!0;return c};h.defer.cancel=function(a){return F[a]?(delete F[a],q(a),e(B),!0):!1}}function xf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new sg(a,c,b,d)}]}
function yf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(q?q===a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw K("$cacheFactory")("iid",a);var g=0,k=O({},c,{id:a}),h=R(),l=c&&c.capacity||Number.MAX_VALUE,m=R(),n=null,q=null;return b[a]={put:function(a,b){if(!v(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(q.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===q&&(q=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=R();g=0;m=R();n=q=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return O({},k,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Vf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=R();p(a,function(a,g){if(a in n)e[g]=n[a];else{var f=a.match(d);if(!f)throw ga("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(n[a]=e[g])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!I(b)&&G(b)&&p(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=ue("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=R();this.directive=function na(b,d){hb(b,"name");Oa(b,"directive");C(b)?(c(b),hb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(f[b],function(g,
f){try{var h=a.invoke(g);E(h)?h={compile:aa(h)}:!h.compile&&h.link&&(h.compile=aa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!C(l)||!/[EACM]/.test(l)))throw ga("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):p(b,Ub(na));return this};this.component=function s(a,b){function c(a){function e(b){return E(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:tg(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};p(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!C(a))return p(a,Ub(Qa(this,s))),this;var d=b.controller||function(){};p(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationWhitelist=function(a){return t(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var q=!0;this.debugInfoEnabled=function(a){return t(a)?(q=a,this):q};var F=!1;this.preAssignBindingsEnabled=function(a){return t(a)?(F=a,this):F};var M=10;this.onChangesTtl=function(a){return arguments.length?(M=a,this):M};var w=!0;this.commentDirectivesEnabled=
function(a){return arguments.length?(w=a,this):w};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,L,T,J,U,Y){function r(){try{if(!--Ca)throw ja=void 0,ga("infchng",M);T.$apply(function(){for(var a=[],b=0,c=ja.length;b<c;++b)try{ja[b]()}catch(d){a.push(d)}ja=void 0;if(a.length)throw a;})}finally{Ca++}}
function ca(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Ta(a,b,c){za.innerHTML="<span "+b+">";b=za.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Da(a,b){try{a.addClass(b)}catch(c){}}function da(a,b,c,d,e){a instanceof z||(a=z(a));var g=K(a,b,a,c,d,e);da.$$addScopeClass(a);var f=null;return function(b,c,d){if(!a)throw ga("multilink");hb(b,"scope");e&&e.needsNewScope&&
(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==ya(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?z(ka(f,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function K(a,b,c,d,e,g){function f(a,c,d,e){var g,k,
l,m,q,n,D;if(H)for(D=Array(c.length),m=0;m<h.length;m+=3)g=h[m],D[g]=c[g];else D=c;m=0;for(q=h.length;m<q;)k=D[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(z(k),l)):l=a,n=c.transcludeOnThisElement?V(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?V(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof z,l,m,q,n,H,D=0;D<a.length;D++){l=new ca;11===Ba&&lb(a,D,k);m=mc(a[D],[],l,0===D?d:void 0,e);(g=m.length?X(m,a[D],l,b,c,null,[],[],g):null)&&
g.scope&&da.$$addScopeClass(l.$$element);l=g&&g.terminal||!(q=a[D].childNodes)||!q.length?null:K(q,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(D,g,l),n=!0,H=H||g;g=null}return n?f:null}function lb(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Ma)for(;;){g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Ma)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);c&&g===a[b+1]&&a.splice(b+1,1)}}function V(a,b,c){function d(e,g,f,h,k){e||(e=
a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=R(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?V(a,b.$$slots[g],c):null;return d}function mc(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=ya(a);Q(b,Ea(f),"E",d,e);for(var h,l,m,q,n=a.attributes,H=0,D=n&&n.length;H<D;H++){var F=!1,u=!1;h=n[H];l=h.name;m=h.value;h=Ea(l);(q=Na.test(h))&&(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));
(h=h.match(Oa))&&ba(h[1])&&(F=l,u=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=Ea(l.toLowerCase());g[h]=l;if(q||!c.hasOwnProperty(h))c[h]=m,kd(a,h)&&(c[h]=!0);va(a,b,m,h,q);Q(b,h,"A",d,e,F,u)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Ka)break;g=a.className;G(g)&&(g=g.animVal);if(C(g)&&""!==g)for(;a=k.exec(g);)h=Ea(a[2]),Q(b,h,"C",d,e)&&(c[h]=P(a[3])),g=g.substr(a.index+a[0].length);break;case Ma:pa(b,a.nodeValue);break;case 8:if(!Ja)break;
nc(a,b,c,d,e)}b.sort(ma);return b}function nc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ea(f[1]);Q(b,h,"M",d,e)&&(c[h]=P(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function qd(a,b,c){return function(d,e,g,f,h){e=pd(e[0],b,c);return a(d,e,g,f,h)}}function S(a,b,c,d,e,g){var f;return a?
da(b,c,d,e,g):function(){f||(f=da(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function X(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=qd(a,c,d));a.require=s.require;a.directiveName=Y;if(L===s||s.$$isolateScope)a=ta(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=qd(b,c,d));b.require=s.require;b.directiveName=Y;if(L===s||s.$$isolateScope)b=ta(b,{isolateScope:!0});k.push(b)}}function q(a,e,g,f,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);U&&(e=T);c||(c=U?ha.parent():ha);if(d){var g=
l.$$slots[d];if(g)return g(a,b,e,c,t);if(v(g))throw ga("noslot",d,Aa(ha));}else return l(a,b,e,c,t)}var n,s,J,y,Z,T,w,ha;b===g?(f=d,ha=d.$$element):(ha=z(g),f=new ca(ha,d));Z=e;L?y=e.$new(!0):H&&(Z=e.$parent);l&&(w=m,w.$$boundTransclude=l,w.isSlotFilled=function(a){return!!l.$$slots[a]});u&&(T=ea(ha,f,w,u,y,e,L));L&&(da.$$addScopeInfo(ha,y,!0,!(M&&(M===L||M===L.$$originalDirective))),da.$$addScopeClass(ha,!0),y.$$isolateBindings=L.$$isolateBindings,s=qa(e,f,y,y.$$isolateBindings,L),s.removeWatches&&
y.$on("$destroy",s.removeWatches));for(n in T){s=u[n];J=T[n];var Y=s.$$bindings.bindToController;if(F){J.bindingInfo=Y?qa(Z,f,J.instance,Y,s):{};var r=J();r!==J.instance&&(J.instance=r,ha.data("$"+s.name+"Controller",r),J.bindingInfo.removeWatches&&J.bindingInfo.removeWatches(),J.bindingInfo=qa(Z,f,J.instance,Y,s))}else J.instance=J(),ha.data("$"+s.name+"Controller",J.instance),J.bindingInfo=qa(Z,f,J.instance,Y,s)}p(u,function(a,b){var c=a.require;a.bindToController&&!I(c)&&G(c)&&O(T[b].instance,
W(b,c,ha,T))});p(T,function(a){var b=a.instance;if(E(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(E(b.$onInit))try{b.$onInit()}catch(e){c(e)}E(b.$doCheck)&&(Z.$watch(function(){b.$doCheck()}),b.$doCheck());E(b.$onDestroy)&&Z.$on("$destroy",function(){b.$onDestroy()})});n=0;for(s=h.length;n<s;n++)J=h[n],ua(J,J.isolateScope?y:e,ha,f,J.require&&W(J.directiveName,J.require,ha,T),w);var t=e;L&&(L.template||null===L.templateUrl)&&(t=y);a&&a(t,g.childNodes,void 0,l);for(n=
k.length-1;0<=n;n--)J=k[n],ua(J,J.isolateScope?y:e,ha,f,J.require&&W(J.directiveName,J.require,ha,T),w);p(T,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,H=l.newScopeDirective,u=l.controllerDirectives,L=l.newIsolateScopeDirective,M=l.templateDirective,J=l.nonTlbTranscludeDirective,Z=!1,T=!1,U=l.hasElementTranscludeDirective,y=d.$$element=z(b),s,Y,w,r=e,t,Pa=!1,Ta=!1,V,x=0,Da=a.length;x<Da;x++){s=a[x];var B=s.$$start,C=s.$$end;B&&(y=pd(b,B,C));w=void 0;
if(n>s.priority)break;if(V=s.scope)s.templateUrl||(G(V)?(aa("new/isolated scope",L||H,s,y),L=s):aa("new/isolated scope",L,s,y)),H=H||s;Y=s.name;if(!Pa&&(s.replace&&(s.templateUrl||s.template)||s.transclude&&!s.$$tlb)){for(V=x+1;Pa=a[V++];)if(Pa.transclude&&!Pa.$$tlb||Pa.replace&&(Pa.templateUrl||Pa.template)){Ta=!0;break}Pa=!0}!s.templateUrl&&s.controller&&(u=u||R(),aa("'"+Y+"' controller",u[Y],s,y),u[Y]=s);if(V=s.transclude)if(Z=!0,s.$$tlb||(aa("transclusion",J,s,y),J=s),"element"===V)U=!0,n=s.priority,
w=y,y=d.$$element=z(da.$$createComment(Y,d[Y])),b=y[0],oa(g,xa.call(w,0),b),w[0].$$parentNode=w[0].parentNode,r=S(Ta,w,e,n,f&&f.name,{nonTlbTranscludeDirective:J});else{var K=R();if(G(V)){w=[];var N=R(),lb=R();p(V,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;N[a]=b;K[b]=null;lb[b]=c});p(y.contents(),function(a){var b=N[Ea(ya(a))];b?(lb[b]=!0,K[b]=K[b]||[],K[b].push(a)):w.push(a)});p(lb,function(a,b){if(!a)throw ga("reqslot",b);});for(var lc in K)K[lc]&&(K[lc]=S(Ta,K[lc],e))}else w=z(ic(b)).contents();
y.empty();r=S(Ta,w,e,void 0,void 0,{needsNewScope:s.$$isolateScope||s.$$newScope});r.$$slots=K}if(s.template)if(T=!0,aa("template",M,s,y),M=s,V=E(s.template)?s.template(y,d):s.template,V=Ha(V),s.replace){f=s;w=fc.test(V)?rd(ka(s.templateNamespace,P(V))):[];b=w[0];if(1!==w.length||1!==b.nodeType)throw ga("tplrt",Y,"");oa(g,y,b);Da={$attr:{}};V=mc(b,[],Da);var nc=a.splice(x+1,a.length-(x+1));(L||H)&&$(V,L,H);a=a.concat(V).concat(nc);fa(d,Da);Da=a.length}else y.html(V);if(s.templateUrl)T=!0,aa("template",
M,s,y),M=s,s.replace&&(f=s),q=ia(a.splice(x,a.length-x),y,d,g,Z&&r,h,k,{controllerDirectives:u,newScopeDirective:H!==s&&H,newIsolateScopeDirective:L,templateDirective:M,nonTlbTranscludeDirective:J}),Da=a.length;else if(s.compile)try{t=s.compile(y,d,r);var Q=s.$$originalDirective||s;E(t)?m(null,Qa(Q,t),B,C):t&&m(Qa(Q,t.pre),Qa(Q,t.post),B,C)}catch(ba){c(ba,Aa(y))}s.terminal&&(q.terminal=!0,n=Math.max(n,s.priority))}q.scope=H&&!0===H.scope;q.transcludeOnThisElement=Z;q.templateOnThisElement=T;q.transclude=
r;l.hasElementTranscludeDirective=U;return q}function W(a,b,c,d){var e;if(C(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw ga("ctreq",b,a);}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=W(a,b[f],c,d);else G(b)&&(e={},p(b,function(b,g){e[g]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,g,f){var h=R(),k;for(k in d){var l=d[k],m={$scope:l===
f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=L(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Xb(a[d],{$$isolateScope:b,$$newScope:c})}function Q(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,q=h.length;n<q;n++)if(c=h[n],(v(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Xb(c,{$$start:k,
$$end:l}));if(!c.$$bindings){var H=m=c,D=c.name,F={isolateScope:null,bindToController:null};G(H.scope)&&(!0===H.bindToController?(F.bindToController=d(H.scope,D,!0),F.isolateScope={}):F.isolateScope=d(H.scope,D,!1));G(H.bindToController)&&(F.bindToController=d(H.bindToController,D,!0));if(F.bindToController&&!H.controller)throw ga("noctrl",D);m=m.$$bindings=F;G(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ba(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),
d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;p(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,d,g,f,h,k,l){var m=[],n,q,F=b[0],s=a.shift(),L=Xb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=E(s.templateUrl)?s.templateUrl(b,
d):s.templateUrl,u=s.templateNamespace;b.empty();e(J).then(function(c){var e,H;c=Ha(c);if(s.replace){c=fc.test(c)?rd(ka(u,P(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ga("tplrt",s.name,J);c={$attr:{}};oa(g,b,e);var D=mc(e,[],c);G(s.scope)&&$(D,!0);a=D.concat(a);fa(d,c)}else e=F,b.html(c);a.unshift(L);n=X(a,e,d,f,b,s,h,k,l);p(g,function(a,c){a===e&&(g[c]=b[0])});for(q=K(b[0].childNodes,f);m.length;){c=m.shift();H=m.shift();var y=m.shift(),M=m.shift(),D=b[0];if(!c.$$destroyed){if(H!==F){var Z=
H.className;l.hasElementTranscludeDirective&&s.replace||(D=ic(e));oa(y,z(H),D);Da(z(D),Z)}H=n.transcludeOnThisElement?V(c,n.transclude,M):M;n(q,c,D,g,H)}}m=null}).catch(function(a){Zb(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=V(b,n.transclude,e)),n(q,b,c,d,a)))}}function ma(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function aa(a,b,c,d){function e(a){return a?" (module: "+a+")":
""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Aa(d));}function pa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ka(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";
return c.childNodes[0].childNodes;default:return b}}function ra(a,b){if("srcdoc"===b)return J.HTML;var c=ya(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return J.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return J.RESOURCE_URL}function va(a,c,d,e,g){var f=ra(a,e),k=h[e]||g,l=b(d,!g,f,k);if(l){if("multiple"===e&&"select"===ya(a))throw ga("selmulti",Aa(a));if(m.test(e))throw ga("nodomevents");c.push({priority:100,
compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=R());var h=g[e];h!==d&&(l=h&&b(h,!0,f,k),d=h);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function oa(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&
(a.context=c);break}g&&g.replaceChild(c,d);a=x.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);z.hasData(d)&&(z.data(c,z.data(d)),z(d).off("$destroy"));z.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ta(a,b){return O(function(){return a.apply(null,arguments)},a,b)}function ua(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,Aa(d))}}function qa(a,c,d,e,g){function f(b,c,e){E(d.$onChanges)&&!$b(c,e)&&(ja||(a.$$postDigest(r),ja=[]),m||(m={},
ja.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;p(e,function(e,h){var m=e.attrName,q=e.optional,H,D,F,s;switch(e.mode){case "@":q||wa.call(c,m)||(d[h]=c[m]=void 0);q=c.$observe(m,function(a){if(C(a)||La(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;H=c[m];C(H)?d[h]=b(H)(a):La(H)&&(d[h]=H);l[h]=new Jb(oc,d[h]);k.push(q);break;case "=":if(!wa.call(c,m)){if(q)break;c[m]=void 0}if(q&&!c[m])break;D=n(c[m]);s=D.literal?sa:$b;F=D.assign||
function(){H=d[h]=D(a);throw ga("nonassign",c[m],m,g.name);};H=d[h]=D(a);q=function(b){s(b,d[h])||(s(b,H)?F(a,b=d[h]):d[h]=b);return H=b};q.$stateful=!0;q=e.collection?a.$watchCollection(c[m],q):a.$watch(n(c[m],q),null,D.literal);k.push(q);break;case "<":if(!wa.call(c,m)){if(q)break;c[m]=void 0}if(q&&!c[m])break;D=n(c[m]);var L=D.literal,J=d[h]=D(a);l[h]=new Jb(oc,d[h]);q=a.$watch(D,function(a,b){if(b===a){if(b===J||L&&sa(b,J))return;b=J}f(h,a,b);d[h]=a},L);k.push(q);break;case "&":D=c.hasOwnProperty(m)?
n(c[m]):B;if(D===B&&q)break;d[h]=function(b){return D(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ia=/^\w/,za=x.document.createElement("div"),Ja=w,Ka=u,Ca=M,ja;ca.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&U.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&U.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&U.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&
U.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=td[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));g=ya(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=b=Y(b,"src"===a);else if("img"===g&&"srcset"===a&&t(b)){for(var g="",f=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<
k;l++)var m=2*l,g=g+Y(P(f[m]),!0),g=g+(" "+P(f[m+1]));f=P(f[2*l]).split(/\s/);g+=Y(P(f[0]),!0);2===f.length&&(g+=" "+P(f[1]));this[a]=b=g}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):Ia.test(e)?this.$$element.attr(e,b):Ta(this.$$element[0],e,b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=R()),e=d[a]||(d[a]=[]);e.push(b);T.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,
b)}}};var Fa=b.startSymbol(),Ga=b.endSymbol(),Ha="{{"===Fa&&"}}"===Ga?ab:function(a){return a.replace(/\{\{/g,Fa).replace(/}}/g,Ga)},Na=/^ngAttr[A-Z]/,Oa=/^(.+)Start$/;da.$$addBindingInfo=q?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:B;da.$$addBindingClass=q?function(a){Da(a,"ng-binding")}:B;da.$$addScopeInfo=q?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:B;da.$$addScopeClass=q?function(a,b){Da(a,b?"ng-isolate-scope":
"ng-scope")}:B;da.$$createComment=function(a,b){var c="";q&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(ug,ib)}function sd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=z(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=
a[b];(8===d.nodeType||d.nodeType===Ma&&""===d.nodeValue.trim())&&vg.call(a,b,1)}return a}function tg(a,b){if(b&&C(b))return b;if(C(a)){var d=ud.exec(a);if(d)return d[3]}}function zf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Oa(b,"controller");G(b)?O(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!G(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
g,k,h){var l,m,n;k=!0===k;h&&C(h)&&(n=h);if(C(f)){h=f.match(ud);if(!h)throw vd("ctrlfmt",f);m=h[1];n=n||h[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);if(!f)throw vd("ctrlreg",m);ub(f,m,!0)}if(k)return k=(I(f)?f[f.length-1]:f).prototype,l=Object.create(k||null),n&&e(g,n,l,m||f.name),O(function(){var a=d.invoke(f,l,g,m);a!==l&&(G(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function Af(){this.$get=
["$window",function(a){return z(a.document)}]}function Bf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Cf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function pc(a){return G(a)?ia(a)?a.toISOString():eb(a):a}function Hf(){this.$get=function(){return function(a){if(!a)return"";var b=
[];Nc(a,function(a,c){null===a||v(a)||(I(a)?p(a,function(a){b.push(ma(c)+"="+ma(pc(a)))}):b.push(ma(c)+"="+ma(pc(a))))});return b.join("&")}}}function If(){this.$get=function(){return function(a){function b(a,e,f){null===a||v(a)||(I(a)?p(a,function(a,c){b(a,e+"["+(G(a)?c:"")+"]")}):G(a)&&!ia(a)?Nc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ma(e)+"="+ma(pc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function qc(a,b){if(C(a)){var d=a.replace(wg,"").trim();if(d){var c=
b("Content-Type");(c=c&&0===c.indexOf(wd))||(c=(c=d.match(xg))&&yg[c[0]].test(d));if(c)try{a=Qc(d)}catch(e){throw rc("baddata",a,e);}}}return a}function xd(a){var b=R(),d;C(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=N(P(a.substr(0,d)));a=P(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):G(a)&&p(a,function(a,d){var f=N(d),g=P(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(E(c))return c(a,
b,d);p(c,function(c){a=c(a,b,d)});return a}function Gf(){var a=this.defaults={transformResponse:[qc],transformRequest:[function(a){return G(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(sc),put:ra(sc),patch:ra(sc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return t(a)?
(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,k,h,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}function e(a,b){var c,d={};p(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=O({},a);b.data=zd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>
a?b:h.reject(b)}if(!G(b))throw K("$http")("badreq",b);if(!C(m.valueOf(b.url)))throw K("$http")("badreq",b.url);var f=O({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=function(b){var c=a.headers,d=O({},b.headers),g,f,h,c=O({},c.common,c[N(b.method)]);a:for(g in c){f=N(g);for(h in d)if(N(h)===f)continue a;d[g]=c[g]}return e(d,ra(b))}(b);f.method=wb(f.method);f.paramSerializer=
C(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;c.$$incOutstandingRequestCount();var k=[],n=[];b=h.resolve(f);p(u,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,k);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);v(d)&&p(c,function(a,b){"content-type"===N(b)&&delete c[b]});v(b.withCredentials)&&!v(a.withCredentials)&&(b.withCredentials=a.withCredentials);
return q(b,d).then(g,g)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(B)})}function q(c,d){function g(a){if(a){var c={};p(a,function(a,d){c[d]=function(c){function d(){a(c)}b?k.$applyAsync(d):k.$$phase?d():k.$apply(d)}});return c}}function l(a,c,d,e){function g(){q(c,a,d,e)}J&&(200<=a&&300>a?J.put(ca,[a,c,xd(d),e]):J.remove(ca));b?k.$applyAsync(g):(g(),k.$$phase||k.$apply())}function q(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),
config:c,statusText:e})}function H(a){q(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=h.defer(),T=L.promise,J,U,Y=c.headers,r="jsonp"===N(c.method),ca=c.url;r?ca=m.getTrustedResourceUrl(ca):C(ca)||(ca=m.valueOf(ca));ca=F(ca,c.paramSerializer(c.params));r&&(ca=M(ca,c.jsonpCallbackParam));n.pendingRequests.push(c);T.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=G(c.cache)?
c.cache:G(a.cache)?a.cache:w);J&&(U=J.get(ca),t(U)?U&&E(U.then)?U.then(H,H):I(U)?q(U[1],U[0],ra(U[2]),U[3]):q(U,200,{},"OK"):J.put(ca,T));v(U)&&((U=Ad(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Y[c.xsrfHeaderName||a.xsrfHeaderName]=U),e(c.method,ca,d,l,Y,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return T}function F(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function M(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw rc("badjsonp",
a);if((new RegExp("[&?]"+b+"=")).test(a))throw rc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var w=g("$http");a.paramSerializer=C(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];p(d,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){p(arguments,function(a){n[a]=function(b,c){return n(O({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){n[a]=function(b,c,d){return n(O({},
d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Kf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Jf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return zg(a,c,a.defer,b,d[0])}]}function zg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",
m);e.body.removeChild(f);f=null;var g=-1,F="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),F=a.type,g="error"===a.type?404:200);d&&d(g,F)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,n,q,F,M,w){function u(){na&&na();s&&s.abort()}k=k||a.url();if("jsonp"===N(e))var A=c.createCallback(k),na=f(k,A,function(a,b){var e=200===a&&c.getResponse(A);t(D)&&d.cancel(D);na=s=null;l(a,e,"",b);c.removeCallback(A)});else{var s=
b(e,k);s.open(e,k,!0);p(m,function(a,b){t(a)&&s.setRequestHeader(b,a)});s.onload=function(){var a=s.statusText||"",b="response"in s?s.response:s.responseText,c=1223===s.status?204:s.status;0===c&&(c=b?200:"file"===ua(k).protocol?404:0);var e=s.getAllResponseHeaders();t(D)&&d.cancel(D);na=s=null;l(c,b,e,a)};e=function(){t(D)&&d.cancel(D);na=s=null;l(-1,null,null,"")};s.onerror=e;s.onabort=e;s.ontimeout=e;p(M,function(a,b){s.addEventListener(b,a)});p(w,function(a,b){s.upload.addEventListener(b,a)});
q&&(s.withCredentials=!0);if(F)try{s.responseType=F}catch(y){if("json"!==F)throw y;}s.send(v(h)?null:h)}if(0<n)var D=d(u,n);else n&&E(n.then)&&n.then(u)}}function Ef(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(q,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,q,n){function A(a){try{var b=a;a=q?e.getTrusted(q,b):e.valueOf(b);return n&&!t(a)?a:cc(a)}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var p;h||(h=g(f),p=aa(h),p.exp=f,p.expressions=[],p.$$watchDelegate=k);return p}n=!!n;var s,y,D=0,H=[],Z=[];p=f.length;for(var L=[],T=[];D<p;)if(-1!==(s=f.indexOf(a,D))&&-1!==(y=f.indexOf(b,s+l)))D!==s&&L.push(g(f.substring(D,s))),D=f.substring(s+l,y),H.push(D),Z.push(d(D,A)),D=y+m,T.push(L.length),L.push("");else{D!==p&&L.push(g(f.substring(D)));
break}q&&1<L.length&&Fa.throwNoconcat(f);if(!h||H.length){var J=function(a){for(var b=0,c=H.length;b<c;b++){if(n&&v(a[b]))return;L[T[b]]=a[b]}return L.join("")};return O(function(a){var b=0,d=H.length,e=Array(d);try{for(;b<d;b++)e[b]=Z[b](a);return J(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Z,function(d,e){var g=J(d);E(b)&&b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,
f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Ff(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function n(){q?f.apply(null,F):f(u)}var q=4<arguments.length,F=q?xa.call(arguments,4):[],p=b.setInterval,w=b.clearInterval,u=0,A=t(m)&&!m,r=(A?c:d).defer(),s=r.promise;l=t(l)?l:0;s.$$intervalId=p(function(){A?e.defer(n):a.$evalAsync(n);r.notify(u++);0<l&&u>=l&&(r.resolve(u),w(s.$$intervalId),delete g[s.$$intervalId]);
A||a.$apply()},h);g[s.$$intervalId]=r;return s}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function tc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=fb(a[b]);return a.join("/")}function Bd(a,b){var d=ua(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Q(d.port)||Ag[d.protocol]||null}function Cd(a,b){if(Bg.test(a))throw mb("badpath",
a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ua(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Tc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function uc(a,b){return a.slice(0,b.length)===b}function va(a,b){if(uc(b,a))return b.substr(a.length)}function ja(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function nb(a){return a.replace(/(#.+)|#$/,"$1")}function vc(a,b,d){this.$$html5=
!0;d=d||"";Bd(a,this);this.$$parse=function(a){var d=va(b,a);if(!C(d))throw mb("ipthprfx",a,b);Cd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=bc(this.$$search),d=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=tc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;t(f=va(a,c))?(g=f,g=d&&t(f=va(d,f))?b+(va("/",f)||f):a+g):
t(f=va(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function wc(a,b,d){Bd(a,this);this.$$parse=function(c){var e=va(a,c)||va(b,c),f;v(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(a=c,this.replace())):(f=va(d,e),v(f)&&(f=e));Cd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;uc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=bc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=tc(this.$$path)+
(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return ja(a)===ja(b)?(this.$$parse(b),!0):!1}}function Dd(a,b,d){this.$$html5=!0;wc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===ja(c)?f=c:(g=va(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=bc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=
tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Kb(a){return function(){return this[a]}}function Ed(a,b){return function(d){if(v(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Mf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return t(b)?(a=b,this):a};this.html5Mode=function(a){if(La(a))return b.enabled=a,this;if(G(a)){La(a.enabled)&&(b.enabled=a.enabled);La(a.requireBase)&&(b.requireBase=
a.requireBase);if(La(a.rewriteLinks)||C(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw mb("nobase");q=n.substring(0,
n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?vc:Dd}else q=ja(n),m=wc;var F=q.substr(0,ja(q).lastIndexOf("/")+1);l=new m(q,F,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=z(a.target);"a"!==ya(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!C(e)||!v(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");G(e)&&
"[object SVGAnimatedString]"===e.toString()&&(e=ua(e.animVal).href);p.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});nb(l.absUrl())!==nb(n)&&c.url(l.absUrl(),!0);var w=!0;c.onUrlChange(function(a,b){uc(a,F)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=nb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===
a&&(g?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(w=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(w||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=nb(c.url()),b=nb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(w||m)w=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):(m&&k(b,f,g===l.$$state?null:l.$$state),
h(a,g)))})}l.$$replace=!1});return l}]}function Nf(){var a=!0,b=this;this.debugEnabled=function(b){return t(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){Zb(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||B;return function(){var a=[];p(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}
var f=Ba||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Cg(a){return a+""}function Dg(a,b){return"undefined"!==typeof a?a:b}function Fd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Eg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==
a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Gd:b}function X(a,b,d){var c,e,f=a.isPure=Eg(a,d);switch(a.type){case r.Program:c=!0;p(a.body,function(a){X(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:X(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=
a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:X(a.test,b,f);X(a.alternate,b,f);X(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:X(a.object,b,f);a.computed&&X(a.property,b,f);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];p(a.arguments,function(a){X(a,b,f);c=c&&a.constant;a.constant||e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:X(a.left,b,f);X(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];p(a.elements,function(a){X(a,b,f);c=c&&a.constant;a.constant||e.push.apply(e,a.toWatch)});a.constant=
c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];p(a.properties,function(a){X(a.value,b,f);c=c&&a.value.constant&&!a.computed;a.value.constant||e.push.apply(e,a.value.toWatch);a.computed&&(X(a.key,b,f),a.key.constant||e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Hd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}
function Id(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Jd(a){if(1===a.body.length&&Id(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Kd(a){this.$filter=a}function Ld(a){this.$filter=a}function xc(a,b,d){this.ast=new r(a,d);this.astCompiler=d.csp?new Ld(b):new Kd(b)}function yc(a){return E(a.valueOf)?a.valueOf():Fg.call(a)}function Of(){var a=R(),b={"true":!0,"false":!1,"null":null,
undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=yc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,g.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&yc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=g.length;n<p;n++)l[n]=
f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],g[c].isPure)))m[c]=k,l[c]=k&&yc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;E(b)&&b(a,c,d);t(a)&&d.$$postDigest(function(){t(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function h(a,b,c,d){function e(a){var b=!0;p(a,function(a){t(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},
function(a,c,d){f=a;E(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==h&&c!==k?function(c,e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return t(e)?c:e},d=!a.inputs;c&&c!==g?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=g,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===
Gd?function(b){return a(b)}:a}));return e}var n={csp:Ja().noUnsafeEval,literals:Ia(b),isIdentifierStart:E(d)&&d,isIdentifierContinue:E(c)&&c};return function(b,c){var d,f,p;switch(typeof b){case "string":return p=b=b.trim(),d=a[p],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new zc(n),d=(new xc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?d.$$watchDelegate=d.literal?h:k:d.inputs&&(d.$$watchDelegate=g),a[p]=d),m(d,c);case "function":return m(b,c);default:return m(B,c)}}}]}
function Qf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Md(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Rf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Md(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Md(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};
this.reject=function(b){m(a,b)};this.notify=function(b){q(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!t&&s.length;){var a=s.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):v(c)?"undefined":"string"!==typeof c?Ee(c,void 0):c);Zb(a.value)?b(a.value,c):b(c)}}}function k(b){!d||b.pending||2!==b.status||b.pur||(0===t&&0===s.length&&a(g),s.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=
!0,++t,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var k=0,l=f.length;k<l;++k){b.pur=!0;e=f[k][0];c=f[k][b.status];try{E(c)?h(e,c(b.value)):1===b.status?h(e,b.value):m(e,b.value)}catch(n){m(e,n)}}}finally{--t,d&&0===t&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?n(a,A("qcycle",b)):l(a,b))}function l(a,b){function c(b){f||(f=!0,l(a,b))}function d(b){f||(f=!0,n(a,b))}function e(b){q(a,b)}var g,f=!1;try{if(G(b)||E(b))g=b.then;E(g)?(a.$$state.status=-1,g.call(b,
c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function q(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{q(c,E(a)?a(d):d)}catch(h){b(h)}}})}function F(a){var b=new f;m(b,a);return b}function r(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return F(e)}return d&&E(d.then)?d.then(function(){return b(a)},
F):b(a)}function w(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function u(a){if(!E(a))throw A("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var A=K("$q",TypeError),t=0,s=[];O(f.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return r(b,
y,a)},function(b){return r(b,F,a)},b)}});var y=w;u.prototype=f.prototype;u.defer=c;u.reject=F;u.when=w;u.resolve=y;u.all=function(a){var b=new f,c=0,d=I(a)?[]:{};p(a,function(a,e){c++;w(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};u.race=function(a){var b=c();p(a,function(a){w(a).then(b.resolve,b.reject)});return b.promise};return u}function $f(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||
a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Pf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=K("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(A.$$phase)throw d("inprog",A.$$phase);A.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function F(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function w(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function u(){null===e&&(e=k.defer(function(){A.$apply(w)}))}
m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};
c=null;E(b)||(l.fn=B);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;q(this,1);return function(){var a=cb(k,l);0<=a&&(q(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,f)):b(e,d,f)}var d=Array(a.length),e=Array(a.length),g=[],f=this,h=!1,k=!0;if(!a.length){var l=!0;f.$evalAsync(function(){l&&b(e,e,f)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,g){e[0]=a;d[0]=
c;b(e,a===c?e:d,g)});p(a,function(a,b){var k=f.$watch(a,function(a,g){e[b]=a;d[b]=g;h||(h=!0,f.$evalAsync(c))});g.push(k)});return function(){for(;g.length;)g.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(G(e))if(oa(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},s=0,l++);a=0;for(b in e)wa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)wa.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],q={},p=!0,s=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)wa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,q,p,F=b,y,u=[],v,x;n("$digest");k.$$checkUrlChange();this===A&&null!==e&&(k.defer.cancel(e),
w());c=null;do{p=!1;y=this;for(q=0;q<t.length;q++){try{x=t[q],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}t.length=0;a:do{if(q=y.$$watchers)for(q.$$digestWatchIndex=q.length;q.$$digestWatchIndex--;)try{if(a=q[q.$$digestWatchIndex])if(m=a.get,(g=m(y))!==(h=a.last)&&!(a.eq?sa(g,h):ba(g)&&ba(h)))p=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===r?g:h,y),5>F&&(v=4-F,u[v]||(u[v]=[]),u[v].push({msg:E(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){p=!1;break a}}catch(B){f(B)}if(!(q=
y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(q=y.$$nextSibling);)y=y.$parent}while(y=q);if((p||t.length)&&!F--)throw A.$$phase=null,d("infdig",b,u);}while(p||t.length);for(A.$$phase=null;D<s.length;)try{s[D++]()}catch(G){f(G)}s.length=D=0;k.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===A&&k.$$applicationDestroyed();q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)F(this,
this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=B;this.$on=this.$watch=this.$watchGroup=function(){return B};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,
b)},$evalAsync:function(a,b){A.$$phase||t.length||k.defer(function(){t.length&&A.$digest()});t.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){s.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{A.$$phase=null}}catch(b){f(b)}finally{try{A.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,F(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var A=new m,t=A.$$asyncQueue=[],s=A.$$postDigestQueue=[],y=A.$$applyAsyncQueue=[],D=0;return A}]}function He(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return t(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ua(d).href;return""===f||f.match(e)?d:"unsafe:"+
f}}}function Gg(a){if("self"===a)return a;if(C(a)){if(-1<a.indexOf("***"))throw qa("iwcard",a);a=Nd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if($a(a))return new RegExp("^"+a.source+"$");throw qa("imatcher");}function Od(a){var b=[];t(a)&&p(a,function(a){b.push(Gg(a))});return b}function Tf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Od(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&
(b=Od(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?Ad(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw qa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),k={};k[ka.HTML]=e(g);k[ka.CSS]=e(g);k[ka.URL]=
e(g);k[ka.JS]=e(g);k[ka.RESOURCE_URL]=e(k[ka.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw qa("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw qa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||v(e)||""===e)return e;var g=k.hasOwnProperty(d)?k[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=ua(e.toString()),n,q,p=!1;n=0;for(q=a.length;n<q;n++)if(c(a[n],g)){p=!0;break}if(p)for(n=
0,q=b.length;n<q;n++)if(c(b[n],g)){p=!1;break}if(p)return e;throw qa("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw qa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Sf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw qa("iequirks");var c=ra(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=
c.getTrusted=function(a,b){return b},c.valueOf=ab);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(ka,function(a,b){var d=N(b);c[("parse_as_"+d).replace(Ac,ib)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Ac,ib)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Ac,ib)]=function(b){return g(a,b)}});return c}]}function Uf(){this.$get=["$window","$document",function(a,b){var d={},
c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Q((/android (\d+)/.exec(N((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ba)return!1;if(v(d[a])){var b=
g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:h,animations:l,android:e}}]}function Wf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!C(k)||v(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==qc}):l===qc&&(l=null);return c.get(k,O({cache:d,transformResponse:l},
a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(k,a.data);return a.data},function(a){h||(a=Hg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function Xf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=fa.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+Nd(b)+"(\\s|\\||$)")).test(c)&&
g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Yf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,
h,l){E(f)||(l=h,h=f,f=B);var m=xa.call(arguments,3),n=t(l)&&!l,q=(n?c:d).defer(),p=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[p.$$timeoutId]}n||a.$apply()},h);p.$$timeoutId=r;g[r]=q;return p}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ua(a){Ba&&(ea.setAttribute("href",
a),a=ea.href);ea.setAttribute("href",a);return{href:ea.href,protocol:ea.protocol?ea.protocol.replace(/:$/,""):"",host:ea.host,search:ea.search?ea.search.replace(/^\?/,""):"",hash:ea.hash?ea.hash.replace(/^#/,""):"",hostname:ea.hostname,port:ea.port,pathname:"/"===ea.pathname.charAt(0)?ea.pathname:"/"+ea.pathname}}function Ad(a){a=C(a)?ua(a):a;return a.protocol===Pd.protocol&&a.host===Pd.host}function Zf(){this.$get=aa(x)}function Qd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),v(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function cg(){this.$get=Qd}function ed(a){function b(d,c){if(G(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",
Rd);b("date",Sd);b("filter",Ig);b("json",Jg);b("limitTo",Kg);b("lowercase",Lg);b("number",Td);b("orderBy",Ud);b("uppercase",Mg)}function Ig(){return function(a,b,d,c){if(!oa(a)){if(null==a)return a;throw K("filter")("notarray",a);}c=c||"$";var e;switch(Bc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Ng(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Ng(a,b,d,c){var e=G(a)&&d in a;!0===b?b=sa:E(b)||(b=function(a,
b){if(v(a))return!1;if(null===a||null===b)return a===b;if(G(b)||G(a)&&!Yb(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!G(f)?Ga(f,a[d],b,d,!1):Ga(f,a,b,d,c)}}function Ga(a,b,d,c,e,f){var g=Bc(a),k=Bc(b);if("string"===k&&"!"===b.charAt(0))return!Ga(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return Ga(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Ga(a[h],b,d,c,!0))return!0;return f?!1:Ga(a,b,d,c,!1)}if("object"===
k){for(h in b)if(f=b[h],!E(f)&&!v(f)&&(g=h===c,!Ga(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Bc(a){return null===a?"null":typeof a}function Rd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){v(c)&&(c=b.CURRENCY_SYM);v(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Vd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Td(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Vd(a,b.PATTERNS[0],b.GROUP_SEP,
b.DECIMAL_SEP,c)}}function Og(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Wd))&&(a=a.replace(Wd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Cc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Cc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Xd&&(d=d.splice(0,Xd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Pg(a,b,d,c){var e=a.d,f=e.length-a.i;b=v(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,
d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Vd(a,b,d,c,e){if(!C(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Og(k);Pg(g,e,b.minFrac,b.maxFrac);
h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<
b;)a=Cc+a;d&&(a=a.substr(a.length-b));return e+a}function $(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Lb(f,b,c,e)}}function ob(a,b,d){return function(c,e){var f=c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Yd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Zd(a){return function(b){var d=Yd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function Dc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Sd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Q(b[9]+b[10]),g=Q(b[9]+b[11]));k.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;g=Q(b[5]||0)-g;k=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;C(c)&&(c=Qg.test(c)?Q(c):b(c));W(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Rg.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Rc(f,m),c=ac(c,f,!0));p(k,function(b){h=Sg[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jg(){return function(a,b){v(b)&&(b=2);return eb(a,b)}}function Kg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):Q(b);if(ba(b))return a;W(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:Q(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Ec(a,d,d+b):0===d?Ec(a,b,a.length):Ec(a,Math.max(0,d+b),d)}}function Ec(a,b,d){return C(a)?a.slice(b,d):xa.call(a,b,d)}function Ud(a){function b(b){return b.map(function(b){var c=1,d=ab;if(E(b))d=b;else if(C(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(G(h)&&(h=a.index),G(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c=d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!oa(a))throw K("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&
(f=["+"]);var h=b(f),l=g?-1:1,m=E(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(E(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Yb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*h[d].descending*
l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ua(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return aa(a)}function Mb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Nb;this.$$element=a;this.$$animate=c;$d(this)}function $d(a){a.$$classCache={};
a.$$classCache[ae]=!(a.$$classCache[pb]=a.$$element.hasClass(pb))}function be(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,pb+c,!0===d);b(a,ae+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){v(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),ce(this.$pending)&&(this.$pending=void 0));La(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=ce(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function ce(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Fc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Va(a,b,d,c,e,f){var g=N(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=P(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&
c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(de[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===
d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ia(d))return d;if(C(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Tg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,
ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function qb(a,b,d,c){return function(e,f,g,k,h,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return t(a)&&!ia(a)?d(a)||void 0:a}Gc(e,f,g,k);Va(e,f,g,k,h,l);var p=k&&k.$options.getOption("timezone"),r;k.$$parserName=a;k.$parsers.push(function(a){if(k.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),p&&(a=ac(a,p)),a});k.$formatters.push(function(a){if(a&&
!ia(a))throw rb("datefmt",a);if(n(a))return(r=a)&&p&&(r=ac(r,p,!0)),m("date")(a,c,p);r=null;return""});if(t(g.min)||g.ngMin){var w;k.$validators.min=function(a){return!n(a)||v(w)||d(a)>=w};g.$observe("min",function(a){w=q(a);k.$validate()})}if(t(g.max)||g.ngMax){var u;k.$validators.max=function(a){return!n(a)||v(u)||d(a)<=u};g.$observe("max",function(a){u=q(a);k.$validate()})}}}function Gc(a,b,d,c){(c.$$hasNativeValidators=G(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput||c.typeMismatch?void 0:a})}function ee(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Ug.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw rb("numfmt",b);b=b.toString()}return b})}function Wa(a){t(a)&&!W(a)&&(a=parseFloat(a));return ba(a)?void 0:a}function Hc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function fe(a,b,d){a=Number(a);
var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Hc(a):0,k=e?Hc(b):0,h=f?Hc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function ge(a,b,d,c,e){if(t(c)){a=a(c);if(!a.constant)throw rb("constexpr",d,c);return a(b)}return e}function Ic(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;
c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):G(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);else if(G(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&v(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(k,h,l){function m(a,b){var c=[];p(a,function(a){if(0<b||A[a])A[a]=(A[a]||0)+b,A[a]===+(0<b)&&c.push(a)});return c.join(" ")}
function n(a){if(a===b){var c=s,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=s,c=m(c&&c.split(" "),-1),l.$removeClass(c);v=a}function q(a){a=c(a);a!==s&&r(a)}function r(a){if(v===b){var c=s&&s.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}s=a}var t=l[a].trim(),w=":"===t.charAt(0)&&":"===t.charAt(1),t=g(t,w?e:c),u=w?q:r,A=h.data("$classCounts"),v=!0,s;A||(A=R(),h.data("$classCounts",A));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),
k.$watch(f,n));k.$watch(t,u,w)}}}]}function Pb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=Nb;this.$options=Qb;this.$$parsedNgModel=e(d.ngModel);
this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;$d(this);Vg(this)}function Vg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===
a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,B))}return b})}function Jc(a){this.$$options=a}function he(a,b){p(b,function(b,c){t(a[c])||(a[c]=b)})}function Ha(a,b){a.prop("selected",b);a.attr("selected",b)}var Lc={objectMaxDepth:5},Wg=/^\/(.+)\/([a-z]*)$/,wa=Object.prototype.hasOwnProperty,
N=function(a){return C(a)?a.toLowerCase():a},wb=function(a){return C(a)?a.toUpperCase():a},Ba,z,ta,xa=[].slice,vg=[].splice,Xg=[].push,la=Object.prototype.toString,Oc=Object.getPrototypeOf,za=K("ng"),fa=x.angular||(x.angular={}),dc,sb=0;Ba=x.document.documentMode;var ba=Number.isNaN||function(a){return a!==a};B.$inject=[];ab.$inject=[];var I=Array.isArray,te=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,P=function(a){return C(a)?a.trim():a},Nd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){if(!t(Ja.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},tb=function(){if(t(tb.name_))return tb.name_;var a,b,d=Na.length,
c,e;for(b=0;b<d;++b)if(c=Na[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return tb.name_=e},ve=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ye=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),Be=/[A-Z]/g,Wc=!1,Ma=3,Ge={full:"1.6.5",major:1,minor:6,dot:5,codeName:"toffee-salinization"};S.expando="ng339";var jb=S.cache={},hg=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var dg=/-([a-z])/g,Yg=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},gc=K("jqLite"),gg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
fc=/<|&#?\w+;/,eg=/<([\w:-]+)/,fg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,pa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pa.optgroup=pa.option;pa.tbody=pa.tfoot=pa.colgroup=pa.caption=pa.thead;pa.th=pa.td;var mg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Ra=S.prototype={ready:gd,toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?z(this[a]):z(this[this.length+a])},length:0,push:Xg,sort:[].sort,splice:[].splice},Hb={};p("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[N(a)]=a});var ld={};p("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};p({data:kc,removeData:jc,hasData:function(a){for(var b in jb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)jc(a[b])}},function(a,b){S[b]=a});p({data:kc,inheritedData:Fb,scope:function(a){return z.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return z.data(a,"$isolateScope")||z.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(Yg,"ms-"));if(t(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c&&a.getAttribute){var c=N(b),e=Hb[c];if(t(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(t(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(v(d)){var c=a.nodeType;return 1===c||c===Ma?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(v(b)){if(a.multiple&&"select"===ya(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(v(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:jd},function(a,b){S.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&v(2===a.length&&a!==Cb&&a!==id?b:c)){if(G(b)){for(e=0;e<g;e++)if(a===kc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=v(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:jc,on:function(a,b,d,c){if(t(c))throw gc("onargs");if(ec(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=jg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],lg),k(b,void 0,!0)):k(b)}},
off:hd,one:function(a,b,d){a=z(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;zb(a);p(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=z(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&p(b.split(" "),function(b){var e=d;v(e)&&(e=!Cb(a,b));
(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:ic,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:B,type:f,target:a},b.type&&(c=O(c,b)),b=ra(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)v(f)?(f=a(this[g],b,c,e),t(f)&&(f=z(f))):hc(f,a(this[g],b,c,e));return t(f)?f:this}});S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off;var Zg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return ba(a)?Zg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Ib=md,bg=[function(){this.$get=[function(){return Ib}]}],og=/^([^(]+?)=>/,pg=/^[^(]*\(\s*([^)]*)\)/m,$g=/,/,ah=/^\s*(_?)(\S+?)\1\s*$/,ng=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ka=K("$injector");gb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw C(d)&&d||(d=a.name||qg(a)),Ka("strictdi",d);b=nd(a);p(b[1].split($g),function(a){a.replace(ah,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,ub(a[b],"fn"),c=a.slice(0,b)):ub(a,"fn",
!0);return c};var ie=K("$animate"),tf=function(){this.$get=B},uf=function(){var a=new Ib,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=C(b)?b.split(" "):I(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=rg(b.attr("class")),e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:B,
on:B,off:B,pin:B,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},rf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw ie("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=E(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,ie("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):
c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ca(l))},move:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ca(l))},leave:function(b,c){return a.push(b,"leave",Ca(c),function(){b.remove()})},addClass:function(b,c,d){d=Ca(d);d.addClass=kb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ca(d);
d.removeClass=kb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ca(f);f.addClass=kb(f.addClass,c);f.removeClass=kb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ca(m);m.from=m.from?O(m.from,c):c;m.to=m.to?O(m.to,d):d;m.tempClasses=kb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],wf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=
[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},vf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&
b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:B,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},sf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",
function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},ga=K("$compile"),oc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=
function(){return this.previousValue===oc};var od=/^((?:x|data)[:\-_])/i,ug=/[:\-_]+(.)/g,vd=K("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Df=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof z&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",sc={"Content-Type":wd+";charset=utf-8"},xg=/^\[|^\{(?!\{)/,yg={"[":/]$/,"{":/}$/},wg=/^\)]\}',?\n/,rc=K("$http"),Fa=fa.$interpolateMinErr=K("$interpolate");Fa.throwNoconcat=function(a){throw Fa("noconcat",
a);};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Lf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=fa.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},bh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,
Ag={http:80,https:443,ftp:21},mb=K("$location"),Bg=/^\s*[\\/]{2,}/,ch={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Kb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var b=bh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Kb("$$protocol"),host:Kb("$$host"),port:Kb("$$port"),path:Ed("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a)||W(a))a=a.toString(),this.$$search=Tc(a);else if(G(a))a=Ia(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw mb("isrcharg");break;default:v(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Ed("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Dd,wc,vc],function(a){a.prototype=Object.create(ch);a.prototype.state=function(b){if(!arguments.length)return this.$$state;
if(a!==vc||!this.$$html5)throw mb("nostate");this.$$state=v(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Xa=K("$parse"),Fg={}.constructor.prototype.valueOf,Rb=R();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Rb[a]=!0});var dh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},zc=function(a){this.options=a};zc.prototype={constructor:zc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),
'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Rb[b],e=Rb[d];Rb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",
this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;
var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=t(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Xa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=dh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Id(a))throw Xa("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),
b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),
b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),
b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):
this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):
"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",
a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),
b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Xa("syntax",b.text,a,b.index+
1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Xa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Xa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},$locals:{type:r.LocalsExpression}}};var Gd=2;Kd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(a,b.$filter);var d="",c;this.stage="assign";if(c=Jd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign",
"s,v,l");c=Hd(a.body);b.stage="inputs";p(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,
Cg,Dg,Fd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;
p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,n;c=c||B;if(!f&&t(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:p(a.body,
function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?
this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,
g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,
"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],p(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){p(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+
")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];p(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=
[];n=!1;p(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),p(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(p(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,
b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Xa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
Ld.prototype={compile:function(a){var b=this;X(a,b.$filter);var d,c;if(d=Jd(a))c=this.recurse(d);d=Hd(a.body);var e;d&&(e=[],p(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];p(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?B:1===a.body.length?f[0]:function(a,b){var c;p(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,
a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),
b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,
d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),q;if(null!=n.value){q=[];for(var p=0;p<g.length;++p)q.push(g[p](a,c,d,f));q=n.value.apply(n.context,q)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),function(a,
c,d,e){for(var f=[],q=0;q<g.length;++q)f.push(g[q](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],p(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},q=0;q<g.length;++q)g[q].computed?f[g[q].key(a,c,d,e)]=g[q].value(a,c,d,e):f[g[q].key]=g[q].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?
{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,
e,f,g);k=Fd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(t(k)?k:0)-(t(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,
f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,
g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,
b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};xc.prototype={constructor:xc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression);b.constant=
a.constant;return b}};var qa=K("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Ac=/_([a-z])/g,Hg=K("$compile"),ea=x.document.createElement("a"),Pd=ua(x.location.href);Qd.$inject=["$document"];ed.$inject=["$provide"];var Xd=22,Wd=".",Cc="0";Rd.$inject=["$locale"];Td.$inject=["$locale"];var Sg={yyyy:$("FullYear",4,0,!1,!0),yy:$("FullYear",2,0,!0,!0),y:$("FullYear",1,0,!1,!0),MMMM:ob("Month"),MMM:ob("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),LLLL:ob("Month",!1,!0),
dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Zd(2),w:Zd(1),G:Dc,GG:Dc,GGG:Dc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
Rg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Qg=/^-?\d+$/;Sd.$inject=["$locale"];var Lg=aa(N),Mg=aa(wb);Ud.$inject=["$parse"];var Ie=aa({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),xb={};p(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});xb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(td,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Wg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=Ea("ng-"+a);xb[b]=
function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===la.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Nb={$addControl:B,$$renameControl:function(a,b){a.$name=b},$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B,$setSubmitted:B};Mb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Mb.prototype={$rollbackViewValue:function(){p(this.$$controls,
function(a){a.$rollbackViewValue()})},$commitViewValue:function(){p(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Oa(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];p(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);p(this.$error,function(b,d){this.$setValidity(d,
null,a)},this);p(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=Nb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Sb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Ya,Sb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;p(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){p(this.$$controls,
function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};be({clazz:Mb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var je=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||B}return{name:"form",restrict:a?"EAC":"E",require:["form",
"^^?form"],controller:Mb,compile:function(d,f){d.addClass(Ya).addClass(pb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var p=g?c(n.$name):B;g&&(p(a,n),e.$observe(g,function(b){n.$name!==
b&&(p(a,void 0),n.$$parentForm.$$renameControl(n,b),p=c(n.$name),p(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);p(a,void 0);O(n,Nb)})}}}}}]},Je=je(),Ve=je(!0),Tg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,eh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,fh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Ug=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ke=/^(\d{4,})-(\d{2})-(\d{2})$/,le=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kc=/^(\d{4,})-W(\d\d)$/,me=/^(\d{4,})-(\d\d)$/,ne=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,de=R();p(["date","datetime-local","month","time","week"],function(a){de[a]=!0});var oe={text:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c)},date:qb("date",ke,Ob(ke,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qb("datetimelocal",le,Ob(le,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:qb("time",ne,Ob(ne,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:qb("week",Kc,function(a,b){if(ia(a))return a;if(C(a)){Kc.lastIndex=0;var d=Kc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Yd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:qb("month",me,Ob(me,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Gc(a,b,d,c);ee(c);Va(a,b,d,c,e,f);var g,
k;if(t(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||v(g)||a>=g},d.$observe("min",function(a){g=Wa(a);c.$validate()});if(t(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||v(k)||a<=k},d.$observe("max",function(a){k=Wa(a);c.$validate()});if(t(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||v(h)||fe(b,g||0,h)};d.$observe("step",function(a){h=Wa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c);c.$$parserName=
"url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},email:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Fc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||fh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==P(d.ngTrim);v(d.name)&&b.attr("name",++sb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=P(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=P(a));b[0].checked=a===c.$viewValue};
d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function k(a){n=Wa(a);ba(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){q=Wa(a);ba(c.$modelValue)||(m?(a=b.val(),q<a&&(b.val(q),a=q<n?n:q),c.$setViewValue(a)):c.$validate())}function l(a){p=Wa(a);ba(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Gc(a,b,d,c);ee(c);Va(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&
"range"===b[0].type,n=m?0:void 0,q=m?100:void 0,p=m?1:void 0,r=b[0].validity;a=t(d.min);e=t(d.max);f=t(d.step);var w=c.$render;c.$render=m&&t(r.rangeUnderflow)&&t(r.rangeOverflow)?function(){w();c.$setViewValue(b.val())}:w;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||v(n)||b>=n},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||v(q)||b<=q},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,
b){return c.$isEmpty(b)||v(p)||fe(b,n||0,p)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=ge(k,a,"ngTrueValue",d.ngTrueValue,!0),l=ge(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:B,button:B,submit:B,reset:B,file:B},Zc=["$browser","$sniffer","$filter",
"$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(oe[N(g.type)]||oe.text)(e,f,g,k[0],b,a,d,c)}}}}],gh=/^(true|false|\d+)$/,nf=function(){function a(a,d,c){var e=t(c)?c:9===Ba?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return gh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ne=["$compile",function(a){return{restrict:"AC",
compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=cc(a)})}}}}],Pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=v(a)?"":a})}}}}],Oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,
e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],mf=aa({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Qe=Ic("",!0),Se=Ic("Odd",0),Re=Ic("Even",1),Te=Ua({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],dd={},hh={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};hh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Xe=["$animate","$compile",
function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=vb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],Ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,n,q){var p=0,r,w,u,A=function(){w&&(w.remove(),w=null);r&&(r.$destroy(),r=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(f,function(f){var m=function(a){!1===a||!t(k)||k&&!c.$eval(k)||b()},y=++p;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&y===p){var b=c.$new();n.template=a;a=q(b,function(a){A();d.enter(a,null,e).done(m)});
r=b;u=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||y!==p||(A(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(A(),n.template=null)})}}}}],pf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?(d.empty(),a(fd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ze=Ua({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),lf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?P(e):e;c.$parsers.push(function(a){if(!v(a)){var b=[];a&&p(a.split(g),function(a){a&&b.push(f?P(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},pb="ng-valid",ae="ng-invalid",Ya="ng-pristine",Sb="ng-dirty",rb=K("ngModel");Pb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Pb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);E(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){E(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw rb("nonassign",this.$$attr.ngModel,Aa(this.$$element));},$render:B,$isEmpty:function(a){return v(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Sb);this.$$animate.addClass(this.$$element,Ya)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Ya);this.$$animate.addClass(this.$$element,Sb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ba(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;p(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(p(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!E(h.then))throw rb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},B):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName||"parse";if(v(h.$$parserValid))f(a,null);else return h.$$parserValid||(p(h.$validators,function(a,
b){f(b,null)}),p(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=
v(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),v(a)){this.$$parserValid=!1;break}ba(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);p(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};be({clazz:Pb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var kf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pb,priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(pb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=
f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];if(k.$options.getOption("updateOn"))c.on(k.$options.getOption("updateOn"),function(a){k.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Qb,ih=/(\s+|^)default(\s+|$)/;Jc.prototype=
{getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=O({},a);p(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=P(d.replace(ih,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],he(a,this.$$options));he(a,Qb.$$options);return new Jc(a)}};Qb=new Jc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,
timezone:null});var of=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Qb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},$e=Ua({terminal:!0,priority:1E3}),jh=K("ngOptions"),kh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
hf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(kh);if(!n)throw jh("iexp",a,Aa(b));var q=n[5]||n[7],p=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:q);var w=a&&d(a)||b,t=r&&d(r),A=r?function(a,b){return t(c,b)}:function(a){return Sa(a)},
v=function(a,b){return A(a,z(a,b))},s=d(n[2]||n[1]),y=d(n[3]||""),D=d(n[4]||""),H=d(n[8]),x={},z=p?function(a,b){x[p]=b;x[q]=a;return x}:function(a){x[q]=a;return x};return{trackBy:r,getTrackByValue:v,getWatchables:d(H,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=z(l,k),l=A(l,k);b.push(l);if(n[2]||n[1])l=s(c,k),b.push(l);n[4]&&(k=D(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=H(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===
g?n:g[n],p=z(d[q],q),t=w(c,p),q=A(t,p),u=s(c,p),F=y(c,p),p=D(c,p),t=new e(q,t,u,F,p);a.push(t);b[q]=t}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return r?Ia(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=B},post:function(d,k,h,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var q=l[0],r=l[1],v=h.multiple;l=0;for(var w=k.children(),u=w.length;l<u;l++)if(""===w[l].value){q.hasEmptyOption=!0;q.emptyOption=w.eq(l);break}k.empty();l=!!q.emptyOption;z(e.cloneNode(!1)).val("?");var A,x=c(h.ngOptions,k,d),s=b[0].createDocumentFragment();q.generateUnknownOptionValue=function(a){return"?"};v?(q.writeValue=
function(a){if(A){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},q.readValue=function(){var a=k.val()||[],b=[];p(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},x.trackBy&&d.$watchCollection(function(){if(I(r.$viewValue))return r.$viewValue.map(function(a){return x.getTrackByValue(a)})},function(){r.$render()})):(q.writeValue=function(a){if(A){var b=k[0].options[k[0].selectedIndex],
c=A.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(q.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):q.selectUnknownOrEmptyOption(a)}},q.readValue=function(){var a=A.selectValueMap[k.val()];return a&&!a.disabled?(q.unselectEmptyOption(),q.removeUnknownOption(),A.getViewValueFromOption(a)):null},x.trackBy&&d.$watch(function(){return x.getTrackByValue(r.$viewValue)},function(){r.$render()}));
l&&(a(q.emptyOption)(d),k.prepend(q.emptyOption),8===q.emptyOption[0].nodeType?(q.hasEmptyOption=!1,q.registerOption=function(a,b){""===b.val()&&(q.hasEmptyOption=!0,q.emptyOption=b,q.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=q.$isEmptyOptionSelected();q.hasEmptyOption=!1;q.emptyOption=void 0;a&&r.$render()}))}):q.emptyOption.removeClass("ng-scope"));d.$watchCollection(x.getWatchables,function(){var a=A&&q.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=
A.items[b];t(c.group)?Gb(c.element.parentNode):Gb(c.element)}A=x.getOptions();var d={};A.items.forEach(function(a){var b;if(t(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),s.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);n(a,c)}else b=e.cloneNode(!1),s.appendChild(b),n(a,b)});k[0].appendChild(s);r.$render();r.$isEmpty(a)||(b=q.readValue(),(x.trackBy||v?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],af=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),n=k.offset||0,q=f.$eval(m)||{},r={},t=b.startSymbol(),w=b.endSymbol(),u=t+l+"-"+n+w,A=fa.noop,x;p(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(k.$attr[b]))});p(q,function(a,d){r[d]=b(a.replace(c,u))});f.$watch(l,function(b){var c=parseFloat(b),e=ba(c);e||c in q||(c=a.pluralCat(c-n));c===x||e&&ba(x)||(A(),e=r[c],v(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),A=B,h()):A=f.$watch(e,h),x=c)})}}}],bf=["$parse","$animate","$compile",function(a,b,d){var c=K("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",k);var m=l[1],n=l[2],q=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw c("badident",q);var u,v,x,s,y={$id:Sa};r?u=a(r):(x=function(a,b){return Sa(b)},s=function(a){return a});return function(a,d,f,g,l){u&&(v=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=
d;return u(a,y)});var m=R();a.$watchCollection(n,function(f){var g,n,r=d[0],u,y=R(),F,z,E,B,G,C,I;q&&(a[q]=f);if(oa(f))G=f,n=v||x;else for(I in n=v||s,G=[],f)wa.call(f,I)&&"$"!==I.charAt(0)&&G.push(I);F=G.length;I=Array(F);for(g=0;g<F;g++)if(z=f===G?g:G[g],E=f[z],B=n(z,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw p(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,B,E);I[g]={id:B,scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=vb(C.clone);b.leave(B);if(B[0].parentNode)for(g=
0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<F;g++)if(z=f===G?g:G[g],E=f[z],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(vb(C.clone),null,r);r=C.clone[C.clone.length-1];e(C.scope,g,t,E,w,z,F)}else l(function(a,c){C.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;e(C.scope,g,t,E,w,z,F)});m=y})}}}}],cf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],df=Ua(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),ef=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=vb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],ff=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});p(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),gf=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),lh=K("ngTransclude"),
jf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw lh("orphan",Aa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Ma||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&
h()}}}}],Ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],mh={$setViewValue:B,$render:B},nh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap={};e.ngModelCtrl=mh;
e.multiple=!1;e.unknownOption=z(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ha(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ha(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Sa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ha(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ha(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=B});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ha(z(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Sa(b),a.val(c in e.selectValueMap?
c:b),Ha(z(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Oa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");t(r)&&(e.removeOption(p),delete e.selectValueMap[r],
d=!0);r=Sa(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");t(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Le=function(){return{restrict:"E",require:["select","?ngModel"],controller:nh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){p(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ha(z(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=ra(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=B},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;t(d.ngValue)||(t(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw K("ngPattern")("noregexp",f,a,Aa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||v(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Q(a);e=ba(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Q(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):
(Ce(),Fe(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),z(function(){xe(x.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/*!
 * ngTagsInput v3.2.0
 * http://mbenford.github.io/ngTagsInput
 *
 * Copyright (c) 2013-2017 Michael Benford
 * License: MIT
 *
 * Generated at 2017-04-15 17:08:51 -0300
 */
(function() {
'use strict';

var KEYS = {
    backspace: 8,
    tab: 9,
    enter: 13,
    escape: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    delete: 46,
    comma: 188
};

var MAX_SAFE_INTEGER = 9007199254740991;
var SUPPORTED_INPUT_TYPES = ['text', 'email', 'url'];

var tagsInput = angular.module('ngTagsInput', []);

/**
 * @ngdoc directive
 * @name tagsInput
 * @module ngTagsInput
 *
 * @description
 * Renders an input box with tag editing support.
 *
 * @param {string} ngModel Assignable Angular expression to data-bind to.
 * @param {boolean=} [useStrings=false] Flag indicating that the model is an array of strings (EXPERIMENTAL).
 * @param {string=} [template=NA] URL or id of a custom template for rendering each tag.
 * @param {string=} [templateScope=NA] Scope to be passed to custom templates - of both tagsInput and
 *    autoComplete directives - as $scope.
 * @param {string=} [displayProperty=text] Property to be rendered as the tag label.
 * @param {string=} [keyProperty=text] Property to be used as a unique identifier for the tag.
 * @param {string=} [type=text] Type of the input element. Only 'text', 'email' and 'url' are supported values.
 * @param {string=} [text=NA] Assignable Angular expression for data-binding to the element's text.
 * @param {number=} tabindex Tab order of the control.
 * @param {string=} [placeholder=Add a tag] Placeholder text for the control.
 * @param {number=} [minLength=3] Minimum length for a new tag.
 * @param {number=} [maxLength=MAX_SAFE_INTEGER] Maximum length allowed for a new tag.
 * @param {number=} [minTags=0] Sets minTags validation error key if the number of tags added is less than minTags.
 * @param {number=} [maxTags=MAX_SAFE_INTEGER] Sets maxTags validation error key if the number of tags added is greater
 *    than maxTags.
 * @param {boolean=} [allowLeftoverText=false] Sets leftoverText validation error key if there is any leftover text in
 *    the input element when the directive loses focus.
 * @param {string=} [removeTagSymbol=×] (Obsolete) Symbol character for the remove tag button.
 * @param {boolean=} [addOnEnter=true] Flag indicating that a new tag will be added on pressing the ENTER key.
 * @param {boolean=} [addOnSpace=false] Flag indicating that a new tag will be added on pressing the SPACE key.
 * @param {boolean=} [addOnComma=true] Flag indicating that a new tag will be added on pressing the COMMA key.
 * @param {boolean=} [addOnBlur=true] Flag indicating that a new tag will be added when the input field loses focus.
 * @param {boolean=} [addOnPaste=false] Flag indicating that the text pasted into the input field will be split into tags.
 * @param {string=} [pasteSplitPattern=,] Regular expression used to split the pasted text into tags.
 * @param {boolean=} [replaceSpacesWithDashes=true] Flag indicating that spaces will be replaced with dashes.
 * @param {string=} [allowedTagsPattern=.+] Regular expression that determines whether a new tag is valid.
 * @param {boolean=} [enableEditingLastTag=false] Flag indicating that the last tag will be moved back into the new tag
 *    input box instead of being removed when the backspace key is pressed and the input box is empty.
 * @param {boolean=} [addFromAutocompleteOnly=false] Flag indicating that only tags coming from the autocomplete list
 *    will be allowed. When this flag is true, addOnEnter, addOnComma, addOnSpace and addOnBlur values are ignored.
 * @param {boolean=} [spellcheck=true] Flag indicating whether the browser's spellcheck is enabled for the input field or not.
 * @param {expression=} [tagClass=NA] Expression to evaluate for each existing tag in order to get the CSS classes to be used.
 *    The expression is provided with the current tag as $tag, its index as $index and its state as $selected. The result
 *    of the evaluation must be one of the values supported by the ngClass directive (either a string, an array or an object).
 *    See https://docs.angularjs.org/api/ng/directive/ngClass for more information.
 * @param {expression=} [onTagAdding=NA] Expression to evaluate that will be invoked before adding a new tag. The new
 *    tag is available as $tag. This method must return either a boolean value or a promise. If either a false value or a rejected
 *    promise is returned, the tag will not be added.
 * @param {expression=} [onTagAdded=NA] Expression to evaluate upon adding a new tag. The new tag is available as $tag.
 * @param {expression=} [onInvalidTag=NA] Expression to evaluate when a tag is invalid. The invalid tag is available as $tag.
 * @param {expression=} [onTagRemoving=NA] Expression to evaluate that will be invoked before removing a tag. The tag
 *    is available as $tag. This method must return either a boolean value or a promise. If either a false value or a rejected
 *    promise is returned, the tag will not be removed.
 * @param {expression=} [onTagRemoved=NA] Expression to evaluate upon removing an existing tag. The removed tag is available as $tag.
 * @param {expression=} [onTagClicked=NA] Expression to evaluate upon clicking an existing tag. The clicked tag is available as $tag.
 */
tagsInput.directive('tagsInput', ["$timeout", "$document", "$window", "$q", "tagsInputConfig", "tiUtil", function($timeout, $document, $window, $q, tagsInputConfig, tiUtil) {
    function TagList(options, events, onTagAdding, onTagRemoving) {
        var self = {}, getTagText, setTagText, canAddTag, canRemoveTag;

        getTagText = function(tag) {
            return tiUtil.safeToString(tag[options.displayProperty]);
        };

        setTagText = function(tag, text) {
            tag[options.displayProperty] = text;
        };

        canAddTag = function(tag) {
            var tagText = getTagText(tag);
            var valid = tagText &&
                        tagText.length >= options.minLength &&
                        tagText.length <= options.maxLength &&
                        options.allowedTagsPattern.test(tagText) &&
                        !tiUtil.findInObjectArray(self.items, tag, options.keyProperty || options.displayProperty);

            return $q.when(valid && onTagAdding({ $tag: tag })).then(tiUtil.promisifyValue);
        };

        canRemoveTag = function(tag) {
            return $q.when(onTagRemoving({ $tag: tag })).then(tiUtil.promisifyValue);
        };

        self.items = [];

        self.addText = function(text) {
            var tag = {};
            setTagText(tag, text);
            return self.add(tag);
        };

        self.add = function(tag) {
            var tagText = getTagText(tag);

            if (options.replaceSpacesWithDashes) {
                tagText = tiUtil.replaceSpacesWithDashes(tagText);
            }

            setTagText(tag, tagText);

            return canAddTag(tag)
                .then(function() {
                    self.items.push(tag);
                    events.trigger('tag-added', { $tag: tag });
                })
                .catch(function() {
                    if (tagText) {
                      events.trigger('invalid-tag', { $tag: tag });
                    }
                });
        };

        self.remove = function(index) {
            var tag = self.items[index];

            return canRemoveTag(tag).then(function() {
                self.items.splice(index, 1);
                self.clearSelection();
                events.trigger('tag-removed', { $tag: tag });
                return tag;
            });
        };

        self.select = function(index) {
            if (index < 0) {
                index = self.items.length - 1;
            }
            else if (index >= self.items.length) {
                index = 0;
            }

            self.index = index;
            self.selected = self.items[index];
        };

        self.selectPrior = function() {
            self.select(--self.index);
        };

        self.selectNext = function() {
            self.select(++self.index);
        };

        self.removeSelected = function() {
            return self.remove(self.index);
        };

        self.clearSelection = function() {
            self.selected = null;
            self.index = -1;
        };

        self.getItems = function() {
            return options.useStrings ? self.items.map(getTagText): self.items;
        };

        self.clearSelection();

        return self;
    }

    function validateType(type) {
        return SUPPORTED_INPUT_TYPES.indexOf(type) !== -1;
    }

    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            tags: '=ngModel',
            text: '=?',
            templateScope: '=?',
            tagClass: '&',
            onTagAdding: '&',
            onTagAdded: '&',
            onInvalidTag: '&',
            onTagRemoving: '&',
            onTagRemoved: '&',
            onTagClicked: '&',
        },
        replace: false,
        transclude: true,
        templateUrl: 'ngTagsInput/tags-input.html',
        controller: ["$scope", "$attrs", "$element", function($scope, $attrs, $element) {
            $scope.events = tiUtil.simplePubSub();

            tagsInputConfig.load('tagsInput', $scope, $attrs, {
                template: [String, 'ngTagsInput/tag-item.html'],
                type: [String, 'text', validateType],
                placeholder: [String, 'Add a tag'],
                tabindex: [Number, null],
                removeTagSymbol: [String, String.fromCharCode(215)],
                replaceSpacesWithDashes: [Boolean, true],
                minLength: [Number, 3],
                maxLength: [Number, MAX_SAFE_INTEGER],
                addOnEnter: [Boolean, true],
                addOnSpace: [Boolean, false],
                addOnComma: [Boolean, true],
                addOnBlur: [Boolean, true],
                addOnPaste: [Boolean, false],
                pasteSplitPattern: [RegExp, /,/],
                allowedTagsPattern: [RegExp, /.+/],
                enableEditingLastTag: [Boolean, false],
                minTags: [Number, 0],
                maxTags: [Number, MAX_SAFE_INTEGER],
                displayProperty: [String, 'text'],
                keyProperty: [String, ''],
                allowLeftoverText: [Boolean, false],
                addFromAutocompleteOnly: [Boolean, false],
                spellcheck: [Boolean, true],
                useStrings: [Boolean, false]
            });

            $scope.tagList = new TagList($scope.options, $scope.events,
                tiUtil.handleUndefinedResult($scope.onTagAdding, true),
                tiUtil.handleUndefinedResult($scope.onTagRemoving, true));

            this.registerAutocomplete = function() {
                var input = $element.find('input');

                return {
                    addTag: function(tag) {
                        return $scope.tagList.add(tag);
                    },
                    getTags: function() {
                        return $scope.tagList.items;
                    },
                    getCurrentTagText: function() {
                        return $scope.newTag.text();
                    },
                    getOptions: function() {
                        return $scope.options;
                    },
                    getTemplateScope: function() {
                        return $scope.templateScope;
                    },
                    on: function(name, handler) {
                        $scope.events.on(name, handler, true);
                        return this;
                    }
                };
            };

            this.registerTagItem = function() {
                return {
                    getOptions: function() {
                        return $scope.options;
                    },
                    removeTag: function(index) {
                        if ($scope.disabled) {
                            return;
                        }
                        $scope.tagList.remove(index);
                    }
                };
            };
        }],
        link: function(scope, element, attrs, ngModelCtrl) {
            var hotkeys = [KEYS.enter, KEYS.comma, KEYS.space, KEYS.backspace, KEYS.delete, KEYS.left, KEYS.right],
                tagList = scope.tagList,
                events = scope.events,
                options = scope.options,
                input = element.find('input'),
                validationOptions = ['minTags', 'maxTags', 'allowLeftoverText'],
                setElementValidity,
                focusInput;

            setElementValidity = function() {
                ngModelCtrl.$setValidity('maxTags', tagList.items.length <= options.maxTags);
                ngModelCtrl.$setValidity('minTags', tagList.items.length >= options.minTags);
                ngModelCtrl.$setValidity('leftoverText', scope.hasFocus || options.allowLeftoverText ? true : !scope.newTag.text());
            };

            focusInput = function() {
                $timeout(function() { input[0].focus(); });
            };

            ngModelCtrl.$isEmpty = function(value) {
                return !value || !value.length;
            };

            scope.newTag = {
                text: function(value) {
                    if (angular.isDefined(value)) {
                        scope.text = value;
                        events.trigger('input-change', value);
                    }
                    else {
                        return scope.text || '';
                    }
                },
                invalid: null
            };

            scope.track = function(tag) {
                return tag[options.keyProperty || options.displayProperty];
            };

            scope.getTagClass = function(tag, index) {
                var selected = tag === tagList.selected;
                return [
                    scope.tagClass({$tag: tag, $index: index, $selected: selected}),
                    { selected: selected }
                ];
            };

            scope.$watch('tags', function(value) {
                if (value) {
                    tagList.items = tiUtil.makeObjectArray(value, options.displayProperty);
                    if (options.useStrings) {
                        return;
                    }

                    scope.tags = tagList.items;
                }
                else {
                    tagList.items = [];
                }
            });

            scope.$watch('tags.length', function() {
                setElementValidity();

                // ngModelController won't trigger validators when the model changes (because it's an array),
                // so we need to do it ourselves. Unfortunately this won't trigger any registered formatter.
                ngModelCtrl.$validate();
            });

            attrs.$observe('disabled', function(value) {
                scope.disabled = value;
            });

            scope.eventHandlers = {
                input: {
                    keydown: function($event) {
                        events.trigger('input-keydown', $event);
                    },
                    focus: function() {
                        if (scope.hasFocus) {
                            return;
                        }

                        scope.hasFocus = true;
                        events.trigger('input-focus');
                    },
                    blur: function() {
                        $timeout(function() {
                            var activeElement = $document.prop('activeElement'),
                                lostFocusToBrowserWindow = activeElement === input[0],
                                lostFocusToChildElement = element[0].contains(activeElement);

                            if (lostFocusToBrowserWindow || !lostFocusToChildElement) {
                                scope.hasFocus = false;
                                events.trigger('input-blur');
                            }
                        });
                    },
                    paste: function($event) {
                        $event.getTextData = function() {
                            var clipboardData = $event.clipboardData || ($event.originalEvent && $event.originalEvent.clipboardData);
                            return clipboardData ? clipboardData.getData('text/plain') : $window.clipboardData.getData('Text');
                        };
                        events.trigger('input-paste', $event);
                    }
                },
                host: {
                    click: function() {
                        if (scope.disabled) {
                            return;
                        }
                        focusInput();
                    }
                },
                tag: {
                    click: function(tag) {
                        events.trigger('tag-clicked', { $tag: tag });
                    }
                }
            };

            events
                .on('tag-added', scope.onTagAdded)
                .on('invalid-tag', scope.onInvalidTag)
                .on('tag-removed', scope.onTagRemoved)
                .on('tag-clicked', scope.onTagClicked)
                .on('tag-added', function() {
                    scope.newTag.text('');
                })
                .on('tag-added tag-removed', function() {
                    scope.tags = tagList.getItems();
                    // Ideally we should be able call $setViewValue here and let it in turn call $setDirty and $validate
                    // automatically, but since the model is an array, $setViewValue does nothing and it's up to us to do it.
                    // Unfortunately this won't trigger any registered $parser and there's no safe way to do it.
                    ngModelCtrl.$setDirty();
                    focusInput();
                })
                .on('invalid-tag', function() {
                    scope.newTag.invalid = true;
                })
                .on('option-change', function(e) {
                    if (validationOptions.indexOf(e.name) !== -1) {
                        setElementValidity();
                    }
                })
                .on('input-change', function() {
                    tagList.clearSelection();
                    scope.newTag.invalid = null;
                })
                .on('input-focus', function() {
                    element.triggerHandler('focus');
                    ngModelCtrl.$setValidity('leftoverText', true);
                })
                .on('input-blur', function() {
                    if (options.addOnBlur && !options.addFromAutocompleteOnly) {
                        tagList.addText(scope.newTag.text());
                    }
                    element.triggerHandler('blur');
                    setElementValidity();
                })
                .on('input-keydown', function(event) {
                    var key = event.keyCode,
                        addKeys = {},
                        shouldAdd, shouldRemove, shouldSelect, shouldEditLastTag;

                    if (tiUtil.isModifierOn(event) || hotkeys.indexOf(key) === -1) {
                        return;
                    }

                    addKeys[KEYS.enter] = options.addOnEnter;
                    addKeys[KEYS.comma] = options.addOnComma;
                    addKeys[KEYS.space] = options.addOnSpace;

                    shouldAdd = !options.addFromAutocompleteOnly && addKeys[key];
                    shouldRemove = (key === KEYS.backspace || key === KEYS.delete) && tagList.selected;
                    shouldEditLastTag = key === KEYS.backspace && scope.newTag.text().length === 0 && options.enableEditingLastTag;
                    shouldSelect = (key === KEYS.backspace || key === KEYS.left || key === KEYS.right) && scope.newTag.text().length === 0 && !options.enableEditingLastTag;

                    if (shouldAdd) {
                        tagList.addText(scope.newTag.text());
                    }
                    else if (shouldEditLastTag) {
                        tagList.selectPrior();
                        tagList.removeSelected().then(function(tag) {
                            if (tag) {
                                scope.newTag.text(tag[options.displayProperty]);
                            }
                        });
                    }
                    else if (shouldRemove) {
                        tagList.removeSelected();
                    }
                    else if (shouldSelect) {
                        if (key === KEYS.left || key === KEYS.backspace) {
                            tagList.selectPrior();
                        }
                        else if (key === KEYS.right) {
                            tagList.selectNext();
                        }
                    }

                    if (shouldAdd || shouldSelect || shouldRemove || shouldEditLastTag) {
                        event.preventDefault();
                    }
                })
                .on('input-paste', function(event) {
                    if (options.addOnPaste) {
                        var data = event.getTextData();
                        var tags = data.split(options.pasteSplitPattern);

                        if (tags.length > 1) {
                            tags.forEach(function(tag) {
                                tagList.addText(tag);
                            });
                            event.preventDefault();
                        }
                    }
                });
        }
    };
}]);


/**
 * @ngdoc directive
 * @name tiTagItem
 * @module ngTagsInput
 *
 * @description
 * Represents a tag item. Used internally by the tagsInput directive.
 */
tagsInput.directive('tiTagItem', ["tiUtil", function(tiUtil) {
    return {
        restrict: 'E',
        require: '^tagsInput',
        template: '<ng-include src="$$template"></ng-include>',
        scope: {
            $scope: '=scope',
            data: '='
        },
        link: function(scope, element, attrs, tagsInputCtrl) {
            var tagsInput = tagsInputCtrl.registerTagItem(),
                options = tagsInput.getOptions();

            scope.$$template = options.template;
            scope.$$removeTagSymbol = options.removeTagSymbol;

            scope.$getDisplayText = function() {
                return tiUtil.safeToString(scope.data[options.displayProperty]);
            };
            scope.$removeTag = function() {
                tagsInput.removeTag(scope.$index);
            };

            scope.$watch('$parent.$index', function(value) {
                scope.$index = value;
            });
        }
    };
}]);


/**
 * @ngdoc directive
 * @name autoComplete
 * @module ngTagsInput
 *
 * @description
 * Provides autocomplete support for the tagsInput directive.
 *
 * @param {expression} source Expression to evaluate upon changing the input content. The input value is available as
 *    $query. The result of the expression must be a promise that eventually resolves to an array of strings.
 * @param {string=} [template=NA] URL or id of a custom template for rendering each element of the autocomplete list.
 * @param {string=} [displayProperty=tagsInput.displayText] Property to be rendered as the autocomplete label.
 * @param {number=} [debounceDelay=100] Amount of time, in milliseconds, to wait before evaluating the expression in
 *    the source option after the last keystroke.
 * @param {number=} [minLength=3] Minimum number of characters that must be entered before evaluating the expression
 *    in the source option.
 * @param {boolean=} [highlightMatchedText=true] Flag indicating that the matched text will be highlighted in the
 *    suggestions list.
 * @param {number=} [maxResultsToShow=10] Maximum number of results to be displayed at a time.
 * @param {boolean=} [loadOnDownArrow=false] Flag indicating that the source option will be evaluated when the down arrow
 *    key is pressed and the suggestion list is closed. The current input value is available as $query.
 * @param {boolean=} [loadOnEmpty=false] Flag indicating that the source option will be evaluated when the input content
 *    becomes empty. The $query variable will be passed to the expression as an empty string.
 * @param {boolean=} [loadOnFocus=false] Flag indicating that the source option will be evaluated when the input element
 *    gains focus. The current input value is available as $query.
 * @param {boolean=} [selectFirstMatch=true] Flag indicating that the first match will be automatically selected once
 *    the suggestion list is shown.
 * @param {expression=} [matchClass=NA] Expression to evaluate for each match in order to get the CSS classes to be used.
 *    The expression is provided with the current match as $match, its index as $index and its state as $selected. The result
 *    of the evaluation must be one of the values supported by the ngClass directive (either a string, an array or an object).
 *    See https://docs.angularjs.org/api/ng/directive/ngClass for more information.
 */
tagsInput.directive('autoComplete', ["$document", "$timeout", "$sce", "$q", "tagsInputConfig", "tiUtil", function($document, $timeout, $sce, $q, tagsInputConfig, tiUtil) {
    function SuggestionList(loadFn, options, events) {
        var self = {}, getDifference, lastPromise, getTagId;

        getTagId = function() {
            return options.tagsInput.keyProperty || options.tagsInput.displayProperty;
        };

        getDifference = function(array1, array2) {
            return array1.filter(function(item) {
                return !tiUtil.findInObjectArray(array2, item, getTagId(), function(a, b) {
                    if (options.tagsInput.replaceSpacesWithDashes) {
                        a = tiUtil.replaceSpacesWithDashes(a);
                        b = tiUtil.replaceSpacesWithDashes(b);
                    }
                    return tiUtil.defaultComparer(a, b);
                });
            });
        };

        self.reset = function() {
            lastPromise = null;

            self.items = [];
            self.visible = false;
            self.index = -1;
            self.selected = null;
            self.query = null;
        };
        self.show = function() {
            if (options.selectFirstMatch) {
                self.select(0);
            }
            else {
                self.selected = null;
            }
            self.visible = true;
        };
        self.load = tiUtil.debounce(function(query, tags) {
            self.query = query;

            var promise = $q.when(loadFn({ $query: query }));
            lastPromise = promise;

            promise.then(function(items) {
                if (promise !== lastPromise) {
                    return;
                }

                items = tiUtil.makeObjectArray(items.data || items, getTagId());
                items = getDifference(items, tags);
                self.items = items.slice(0, options.maxResultsToShow);

                if (self.items.length > 0) {
                    self.show();
                }
                else {
                    self.reset();
                }
            });
        }, options.debounceDelay);

        self.selectNext = function() {
            self.select(++self.index);
        };
        self.selectPrior = function() {
            self.select(--self.index);
        };
        self.select = function(index) {
            if (index < 0) {
                index = self.items.length - 1;
            }
            else if (index >= self.items.length) {
                index = 0;
            }
            self.index = index;
            self.selected = self.items[index];
            events.trigger('suggestion-selected', index);
        };

        self.reset();

        return self;
    }

    function scrollToElement(root, index) {
        var element = root.find('li').eq(index),
            parent = element.parent(),
            elementTop = element.prop('offsetTop'),
            elementHeight = element.prop('offsetHeight'),
            parentHeight = parent.prop('clientHeight'),
            parentScrollTop = parent.prop('scrollTop');

        if (elementTop < parentScrollTop) {
            parent.prop('scrollTop', elementTop);
        }
        else if (elementTop + elementHeight > parentHeight + parentScrollTop) {
            parent.prop('scrollTop', elementTop + elementHeight - parentHeight);
        }
    }

    return {
        restrict: 'E',
        require: '^tagsInput',
        scope: {
            source: '&',
            matchClass: '&'
        },
        templateUrl: 'ngTagsInput/auto-complete.html',
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            $scope.events = tiUtil.simplePubSub();

            tagsInputConfig.load('autoComplete', $scope, $attrs, {
                template: [String, 'ngTagsInput/auto-complete-match.html'],
                debounceDelay: [Number, 100],
                minLength: [Number, 3],
                highlightMatchedText: [Boolean, true],
                maxResultsToShow: [Number, 10],
                loadOnDownArrow: [Boolean, false],
                loadOnEmpty: [Boolean, false],
                loadOnFocus: [Boolean, false],
                selectFirstMatch: [Boolean, true],
                displayProperty: [String, '']
            });

            $scope.suggestionList = new SuggestionList($scope.source, $scope.options, $scope.events);

            this.registerAutocompleteMatch = function() {
                return {
                    getOptions: function() {
                        return $scope.options;
                    },
                    getQuery: function() {
                        return $scope.suggestionList.query;
                    }
                };
            };
        }],
        link: function(scope, element, attrs, tagsInputCtrl) {
            var hotkeys = [KEYS.enter, KEYS.tab, KEYS.escape, KEYS.up, KEYS.down],
                suggestionList = scope.suggestionList,
                tagsInput = tagsInputCtrl.registerAutocomplete(),
                options = scope.options,
                events = scope.events,
                shouldLoadSuggestions;

            options.tagsInput = tagsInput.getOptions();

            shouldLoadSuggestions = function(value) {
                return value && value.length >= options.minLength || !value && options.loadOnEmpty;
            };

            scope.templateScope = tagsInput.getTemplateScope();

            scope.addSuggestionByIndex = function(index) {
                suggestionList.select(index);
                scope.addSuggestion();
            };

            scope.addSuggestion = function() {
                var added = false;

                if (suggestionList.selected) {
                    tagsInput.addTag(angular.copy(suggestionList.selected));
                    suggestionList.reset();
                    added = true;
                }
                return added;
            };

            scope.track = function(item) {
                return item[options.tagsInput.keyProperty || options.tagsInput.displayProperty];
            };

            scope.getSuggestionClass = function(item, index) {
                var selected = item === suggestionList.selected;
                return [
                    scope.matchClass({$match: item, $index: index, $selected: selected}),
                    { selected: selected }
                ];
            };

            tagsInput
                .on('tag-added tag-removed invalid-tag input-blur', function() {
                    suggestionList.reset();
                })
                .on('input-change', function(value) {
                    if (shouldLoadSuggestions(value)) {
                        suggestionList.load(value, tagsInput.getTags());
                    }
                    else {
                        suggestionList.reset();
                    }
                })
                .on('input-focus', function() {
                    var value = tagsInput.getCurrentTagText();
                    if (options.loadOnFocus && shouldLoadSuggestions(value)) {
                        suggestionList.load(value, tagsInput.getTags());
                    }
                })
                .on('input-keydown', function(event) {
                    var key = event.keyCode,
                        handled = false;

                    if (tiUtil.isModifierOn(event) || hotkeys.indexOf(key) === -1) {
                        return;
                    }

                    if (suggestionList.visible) {

                        if (key === KEYS.down) {
                            suggestionList.selectNext();
                            handled = true;
                        }
                        else if (key === KEYS.up) {
                            suggestionList.selectPrior();
                            handled = true;
                        }
                        else if (key === KEYS.escape) {
                            suggestionList.reset();
                            handled = true;
                        }
                        else if (key === KEYS.enter || key === KEYS.tab) {
                            handled = scope.addSuggestion();
                        }
                    }
                    else {
                        if (key === KEYS.down && scope.options.loadOnDownArrow) {
                            suggestionList.load(tagsInput.getCurrentTagText(), tagsInput.getTags());
                            handled = true;
                        }
                    }

                    if (handled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            events.on('suggestion-selected', function(index) {
                scrollToElement(element, index);
            });
        }
    };
}]);


/**
 * @ngdoc directive
 * @name tiAutocompleteMatch
 * @module ngTagsInput
 *
 * @description
 * Represents an autocomplete match. Used internally by the autoComplete directive.
 */
tagsInput.directive('tiAutocompleteMatch', ["$sce", "tiUtil", function($sce, tiUtil) {
    return {
        restrict: 'E',
        require: '^autoComplete',
        template: '<ng-include src="$$template"></ng-include>',
        scope: {
            $scope: '=scope',
            data: '='
        },
        link: function(scope, element, attrs, autoCompleteCtrl) {
            var autoComplete = autoCompleteCtrl.registerAutocompleteMatch(),
                options = autoComplete.getOptions();

            scope.$$template = options.template;
            scope.$index = scope.$parent.$index;

            scope.$highlight = function(text) {
                if (options.highlightMatchedText) {
                    text = tiUtil.safeHighlight(text, autoComplete.getQuery());
                }
                return $sce.trustAsHtml(text);
            };
            scope.$getDisplayText =  function() {
                return tiUtil.safeToString(scope.data[options.displayProperty || options.tagsInput.displayProperty]);
            };
        }
    };
}]);


/**
 * @ngdoc directive
 * @name tiTranscludeAppend
 * @module ngTagsInput
 *
 * @description
 * Re-creates the old behavior of ng-transclude. Used internally by tagsInput directive.
 */
tagsInput.directive('tiTranscludeAppend', function() {
    return function(scope, element, attrs, ctrl, transcludeFn) {
        transcludeFn(function(clone) {
            element.append(clone);
        });
    };
});

/**
 * @ngdoc directive
 * @name tiAutosize
 * @module ngTagsInput
 *
 * @description
 * Automatically sets the input's width so its content is always visible. Used internally by tagsInput directive.
 */
tagsInput.directive('tiAutosize', ["tagsInputConfig", function(tagsInputConfig) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            var threshold = tagsInputConfig.getTextAutosizeThreshold(),
                span, resize;

            span = angular.element('<span class="input"></span>');
            span.css('display', 'none')
                .css('visibility', 'hidden')
                .css('width', 'auto')
                .css('white-space', 'pre');

            element.parent().append(span);

            resize = function(originalValue) {
                var value = originalValue, width;

                if (angular.isString(value) && value.length === 0) {
                    value = attrs.placeholder;
                }

                if (value) {
                    span.text(value);
                    span.css('display', '');
                    width = span.prop('offsetWidth');
                    span.css('display', 'none');
                }

                element.css('width', width ? width + threshold + 'px' : '');

                return originalValue;
            };

            ctrl.$parsers.unshift(resize);
            ctrl.$formatters.unshift(resize);

            attrs.$observe('placeholder', function(value) {
                if (!ctrl.$modelValue) {
                    resize(value);
                }
            });
        }
    };
}]);

/**
 * @ngdoc directive
 * @name tiBindAttrs
 * @module ngTagsInput
 *
 * @description
 * Binds attributes to expressions. Used internally by tagsInput directive.
 */
tagsInput.directive('tiBindAttrs', function() {
    return function(scope, element, attrs) {
        scope.$watch(attrs.tiBindAttrs, function(value) {
            angular.forEach(value, function(value, key) {
                attrs.$set(key, value);
            });
        }, true);
    };
});

/**
 * @ngdoc service
 * @name tagsInputConfig
 * @module ngTagsInput
 *
 * @description
 * Sets global configuration settings for both tagsInput and autoComplete directives. It's also used internally to parse and
 *  initialize options from HTML attributes.
 */
tagsInput.provider('tagsInputConfig', function() {
    var globalDefaults = {},
        interpolationStatus = {},
        autosizeThreshold = 3;

    /**
     * @ngdoc method
     * @name tagsInputConfig#setDefaults
     * @description Sets the default configuration option for a directive.
     *
     * @param {string} directive Name of the directive to be configured. Must be either 'tagsInput' or 'autoComplete'.
     * @param {object} defaults Object containing options and their values.
     *
     * @returns {object} The service itself for chaining purposes.
     */
    this.setDefaults = function(directive, defaults) {
        globalDefaults[directive] = defaults;
        return this;
    };

    /**
     * @ngdoc method
     * @name tagsInputConfig#setActiveInterpolation
     * @description Sets active interpolation for a set of options.
     *
     * @param {string} directive Name of the directive to be configured. Must be either 'tagsInput' or 'autoComplete'.
     * @param {object} options Object containing which options should have interpolation turned on at all times.
     *
     * @returns {object} The service itself for chaining purposes.
     */
    this.setActiveInterpolation = function(directive, options) {
        interpolationStatus[directive] = options;
        return this;
    };

    /**
     * @ngdoc method
     * @name tagsInputConfig#setTextAutosizeThreshold
     * @description Sets the threshold used by the tagsInput directive to re-size the inner input field element based on its contents.
     *
     * @param {number} threshold Threshold value, in pixels.
     *
     * @returns {object} The service itself for chaining purposes.
     */
    this.setTextAutosizeThreshold = function(threshold) {
        autosizeThreshold = threshold;
        return this;
    };

    this.$get = ["$interpolate", function($interpolate) {
        var converters = {};
        converters[String] = function(value) { return value; };
        converters[Number] = function(value) { return parseInt(value, 10); };
        converters[Boolean] = function(value) { return value.toLowerCase() === 'true'; };
        converters[RegExp] = function(value) { return new RegExp(value); };

        return {
            load: function(directive, scope, attrs, options) {
                var defaultValidator = function() { return true; };

                scope.options = {};

                angular.forEach(options, function(value, key) {
                    var type, localDefault, validator, converter, getDefault, updateValue;

                    type = value[0];
                    localDefault = value[1];
                    validator = value[2] || defaultValidator;
                    converter = converters[type];

                    getDefault = function() {
                        var globalValue = globalDefaults[directive] && globalDefaults[directive][key];
                        return angular.isDefined(globalValue) ? globalValue : localDefault;
                    };

                    updateValue = function(value) {
                        scope.options[key] = value && validator(value) ? converter(value) : getDefault();
                    };

                    if (interpolationStatus[directive] && interpolationStatus[directive][key]) {
                        attrs.$observe(key, function(value) {
                            updateValue(value);
                            scope.events.trigger('option-change', { name: key, newValue: value });
                        });
                    }
                    else {
                        updateValue(attrs[key] && $interpolate(attrs[key])(scope.$parent));
                    }
                });
            },
            getTextAutosizeThreshold: function() {
                return autosizeThreshold;
            }
        };
    }];
});


/***
 * @ngdoc service
 * @name tiUtil
 * @module ngTagsInput
 *
 * @description
 * Helper methods used internally by the directive. Should not be called directly from user code.
 */
tagsInput.factory('tiUtil', ["$timeout", "$q", function($timeout, $q) {
    var self = {};

    self.debounce = function(fn, delay) {
        var timeoutId;
        return function() {
            var args = arguments;
            $timeout.cancel(timeoutId);
            timeoutId = $timeout(function() { fn.apply(null, args); }, delay);
        };
    };

    self.makeObjectArray = function(array, key) {
        if (!angular.isArray(array) || array.length === 0 || angular.isObject(array[0])) {
            return array;
        }

        var newArray = [];
        array.forEach(function(item) {
            var obj = {};
            obj[key] = item;
            newArray.push(obj);
        });
        return newArray;
    };

    self.findInObjectArray = function(array, obj, key, comparer) {
        var item = null;
        comparer = comparer || self.defaultComparer;

        array.some(function(element) {
            if (comparer(element[key], obj[key])) {
                item = element;
                return true;
            }
        });

        return item;
    };

    self.defaultComparer = function(a, b) {
        // I'm aware of the internationalization issues regarding toLowerCase()
        // but I couldn't come up with a better solution right now
        return self.safeToString(a).toLowerCase() === self.safeToString(b).toLowerCase();
    };

    self.safeHighlight = function(str, value) {
        str = self.encodeHTML(str);
        value = self.encodeHTML(value);

        if (!value) {
            return str;
        }

        function escapeRegexChars(str) {
            return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        }

        var expression = new RegExp('&[^;]+;|' + escapeRegexChars(value), 'gi');
        return str.replace(expression, function(match) {
            return match.toLowerCase() === value.toLowerCase() ? '<em>' + match + '</em>' : match;
        });
    };

    self.safeToString = function(value) {
        return angular.isUndefined(value) || value == null ? '' : value.toString().trim();
    };

    self.encodeHTML = function(value) {
        return self.safeToString(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    self.handleUndefinedResult = function(fn, valueIfUndefined) {
        return function() {
            var result = fn.apply(null, arguments);
            return angular.isUndefined(result) ? valueIfUndefined : result;
        };
    };

    self.replaceSpacesWithDashes = function(str) {
        return self.safeToString(str).replace(/\s/g, '-');
    };

    self.isModifierOn = function(event) {
        return event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
    };

    self.promisifyValue = function(value) {
        value = angular.isUndefined(value) ? true : value;
        return $q[value ? 'when' : 'reject']();
    };

    self.simplePubSub = function() {
        var events = {};
        return {
            on: function(names, handler, first) {
                names.split(' ').forEach(function(name) {
                    if (!events[name]) {
                        events[name] = [];
                    }
                    var method = first ? [].unshift : [].push;
                    method.call(events[name], handler);
                });
                return this;
            },
            trigger: function(name, args) {
                var handlers = events[name] || [];
                handlers.every(function(handler) {
                    return self.handleUndefinedResult(handler, true)(args);
                });
                return this;
            }
        };
    };

    return self;
}]);


/* HTML templates */
tagsInput.run(["$templateCache", function($templateCache) {
    $templateCache.put('ngTagsInput/tags-input.html',
    "<div class=\"host\" tabindex=\"-1\" ng-click=\"eventHandlers.host.click()\" ti-transclude-append><div class=\"tags\" ng-class=\"{focused: hasFocus}\"><ul class=\"tag-list\"><li class=\"tag-item\" ng-repeat=\"tag in tagList.items track by track(tag)\" ng-class=\"getTagClass(tag, $index)\" ng-click=\"eventHandlers.tag.click(tag)\"><ti-tag-item scope=\"templateScope\" data=\"::tag\"></ti-tag-item></li></ul><input class=\"input\" autocomplete=\"off\" ng-model=\"newTag.text\" ng-model-options=\"{getterSetter: true}\" ng-keydown=\"eventHandlers.input.keydown($event)\" ng-focus=\"eventHandlers.input.focus($event)\" ng-blur=\"eventHandlers.input.blur($event)\" ng-paste=\"eventHandlers.input.paste($event)\" ng-trim=\"false\" ng-class=\"{'invalid-tag': newTag.invalid}\" ng-disabled=\"disabled\" ti-bind-attrs=\"{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}\" ti-autosize></div></div>"
  );

  $templateCache.put('ngTagsInput/tag-item.html',
    "<span ng-bind=\"$getDisplayText()\"></span> <a class=\"remove-button\" ng-click=\"$removeTag()\" ng-bind=\"::$$removeTagSymbol\"></a>"
  );

  $templateCache.put('ngTagsInput/auto-complete.html',
    "<div class=\"autocomplete\" ng-if=\"suggestionList.visible\"><ul class=\"suggestion-list\"><li class=\"suggestion-item\" ng-repeat=\"item in suggestionList.items track by track(item)\" ng-class=\"getSuggestionClass(item, $index)\" ng-click=\"addSuggestionByIndex($index)\" ng-mouseenter=\"suggestionList.select($index)\"><ti-autocomplete-match scope=\"templateScope\" data=\"::item\"></ti-autocomplete-match></li></ul></div>"
  );

  $templateCache.put('ngTagsInput/auto-complete-match.html',
    "<span ng-bind-html=\"$highlight($getDisplayText())\"></span>"
  );
}]);

}());
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap", ["ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
    return {
      link: function(scope, element, attrs) {
        var expandingExpr = $parse(attrs.expanding),
          expandedExpr = $parse(attrs.expanded),
          collapsingExpr = $parse(attrs.collapsing),
          collapsedExpr = $parse(attrs.collapsed),
          horizontal = false,
          css = {},
          cssTo = {};

        init();

        function init() {
          horizontal = !!('horizontal' in attrs);
          if (horizontal) {
            css = {
              width: ''
            };
            cssTo = {width: '0'};
          } else {
            css = {
              height: ''
            };
            cssTo = {height: '0'};
          }
          if (!scope.$eval(attrs.uibCollapse)) {
            element.addClass('in')
              .addClass('collapse')
              .attr('aria-expanded', true)
              .attr('aria-hidden', false)
              .css(css);
          }
        }

        function getScrollFromElement(element) {
          if (horizontal) {
            return {width: element.scrollWidth + 'px'};
          }
          return {height: element.scrollHeight + 'px'};
        }

        function expand() {
          if (element.hasClass('collapse') && element.hasClass('in')) {
            return;
          }

          $q.resolve(expandingExpr(scope))
            .then(function() {
              element.removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', true)
                .attr('aria-hidden', false);

              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {
                  css: {
                    overflow: 'hidden'
                  },
                  to: getScrollFromElement(element[0])
                }).then(expandDone);
              }
            }, angular.noop);
        }

        function expandDone() {
          element.removeClass('collapsing')
            .addClass('collapse')
            .css(css);
          expandedExpr(scope);
        }

        function collapse() {
          if (!element.hasClass('collapse') && !element.hasClass('in')) {
            return collapseDone();
          }

          $q.resolve(collapsingExpr(scope))
            .then(function() {
              element
              // IMPORTANT: The width must be set before adding "collapsing" class.
              // Otherwise, the browser attempts to animate from width 0 (in
              // collapsing class) to the given width here.
                .css(getScrollFromElement(element[0]))
                // initially all panel collapse have the collapse class, this removal
                // prevents the animation from jumping to collapsed state
                .removeClass('collapse')
                .addClass('collapsing')
                .attr('aria-expanded', false)
                .attr('aria-hidden', true);

              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: cssTo
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {
                  to: cssTo
                }).then(collapseDone);
              }
            }, angular.noop);
        }

        function collapseDone() {
          element.css(cssTo); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing')
            .addClass('collapse');
          collapsedExpr(scope);
        }

        scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.tabindex', [])

.directive('uibTabindexToggle', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      attrs.$observe('disabled', function(disabled) {
        attrs.$set('tabindex', disabled ? -1 : null);
      });
    }
  };
});

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse', 'ui.bootstrap.tabindex'])

.constant('uibAccordionConfig', {
  closeOthers: true
})

.controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ?
      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if (closeOthers) {
      angular.forEach(this.groups, function(group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function(event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  };
}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('uibAccordion', function() {
  return {
    controller: 'UibAccordionController',
    controllerAs: 'accordion',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion.html';
    }
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('uibAccordionGroup', function() {
  return {
    require: '^uibAccordion',         // We need this directive to be inside an accordion
    transclude: true,              // It transcludes the contents of the directive into the template
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
    },
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      panelClass: '@?',           // Ditto with panelClass
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      element.addClass('panel');
      accordionCtrl.addGroup(scope);

      scope.openClass = attrs.openClass || 'panel-open';
      scope.panelClass = attrs.panelClass || 'panel-default';
      scope.$watch('isOpen', function(value) {
        element.toggleClass(scope.openClass, !!value);
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function($event) {
        if (!scope.isDisabled) {
          if (!$event || $event.which === 32) {
            scope.isOpen = !scope.isOpen;
          }
        }
      };

      var id = 'accordiongroup-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      scope.headingId = id + '-tab';
      scope.panelId = id + '-panel';
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
.directive('uibAccordionHeading', function() {
  return {
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
.directive('uibAccordionTransclude', function() {
  return {
    require: '^uibAccordionGroup',
    link: function(scope, element, attrs, controller) {
      scope.$watch(function() { return controller[attrs.uibAccordionTransclude]; }, function(heading) {
        if (heading) {
          var elem = angular.element(element[0].querySelector(getHeaderSelectors()));
          elem.html('');
          elem.append(heading);
        }
      });
    }
  };

  function getHeaderSelectors() {
      return 'uib-accordion-header,' +
          'data-uib-accordion-header,' +
          'x-uib-accordion-header,' +
          'uib\\:accordion-header,' +
          '[uib-accordion-header],' +
          '[data-uib-accordion-header],' +
          '[x-uib-accordion-header]';
  }
});

angular.module('ui.bootstrap.alert', [])

.controller('UibAlertController', ['$scope', '$element', '$attrs', '$interpolate', '$timeout', function($scope, $element, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  $element.addClass('alert');
  $attrs.$set('role', 'alert');
  if ($scope.closeable) {
    $element.addClass('alert-dismissible');
  }

  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
    $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function() {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}])

.directive('uibAlert', function() {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/alert/alert.html';
    },
    transclude: true,
    scope: {
      close: '&'
    }
  };
});

angular.module('ui.bootstrap.buttons', [])

.constant('uibButtonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('uibBtnRadio', ['$parse', function($parse) {
  return {
    require: ['uibBtnRadio', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'buttons',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      var uncheckableExpr = $parse(attrs.uibUncheckable);

      element.find('input').css({display: 'none'});

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
            ngModelCtrl.$render();
          });
        }
      });

      if (attrs.uibUncheckable) {
        scope.$watch(uncheckableExpr, function(uncheckable) {
          attrs.$set('uncheckable', uncheckable ? '' : undefined);
        });
      }
    }
  };
}])

.directive('uibBtnCheckbox', function() {
  return {
    require: ['uibBtnCheckbox', 'ngModel'],
    controller: 'UibButtonsController',
    controllerAs: 'button',
    link: function(scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      element.find('input').css({display: 'none'});

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attribute, defaultValue) {
        return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function() {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.on(buttonsCtrl.toggleEvent, function() {
        if (attrs.disabled) {
          return;
        }

        scope.$apply(function() {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

angular.module('ui.bootstrap.carousel', [])

.controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    SLIDE_DIRECTION = 'uib-slideDirection',
    currentIndex = $scope.active,
    currentInterval, isPlaying;

  var destroyed = false;
  $element.addClass('carousel');

  self.addSlide = function(slide, element) {
    slides.push({
      slide: slide,
      element: element
    });
    slides.sort(function(a, b) {
      return +a.slide.index - +b.slide.index;
    });
    //if this is the first slide or the slide is set to active, select it
    if (slide.index === $scope.active || slides.length === 1 && !angular.isNumber($scope.active)) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition = null;
      }

      currentIndex = slide.index;
      $scope.active = slide.index;
      setActive(currentIndex);
      self.select(slides[findSlideIndex(slide)]);
      if (slides.length === 1) {
        $scope.play();
      }
    }
  };

  self.getCurrentIndex = function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide.index === currentIndex) {
        return i;
      }
    }
  };

  self.next = $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    if (newIndex === 0 && $scope.noWrap()) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'next');
  };

  self.prev = $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    if ($scope.noWrap() && newIndex === slides.length - 1) {
      $scope.pause();
      return;
    }

    return self.select(slides[newIndex], 'prev');
  };

  self.removeSlide = function(slide) {
    var index = findSlideIndex(slide);

    //get the index of the slide inside the carousel
    slides.splice(index, 1);
    if (slides.length > 0 && currentIndex === index) {
      if (index >= slides.length) {
        currentIndex = slides.length - 1;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[slides.length - 1]);
      } else {
        currentIndex = index;
        $scope.active = currentIndex;
        setActive(currentIndex);
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
      $scope.active = currentIndex;
    }

    //clean the active value when no more slide
    if (slides.length === 0) {
      currentIndex = null;
      $scope.active = null;
    }
  };

  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = findSlideIndex(nextSlide.slide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide.slide.index !== currentIndex &&
      !$scope.$currentTransition) {
      goNext(nextSlide.slide, nextIndex, direction);
    }
  };

  /* Allow outside people to call indexOf on slides array */
  $scope.indexOfSlide = function(slide) {
    return +slide.slide.index;
  };

  $scope.isActive = function(slide) {
    return $scope.active === slide.slide.index;
  };

  $scope.isPrevDisabled = function() {
    return $scope.active === 0 && $scope.noWrap();
  };

  $scope.isNextDisabled = function() {
    return $scope.active === slides.length - 1 && $scope.noWrap();
  };

  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };

  $element.on('mouseenter', $scope.pause);
  $element.on('mouseleave', $scope.play);

  $scope.$on('$destroy', function() {
    destroyed = true;
    resetTimer();
  });

  $scope.$watch('noTransition', function(noTransition) {
    $animate.enabled($element, !noTransition);
  });

  $scope.$watch('interval', restartTimer);

  $scope.$watchCollection('slides', resetTransition);

  $scope.$watch('active', function(index) {
    if (angular.isNumber(index) && currentIndex !== index) {
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].slide.index === index) {
          index = i;
          break;
        }
      }

      var slide = slides[index];
      if (slide) {
        setActive(index);
        self.select(slides[index]);
        currentIndex = index;
      }
    }
  });

  function getSlideByIndex(index) {
    for (var i = 0, l = slides.length; i < l; ++i) {
      if (slides[i].index === index) {
        return slides[i];
      }
    }
  }

  function setActive(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].slide.active = i === index;
    }
  }

  function goNext(slide, index, direction) {
    if (destroyed) {
      return;
    }

    angular.extend(slide, {direction: direction});
    angular.extend(slides[currentIndex].slide || {}, {direction: direction});
    if ($animate.enabled($element) && !$scope.$currentTransition &&
      slides[index].element && self.slides.length > 1) {
      slides[index].element.data(SLIDE_DIRECTION, slide.direction);
      var currentIdx = self.getCurrentIndex();

      if (angular.isNumber(currentIdx) && slides[currentIdx].element) {
        slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction);
      }

      $scope.$currentTransition = true;
      $animate.on('addClass', slides[index].element, function(element, phase) {
        if (phase === 'close') {
          $scope.$currentTransition = null;
          $animate.off('addClass', element);
        }
      });
    }

    $scope.active = slide.index;
    currentIndex = slide.index;
    setActive(index);

    //every time you change slides, reset the timer
    restartTimer();
  }

  function findSlideIndex(slide) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].slide === slide) {
        return i;
      }
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function resetTransition(slides) {
    if (!slides.length) {
      $scope.$currentTransition = null;
    }
  }

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }
}])

.directive('uibCarousel', function() {
  return {
    transclude: true,
    controller: 'UibCarouselController',
    controllerAs: 'carousel',
    restrict: 'A',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/carousel.html';
    },
    scope: {
      active: '=',
      interval: '=',
      noTransition: '=',
      noPause: '=',
      noWrap: '&'
    }
  };
})

.directive('uibSlide', ['$animate', function($animate) {
  return {
    require: '^uibCarousel',
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/carousel/slide.html';
    },
    scope: {
      actual: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      element.addClass('item');
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        $animate[active ? 'addClass' : 'removeClass'](element, 'active');
      });
    }
  };
}])

.animation('.item', ['$animateCss',
function($animateCss) {
  var SLIDE_DIRECTION = 'uib-slideDirection';

  function removeClass(element, className, callback) {
    element.removeClass(className);
    if (callback) {
      callback();
    }
  }

  return {
    beforeAddClass: function(element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element,
          directionClass + ' ' + direction, done);
        element.addClass(direction);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      if (className === 'active') {
        var stopped = false;
        var direction = element.data(SLIDE_DIRECTION);
        var directionClass = direction === 'next' ? 'left' : 'right';
        var removeClassFn = removeClass.bind(this, element, directionClass, done);

        $animateCss(element, {addClass: directionClass})
          .start()
          .done(removeClassFn);

        return function() {
          stopped = true;
        };
      }
      done();
    }
  };
}]);

angular.module('ui.bootstrap.dateparser', [])

.service('uibDateParser', ['$log', '$locale', 'dateFilter', 'orderByFilter', 'filterFilter', function($log, $locale, dateFilter, orderByFilter, filterFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  var localeId;
  var formatCodeToRegex;

  this.init = function() {
    localeId = $locale.id;

    this.parsers = {};
    this.formatters = {};

    formatCodeToRegex = [
      {
        key: 'yyyy',
        regex: '\\d{4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yyyy');
        }
      },
      {
        key: 'yy',
        regex: '\\d{2}',
        apply: function(value) { value = +value; this.year = value < 69 ? value + 2000 : value + 1900; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'yy');
        }
      },
      {
        key: 'y',
        regex: '\\d{1,4}',
        apply: function(value) { this.year = +value; },
        formatter: function(date) {
          var _date = new Date();
          _date.setFullYear(Math.abs(date.getFullYear()));
          return dateFilter(_date, 'y');
        }
      },
      {
        key: 'M!',
        regex: '0?[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) {
          var value = date.getMonth();
          if (/^[0-9]$/.test(value)) {
            return dateFilter(date, 'MM');
          }

          return dateFilter(date, 'M');
        }
      },
      {
        key: 'MMMM',
        regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMMM'); }
      },
      {
        key: 'MMM',
        regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'MMM'); }
      },
      {
        key: 'MM',
        regex: '0[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'MM'); }
      },
      {
        key: 'M',
        regex: '[1-9]|1[0-2]',
        apply: function(value) { this.month = value - 1; },
        formatter: function(date) { return dateFilter(date, 'M'); }
      },
      {
        key: 'd!',
        regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) {
          var value = date.getDate();
          if (/^[1-9]$/.test(value)) {
            return dateFilter(date, 'dd');
          }

          return dateFilter(date, 'd');
        }
      },
      {
        key: 'dd',
        regex: '[0-2][0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'dd'); }
      },
      {
        key: 'd',
        regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
        apply: function(value) { this.date = +value; },
        formatter: function(date) { return dateFilter(date, 'd'); }
      },
      {
        key: 'EEEE',
        regex: $locale.DATETIME_FORMATS.DAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEEE'); }
      },
      {
        key: 'EEE',
        regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
        formatter: function(date) { return dateFilter(date, 'EEE'); }
      },
      {
        key: 'HH',
        regex: '(?:0|1)[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'HH'); }
      },
      {
        key: 'hh',
        regex: '0[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'hh'); }
      },
      {
        key: 'H',
        regex: '1?[0-9]|2[0-3]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'H'); }
      },
      {
        key: 'h',
        regex: '[0-9]|1[0-2]',
        apply: function(value) { this.hours = +value; },
        formatter: function(date) { return dateFilter(date, 'h'); }
      },
      {
        key: 'mm',
        regex: '[0-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'mm'); }
      },
      {
        key: 'm',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.minutes = +value; },
        formatter: function(date) { return dateFilter(date, 'm'); }
      },
      {
        key: 'sss',
        regex: '[0-9][0-9][0-9]',
        apply: function(value) { this.milliseconds = +value; },
        formatter: function(date) { return dateFilter(date, 'sss'); }
      },
      {
        key: 'ss',
        regex: '[0-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 'ss'); }
      },
      {
        key: 's',
        regex: '[0-9]|[1-5][0-9]',
        apply: function(value) { this.seconds = +value; },
        formatter: function(date) { return dateFilter(date, 's'); }
      },
      {
        key: 'a',
        regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
        apply: function(value) {
          if (this.hours === 12) {
            this.hours = 0;
          }

          if (value === 'PM') {
            this.hours += 12;
          }
        },
        formatter: function(date) { return dateFilter(date, 'a'); }
      },
      {
        key: 'Z',
        regex: '[+-]\\d{4}',
        apply: function(value) {
          var matches = value.match(/([+-])(\d{2})(\d{2})/),
            sign = matches[1],
            hours = matches[2],
            minutes = matches[3];
          this.hours += toInt(sign + hours);
          this.minutes += toInt(sign + minutes);
        },
        formatter: function(date) {
          return dateFilter(date, 'Z');
        }
      },
      {
        key: 'ww',
        regex: '[0-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'ww'); }
      },
      {
        key: 'w',
        regex: '[0-9]|[1-4][0-9]|5[0-3]',
        formatter: function(date) { return dateFilter(date, 'w'); }
      },
      {
        key: 'GGGG',
        regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s'),
        formatter: function(date) { return dateFilter(date, 'GGGG'); }
      },
      {
        key: 'GGG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GGG'); }
      },
      {
        key: 'GG',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'GG'); }
      },
      {
        key: 'G',
        regex: $locale.DATETIME_FORMATS.ERAS.join('|'),
        formatter: function(date) { return dateFilter(date, 'G'); }
      }
    ];

    if (angular.version.major >= 1 && angular.version.minor > 4) {
      formatCodeToRegex.push({
        key: 'LLLL',
        regex: $locale.DATETIME_FORMATS.STANDALONEMONTH.join('|'),
        apply: function(value) { this.month = $locale.DATETIME_FORMATS.STANDALONEMONTH.indexOf(value); },
        formatter: function(date) { return dateFilter(date, 'LLLL'); }
      });
    }
  };

  this.init();

  function getFormatCodeToRegex(key) {
    return filterFilter(formatCodeToRegex, {key: key}, true)[0];
  }

  this.getParser = function (key) {
    var f = getFormatCodeToRegex(key);
    return f && f.apply || null;
  };

  this.overrideParser = function (key, parser) {
    var f = getFormatCodeToRegex(key);
    if (f && angular.isFunction(parser)) {
      this.parsers = {};
      f.apply = parser;
    }
  }.bind(this);

  function createParser(format) {
    var map = [], regex = format.split('');

    // check for literal values
    var quoteIndex = format.indexOf('\'');
    if (quoteIndex > -1) {
      var inLiteral = false;
      format = format.split('');
      for (var i = quoteIndex; i < format.length; i++) {
        if (inLiteral) {
          if (format[i] === '\'') {
            if (i + 1 < format.length && format[i+1] === '\'') { // escaped single quote
              format[i+1] = '$';
              regex[i+1] = '';
            } else { // end of literal
              regex[i] = '';
              inLiteral = false;
            }
          }
          format[i] = '$';
        } else {
          if (format[i] === '\'') { // start of literal
            format[i] = '$';
            regex[i] = '';
            inLiteral = true;
          }
        }
      }

      format = format.join('');
    }

    angular.forEach(formatCodeToRegex, function(data) {
      var index = format.indexOf(data.key);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + data.key.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({
          index: index,
          key: data.key,
          apply: data.apply,
          matcher: data.regex
        });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  function createFormatter(format) {
    var formatters = [];
    var i = 0;
    var formatter, literalIdx;
    while (i < format.length) {
      if (angular.isNumber(literalIdx)) {
        if (format.charAt(i) === '\'') {
          if (i + 1 >= format.length || format.charAt(i + 1) !== '\'') {
            formatters.push(constructLiteralFormatter(format, literalIdx, i));
            literalIdx = null;
          }
        } else if (i === format.length) {
          while (literalIdx < format.length) {
            formatter = constructFormatterFromIdx(format, literalIdx);
            formatters.push(formatter);
            literalIdx = formatter.endIdx;
          }
        }

        i++;
        continue;
      }

      if (format.charAt(i) === '\'') {
        literalIdx = i;
        i++;
        continue;
      }

      formatter = constructFormatterFromIdx(format, i);

      formatters.push(formatter.parser);
      i = formatter.endIdx;
    }

    return formatters;
  }

  function constructLiteralFormatter(format, literalIdx, endIdx) {
    return function() {
      return format.substr(literalIdx + 1, endIdx - literalIdx - 1);
    };
  }

  function constructFormatterFromIdx(format, i) {
    var currentPosStr = format.substr(i);
    for (var j = 0; j < formatCodeToRegex.length; j++) {
      if (new RegExp('^' + formatCodeToRegex[j].key).test(currentPosStr)) {
        var data = formatCodeToRegex[j];
        return {
          endIdx: i + data.key.length,
          parser: data.formatter
        };
      }
    }

    return {
      endIdx: i + 1,
      parser: function() {
        return currentPosStr.charAt(0);
      }
    };
  }

  this.filter = function(date, format) {
    if (!angular.isDate(date) || isNaN(date) || !format) {
      return '';
    }

    format = $locale.DATETIME_FORMATS[format] || format;

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.formatters[format]) {
      this.formatters[format] = createFormatter(format);
    }

    var formatters = this.formatters[format];

    return formatters.reduce(function(str, formatter) {
      return str + formatter(date);
    }, '');
  };

  this.parse = function(input, format, baseDate) {
    if (!angular.isString(input) || !format) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ($locale.id !== localeId) {
      this.init();
    }

    if (!this.parsers[format]) {
      this.parsers[format] = createParser(format, 'apply');
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex),
        tzOffset = false;
    if (results && results.length) {
      var fields, dt;
      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        if (baseDate) {
          $log.warn('dateparser:', 'baseDate is not a valid date');
        }
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for (var i = 1, n = results.length; i < n; i++) {
        var mapper = map[i - 1];
        if (mapper.matcher === 'Z') {
          tzOffset = true;
        }

        if (mapper.apply) {
          mapper.apply.call(fields, results[i]);
        }
      }

      var datesetter = tzOffset ? Date.prototype.setUTCFullYear :
        Date.prototype.setFullYear;
      var timesetter = tzOffset ? Date.prototype.setUTCHours :
        Date.prototype.setHours;

      if (isValid(fields.year, fields.month, fields.date)) {
        if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
          dt = new Date(baseDate);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours, fields.minutes,
            fields.seconds, fields.milliseconds);
        } else {
          dt = new Date(0);
          datesetter.call(dt, fields.year, fields.month, fields.date);
          timesetter.call(dt, fields.hours || 0, fields.minutes || 0,
            fields.seconds || 0, fields.milliseconds || 0);
        }
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if (month === 1 && date > 28) {
      return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
    }

    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return date < 31;
    }

    return true;
  }

  function toInt(str) {
    return parseInt(str, 10);
  }

  this.toTimezone = toTimezone;
  this.fromTimezone = fromTimezone;
  this.timezoneToOffset = timezoneToOffset;
  this.addDateMinutes = addDateMinutes;
  this.convertTimezoneToLocal = convertTimezoneToLocal;

  function toTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
  }

  function fromTimezone(date, timezone) {
    return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
  }

  //https://github.com/angular/angular.js/blob/622c42169699ec07fc6daaa19fe6d224e5d2f70e/src/Angular.js#L1207
  function timezoneToOffset(timezone, fallback) {
    timezone = timezone.replace(/:/g, '');
    var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
  }

  function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  function convertTimezoneToLocal(date, timezone, reverse) {
    reverse = reverse ? -1 : 1;
    var dateTimezoneOffset = date.getTimezoneOffset();
    var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
  }
}]);

// Avoiding use of ng-class as it creates a lot of watchers when a class is to be applied to
// at most one element.
angular.module('ui.bootstrap.isClass', [])
.directive('uibIsClass', [
         '$animate',
function ($animate) {
  //                    11111111          22222222
  var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
  //                    11111111           22222222
  var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

  var dataPerTracked = {};

  return {
    restrict: 'A',
    compile: function(tElement, tAttrs) {
      var linkedScopes = [];
      var instances = [];
      var expToData = {};
      var lastActivated = null;
      var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
      var onExp = onExpMatches[2];
      var expsStr = onExpMatches[1];
      var exps = expsStr.split(',');

      return linkFn;

      function linkFn(scope, element, attrs) {
        linkedScopes.push(scope);
        instances.push({
          scope: scope,
          element: element
        });

        exps.forEach(function(exp, k) {
          addForExp(exp, scope);
        });

        scope.$on('$destroy', removeScope);
      }

      function addForExp(exp, scope) {
        var matches = exp.match(IS_REGEXP);
        var clazz = scope.$eval(matches[1]);
        var compareWithExp = matches[2];
        var data = expToData[exp];
        if (!data) {
          var watchFn = function(compareWithVal) {
            var newActivated = null;
            instances.some(function(instance) {
              var thisVal = instance.scope.$eval(onExp);
              if (thisVal === compareWithVal) {
                newActivated = instance;
                return true;
              }
            });
            if (data.lastActivated !== newActivated) {
              if (data.lastActivated) {
                $animate.removeClass(data.lastActivated.element, clazz);
              }
              if (newActivated) {
                $animate.addClass(newActivated.element, clazz);
              }
              data.lastActivated = newActivated;
            }
          };
          expToData[exp] = data = {
            lastActivated: null,
            scope: scope,
            watchFn: watchFn,
            compareWithExp: compareWithExp,
            watcher: scope.$watch(compareWithExp, watchFn)
          };
        }
        data.watchFn(scope.$eval(compareWithExp));
      }

      function removeScope(e) {
        var removedScope = e.targetScope;
        var index = linkedScopes.indexOf(removedScope);
        linkedScopes.splice(index, 1);
        instances.splice(index, 1);
        if (linkedScopes.length) {
          var newWatchScope = linkedScopes[0];
          angular.forEach(expToData, function(data) {
            if (data.scope === removedScope) {
              data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
              data.scope = newWatchScope;
            }
          });
        } else {
          expToData = {};
        }
      }
    }
  };
}]);
angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

.value('$datepickerSuppressError', false)

.value('$datepickerLiteralWarning', true)

.constant('uibDatepickerConfig', {
  datepickerMode: 'day',
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  maxDate: null,
  maxMode: 'year',
  minDate: null,
  minMode: 'day',
  monthColumns: 3,
  ngModelOptions: {},
  shortcutPropagation: false,
  showWeeks: true,
  yearColumns: 5,
  yearRows: 4
})

.controller('UibDatepickerController', ['$scope', '$element', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
  function($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
      ngModelOptions = {},
      watchListeners = [];

  $element.addClass('uib-datepicker');
  $attrs.$set('role', 'application');

  if (!$scope.datepickerOptions) {
    $scope.datepickerOptions = {};
  }

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  [
    'customClass',
    'dateDisabled',
    'datepickerMode',
    'formatDay',
    'formatDayHeader',
    'formatDayTitle',
    'formatMonth',
    'formatMonthTitle',
    'formatYear',
    'maxDate',
    'maxMode',
    'minDate',
    'minMode',
    'monthColumns',
    'showWeeks',
    'shortcutPropagation',
    'startingDay',
    'yearColumns',
    'yearRows'
  ].forEach(function(key) {
    switch (key) {
      case 'customClass':
      case 'dateDisabled':
        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
        break;
      case 'datepickerMode':
        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
          $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
        break;
      case 'formatDay':
      case 'formatDayHeader':
      case 'formatDayTitle':
      case 'formatMonth':
      case 'formatMonthTitle':
      case 'formatYear':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $interpolate($scope.datepickerOptions[key])($scope.$parent) :
          datepickerConfig[key];
        break;
      case 'monthColumns':
      case 'showWeeks':
      case 'shortcutPropagation':
      case 'yearColumns':
      case 'yearRows':
        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
          $scope.datepickerOptions[key] : datepickerConfig[key];
        break;
      case 'startingDay':
        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
          self.startingDay = $scope.datepickerOptions.startingDay;
        } else if (angular.isNumber(datepickerConfig.startingDay)) {
          self.startingDay = datepickerConfig.startingDay;
        } else {
          self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
        }

        break;
      case 'maxDate':
      case 'minDate':
        $scope.$watch('datepickerOptions.' + key, function(value) {
          if (value) {
            if (angular.isDate(value)) {
              self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.getOption('timezone'));
            } else {
              if ($datepickerLiteralWarning) {
                $log.warn('Literal date support has been deprecated, please switch to date object usage');
              }

              self[key] = new Date(dateFilter(value, 'medium'));
            }
          } else {
            self[key] = datepickerConfig[key] ?
              dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.getOption('timezone')) :
              null;
          }

          self.refreshView();
        });

        break;
      case 'maxMode':
      case 'minMode':
        if ($scope.datepickerOptions[key]) {
          $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
              key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
              $scope.datepickerOptions.datepickerMode = self[key];
            }
          });
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }

        break;
    }
  });

  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if (angular.isDefined($attrs.ngDisabled)) {
    watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
      $scope.disabled = disabled;
      self.refreshView();
    }));
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelOptions = extractOptions(ngModelCtrl);

    if ($scope.datepickerOptions.initDate) {
      self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.getOption('timezone')) || new Date();
      $scope.$watch('datepickerOptions.initDate', function(initDate) {
        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
          self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.getOption('timezone'));
          self.refreshView();
        }
      });
    } else {
      self.activeDate = new Date();
    }

    var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
    this.activeDate = !isNaN(date) ?
      dateParser.fromTimezone(date, ngModelOptions.getOption('timezone')) :
      dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if (ngModelCtrl.$viewValue) {
      var date = new Date(ngModelCtrl.$viewValue),
          isValid = !isNaN(date);

      if (isValid) {
        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      } else if (!$datepickerSuppressError) {
        $log.error('Datepicker directive: "ng-model" value must be a Date object');
      }
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if (this.element) {
      $scope.selectedDt = null;
      this._refreshView();
      if ($scope.activeDt) {
        $scope.activeDateId = $scope.activeDt.uid;
      }

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      date = dateParser.fromTimezone(date, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setValidity('dateDisabled', !date ||
        this.element && !this.isDisabled(date));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    model = dateParser.fromTimezone(model, ngModelOptions.getOption('timezone'));
    var today = new Date();
    today = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
    var time = this.compare(date, today);
    var dt = {
      date: date,
      label: dateParser.filter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      past: time < 0,
      current: time === 0,
      future: time > 0,
      customClass: this.customClass(date) || null
    };

    if (model && this.compare(date, model) === 0) {
      $scope.selectedDt = dt;
    }

    if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
      $scope.activeDt = dt;
    }

    return dt;
  };

  this.isDisabled = function(date) {
    return $scope.disabled ||
      this.minDate && this.compare(date, this.minDate) < 0 ||
      this.maxDate && this.compare(date, this.maxDate) > 0 ||
      $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
  };

  this.customClass = function(date) {
    return $scope.customClass({date: date, mode: $scope.datepickerMode});
  };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function(date) {
    if ($scope.datepickerMode === self.minMode) {
      var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.getOption('timezone')) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      dt = dateParser.toTimezone(dt, ngModelOptions.getOption('timezone'));
      ngModelCtrl.$setViewValue(dt);
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);

      $scope.$emit('uib:datepicker.mode');
    }

    $scope.$broadcast('uib:datepicker.focus');
  };

  $scope.move = function(direction) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function(direction) {
    direction = direction || 1;

    if ($scope.datepickerMode === self.maxMode && direction === 1 ||
      $scope.datepickerMode === self.minMode && direction === -1) {
      return;
    }

    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

    $scope.$emit('uib:datepicker.mode');
  };

  // Key event mapper
  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

  var focusElement = function() {
    self.element[0].focus();
  };

  // Listen for focus requests from popup directive
  $scope.$on('uib:datepicker.focus', focusElement);

  $scope.keydown = function(evt) {
    var key = $scope.keys[evt.which];

    if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
      return;
    }

    evt.preventDefault();
    if (!self.shortcutPropagation) {
      evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if (self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };

  $element.on('keydown', function(evt) {
    $scope.$apply(function() {
      $scope.keydown(evt);
    });
  });

  $scope.$on('$destroy', function() {
    //Clear all watch listeners on destroy
    while (watchListeners.length) {
      watchListeners.shift()();
    }
  });

  function setMode(mode) {
    $scope.datepickerMode = mode;
    $scope.datepickerOptions.datepickerMode = mode;
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = ngModelCtrl.$options ||
        $scope.datepickerOptions.ngModelOptions ||
        datepickerConfig.ngModelOptions ||
        {};

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      // ng-model-options defaults timezone to null; don't let its precedence squash a non-null value
      var timezone = ngModelCtrl.$options.getOption('timezone') ||
        ($scope.datepickerOptions.ngModelOptions ? $scope.datepickerOptions.ngModelOptions.timezone : null) ||
        (datepickerConfig.ngModelOptions ? datepickerConfig.ngModelOptions.timezone : null);

      // values passed to createChild override existing values
      ngModelOptions = ngModelCtrl.$options // start with a ModelOptions instance
        .createChild(datepickerConfig.ngModelOptions) // lowest precedence
        .createChild($scope.datepickerOptions.ngModelOptions)
        .createChild(ngModelCtrl.$options) // highest precedence
        .createChild({timezone: timezone}); // to keep from squashing a non-null value
    }

    return ngModelOptions;
  }
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  this.step = { months: 1 };
  this.element = $element;
  function getDaysInMonth(year, month) {
    return month === 1 && year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
  }

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    scope.showWeeks = ctrl.showWeeks;
    ctrl.refreshView();
  };

  this.getDates = function(startDate, n) {
    var dates = new Array(n), current = new Date(startDate), i = 0, date;
    while (i < n) {
      date = new Date(current);
      dates[i++] = date;
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  this._refreshView = function() {
    var year = this.activeDate.getFullYear(),
      month = this.activeDate.getMonth(),
      firstDayOfMonth = new Date(this.activeDate);

    firstDayOfMonth.setFullYear(year, month, 1);

    var difference = this.startingDay - firstDayOfMonth.getDay(),
      numDisplayedFromPreviousMonth = difference > 0 ?
        7 - difference : - difference,
      firstDate = new Date(firstDayOfMonth);

    if (numDisplayedFromPreviousMonth > 0) {
      firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
    }

    // 42 is the number of days on a six-week calendar
    var days = this.getDates(firstDate, 42);
    for (var i = 0; i < 42; i ++) {
      days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
        secondary: days[i].getMonth() !== month,
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.labels = new Array(7);
    for (var j = 0; j < 7; j++) {
      scope.labels[j] = {
        abbr: dateFilter(days[j].date, this.formatDayHeader),
        full: dateFilter(days[j].date, 'EEEE')
      };
    }

    scope.title = dateFilter(this.activeDate, this.formatDayTitle);
    scope.rows = this.split(days, 7);

    if (scope.showWeeks) {
      scope.weekNumbers = [];
      var thursdayIndex = (4 + 7 - this.startingDay) % 7,
          numWeeks = scope.rows.length;
      for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
        scope.weekNumbers.push(
          getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
      }
    }
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  function getISO8601WeekNumber(date) {
    var checkDate = new Date(date);
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  }

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getDate();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - 7;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + 7;
    } else if (key === 'pageup' || key === 'pagedown') {
      var month = this.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setMonth(month, 1);
      date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
    } else if (key === 'home') {
      date = 1;
    } else if (key === 'end') {
      date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
    }
    this.activeDate.setDate(date);
  };
}])

.controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  this.step = { years: 1 };
  this.element = $element;

  this.init = function(ctrl) {
    angular.extend(ctrl, this);
    ctrl.refreshView();
  };

  this._refreshView = function() {
    var months = new Array(12),
        year = this.activeDate.getFullYear(),
        date;

    for (var i = 0; i < 12; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(year, i, 1);
      months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
    scope.rows = this.split(months, this.monthColumns);
    scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1;
  };

  this.compare = function(date1, date2) {
    var _date1 = new Date(date1.getFullYear(), date1.getMonth());
    var _date2 = new Date(date2.getFullYear(), date2.getMonth());
    _date1.setFullYear(date1.getFullYear());
    _date2.setFullYear(date2.getFullYear());
    return _date1 - _date2;
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getMonth();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - this.monthColumns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + this.monthColumns;
    } else if (key === 'pageup' || key === 'pagedown') {
      var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
      this.activeDate.setFullYear(year);
    } else if (key === 'home') {
      date = 0;
    } else if (key === 'end') {
      date = 11;
    }
    this.activeDate.setMonth(date);
  };
}])

.controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
  var columns, range;
  this.element = $element;

  function getStartingYear(year) {
    return parseInt((year - 1) / range, 10) * range + 1;
  }

  this.yearpickerInit = function() {
    columns = this.yearColumns;
    range = this.yearRows * columns;
    this.step = { years: range };
  };

  this._refreshView = function() {
    var years = new Array(range), date;

    for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
      date = new Date(this.activeDate);
      date.setFullYear(start + i, 0, 1);
      years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
        uid: scope.uniqueId + '-' + i
      });
    }

    scope.title = [years[0].label, years[range - 1].label].join(' - ');
    scope.rows = this.split(years, columns);
    scope.columns = columns;
  };

  this.compare = function(date1, date2) {
    return date1.getFullYear() - date2.getFullYear();
  };

  this.handleKeyDown = function(key, evt) {
    var date = this.activeDate.getFullYear();

    if (key === 'left') {
      date = date - 1;
    } else if (key === 'up') {
      date = date - columns;
    } else if (key === 'right') {
      date = date + 1;
    } else if (key === 'down') {
      date = date + columns;
    } else if (key === 'pageup' || key === 'pagedown') {
      date += (key === 'pageup' ? - 1 : 1) * range;
    } else if (key === 'home') {
      date = getStartingYear(this.activeDate.getFullYear());
    } else if (key === 'end') {
      date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
    }
    this.activeDate.setFullYear(date);
  };
}])

.directive('uibDatepicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
    },
    scope: {
      datepickerOptions: '=?'
    },
    require: ['uibDatepicker', '^ngModel'],
    restrict: 'A',
    controller: 'UibDatepickerController',
    controllerAs: 'datepicker',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      datepickerCtrl.init(ngModelCtrl);
    }
  };
})

.directive('uibDaypicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/day.html';
    },
    require: ['^uibDatepicker', 'uibDaypicker'],
    restrict: 'A',
    controller: 'UibDaypickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        daypickerCtrl = ctrls[1];

      daypickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibMonthpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/month.html';
    },
    require: ['^uibDatepicker', 'uibMonthpicker'],
    restrict: 'A',
    controller: 'UibMonthpickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0],
        monthpickerCtrl = ctrls[1];

      monthpickerCtrl.init(datepickerCtrl);
    }
  };
})

.directive('uibYearpicker', function() {
  return {
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepicker/year.html';
    },
    require: ['^uibDatepicker', 'uibYearpicker'],
    restrict: 'A',
    controller: 'UibYearpickerController',
    link: function(scope, element, attrs, ctrls) {
      var ctrl = ctrls[0];
      angular.extend(ctrl, ctrls[1]);
      ctrl.yearpickerInit();

      ctrl.refreshView();
    }
  };
});

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function($document, $window) {
    /**
     * Used by scrollbarWidth() function to cache scrollbar's width.
     * Do not access this variable directly, use scrollbarWidth() instead.
     */
    var SCROLLBAR_WIDTH;
    /**
     * scrollbar on body and html element in IE and Edge overlay
     * content and should be considered 0 width.
     */
    var BODY_SCROLLBAR_WIDTH;
    var OVERFLOW_REGEX = {
      normal: /(auto|scroll)/,
      hidden: /(auto|scroll|hidden)/
    };
    var PLACEMENT_REGEX = {
      auto: /\s?auto?\s?/i,
      primary: /^(top|bottom|left|right)$/,
      secondary: /^(top|bottom|left|right|center)$/,
      vertical: /^(top|bottom)$/
    };
    var BODY_REGEX = /(HTML|BODY)/;

    return {

      /**
       * Provides a raw DOM element from a jQuery/jQLite element.
       *
       * @param {element} elem - The element to convert.
       *
       * @returns {element} A HTML element.
       */
      getRawNode: function(elem) {
        return elem.nodeName ? elem : elem[0] || elem;
      },

      /**
       * Provides a parsed number for a style property.  Strips
       * units and casts invalid numbers to 0.
       *
       * @param {string} value - The style value to parse.
       *
       * @returns {number} A valid number.
       */
      parseStyle: function(value) {
        value = parseFloat(value);
        return isFinite(value) ? value : 0;
      },

      /**
       * Provides the closest positioned ancestor.
       *
       * @param {element} element - The element to get the offest parent for.
       *
       * @returns {element} The closest positioned ancestor.
       */
      offsetParent: function(elem) {
        elem = this.getRawNode(elem);

        var offsetParent = elem.offsetParent || $document[0].documentElement;

        function isStaticPositioned(el) {
          return ($window.getComputedStyle(el).position || 'static') === 'static';
        }

        while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || $document[0].documentElement;
      },

      /**
       * Provides the scrollbar width, concept from TWBS measureScrollbar()
       * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
       * In IE and Edge, scollbar on body and html element overlay and should
       * return a width of 0.
       *
       * @returns {number} The width of the browser scollbar.
       */
      scrollbarWidth: function(isBody) {
        if (isBody) {
          if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
            var bodyElem = $document.find('body');
            bodyElem.addClass('uib-position-body-scrollbar-measure');
            BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth;
            BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0;
            bodyElem.removeClass('uib-position-body-scrollbar-measure');
          }
          return BODY_SCROLLBAR_WIDTH;
        }

        if (angular.isUndefined(SCROLLBAR_WIDTH)) {
          var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
          $document.find('body').append(scrollElem);
          SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
          SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
          scrollElem.remove();
        }

        return SCROLLBAR_WIDTH;
      },

      /**
       * Provides the padding required on an element to replace the scrollbar.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**scrollbarWidth**: the width of the scrollbar</li>
       *     <li>**widthOverflow**: whether the the width is overflowing</li>
       *     <li>**right**: the amount of right padding on the element needed to replace the scrollbar</li>
       *     <li>**rightOriginal**: the amount of right padding currently on the element</li>
       *     <li>**heightOverflow**: whether the the height is overflowing</li>
       *     <li>**bottom**: the amount of bottom padding on the element needed to replace the scrollbar</li>
       *     <li>**bottomOriginal**: the amount of bottom padding currently on the element</li>
       *   </ul>
       */
      scrollbarPadding: function(elem) {
        elem = this.getRawNode(elem);

        var elemStyle = $window.getComputedStyle(elem);
        var paddingRight = this.parseStyle(elemStyle.paddingRight);
        var paddingBottom = this.parseStyle(elemStyle.paddingBottom);
        var scrollParent = this.scrollParent(elem, false, true);
        var scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));

        return {
          scrollbarWidth: scrollbarWidth,
          widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
          right: paddingRight + scrollbarWidth,
          originalRight: paddingRight,
          heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
          bottom: paddingBottom + scrollbarWidth,
          originalBottom: paddingBottom
         };
      },

      /**
       * Checks to see if the element is scrollable.
       *
       * @param {element} elem - The element to check.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       *
       * @returns {boolean} Whether the element is scrollable.
       */
      isScrollable: function(elem, includeHidden) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var elemStyle = $window.getComputedStyle(elem);
        return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX);
      },

      /**
       * Provides the closest scrollable ancestor.
       * A port of the jQuery UI scrollParent method:
       * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
       *
       * @param {element} elem - The element to find the scroll parent of.
       * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
       *   default is false.
       * @param {boolean=} [includeSelf=false] - Should the element being passed be
       * included in the scrollable llokup.
       *
       * @returns {element} A HTML element.
       */
      scrollParent: function(elem, includeHidden, includeSelf) {
        elem = this.getRawNode(elem);

        var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
        var documentEl = $document[0].documentElement;
        var elemStyle = $window.getComputedStyle(elem);
        if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) {
          return elem;
        }
        var excludeStatic = elemStyle.position === 'absolute';
        var scrollParent = elem.parentElement || documentEl;

        if (scrollParent === documentEl || elemStyle.position === 'fixed') {
          return documentEl;
        }

        while (scrollParent.parentElement && scrollParent !== documentEl) {
          var spStyle = $window.getComputedStyle(scrollParent);
          if (excludeStatic && spStyle.position !== 'static') {
            excludeStatic = false;
          }

          if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
            break;
          }
          scrollParent = scrollParent.parentElement;
        }

        return scrollParent;
      },

      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/ - distance to closest positioned
       * ancestor.  Does not account for margins by default like jQuery position.
       *
       * @param {element} elem - The element to caclulate the position on.
       * @param {boolean=} [includeMargins=false] - Should margins be accounted
       * for, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of offset parent</li>
       *     <li>**left**: distance to left edge of offset parent</li>
       *   </ul>
       */
      position: function(elem, includeMagins) {
        elem = this.getRawNode(elem);

        var elemOffset = this.offset(elem);
        if (includeMagins) {
          var elemStyle = $window.getComputedStyle(elem);
          elemOffset.top -= this.parseStyle(elemStyle.marginTop);
          elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
        }
        var parent = this.offsetParent(elem);
        var parentOffset = {top: 0, left: 0};

        if (parent !== $document[0].documentElement) {
          parentOffset = this.offset(parent);
          parentOffset.top += parent.clientTop - parent.scrollTop;
          parentOffset.left += parent.clientLeft - parent.scrollLeft;
        }

        return {
          width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
          top: Math.round(elemOffset.top - parentOffset.top),
          left: Math.round(elemOffset.left - parentOffset.left)
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/ - distance to viewport.  Does
       * not account for borders, margins, or padding on the body
       * element.
       *
       * @param {element} elem - The element to calculate the offset on.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**width**: the width of the element</li>
       *     <li>**height**: the height of the element</li>
       *     <li>**top**: distance to top edge of viewport</li>
       *     <li>**right**: distance to bottom edge of viewport</li>
       *   </ul>
       */
      offset: function(elem) {
        elem = this.getRawNode(elem);

        var elemBCR = elem.getBoundingClientRect();
        return {
          width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
          height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
          top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
          left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
        };
      },

      /**
       * Provides offset distance to the closest scrollable ancestor
       * or viewport.  Accounts for border and scrollbar width.
       *
       * Right and bottom dimensions represent the distance to the
       * respective edge of the viewport element.  If the element
       * edge extends beyond the viewport, a negative value will be
       * reported.
       *
       * @param {element} elem - The element to get the viewport offset for.
       * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
       * of the first scrollable element, default is false.
       * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
       * be accounted for, default is true.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: distance to the top content edge of viewport element</li>
       *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
       *     <li>**left**: distance to the left content edge of viewport element</li>
       *     <li>**right**: distance to the right content edge of viewport element</li>
       *   </ul>
       */
      viewportOffset: function(elem, useDocument, includePadding) {
        elem = this.getRawNode(elem);
        includePadding = includePadding !== false ? true : false;

        var elemBCR = elem.getBoundingClientRect();
        var offsetBCR = {top: 0, left: 0, bottom: 0, right: 0};

        var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
        var offsetParentBCR = offsetParent.getBoundingClientRect();

        offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
        offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
        if (offsetParent === $document[0].documentElement) {
          offsetBCR.top += $window.pageYOffset;
          offsetBCR.left += $window.pageXOffset;
        }
        offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
        offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

        if (includePadding) {
          var offsetParentStyle = $window.getComputedStyle(offsetParent);
          offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
          offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
          offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
          offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
        }

        return {
          top: Math.round(elemBCR.top - offsetBCR.top),
          bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
          left: Math.round(elemBCR.left - offsetBCR.left),
          right: Math.round(offsetBCR.right - elemBCR.right)
        };
      },

      /**
       * Provides an array of placement values parsed from a placement string.
       * Along with the 'auto' indicator, supported placement strings are:
       *   <ul>
       *     <li>top: element on top, horizontally centered on host element.</li>
       *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
       *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
       *     <li>bottom: element on bottom, horizontally centered on host element.</li>
       *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
       *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
       *     <li>left: element on left, vertically centered on host element.</li>
       *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
       *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
       *     <li>right: element on right, vertically centered on host element.</li>
       *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
       *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
       *   </ul>
       * A placement string with an 'auto' indicator is expected to be
       * space separated from the placement, i.e: 'auto bottom-left'  If
       * the primary and secondary placement values do not match 'top,
       * bottom, left, right' then 'top' will be the primary placement and
       * 'center' will be the secondary placement.  If 'auto' is passed, true
       * will be returned as the 3rd value of the array.
       *
       * @param {string} placement - The placement string to parse.
       *
       * @returns {array} An array with the following values
       * <ul>
       *   <li>**[0]**: The primary placement.</li>
       *   <li>**[1]**: The secondary placement.</li>
       *   <li>**[2]**: If auto is passed: true, else undefined.</li>
       * </ul>
       */
      parsePlacement: function(placement) {
        var autoPlace = PLACEMENT_REGEX.auto.test(placement);
        if (autoPlace) {
          placement = placement.replace(PLACEMENT_REGEX.auto, '');
        }

        placement = placement.split('-');

        placement[0] = placement[0] || 'top';
        if (!PLACEMENT_REGEX.primary.test(placement[0])) {
          placement[0] = 'top';
        }

        placement[1] = placement[1] || 'center';
        if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
          placement[1] = 'center';
        }

        if (autoPlace) {
          placement[2] = true;
        } else {
          placement[2] = false;
        }

        return placement;
      },

      /**
       * Provides coordinates for an element to be positioned relative to
       * another element.  Passing 'auto' as part of the placement parameter
       * will enable smart placement - where the element fits. i.e:
       * 'auto left-top' will check to see if there is enough space to the left
       * of the hostElem to fit the targetElem, if not place right (same for secondary
       * top placement).  Available space is calculated using the viewportOffset
       * function.
       *
       * @param {element} hostElem - The element to position against.
       * @param {element} targetElem - The element to position.
       * @param {string=} [placement=top] - The placement for the targetElem,
       *   default is 'top'. 'center' is assumed as secondary placement for
       *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
       *   <ul>
       *     <li>top</li>
       *     <li>top-right</li>
       *     <li>top-left</li>
       *     <li>bottom</li>
       *     <li>bottom-left</li>
       *     <li>bottom-right</li>
       *     <li>left</li>
       *     <li>left-top</li>
       *     <li>left-bottom</li>
       *     <li>right</li>
       *     <li>right-top</li>
       *     <li>right-bottom</li>
       *   </ul>
       * @param {boolean=} [appendToBody=false] - Should the top and left values returned
       *   be calculated from the body element, default is false.
       *
       * @returns {object} An object with the following properties:
       *   <ul>
       *     <li>**top**: Value for targetElem top.</li>
       *     <li>**left**: Value for targetElem left.</li>
       *     <li>**placement**: The resolved placement.</li>
       *   </ul>
       */
      positionElements: function(hostElem, targetElem, placement, appendToBody) {
        hostElem = this.getRawNode(hostElem);
        targetElem = this.getRawNode(targetElem);

        // need to read from prop to support tests.
        var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
        var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

        placement = this.parsePlacement(placement);

        var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
        var targetElemPos = {top: 0, left: 0, placement: ''};

        if (placement[2]) {
          var viewportOffset = this.viewportOffset(hostElem, appendToBody);

          var targetElemStyle = $window.getComputedStyle(targetElem);
          var adjustedSize = {
            width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
            height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
          };

          placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                         placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                         placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                         placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                         placement[0];

          placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                         placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                         placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                         placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                         placement[1];

          if (placement[1] === 'center') {
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
              if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                placement[1] = 'left';
              } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                placement[1] = 'right';
              }
            } else {
              var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
              if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                placement[1] = 'top';
              } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                placement[1] = 'bottom';
              }
            }
          }
        }

        switch (placement[0]) {
          case 'top':
            targetElemPos.top = hostElemPos.top - targetHeight;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left - targetWidth;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width;
            break;
        }

        switch (placement[1]) {
          case 'top':
            targetElemPos.top = hostElemPos.top;
            break;
          case 'bottom':
            targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
            break;
          case 'left':
            targetElemPos.left = hostElemPos.left;
            break;
          case 'right':
            targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
            break;
          case 'center':
            if (PLACEMENT_REGEX.vertical.test(placement[0])) {
              targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
            } else {
              targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
            }
            break;
        }

        targetElemPos.top = Math.round(targetElemPos.top);
        targetElemPos.left = Math.round(targetElemPos.left);
        targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

        return targetElemPos;
      },

      /**
       * Provides a way to adjust the top positioning after first
       * render to correctly align element to top after content
       * rendering causes resized element height
       *
       * @param {array} placementClasses - The array of strings of classes
       * element should have.
       * @param {object} containerPosition - The object with container
       * position information
       * @param {number} initialHeight - The initial height for the elem.
       * @param {number} currentHeight - The current height for the elem.
       */
      adjustTop: function(placementClasses, containerPosition, initialHeight, currentHeight) {
        if (placementClasses.indexOf('top') !== -1 && initialHeight !== currentHeight) {
          return {
            top: containerPosition.top - currentHeight + 'px'
          };
        }
      },

      /**
       * Provides a way for positioning tooltip & dropdown
       * arrows when using placement options beyond the standard
       * left, right, top, or bottom.
       *
       * @param {element} elem - The tooltip/dropdown element.
       * @param {string} placement - The placement for the elem.
       */
      positionArrow: function(elem, placement) {
        elem = this.getRawNode(elem);

        var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
        if (!innerElem) {
          return;
        }

        var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');

        var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
        if (!arrowElem) {
          return;
        }

        var arrowCss = {
          top: '',
          bottom: '',
          left: '',
          right: ''
        };

        placement = this.parsePlacement(placement);
        if (placement[1] === 'center') {
          // no adjustment necessary - just reset styles
          angular.element(arrowElem).css(arrowCss);
          return;
        }

        var borderProp = 'border-' + placement[0] + '-width';
        var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

        var borderRadiusProp = 'border-';
        if (PLACEMENT_REGEX.vertical.test(placement[0])) {
          borderRadiusProp += placement[0] + '-' + placement[1];
        } else {
          borderRadiusProp += placement[1] + '-' + placement[0];
        }
        borderRadiusProp += '-radius';
        var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

        switch (placement[0]) {
          case 'top':
            arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'bottom':
            arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'left':
            arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
            break;
          case 'right':
            arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
            break;
        }

        arrowCss[placement[1]] = borderRadius;

        angular.element(arrowElem).css(arrowCss);
      }
    };
  }]);

angular.module('ui.bootstrap.datepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

.value('$datepickerPopupLiteralWarning', true)

.constant('uibDatepickerPopupConfig', {
  altInputFormats: [],
  appendToBody: false,
  clearText: 'Clear',
  closeOnDateSelection: true,
  closeText: 'Done',
  currentText: 'Today',
  datepickerPopup: 'yyyy-MM-dd',
  datepickerPopupTemplateUrl: 'uib/template/datepickerPopup/popup.html',
  datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  onOpenFocus: true,
  showButtonBar: true,
  placement: 'auto bottom-left'
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning',
function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
  var cache = {},
    isHtml5DateInput = false;
  var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
    datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
    ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [];

  this.init = function(_ngModel_) {
    ngModel = _ngModel_;
    ngModelOptions = extractOptions(ngModel);
    closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
      $scope.$parent.$eval($attrs.closeOnDateSelection) :
      datepickerPopupConfig.closeOnDateSelection;
    appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
      $scope.$parent.$eval($attrs.datepickerAppendToBody) :
      datepickerPopupConfig.appendToBody;
    onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
      $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
    datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
      $attrs.datepickerPopupTemplateUrl :
      datepickerPopupConfig.datepickerPopupTemplateUrl;
    datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
      $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
    altInputFormats = angular.isDefined($attrs.altInputFormats) ?
      $scope.$parent.$eval($attrs.altInputFormats) :
      datepickerPopupConfig.altInputFormats;

    $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
      $scope.$parent.$eval($attrs.showButtonBar) :
      datepickerPopupConfig.showButtonBar;

    if (datepickerPopupConfig.html5Types[$attrs.type]) {
      dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
      isHtml5DateInput = true;
    } else {
      dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
      $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
        // Invalidate the $modelValue to ensure that formatters re-run
        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
        if (newDateFormat !== dateFormat) {
          dateFormat = newDateFormat;
          ngModel.$modelValue = null;

          if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
          }
        }
      });
    }

    if (!dateFormat) {
      throw new Error('uibDatepickerPopup must have a date format specified.');
    }

    if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
      throw new Error('HTML5 date input types do not support custom formats.');
    }

    // popup element used to display calendar
    popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');

    popupEl.attr({
      'ng-model': 'date',
      'ng-change': 'dateSelection(date)',
      'template-url': datepickerPopupTemplateUrl
    });

    // datepicker element
    datepickerEl = angular.element(popupEl.children()[0]);
    datepickerEl.attr('template-url', datepickerTemplateUrl);

    if (!$scope.datepickerOptions) {
      $scope.datepickerOptions = {};
    }

    if (isHtml5DateInput) {
      if ($attrs.type === 'month') {
        $scope.datepickerOptions.datepickerMode = 'month';
        $scope.datepickerOptions.minMode = 'month';
      }
    }

    datepickerEl.attr('datepicker-options', 'datepickerOptions');

    if (!isHtml5DateInput) {
      // Internal API to maintain the correct ng-invalid-[key] class
      ngModel.$$parserName = 'date';
      ngModel.$validators.date = validator;
      ngModel.$parsers.unshift(parseDate);
      ngModel.$formatters.push(function(value) {
        if (ngModel.$isEmpty(value)) {
          $scope.date = value;
          return value;
        }

        if (angular.isNumber(value)) {
          value = new Date(value);
        }

        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));

        return dateParser.filter($scope.date, dateFormat);
      });
    } else {
      ngModel.$formatters.push(function(value) {
        $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption('timezone'));
        return value;
      });
    }

    // Detect changes in the view from the text box
    ngModel.$viewChangeListeners.push(function() {
      $scope.date = parseDateString(ngModel.$viewValue);
    });

    $element.on('keydown', inputKeydownBind);

    $popup = $compile(popupEl)($scope);
    // Prevent jQuery cache memory leak (template is now redundant after linking)
    popupEl.remove();

    if (appendToBody) {
      $document.find('body').append($popup);
    } else {
      $element.after($popup);
    }

    $scope.$on('$destroy', function() {
      if ($scope.isOpen === true) {
        if (!$rootScope.$$phase) {
          $scope.$apply(function() {
            $scope.isOpen = false;
          });
        }
      }

      $popup.remove();
      $element.off('keydown', inputKeydownBind);
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);

      //Clear all watch listeners on destroy
      while (watchListeners.length) {
        watchListeners.shift()();
      }
    });
  };

  $scope.getText = function(key) {
    return $scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
  };

  $scope.isDisabled = function(date) {
    if (date === 'today') {
      date = dateParser.fromTimezone(new Date(), ngModelOptions.getOption('timezone'));
    }

    var dates = {};
    angular.forEach(['minDate', 'maxDate'], function(key) {
      if (!$scope.datepickerOptions[key]) {
        dates[key] = null;
      } else if (angular.isDate($scope.datepickerOptions[key])) {
        dates[key] = new Date($scope.datepickerOptions[key]);
      } else {
        if ($datepickerPopupLiteralWarning) {
          $log.warn('Literal date support has been deprecated, please switch to date object usage');
        }

        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
      }
    });

    return $scope.datepickerOptions &&
      dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
      dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
  };

  $scope.compare = function(date1, date2) {
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  };

  // Inner change
  $scope.dateSelection = function(dt) {
    $scope.date = dt;
    var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
    $element.val(date);
    ngModel.$setViewValue(date);

    if (closeOnDateSelection) {
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.keydown = function(evt) {
    if (evt.which === 27) {
      evt.stopPropagation();
      $scope.isOpen = false;
      $element[0].focus();
    }
  };

  $scope.select = function(date, evt) {
    evt.stopPropagation();

    if (date === 'today') {
      var today = new Date();
      if (angular.isDate($scope.date)) {
        date = new Date($scope.date);
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
      } else {
        date = dateParser.fromTimezone(today, ngModelOptions.getOption('timezone'));
        date.setHours(0, 0, 0, 0);
      }
    }
    $scope.dateSelection(date);
  };

  $scope.close = function(evt) {
    evt.stopPropagation();

    $scope.isOpen = false;
    $element[0].focus();
  };

  $scope.disabled = angular.isDefined($attrs.disabled) || false;
  if ($attrs.ngDisabled) {
    watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
      $scope.disabled = disabled;
    }));
  }

  $scope.$watch('isOpen', function(value) {
    if (value) {
      if (!$scope.disabled) {
        $timeout(function() {
          positionPopup();

          if (onOpenFocus) {
            $scope.$broadcast('uib:datepicker.focus');
          }

          $document.on('click', documentClickBind);

          var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
          if (appendToBody || $position.parsePlacement(placement)[2]) {
            scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
            if (scrollParentEl) {
              scrollParentEl.on('scroll', positionPopup);
            }
          } else {
            scrollParentEl = null;
          }

          angular.element($window).on('resize', positionPopup);
        }, 0, false);
      } else {
        $scope.isOpen = false;
      }
    } else {
      $document.off('click', documentClickBind);
      if (scrollParentEl) {
        scrollParentEl.off('scroll', positionPopup);
      }
      angular.element($window).off('resize', positionPopup);
    }
  });

  function cameltoDash(string) {
    return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
  }

  function parseDateString(viewValue) {
    var date = dateParser.parse(viewValue, dateFormat, $scope.date);
    if (isNaN(date)) {
      for (var i = 0; i < altInputFormats.length; i++) {
        date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
        if (!isNaN(date)) {
          return date;
        }
      }
    }
    return date;
  }

  function parseDate(viewValue) {
    if (angular.isNumber(viewValue)) {
      // presumably timestamp to date object
      viewValue = new Date(viewValue);
    }

    if (!viewValue) {
      return null;
    }

    if (angular.isDate(viewValue) && !isNaN(viewValue)) {
      return viewValue;
    }

    if (angular.isString(viewValue)) {
      var date = parseDateString(viewValue);
      if (!isNaN(date)) {
        return dateParser.toTimezone(date, ngModelOptions.getOption('timezone'));
      }
    }

    return ngModelOptions.getOption('allowInvalid') ? viewValue : undefined;
  }

  function validator(modelValue, viewValue) {
    var value = modelValue || viewValue;

    if (!$attrs.ngRequired && !value) {
      return true;
    }

    if (angular.isNumber(value)) {
      value = new Date(value);
    }

    if (!value) {
      return true;
    }

    if (angular.isDate(value) && !isNaN(value)) {
      return true;
    }

    if (angular.isString(value)) {
      return !isNaN(parseDateString(value));
    }

    return false;
  }

  function documentClickBind(event) {
    if (!$scope.isOpen && $scope.disabled) {
      return;
    }

    var popup = $popup[0];
    var dpContainsTarget = $element[0].contains(event.target);
    // The popup node may not be an element node
    // In some browsers (IE) only element nodes have the 'contains' function
    var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
    if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
    }
  }

  function inputKeydownBind(evt) {
    if (evt.which === 27 && $scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = false;
      });
      $element[0].focus();
    } else if (evt.which === 40 && !$scope.isOpen) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.$apply(function() {
        $scope.isOpen = true;
      });
    }
  }

  function positionPopup() {
    if ($scope.isOpen) {
      var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
      var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
      var position = $position.positionElements($element, dpElement, placement, appendToBody);
      dpElement.css({top: position.top + 'px', left: position.left + 'px'});
      if (dpElement.hasClass('uib-position-measure')) {
        dpElement.removeClass('uib-position-measure');
      }
    }
  }

  function extractOptions(ngModelCtrl) {
    var ngModelOptions;

    if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
      // guarantee a value
      ngModelOptions = angular.isObject(ngModelCtrl.$options) ?
        ngModelCtrl.$options :
        {
          timezone: null
        };

      // mimic 1.6+ api
      ngModelOptions.getOption = function (key) {
        return ngModelOptions[key];
      };
    } else { // in angular >=1.6 $options is always present
      ngModelOptions = ngModelCtrl.$options;
    }

    return ngModelOptions;
  }

  $scope.$on('uib:datepicker.mode', function() {
    $timeout(positionPopup, 0, false);
  });
}])

.directive('uibDatepickerPopup', function() {
  return {
    require: ['ngModel', 'uibDatepickerPopup'],
    controller: 'UibDatepickerPopupController',
    scope: {
      datepickerOptions: '=?',
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@'
    },
    link: function(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        ctrl = ctrls[1];

      ctrl.init(ngModel);
    }
  };
})

.directive('uibDatepickerPopupWrap', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/datepickerPopup/popup.html';
    }
  };
});

angular.module('ui.bootstrap.debounce', [])
/**
 * A helper, internal service that debounces a function
 */
  .factory('$$debounce', ['$timeout', function($timeout) {
    return function(callback, debounceTime) {
      var timeoutPromise;

      return function() {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function() {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

angular.module('ui.bootstrap.multiMap', [])
/**
 * A helper, internal data structure that stores all references attached to key
 */
  .factory('$$multiMap', function() {
    return {
      createNew: function() {
        var map = {};

        return {
          entries: function() {
            return Object.keys(map).map(function(key) {
              return {
                key: key,
                value: map[key]
              };
            });
          },
          get: function(key) {
            return map[key];
          },
          hasKey: function(key) {
            return !!map[key];
          },
          keys: function() {
            return Object.keys(map);
          },
          put: function(key, value) {
            if (!map[key]) {
              map[key] = [];
            }

            map[key].push(value);
          },
          remove: function(key, value) {
            var values = map[key];

            if (!values) {
              return;
            }

            var idx = values.indexOf(value);

            if (idx !== -1) {
              values.splice(idx, 1);
            }

            if (!values.length) {
              delete map[key];
            }
          }
        };
      }
    };
  });

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.multiMap', 'ui.bootstrap.position'])

.constant('uibDropdownConfig', {
  appendToOpenClass: 'uib-dropdown-open',
  openClass: 'open'
})

.service('uibDropdownService', ['$document', '$rootScope', '$$multiMap', function($document, $rootScope, $$multiMap) {
  var openScope = null;
  var openedContainers = $$multiMap.createNew();

  this.isOnlyOpen = function(dropdownScope, appendTo) {
    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openDropdown = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (openDropdown) {
        return openedDropdowns.length === 1;
      }
    }

    return false;
  };

  this.open = function(dropdownScope, element, appendTo) {
    if (!openScope) {
      $document.on('click', closeDropdown);
    }

    if (openScope && openScope !== dropdownScope) {
      openScope.isOpen = false;
    }

    openScope = dropdownScope;

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var openedScopes = openedDropdowns.map(function(dropdown) {
        return dropdown.scope;
      });
      if (openedScopes.indexOf(dropdownScope) === -1) {
        openedContainers.put(appendTo, {
          scope: dropdownScope
        });
      }
    } else {
      openedContainers.put(appendTo, {
        scope: dropdownScope
      });
    }
  };

  this.close = function(dropdownScope, element, appendTo) {
    if (openScope === dropdownScope) {
      $document.off('click', closeDropdown);
      $document.off('keydown', this.keybindFilter);
      openScope = null;
    }

    if (!appendTo) {
      return;
    }

    var openedDropdowns = openedContainers.get(appendTo);
    if (openedDropdowns) {
      var dropdownToClose = openedDropdowns.reduce(function(toClose, dropdown) {
        if (dropdown.scope === dropdownScope) {
          return dropdown;
        }

        return toClose;
      }, {});
      if (dropdownToClose) {
        openedContainers.remove(appendTo, dropdownToClose);
      }
    }
  };

  var closeDropdown = function(evt) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope || !openScope.isOpen) { return; }

    if (evt && openScope.getAutoClose() === 'disabled') { return; }

    if (evt && evt.which === 3) { return; }

    var toggleElement = openScope.getToggleElement();
    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    if (evt && openScope.getAutoClose() === 'outsideClick' &&
      dropdownElement && dropdownElement[0].contains(evt.target)) {
      return;
    }

    openScope.focusToggleElement();
    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  this.keybindFilter = function(evt) {
    if (!openScope) {
      // see this.close as ESC could have been pressed which kills the scope so we can not proceed
      return;
    }

    var dropdownElement = openScope.getDropdownElement();
    var toggleElement = openScope.getToggleElement();
    var dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target);
    var toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
    if (evt.which === 27) {
      evt.stopPropagation();
      openScope.focusToggleElement();
      closeDropdown();
    } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted)) {
      evt.preventDefault();
      evt.stopPropagation();
      openScope.focusDropdownEntry(evt.which);
    }
  };
}])

.controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
  var self = this,
    scope = $scope.$new(), // create a child scope so we are not polluting original one
    templateScope,
    appendToOpenClass = dropdownConfig.appendToOpenClass,
    openClass = dropdownConfig.openClass,
    getIsOpen,
    setIsOpen = angular.noop,
    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
    keynavEnabled = false,
    selectedOption = null,
    body = $document.find('body');

  $element.addClass('dropdown');

  this.init = function() {
    if ($attrs.isOpen) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    keynavEnabled = angular.isDefined($attrs.keyboardNav);
  };

  this.toggle = function(open) {
    scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    if (angular.isFunction(setIsOpen)) {
      setIsOpen(scope, scope.isOpen);
    }

    return scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return $element;
  };

  scope.isKeynavEnabled = function() {
    return keynavEnabled;
  };

  scope.focusDropdownEntry = function(keyCode) {
    var elems = self.dropdownMenu ? //If append to body is used.
      angular.element(self.dropdownMenu).find('a') :
      $element.find('ul').eq(0).find('a');

    switch (keyCode) {
      case 40: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = 0;
        } else {
          self.selectedOption = self.selectedOption === elems.length - 1 ?
            self.selectedOption :
            self.selectedOption + 1;
        }
        break;
      }
      case 38: {
        if (!angular.isNumber(self.selectedOption)) {
          self.selectedOption = elems.length - 1;
        } else {
          self.selectedOption = self.selectedOption === 0 ?
            0 : self.selectedOption - 1;
        }
        break;
      }
    }
    elems[self.selectedOption].focus();
  };

  scope.getDropdownElement = function() {
    return self.dropdownMenu;
  };

  scope.focusToggleElement = function() {
    if (self.toggleElement) {
      self.toggleElement[0].focus();
    }
  };

  function removeDropdownMenu() {
    $element.append(self.dropdownMenu);
  }

  scope.$watch('isOpen', function(isOpen, wasOpen) {
    var appendTo = null,
      appendToBody = false;

    if (angular.isDefined($attrs.dropdownAppendTo)) {
      var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
      if (appendToEl) {
        appendTo = angular.element(appendToEl);
      }
    }

    if (angular.isDefined($attrs.dropdownAppendToBody)) {
      var appendToBodyValue = $parse($attrs.dropdownAppendToBody)(scope);
      if (appendToBodyValue !== false) {
        appendToBody = true;
      }
    }

    if (appendToBody && !appendTo) {
      appendTo = body;
    }

    if (appendTo && self.dropdownMenu) {
      if (isOpen) {
        appendTo.append(self.dropdownMenu);
        $element.on('$destroy', removeDropdownMenu);
      } else {
        $element.off('$destroy', removeDropdownMenu);
        removeDropdownMenu();
      }
    }

    if (appendTo && self.dropdownMenu) {
      var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
        css,
        rightalign,
        scrollbarPadding,
        scrollbarWidth = 0;

      css = {
        top: pos.top + 'px',
        display: isOpen ? 'block' : 'none'
      };

      rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
      if (!rightalign) {
        css.left = pos.left + 'px';
        css.right = 'auto';
      } else {
        css.left = 'auto';
        scrollbarPadding = $position.scrollbarPadding(appendTo);

        if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
          scrollbarWidth = scrollbarPadding.scrollbarWidth;
        }

        css.right = window.innerWidth - scrollbarWidth -
          (pos.left + $element.prop('offsetWidth')) + 'px';
      }

      // Need to adjust our positioning to be relative to the appendTo container
      // if it's not the body element
      if (!appendToBody) {
        var appendOffset = $position.offset(appendTo);

        css.top = pos.top - appendOffset.top + 'px';

        if (!rightalign) {
          css.left = pos.left - appendOffset.left + 'px';
        } else {
          css.right = window.innerWidth -
            (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
        }
      }

      self.dropdownMenu.css(css);
    }

    var openContainer = appendTo ? appendTo : $element;
    var dropdownOpenClass = appendTo ? appendToOpenClass : openClass;
    var hasOpenClass = openContainer.hasClass(dropdownOpenClass);
    var isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);

    if (hasOpenClass === !isOpen) {
      var toggleClass;
      if (appendTo) {
        toggleClass = !isOnlyOpen ? 'addClass' : 'removeClass';
      } else {
        toggleClass = isOpen ? 'addClass' : 'removeClass';
      }
      $animate[toggleClass](openContainer, dropdownOpenClass).then(function() {
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, { open: !!isOpen });
        }
      });
    }

    if (isOpen) {
      if (self.dropdownMenuTemplateUrl) {
        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
          templateScope = scope.$new();
          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
            var newEl = dropdownElement;
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
            $document.on('keydown', uibDropdownService.keybindFilter);
          });
        });
      } else {
        $document.on('keydown', uibDropdownService.keybindFilter);
      }

      scope.focusToggleElement();
      uibDropdownService.open(scope, $element, appendTo);
    } else {
      uibDropdownService.close(scope, $element, appendTo);
      if (self.dropdownMenuTemplateUrl) {
        if (templateScope) {
          templateScope.$destroy();
        }
        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
        self.dropdownMenu.replaceWith(newEl);
        self.dropdownMenu = newEl;
      }

      self.selectedOption = null;
    }

    if (angular.isFunction(setIsOpen)) {
      setIsOpen($scope, isOpen);
    }
  });
}])

.directive('uibDropdown', function() {
  return {
    controller: 'UibDropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init();
    }
  };
})

.directive('uibDropdownMenu', function() {
  return {
    restrict: 'A',
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
        return;
      }

      element.addClass('dropdown-menu');

      var tplUrl = attrs.templateUrl;
      if (tplUrl) {
        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
      }

      if (!dropdownCtrl.dropdownMenu) {
        dropdownCtrl.dropdownMenu = element;
      }
    }
  };
})

.directive('uibDropdownToggle', function() {
  return {
    require: '?^uibDropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }

      element.addClass('dropdown-toggle');

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.on('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.off('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.stackedMap', [])
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function() {
    return {
      createNew: function() {
        var stack = [];

        return {
          add: function(key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function(key) {
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function() {
            return stack[stack.length - 1];
          },
          remove: function(key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key === stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function() {
            return stack.pop();
          },
          length: function() {
            return stack.length;
          }
        };
      }
    };
  });
angular.module('ui.bootstrap.modal', ['ui.bootstrap.multiMap', 'ui.bootstrap.stackedMap', 'ui.bootstrap.position'])
/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
  .provider('$uibResolve', function() {
    var resolve = this;
    this.resolver = null;

    this.setResolver = function(resolver) {
      this.resolver = resolver;
    };

    this.$get = ['$injector', '$q', function($injector, $q) {
      var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
      return {
        resolve: function(invocables, locals, parent, self) {
          if (resolver) {
            return resolver.resolve(invocables, locals, parent, self);
          }

          var promises = [];

          angular.forEach(invocables, function(value) {
            if (angular.isFunction(value) || angular.isArray(value)) {
              promises.push($q.resolve($injector.invoke(value)));
            } else if (angular.isString(value)) {
              promises.push($q.resolve($injector.get(value)));
            } else {
              promises.push($q.resolve(value));
            }
          });

          return $q.all(promises).then(function(resolves) {
            var resolveObj = {};
            var resolveIter = 0;
            angular.forEach(invocables, function(value, key) {
              resolveObj[key] = resolves[resolveIter++];
            });

            return resolveObj;
          });
        }
      };
    }];
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('uibModalBackdrop', ['$animate', '$injector', '$uibModalStack',
  function($animate, $injector, $modalStack) {
    return {
      restrict: 'A',
      compile: function(tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      if (attrs.modalInClass) {
        $animate.addClass(element, attrs.modalInClass);

        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
          var done = setIsAsync();
          if (scope.modalOptions.animation) {
            $animate.removeClass(element, attrs.modalInClass).then(done);
          } else {
            done();
          }
        });
      }
    }
  }])

  .directive('uibModalWindow', ['$uibModalStack', '$q', '$animateCss', '$document',
  function($modalStack, $q, $animateCss, $document) {
    return {
      scope: {
        index: '@'
      },
      restrict: 'A',
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'uib/template/modal/window.html';
      },
      link: function(scope, element, attrs) {
        element.addClass(attrs.windowTopClass || '');
        scope.size = attrs.size;

        scope.close = function(evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop &&
            modal.value.backdrop !== 'static' &&
            evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // moved from template to fix issue #2280
        element.on('click', scope.close);

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is rendered.
        var modalRenderDeferObj = $q.defer();
        // Resolve render promise post-digest
        scope.$$postDigest(function() {
          modalRenderDeferObj.resolve();
        });

        modalRenderDeferObj.promise.then(function() {
          var animationPromise = null;

          if (attrs.modalInClass) {
            animationPromise = $animateCss(element, {
              addClass: attrs.modalInClass
            }).start();

            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
              var done = setIsAsync();
              $animateCss(element, {
                removeClass: attrs.modalInClass
              }).start().then(done);
            });
          }


          $q.when(animationPromise).then(function() {
            // Notify {@link $modalStack} that modal is rendered.
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }

            /**
             * If something within the freshly-opened modal already has focus (perhaps via a
             * directive that causes focus) then there's no need to try to focus anything.
             */
            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
              var inputWithAutofocus = element[0].querySelector('[autofocus]');
              /**
               * Auto-focusing of a freshly-opened modal element causes any child elements
               * with the autofocus attribute to lose focus. This is an issue on touch
               * based devices which will show and then hide the onscreen keyboard.
               * Attempts to refocus the autofocus element via JavaScript will not reopen
               * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
               * the modal element if the modal does not contain an autofocus element.
               */
              if (inputWithAutofocus) {
                inputWithAutofocus.focus();
              } else {
                element[0].focus();
              }
            }
          });
        });
      }
    };
  }])

  .directive('uibModalAnimationClass', function() {
    return {
      compile: function(tElement, tAttrs) {
        if (tAttrs.modalAnimation) {
          tElement.addClass(tAttrs.uibModalAnimationClass);
        }
      }
    };
  })

  .directive('uibModalTransclude', ['$animate', function($animate) {
    return {
      link: function(scope, element, attrs, controller, transclude) {
        transclude(scope.$parent, function(clone) {
          element.empty();
          $animate.enter(clone, element);
        });
      }
    };
  }])

  .factory('$uibModalStack', ['$animate', '$animateCss', '$document',
    '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', '$uibPosition',
    function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {
        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
      };
      var topModalIndex = 0;
      var previousTopOpenedModal = null;
      var ARIA_HIDDEN_ATTRIBUTE_NAME = 'data-bootstrap-modal-aria-hidden-count';

      //Modal focus behavior
      var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
        'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
        'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
      var scrollbarPadding;
      var SNAKE_CASE_REGEXP = /[A-Z]/g;

      // TODO: extract into common dependency with tooltip
      function snake_case(name) {
        var separator = '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }

      function isVisible(element) {
        return !!(element.offsetWidth ||
          element.offsetHeight ||
          element.getClientRects().length);
      }

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }

        // If any backdrop exist, ensure that it's index is always
        // right below the top modal
        if (topBackdropIndex > -1 && topBackdropIndex < topModalIndex) {
          topBackdropIndex = topModalIndex;
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;

        //clean up the stack
        openedWindows.remove(modalInstance);
        previousTopOpenedModal = openedWindows.top();
        if (previousTopOpenedModal) {
          topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10);
        }

        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          var areAnyOpen = openedClasses.hasKey(modalBodyClass);
          appendToElement.toggleClass(modalBodyClass, areAnyOpen);
          if (!areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
            if (scrollbarPadding.originalRight) {
              appendToElement.css({paddingRight: scrollbarPadding.originalRight + 'px'});
            } else {
              appendToElement.css({paddingRight: ''});
            }
            scrollbarPadding = null;
          }
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();

        //move focus to specified element if available, or else to body
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }

      // Add or remove "windowTopClass" from the top window in the stack
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;

        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }

      function checkRemoveBackdrop() {
        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }

      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }

          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

        // Note that it's intentional that asyncPromise might be null.
        // That's when setIsAsync has not been called during the
        // NOW_CLOSING_EVENT broadcast.
        return $q.when(asyncPromise).then(afterAnimating);

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          $animate.leave(domEl).then(function() {
            if (done) {
              done();
            }

            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });

          scope.$destroy();
        }
      }

      $document.on('keydown', keydownListener);

      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });

      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }

        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27: {
              if (modal.value.keyboard) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                  $modalStack.dismiss(modal.key, 'escape key press');
                });
              }
              break;
            }
            case 9: {
              var list = $modalStack.loadFocusElementList(modal);
              var focusChanged = false;
              if (evt.shiftKey) {
                if ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) {
                  focusChanged = $modalStack.focusLastFocusableElement(list);
                }
              } else {
                if ($modalStack.isFocusInLastItem(evt, list)) {
                  focusChanged = $modalStack.focusFirstFocusableElement(list);
                }
              }

              if (focusChanged) {
                evt.preventDefault();
                evt.stopPropagation();
              }

              break;
            }
          }
        }
      }

      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

        toggleTopWindowClass(false);

        // Store the current top first, to determine what index we ought to use
        // for the current top modal
        previousTopOpenedModal = openedWindows.top();

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });

        openedClasses.put(modalBodyClass, modalInstance);

        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr({
            'class': 'modal-backdrop',
            'ng-style': '{\'z-index\': 1040 + (index && 1 || 0) + index*10}',
            'uib-modal-animation-class': 'fade',
            'modal-in-class': 'in'
          });
          if (modal.backdropClass) {
            backdropDomEl.addClass(modal.backdropClass);
          }

          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
          if ($uibPosition.isScrollable(appendToElement)) {
            scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement);
            if (scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth) {
              appendToElement.css({paddingRight: scrollbarPadding.right + 'px'});
            }
          }
        }

        var content;
        if (modal.component) {
          content = document.createElement(snake_case(modal.component.name));
          content = angular.element(content);
          content.attr({
            resolve: '$resolve',
            'modal-instance': '$uibModalInstance',
            close: '$close($value)',
            dismiss: '$dismiss($value)'
          });
        } else {
          content = modal.content;
        }

        // Set the top modal index based on the index of the previous top modal
        topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr('index'), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'class': 'modal',
          'template-url': modal.windowTemplateUrl,
          'window-top-class': modal.windowTopClass,
          'role': 'dialog',
          'aria-labelledby': modal.ariaLabelledBy,
          'aria-describedby': modal.ariaDescribedBy,
          'size': modal.size,
          'index': topModalIndex,
          'animate': 'animate',
          'ng-style': '{\'z-index\': 1050 + $$topModalIndex*10, display: \'block\'}',
          'tabindex': -1,
          'uib-modal-animation-class': 'fade',
          'modal-in-class': 'in'
        }).append(content);
        if (modal.windowClass) {
          angularDomEl.addClass(modal.windowClass);
        }

        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        appendToElement.addClass(modalBodyClass);
        if (modal.scope) {
          // we need to explicitly add the modal index to the modal scope
          // because it is needed by ngStyle to compute the zIndex property.
          modal.scope.$$topModalIndex = topModalIndex;
        }
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement);

        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;

        applyAriaHidden(angularDomEl);

        function applyAriaHidden(el) {
          if (!el || el[0].tagName === 'BODY') {
            return;
          }

          getSiblings(el).forEach(function(sibling) {
            var elemIsAlreadyHidden = sibling.getAttribute('aria-hidden') === 'true',
              ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);

            if (!ariaHiddenCount) {
              ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0;
            }

            sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1);
            sibling.setAttribute('aria-hidden', 'true');
          });

          return applyAriaHidden(el.parent());

          function getSiblings(el) {
            var children = el.parent() ? el.parent().children() : [];

            return Array.prototype.filter.call(children, function(child) {
              return child !== el[0];
            });
          }
        }
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      function unhideBackgroundElements() {
        Array.prototype.forEach.call(
          document.querySelectorAll('[' + ARIA_HIDDEN_ATTRIBUTE_NAME + ']'),
          function(hiddenEl) {
            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
              newHiddenCount = ariaHiddenCount - 1;
            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount);

            if (!newHiddenCount) {
              hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME);
              hiddenEl.removeAttribute('aria-hidden');
            }
          }
        );
      }

      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }

        return !modalWindow;
      };

      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        unhideBackgroundElements();
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function() {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      $modalStack.focusFirstFocusableElement = function(list) {
        if (list.length > 0) {
          list[0].focus();
          return true;
        }
        return false;
      };

      $modalStack.focusLastFocusableElement = function(list) {
        if (list.length > 0) {
          list[list.length - 1].focus();
          return true;
        }
        return false;
      };

      $modalStack.isModalFocused = function(evt, modalWindow) {
        if (evt && modalWindow) {
          var modalDomEl = modalWindow.value.modalDomEl;
          if (modalDomEl && modalDomEl.length) {
            return (evt.target || evt.srcElement) === modalDomEl[0];
          }
        }
        return false;
      };

      $modalStack.isFocusInFirstItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[0];
        }
        return false;
      };

      $modalStack.isFocusInLastItem = function(evt, list) {
        if (list.length > 0) {
          return (evt.target || evt.srcElement) === list[list.length - 1];
        }
        return false;
      };

      $modalStack.loadFocusElementList = function(modalWindow) {
        if (modalWindow) {
          var modalDomE1 = modalWindow.value.modalDomEl;
          if (modalDomE1 && modalDomE1.length) {
            var elements = modalDomE1[0].querySelectorAll(tabbableSelector);
            return elements ?
              Array.prototype.filter.call(elements, function(element) {
                return isVisible(element);
              }) : elements;
          }
        }
      };

      return $modalStack;
    }])

  .provider('$uibModal', function() {
    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack',
        function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ?
                options.templateUrl() : options.templateUrl);
          }

          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };

          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

            if (!modalOptions.appendTo.length) {
              throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
            }

            //verify options
            if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of component or template or templateUrl options is required.');
            }

            var templateAndResolvePromise;
            if (modalOptions.component) {
              templateAndResolvePromise = $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null));
            } else {
              templateAndResolvePromise =
                $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
            }

            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }

            // Wait for the resolution of the existing promise chain.
            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
            // Then add to $modalStack and resolve opened.
            // Finally clean up the chain variable if no subsequent modal has overwritten it.
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain])
              .then(resolveWithTemplate, resolveWithTemplate)
              .then(function resolveSuccess(tplAndVars) {
                var providedScope = modalOptions.scope || $rootScope;

                var modalScope = providedScope.$new();
                modalScope.$close = modalInstance.close;
                modalScope.$dismiss = modalInstance.dismiss;

                modalScope.$on('$destroy', function() {
                  if (!modalScope.$$uibDestructionScheduled) {
                    modalScope.$dismiss('$uibUnscheduledDestruction');
                  }
                });

                var modal = {
                  scope: modalScope,
                  deferred: modalResultDeferred,
                  renderDeferred: modalRenderDeferred,
                  closedDeferred: modalClosedDeferred,
                  animation: modalOptions.animation,
                  backdrop: modalOptions.backdrop,
                  keyboard: modalOptions.keyboard,
                  backdropClass: modalOptions.backdropClass,
                  windowTopClass: modalOptions.windowTopClass,
                  windowClass: modalOptions.windowClass,
                  windowTemplateUrl: modalOptions.windowTemplateUrl,
                  ariaLabelledBy: modalOptions.ariaLabelledBy,
                  ariaDescribedBy: modalOptions.ariaDescribedBy,
                  size: modalOptions.size,
                  openedClass: modalOptions.openedClass,
                  appendTo: modalOptions.appendTo
                };

                var component = {};
                var ctrlInstance, ctrlInstantiate, ctrlLocals = {};

                if (modalOptions.component) {
                  constructLocals(component, false, true, false);
                  component.name = modalOptions.component;
                  modal.component = component;
                } else if (modalOptions.controller) {
                  constructLocals(ctrlLocals, true, false, true);

                  // the third param will make the controller instantiate later,private api
                  // @see https://github.com/angular/angular.js/blob/master/src/ng/controller.js#L126
                  ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, true, modalOptions.controllerAs);
                  if (modalOptions.controllerAs && modalOptions.bindToController) {
                    ctrlInstance = ctrlInstantiate.instance;
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, {
                      $resolve: ctrlLocals.$scope.$resolve
                    }, providedScope);
                  }

                  ctrlInstance = ctrlInstantiate();

                  if (angular.isFunction(ctrlInstance.$onInit)) {
                    ctrlInstance.$onInit();
                  }
                }

                if (!modalOptions.component) {
                  modal.content = tplAndVars[0];
                }

                $modalStack.open(modalInstance, modal);
                modalOpenedDeferred.resolve(true);

                function constructLocals(obj, template, instanceOnScope, injectable) {
                  obj.$scope = modalScope;
                  obj.$scope.$resolve = {};
                  if (instanceOnScope) {
                    obj.$scope.$uibModalInstance = modalInstance;
                  } else {
                    obj.$uibModalInstance = modalInstance;
                  }

                  var resolves = template ? tplAndVars[1] : tplAndVars;
                  angular.forEach(resolves, function(value, key) {
                    if (injectable) {
                      obj[key] = value;
                    }

                    obj.$scope.$resolve[key] = value;
                  });
                }
            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });

            return modalInstance;
          };

          return $modal;
        }
      ]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.paging', [])
/**
 * Helper internal service for generating common controller code between the
 * pager and pagination components
 */
.factory('uibPaging', ['$parse', function($parse) {
  return {
    create: function(ctrl, $scope, $attrs) {
      ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      ctrl.ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl
      ctrl._watchers = [];

      ctrl.init = function(ngModelCtrl, config) {
        ctrl.ngModelCtrl = ngModelCtrl;
        ctrl.config = config;

        ngModelCtrl.$render = function() {
          ctrl.render();
        };

        if ($attrs.itemsPerPage) {
          ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function(value) {
            ctrl.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }));
        } else {
          ctrl.itemsPerPage = config.itemsPerPage;
        }

        $scope.$watch('totalItems', function(newTotal, oldTotal) {
          if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
            $scope.totalPages = ctrl.calculateTotalPages();
            ctrl.updatePage();
          }
        });
      };

      ctrl.calculateTotalPages = function() {
        var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };

      ctrl.render = function() {
        $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
      };

      $scope.selectPage = function(page, evt) {
        if (evt) {
          evt.preventDefault();
        }

        var clickAllowed = !$scope.ngDisabled || !evt;
        if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
          if (evt && evt.target) {
            evt.target.blur();
          }
          ctrl.ngModelCtrl.$setViewValue(page);
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.getText = function(key) {
        return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
      };

      $scope.noPrevious = function() {
        return $scope.page === 1;
      };

      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };

      ctrl.updatePage = function() {
        ctrl.setNumPages($scope.$parent, $scope.totalPages); // Readonly variable

        if ($scope.page > $scope.totalPages) {
          $scope.selectPage($scope.totalPages);
        } else {
          ctrl.ngModelCtrl.$render();
        }
      };

      $scope.$on('$destroy', function() {
        while (ctrl._watchers.length) {
          ctrl._watchers.shift()();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])

.controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
  $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;

  uibPaging.create(this, $scope, $attrs);
}])

.constant('uibPagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
  return {
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@',
      ngDisabled: '='
    },
    require: ['uibPager', '?ngModel'],
    restrict: 'A',
    controller: 'UibPagerController',
    controllerAs: 'pager',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pager/pager.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pager');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
        return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPagerConfig);
    }
  };
}]);

angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging', 'ui.bootstrap.tabindex'])
.controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
  var ctrl = this;
  // Setup configuration parameters
  var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
    rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
    forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
    boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
    pageLabel = angular.isDefined($attrs.pageLabel) ? function(idx) { return $scope.$parent.$eval($attrs.pageLabel, {$page: idx}); } : angular.identity;
  $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
  $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;
  $attrs.$set('role', 'menu');

  uibPaging.create(this, $scope, $attrs);

  if ($attrs.maxSize) {
    ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
      maxSize = parseInt(value, 10);
      ctrl.render();
    }));
  }

  // Create page object used in template
  function makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  function getPages(currentPage, totalPages) {
    var pages = [];

    // Default page limits
    var startPage = 1, endPage = totalPages;
    var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = makePage(number, pageLabel(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
      if (startPage > 1) {
        if (!boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
        var previousPageSet = makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }
        if (boundaryLinkNumbers) {
          if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
            var secondPageLink = makePage(2, '2', false);
            pages.unshift(secondPageLink);
          }
          //add the first page
          var firstPageLink = makePage(1, '1', false);
          pages.unshift(firstPageLink);
        }
      }

      if (endPage < totalPages) {
        if (!boundaryLinkNumbers || endPage < totalPages - 2) { //need ellipsis for all options unless range is too close to end
        var nextPageSet = makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
        if (boundaryLinkNumbers) {
          if (endPage === totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
            var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
            pages.push(secondToLastPageLink);
          }
          //add the last page
          var lastPageLink = makePage(totalPages, totalPages, false);
          pages.push(lastPageLink);
        }
      }
    }
    return pages;
  }

  var originalRender = this.render;
  this.render = function() {
    originalRender();
    if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
      $scope.pages = getPages($scope.page, $scope.totalPages);
    }
  };
}])

.constant('uibPaginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  boundaryLinkNumbers: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true,
  forceEllipses: false
})

.directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
  return {
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@',
      ngDisabled:'='
    },
    require: ['uibPagination', '?ngModel'],
    restrict: 'A',
    controller: 'UibPaginationController',
    controllerAs: 'pagination',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/pagination/pagination.html';
    },
    link: function(scope, element, attrs, ctrls) {
      element.addClass('pagination');
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$uibTooltip', function() {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    placementClassPrefix: '',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'outsideClick': 'outsideClick',
    'focus': 'blur',
    'none': ''
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function(value) {
		angular.extend(globalOptions, value);
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( { 'openTrigger': 'closeTrigger' } );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };

  /**
   * This is a helper function for translating camel-case to snake_case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
    var openedTooltips = $$stackedMap.createNew();
    $document.on('keyup', keypressListener);

    $rootScope.$on('$destroy', function() {
      $document.off('keyup', keypressListener);
    });

    function keypressListener(e) {
      if (e.which === 27) {
        var last = openedTooltips.top();
        if (last) {
          last.value.close();
          last = null;
        }
      }
    }

    return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
      options = angular.extend({}, defaultOptions, globalOptions, options);

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers(trigger) {
        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
        var hide = show.map(function(trigger) {
          return triggerMap[trigger] || trigger;
        });
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case(ttType);

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName + '-popup ' +
          'uib-title="' + startSym + 'title' + endSym + '" ' +
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="' + startSym + 'content' + endSym + '" ') +
          'origin-scope="origScope" ' +
          'class="uib-position-measure ' + prefix + '" ' +
          'tooltip-animation-class="fade"' +
          'uib-tooltip-classes ' +
          'ng-class="{ in: isOpen }" ' +
          '>' +
        '</div>';

      return {
        compile: function(tElem, tAttrs) {
          var tooltipLinker = $compile(template);

          return function link(scope, element, attrs, tooltipCtrl) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var showTimeout;
            var hideTimeout;
            var positionTimeout;
            var adjustmentTimeout;
            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
            var triggers = getTriggers(undefined);
            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
            var ttScope = scope.$new(true);
            var repositionScheduled = false;
            var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
            var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
            var observers = [];
            var lastPlacement;

            var positionTooltip = function() {
              // check if tooltip exists and is not empty
              if (!tooltip || !tooltip.html()) { return; }

              if (!positionTimeout) {
                positionTimeout = $timeout(function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  var initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                  var elementPos = appendToBody ? $position.offset(element) : $position.position(element);
                  tooltip.css({ top: ttPosition.top + 'px', left: ttPosition.left + 'px' });
                  var placementClasses = ttPosition.placement.split('-');

                  if (!tooltip.hasClass(placementClasses[0])) {
                    tooltip.removeClass(lastPlacement.split('-')[0]);
                    tooltip.addClass(placementClasses[0]);
                  }

                  if (!tooltip.hasClass(options.placementClassPrefix + ttPosition.placement)) {
                    tooltip.removeClass(options.placementClassPrefix + lastPlacement);
                    tooltip.addClass(options.placementClassPrefix + ttPosition.placement);
                  }

                  adjustmentTimeout = $timeout(function() {
                    var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop('offsetHeight');
                    var adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
                    if (adjustment) {
                      tooltip.css(adjustment);
                    }
                    adjustmentTimeout = null;
                  }, 0, false);

                  // first time through tt element will have the
                  // uib-position-measure class or if the placement
                  // has changed we need to position the arrow.
                  if (tooltip.hasClass('uib-position-measure')) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                    tooltip.removeClass('uib-position-measure');
                  } else if (lastPlacement !== ttPosition.placement) {
                    $position.positionArrow(tooltip, ttPosition.placement);
                  }
                  lastPlacement = ttPosition.placement;

                  positionTimeout = null;
                }, 0, false);
              }
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind() {
              if (!ttScope.isOpen) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                return;
              }

              cancelHide();
              prepareTooltip();

              if (ttScope.popupDelay) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!showTimeout) {
                  showTimeout = $timeout(show, ttScope.popupDelay, false);
                }
              } else {
                show();
              }
            }

            function hideTooltipBind() {
              cancelShow();

              if (ttScope.popupCloseDelay) {
                if (!hideTimeout) {
                  hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                }
              } else {
                hide();
              }
            }

            // Show the tooltip popup element.
            function show() {
              cancelShow();
              cancelHide();

              // Don't show empty tooltips.
              if (!ttScope.content) {
                return angular.noop;
              }

              createTooltip();

              // And show the tooltip.
              ttScope.$evalAsync(function() {
                ttScope.isOpen = true;
                assignIsOpen(true);
                positionTooltip();
              });
            }

            function cancelShow() {
              if (showTimeout) {
                $timeout.cancel(showTimeout);
                showTimeout = null;
              }

              if (positionTimeout) {
                $timeout.cancel(positionTimeout);
                positionTimeout = null;
              }
            }

            // Hide the tooltip popup element.
            function hide() {
              if (!ttScope) {
                return;
              }

              // First things first: we don't show it anymore.
              ttScope.$evalAsync(function() {
                if (ttScope) {
                  ttScope.isOpen = false;
                  assignIsOpen(false);
                  // And now we remove it from the DOM. However, if we have animation, we
                  // need to wait for it to expire beforehand.
                  // FIXME: this is a placeholder for a port of the transitions library.
                  // The fade transition in TWBS is 150ms.
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 150, false);
                    }
                  } else {
                    removeTooltip();
                  }
                }
              });
            }

            function cancelHide() {
              if (hideTimeout) {
                $timeout.cancel(hideTimeout);
                hideTimeout = null;
              }

              if (transitionTimeout) {
                $timeout.cancel(transitionTimeout);
                transitionTimeout = null;
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                return;
              }

              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
              });

              openedTooltips.add(ttScope, {
                close: hide
              });

              prepObservers();
            }

            function removeTooltip() {
              cancelShow();
              cancelHide();
              unregisterObservers();

              if (tooltip) {
                tooltip.remove();
                
                tooltip = null;
                if (adjustmentTimeout) {
                  $timeout.cancel(adjustmentTimeout);
                }
              }

              openedTooltips.remove(ttScope);
              
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            /**
             * Set the initial scope values. Once
             * the tooltip is created, the observers
             * will be added to keep things in sync.
             */
            function prepareTooltip() {
              ttScope.title = attrs[prefix + 'Title'];
              if (contentParse) {
                ttScope.content = contentParse(scope);
              } else {
                ttScope.content = attrs[ttType];
              }

              ttScope.popupClass = attrs[prefix + 'Class'];
              ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
              var placement = $position.parsePlacement(ttScope.placement);
              lastPlacement = placement[1] ? placement[0] + '-' + placement[1] : placement[0];

              var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
              var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
            }

            function assignIsOpen(isOpen) {
              if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                isOpenParse.assign(scope, isOpen);
              }
            }

            ttScope.contentExp = function() {
              return ttScope.content;
            };

            /**
             * Observe the relevant attributes.
             */
            attrs.$observe('disabled', function(val) {
              if (val) {
                cancelShow();
              }

              if (val && ttScope.isOpen) {
                hide();
              }
            });

            if (isOpenParse) {
              scope.$watch(isOpenParse, function(val) {
                if (ttScope && !val === ttScope.isOpen) {
                  toggleTooltipBind();
                }
              });
            }

            function prepObservers() {
              observers.length = 0;

              if (contentParse) {
                observers.push(
                  scope.$watch(contentParse, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    }
                  })
                );

                observers.push(
                  tooltipLinkedScope.$watch(function() {
                    if (!repositionScheduled) {
                      repositionScheduled = true;
                      tooltipLinkedScope.$$postDigest(function() {
                        repositionScheduled = false;
                        if (ttScope && ttScope.isOpen) {
                          positionTooltip();
                        }
                      });
                    }
                  })
                );
              } else {
                observers.push(
                  attrs.$observe(ttType, function(val) {
                    ttScope.content = val;
                    if (!val && ttScope.isOpen) {
                      hide();
                    } else {
                      positionTooltip();
                    }
                  })
                );
              }

              observers.push(
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );

              observers.push(
                attrs.$observe(prefix + 'Placement', function(val) {
                  ttScope.placement = val ? val : options.placement;
                  if (ttScope.isOpen) {
                    positionTooltip();
                  }
                })
              );
            }

            function unregisterObservers() {
              if (observers.length) {
                angular.forEach(observers, function(observer) {
                  observer();
                });
                observers.length = 0;
              }
            }

            // hide tooltips/popovers for outsideClick trigger
            function bodyHideTooltipBind(e) {
              if (!ttScope || !ttScope.isOpen || !tooltip) {
                return;
              }
              // make sure the tooltip/popover link or tool tooltip/popover itself were not clicked
              if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                hideTooltipBind();
              }
            }

            // KeyboardEvent handler to hide the tooltip on Escape key press
            function hideOnEscapeKey(e) {
              if (e.which === 27) {
                hideTooltipBind();
              }
            }

            var unregisterTriggers = function() {
              triggers.show.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  element.off('click', toggleTooltipBind);
                } else {
                  element.off(trigger, showTooltipBind);
                  element.off(trigger, toggleTooltipBind);
                }
                element.off('keypress', hideOnEscapeKey);
              });
              triggers.hide.forEach(function(trigger) {
                if (trigger === 'outsideClick') {
                  $document.off('click', bodyHideTooltipBind);
                } else {
                  element.off(trigger, hideTooltipBind);
                }
              });
            };

            function prepTriggers() {
              var showTriggers = [], hideTriggers = [];
              var val = scope.$eval(attrs[prefix + 'Trigger']);
              unregisterTriggers();

              if (angular.isObject(val)) {
                Object.keys(val).forEach(function(key) {
                  showTriggers.push(key);
                  hideTriggers.push(val[key]);
                });
                triggers = {
                  show: showTriggers,
                  hide: hideTriggers
                };
              } else {
                triggers = getTriggers(val);
              }

              if (triggers.show !== 'none') {
                triggers.show.forEach(function(trigger, idx) {
                  if (trigger === 'outsideClick') {
                    element.on('click', toggleTooltipBind);
                    $document.on('click', bodyHideTooltipBind);
                  } else if (trigger === triggers.hide[idx]) {
                    element.on(trigger, toggleTooltipBind);
                  } else if (trigger) {
                    element.on(trigger, showTooltipBind);
                    element.on(triggers.hide[idx], hideTooltipBind);
                  }
                  element.on('keypress', hideOnEscapeKey);
                });
              }
            }

            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal;
            var appendKey = prefix + 'AppendToBody';
            if (appendKey in attrs && attrs[appendKey] === undefined) {
              appendToBodyVal = true;
            } else {
              appendToBodyVal = scope.$eval(attrs[appendKey]);
            }

            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive('uibTooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate, $sce, $compile, $templateRequest) {
  return {
    link: function(scope, elem, attrs) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }

        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }

        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // need to set the primary position so the
      // arrow has space during position measure.
      // tooltip.positionTooltip()
      if (scope.placement) {
        // // There are no top-left etc... classes
        // // in TWBS, so we need the primary position.
        var position = $uibPosition.parsePlacement(scope.placement);
        element.addClass(position[0]);
      }

      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }

      if (scope.animation) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
}])

.directive('uibTooltipPopup', function() {
  return {
    restrict: 'A',
    scope: { content: '@' },
    templateUrl: 'uib/template/tooltip/tooltip-popup.html'
  };
})

.directive('uibTooltip', [ '$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
}])

.directive('uibTooltipTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
  };
})

.directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive('uibTooltipHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&' },
    templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
  };
})

.directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

.directive('uibPopoverTemplatePopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', contentExp: '&', originScope: '&' },
    templateUrl: 'uib/template/popover/popover-template.html'
  };
})

.directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverHtmlPopup', function() {
  return {
    restrict: 'A',
    scope: { contentExp: '&', uibTitle: '@' },
    templateUrl: 'uib/template/popover/popover-html.html'
  };
})

.directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopoverHtml', 'popover', 'click', {
    useContentExp: true
  });
}])

.directive('uibPopoverPopup', function() {
  return {
    restrict: 'A',
    scope: { uibTitle: '@', content: '@' },
    templateUrl: 'uib/template/popover/popover.html'
  };
})

.directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
  return $uibTooltip('uibPopover', 'popover', 'click');
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('uibProgressConfig', {
  animate: true,
  max: 100
})

.controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
  var self = this,
      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

  this.bars = [];
  $scope.max = getMaxOrDefault();

  this.addBar = function(bar, element, attrs) {
    if (!animate) {
      element.css({'transition': 'none'});
    }

    this.bars.push(bar);

    bar.max = getMaxOrDefault();
    bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';

    bar.$watch('value', function(value) {
      bar.recalculatePercentage();
    });

    bar.recalculatePercentage = function() {
      var totalPercentage = self.bars.reduce(function(total, bar) {
        bar.percent = +(100 * bar.value / bar.max).toFixed(2);
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        bar.percent -= totalPercentage - 100;
      }
    };

    bar.$on('$destroy', function() {
      element = null;
      self.removeBar(bar);
    });
  };

  this.removeBar = function(bar) {
    this.bars.splice(this.bars.indexOf(bar), 1);
    this.bars.forEach(function (bar) {
      bar.recalculatePercentage();
    });
  };

  //$attrs.$observe('maxParam', function(maxParam) {
  $scope.$watch('maxParam', function(maxParam) {
    self.bars.forEach(function(bar) {
      bar.max = getMaxOrDefault();
      bar.recalculatePercentage();
    });
  });

  function getMaxOrDefault () {
    return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max;
  }
}])

.directive('uibProgress', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    require: 'uibProgress',
    scope: {
      maxParam: '=?max'
    },
    templateUrl: 'uib/template/progressbar/progress.html'
  };
})

.directive('uibBar', function() {
  return {
    replace: true,
    transclude: true,
    require: '^uibProgress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/bar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element, attrs);
    }
  };
})

.directive('uibProgressbar', function() {
  return {
    replace: true,
    transclude: true,
    controller: 'UibProgressController',
    scope: {
      value: '=',
      maxParam: '=?max',
      type: '@'
    },
    templateUrl: 'uib/template/progressbar/progressbar.html',
    link: function(scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
    }
  };
});

angular.module('ui.bootstrap.rating', [])

.constant('uibRatingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null,
  enableReset: true,
  titles: ['one', 'two', 'three', 'four', 'five']
})

.controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl = { $setViewValue: angular.noop },
    self = this;

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }

      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
    this.enableReset = angular.isDefined($attrs.enableReset) ?
      $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
    var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
      tmpTitles : ratingConfig.titles;

    var ratingStates = angular.isDefined($attrs.ratingStates) ?
      $scope.$parent.$eval($attrs.ratingStates) :
      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
    }
    return states;
  };

  this.getTitle = function(index) {
    if (index >= this.titles.length) {
      return index + 1;
    }

    return this.titles[index];
  };

  $scope.rate = function(value) {
    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
      var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
      ngModelCtrl.$setViewValue(newViewValue);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if (!$scope.readonly) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.title = self.getTitle($scope.value - 1);
  };
}])

.directive('uibRating', function() {
  return {
    require: ['uibRating', 'ngModel'],
    restrict: 'A',
    scope: {
      readonly: '=?readOnly',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'UibRatingController',
    templateUrl: 'uib/template/rating/rating.html',
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init(ngModelCtrl);
    }
  };
});

angular.module('ui.bootstrap.tabs', [])

.controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
    oldIndex;
  ctrl.tabs = [];

  ctrl.select = function(index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];
      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });
        if (evt && evt.isDefaultPrevented()) {
          return;
        }
        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];
      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });
    ctrl.tabs.sort(function(t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index;
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ?
        index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    ctrl.tabs.splice(index, 1);
  };

  $scope.$watch('tabset.active', function(val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}])

.directive('uibTabset', function() {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tabset.html';
    },
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ?
        scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ?
        scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

.directive('uibTab', ['$parse', function($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || 'uib/template/tabs/tab.html';
    },
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;
      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function(value) {
          scope.disabled = !! value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function(t) { return t.index; })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function(evt) {
        if (!scope.disabled) {
          var index;
          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function() {
        tabsetCtrl.removeTab(scope);
      });

      //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.
      scope.$transcludeFn = transclude;
    }
  };
}])

.directive('uibTabHeadingTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
})

.directive('uibTabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab;

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (
      node.hasAttribute('uib-tab-heading') ||
      node.hasAttribute('data-uib-tab-heading') ||
      node.hasAttribute('x-uib-tab-heading') ||
      node.tagName.toLowerCase() === 'uib-tab-heading' ||
      node.tagName.toLowerCase() === 'data-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'x-uib-tab-heading' ||
      node.tagName.toLowerCase() === 'uib:tab-heading'
    );
  }
});

angular.module('ui.bootstrap.timepicker', [])

.constant('uibTimepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  showMeridian: true,
  showSeconds: false,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true,
  showSpinners: true,
  templateUrl: 'uib/template/timepicker/timepicker.html'
})

.controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
  var hoursModelCtrl, minutesModelCtrl, secondsModelCtrl;
  var selected = new Date(),
    watchers = [],
    ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
    meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
    padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
  $element.removeAttr('tabindex');

  this.init = function(ngModelCtrl_, inputs) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function(modelValue) {
      return modelValue ? new Date(modelValue) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1),
        secondsInputEl = inputs.eq(2);

    hoursModelCtrl = hoursInputEl.controller('ngModel');
    minutesModelCtrl = minutesInputEl.controller('ngModel');
    secondsModelCtrl = secondsInputEl.controller('ngModel');

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

    if (mousewheel) {
      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = +value;
    }));
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = +value;
    }));
  }

  var min;
  watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
    var dt = new Date(value);
    min = isNaN(dt) ? undefined : dt;
  }));

  var max;
  watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
    var dt = new Date(value);
    max = isNaN(dt) ? undefined : dt;
  }));

  var disabled = false;
  if ($attrs.ngDisabled) {
    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
      disabled = value;
    }));
  }

  $scope.noIncrementHours = function() {
    var incrementedSelected = addMinutes(selected, hourStep * 60);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementHours = function() {
    var decrementedSelected = addMinutes(selected, -hourStep * 60);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementMinutes = function() {
    var incrementedSelected = addMinutes(selected, minuteStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementMinutes = function() {
    var decrementedSelected = addMinutes(selected, -minuteStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noIncrementSeconds = function() {
    var incrementedSelected = addSeconds(selected, secondStep);
    return disabled || incrementedSelected > max ||
      incrementedSelected < selected && incrementedSelected < min;
  };

  $scope.noDecrementSeconds = function() {
    var decrementedSelected = addSeconds(selected, -secondStep);
    return disabled || decrementedSelected < min ||
      decrementedSelected > selected && decrementedSelected > max;
  };

  $scope.noToggleMeridian = function() {
    if (selected.getHours() < 12) {
      return disabled || addMinutes(selected, 12 * 60) > max;
    }

    return disabled || addMinutes(selected, -12 * 60) < min;
  };

  var secondStep = timepickerConfig.secondStep;
  if ($attrs.secondStep) {
    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
      secondStep = +value;
    }));
  }

  $scope.showSeconds = timepickerConfig.showSeconds;
  if ($attrs.showSeconds) {
    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
      $scope.showSeconds = !!value;
    }));
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if (ngModelCtrl.$error.time) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
          selected.setHours(hours);
          refresh();
        }
      } else {
        updateTemplate();
      }
    }));
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate() {
    var hours = +$scope.hours;
    var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
      hours >= 0 && hours < 24;
    if (!valid || $scope.hours === '') {
      return undefined;
    }

    if ($scope.showMeridian) {
      if (hours === 12) {
        hours = 0;
      }
      if ($scope.meridian === meridians[1]) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = +$scope.minutes;
    var valid = minutes >= 0 && minutes < 60;
    if (!valid || $scope.minutes === '') {
      return undefined;
    }
    return minutes;
  }

  function getSecondsFromTemplate() {
    var seconds = +$scope.seconds;
    return seconds >= 0 && seconds < 60 ? seconds : undefined;
  }

  function pad(value, noPad) {
    if (value === null) {
      return '';
    }

    return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
      '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      return e.detail || delta > 0;
    };

    hoursInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
      }
      e.preventDefault();
    });

    minutesInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
      }
      e.preventDefault();
    });

     secondsInputEl.on('mousewheel wheel', function(e) {
      if (!disabled) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
      }
      e.preventDefault();
    });
  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    hoursInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementHours();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementHours();
          $scope.$apply();
        }
      }
    });

    minutesInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementMinutes();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementMinutes();
          $scope.$apply();
        }
      }
    });

    secondsInputEl.on('keydown', function(e) {
      if (!disabled) {
        if (e.which === 38) { // up
          e.preventDefault();
          $scope.incrementSeconds();
          $scope.$apply();
        } else if (e.which === 40) { // down
          e.preventDefault();
          $scope.decrementSeconds();
          $scope.$apply();
        }
      }
    });
  };

  this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
    if ($scope.readonlyInput) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      $scope.updateSeconds = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
      ngModelCtrl.$setViewValue(null);
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
        if (hoursModelCtrl) {
          hoursModelCtrl.$setValidity('hours', false);
        }
      }

      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
        if (minutesModelCtrl) {
          minutesModelCtrl.$setValidity('minutes', false);
        }
      }

      if (angular.isDefined(invalidSeconds)) {
        $scope.invalidSeconds = invalidSeconds;
        if (secondsModelCtrl) {
          secondsModelCtrl.$setValidity('seconds', false);
        }
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate(),
        minutes = getMinutesFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(true);
        } else {
          refresh('h');
        }
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.hours === null || $scope.hours === '') {
        invalidate(true);
      } else if (!$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply(function() {
          $scope.hours = pad($scope.hours, !padHours);
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        selected.setHours(hours);
        selected.setMinutes(minutes);
        if (selected < min || selected > max) {
          invalidate(undefined, true);
        } else {
          refresh('m');
        }
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.on('blur', function(e) {
      ngModelCtrl.$setTouched();
      if (modelIsEmpty()) {
        makeValid();
      } else if ($scope.minutes === null) {
        invalidate(undefined, true);
      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
        $scope.$apply(function() {
          $scope.minutes = pad($scope.minutes);
        });
      }
    });

    $scope.updateSeconds = function() {
      var seconds = getSecondsFromTemplate();

      ngModelCtrl.$setDirty();

      if (angular.isDefined(seconds)) {
        selected.setSeconds(seconds);
        refresh('s');
      } else {
        invalidate(undefined, undefined, true);
      }
    };

    secondsInputEl.on('blur', function(e) {
      if (modelIsEmpty()) {
        makeValid();
      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
        $scope.$apply( function() {
          $scope.seconds = pad($scope.seconds);
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if (isNaN(date)) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if (date) {
        selected = date;
      }

      if (selected < min || selected > max) {
        ngModelCtrl.$setValidity('time', false);
        $scope.invalidHours = true;
        $scope.invalidMinutes = true;
      } else {
        makeValid();
      }
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh(keyboardChange) {
    makeValid();
    ngModelCtrl.$setViewValue(new Date(selected));
    updateTemplate(keyboardChange);
  }

  function makeValid() {
    if (hoursModelCtrl) {
      hoursModelCtrl.$setValidity('hours', true);
    }

    if (minutesModelCtrl) {
      minutesModelCtrl.$setValidity('minutes', true);
    }

    if (secondsModelCtrl) {
      secondsModelCtrl.$setValidity('seconds', true);
    }

    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
    $scope.invalidSeconds = false;
  }

  function updateTemplate(keyboardChange) {
    if (!ngModelCtrl.$modelValue) {
      $scope.hours = null;
      $scope.minutes = null;
      $scope.seconds = null;
      $scope.meridian = meridians[0];
    } else {
      var hours = selected.getHours(),
        minutes = selected.getMinutes(),
        seconds = selected.getSeconds();

      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
      }

      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
      if (keyboardChange !== 'm') {
        $scope.minutes = pad(minutes);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

      if (keyboardChange !== 's') {
        $scope.seconds = pad(seconds);
      }
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
  }

  function addSecondsToSelected(seconds) {
    selected = addSeconds(selected, seconds);
    refresh();
  }

  function addMinutes(selected, minutes) {
    return addSeconds(selected, minutes*60);
  }

  function addSeconds(date, seconds) {
    var dt = new Date(date.getTime() + seconds * 1000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
    return newDate;
  }

  function modelIsEmpty() {
    return ($scope.hours === null || $scope.hours === '') &&
      ($scope.minutes === null || $scope.minutes === '') &&
      (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
  }

  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

  $scope.incrementHours = function() {
    if (!$scope.noIncrementHours()) {
      addSecondsToSelected(hourStep * 60 * 60);
    }
  };

  $scope.decrementHours = function() {
    if (!$scope.noDecrementHours()) {
      addSecondsToSelected(-hourStep * 60 * 60);
    }
  };

  $scope.incrementMinutes = function() {
    if (!$scope.noIncrementMinutes()) {
      addSecondsToSelected(minuteStep * 60);
    }
  };

  $scope.decrementMinutes = function() {
    if (!$scope.noDecrementMinutes()) {
      addSecondsToSelected(-minuteStep * 60);
    }
  };

  $scope.incrementSeconds = function() {
    if (!$scope.noIncrementSeconds()) {
      addSecondsToSelected(secondStep);
    }
  };

  $scope.decrementSeconds = function() {
    if (!$scope.noDecrementSeconds()) {
      addSecondsToSelected(-secondStep);
    }
  };

  $scope.toggleMeridian = function() {
    var minutes = getMinutesFromTemplate(),
        hours = getHoursFromTemplate();

    if (!$scope.noToggleMeridian()) {
      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
      } else {
        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
      }
    }
  };

  $scope.blur = function() {
    ngModelCtrl.$setTouched();
  };

  $scope.$on('$destroy', function() {
    while (watchers.length) {
      watchers.shift()();
    }
  });
}])

.directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
  return {
    require: ['uibTimepicker', '?^ngModel'],
    restrict: 'A',
    controller: 'UibTimepickerController',
    controllerAs: 'timepicker',
    scope: {},
    templateUrl: function(element, attrs) {
      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
    },
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('uibTypeaheadParser', ['$parse', function($parse) {
    //                      000001111111100000000000002222222200000000000000003333333333333330000000000044444444000
    var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function(input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error(
            'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
              ' but got "' + input + '".');
        }

        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }])

  .controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser',
    function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    var HOT_KEYS = [9, 13, 27, 38, 40];
    var eventDebounceTime = 200;
    var modelCtrl, ngModelOptions;
    //SUPPORTED ATTRIBUTES (OPTIONS)

    //minimal no of characters that needs to be entered before typeahead kicks-in
    var minLength = originalScope.$eval(attrs.typeaheadMinLength);
    if (!minLength && minLength !== 0) {
      minLength = 1;
    }

    originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = !newVal && newVal !== 0 ? 1 : newVal;
    });

    //minimal wait time after last character typed before typeahead kicks-in
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

    //should it restrict model values to the ones selected from the popup only?
    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
      isEditable = newVal !== false;
    });

    //binding to a variable that indicates if matches are being retrieved asynchronously
    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

    //a function to determine if an event should cause selection
    var isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function(scope, vals) {
      var evt = vals.$event;
      return evt.which === 13 || evt.which === 9;
    };

    //a callback executed when a match is selected
    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

    //should it select highlighted popup value when losing focus?
    var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

    //binding to a variable that indicates if there were no results after the query is completed
    var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

    var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

    var appendTo = attrs.typeaheadAppendTo ?
      originalScope.$eval(attrs.typeaheadAppendTo) : null;

    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

    //If input matches an item of the list exactly, select it automatically
    var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

    //binding to a variable that indicates if dropdown is open
    var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;

    var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;

    //INTERNAL VARIABLES

    //model setter executed upon match selection
    var parsedModel = $parse(attrs.ngModel);
    var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
    var $setModelValue = function(scope, newValue) {
      if (angular.isFunction(parsedModel(originalScope)) &&
        ngModelOptions.getOption('getterSetter')) {
        return invokeModelSetter(scope, {$$$p: newValue});
      }

      return parsedModel.assign(scope, newValue);
    };

    //expressions used by typeahead
    var parserResult = typeaheadParser.parse(attrs.uibTypeahead);

    var hasFocus;

    //Used to avoid bug in iOS webview where iOS keyboard does not fire
    //mousedown & mouseup events
    //Issue #3699
    var selected;

    //create a child scope for the typeahead directive so we are not polluting original scope
    //with typeahead-specific data (matches, query etc.)
    var scope = originalScope.$new();
    var offDestroy = originalScope.$on('$destroy', function() {
      scope.$destroy();
    });
    scope.$on('$destroy', offDestroy);

    // WAI-ARIA
    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
    element.attr({
      'aria-autocomplete': 'list',
      'aria-expanded': false,
      'aria-owns': popupId
    });

    var inputsContainer, hintInputElem;
    //add read-only input to show hint
    if (showHint) {
      inputsContainer = angular.element('<div></div>');
      inputsContainer.css('position', 'relative');
      element.after(inputsContainer);
      hintInputElem = element.clone();
      hintInputElem.attr('placeholder', '');
      hintInputElem.attr('tabindex', '-1');
      hintInputElem.val('');
      hintInputElem.css({
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'border-color': 'transparent',
        'box-shadow': 'none',
        'opacity': 1,
        'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
        'color': '#999'
      });
      element.css({
        'position': 'relative',
        'vertical-align': 'top',
        'background-color': 'transparent'
      });

      if (hintInputElem.attr('id')) {
        hintInputElem.removeAttr('id'); // remove duplicate id if present.
      }
      inputsContainer.append(hintInputElem);
      hintInputElem.after(element);
    }

    //pop-up element used to display matches
    var popUpEl = angular.element('<div uib-typeahead-popup></div>');
    popUpEl.attr({
      id: popupId,
      matches: 'matches',
      active: 'activeIdx',
      select: 'select(activeIdx, evt)',
      'move-in-progress': 'moveInProgress',
      query: 'query',
      position: 'position',
      'assign-is-open': 'assignIsOpen(isOpen)',
      debounce: 'debounceUpdate'
    });
    //custom item template
    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
      popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
    }

    if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
      popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
    }

    var resetHint = function() {
      if (showHint) {
        hintInputElem.val('');
      }
    };

    var resetMatches = function() {
      scope.matches = [];
      scope.activeIdx = -1;
      element.attr('aria-expanded', false);
      resetHint();
    };

    var getMatchId = function(index) {
      return popupId + '-option-' + index;
    };

    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
    // This attribute is added or removed automatically when the `activeIdx` changes.
    scope.$watch('activeIdx', function(index) {
      if (index < 0) {
        element.removeAttr('aria-activedescendant');
      } else {
        element.attr('aria-activedescendant', getMatchId(index));
      }
    });

    var inputIsExactMatch = function(inputValue, index) {
      if (scope.matches.length > index && inputValue) {
        return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
      }

      return false;
    };

    var getMatchesAsync = function(inputValue, evt) {
      var locals = {$viewValue: inputValue};
      isLoadingSetter(originalScope, true);
      isNoResultsSetter(originalScope, false);
      $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
        //it might happen that several async queries were in progress if a user were typing fast
        //but we are interested only in responses that correspond to the current view value
        var onCurrentRequest = inputValue === modelCtrl.$viewValue;
        if (onCurrentRequest && hasFocus) {
          if (matches && matches.length > 0) {
            scope.activeIdx = focusFirst ? 0 : -1;
            isNoResultsSetter(originalScope, false);
            scope.matches.length = 0;

            //transform labels
            for (var i = 0; i < matches.length; i++) {
              locals[parserResult.itemName] = matches[i];
              scope.matches.push({
                id: getMatchId(i),
                label: parserResult.viewMapper(scope, locals),
                model: matches[i]
              });
            }

            scope.query = inputValue;
            //position pop-up with matches - we need to re-calculate its position each time we are opening a window
            //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
            //due to other elements being rendered
            recalculatePosition();

            element.attr('aria-expanded', true);

            //Select the single remaining option if user input matches
            if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(0, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(0, evt);
              }
            }

            if (showHint) {
              var firstLabel = scope.matches[0].label;
              if (angular.isString(inputValue) &&
                inputValue.length > 0 &&
                firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
              } else {
                hintInputElem.val('');
              }
            }
          } else {
            resetMatches();
            isNoResultsSetter(originalScope, true);
          }
        }
        if (onCurrentRequest) {
          isLoadingSetter(originalScope, false);
        }
      }, function() {
        resetMatches();
        isLoadingSetter(originalScope, false);
        isNoResultsSetter(originalScope, true);
      });
    };

    // bind events only if appendToBody params exist - performance feature
    if (appendToBody) {
      angular.element($window).on('resize', fireRecalculating);
      $document.find('body').on('scroll', fireRecalculating);
    }

    // Declare the debounced function outside recalculating for
    // proper debouncing
    var debouncedRecalculate = $$debounce(function() {
      // if popup is visible
      if (scope.matches.length) {
        recalculatePosition();
      }

      scope.moveInProgress = false;
    }, eventDebounceTime);

    // Default progress type
    scope.moveInProgress = false;

    function fireRecalculating() {
      if (!scope.moveInProgress) {
        scope.moveInProgress = true;
        scope.$digest();
      }

      debouncedRecalculate();
    }

    // recalculate actual position and set new values to scope
    // after digest loop is popup in right position
    function recalculatePosition() {
      scope.position = appendToBody ? $position.offset(element) : $position.position(element);
      scope.position.top += element.prop('offsetHeight');
    }

    //we need to propagate user's query so we can higlight matches
    scope.query = undefined;

    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
    var timeoutPromise;

    var scheduleSearchWithTimeout = function(inputValue) {
      timeoutPromise = $timeout(function() {
        getMatchesAsync(inputValue);
      }, waitTime);
    };

    var cancelPreviousTimeout = function() {
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }
    };

    resetMatches();

    scope.assignIsOpen = function (isOpen) {
      isOpenSetter(originalScope, isOpen);
    };

    scope.select = function(activeIdx, evt) {
      //called from within the $digest() cycle
      var locals = {};
      var model, item;

      selected = true;
      locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
      model = parserResult.modelMapper(originalScope, locals);
      $setModelValue(originalScope, model);
      modelCtrl.$setValidity('editable', true);
      modelCtrl.$setValidity('parse', true);

      onSelectCallback(originalScope, {
        $item: item,
        $model: model,
        $label: parserResult.viewMapper(originalScope, locals),
        $event: evt
      });

      resetMatches();

      //return focus to the input element if a match was selected via a mouse click event
      // use timeout to avoid $rootScope:inprog error
      if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
        $timeout(function() { element[0].focus(); }, 0, false);
      }
    };

    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
    element.on('keydown', function(evt) {
      //typeahead is open and an "interesting" key was pressed
      if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
        return;
      }

      var shouldSelect = isSelectEvent(originalScope, {$event: evt});

      /**
       * if there's nothing selected (i.e. focusFirst) and enter or tab is hit
       * or
       * shift + tab is pressed to bring focus to the previous element
       * then clear the results
       */
      if (scope.activeIdx === -1 && shouldSelect || evt.which === 9 && !!evt.shiftKey) {
        resetMatches();
        scope.$digest();
        return;
      }

      evt.preventDefault();
      var target;
      switch (evt.which) {
        case 27: // escape
          evt.stopPropagation();

          resetMatches();
          originalScope.$digest();
          break;
        case 38: // up arrow
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        case 40: // down arrow
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();
          target = popUpEl[0].querySelectorAll('.uib-typeahead-match')[scope.activeIdx];
          target.parentNode.scrollTop = target.offsetTop;
          break;
        default:
          if (shouldSelect) {
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
          }
      }
    });

    element.on('focus', function (evt) {
      hasFocus = true;
      if (minLength === 0 && !modelCtrl.$viewValue) {
        $timeout(function() {
          getMatchesAsync(modelCtrl.$viewValue, evt);
        }, 0);
      }
    });

    element.on('blur', function(evt) {
      if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
        selected = true;
        scope.$apply(function() {
          if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
            $$debounce(function() {
              scope.select(scope.activeIdx, evt);
            }, scope.debounceUpdate.blur);
          } else {
            scope.select(scope.activeIdx, evt);
          }
        });
      }
      if (!isEditable && modelCtrl.$error.editable) {
        modelCtrl.$setViewValue();
        scope.$apply(function() {
          // Reset validity as we are clearing
          modelCtrl.$setValidity('editable', true);
          modelCtrl.$setValidity('parse', true);
        });
        element.val('');
      }
      hasFocus = false;
      selected = false;
    });

    // Keep reference to click handler to unbind it.
    var dismissClickHandler = function(evt) {
      // Issue #3973
      // Firefox treats right click as a click on document
      if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
        resetMatches();
        if (!$rootScope.$$phase) {
          originalScope.$digest();
        }
      }
    };

    $document.on('click', dismissClickHandler);

    originalScope.$on('$destroy', function() {
      $document.off('click', dismissClickHandler);
      if (appendToBody || appendTo) {
        $popup.remove();
      }

      if (appendToBody) {
        angular.element($window).off('resize', fireRecalculating);
        $document.find('body').off('scroll', fireRecalculating);
      }
      // Prevent jQuery cache memory leak
      popUpEl.remove();

      if (showHint) {
          inputsContainer.remove();
      }
    });

    var $popup = $compile(popUpEl)(scope);

    if (appendToBody) {
      $document.find('body').append($popup);
    } else if (appendTo) {
      angular.element(appendTo).eq(0).append($popup);
    } else {
      element.after($popup);
    }

    this.init = function(_modelCtrl) {
      modelCtrl = _modelCtrl;
      ngModelOptions = extractOptions(modelCtrl);

      scope.debounceUpdate = $parse(ngModelOptions.getOption('debounce'))(originalScope);

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function(inputValue) {
        hasFocus = true;

        if (minLength === 0 || inputValue && inputValue.length >= minLength) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        }

        if (!inputValue) {
          // Reset in case user had typed something previously.
          modelCtrl.$setValidity('editable', true);
          return null;
        }

        modelCtrl.$setValidity('editable', false);
        return undefined;
      });

      modelCtrl.$formatters.push(function(modelValue) {
        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {
          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);
        }

        //it might happen that we don't have enough info to properly render input value
        //we need to check for this situation and simply return model value if we can't apply custom formatting
        locals[parserResult.itemName] = modelValue;
        candidateViewValue = parserResult.viewMapper(originalScope, locals);
        locals[parserResult.itemName] = undefined;
        emptyViewValue = parserResult.viewMapper(originalScope, locals);

        return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
      });
    };

    function extractOptions(ngModelCtrl) {
      var ngModelOptions;

      if (angular.version.minor < 6) { // in angular < 1.6 $options could be missing
        // guarantee a value
        ngModelOptions = ngModelCtrl.$options || {};

        // mimic 1.6+ api
        ngModelOptions.getOption = function (key) {
          return ngModelOptions[key];
        };
      } else { // in angular >=1.6 $options is always present
        ngModelOptions = ngModelCtrl.$options;
      }

      return ngModelOptions;
    }
  }])

  .directive('uibTypeahead', function() {
    return {
      controller: 'UibTypeaheadController',
      require: ['ngModel', 'uibTypeahead'],
      link: function(originalScope, element, attrs, ctrls) {
        ctrls[1].init(ctrls[0]);
      }
    };
  })

  .directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
    return {
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '&',
        moveInProgress: '=',
        select: '&',
        assignIsOpen: '&',
        debounce: '&'
      },
      replace: true,
      templateUrl: function(element, attrs) {
        return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
      },
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function() {
          var isDropdownOpen = scope.matches.length > 0;
          scope.assignIsOpen({ isOpen: isDropdownOpen });
          return isDropdownOpen;
        };

        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };

        scope.selectActive = function(matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function(activeIdx, evt) {
          var debounce = scope.debounce();
          if (angular.isNumber(debounce) || angular.isObject(debounce)) {
            $$debounce(function() {
              scope.select({activeIdx: activeIdx, evt: evt});
            }, angular.isNumber(debounce) ? debounce : debounce['default']);
          } else {
            scope.select({activeIdx: activeIdx, evt: evt});
          }
        };
      }
    };
  }])

  .directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
    return {
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function(scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          var tplEl = angular.element(tplContent.trim());
          element.replaceWith(tplEl);
          $compile(tplEl)(scope);
        });
      }
    };
  }])

  .filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
    var isSanitizePresent;
    isSanitizePresent = $injector.has('$sanitize');

    function escapeRegexp(queryToEscape) {
      // Regex: capture the whole query string and replace it with the string that will be used to match
      // the results, for example if the capture is "a" the result will be \a
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    function containsHtml(matchItem) {
      return /<.*>/g.test(matchItem);
    }

    return function(matchItem, query) {
      if (!isSanitizePresent && containsHtml(matchItem)) {
        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
      }
      matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
      if (!isSanitizePresent) {
        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
      }
      return matchItem;
    };
  }]);
angular.module('ui.bootstrap.carousel').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'); angular.$$uibCarouselCss = true; });
angular.module('ui.bootstrap.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('ui.bootstrap.position').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'); angular.$$uibPositionCss = true; });
angular.module('ui.bootstrap.datepickerPopup').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'); angular.$$uibDatepickerpopupCss = true; });
angular.module('ui.bootstrap.tooltip').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'); angular.$$uibTooltipCss = true; });
angular.module('ui.bootstrap.timepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>'); angular.$$uibTimepickerCss = true; });
angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true; });