(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-iconfont05" viewBox="0 0 1024 1024">'+""+'<path d="M884.133485 255.150144l-85.733617 0-159.635767 0 0-29.04757c0-39.084157-34.509978-77.376275-73.602322-77.376275l-106.323561 0c-39.093367 0-67.714218 38.292118-67.714218 77.376275l0 29.04757-159.635767 0-91.622744 0c-9.795087 0-17.720593 8.121981-17.720593 17.907858 0 9.785877 7.925507 17.907858 17.720593 17.907858l91.622744 0 0 466.756563c0 68.39881 52.634778 117.551276 121.026424 117.551276l318.971705 0c68.390623 0 126.913505-49.151443 126.913505-117.551276l0-466.756563 85.733617 0c9.795087 0 17.720593-8.121981 17.720593-17.907858C901.854079 263.271102 893.928572 255.150144 884.133485 255.150144zM426.939719 226.102574c0-19.546172 12.360516-41.560558 31.898501-41.560558l106.323561 0c19.537985 0 38.809911 22.014386 38.809911 41.560558l0 29.04757-177.031972 0L426.939719 226.102574zM763.607458 757.722424c0 48.852638-43.268456 81.735559-92.121094 81.735559l-318.971705 0c-48.853661 0-85.210707-32.881898-85.210707-81.735559l0-466.756563 123.82005 0 247.6401 0 124.843356 0L763.607458 757.722424z"  ></path>'+""+'<path d="M514.944052 385.587915c-9.795087 0-17.396205 7.934716-17.396205 17.720593l0 301.251112c0 9.785877 7.601118 17.720593 17.396205 17.720593s17.396205-7.934716 17.396205-17.720593l0-301.251112C532.340257 393.522632 524.738116 385.587915 514.944052 385.587915z"  ></path>'+""+'<path d="M373.216143 421.030126c-9.795087 0-17.907858 7.934716-17.907858 17.720593L355.308285 669.119457c0 9.785877 8.112772 17.720593 17.907858 17.720593s17.907858-7.934716 17.907858-17.720593l0-230.368738C391.124002 428.963819 383.010207 421.030126 373.216143 421.030126z"  ></path>'+""+'<path d="M621.367897 438.750719 621.367897 669.119457c0 9.785877 8.112772 17.720593 17.907858 17.720593s17.907858-7.934716 17.907858-17.720593l0-230.368738c0-9.785877-8.112772-17.720593-17.907858-17.720593S621.367897 428.963819 621.367897 438.750719z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)