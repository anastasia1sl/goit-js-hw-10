import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as y}from"./assets/vendor-77e16229.js";const n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]"),i=document.querySelector("#datetime-picker");let l=null;n.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);const e=new Date;t[0]<e?y.error({title:"Error",message:"Please choose a date in the future",position:"center"}):(n.disabled=!1,l=t[0],n.addEventListener("click",E))}};f(i,C);function E(){const t=setInterval(()=>{const e=Date.now(),s=l-e;s<1e3&&clearInterval(t);const{days:u,hours:d,minutes:c,seconds:a}=r(s);S.textContent=u,p.textContent=d,g.textContent=c,q.textContent=a},1e3);n.disabled=!0,i.disabled=!0}function r(t){const c=o(Math.floor(t/864e5)),a=o(Math.floor(t%864e5/36e5)),m=o(Math.floor(t%864e5%36e5/6e4)),h=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:a,minutes:m,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map