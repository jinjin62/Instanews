!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";$(".storygrid").hide(),$(".loading").hide(),$("#options").on("change",function(){$(".storygrid").empty(),$("#heading").attr("class","top"),$(".storygrid").delay(300).fadeIn(),$(".loading").show(),function(t){let e="https://api.nytimes.com/svc/topstories/v2/"+t+".json";e+="?"+$.param({"api-key":"7GASR12G1Xh0u1vVwK7R35tHubffWv5y"}),$.ajax({method:"GET",url:e}).done(function(t){const e=0;for(;e<=11;){let n,r,o,i="";n=t.results[e].url,r=t.results[e].multimedia[4].url,o=t.results[e].abstract,t.results[e].multimedia.length>0&&(i+=`\n          <a target="_blank" href="${n}" class= "tiles">\n            <img src="${r}"/>\n            <p>${o}</p>\n          </a>  \n          `,$(".storygrid").append(i)),e++}}).fail(function(t){throw t}).always(function(){$(".loading").hide().delay(3e3)})}($(this).val())})}]);