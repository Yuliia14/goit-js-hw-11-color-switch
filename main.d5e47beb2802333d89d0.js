(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{KbT4:function(t,e,c){},QfWi:function(t,e,c){"use strict";c.r(e);c("KbT4");var n=document.querySelector('[data-action="start"]'),i=document.querySelector('[data-action="stop"]'),a=document.body,s=null,o=!1,r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];function d(){o?console.log("запущен уже"):s=setInterval((function(){n.removeEventListener("click",d),o=!0,n.classList.remove("is-active"),i.classList.add("is-active"),a.style.background=r[l(0,r.length-1)]}),1e3)}n.addEventListener("click",d),n.classList.add("is-active"),i.addEventListener("click",(function(){clearInterval(s),o=!1,n.addEventListener("click",d),n.classList.add("is-active"),i.classList.remove("is-active")}));var l=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.d5e47beb2802333d89d0.js.map