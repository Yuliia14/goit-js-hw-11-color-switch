(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{KbT4:function(t,e,c){},QfWi:function(t,e,c){"use strict";c.r(e);c("KbT4");var i=document.querySelector('[data-action="start"]'),n=document.querySelector('[data-action="stop"]'),a=document.body,s=null,o=!1,r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];function d(){o||(s=setInterval((function(){i.removeEventListener("click",d),o=!0,i.classList.remove("is-active"),n.classList.add("is-active"),a.style.background=r[l(0,r.length-1)]}),1e3))}i.addEventListener("click",d),i.classList.add("is-active"),n.addEventListener("click",(function(){clearInterval(s),o=!1,i.addEventListener("click",d),i.classList.add("is-active"),n.classList.remove("is-active")}));var l=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.f7c63e9e6c1e699bad3b.js.map