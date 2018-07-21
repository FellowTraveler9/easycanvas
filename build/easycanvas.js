!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(23)},function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n}return t},execFuncs:function(t,e,r){if(t&&(n.isArray(r)||(r=[r])),"function"==typeof t)return t.apply(e,r);if(n.isArray(t)){var i=[];return t.forEach(function(t){i.push(t&&t.apply(e,r))}),i}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,r,i,a){return!(n>t||t>r||i>e||e>a)},firstValuable:function(t,e,n){return void 0===t?void 0===e?n:e:t}};t.exports=n},function(t,e){"use strict";t.exports={xywh:["sx","sy","sw","sh","tx","ty","tw","th"],txywh:["tx","ty","tw","th"],sxywh:["sx","sy","sw","sh"],devFlag:"__EASYCANVAS_DEVTOOL__",version:"0.5.5"}},,,function(t,e){"use strict";function n(t,e){if(t&&t.match(/^data:/))return void(e&&e(t));if(i[t])return void(i[t]!==r?e(i[t]):setTimeout(function(){n(t,e)},100));i[t]=r;var a=new XMLHttpRequest;a.onload=function(){var n=new FileReader;n.onloadend=function(){i[t]=n.result,e&&e(n.result)},n.readAsDataURL(a.response)},a.open("GET",t),a.responseType="blob",a.send()}var r="processing",i={};t.exports=n},,function(t,e){"use strict";var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(1),o=r(a),s=n(2),l=r(s),c=n(14),u=r(c),d=n(13),f=r(d),h=n(12),p=r(h),v=n(15),g=r(v),y=n(11),m=r(y),$=n(9),x=r($),w=function t(e){e.children&&e.children.forEach(function(n,r){n.$id||(e.children[r]=new T(n)),e.$id&&!e.$dom?(e.children[r].$canvas=e.$canvas,e.children[r].$parent=e):e.children[r].$canvas=e,t(e.children[r])})},b=function(t){var e=t||{};e.$id||(e.$id=Math.random().toString(36).substr(2)),e.$tickedTimes=e.$tickedTimes||0,e.content=e.content||{},e.style=e.style||{},e.style.zIndex=e.style.zIndex||0,e.style.mirrX=e.style.mirrX||0,e.style.opacity=o.default.firstValuable(e.style.opacity,1),e.style.locate=e.style.locate||"center",e.style.scale=e.style.scale||1;o.default.funcOrValue(e.content.img);if(l.default.xywh.forEach(function(t){e.style[t]=e.style[t]||0}),e.inherit=e.inherit||["tx","ty","scale","opacity"],e.drag=e.drag||{},e.events=e.events||{},"production"!==process.env.NODE_ENV)for(var n in e.events)"function"!=typeof e.events[n]&&"eIndex"!==n&&console.warn("[Easycanvas] Handler "+n+" is not a function.",e.events[n]);if(e.events.eIndex=e.events.eIndex,e.scroll=e.scroll||{},e.scroll.scrollX=e.scroll.scrollX||0,e.scroll.scrollY=e.scroll.scrollY||0,e.hooks=e.hooks||{},"production"!==process.env.NODE_ENV&&(e.$perf={}),"production"!==process.env.NODE_ENV){if(!e.name&&e.content.img&&e.content.img.src){var r=e.content.img.src.match(/.*\/([^\/]*)$/);r&&r[1]&&(e.name=r[1])}e.name=e.name||"Unnamed Easycanvas Object"}return e.children=e.children||[],w(e),e.$scroll={speedX:0,speedY:0},e},E=function(t){var e=this;this.$extendList.forEach(function(n){n.call(e,t)})},T=function(t){var e=b(t);for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this[n]=e[n]);return E.call(this,e),this};T.prototype.$extendList=[],T.prototype.add=function(t){if(t)return this.children.push(t),w(this),x.default.bind(this.children[this.children.length-1]),this.children[this.children.length-1]},T.prototype.getRect=function(){var t=this,e={};if(l.default.txywh.forEach(function(n){e[n]=t.getStyle(n)}),0===e.tw&&this.content.img){var n=o.default.funcOrValue(this.content.img,this);e.tw=n.width,e.th=n.height}var r=this.getStyle("locate");return"lt"===r||("ld"===r?e.ty-=e.th:"rt"===r?e.tx-=e.tw:"rd"===r?(e.tx-=e.tw,e.ty-=e.th):(e.tx-=e.tw>>1,e.ty-=e.th>>1)),e},T.prototype.getSelfStyle=function(t){var e={};for(var n in this.style)e[n]=o.default.funcOrValue(this.style[n],this);return e},T.prototype.getStyle=function(t){var e=this,n=o.default.funcOrValue(e.style[t],e);return e.$parent&&e.inherit.indexOf(t)>=0?("tx"===t?n-=e.$parent.scroll.scrollX||0:"ty"===t&&(n-=e.$parent.scroll.scrollY||0),"tw"===t||"th"===t?o.default.firstValuable(n,e.$parent.getStyle(t)):"opacity"===t||"scale"===t?o.default.firstValuable(e.$parent.getStyle(t),1)*o.default.firstValuable(n,1):o.default.firstValuable(e.$parent.getStyle(t),0)+o.default.firstValuable(n,0)):n},T.prototype.remove=function(t){return t?(this.$canvas.remove(t),void o.default.execFuncs(t.hooks.removed,t)):(this.$parent?this.$parent.remove(this):this.$canvas.remove(this),void o.default.execFuncs(this.hooks.removed,this))},T.prototype.update=function(t){if(t)for(var e in t)if("object"===i(t[e]))for(var n in t[e])this[e][n]=t[e][n];else this[e]=t[e]},T.prototype.nextTick=p.default,T.prototype.on=u.default,T.prototype.off=f.default,T.prototype.trigger=g.default,T.prototype.broadcast=m.default,t.exports=T},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=(r(i),!1),o=function(t,e){t.drag.draggingFlag=e,a=e},s=function(t,e,n,r){return t?t.call(e,n):!!r&&"drag"},l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t.exports={bind:function(t){var e={x:0,y:0};t.drag=t.drag||{},t.drag.draggingFlag=!1;var n=t.events.mousedown||t.events.touchstart;t.events[l?"touchstart":"mousedown"]=function(r){if(t.drag.dragable){o(t,!0);r.canvasX-this.getStyle("tx"),r.canvasY-this.getStyle("ty");e.x=r.canvasX,e.y=r.canvasY}return s(n,t,r,t.drag.dragable)}.bind(t);var r=t.events.mousemove||t.events.touchmove;t.events[l?"touchmove":"mousemove"]=function(n){var i=t.drag.draggingFlag&&t.drag.dragable;return i&&(this.style.tx+=n.canvasX-e.x,this.style.ty+=n.canvasY-e.y,this.$canvas.$flags.dragging=this,e.x=n.canvasX,e.y=n.canvasY),s(r,t,n,i)}.bind(t);var i=t.events.mouseup||t.events.touchend;t.events[l?"touchend":"mouseup"]=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return this.$canvas.$flags.dragging=void 0,t.drag.draggingFlag&&t.drag.dragable&&o(t,!1),s(i,t,e,n)};var a=t.events.mouseout;t.events.mouseout=function(e){var n=t.drag.draggingFlag&&t.drag.dragable;return o(t,!1),s(a,t,e,n)};var c=t.events.click;t.events.click=function(e){var n=t.drag.dragable;if(n){e.canvasX-t.getStyle("tx"),e.canvasY-t.getStyle("ty");return!c||c.call(t,e)}return s(c,t,e,n)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),o=n(7),s=r(o),l={},c=!1,u=[],d={stop:function(){c=!1},tick:function(){(0,s.default)(d.looper)},looper:function(){u.forEach(function(t,e){if(Math.abs(t.$scroll.speedX)>1?t.$scroll.speedX*=t.scroll.smooth||.8:t.$scroll.speedX=0,Math.abs(t.$scroll.speedY)>1?t.$scroll.speedY*=t.scroll.smooth||.8:t.$scroll.speedY=0,Math.abs(t.$scroll.speedX)<=1&&Math.abs(t.$scroll.speedY)<=1)return void u.splice(e,1);t.scroll.scrollY-=t.$scroll.speedY,t.scroll.scrollX-=t.$scroll.speedX;var n=a.default.funcOrValue(t.scroll.minScrollX,t),r=a.default.funcOrValue(t.scroll.maxScrollX,t),i=a.default.funcOrValue(t.scroll.minScrollY,t),o=a.default.funcOrValue(t.scroll.maxScrollY,t);!isNaN(i)&&i>t.scroll.scrollY?t.scroll.scrollY=i:!isNaN(o)&&t.scroll.scrollY>o&&(t.scroll.scrollY=o),!isNaN(n)&&n>t.scroll.scrollX?t.scroll.scrollX=n:!isNaN(r)&&t.scroll.scrollX>r&&(t.scroll.scrollX=r)}),d.tick()},touch:function(t,e){if(!t.scroll.scrollable)return!1;if(c){u.indexOf(t)===-1&&u.push(t);var n=Math.abs(e.canvasX-l.x),r=Math.abs(e.canvasY-l.y),i=+new Date-c;return c=+new Date,i/=10,n/i>1&&i>1&&(t.$scroll.speedX+=(e.canvasX-l.x)/i),r/i>1&&i>1&&(t.$scroll.speedY+=(e.canvasY-l.y)/i),l.x=e.canvasX,l.y=e.canvasY,e.event.preventDefault(),!0}c=+new Date,l.x=e.canvasX,l.y=e.canvasY},wheel:function(t,e){return!!t.scroll.scrollable&&(u.indexOf(t)===-1&&u.push(t),t.$scroll.speedX=e.event.wheelDeltaX,t.$scroll.speedY=e.event.wheelDeltaY,e.event.preventDefault(),!0)}};t.exports=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&a.default.execFuncs(this.hooks[e],this,t),t.unshift(e),this.children&&this.children.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e){"use strict";t.exports=function(t){var e=function e(){t.apply(this,arguments),this.off("ticked",e)};this.on("ticked",e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&e?a.default.isArray(this.hooks[t])&&(this.hooks[t][this.hooks[t].indexOf(e)]=void 0):delete this.hooks[t])}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(t,e,n){var r=e;if(n){var i=this;r=function(){var t=Date.now();if(t>r.$lastTriggerTime+n){r.$lastTriggerTime=t;var a=Array.prototype.slice.call(arguments);e.apply(i,a)}},r.$lastTriggerTime=-1}this.hooks[t]?a.default.isArray(this.hooks[t])?this.hooks[t].push(r):this.hooks[t]=[this.hooks[t],r]:this.hooks[t]=r}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.hooks[e])return a.default.execFuncs(this.hooks[e],this,t)}},,,,,function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={},i=[],a=0,o=function t(e,o,s){var l=s||{},c=t.cacheCanvas;if("object"===(void 0===e?"undefined":n(e))){var u=e;return l.callbackArgs=l.callbackArgs||[],void t(u.shift(),function(e){l.callbackArgs.push(e),u.length>1?t(u,o,l):t(u[0],function(t){l.callbackArgs.push(t),o(l.callbackArgs)},l)},s)}var d=e+"_"+JSON.stringify(s)+"_"+c;if(r[d])return o&&o(r[d]),r[d];var f=new Image;l.block?(f.src=e,a++):0===a?f.src=e:i.push({imgObj:f,src:e}),r[d]=f;var h=void 0;return(l.canvas||l.alphaColor||c)&&(h=document.createElement("canvas"),h.width=h.height||0,r[d]=h),f.onload=function(){if("jpg"===f.src.substr(-3)||"jpeg"===f.src.substr(-3)||"bmp"===f.src.substr(-3)?f.$noAlpha=!0:0===f.src.indexOf("data:image/jpg;")&&(f.$noAlpha=!0),l.block&&(a--,0===a&&(i.forEach(function(t){t.imgObj.src=t.src}),i.splice(0))),h&&(l.canvas||l.alphaColor||c)){var t=h.getContext("2d");if(h.width=f.width,h.height=f.height,h.$noAlpha=f.$noAlpha,t.drawImage(f,0,0),l.alphaColor){for(var e=t.getImageData(0,0,f.width,f.height),n=0;e.data.length>n;n+=4){var r=e.data[n]+e.data[n+1]+e.data[n+2],s=1;s>e.data[n]&&s>e.data[n+1]&&s>e.data[n+2]&&(e.data[n+3]=Math.floor(r/255))}t.putImageData(e,0,0),h.$noAlpha=!1}f=h}o&&o(f)},f.onerror=function(){r[d]=f},h||f};o.cacheCanvas=!1,t.exports=o},function(t,e){"use strict";var n=3.141593,r=function(t){return t.$lastPaintTime||Date.now()},i={linear:function(t,e,n){if(t===e)return t;var i=r(this),a=!1,o=function(){var r=this.$lastPaintTime,s=(e-t)*(r-i)/n+t;if(a)if(e>t)for(;s>e;)s-=e-t;else for(;e>s;)s+=e-t;else e>t&&s>e?(o.$done=!0,s=e):t>e&&e>s&&(o.$done=!0,s=e);return s}.bind(this);return o.loop=function(){return a=!0,o},o.restart=function(){i=r(this)},o},pendulum:function(t,e,i,a){if(t===e)return t;var o=r(this),s=a||{};s.start=s.start||0;var l=!1,c=function(){var a=r(this),u=(a-o)/i;l?s.cycle&&(u%=s.cycle):s.cycle?u>s.cycle&&(c.$done=!0,u=s.cycle):u>1&&(c.$done=!0,u=1);var d=u*n*2-n/2+s.start/360*n,f=(e-t)*(Math.sin(d)+1)/2+t;return f}.bind(this);return c.loop=function(){return l=!0,c},c.restart=function(){o=r(this)},c},ease:function(t,e,n){return this.pendulum(t,e,n,{cycle:.5})},oneByOne:function(t){var e=t,n=!1,r=function(){for(var t=0;e.length>t;t++){if(!e[t].$done)return e[t]();if(!e[t].$nextRestart&&(e[t].$nextRestart=!0,e[t+1]))return e[t+1].restart(),e[t+1]()}if(n){for(var r=0;e.length>r;r++)e[r].$done=!1,e[r].$nextRestart=!1,e[r].restart();return e[0]()}return e[e.length-1]()};return r.loop=function(){return n=!0,r},r}};t.exports=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(2),o=r(a),s=n(1),l=r(s);if("production"!==process.env.NODE_ENV&&!window[o.default.devFlag]){var c=window[o.default.devFlag]={isPaintRecording:!1,selectMode:!1,current:{},version:o.default.version,$canvas:{},$plugin:null},u={getSprite:function(t){if(!c.isPaintRecording)return[];var e={};if(t){var n=c.$canvas[t].children,r=function t(n){if(n.name!==o.default.devFlag){e[n.$id]={name:n.name,parent:n.$parent&&n.$parent.$id,style:{},children:n.children.filter(function(t){return t.name!==o.default.devFlag}).map(function(t){return t.$id}),rendered:n.$rendered};for(var r in n.style)e[n.$id].style[r]=l.default.funcOrValue(n.style[r],n);o.default.xywh.forEach(function(t){e[n.$id].style[t]=Math.round(e[n.$id].style[t])}),["physics","$perf"].forEach(function(t){e[n.$id][t]=n[t]}),n.webgl&&(e[n.$id].webgl={},["rx","ry","rz","tx","ty","tz"].forEach(function(t){e[n.$id].webgl[t]=l.default.funcOrValue(n.webgl[t],n)})),n.children&&n.children.forEach(t)}};n.forEach(r)}else for(var a in c.$canvas)e=i(e,c.$plugin.getSprite(a));return e},selectSpriteById:function(t,e){if(!e){for(var n in c.$canvas){var r=u.selectSpriteById(t,n);if(r)return{$sprite:r.$sprite||r,$canvas:c.$canvas[n]}}return!1}var i=function n(r){for(var i=0;r.length>i;i++){if(r[i].$id===t)return r[i];var a=n(r[i].children);if(a)return{$sprite:a.$sprite||a,$canvas:c.$canvas[e]}}return!1},a=c.$canvas[e].children,o=i(a);if(o)return{$sprite:o.$sprite||o,$canvas:c.$canvas[e]}},updateSprite:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style",n=arguments[2],r=arguments[3],a=u.selectSpriteById(t,r).$sprite;a||console.warn("Sprite "+spriteId+" Not Found."),i(a[e],n)},highlightSprite:function(t,e,n){c.selectMode=!!e;var r=u.selectSpriteById(t,n),i=r.$sprite,a=r.$canvas;e&&a&&i?a.$plugin.selectSprite(!1,a,i):a&&a.$plugin.cancelSelectSprite(a)},sendGlobalHook:function(t,e){var n=u.selectSpriteById(t,e),r=n.$sprite,i=n.$canvas;console.log("%c window.$0 = %c Current Sprite("+r.name+") %c ","background:#4086f4 ; padding: 2px 0; border-radius: 2px 0 0 2px;  color: #fff","background:#41b883 ; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff","background:transparent"),window.$0=r,window.$1=i},pause:function(t,e){var n=c.$canvas[t];n.$pausing=void 0!==e?e:!n.$pausing},getPerf:function(){var t={canvas:[],navigator:{clientWidth:document.body.clientWidth,clientHeight:document.body.clientHeight,devicePixelRatio:window.devicePixelRatio}};if(!c.isPaintRecording)return t;for(var e in c.$canvas)t.canvas.push({$id:e,name:c.$canvas[e].name,perf:c.$canvas[e].$perf,fps:c.$canvas[e].lastFps,size:{styleWidth:c.$canvas[e].$dom.getBoundingClientRect().width||parseInt(c.$canvas[e].$dom.style.width)||c.$canvas[e].$dom.width,styleHeight:c.$canvas[e].$dom.getBoundingClientRect().height||parseInt(c.$canvas[e].$dom.style.height)||c.$canvas[e].$dom.height,canvasWidth:c.$canvas[e].$dom.width,canvasHeight:c.$canvas[e].$dom.height}});return t}};c.$plugin=u}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(2),a=r(i),o=n(47),s=r(o),l=n(7),c=r(l),u=n(69),d=r(u),f=n(1),h=r(f),p=n(21),v=r(p),g=n(20),y=r(g),m=n(67),$=r(m),x=n(70),w=r(x),b=n(8),E=r(b),T=n(22),O=(r(T),{painter:s.default,imgLoader:y.default,imgPretreat:$.default,multlineText:w.default,transition:v.default,tick:c.default,utils:h.default,mirror:d.default,class:{sprite:E.default},sprite:E.default,$version:a.default.version,env:process.env.NODE_ENV});O.extend=function(t){O.sprite.prototype.$extendList.push(t)},O.use=function(t){t.onUse&&t.onUse(O),O.painter.prototype.$extendList.push(t)},window.Easycanvas?console.warn("[Easycanvas] already loaded."):("production"!==process.env.NODE_ENV&&setTimeout(function(){console.log("%c Easycanvas %c You are using the develop version "+a.default.version+" %c","background:#4086f4 ; padding: 2px 0; border-radius: 2px 0 0 2px;  color: #fff","background:#41b883 ; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff","background:transparent")},500),window.Easycanvas=O),t.exports=O},,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(33),a=r(i),o=n(35),s=r(o),l=n(29),c=r(l),u=n(9),d=r(u),f=n(34),h=r(f),p=n(46),v=r(p),g={$render:s.default,$eventHandler:c.default,$perPaint:a.default,$bindDrag:d.default,$rAFer:h.default};"production"!==process.env.NODE_ENV&&(g.$plugin=(0,v.default)()),t.exports=g},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),o=n(2),s=r(o),l=n(10),c=r(l),u=function(t){return t.sort(function(t,e){return"production"!==process.env.NODE_ENV&&window[s.default.devFlag]&&window[s.default.devFlag].selectMode?a.default.funcOrValue(t.style.zIndex,t)<a.default.funcOrValue(e.style.zIndex,e)?1:-1:a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)<a.default.funcOrValue(a.default.firstValuable(e.events.eIndex,e.style.zIndex),e)?1:-1})},d=function t(e){return!(e.$parent&&!t(e.$parent))&&a.default.funcOrValue(e.style.visible,e)!==!1},f=function(t,e){if(d(t)===!1)return!1;var n=t.getRect();return a.default.pointInRect(e.canvasX,e.canvasY,n.tx,n.tx+n.tw,n.ty,n.ty+n.th)},h=function t(e,n,r){if(e&&e.length)for(var i=0;e.length>i;i++){var o=e[i];o.children.length&&t(u(o.children.filter(function(t){return"production"!==process.env.NODE_ENV&&window[s.default.devFlag]&&window[s.default.devFlag].selectMode?a.default.funcOrValue(t.style.zIndex,t)>=0:a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0})),n,r),f(o,n)&&r.push(o),o.children.length&&t(u(o.children.filter(function(t){return"production"!==process.env.NODE_ENV&&window[s.default.devFlag]&&window[s.default.devFlag].selectMode?a.default.funcOrValue(t.style.zIndex,t)<0:!(a.default.funcOrValue(a.default.firstValuable(t.events.eIndex,t.style.zIndex),t)>=0)})),n,r)}};t.exports=function(t){var e=this;!t.layerX&&t.touches&&t.touches[0]&&(t.layerX=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.targetTouches[0].pageY-t.currentTarget.offsetTop),!t.layerX&&t.changedTouches&&t.changedTouches[0]&&(t.layerX=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,t.layerY=t.changedTouches[0].pageY-t.currentTarget.offsetTop);var n=this.$dom.getBoundingClientRect().width>this.$dom.getBoundingClientRect().height!=this.width>this.height,r=Math.floor(this.$dom.getBoundingClientRect()[n?"height":"width"])/this.width,i=Math.floor(this.$dom.getBoundingClientRect()[n?"width":"height"])/this.height;r=r||1,i=i||1;var a={type:t.type,canvasX:t.layerX/r,canvasY:t.layerY/i,event:t};e.events.interceptor&&(a=e.events.interceptor(a));var o=[];if(e.$flags.dragging&&e.$flags.dragging.$id&&o.push(e.$flags.dragging),h(u(e.children),a,o),"production"!==process.env.NODE_ENV&&window[s.default.devFlag]&&window[s.default.devFlag].selectMode&&o.length){var l=o[0];if(l.name===s.default.devFlag&&(l=o[1]),l&&e.$plugin.selectSprite("click"===t.type||"touchend"===t.type,e,l))return}e.eHoldingFlag||"mousedown"!==a.type&&"touchstart"!==a.type?!e.eHoldingFlag||"mouseup"!==a.type&&"touchend"!==a.type?!e.eHoldingFlag||"mousemove"!==a.type&&"touchmove"!==a.type||(e.eHoldingFlag=t):(e.eHoldingFlag=!1,c.default.stop()):e.eHoldingFlag=t;for(var d=0;o.length>d;d++){if(("mousemove"===a.type||"touchmove"===a.type)&&e.eLastMouseHover&&e.eLastMouseHover!==o[d]&&o.indexOf(e.eLastMouseHover)===-1){var f=e.eLastMouseHover.events.mouseout||e.eLastMouseHover.events.touchout;f&&f.call(e.eLastMouseHover,a)}if("mousewheel"===a.type)c.default.wheel(o[d],a);else if(e.eHoldingFlag&&"touchmove"===a.type&&c.default.touch(o[d],a))return;if(o[d].events){var p=o[d].events[a.type];if(p){e.eLastMouseHover=o[d];var v=p.call(o[d],a);if(v===!0)return e.eHoldingFlag=!1,v;if("drag"===v)return e.eHoldingFlag=!1,v}if(o[d].events.through===!1)return}}if(!o.length&&e.eLastMouseHover){var g=e.eLastMouseHover.events.mouseout;g&&g.call(e.eLastMouseHover,a),e.eLastMouseHover=null}var y=e.events[a.type];if(y&&y.call(e,a))return e.eHoldingFlag=!1,!0}},function(t,e){"use strict";t.exports=function(t,e,n,r){if(0>e.sx&&e.sw){var i=-e.sx/e.sw;e.tx+=e.tw*i,e.sx=0}if(0>e.sy&&e.sh){var a=-e.sy/e.sh;e.ty+=e.th*a,e.sy=0}if(n&&e.sx+e.sw>n){var o=(e.sx+e.sw-n)/e.sw;e.sw-=e.sw*o,e.tw-=e.tw*o}if(r&&e.sy+e.sh>r){var s=(e.sy+e.sh-r)/e.sh;e.sh-=e.sh*s,e.th-=e.th*s}if(0>e.tx&&e.tw>-e.tx){var l=-e.tx/e.tw;e.sx+=e.sw*l,e.sw-=e.sw*l,e.tw=e.tw+e.tx,e.tx=0}if(0>e.ty&&e.th>-e.ty){var c=-e.ty/e.th;e.sy+=e.sh*c,e.sh-=e.sh*c,e.th=e.th+e.ty,e.ty=0}if(e.tx+e.tw>t.width&&e.tw){var u=(e.tx+e.tw-t.width)/e.tw;e.tw-=e.tw*u,e.sw-=e.sw*u}if(e.ty+e.th>t.height&&e.th){var d=(e.ty+e.th-t.height)/e.th;e.th-=e.th*d,e.sh-=e.sh*d}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(t,e,n){e&&e.filter(function(t){var e=a.default.funcOrValue(t.style.zIndex,t);return 0>n?0>e:e>=0}).sort(function(t,e){var n=a.default.funcOrValue(t.style.zIndex,t),r=a.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint.call(t,e,n)})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),o=n(2);r(o);t.exports=function(t,e){var n={};for(var r in t.content)n[r]=a.default.funcOrValue(t.content[r],t);"string"==typeof n.img&&(n.img=t.content.img=e.imgLoader(n.img));for(var i in t.style)n[i]=t.getStyle(i);if(t.inherit.forEach(function(e){n[e]=t.getStyle(e)}),n.sequence){var o=n.img,s=n.sequence;n.sequence.index=n.sequence.index||0;var l=n.sequence.index||0;0>l&&(l=0);var c=void 0,u=void 0;if(s.w||s.h){c=0>s.w?o.width/(0-s.w):s.w>0?s.w:o.width,u=0>s.h?o.height/(0-s.h):s.h>0?s.h:o.height;var d=Math.floor(o.width/c),f=Math.floor(o.height/u);n.sx=l%d*c,n.sy=Math.floor(l/d)%f*u}!s.loop&&l>0&&0===n.sx&&0===n.sy&&(n.img=void 0,s.onOver?s.onOver.call(t):t.remove()),n.sequence.lastTickTime=n.sequence.lastTickTime||0,e.$nextTickTime-n.sequence.lastTickTime<a.default.funcOrValue(n.sequence.interval,t)||(s.lastTickTime=e.$nextTickTime,n.sequence.index++,n.sequence.lastTickTime=e.$nextTickTime),n.sw=n.sw||c,n.sh=n.sh||u,n.tw=n.tw||c,n.th=n.th||u}return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),o=n(5),s=(r(o),n(2)),l=r(s),c=n(32),u=r(c),d=n(30),f=r(d),h=n(31),p=r(h),v=a.default.blend,g=function(t){var e=/[^\u4e00-\u9fa5]/;return!e.test(t)},y=function(){var t=this;this.$canvas.$extendList.forEach(function(e){e.onPaint&&e.onPaint.call(t)})};t.exports=function(t,e){if(t.$rendered=!1,a.default.funcOrValue(t.style.visible,t)===!1)return a.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes),void a.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes);a.default.execFuncs(t.hooks.beforeTick,t,t.$tickedTimes);var n=this;y.call(t);var r=(0,u.default)(t,n),i={globalAlpha:a.default.firstValuable(r.opacity,1)},o=r.text,s=r.img,c=a.default.funcOrValue(t.children,t),d=s?s.width||0:0,h=s?s.height||0:0;if(r.tw=r.tw||r.sw||d,r.th=r.th||r.sh||h,r.sw=r.sw||d,r.sh=r.sh||h,"lt"===r.locate||("ld"===r.locate?r.ty-=r.th:"rt"===r.locate?r.tx-=r.tw:"rd"===r.locate?(r.tx-=r.tw,r.ty-=r.th):(r.tx-=r.tw>>1,r.ty-=r.th>>1)),(r.fh||r.fv)&&(r.fh=r.fh||0,r.fv=r.fv||0,r.fx=r.fx||0,r.fy=r.fy||0,i.transform={fh:r.fh,fv:r.fv,fx:-(r.ty+(r.th>>1))*r.fv+r.fx,fy:-(r.tx+(r.tw>>1))*r.fh+r.fy}),r.blend&&(i.globalCompositeOperation="string"==typeof r.blend?r.blend:v[r.blend]),r.rotate){var m=a.default.firstValuable(r.rx,r.tx+.5*r.tw),$=a.default.firstValuable(r.ry,r.ty+.5*r.th);i.beforeRotate=[m,$],i.rotate=-r.rotate*Math.PI/180,i.rotate=+i.rotate.toFixed(4),i.afterRotate=[-m,-$]}if(1!==r.scale){var x=r.scale;r.tx-=(x-1)*r.tw>>1,r.ty-=(x-1)*r.th>>1,r.tw*=x,r.th*=x}if(r.mirrX?(i.translate=[n.width,0],i.scale=[-1,1],r.tx=n.width-r.tx-r.tw,r.mirrY&&(i.translate=[n.width,n.height],i.scale=[-1,-1],r.ty=n.height-r.ty-r.th)):r.mirrY&&(i.translate=[0,n.height],i.scale=[1,-1],r.ty=n.height-r.ty-r.th),"production"!==process.env.NODE_ENV&&d&&h&&r.sw&&r.sh){var w=r.tw*r.th/(r.sw*r.sh);t.$perf.paintRate&&t.$perf.paintRate>=w||(t.$perf.paintRate=w)}if(!r.rotate&&!o&&d&&s.src&&(0,f.default)(n,r,d,h),d>10&&h>10&&l.default.xywh.forEach(function(t){r[t]=Math.round(r[t])}),(0,p.default)(n,c,-1),s&&d&&0!==r.opacity&&r.sw&&r.sh&&(!s.src||r.tx>=0&&n.width>r.tx&&r.ty>=0&&n.height>r.ty)){t.$rendered=!0;var b={$id:t.$id,type:"img",settings:i,props:[s,r.sx,r.sy,r.sw,r.sh,r.tx,r.ty,r.tw,r.th]};"production"!==process.env.NODE_ENV&&(b.$origin=t),n.$children.push(b)}if(o){t.$rendered=!0;var E=r.tx,T=r.ty,O=r.align||r.textAlign||"left",k=r.textFont||"14px Arial",A=parseInt(k),_=r.lineHeight||A;if("center"===O?E+=r.tw/2:"right"===O&&(E+=r.tw),"top"===r.textVerticalAlign?T+=A+(_-A)/2:"bottom"===r.textVerticalAlign?T+=r.th-(_-A)/2:"middle"===r.textVerticalAlign&&(T+=r.th/2+A/2),"string"==typeof o||"number"==typeof o)n.$children.push({$id:t.$id,type:"text",settings:i,props:{tx:E,ty:T,content:o+"",align:O,font:k,color:r.color,type:r.textType}});else if(o.length)o.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:i,props:{tx:E+a.default.funcOrValue(e.tx,t),ty:T+a.default.funcOrValue(e.ty,t),content:a.default.funcOrValue(e.content,t),align:O,font:k,color:r.color,type:r.textType}})});else if("multline-text"===o.type){var F=o.text.split(/\t|\n/),S=[];F.forEach(function(t,e){t=String.prototype.trim.apply(t),o.config.start&&(t=t.replace(o.config.start,""));for(var n=0,i=r.tw;t.length&&t.length>n;)i>0||(i=r.tw,S.push(t.substr(0,n)),t=t.substr(n),n=0),n++,i-=A*(g(t[n])?1.05:.6);(t||e)&&S.push(t)}),S.forEach(function(e){n.$children.push({$id:t.$id,type:"text",settings:i,props:{tx:E,ty:T,content:e,align:O,font:k,color:r.color,type:r.textType}}),T+=_||A})}}s||o||(t.$rendered=void 0),(0,p.default)(n,c,1),a.default.execFuncs(t.hooks.ticked,t,++t.$tickedTimes)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(7),a=r(i),o=n(21),s=r(o);t.exports=function(t){var e=Date.now();s.default.$lastPaintTime=this.$nextTickTime=e,1e3>e-this.fpsCalculateTime||(this.fpsCalculateTime=e,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,a.default)(function(n){if(this.$rafTime=n,this.$rAFer(t),this.maxFps>0&&60>this.maxFps){if(1e3/this.maxFps>=e-this.$lastPaintTime)return;this.$lastPaintTime=e-(e-this.$lastPaintTime)%(1e3/this.maxFps)}else this.$lastPaintTime=Date.now();t()}.bind(this))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i),o=function(t,e){var n=this,r=!1;return this.$extendList.forEach(function(i){if(i.onRender){var a=i.onRender.call(n,t,e);a&&(r=a)}}),r},s=function(t,e){var n=this,r=t.props,i=!1;if("img"===t.type){var s=r[7]*r[8],l=n.$children;if(s>4e4)for(var c=l.length-1;c>e;c--){var u=l[c];if(!u.$cannotCover){var d=u.props;if(d&&d[0]){if(d[7]*d[8]>=s)if(d[0].$noAlpha){var f=u.settings;if(1!==f.globalAlpha||f.globalCompositeOperation||f.rotate)u.$cannotCover=!0;else if(a.default.pointInRect(r[5],r[6],d[5],d[5]+d[7],d[6],d[6]+d[8])&&a.default.pointInRect(r[5]+r[7],r[6]+r[8],d[5],d[5]+d[7],d[6],d[6]+d[8]))return"production"!==process.env.NODE_ENV&&(t.$origin.$useless=!0,n.$plugin.jumpRender(n,r)),void(i=!0)}else u.$cannotCover=!0}else u.$cannotCover=!0}}}"production"!==process.env.NODE_ENV&&t.$origin&&(t.$origin.$useless=!1);var h=t.settings||{};if(!o.call(n,t,h)){var p=!1,v=n.$paintContext;h.globalCompositeOperation&&(p||(v.save(),p=!0),v.globalCompositeOperation=h.globalCompositeOperation),1===h.globalAlpha||isNaN(h.globalAlpha)||(p||(v.save(),p=!0),v.globalAlpha=h.globalAlpha),h.translate&&(p||(v.save(),p=!0),v.translate(h.translate[0]||0,h.translate[1]||0)),h.rotate&&(p||(v.save(),p=!0),v.translate(h.beforeRotate[0]||0,h.beforeRotate[1]||0),v.rotate(h.rotate||0),v.translate(h.afterRotate[0]||0,h.afterRotate[1]||0)),h.scale&&(p||(v.save(),p=!0),v.scale(h.scale[0]||1,h.scale[1]||1)),h.transform&&(p||(v.save(),p=!0),v.transform(1,h.transform.fh,h.transform.fv,1,h.transform.fx,h.transform.fy)),"img"===t.type?(v.drawImage(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]),"production"!==process.env.NODE_ENV&&n.$plugin.drawImage(n,r)):"text"===t.type&&r.content&&(v.font=r.font,v.fillStyle=v.strokeStyle=r.color||"white",v.textAlign=r.align,v[r.type||"fillText"](r.content,r.tx,r.ty)),p&&v.restore()}};t.exports=function(){var t=this;t.$children.forEach(s.bind(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(37),a=r(i),o=n(42),s=r(o),l=n(45),c=r(l),u=n(39),d=r(u),f=n(38),h=r(f),p=n(40),v=r(p),g=n(14),y=r(g),m=n(13),$=r(m),x=n(15),w=r(x),b=n(11),E=r(b),T=n(12),O=r(T),k=n(41),A=r(k),_=n(43),F=r(_),S=n(44),V=r(S),N={start:c.default,paint:d.default,add:a.default,remove:s.default,register:A.default,clear:h.default,setFpsHandler:F.default,setMaxFps:V.default,pause:v.default,on:y.default,off:$.default,trigger:w.default,broadcast:E.default,nextTick:O.default};t.exports=N},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(8),a=r(i);t.exports=a.default.prototype.add},function(t,e){"use strict";t.exports=function(){this.children=[]}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(){if(!this.$pausing&&!document.hidden){var t=this;a.default.execFuncs(t.hooks.beforeTick,t,[t.$rafTime]),t.$paintContext.clearRect&&t.$paintContext.clearRect(0,0,this.width,this.height),t.$freezing||(t.$children=[],"production"!==process.env.NODE_ENV&&t.$plugin.timeCollect(t,"preprocessTimeSpend","START"),this.children.sort(function(t,e){var n=a.default.funcOrValue(t.style.zIndex,t),r=a.default.funcOrValue(e.style.zIndex,e);return n===r?0:n>r?1:-1}).forEach(function(e,n){t.$perPaint(e,n)}),"production"!==process.env.NODE_ENV&&t.$plugin.timeCollect(t,"preprocessTimeSpend","END")),"production"!==process.env.NODE_ENV&&t.$plugin.timeCollect(t,"paintTimeSpend","START"),t.$render(),"production"!==process.env.NODE_ENV&&t.$plugin.timeCollect(t,"paintTimeSpend","END"),this.fps++,a.default.execFuncs(t.hooks.ticked,t,[t.$rafTime]),t.hooks.nextTick&&(a.default.execFuncs(t.hooks.nextTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e){"use strict";t.exports=function(t){this.$pausing=void 0===t||t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(10),a=r(i),o=function(t){var e=this;this.$extendList.forEach(function(n){n.onCreate&&n.onCreate.call(e,t)})};t.exports=function(t,e){var n=this;"production"!==process.env.NODE_ENV&&(this.fpsHandler=this.fpsHandler||function(t){this.maxFps>0&&this.maxFps-5>t&&40>t&&console.warn("[Easycanvas] Low FPS detected ("+t+"/"+this.maxFps+").")});var r=e||{};t=this.$dom=t||this.$dom;for(var i in r)this[i]=r[i];this.name=r.name||t.id||t.classList[0]||"Unnamed",r.fullScreen&&"undefined"!=typeof document&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,
t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight),"production"!==process.env.NODE_ENV&&(r.width&&t.attributes.width&&r.width!==t.width||r.height&&t.attributes.height&&r.height!==t.height)&&console.warn('[Easycanvas] Canvas size mismatched in "register" function.'),t.width=this.width=this.width||r.width||t.width,t.height=this.height=this.height||r.height||t.height,"production"!==process.env.NODE_ENV&&this.$plugin.register(this),this.events=r.events||{},this.hooks=r.hooks||{};var s=["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"];return s.forEach(function(e){t.addEventListener(e,n.$eventHandler.bind(n))}),a.default.tick(),o.call(this,r),this.$paintContext=this.$paintContext||t.getContext("2d"),this}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=r(i);t.exports=function(t,e){var n=this;a.default.execFuncs(t.hooks.beforeRemove,t,t.$tickedTimes++),t.style.visible=!1,t.$removing=!0,setTimeout(function(){t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return t.$removing!==!0}):n.children=n.children.filter(function(t){return t.$removing!==!0}),t.$canvas&&(t.$canvas=void 0,t.$parent=void 0,t.$tickedTimes=void 0,t.$cache=void 0,t.$rendered=!1,"production"!==process.env.NODE_ENV&&(t.$perf=void 0),a.default.execFuncs(t.hooks.removed,t,t.$tickedTimes))}),e&&this.children.splice(this.children.indexOf(t),1)}},function(t,e){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e){"use strict";t.exports=function(){var t=this;return this.fpsCalculateTime=Date.now(),this.$rAFer(this.paint.bind(this)),setInterval(function(){if(t.eHoldingFlag){var e=t.eHoldingFlag;t.$eventHandler.call(t,{layerX:e.layerX,layerY:e.layerY,screenX:e.screenX||e.layerX,screenY:e.screenY||e.layerY,type:"hold"})}},40),this}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=(r(i),n(2)),o=r(a);t.exports=function(){if("production"!==process.env.NODE_ENV){var t="__EASYCANVAS_BRIDGE_TOPANEL__",e=function(e){e.tabId=window[o.default.devFlag].tabId,window.document.dispatchEvent(new CustomEvent(t,{detail:JSON.parse(JSON.stringify(e))}))};setTimeout(function(){e({name:"init"})});var n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2OYePb/fwAHrQNdl+exzgAAAABJRU5ErkJggg==",r=null,i=["paintArea","paintTimes","paintTimeSpend","preprocessTimeSpend","loadArea","jumpArea"],a={drawImage:function(t,e){window[o.default.devFlag].isPaintRecording&&(e&&(t.$perf.$paintArea+=e[7]*e[8],t.$perf.$loadArea+=e[3]*e[4]),t.$perf.$paintTimes++)},jumpRender:function(t,e){t.$perf.$jumpArea+=e[7]*e[8]},register:function(t){t.$id=Math.random().toString(36).substr(2),t.$perf={},i.forEach(function(e){t.$perf[e]=0,t.$perf["$"+e]=0}),setInterval(function(){i.forEach(function(e){t.$perf[e]=t.$perf["$"+e],t.$perf["$"+e]=0})},1e3),t.$flags.devtoolHanged||(window[o.default.devFlag].$canvas[t.$id]=t,t.$flags.devtoolHanged=!0)},timeCollect:function(t,e,n){t.$perf["$"+e]+=("START"===n||"PAUSE"===n?-1:1)*Date.now()},selectSprite:function(t,i,s){if(!s||!window[o.default.devFlag].selectMode)return a.cancelSelectSprite(i),!1;if(r||(r=i.add({name:o.default.devFlag,content:{img:i.imgLoader(n)},style:{},webgl:void 0})),["tx","ty","rotate","rx","ry","scale","tw","th","locate"].forEach(function(t){!function(t){r.style[t]=function(){return"tw"===t||"th"===t?s.getStyle(t)||s.getRect()[t]:s.getStyle(t)}}(t)}),r.webgl=s.webgl?{}:void 0){for(var l in s.webgl)!function(t){r.webgl[t]=function(){return"function"==typeof s.webgl[t]?s.webgl[t].call(s):s.webgl[t]}}(l);r.webgl.img=i.imgLoader(n),delete r.webgl.colors,r.webgl.opacity=1}return r.style.zIndex=Number.MAX_SAFE_INTEGER,r.style.visible=function(){return window[o.default.devFlag].selectMode},r.style.opacity=.8,t&&(i.remove(r),r=null,e({name:"selectSprite",id:i.$id,value:{sprite:s.$id,canvas:i.$id}}),window[o.default.devFlag].current={$sprite:s,$canvas:i},window[o.default.devFlag].selectMode=!1),!0},cancelSelectSprite:function(t){r&&(t.remove(r),r=null)}};return a}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(36),a=r(i),o=n(28),s=r(o),l=n(48),c=r(l),u=function(t){this.imgLoader=Easycanvas.imgLoader;for(var e in c.default)this[e]=this[e]||JSON.parse(JSON.stringify(c.default[e]));t&&(t.el||(t={el:t}),t.el&&this.register("string"==typeof t.el?document.querySelector(t.el):t.el,t))};u.prototype.$extendList=[];for(var d in s.default)Object.prototype.hasOwnProperty.call(s.default,d)&&(u.prototype[d]=s.default[d]);for(var f in a.default)Object.prototype.hasOwnProperty.call(a.default,f)&&(u.prototype[f]=a.default[f]);t.exports=u},function(t,e){"use strict";var n={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,name:"",fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,width:0,height:0,events:{click:null},children:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,scroll:{scrollable:!1,scrollY:0,minScrollY:void 0,maxScrollY:void 0},$flags:{dragging:!1}};t.exports=n},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(20),a=r(i),o=n(5),s=r(o);t.exports=function(t,e){var n=void 0;return(0,s.default)(t,function(t){return(0,a.default)(t,function(t){for(var r=t.width,i=t.height,a=t.getContext("2d").getImageData(0,0,r,i),o=a.data,s=o.length-1;s>=0;s-=4)if(e&&e.conversion){var l=e.conversion({r:o[s-3],g:o[s-2],b:o[s-1],a:o[s]},(s+1>>2)%r,Math.floor((s+1>>2)/r));o[s-3]=l.r,o[s-2]=l.g,o[s-1]=l.b,o[s-0]=l.a}t.getContext("2d").clearRect(0,0,r,i),t.getContext("2d").putImageData(a,0,0),n=t},{canvas:!0,cacheFlag:Math.random()})}),function(){return n}}},,function(t,e){"use strict";t.exports=function(t){var e=t.width,n=t.height,r=document.createElement("canvas");r.width=e,r.height=n;var i=r.getContext("2d");i.scale(1,-1),i.translate(0,-n),i.drawImage(t,0,0);var a=i.getImageData(0,0,e,n);return{canvas:i,img:a}}},function(t,e){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}}])});