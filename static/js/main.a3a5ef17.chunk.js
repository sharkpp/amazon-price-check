(this["webpackJsonpamazon-price-check"]=this["webpackJsonpamazon-price-check"]||[]).push([[0],{11:function(e,n,o){e.exports=o(23)},17:function(e,n,o){},18:function(e,n,o){},23:function(e,n,o){"use strict";o.r(n);var t=o(10),a=o(0),c=o.n(a),i=o(7),r=o.n(i),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o(16),o(17),o(18);var u=o(25);var d=function(e){var n=e.queryParams;return console.log("queryParams",n),Object(a.useEffect)((function(){var e;if(console.log("queryParams.",n),e=/https:\/\/www\.amazon\.co\.jp\/dp\/([A-Za-z0-9]+)/.exec(n.url)){var o=e[1];window.open("https://mnrate.com/item/aid/".concat(o),"_blank")}}),[n]),c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement("div",{className:"mb-3"},c.a.createElement(u.a.Check,{type:"checkbox",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1"}))),c.a.createElement("pre",null,Object.keys(window.location).map((function(e){return"".concat(JSON.stringify(e),": ").concat(JSON.stringify(window.location[e]),"\n")}))))};o.e(3).then(o.t.bind(null,26,7)).then((function(){})).catch((function(e){}));var f=/https[a-zA-Z0-9%_.-]+/,h=window.location.search.split(/[?&]/).reduce((function(e,n){var o=(/^([^=]+)=(.*)/.exec(n)||[]).splice(1),a=Object(t.a)(o,2),c=a[0],i=a[1];return n&&(e[c]=decodeURI(i)),"text"==c&&(e.url=unescape(f.exec(e[c])),e.desc=unescape(e[c].replace(f,"").replace(/\+/g," "))),e}),{});r.a.render(c.a.createElement(d,{queryParams:h}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://sharkpp.github.io/amazon-price-check",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("https://sharkpp.github.io/amazon-price-check","/service-worker.js");s?(!function(e,n){fetch(e).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.a3a5ef17.chunk.js.map