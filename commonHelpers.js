import{i as f}from"./assets/bi_exclamation-triangle-a8c16d1c.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const d=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;let u;const S={title:"Error",message:"Please choose a date in the future!",messageColor:"white",backgroundColor:"#EF4040",iconUrl:f,position:"topRight",theme:"dark"},s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=Date.now(),e=t[0].getTime();e-n>0?o.disabled=!1:(p.error(S),o.disabled=!0),u=e}};y(d,b);o.addEventListener("click",C);function C(t){o.disabled=!0,d.disabled=!0;const n=Date.now(),e=setInterval(()=>{const l=Date.now(),{days:m,hours:a,minutes:i,seconds:c}=g(u-l);s.days.textContent=r(m),s.hours.textContent=r(a),s.minutes.textContent=r(i),s.seconds.textContent=r(c)},1e3);setTimeout(()=>{clearInterval(e),d.disabled=!1},u-n)}function g(t){const a=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:h}}function r(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map