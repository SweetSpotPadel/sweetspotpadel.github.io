if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>n(e,c),f={module:{uri:c},exports:o,require:d};i[c]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.89c2b158.css",revision:null},{url:"assets/index.fb56edd2.js",revision:null},{url:"index.html",revision:"576dd72fdfd1f104a50a9adb1ca16642"},{url:"favicon.ico",revision:"3054273ecd703fd86b475825eae2c2bf"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"apple-touch-icon.png",revision:"2c310f31e419552d5873d9ad7a5613df"},{url:"android-chrome-192x192.png",revision:"654dfe3376b68fec0528e1ef34d1e970"},{url:"android-chrome-512x512.png",revision:"82f26047c34826fcfb96f36bccafab5c"},{url:"android-chrome-maskable-512x512.png",revision:"82f26047c34826fcfb96f36bccafab5c"},{url:"manifest.webmanifest",revision:"3c6c564b2abd085968d03a02eb38a4b8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
