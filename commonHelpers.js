import{f as m,i as f}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelector("#datatime-picker"),a=document.querySelector("[data-start]");a.disabled=!0;let u;const y={title:"Error",message:"Please choose a date in the future!",messageColor:"white",backgroundColor:"#EF4040",iconUrl:imageUrl,position:"topRight",theme:"dark"},c={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){const r=Date.now(),n=o[0].getTime();n-r>0?a.disabled=!1:(f.error(y),a.disabled=!0),u=n}};m(h,p);a.addEventListener("click",g);function g(o){a.disabled=!0,inputElem.disabled=!0;const r=Date.now(),n=setInterval(()=>{const i=Date.now(),{days:e,hours:t,minutes:s,seconds:d}=b(u-i);c.days.textContent=addZero(e),c.hours.textContent=addZero(t),c.minutes.textContent=addZero(s),c.seconds.textContent=addZero(d)},1e3);setTimeout(()=>{clearInterval(n),inputElem.disabled=!1},u-r)}function b(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),d=Math.floor(o%864e5%36e5/6e4),l=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:d,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
